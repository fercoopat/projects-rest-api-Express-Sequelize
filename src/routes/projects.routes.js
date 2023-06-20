import express from 'express';
import {
  createProject,
  getProjectById,
  getProjectTasks,
  getProjects,
  updateProject,
} from '../controllers/projects.controller.js';

const router = express.Router();

router.get('/', getProjects);
router.get('/:id', getProjectById);
router.get('/:id/tasks', getProjectTasks);
router.post('/', createProject);
router.patch('/:id', updateProject);
router.delete('/:id');

export default router;
