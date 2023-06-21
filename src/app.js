import express from 'express';
import authRoutes from './routes/auth.routes.js';
import projectRoutes from './routes/project.routes.js';
import taskRoutes from './routes/task.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();
/* middlewares */
app.use(express.json());
/* routes */
app.use('/projects', projectRoutes);
app.use('/tasks', taskRoutes);
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

export default app;
