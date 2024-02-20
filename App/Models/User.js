const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
    default: false
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  role: {
    isAdmin: {
      type: Boolean,
      default: false,
    }
  },
   roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
});

userSchema.methods.generateAuthToken = function() { 
  const token = jwt.sign({ _id: this._id, role: this.role}, process.env.ACCESS_TOKEN_SECRET);
  return token;
}

//module.exports = mongoose.model('User', userSchema);

const User = mongoose.model('User', userSchema);

exports.User = User; 