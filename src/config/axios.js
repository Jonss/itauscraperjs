const axios = require('axios')

module.exports = axios.create({
    headers: {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Mobile Safari/537.36',
        'Accept': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Mobile Safari/537.36',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'pt-BR,pt;q=0.8,en-US;q=0.6,en;q=0.4',
    }
})

/*


        {'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Mobile Safari/537.36'},
        {'Accept': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Mobile Safari/537.36'},
        {'Accept-Encoding': 'gzip, deflate, br'},
        {'Accept-Language': 'pt-BR,pt;q=0.8,en-US;q=0.6,en;q=0.4'},
   


    .type('input[name="ctl00$ContentPlaceHolder1$txtAgenciaT"]', `${agencia}`)
    .type('input[name="ctl00$ContentPlaceHolder1$txtContaT"]', `${conta}`)
    .type('input[name="ctl00$ContentPlaceHolder1$txtDACT"]', `${digito}`)
    .type('input[name="ctl00$ContentPlaceHolder1$txtPassT"]', `${senha}`)
    .click('[name="ctl00$ContentPlaceHolder1$btnLogInT"]')
    
    
    */