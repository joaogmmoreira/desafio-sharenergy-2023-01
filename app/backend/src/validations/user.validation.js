const validateBody = (username, password) => {
  if (!username || !password) {
  
    return { type: 400, message: 'Some required fields are missing' };
  }
  
  return { type: null, message: 'OK' };
};

module.exports = {
  validateBody,
};