import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Task } from './task.model.js';

export const Project = sequelize.define('project', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  priority: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
});

Project.hasMany(Task);

Task.belongsTo(Project);
