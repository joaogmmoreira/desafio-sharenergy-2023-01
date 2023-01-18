const mongoose = require ('mongoose');
const dotenv = require('dotenv/config');

const MONGO_DB_URL = process.env.MONGODB_URI;

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGODB_URI
    || MONGO_DB_URL,
) => mongoose.connect(mongoDatabaseURI);

module.exports = connectToDatabase;
