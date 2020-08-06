const { Router, request } = require('express');
const router = Router();

const movies = require('../sample.json');

router.get('/', (req, res) => {
    res.json(movies);
});

router.post('/', (req, res) => {
    const { title, director, year, rating } = req.body;
    if (title && director && year && rating) {
        const id = movies.length++;
        const newMovie = { ...req.body, id };
        movies.push(newMovie);
        res.json(movies);
        console.log(movies);
    } else {
        res.json({ error: 'There was an error.' });
    }
});

router.delete('/', (req, res) => {
    res.json({"Hello": "Hello"});
});

module.exports = router;