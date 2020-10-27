const Bundler = require('parcel-bundler')
const gitBuildInfoPlugin = require('../src/index')
const path = require('path')
const fs = require('fs')

it('should place build info into the output', async () => {
  const bundler = new Bundler(path.join(__dirname, './file.js'), {
    outDir: path.join(__dirname, 'dist'),
    production: true,
    cache: false,
    watch: false,
    sourceMaps: false,
  })
  gitBuildInfoPlugin(bundler)

  const bundle = await bundler.bundle()
  const outputContent = fs.readFileSync(bundle.name, { encoding: 'utf8' })
  const packageJson = require('../package.json')

  expect(outputContent).toMatch(
    new RegExp(
      `var .="${process.env.BUILD_VERSION}",.="${process.env.BUILD_DATE}",.="${process.env.PACKAGE_VERSION}"`,
    ),
  )
})
