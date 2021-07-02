import { getConnection } from '../lib/database'

export const getTasks = async (req, res) => {
    if (!getConnection()) {
        return res.status(500).json({
            error: true,
            message: 'DB is disconnected'
        });
    }

    const [ rows ] = await getConnection().query('SELECT * FROM tasks');

    res.json({
        error: false,
        data: rows
    });
}

export const getTasksCount = (req, res) => {
    res.send('Hello world!!!');
}

export const getTask = (req, res) => {
    res.send('Hello world!!!');
}

export const saveTask = (req, res) => {
    res.send('Hello world!!!');
}

export const updateTask = (req, res) => {
    res.send('Hello world!!!');
}

export const deleteTask = (req, res) => {
    res.send('Hello world!!!');
}

