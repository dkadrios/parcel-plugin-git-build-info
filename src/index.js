const { execFileSync } = require('child_process')
const path = require('path')

module.exports = () => {
  const packagePath = path.join(process.cwd(), 'package.json')
  const packageJson = require(packagePath)
  const rev = execFileSync('git', ['rev-parse', '--short', 'HEAD'])
    .toString()
    .trim()

  process.env.BUILD_VERSION = rev
  process.env.BUILD_DATE = new Date().toISOString()
  process.env.PACKAGE_VERSION = packageJson.version
}
