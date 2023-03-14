const db = require('../db/db.js');

class FilmsController{
    async createFilm(req, res){
        const {name, year} = req.body;
        const film = await db.query(`INSERT INTO films(name_film,year_of_release) 
        VALUES ($1, $2) RETURNING *`,[name, year]);

        res.json(film.rows[0]);
    }

    async getFilms(req, res){
        const films = await db.query('SELECT id_film, name_film, year_of_release FROM films');

        res.json(films.rows);
    }

    async getOneFilm(req, res){
        const id = req.params.id;
        const film = await db.query(`SELECT id_film, name_film, year_of_release
         FROM films where id_film = $1`,[id]);

        const ganr = await db.query(`SELECT name_genres from films_genres
        JOIN genres on films_genres.id_genres = genres.id_genres
        where id_film = $1`,[id]);

        film.rows[0].ganrs = ganr.rows.map(item => {
            return item.name_genres;
        });

        res.json(film.rows[0]);
    }

    async updateFilm(req, res){
        const {id,name, year} = req.body;
        const film = await db.query(`UPDATE films set name_film = $2, 
        year_of_release = $3 where id_film = $1 RETURNING *`,[id,name, year]);

        res.json(film.rows[0]);
    }

    async deleteFilm(req, res){
        const id = req.query.id;
        const film = await db.query('DELETE FROM films where id_film = $1',[id]);

        res.json(film.rows[0]);
    }
}

module.exports = new FilmsController();