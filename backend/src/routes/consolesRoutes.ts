import  {Router} from 'express';

import {consolesController} from '../controllers/consolesController';

class ConsolesRoutes {

    public router : Router = Router();

    constructor(){
        this.config();

    }

    config(): void {
        this.router.get('/',consolesController.list);
        this.router.post('/', consolesController.create);
        this.router.put('/:id',consolesController.update);
        this.router.delete('/:id',consolesController.delete);
    }
}

const consolesRoutes = new ConsolesRoutes();
export default consolesRoutes.router;