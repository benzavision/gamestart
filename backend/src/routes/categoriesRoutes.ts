import  {Router} from 'express';

import {categoriesController} from '../controllers/categoriesController';

class CategoriesRoutes {

    public router : Router = Router();

    constructor(){
        this.config();

    }

    config(): void {
        this.router.get('/',categoriesController.list);
        this.router.post('/', categoriesController.create);
        this.router.put('/:id',categoriesController.update);
        this.router.delete('/:id',categoriesController.delete);
    }
}

const categoriesRoutes = new CategoriesRoutes();
export default categoriesRoutes.router;