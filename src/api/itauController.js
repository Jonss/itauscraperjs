const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
    res.send('OK' +  req.body)
});

router.post("/", (req, res) => {
    const { conta, agencia, digito, senha } = req.body

    console.log(`Conta: ${conta}\nAgência: ${agencia}\nDigito: ${digito}\nPassword ${senha}`)

    res.json({conta, agencia, digito, senha})
});



module.exports = app => app.use('/api', router)