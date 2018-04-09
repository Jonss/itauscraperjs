const axios = require('../config/axios');
const cheerio = require('cheerio');
const FormData = require('form-data');

const LOGIN_URL = 'https://ww70.itau.com.br/M/LoginPF.aspx';

let response = "";

const balance = async (body) => {
    

    await axios.get(LOGIN_URL).then(res => response = res.data)

    const $ = cheerio.load(response)
    let url = $('#Continue').attr('href').replace('../LoginPF.aspx?', '');
    console.log(url)

   
    await axios.get(`${LOGIN_URL}?${url}`)

    await axios({
        method: 'post',
        url: `${LOGIN_URL}?${url}`,
        data: form(body),
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    }).then(res => console.log(res.data))

}

const form = body => {
    const { agencia, conta, digito, senha } = body
    // fazer alguma validação antes

    let data = new FormData()
    data.append('ctl00$ContentPlaceHolder1$txtAgenciaT', agencia)
    data.append('ctl00$ContentPlaceHolder1$txtContaT', conta)
    data.append('ctl00$ContentPlaceHolder1$txtDACT', digito)
    data.append('ctl00$ContentPlaceHolder1$txtPassT', senha)
    data.append('ctl00$ContentPlaceHolder1$btnLogInT.x', '12')
    data.append('ctl00$ContentPlaceHolder1$btnLogInT.y', '14')
    data.append('ctl00$hddAppTokenApp', '')
    data.append('ctl00$hddExisteApp', '')


    return data
}


module.exports = {
    balance
}