import express from 'express'
import tasksRoutes from './routes/tasks.router'

const app = express();

app.use('/api/tasks', tasksRoutes);

export default app;