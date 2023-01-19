require('dotenv/config');
const jwt = require('jsonwebtoken');

const createToken = (data) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
  console.log(token);
  return token;
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  // console.log('verifyToken', token);

  if (!token) {
    res.status(400).json('Token not found');
  }
 
  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({ message: 'Token must be valid' });
  }

  next();
};

module.exports = {
  createToken,
  verifyToken
};