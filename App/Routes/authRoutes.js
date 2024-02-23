const express = require('express');
const router = express.Router();
bodyParser = require('body-parser').json();
const authController = require('../Controllers/authController');
const CRUDController = require('../Controllers/crudController');
//const { signup, login, refreshToken } = require('../Controllers/authController');
const { verifySignUp } = require("../Middlewares");
const authControllers = require('../Controllers/auth.controller');

// router.post('/login', authController.login);
// router.post('/token', authController.refreshToken);

const isAuth = require('../Middlewares/auth');
const isAdmin = require('../Middlewares/admin');

router.post('/signup', authController.signup);
router.post('/login', bodyParser, authController.login);
router.post('/refresh-token', authController.refreshToken);

router.get('/crud/', [isAuth], CRUDController.getPost(), (req, res) => {
    res.json(res.paginatedResults);
});
router.post('/crud/', [isAuth, isAdmin], CRUDController.addPost);
router.patch('/crud/:id', [isAuth, isAdmin], CRUDController.updatePost);
router.delete('/crud/:id', [isAuth, isAdmin], CRUDController.deletePost);



router.post(
    "/signups",
    [
        verifySignUp.checkDuplicateUsernameOrEmail,
        verifySignUp.checkRolesExisted
    ],
    authControllers.signup
);

router.post("/signin", authControllers.signin);

router.post("/refreshtoken", authControllers.refreshToken);

module.exports = router;






