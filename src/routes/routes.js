const express = require('express');
const User = require('../controllers/user');
const Mail = require('../controllers/mail');

const router = express.Router();
router.post('/users', User.createUser);
router.get('/users', User.getAllUser);
router.get('/users/:userId', User.getSingleUser);
router.patch('/users/:userId', User.updateUser);
router.delete('/users/:userId', User.deleteUser);
router.post('/mail/sendmail', Mail.sendMail);

module.exports = router;