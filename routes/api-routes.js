const express = require('express')
const router = express.Router()
const getdata = require('../models/getdata')

router.post('/', (req, res) => {
    getdata.numbers()
    .then(result => {
        res.json(result)
    })
})

router.put('/', (req, res) => {
    getdata.change(req.body.num)
    .then(result => {
        getdata.update(result, req.body.num)
    })
})

router.put('/like', (req, res) => {
    getdata.up(req.body.num)
    .then(result => {
        getdata.update(result, req.body.num)
    })
})



module.exports = router