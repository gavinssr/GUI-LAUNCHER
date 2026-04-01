import fs from "node:fs"
import path from "node:path"
import process from "node:process"

const engineeringRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..")
const governanceRoot = path.resolve(engineeringRoot, "..")
const ignoredDirectoryNames = new Set(["node_modules", ".next", ".git", "dist"])

function read(filePath) {
  return fs.readFileSync(filePath, "utf8")
}

function exists(filePath) {
  return fs.existsSync(filePath)
}

function fail(message) {
  console.error(`ERROR: ${message}`)
  process.exit(1)
}

function pass(message) {
  console.log(`OK: ${message}`)
}

function listFiles(dirPath, predicate = () => true) {
  if (!exists(dirPath)) return []
  const entries = fs.readdirSync(dirPath, { withFileTypes: true })
  const results = []

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name)
    if (entry.isDirectory()) {
      if (ignoredDirectoryNames.has(entry.name)) continue
      results.push(...listFiles(fullPath, predicate))
      continue
    }
    if (predicate(fullPath)) results.push(fullPath)
  }

  return results
}

function relativeToEngineering(filePath) {
  return path.relative(engineeringRoot, filePath)
}

function isCodeFile(filePath) {
  return /\.(tsx|ts|jsx|js|mjs|cjs)$/.test(filePath)
}

function runPrimitivePreviewSync() {
  const primitiveDir = path.join(engineeringRoot, "ai-agent-design-system/components/ui")
  const registryPath = path.join(engineeringRoot, "ai-agent-design-system/app/primitive-preview/registry.tsx")
  const primitiveFiles = listFiles(primitiveDir, (filePath) => filePath.endsWith(".tsx"))
  const primitiveIds = primitiveFiles.map((filePath) => path.basename(filePath, ".tsx")).sort()
  const registryText = read(registryPath)
  const coveredPrimitiveIds = [
    ...registryText.matchAll(/primitiveIds:\s*\[([\s\S]*?)\]/g),
  ]
    .flatMap((match) => [...match[1].matchAll(/"([^"]+)"/g)].map((idMatch) => idMatch[1]))
    .sort()

  const missingPreview = primitiveIds.filter((id) => !coveredPrimitiveIds.includes(id))
  const stalePreview = coveredPrimitiveIds.filter((id) => !primitiveIds.includes(id))

  if (missingPreview.length || stalePreview.length) {
    fail(
      [
        missingPreview.length
          ? `missing primitive preview coverage: ${missingPreview.join(", ")}`
          : "",
        stalePreview.length
          ? `stale primitive preview coverage: ${stalePreview.join(", ")}`
          : "",
      ]
        .filter(Boolean)
        .join(" | "),
    )
  }

  pass("primitive preview coverage matches components/ui")
}

function runPrimitivePreviewBoundary() {
  const previewDir = path.join(engineeringRoot, "ai-agent-design-system/app/primitive-preview")
  const scanRoots = [
    path.join(engineeringRoot, "projects"),
    path.join(engineeringRoot, "ai-agent-design-system"),
  ]
  const forbiddenPatterns = [
    {
      label: "primitive-preview/_internal",
      regex: /["'`][^"'`]*primitive-preview\/_internal\/[^"'`]*["'`]/,
    },
    {
      label: "primitive-preview/_shadcn",
      regex: /["'`][^"'`]*primitive-preview\/_shadcn\/[^"'`]*["'`]/,
    },
    {
      label: "primitive-preview/preview.css",
      regex: /["'`][^"'`]*primitive-preview\/preview\.css["'`]/,
    },
  ]
  const targetFiles = scanRoots.flatMap((rootPath) =>
    listFiles(rootPath, (filePath) => {
      if (!isCodeFile(filePath)) return false
      return !filePath.startsWith(`${previewDir}${path.sep}`)
    }),
  )
  const issues = []

  for (const filePath of targetFiles) {
    const text = read(filePath)

    for (const pattern of forbiddenPatterns) {
      if (pattern.regex.test(text)) {
        issues.push(`${relativeToEngineering(filePath)} imports preview-private asset '${pattern.label}'`)
      }
    }
  }

  if (issues.length) {
    fail(issues.join(" | "))
  }

  pass("preview-private stage assets stay inside app/primitive-preview")
}

function runRegistryConsistency() {
  const registryJsonPath = path.join(engineeringRoot, "ai-agent-design-system/registry.json")
  const componentsJsonPath = path.join(engineeringRoot, "ai-agent-design-system/components.json")
  const publicRegistryPath = path.join(engineeringRoot, "ai-agent-design-system/public/r/registry.json")
  const registry = JSON.parse(read(registryJsonPath))
  const components = JSON.parse(read(componentsJsonPath))
  const url = components.registries?.["@fql"]

  if (registry.homepage !== "http://localhost:3001") {
    fail(`registry homepage must be http://localhost:3001, got ${registry.homepage}`)
  }

  if (url !== "http://localhost:3001/r/{name}.json") {
    fail(`components registry url must use port 3001, got ${url}`)
  }

  if (!exists(publicRegistryPath)) {
    fail("public/r/registry.json is missing")
  }

  for (const item of registry.items ?? []) {
    const itemPath = path.join(engineeringRoot, `ai-agent-design-system/public/r/${item.name}.json`)
    if (!exists(itemPath)) {
      fail(`missing public registry item: ${relativeToEngineering(itemPath)}`)
    }

    for (const file of item.files ?? []) {
      const sourcePath = path.join(engineeringRoot, "ai-agent-design-system", file.path)
      if (!exists(sourcePath)) {
        fail(`missing registry source file: ${relativeToEngineering(sourcePath)}`)
      }
    }
  }

  pass("registry definitions, public output, and 3001 contract are consistent")
}

function runConsumerBoundary() {
  const projectsDir = path.join(engineeringRoot, "projects")
  const forbiddenDirs = listFiles(projectsDir, () => false)
  void forbiddenDirs

  const localUiDirs = [
    path.join(projectsDir, "project-1/components/ui"),
    path.join(projectsDir, "project-1/components/fql"),
  ].filter(exists)

  if (localUiDirs.length) {
    fail(`consumer project must not define shared component directories: ${localUiDirs.map(relativeToEngineering).join(", ")}`)
  }

  pass("consumer project has no local shared ui/fql directories")
}

function runTokenUsage() {
  const targetFiles = listFiles(path.join(engineeringRoot, "projects"), (filePath) =>
    /\.(tsx|ts|jsx|js)$/.test(filePath),
  )
  const issues = []

  for (const filePath of targetFiles) {
    const text = read(filePath)
    if (/#[0-9a-fA-F]{3,8}\b/.test(text)) issues.push(`${relativeToEngineering(filePath)} contains hardcoded hex color`)
    if (/\bboxShadow\b/.test(text)) issues.push(`${relativeToEngineering(filePath)} contains boxShadow`)
    if (/\bborderRadius\b/.test(text)) issues.push(`${relativeToEngineering(filePath)} contains borderRadius`)
    if (/shadow-\[[^\]]+\]/.test(text)) issues.push(`${relativeToEngineering(filePath)} contains arbitrary shadow utility`)
    if (/rounded-\[[^\]]+\]/.test(text)) issues.push(`${relativeToEngineering(filePath)} contains arbitrary radius utility`)
  }

  if (issues.length) {
    fail(issues.join(" | "))
  }

  pass("consumer files do not hardcode forbidden token values")
}

function runDocsIntegrity() {
  const requiredDocs = [
    "docs/index.md",
    "docs/architecture/monorepo.md",
    "docs/architecture/layering.md",
    "docs/architecture/registry.md",
    "docs/harness/agent-workflow.md",
    "docs/harness/verification-matrix.md",
    "docs/harness/promotion-policy.md",
    "docs/harness/cloud-agent.md",
    "docs/harness/artifacts.md",
    "docs/harness/effectiveness.md",
    "docs/harness/templates/verifier.md",
    "docs/harness/templates/reviewer.md",
    "docs/harness/templates/gardener.md",
    "docs/harness/templates/writeback-session-log.md",
    "docs/harness/templates/writeback-breakpoint.md",
    "docs/harness/templates/writeback-changelog.md",
    "docs/harness/templates/writeback-exec-plan.md",
    "docs/harness/templates/writeback-promotion-review.md",
    "docs/harness/templates/writeback-adr.md",
    "docs/runbooks/local-dev.md",
    "docs/runbooks/registry.md",
    "docs/runbooks/consumer-acceptance.md",
    "docs/runbooks/doc-gardening.md",
    "docs/runbooks/writeback.md",
    "docs/exec-plans/active/README.md",
    "docs/exec-plans/completed/README.md",
    "docs/adr/README.md",
    "docs/reviews/promotion/README.md",
    "docs/reviews/promotion/2026-03-28-phase-5-baseline.md",
  ]

  const missing = requiredDocs.filter((docPath) => !exists(path.join(engineeringRoot, docPath)))
  if (missing.length) {
    fail(`missing docs: ${missing.join(", ")}`)
  }

  pass("required engineering docs exist")
}

function runGovernanceConsistency() {
  const rootAgentsPath = path.join(governanceRoot, "AGENTS.md")
  const breakpointPath = path.join(governanceRoot, "governance/schedule/breakpoint.md")
  const workflowPath = path.join(governanceRoot, ".github/workflows/harness-verify.yml")
  const prTemplatePath = path.join(governanceRoot, ".github/pull_request_template.md")
  const oldFiles = [
    "manage-blueprint.md",
    "manage-milestone.md",
    "manage-process.md",
    "manage-schedule.md",
  ]

  const rootAgents = read(rootAgentsPath)
  if (!rootAgents.includes("governance/README.md") || !rootAgents.includes("governance/schedule/breakpoint.md")) {
    fail("root AGENTS.md does not point to governance source of truth")
  }

  if (!exists(breakpointPath)) {
    fail("governance breakpoint is missing")
  }

  if (!exists(workflowPath)) {
    fail("root GitHub workflow for harness verify is missing")
  }

  if (!exists(prTemplatePath)) {
    fail("root pull request template is missing")
  }

  const workflowText = read(workflowPath)
  if (!workflowText.includes("FQL-GUI-Launcher") || !workflowText.includes("pnpm run harness:verify")) {
    fail("root GitHub workflow does not target FQL-GUI-Launcher harness verify")
  }

  for (const fileName of oldFiles) {
    const filePath = path.join(governanceRoot, fileName)
    const text = read(filePath)
    if (!text.includes("Deprecated:") || !text.includes("governance/")) {
      fail(`${fileName} is not a valid governance redirect shell`)
    }
  }

  pass("governance source of truth and redirect shells are consistent")
}

function runArtifactPresence() {
  const targets = process.argv.slice(3)
  if (!targets.length) {
    fail("artifact-presence requires one or more relative paths as arguments")
  }

  const missing = targets.filter((target) => !exists(path.join(engineeringRoot, target)))
  if (missing.length) {
    fail(`missing artifact paths: ${missing.join(", ")}`)
  }

  pass("all requested artifact paths are present")
}

function runPortContract() {
  const designSystemPackagePath = path.join(engineeringRoot, "ai-agent-design-system/package.json")
  const registryDocPath = path.join(engineeringRoot, "docs/architecture/registry.md")
  const localDevDocPath = path.join(engineeringRoot, "docs/runbooks/local-dev.md")
  const packageJson = JSON.parse(read(designSystemPackagePath))
  const devScript = packageJson.scripts?.dev
  const startScript = packageJson.scripts?.start

  if (devScript !== "next dev -p 3001") {
    fail(`design-system dev script must be 'next dev -p 3001', got '${devScript}'`)
  }

  if (startScript !== "next start -p 3001") {
    fail(`design-system start script must be 'next start -p 3001', got '${startScript}'`)
  }

  for (const docPath of [registryDocPath, localDevDocPath]) {
    if (!read(docPath).includes("3001")) {
      fail(`${relativeToEngineering(docPath)} does not document the 3001 contract`)
    }
  }

  pass("3001 port contract is wired into scripts and docs")
}

const command = process.argv[2]
const commands = {
  "primitive-preview-sync": runPrimitivePreviewSync,
  "primitive-preview-boundary": runPrimitivePreviewBoundary,
  "registry-consistency": runRegistryConsistency,
  "consumer-boundary": runConsumerBoundary,
  "token-usage": runTokenUsage,
  "docs-integrity": runDocsIntegrity,
  "governance-consistency": runGovernanceConsistency,
  "artifact-presence": runArtifactPresence,
  "port-contract": runPortContract,
}

if (!command || !commands[command]) {
  fail(`unknown command '${command ?? ""}'`)
}

commands[command]()
