const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Session
const session = require('express-session')
app.use(session({ secret: 'bekor', resave: false, saveUninitialized: true }))

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
app.use('/', PageRouter)
app.use('/admin', AuthRouter)
app.use('/admin', AdminRouter)

app.listen(port, () => { console.log('Running on ' + port) })