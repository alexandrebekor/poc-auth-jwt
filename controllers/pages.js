const jwt = require('jsonwebtoken')
const jwtSecret = '123abcABC456abc'

const index = async (req, res) => {
    res.render('index')
}

const auth = async (User, req, res) => {
    const { username, password, roles } = req.body

    try {
        const user = await User.findOne({
            username
        })

        if (user) {
            if (user.password == password) {
                const payload = {
                    id: user._id,
                    username: user.username,
                    roles: user.roles
                }
                jwt.sign(payload, jwtSecret, (error, token) => {
                    res.send({ auth: "success", token })
                })
            } else {
                res.send({ auth: "credentials wrong" })
            }
        } else {
            res.send({ auth: "credentials wrong" })
        }
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    index,
    auth
}