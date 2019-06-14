import {Request, Response} from 'express';

import pool from '../database';



class CustomersController {

    public async list(req: Request, res: Response): Promise<void> {
        const customers = await pool.query('SELECT * FROM customers');
        res.json(customers);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const customers = await pool.query('SELECT * FROM customers WHERE id = ?', [id]);
        console.log(customers.length);
        if (customers.length > 0) {
            return res.json(customers[0]);
        }
        res.status(404).json({ text: "The customer doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO customers set ?', [req.body]);
        res.json({ message: 'customer Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldCustomer = req.body;
        await pool.query('UPDATE customers set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The customers was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM customers WHERE id = ?', [id]);
        res.json({ message: "The customer was deleted" });
    }
}

export const customersController = new CustomersController();
