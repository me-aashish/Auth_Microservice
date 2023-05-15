const UserController = require('../../controllers/user-controller');
const express = require('express');

const router = express.Router();

router.use('/signup',UserController.create);

module.exports = router;