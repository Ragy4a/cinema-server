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
// process.env.PORT = 5000;
// console.log(process.env)

// Create Server with http module
const HOST_NAME = '127.0.0.1';
const PORT = 5000;

const server = http.createServer((req, res) => {
    const url = req.url;


    console.log(`URL is ${url}.`);
    console.log(`METHOD is ${req.method}.`);

    res.setHeader('Content-Type', 'text/html', 'charset=utf-8');
    // res.write('Sigma');
    // res.end();
    switch(url) {
        case '/':
            console.log('Home page');
            const homePage = fs.readFileSync('./public/index.html', 'utf8');
            res.write(homePage);
            res.end();
            break;
        case '/contact':
            console.log('Contact');
            const contactPage = fs.readFileSync('./public/contact.html', 'utf8');
            res.write(contactPage);
            res.end();
            break;
        default: 
            if (url.includes('/img')) {
                console.log('Images!')
                fs.readFile(`./public${url}`, (err, data) => {
                    if (err) {
                        res.statusCode = 404;
                        throw err;
                    }
                    res.setHeader('Content-Type', 'image/jpeg')
                    res.write(data);
                    res.end();
                })
            } else {
                res.write('<h1>Page not found</h1>');
                res.end();
            }
            // console.log('Default!')
            // res.write('<h1>Page not found</h1>');
            // res.end();
    }
})

server.listen(PORT, HOST_NAME, () => {
    console.log(`Сервер запущен и доступен по адрессу http://${HOST_NAME}:${PORT}`)
});