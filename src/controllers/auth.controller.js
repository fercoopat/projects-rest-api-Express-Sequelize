import { request, response } from 'express';
import { User } from '../models/user.model.js';

export const register = async (req = request, res = response) => {
  try {
    const user = req.body;
    const userCreated = await User.create(user);
    res.status(201).json(userCreated);
  } catch (error) {
    res.json({ message: error.message });
  }
};
