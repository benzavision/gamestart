import  {Router} from 'express';

import {adminsController} from '../controllers/adminsController';

class AdminsRoutes {

    public router : Router = Router();

    constructor(){
        this.config();

    }

    config(): void {

        this.router.get('/get/:id', adminsController.getOne);
        this.router.get('/auth/:email/:password', adminsController.login);
    }
}

const adminsRoutes = new AdminsRoutes();
export default adminsRoutes.router;