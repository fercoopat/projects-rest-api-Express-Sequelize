import { Project } from '../models/Project.js';
import { Task } from '../models/Task.js';

const getProjects = async () => {
  return await Project.findAll();
};

const getProjectById = async (projectId) => {
  const project = await Project.findByPk(projectId);

  return project;
};

const getProjectTasks = async (projectId) => {
  const tasks = await Task.findAll({ where: { projectId } });
  return tasks;
};

const createProject = async (newProject) => {
  const projectCreated = await Project.create(newProject);

  return projectCreated;
};

const updateProject = async (projectId, projectBody) => {
  const projectToUpdate = await Project.findByPk(projectId);
  projectToUpdate.set(projectBody);
  const projectUpdated = await projectToUpdate.save();
  return projectUpdated;
};

const deleteProject = async (projectId) => {
  await Project.destroy({ where: { id: projectId } });
};

export default {
  getProjects,
  getProjectById,
  getProjectTasks,
  createProject,
  updateProject,
  deleteProject,
};
