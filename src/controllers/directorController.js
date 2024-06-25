let directors = [
    {
      id: 1,
      movies: [
        'Indiana Johns',
        `Schindler's List`,
        'Saving Private Ryan'
      ],
      fullName: 'Steven Spielberg',
      birthYear: 1946,
      nationality: 'USA',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ready_Player_One_Japan_Premiere_Red_Carpet_Steven_Spielberg_%2841604920761%29_%28cropped%29.jpg/240px-Ready_Player_One_Japan_Premiere_Red_Carpet_Steven_Spielberg_%2841604920761%29_%28cropped%29.jpg'
    },
    {
      id: 2,
      movies: [
        'Alien',
        'Gladiator',
        'Robin Hood'
      ],
      fullName: 'Ridley Scott',
      birthYear: 1937,
      nationality: 'UK',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/NASA_Journey_to_Mars_and_%E2%80%9CThe_Martian%E2%80%9D_%28201508180030HQ%29.jpg/220px-NASA_Journey_to_Mars_and_%E2%80%9CThe_Martian%E2%80%9D_%28201508180030HQ%29.jpg'
    },
    {
      id: 3,
      movies: [
        'Rambo',
        'Terminator',
        'Avatar'
      ],
      fullName: 'James Cameron',
      birthYear: 1954,
      nationality: 'Canada',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/James_Cameron_by_Gage_Skidmore.jpg/240px-James_Cameron_by_Gage_Skidmore.jpg'
    }
];

class DirectorController {
    
    getDirectors(req, res) {
        res.status(200).send(directors);
    };

    getDirectorById(req, res) {
        const { params: { directorId } } = req;
        const director = directors.find(director => director.id === Number(directorId));
        if (director) {
            res.status(200).send(director);
        } else {
            res.status(404).send('Director not found!')
        }
    };

    createDirector(req, res) {
        const { body } = req;
        const newDirector = { ...body, id: directors.length + 1 };
        directors.push(newDirector);
        res.status(201).send(newDirector);
    };

    updateDirector(req, res) {
        const { body, params: { directorId } } = req;
        directors = directors.map((director) => {
            if (director.id === Number(directorId)) {
                return { ...body }
            };
            return { ...director };
        });
        res.status(200).send(body);
    };

    deleteDirector(req, res) {
        const { params: { directorId }} = req;
        directors = directors.filter((director) => director.id !== Number(directorId));
        res.status(204).send();
    };

};

module.exports = new DirectorController();