import express, {Application} from  'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';
import customersRoutes from './routes/customersRoutes';
import categoriesRoutes from './routes/categoriesRoutes';
import consolesRoutes from './routes/consolesRoutes';
import adminsRoutes from "./routes/adminsRoutes";

class Server {

    public app : Application;

    constructor(){

       this.app = express();
       this.config();
       this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000) ;
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false }));

    }

    routes(): void {
        this.app.use('/',indexRoutes);
        this.app.use('/api/games',gamesRoutes);
        this.app.use('/api/admin',adminsRoutes);
        this.app.use('/api/customers',customersRoutes);
        this.app.use('/api/categories',categoriesRoutes);
        this.app.use('/api/consoles',consolesRoutes);

    }
    start(): void {
        this.app.listen(this.app.get('port'), ()=> {
            console.log('Server on port', this.app.get('port'))
        });
    }
}

const server = new Server();
server.start();