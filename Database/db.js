const mongoose = require("mongoose");
const getConnection = async () => {
    try {
        mongoose.set("strictQuery", false);
        
        const conn = await mongoose.connect(process.env.DB_CONNECT, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        if (conn) {
            console.log(`MongoDB Connected on ${conn.connection.host}`);
        } else {
            console.log("Failed to connect DB");
        }
    } catch (error) {
        console.log(`Failed with error: ${error.message}`);
    }
    
    //const client = new MongoClient(conn);
};

module.exports = getConnection;