const express = require('express');
const User = require('../controllers/user');

const router = express.Router();
router.post('/users', User.createUser);
router.get('/users', User.getAllUser);
router.get('/users/:userId', User.getSingleUser);
router.patch('/users/:userId', User.updateUser);
router.delete('/users/:userId', User.deleteUser);

module.exports = router;