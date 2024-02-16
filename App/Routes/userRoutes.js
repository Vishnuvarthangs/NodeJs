const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);

module.exports = router;
