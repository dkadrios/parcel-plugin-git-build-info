# parcel-plugin-git-build-info

Parcel plugin that stores build information as environment variables for use within your project, either during development or in a production build.

## Install

```bash
# yarn
yarn add -D parcel-plugin-git-build-info

# or npm
npm i -D parcel-plugin-git-build-info
```

## Usage

This plugin places build information into environment variables.

| Environment Variable | Description                                                                            |
| -------------------- | -------------------------------------------------------------------------------------- |
| BUILD_DATE           | ISO Date representing when the build was created, in the form YYYY-MM-DDTHH:mm:ss.sssZ |
| BUILD_VERSION        | Current git rev of HEAD. Equivalent to running `git rev-parse --short HEAD`            |
| PACKAGE_VERSION      | Version number from `package.json` at the time of the build                            |

### Example

```javascript
console.log(
  'Build info:',
  new Date(process.env.BUILD_DATE),
  process.env.BUILD_VERSION,
  process.env.PACKAGE_VERSION,
)
```
