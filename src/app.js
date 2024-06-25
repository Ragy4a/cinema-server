const fs = require('fs');
const path = require('path')
const express = require('express');

const app = express();
app.use(express.static(path.resolve('public')));
app.use(express.json());

const ActorContorller = require('./controllers/actorController'); 
const DirectorController = require('./controllers/directorController');
const MovieController = require('./controllers/movieController');
const StudioController = require('./controllers/studioController');

////////////////////////////////////////////////////////////////////////////
app.get('/actors', ActorContorller.getActors);
app.get('/actors/:actorId', ActorContorller.getActorById);
app.post('/actors', ActorContorller.createActor);
app.put('/actors/:actorId', ActorContorller.updateActor);
app.delete('/actors/:actorId', ActorContorller.deleteActor);
////////////////////////////////////////////////////////////////////////////
app.get('/directors', DirectorController.getDirectors);
app.get('/directors/:directorId', DirectorController.getDirectorById);
app.post('/directors', DirectorController.createDirector);
app.put('/directors/:directorId', DirectorController.updateDirector);
app.delete('/directors/:directorId', DirectorController.deleteDirector);
////////////////////////////////////////////////////////////////////////////
app.get('/movies', MovieController.getMovies);
app.get('/movies/:movieId', MovieController.getMovieById);
app.post('/movies', MovieController.createMovie);
app.put('/movies/:movieId', MovieController.updateMovie);
app.delete('/movies/:movieId', MovieController.deleteMovie);
////////////////////////////////////////////////////////////////////////////
app.get('/studios', StudioController.getStudios);
app.get('/studios/:studioId', StudioController.getStudioById);
app.post('/studios', StudioController.createStudio);
app.put('/studios/:studioId', StudioController.updateStudio);
app.delete('/studios/:studioId', StudioController.deleteStudio);
////////////////////////////////////////////////////////////////////////////

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

app.get('/phones', (req, res) => {
    res.redirect('/contact');
})

app.get('/download', (req, res) => {
    const filePath = path.join(__dirname, 'test', 'text');
    console.log('Download!');
    res.download(filePath);
})

app.get('/codes', (req, res) => {
    console.log(req.query);
    const id = req.query.id;
    const code = req.query.code;
    console.log(`Id: ${id}, code: ${code}.`);

    res.send(`Id: ${id}, code: ${code}.`)
});

module.exports = app;