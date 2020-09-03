[![npm](https://img.shields.io/npm/dw/fitbit-weather-types.svg?logo=npm&label=npm%20version)](https://www.npmjs.com/package/fitbit-weather-types)

# Introduction
This package include Types definitions to use [fitbit-weather](https://github.com/gregoiresage/fitbit-weather) with TypeScript.

# Installation
## 1. Install the module
You could use a any package manager to install this module. It was tested with npm and pnpm.
```sh
npm install fitbit-weather-types --save-dev
```
## 2. Include types in your projects
Update the `tsconfig.json` inside the app folder. Add `"../node_modules/fitbit-weather-types/types"`  to paths to include.
```json
{
 "extends": "../tsconfig.json",
 "include": [
  "**/*.ts",
  "../node_modules/fitbit-sdk-types/types/device",
  "../node_modules/fitbit-weather-types/types"
 ]
}
```

Update the `tsconfig.json` inside the companion folder. Add `"../node_modules/fitbit-weather-types/types"` to paths to include.
```json
{
 "extends": "../tsconfig.json",
 "include": [
  "**/*.ts",
  "../node_modules/fitbit-sdk-types/types/companion",
  "../node_modules/fitbit-weather-types/types",
 ]
}
```