const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");

db.ROLES = ["User", "Admin", "Moderator", "Owner", "CEO", "HR", "Business Analyst", "Product Owner", "Project/Technical Manager", "Project/Team/Technical Lead", "Software/Solution/Technical Architect", "Scrum Master", "Scrum Team", "Developers", "QA Team", "UX/UI Designers", "Testers", "Quality Assurance Engineer"];

module.exports = db;