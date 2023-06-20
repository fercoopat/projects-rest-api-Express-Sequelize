import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('tasks-api', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
});
