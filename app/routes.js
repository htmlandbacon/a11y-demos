const express = require('express')
const router = express.Router()

const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

// Add your routes here - above the module.exports line

router.get('/phone/collect', (req, res) => {
    res.render('phone/collect.html');
})

router.post('/phone/collect', (req, res) => {
    let number = req.body.phone;
    if (number[0] === '0') {
        number =  '+44' + number.slice(1)
    }
    console.log(number);
    const rawNumber = phoneUtil.parseAndKeepRawInput(number, '+44');
    console.log("isValidNumber", phoneUtil.isValidNumber(rawNumber));
    console.log("isValidNumberForRegion", phoneUtil.isValidNumberForRegion(rawNumber, 'UK'));
    console.log("getNumberType", phoneUtil.getNumberType(rawNumber));
    res.render('phone/collect.html');
})

module.exports = router
