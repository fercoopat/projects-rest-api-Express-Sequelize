import express from 'express';
import projectsRoutes from './routes/projects.routes.js';
import tasksRoutes from './routes/tasks.routes.js';

const app = express();
/* middlewares */
app.use(express.json());
/* routes */
app.use('/projects', projectsRoutes);
app.use('/tasks', tasksRoutes);

export default app;
