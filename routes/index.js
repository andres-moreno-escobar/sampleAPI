const express = require('express');
const Data = require('../public/data');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to SampleAPI' });
});

module.exports = router;
