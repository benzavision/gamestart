import {Request, Response} from 'express';

import pool from '../database';




class GamesController {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM games');
        res.json(games);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        } else {
            res.status(404).json({ text: "Spiel nicht gefunden" });

        }
    }
    public async search(req: Request, res: Response): Promise<any> {
        const { word } = req.params;
        const games = await pool.query('SELECT * FROM games WHERE title LIKE ?', '%' + word + '%');
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games);
        } else {
            res.status(404).json({ text: "kein Spiel nicht gefunden" });

        }
    }
    public async getGenre(req: Request, res: Response): Promise<any> {
        const { genre } = req.params;
        const games = await pool.query('SELECT * FROM games WHERE genre = ?', [genre]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games);
        } else {
            res.status(404).json({ text: "Kategorie nicht gefunden" });

        }
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO games set ?', [req.body]);
        res.json({ message: 'Game Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE games set ? WHERE id = ?', [oldGame, id]);
        res.json({ message: "Spiel aktualisiert" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM games WHERE id = ?', [id]);
        res.json({ message: "Spiel gelöscht" });
    }
}

export const gamesController = new GamesController();
