require('dotenv').config()
const mongoose = require("mongoose");

exports.connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Connected to MongoDB: ",
            connect.connection.host,
            connect.connection.name,
            connect.connection.port
        )
    } catch (err) {
        console.log('Error connecting to MongoDB');
        process.exit(1);
    }

    // try {
    //     mongoose.connect(process.env.CONNECTION_STRING)
    //         .then(() => {
    //             console.log('Connected to MongoDB')
    //         })
    //         .catch(() => {
    //             console.log('Error connecting to MongoDB');
    //         })
    // } catch (err) {
    //     process.exit(1);
    // }
};

// const mongoose = require("mongoose");

// const dotenv = require("dotenv");  //require dotenv package
// dotenv.config({ path: "./config.env" }); //import config.env file

// const DB = process.env.DATABASE;  
// const Port = process.env.PORT;
// const URL = process.env.MONGO_URL;

// // require('dotenv').config({ path: 'ENV_FILENAME' });

// const connectDb = async () => {
//   try {
//     // const connect = await mongoose.connect(process.env.CONNECTION_STRING);
//      const connect = await mongoose.connect(process.env.MONGO_URI);
//     console.log(
//       "Database connected: ",
//       connect.connection.host,
//       connect.connection.name
//     );
//   } catch (err) {
//     console.log(err);
//     process.exit(1);
//   }
// };

// module.exports = connectDb;