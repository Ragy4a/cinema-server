let movies = [
    {
      id: 1,
      title: "Indiana Johns",
      directors: ["Stiven Spilberg"],
      actors: ["Harrison Ford", "Sean Connery"],
      studios: ["Lukas Film"],
      poster: "https://upload.wikimedia.org/wikipedia/ru/thumb/8/8b/IJandCrystalSkull.jpg/220px-IJandCrystalSkull.jpg"
    },
    {
      id: 2,
      title: "Alien",
      directors: ["Ridley Scott"],
      actors: ["Sigourney Weaver"],
      studios: ["20th Century Studios, Inc."],
      poster: "https://upload.wikimedia.org/wikipedia/ru/thumb/c/c3/Alien_movie_poster.jpg/232px-Alien_movie_poster.jpg"
    },
    {
      id: 3,
      title: "Aliens",
      directors: ["James Cameron"],
      actors: ["Sigourney Weaver"],
      studios: ["20th Century Studios, Inc."],
      poster: "https://upload.wikimedia.org/wikipedia/ru/thumb/f/fb/Aliens_poster.jpg/196px-Aliens_poster.jpg"
    },
    {
      id: 4,
      title: "Pirates of the Caribbean:",
      directors: ["Gregor (Gore) Verbinski"],
      actors: ["Johnny Depp", "Orlando Bloom"],
      studios: ["Walt Disney Pictures"],
      poster: "https://upload.wikimedia.org/wikipedia/ru/thumb/7/79/Pirates-of-the-Caribbean-The-Curse-of-the-Black-Pearl-.jpg/201px-Pirates-of-the-Caribbean-The-Curse-of-the-Black-Pearl-.jpg"
    },
    {
      id: 5,
      title: "The Lord Of The Rings",
      directors: ["Peter Jackson"],
      actors: ["Elijah Wood", "Ian McKellen"],
      studios: ["New Line Cinema"],
      poster: "https://upload.wikimedia.org/wikipedia/ru/thumb/0/08/The_Lord_of_the_Rings._The_Fellowship_of_the_Ring_%E2%80%94_movie.jpg/203px-The_Lord_of_the_Rings._The_Fellowship_of_the_Ring_%E2%80%94_movie.jpg"
    }
];

class MovieController {

    getMovies (req, res) {
        res.status(200).send(movies);
    };

    getMovieById (req, res) {
        const { params: { movieId } } = req;
        const movie = movies.find(movie => movie.id === Number(movieId));
        if (movie) {
            res.status(200).send(movie);
        } else {
            res.status(404).send('Movie not found!');
        }
    };

    createMovie(req, res) {
        const { body } = req;
        const newMovie = { ...body, id: movies.length + 1 };
        movies.push(newMovie);
        res.status(201).send(newMovie);
    };

    updateMovie(req, res) {
        const { body, params: { movieId } } = req;
        movies = movies.map((movie) => {
            if (movie.id === Number(movieId)) {
                return { ...body }
            };
            return { ...movie };
        });
        res.status(200).send(body);
    };

    deleteMovie(req, res) {
        const { params: { movieId }} = req;
        movies = movies.filter((movie) => movie.id !== Number(movieId));
        res.status(204).send();
    };

}

module.exports = new MovieController();