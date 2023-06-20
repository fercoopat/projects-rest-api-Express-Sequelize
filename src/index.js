import dotenv from 'dotenv';
import app from './app.js';
import { sequelize } from './database/database.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

const main = async () => {
  try {
    await sequelize.sync();
    console.log('Connection has been established successfully.');
    app.listen(PORT, () => console.log(`Server listening in port: ${PORT}`));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

main();
