const { constants } = require("../constants") 
const errorHandler = (err, req, res, next) => {
    console.log("Middleware Error Handling");
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
            title: "Validation Failed",
            message: err.message,
            stackTrace: err.stack,
            });
        break;
        case constants.NOT_FOUND:
            res.json({
            title: "Not Found",
            message: err.message,
            stackTrace: err.stack,
            });
        case constants.UNAUTHORIZED:
            res.json({
            title: "UNAUTHORIZED",
            message: err.message,
            stackTrace: err.stack,
            });
        case constants.FORBIDDEN:
            res.json({
            title: "FORBIDDEN",
            message: err.message,
            stackTrace: err.stack,
            });
        case constants.SERVER_ERROR:
            res.json({
            title: "SERVER_ERROR",
            message: err.message,
            stackTrace: err.stack,
            });
        
        default:
            console.log("No Error, All are good!");
            break;
    }
};
    
module.exports = errorHandler;

  // res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  // next();


// // ErrorHandler.js
// const ErrorHandler = (err, req, res, next) => {
//     console.log("Middleware Error Hadnling");
//     const errStatus = err.statusCode || 500;
//     const errMsg = err.message || 'Something went wrong';
//     res.status(errStatus).json({
//         success: false,
//         status: errStatus,
//         message: errMsg,
//         stack: process.env.NODE_ENV === 'development' ? err.stack : {}
//     })
// }

// export default ErrorHandler