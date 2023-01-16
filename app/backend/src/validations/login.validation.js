const validateBody = (email, password) => {
  if (!email || !password) {
  
    return { type: 400, message: 'Some required fields are missing' };
  }
  
  return { type: null, message: 'OK' };
};

module.exports = {
  validateBody,
};