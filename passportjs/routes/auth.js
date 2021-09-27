const express = require('express')
const router = express.Router()

router.get('/:arg', (req, res, next) => {
    if(req.params.arg == "admin") {
        res.redirect('/admin')
    } else {
        res.redirect('/entrar')
    }
})

module.exports = router