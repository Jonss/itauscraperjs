const axios = require('../config/axios');
const cheerio = require('cheerio');
const horseman = require('../config/horseman')();

const LOGIN_URL = 'https://ww70.itau.com.br/M/LoginPF.aspx';

let response = "";
let userBalance = "";

const balance = async (body) => {

    await axios.get(LOGIN_URL).then(res => response = res.data)

    const $ = cheerio.load(response)
    let loginParam = $('#Continue').attr('href').replace('../LoginPF.aspx?', '');

    const { agencia, conta, digito, senha} = body

    if(!agencia || !conta || !digito || !senha) {
        return "Erro: Necessário conta, agência, digito e senha"
    }

    await horseman
    .open(`${LOGIN_URL}?${loginParam}`)
    .type('input[name="ctl00$ContentPlaceHolder1$txtAgenciaT"]', `${agencia}`)
    .type('input[name="ctl00$ContentPlaceHolder1$txtContaT"]', `${conta}`)
    .type('input[name="ctl00$ContentPlaceHolder1$txtDACT"]', `${digito}`)
    .type('input[name="ctl00$ContentPlaceHolder1$txtPassT"]', `${senha}`)
    .click('[name="ctl00$ContentPlaceHolder1$btnLogInT"]')
    .waitForNextPage()
    .evaluate(function () {
        $ = window.$ || window.jQuery;
        var fullHtml = $('body').html();
        return fullHtml;
    })
    .then(html => {
        const $ = cheerio.load(html)
        this.userBalance = $('td .PF_texto12').text()
    })
    .finally(() => {
        horseman.close()
    }) 

    return this.userBalance
}


module.exports = {
    balance
}