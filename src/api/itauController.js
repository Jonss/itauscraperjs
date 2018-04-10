const express = require('express');
const router = express.Router();
const itauService = require('../service/itauService')

router.post("/investment", async (req, res) => {
    balance = await itauService.balance(req.body)
    res.json({ "data": balance })
});

module.exports = app => app.use('/api', router)