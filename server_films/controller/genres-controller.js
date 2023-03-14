const db = require('../db/db.js');

class GenresController{
    async createGenre(req, res){
        const {name} = req.body;
        const newGenre = await db.query(`INSERT INTO genres(name_genres) 
        VALUES ($1) RETURNING *`, [name]);

        res.json(newGenre.rows[0]);
    }

    async getGenres(req, res){
        const genres = await db.query(`SELECT id_genres, name_genres FROM genres`);

        res.json(genres.rows);
    }

    async getOneGenre(req, res){
        const id = req.params.id;
        const genre = await db.query(`SELECT id_genres, name_genres 
        FROM genres where id_genres = $1`,[id]);

        res.json(genre.rows[0]);
    }

    async updateGenre(req, res){
        const {id, name} = req.body;
        const newGenre = await db.query(`UPDATE genres set name_genres = $2
         where id_genres = $1 RETURNING *`, [id,name]);

        res.json(newGenre.rows[0]);
    }

    async deleteGenre(req, res){
        const id = req.params.id;
        const genre = await db.query(`DELETE FROM genres where id_genres = $1`,[id]);
    }
}

module.exports = new GenresController();
