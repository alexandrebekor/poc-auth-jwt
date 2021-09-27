const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Router
const PageRouter = require('./routes/page')
const AuthRouter = require('./routes/auth')
const AdminRouter = require('./routes/admin')
app.use('/', PageRouter)
app.use('/admin', AuthRouter)
app.use('/admin', AdminRouter)

app.listen(port, () => { console.log('Running on ' + port) })