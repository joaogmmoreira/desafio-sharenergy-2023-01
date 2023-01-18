const bcrypt = require('bcryptjs');

const encryptPassword = (password) => {
  const encrypt =  bcrypt.hashSync(password, 8);
  return encrypt;

};

const decryptPassword = (password, hash) => {
  const decrypt = bcrypt.compareSync(password, hash);
  return decrypt;
};

module.exports = {
  encryptPassword,
  decryptPassword,
};
