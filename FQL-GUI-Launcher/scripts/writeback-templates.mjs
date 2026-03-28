import fs from "node:fs"
import path from "node:path"
import process from "node:process"

const engineeringRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..")

const templateRegistry = {
  "session-log": {
    path: "docs/harness/templates/writeback-session-log.md",
    requiredMarkers: [
      "## 日期",
      "## 本轮目标",
      "## 本轮产出",
      "- changed files：",
      "- package scope：",
      "- promotion candidate：",
      "- 风险/阻塞：",
      "- 下一步（P0）：",
      "- 下一步（P1）：",
    ],
  },
  breakpoint: {
    path: "docs/harness/templates/writeback-breakpoint.md",
    requiredMarkers: [
      "## 当前阶段",
      "## 当前断点",
      "## 下一步",
      "### P0",
      "### P1",
      "## 风险 / 依赖",
    ],
  },
  changelog: {
    path: "docs/harness/templates/writeback-changelog.md",
    requiredMarkers: [
      "## 日期",
      "- 变更类型：",
      "- 影响阶段：",
      "- 变更说明：",
      "- 证据：",
      "- 对后续计划影响：",
    ],
  },
  "exec-plan": {
    path: "docs/harness/templates/writeback-exec-plan.md",
    requiredMarkers: [
      "## Summary",
      "- target package:",
      "- task layer:",
      "- inputs / evidence:",
      "- invariants:",
      "- verification steps:",
      "- artifacts:",
      "- promotion candidate:",
      "- write-back targets:",
    ],
  },
  "promotion-review": {
    path: "docs/harness/templates/writeback-promotion-review.md",
    requiredMarkers: [
      "## Candidate Scope",
      "## Evidence",
      "## Decision",
      "## Rationale",
      "## Owner",
      "## Next Review Trigger",
    ],
  },
  adr: {
    path: "docs/harness/templates/writeback-adr.md",
    requiredMarkers: [
      "## Status",
      "## Context",
      "## Decision",
      "## Consequences",
      "## Evidence",
    ],
  },
}

function fail(message) {
  console.error(`ERROR: ${message}`)
  process.exit(1)
}

function pass(message) {
  console.log(`OK: ${message}`)
}

function read(filePath) {
  return fs.readFileSync(filePath, "utf8")
}

function write(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, content)
}

function resolveTemplate(kind) {
  const entry = templateRegistry[kind]
  if (!entry) {
    fail(`unknown template kind '${kind}'`)
  }
  return {
    ...entry,
    absolutePath: path.join(engineeringRoot, entry.path),
  }
}

function validateContent(kind, targetPath, text) {
  const { requiredMarkers } = resolveTemplate(kind)
  const missingMarkers = requiredMarkers.filter((marker) => !text.includes(marker))
  if (missingMarkers.length) {
    fail(`${targetPath} is missing markers: ${missingMarkers.join(", ")}`)
  }
}

function parseArgs(argv) {
  const positional = []
  let output = null

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index]
    if (token === "--") {
      continue
    }
    if (token === "--output") {
      output = argv[index + 1]
      index += 1
      continue
    }
    positional.push(token)
  }

  return { positional, output }
}

function runGenerate(args) {
  const { positional, output } = parseArgs(args)
  const kind = positional[0]
  if (!kind) fail("generate requires a template kind")

  const { absolutePath } = resolveTemplate(kind)
  const content = read(absolutePath)

  if (!output) {
    process.stdout.write(content)
    return
  }

  const outputPath = path.isAbsolute(output) ? output : path.join(engineeringRoot, output)
  write(outputPath, content)
  pass(`generated ${kind} template at ${path.relative(engineeringRoot, outputPath)}`)
}

function runValidate(args) {
  const { positional } = parseArgs(args)
  const [kind, target] = positional
  if (!kind || !target) {
    fail("validate requires '<kind> <path>'")
  }

  const targetPath = path.isAbsolute(target) ? target : path.join(engineeringRoot, target)
  if (!fs.existsSync(targetPath)) {
    fail(`target file does not exist: ${target}`)
  }

  validateContent(kind, target, read(targetPath))
  pass(`${target} matches ${kind} writeback template requirements`)
}

function runValidateBuiltin() {
  for (const kind of Object.keys(templateRegistry)) {
    const { path: templatePath, absolutePath } = resolveTemplate(kind)
    validateContent(kind, templatePath, read(absolutePath))
  }
  pass("builtin writeback templates include all required fields")
}

const command = process.argv[2]
const args = process.argv.slice(3)

if (command === "generate") {
  runGenerate(args)
} else if (command === "validate") {
  runValidate(args)
} else if (command === "validate-builtin") {
  runValidateBuiltin()
} else {
  fail(`unknown command '${command ?? ""}'`)
}
