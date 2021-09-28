const express = require('express')
const router = express.Router()

router.get('/entrar/:arg', (req, res, next) => {
    console.log(req.params.arg)
    if(req.params.arg == "entrar") {
        req.session.user = req.params.arg
        res.redirect('/admin')
    } else {
        res.redirect('/entrar')
    }
})

router.get('/sair', (req, res, next) => {
    req.session.destroy(() => {
        res.redirect('/entrar')
    })
})

module.exports = router