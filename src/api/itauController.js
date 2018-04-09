const express = require('express');
const router = express.Router();
const itauService = require('../service/itauService')

router.post("/", (req, res) => {
    itauService.balance(req.body)
    res.json({ "legal": "ehm"})
});

module.exports = app => app.use('/api', router)