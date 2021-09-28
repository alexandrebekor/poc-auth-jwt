const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('/')
})

router.get('/entrar', (req, res) => {
    res.send('<p>/entrar</p>' + JSON.stringify(req.session))
})

router.get('/blog', (req, res) => {
    res.send('/blog')
})

module.exports = router