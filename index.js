const fs = require('fs');
const http = require('http');

const express = require('express');
const app = express();
const server = http.createServer(app);

const HOST_NAME = '127.0.0.1';
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    fs.readFile('./public/index.html', 'utf8', (err, data) => {
        if(err) {
            res.status(404);
            throw err;
        }
        res.set('Content-Type', 'text/html; charset=utf-8').send(data);
    });
})

app.get('/contact', (req, res) => {
    fs.readFile('./public/contact.html', 'utf8', (err, data) => {
        if(err) {
            res.status(404);
            throw err;
        }
        res.set('Content-Type', 'text/html; charset=utf-8').send(data);
    });
})

app.get('/img/*', (req, res) => {
    const url = req.url;
    fs.readFile(`./public${url}`, (err, data) => {
        if (err) {
            res.status(404);
            throw err;
        }
        res.set({
            'Content-Type': 'image/jpeg',
            'Content-Type': 'image/png',
            'Content-Type': 'image/gif'
        }).send(data);
    })
})

server.listen(PORT, HOST_NAME, () => {
    console.log(`Server is running on http://${HOST_NAME}:${PORT}`);
});