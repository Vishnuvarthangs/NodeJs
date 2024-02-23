const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dbConfig = require('./App/Config/db.config');
const authConfig = require('./App/Config/auth.config');
const authRoutes = require('./App/Routes/authRoutes');
const userRoutes = require('./App/Routes/userRoutes');
require('dotenv').config({ path: 'ENV_FILENAME' });
const bodyParser = require('body-parser');
// const { signup, login, refreshToken } = require('./App/Controllers/authController');
const { User } = require('./App/Models/User');
const { Role } = require('./App/Models/Role');
// const db = require("./App/Models");
// const Role = db.role;

const bcrypt = require('bcryptjs');

// Middleware
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Database connection
const URI = process.env.DB_URL;
mongoose.connect(URI, dbConfig.options)
    // .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('MongoDB connection error:', err));
     .then(() => {
    console.log("Successfully connect to MongoDB.");
    //initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

db = mongoose.connection;
db.once("open", async () => {
  if ((await User.countDocuments().exec()) > 0) return;
  let salt = await bcrypt.genSalt(10);
  let password = await bcrypt.hash("admin", salt);
  Promise.all([
    User.create({name: "Admin",email : "admin@admin.com", password : password, role : {isAdmin : true}}),
  ]).then(() => console.log("Added Admin User"));

    if ((await Role.countDocuments().exec()) > 0) return;
    Promise.all([
        Role.create({name: "User"}),
    ]).then(() => console.log("Added 'User' to roles collection"));
     Promise.all([
        Role.create({name: "Moderator"}),
     ]).then(() => console.log("Added 'Moderator' to roles collection"));
     Promise.all([
        Role.create({name: "Admin"}),
     ]).then(() => console.log("Added 'Admin' to roles collection"));
     Promise.all([
        Role.create({name: "SuperAdmin"}),
     ]).then(() => console.log("Added 'SuperAdmin' to roles collection"));
     Promise.all([
        Role.create({name: "HR"}),
     ]).then(() => console.log("Added 'HR' to roles collection"));
     Promise.all([
        Role.create({name: "Manager"}),
     ]).then(() => console.log("Added 'Manager' to roles collection"));
     Promise.all([
        Role.create({name: "TechnicalLead"}),
     ]).then(() => console.log("Added 'TechnicalLead' to roles collection"));
     Promise.all([
        Role.create({name: "SoftwareEngineer"}),
     ]).then(() => console.log("Added 'SoftwareEngineer' to roles collection"));
     Promise.all([
        Role.create({name: "BusinessAnalyst"}),
    ]).then(() => console.log("Added 'BusinessAnalyst' to roles collection"));
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to RBAC application." });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('*', function(req, res){
  res.status(404).json({error: "Please check the URL.The endpoint doesn't exist"});
});

// Start server
const PORT = process.env.PORT || authConfig.PORT ||  3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// function initial() {
//    Role.estimatedDocumentCount((err, count) => {
//     if (!err && count === 0) {
//       new Role({
//         name: "user"
//       }).save(err => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'user' to roles collection");
//       });

//       new Role({
//         name: "moderator"
//       }).save(err => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'moderator' to roles collection");
//       });

//       new Role({
//         name: "admin"
//       }).save(err => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'admin' to roles collection");
//       });
//     }
//   });
// }
