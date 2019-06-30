import {Request, Response } from 'express';

import pool from '../database';



class AdminsController {



    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const consoles = await pool.query('SELECT * FROM admin WHERE id = ?', [id]);
        console.log(consoles.length);
        if (consoles.length > 0) {
            return res.json(consoles[0]);
        }
        res.status(404).json({ text: "admin doesn't exits" });
    }

    public async login(req: Request, res: Response): Promise<any>  {
        var {email} = req.params;
        var {password}  = req.params;

        if (email && password) {

            const customers = await pool.query('SELECT * FROM admin WHERE email = ? AND password = ?', [email, password]);

            if (customers.length > 0) {

                res.json(customers[0]);


            } else {
                res.json({ message: 'Passwort und/oder Email nicht korrekt!' });
            }
        } else {
            res.json({ message: 'Bitte Passwort und Email Eingeben!' });
        }
    }

}

export const adminsController = new AdminsController();
