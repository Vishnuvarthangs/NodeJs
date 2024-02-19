const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

// router.get('/', userController.getAllUsers);
// router.get('/:id', userController.getUserById);

// module.exports = router;

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", userController.allAccess);

  app.get("/api/test/user", [authJwt.verifyToken], userController.userBoard);

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    userController.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    userController.adminBoard
    );
    
    
app.get('/', userController.getAllUsers);
    app.get('/:id', userController.getUserById);
    
};
