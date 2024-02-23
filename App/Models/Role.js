const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    default: false
  },
});

const Role = mongoose.model('Role', roleSchema);

exports.Role = Role; 