let actors = [
    {
        id: 1,
        fullName: 'Harrison Ford',
        birthYear: 1942,
        nationality: 'USA',
    },
    {
        id: 2,
        fullName: 'Sigourney Weave',
        birthYear: 1962,
        nationality: 'USA',
    },
    {
        id: 3,
        fullName: 'Ian Holm',
        birthYear: 1931,
        nationality: 'United Kingdom',
    },
    {
        id: 4,
        fullName: 'Johnny Depp',
        birthYear: 1963,
        nationality: 'USA',
    },
];

class ActorContorller {
    
    getActors(req, res) {
        res.status(200).send(actors);
    };

    getActorById(req, res) {
        const { params: { actorId } } = req;
        const actor = actors.find(actor => actor.id === Number(actorId));
        if (actor) {
            res.status(200).send(actor);
        } else {
            res.status(404).send('Actor not found!')
        }
    };

    createActor(req, res) {
        const { body } = req;
        const newActor = { ...body, id: actors.length + 1 };
        actors.push(newActor);
        res.status(201).send(newActor);
    }

    updateActor(req, res) {
        const { body, params: { actorId } } = req;
        actors = actors.map((actor) => {
            if (actor.id === Number(actorId)) {
                return { ...body }
            };
            return { ...actor };
        });
        res.status(200).send(body);
    }

    deleteActor(req, res) {
        const { params: { actorId }} = req;
        actors = actors.filter((actor) => actor.id !== Number(actorId));
        res.status(204).send();
    }
};

module.exports = new ActorContorller();