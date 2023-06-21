import { request, response } from 'express';
import taskService from '../services/task.service.js';

export const getTasks = async (req = request, res = response) => {
  try {
    const tasks = await taskService.getTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTaskById = async (req = request, res = response) => {
  try {
    const taskId = req.params.id;
    const task = await taskService.getTaskById(taskId);
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req = request, res = response) => {
  try {
    const newTask = req.body;
    const taskCreated = await taskService.createTask(newTask);
    res.status(201).json(taskCreated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req = request, res = response) => {
  try {
    const taskId = req.params.id;
    const taskBody = req.body;
    const taskUpdated = await taskService.updateTask(taskId, taskBody);
    res.json(taskUpdated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req = request, res = response) => {
  try {
    const taskId = req.params.id;
    await taskService.deleteTask(taskId);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
