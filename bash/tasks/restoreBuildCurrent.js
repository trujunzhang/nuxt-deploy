const cint = require('cint');
const path = require('path');
const fs = require('fs')

// process.argv.forEach(function (val, index, array) {
// console.log(index + ': ' + val);
// });

const pkgFile = process.argv[2];

// console.log("restore build.current:", pkgFile)

// const readPackageFile = cint.partialAt(fs.readFileAsync, 1, 'utf8');
// const writePackageFile = fs.writeFileAsync;

function resetScripts(scripts) {
    const keys = Object.keys(scripts)
    if (keys.indexOf('build.current') !== -1) {
        const buildCurrent = scripts['build.current']
        delete scripts['build.current']
        scripts['build.current.pending'] = buildCurrent
    }
    return scripts
}

function resetAllPending(obj) {
    // if(!!obj.scripts){
    const nextScripts = resetScripts(obj.scripts)
    obj.scripts = nextScripts
    // }
    return obj
}

try{
var obj = JSON.parse(fs.readFileSync(pkgFile, 'utf8'));
const resetObj = resetAllPending(obj)
const content = JSON.stringify(resetObj, null, 4)

fs.writeFileSync(pkgFile, content);
} catch(e){
console.log("??? restore build.current:", pkgFile)
// throw e
}

// console.log("restore build.current:", content)

// const result = readPackageFile(pkgFile);
