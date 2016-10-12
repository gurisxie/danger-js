// @flow

var program = require("commander")

import { getCISourceForEnv } from "../ci_source/ci_source_selector"

program
  .option("-h, --head [commitish]", "TODO: Set the head commitish")
  .option("-b, --base [commitish]", "TODO: Set the base commitish")
  .option("-f, --fail-on-errors", "TODO: Fail on errors")
  .parse(process.argv)

let source = getCISourceForEnv(process.env)
if (source) {
  console.log("OK?")
  console.log(source.isCI)
  console.log("Is PR?")
  console.log(source.isPR)
} else {
  console.log("Could not find a CI source for this run")
  process.exit(0)
}