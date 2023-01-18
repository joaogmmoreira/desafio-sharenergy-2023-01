const validateBody = (fullName, email, telephone, address, ssn) => {
  if (!fullName || !email || !telephone || !address || !ssn) {
  
    return { type: 400, message: 'Some required fields are missing' };
  }
  
  return { type: null, message: 'OK' };
};

module.exports = {
  validateBody,
};