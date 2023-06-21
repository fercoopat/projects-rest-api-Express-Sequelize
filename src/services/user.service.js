import { User } from '../models/user.model.js';

const deleteUser = async (userId) => {
  await User.destroy({ where: { id: userId } });
};

export default { deleteUser };
