import mysql from 'mysql2/promise'
import * as config from './config'

const { database } = config.default;
let conn;

export const createConnection = async () => {
    try {
        conn = await mysql.createConnection(database);

        console.log('DB is connected to', database.host);
    } catch (err) {
        console.error(err);
    }
}

export const getConnection = () => {
    if (conn) {
       return conn; 
    } else {
        return false;
    }
}