import { request, response } from 'express';
import userService from '../services/user.service.js';

export const deleteUser = async (req = request, res = response) => {
  try {
    const userId = req.params.id;
    await userService.deleteUser(userId);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
