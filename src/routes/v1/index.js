const UserController = require('../../controllers/user-controller');
const express = require('express');
const {AuthRequestMiddleware} = require('../../middlewares/index');

const router = express.Router();

router.post(
    '/signup',
    AuthRequestMiddleware.validateRequest,
    UserController.create
);
router.post(
    '/signin',
    AuthRequestMiddleware.validateRequest,
    UserController.signIn
);

router.get(
    '/isAuthenticated',
    UserController.isAuthenticated
);

module.exports = router;