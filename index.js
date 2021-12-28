const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

const mongodb = "mongodb://localhost:27017/poc-auth-passport"
const mongoose = require('mongoose')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const routePages = require('./routes/pages')
app.use('/', routePages)

const routeAdmin = require('./routes/admin')
app.use('/admin', routeAdmin)

// assets
app.use(express.static(path.join(__dirname, 'public')))

const User = require('./models/users')
const initialUsers = async () => {
    const count = await User.count()
    if (count == 0) {
        await User.create({
            username: "Alexandre",
            password: "12345",
            roles: "Admin"
        })
    }
}
mongoose
    .connect(mongodb)
    .then(() => {
        initialUsers()
        app.listen(port, console.log('Server is runnig'))
    })
    .catch(error => console.log(error))