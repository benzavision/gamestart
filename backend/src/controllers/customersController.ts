import {Request, Response } from 'express';

import pool from '../database';


class CustomersController {



    public async list(req: Request, res: Response): Promise<void> {
        const customers = await pool.query('SELECT * FROM customers');
        res.json(customers);
    }




    public async login(req: Request, res: Response) {
        var {email} = req.body.email;
        var {password}  = req.body.password;

        if (email && password) {

            const customers = await pool.query('SELECT * FROM customers WHERE email = ? AND password = ?', [email, password]);

            if (customers.length > 0) {
                res.json(customers[0]);
                res.json({ message: 'Logged in!' });
            } else {
                res.json({ message: 'Incorrect Username and/or Password!' });
            }
        } else {
            res.json({ message: 'Please enter Username and Password!' });
        }
    }



    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO customers set ?', [req.body]);
        res.json({ message: 'customer registred' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldCustomer = req.body;
        await pool.query('UPDATE customers set ? WHERE id = ?', [req.body, id]);
        res.json({ message: " customers Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM customers WHERE id = ?', [id]);
        res.json({ message: "customer deleted" });
    }
}

export const customersController = new CustomersController();
