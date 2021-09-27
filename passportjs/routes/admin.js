const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Bem-Vindo a administração')
})

router.get('/secret', (req, res) => {
    res.send('Página secreta')
})

module.exports = router