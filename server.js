
const express = require("express");
const { connectDB } = require('./app/config/dbConnection');
//import errorHandler from "./app/middlewares/ErrorHandler.js";
const errorhandler = require("./app/middleware/Errorhandler");
const dotenv = require("dotenv").config();

// init app
const app = express();

exports.app = app;

// ************************  Database Connection  **********************************//
connectDB();
// ************************ .env PORT ******************************** //
const port = process.env.PORT || 5000;

// ************************ MIDDLEWARES ******************************** //
app.use(express.json());
app.use("/api/Contacts", require("./app/routes/ContactRoutes")); 
app.use("/api/Users", require("./app/routes/UsersRoutes")); 
// ******************************** ERROR HANDLER MIDDLEWARE (Last middleware to use) ******************************** //
app.use(errorhandler);

// app.use(express.json({ extended: false }));

app.listen(port, () => {
    // console.log(`Server running on port  $ {port}`);
    console.log('Server running on port: ' + port);
});