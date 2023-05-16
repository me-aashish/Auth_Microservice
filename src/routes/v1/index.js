const UserController = require('../../controllers/user-controller');
const express = require('express');

const router = express.Router();

router.post('/signup',UserController.create);
router.post('/signin',UserController.signIn);

module.exports = router;