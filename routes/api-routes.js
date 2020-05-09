const express = require('express')
const router = express.Router()
const getdata = require('../models/getdata')

router.get('/', (req, res) => {
    console.log(getdata.numbers())
    getdata.numbers()
    .then(result => {
        res.json(result)
    })
})

module.exports = router