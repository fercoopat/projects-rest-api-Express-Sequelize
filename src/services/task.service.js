import { Task } from '../models/task.model.js';

const getTasks = async () => {
  return await Task.findAll();
};

const getTaskById = async (taskId) => {
  return await Task.findByPk(taskId);
};

const createTask = async (newTask) => {
  const taskCreated = await Task.create(newTask);

  return taskCreated;
};

const updateTask = async (taskId, taskBody) => {
  const taskToUpdate = await Task.findByPk(taskId);
  taskToUpdate.set(taskBody);
  const taskUpdated = await taskToUpdate.save();
  return taskUpdated;
};

const deleteTask = async (taskId) => {
  await Task.destroy({ where: { id: taskId } });
};

export default { getTasks, getTaskById, createTask, updateTask, deleteTask };
