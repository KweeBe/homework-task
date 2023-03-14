const Router = require('express');
const router = new Router();
const filmsController = require('../controller/films-controller.js');

router.get('/films', filmsController.getFilms);
router.get('/film/:id', filmsController.getOneFilm); 
router.post('/films', filmsController.createFilm); 
router.put('/films', filmsController.updateFilm); 
router.delete('/films', filmsController.deleteFilm); 

module.exports = router;