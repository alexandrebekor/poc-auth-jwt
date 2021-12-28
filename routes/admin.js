const express = require('express')
const router = express.Router()

const jwt = require('jsonwebtoken')
const jwtSecret = '123abcABC456abc'

router.use(async (req, res, next) => {
    const token = req.headers['x-access-token'] || req.body.token || req.query.token
    if (token) {
        try {
            const payload = jwt.verify(token, jwtSecret)
            console.log(payload)
            if (payload.roles.indexOf('Admin') >= 0) {
                next()
            } else {
                res.redirect('/')
            }
        } catch (error) {
            res.send({ auth: false })
        }
    } else {
        res.redirect('/')
    }
})

router.get('/', async (req, res) => {
    res.render('admin/index')
})

module.exports = router