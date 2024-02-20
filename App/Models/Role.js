const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    default: false
  },
});

// module.exports = Role;
// module.exports = mongoose.model('Role', roleSchema);

const Role = mongoose.model('Role', roleSchema);

exports.Role = Role; 