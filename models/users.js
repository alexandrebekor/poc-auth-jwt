const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    username: String,
    password: String,
    roles: [String]
})

const User = model('User', UserSchema)

module.exports = User