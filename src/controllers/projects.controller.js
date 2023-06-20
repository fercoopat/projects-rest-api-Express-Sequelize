import { request, response } from 'express';
import projectsService from '../services/projects.service.js';

export const getProjects = async (req = request, res = response) => {
  try {
    const projects = await projectsService.getProjects();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProjectById = async (req = request, res = response) => {
  try {
    const projectId = req.params.id;
    const project = await projectsService.getProjectById(projectId);
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProjectTasks = async (req = request, res = response) => {
  try {
    const projectId = req.params.id;
    const tasks = await projectsService.getProjectTasks(projectId);
    res.send(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProject = async (req = request, res = response) => {
  try {
    const newProject = req.body;
    const projectCreated = await projectsService.createProject(newProject);
    res.status(201).json(projectCreated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProject = async (req = request, res = response) => {
  try {
    const projectId = req.params.id;
    const projectBody = req.body;
    const projectUpdated = await projectsService.updateProject(
      projectId,
      projectBody
    );
    res.json(projectUpdated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProject = async (req = request, res = response) => {
  try {
    const projectId = req.params.id;
    await projectsService.deleteProject(projectId);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
