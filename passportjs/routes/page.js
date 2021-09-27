const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('/')
})

router.get('/entrar', (req, res) => {
    res.send('/entrar')
})

router.get('/blog', (req, res) => {
    res.send('/blog')
})

module.exports = router