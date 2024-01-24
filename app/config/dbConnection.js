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


// module.exports = connectDB;