import {Request, Response} from 'express';

import pool from '../database';



class CategoriesController {

    public async list(req: Request, res: Response): Promise<void> {
        const categories = await pool.query('SELECT * FROM categories');
        res.json(categories);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const categories = await pool.query('SELECT * FROM categories WHERE id = ?', [id]);
        console.log(categories.length);
        if (categories.length > 0) {
            return res.json(categories[0]);
        }
        res.status(404).json({ text: "The customer doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO categories set ?', [req.body]);
        res.json({ message: 'customer Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldCustomer = req.body;
        await pool.query('UPDATE categories set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The categories was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM categories WHERE id = ?', [id]);
        res.json({ message: "The customer was deleted" });
    }
}

export const categoriesController = new CategoriesController();
