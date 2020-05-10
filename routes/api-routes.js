const express = require('express')
const router = express.Router()
const getdata = require('../models/getdata')

router.post('/', (req, res) => {
    getdata.numbers()
    .then(result => {
        res.json(result)
    })
})



module.exports = router