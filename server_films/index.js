const express = require('express');
const genresRouter = require('./Routers/genres-router');
const filmsRouter = require('./Routers/film-router');
const filmGenreRouter = require('./Routers/film-genre-router');

const PORT = process.env.PORT || 7777;

const app = express();

app.use(express.json());
app.use('/api', genresRouter);
app.use('/api', filmsRouter);
app.use('/api', filmGenreRouter);

app.listen(PORT, (req, res) => {
    console.log(`Сервер запустился с портом ${PORT}`);
})