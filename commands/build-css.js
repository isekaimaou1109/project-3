#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const { Transform } = require('stream');
const e = require('express');

const regex = /\w{1}\:\/([a-zA-Z-]+\/*)+/g;

// yargs(hideBin(process.argv))
//   .command('build', 'start the server', (yargs) => {
//     yargs
//       .command('css', chalk.bgMagenta('Description: command to build css'), (yargsChild) => {
//         yargsChild
//           .option('source', {
//             alias: 's',
//             description: 'Css source directory to be compiled',
//             demandOption: true,
//             default: null,
//             type: 'string'
//           })
//           .option('destination', {
//             alias: 'd',
//             description: 'The directory should be stored',
//             demandOption: true,
//             default: null,
//             type: 'string'
//           })
//         }, function(argvChild) {
//           try {
//             if(argvChild.source.match(regex).length && argvChild.destination.match(regex).length) {
              
//               console.log(chalk.green('Successfully compiled!!'));
//             }
//           } catch(e) {
//             console.log(chalk.red('Not yet successfully compiled!!'));
//             console.log(chalk.red('Error need to be fixed'));
//           }
//         })
//   })
//   .option('verbose', {
//     alias: 'v',
//     type: 'boolean',
//     description: 'Verbose for easily understand'
//   })
//   .option('help', {
//     alias: 'h',
//     type: 'boolean',
//     description: 'Need help command'
//   })
//   .argv;

// console.log(path.relative(__dirname, `${__dirname.split('\\commands').join('')}\\assets\\css`))

const srcStaticPath = path.relative(__dirname, `${__dirname.split('\\commands').join('')}\\assets\\css`);
console.log(srcStaticPath)
const dstStaticPath = path.relative(__dirname, `${__dirname.split('\\commands').join('')}\\public\\css`);

const files = fs.readdirSync(srcStaticPath);
console.log(files)
const transformed = new Transform({
  transform: function(chunk, encoding, callback) {
    const newData = chunk.toString().replace(/\s/g, "");
    this.push(newData);
  }
})

var i = 0;

async function fileSession(filesArray = []) {
  for (let file in filesArray) {
    var fullPath = srcStaticPath + `\\${filesArray[file]}`;

    var branchFunc = async () => {
      return new Promise(function(resolve) {
        resolve(fullPath);
      })
    };


    await branchFunc().then(async (value) => {
      i++;

      await fs.createReadStream(value)
        .pipe(transformed)
        .pipe(fs.createWriteStream(dstStaticPath + `\\${i}.css`));
    });
  }
}

fileSession(files);



