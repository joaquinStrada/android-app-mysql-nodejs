import { Router } from 'express'
import { getTasks, getTasksCount, getTask, saveTask, updateTask, deleteTask } from '../controllers/tasks.controller'

const router = Router();

router.get('/', getTasks);

router.get('/count', getTasksCount);

router.get('/:id', getTask);

router.post('/', saveTask);

router.delete('/:id', updateTask);

router.put('/:id', deleteTask);

export default router;