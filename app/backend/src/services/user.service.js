const userModel = require('../models/user.model');
const jwt = require('../utils/jwt.util');
const { encryptPassword, decryptPassword } = require('../utils/passEncrypt');

const validateUser = async (username, password) => {
  const user = await userModel.findOne({ username });

  const decryptedPassword = decryptPassword(password, user.password);

  if (decryptedPassword) {
    const token = jwt.createToken(user.username, user._id);
  
    return { type: null, message: {
      token,
      username: user.username, 
    }};
  }

  return { type: 400, message: 'Wrong password' };
};

const createUser = async (username, password) => {
  const userCheck = await userModel.findOne({ username });

  if (userCheck) {
    return validateUser(username, password);
  }

  const encryptedPassword = encryptPassword(password);  

  const user = await userModel.create({  username, password: encryptedPassword });

  const token = jwt.createToken(user.username, user._id);

  return { type: null, message: {
    token,
    username: user.username, 
  }};
}

module.exports = {
  validateUser,
  createUser,
}