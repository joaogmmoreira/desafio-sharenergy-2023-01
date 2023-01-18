const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema (
  {
    fullName: {
      type: String,
      required: true,
      index: {
        unique: true
      }
    },
    email: {
      type: String,
      required: true
    },
    telephone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    ssn: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Customer', customerSchema);
