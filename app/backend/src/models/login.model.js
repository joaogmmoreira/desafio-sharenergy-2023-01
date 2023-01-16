const loginModel = (username, password) => {
  const response = { type: null, message: username + password };
  return response;
}

module.exports = {
  loginModel,
}