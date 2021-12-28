const express = require('express')
const router = express.Router()
const controller = require('../controllers/pages')
const model = require('../models/users')

router.get('/', controller.index)
router.post('/auth', controller.auth.bind(null, model))

module.exports = router