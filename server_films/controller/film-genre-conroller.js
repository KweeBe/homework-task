const db = require('../db/db.js');

class filmGenreConroller{
    async createFilmGenre(req, res){
        const {idFirst, idSecond} = req.body;
        const filmGenr = await db.query(`INSERT INTO films_genres 
        VALUES($1, $2) RETURNING *`, [idFirst, idSecond]);

       res.json(filmGenr.rows[0])
    }

    async deleteFilmGenre(req, res){
        const {idFirst, idSecond} = req.body;
        const filmGenr = await db.query(`DELETE FROM films_genres 
        where id_film = $1 and id_genres = $2  RETURNING *`, [idFirst, idSecond]);

        res.json(filmGenr.rows[0])
    }
}

module.exports = new filmGenreConroller();