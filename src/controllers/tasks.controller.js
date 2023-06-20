import { request, response } from 'express';
import { Task } from '../models/Task.js';
import tasksService from '../services/tasks.service.js';

export const getTasks = async (req = request, res = response) => {
  try {
    const tasks = await tasksService.getTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTaskById = async (req = request, res = response) => {
  try {
    const taskId = req.params.id;
    const task = await tasksService.getTaskById(taskId);
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req = request, res = response) => {
  try {
    const newTask = req.body;
    const taskCreated = await tasksService.createTask(newTask);
    res.status(201).json(taskCreated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req = request, res = response) => {
  try {
    const taskId = req.params.id;
    const taskBody = req.body;
    const taskUpdated = await tasksService.updateTask(taskId, taskBody);
    res.json(taskUpdated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req = request, res = response) => {
  try {
    const taskId = req.params.id;
    await tasksService.deleteTask(taskId);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
