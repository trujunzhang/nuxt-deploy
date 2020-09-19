
const path = require('path')
const fs = require('fs')

const appRelatedPath= process.argv[2];

// file path
const rootDir = path.resolve(__dirname, '../')
const appDist= path.resolve(rootDir, appRelatedPath)
const tsFileDist = path.resolve(appDist, './src/rootEnv.ts')

// console.log("pwdToJson path(json): " ,rootDir)
// console.log("pwdToJson path(appRelatedPath): " ,appRelatedPath)
console.log("pwdToJson path(tsFileDist): " ,tsFileDist)

const outString =  `export const sketchAppResourceRoot = '${appDist}' `
fs.writeFileSync(tsFileDist, outString);

