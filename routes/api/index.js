const express = require('express');
const { route } = require('./auth');

const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/passwords', require('./passwords'));
router.use('/gardens', require('./gardens'));
router.use('/attendees', require('./attendees'))
router.use('/uploads', require('./uploads'));
router.use('/users', require('./users'));

module.exports = router;
