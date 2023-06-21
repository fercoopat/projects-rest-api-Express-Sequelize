import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const db = {
  name: process.env.DB_NAME || 'tasks',
  user: process.env.DB_USER || 'tasks',
  password: process.env.DB_PASS || 'tasks',
  options: {
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DIALECT || 'sqlite',
    storage: process.env.DB_STORAGE || './tasks.sqlite',
  },
};

export const sequelize = new Sequelize(
  db.name,
  db.user,
  db.password,
  db.options
);
