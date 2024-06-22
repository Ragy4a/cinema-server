// const getSumm2 = require('./source.js')

// console.log(getSumm2(35, 35))

const fs = require('fs');
const path = require('path');
const os = require('os');
const http = require('http');

const pathToCatalog = './src/test/test-1';
const pathToTextFile = './src/test/tex568t';
const pathToAudioFile = './src/test/holy_diver.mp3';
// Module FileSystem
// function checkTestCatalog () {
//     fs.existsSync(pathToCatalog)
//         ? console.log('Catalog exist!')
//         : console.log('Catalog not exist!');
// };

// checkTestCatalog();

// function checkTestFile () {
//     fs.existsSync(pathToAudioFile)
//         ? console.log('File exist!')
//         : console.log('File not exist!');
// };

// checkTestFile();

// const getFileInfo = () => fs.statSync(pathToAudioFile);
// console.log(getFileInfo().size)

// Get All From Catalog
// const getAllFromCatalog = () => fs.readdirSync(pathToCatalog);
// console.log(getAllFromCatalog());

// Get info about file
// const readFile = () => fs.readFile(pathToAudioFile, 'utf8', (err, data) => {
//     if (err) throw new Error(err.message);
//     console.log(data);
// });
// console.log(readFile())
// Write File
// fs.writeFileSync(pathToTextFile, '')
// fs.appendFileSync(pathToTextFile, 'I like node js', 'utf8')
// fs.unlinkSync(pathToTextFile)
// fs.rmdirSync(pathToCatalog)

// console.log(path.basename(pathToAudioFile));
// console.log(path.dirname(pathToAudioFile));
// console.log(path.extname(pathToAudioFile));
// console.log(path.parse(pathToAudioFile));

// Get Absolute Path
// console.log(path.join(__dirname, 'src', 'test'));
// console.log(path.join(__filename));
// console.log(__dirname)

// console.log(path.resolve())

// Module OS
// console.log(os.constants)
// console.log(os.homedir());
// console.log(os.hostname())
// console.log(os.platform())
// console.log(os.release())
// console.log(os.totalmem())
// console.log(os.type())
// console.log(os.userInfo())
// console.log(os.arch())

// Process
process.env.PORT = 5000;
console.log(process.env)