const Router = require('express');
const router = new Router();
const genresController = require('../controller/genres-controller');

router.get('/gente', genresController.getGenres);
router.get('/gente/:id', genresController.getOneGenre);
router.post('/gente', genresController.createGenre);
router.put('/gente', genresController.updateGenre);
router.delete('/gente/:id', genresController.deleteGenre);

module.exports = router;