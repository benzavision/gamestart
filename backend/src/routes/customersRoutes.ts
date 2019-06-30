import  {Router} from 'express';

import {customersController} from '../controllers/customersController';

class CustomersRoutes {

    public router : Router = Router();

    constructor(){
        this.config();

    }

    config(): void {

        this.router.get('/',customersController.list);
        this.router.post('/', customersController.create);
        this.router.get('/get/:id', customersController.getOne);
        this.router.get('/auth/:email/:password', customersController.login);
        this.router.put('/:id',customersController.update);
        this.router.delete('/:id',customersController.delete);
    }
}

const customersRoutes = new CustomersRoutes();
export default customersRoutes.router;