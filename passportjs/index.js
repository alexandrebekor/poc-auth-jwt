const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Session
const session = require('express-session')
app.use(session({ secret: 'bekor', resave: false, saveUninitialized: true }))

// Template
const path = require('path')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use((req, res, next) => {
    if('user' in req.session) {
        res.locals.user = req.session.user
    }
    next()
})

// Router
const PageRouter = require('./routes/page')
const AuthRouter = require('./routes/auth')
const AdminRouter = require('./routes/admin')
app.use('/', AuthRouter)
app.use('/', PageRouter)
app.use('/admin', AdminRouter)

app.listen(port, () => { console.log('Running on ' + port) })