let studios = [
    {
      id: 1,
      title: 'Lucasfilm Ltd. LLC',
      location: 'San Francisco',
      foundationYear: 1971,
      movies: [
        'Indiana Johns'
      ],
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Lucasfilm_logo.svg/250px-Lucasfilm_logo.svg.png'
    },
    {
      id: 2,
      title: '20th Century Studios, Inc.',
      location: 'Los Angeles',
      foundationYear: 1935,
      movies: [
        'Aliens',
        'Alien'
      ],
      logo: 'https://upload.wikimedia.org/wikipedia/ru/thumb/5/5e/20th_Century_Studios.svg/250px-20th_Century_Studios.svg.png'
    }
];

class StudioController {

    getStudios(req, res) {
        res.status(200).send(studios);
    };

    getStudioById(req, res) {
        const { params: { studioId } } = req;
        const studio = studios.find(studio => studio.id === Number(studioId));
        if (studio) {
            res.status(200).send(studio);
        } else {
            res.status(404).send('Studio not found!')
        }
    };

    createStudio(req, res) {
        const { body } = req;
        const newActor = { ...body, id: studios.length + 1 };
        studios.push(newActor);
        res.status(201).send(newActor);
    }

    updateStudio(req, res) {
        const { body, params: { studioId } } = req;
        studios = studios.map((studio) => {
            if (studio.id === Number(studioId)) {
                return { ...body }
            };
            return { ...studio };
        });
        res.status(200).send(body);
    }

    deleteStudio(req, res) {
        const { params: { studioId }} = req;
        studios = studios.filter((studio) => studio.id !== Number(studioId));
        res.status(204).send();
    }

};

module.exports = new StudioController();