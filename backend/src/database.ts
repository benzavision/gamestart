import mysql from 'promise-mysql';
import keys from './keys';

const pool = mysql.createPool(keys.database);
const connection = mysql.createConnection(keys.database);

pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('DB is connected');
    });

export default pool;