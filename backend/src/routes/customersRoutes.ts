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
        this.router.post('/auth', customersController.login);
        this.router.put('/:id',customersController.update);
        this.router.delete('/:id',customersController.delete);
    }
}

const customersRoutes = new CustomersRoutes();
export default customersRoutes.router;