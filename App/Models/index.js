const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.User = require("./User");
db.Role = require("./Role");
db.posts = require("./Posts");
db.refreshToken = require("./refreshToken");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
