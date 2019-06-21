import {Request, Response} from 'express';

import pool from '../database';



class ConsolesController {

    public async list(req: Request, res: Response): Promise<void> {
        const consoles = await pool.query('SELECT * FROM consoles');
        res.json(consoles);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const consoles = await pool.query('SELECT * FROM consoles WHERE id = ?', [id]);
        console.log(consoles.length);
        if (consoles.length > 0) {
            return res.json(consoles[0]);
        }
        res.status(404).json({ text: "The console doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO consoles set ?', [req.body]);
        res.json({ message: 'console Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldCustomer = req.body;
        await pool.query('UPDATE consoles set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The consoles was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM consoles WHERE id = ?', [id]);
        res.json({ message: "The console was deleted" });
    }
}

export const consolesController = new ConsolesController();
