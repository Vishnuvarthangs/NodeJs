const express = require("express");
//const connectDB = require(".app/config/dbConnection");
const { connectDB } = require('./app/config/dbConnection');
//import errorHandler from "./app/middlewares/ErrorHandler.js";
const errorHandler = require("./app/middleware/Errorhandler");
const dotenv = require("dotenv").config();

// ************************  Database Connection  **********************************//
connectDB();

// init app
const app = express();

//exports.app = app;
// ************************ .env PORT ******************************** //
const port = process.env.PORT || 5000;

// ************************ MIDDLEWARES ******************************** //
app.use(express.json());
app.use("/api/Contacts", require("./app/routes/ContactRoutes")); 
app.use("/api/Users", require("./app/routes/UsersRoutes")); 
// ******************************** ERROR HANDLER MIDDLEWARE (Last middleware to use) ******************************** //
app.use(errorHandler);

// app.use(express.json({ extended: false }));

app.listen(port, () => {
    // console.log(`Server running on port  ${port}`);
    console.log('Server running on port: ' + port);
});