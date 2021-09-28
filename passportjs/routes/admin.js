const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    if('user' in req.session) {
        return next()
    } else {
        res.redirect('/entrar')
    }
})

router.get('/', (req, res) => {
    res.send('Bem-Vindo a administração' + JSON.stringify(req.session))
})

router.get('/secret', (req, res) => {
    res.send('Página secreta' + JSON.stringify(req.session))
})

module.exports = router