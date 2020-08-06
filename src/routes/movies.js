const _ = require('underscore');
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

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, director, year, rating } = req.body;

    if (title && director && year && rating) {
        _.each(movies, (movie, i) => {
            if(movie.id == id){
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });
        res.json(movies);
    } else {
        res.status(500).json({error: 'There was an error'});
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(movies, (movie, i) => {
        if (movie.id == id) {
            movies.splice(i);
        }
    });
    res.send('Deleted');
});

module.exports = router;