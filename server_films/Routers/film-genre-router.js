const Router = require('express');
const router = new Router();
const filmGenreConroller = require('../controller/film-genre-conroller.js');

router.post('/filmGenre', filmGenreConroller.createFilmGenre);
router.delete('/filmGenre', filmGenreConroller.deleteFilmGenre);

module.exports = router;