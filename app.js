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
const bcrypt = require('bcryptjs');

// Middleware
app.use(express.json());
//app.use(bodyParser.json());

// Database connection
const URI = process.env.DB_URL;
mongoose.connect(URI, dbConfig.options)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

const db = mongoose.connection;
db.once("open", async () => {
  if ((await User.countDocuments().exec()) > 0) return;
  let salt = await bcrypt.genSalt(10);
  let password = await bcrypt.hash("admin", salt);
  Promise.all([
    User.create({name: "admin",email : "admin@admin.com", password : password, role : {isAdmin : true}}),
  ]).then(() => console.log("Added Admin User"));
});
app.use(express.json());

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
