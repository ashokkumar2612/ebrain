const router = require('express').Router()
const User = require('./userSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/register', async (req, res) => {
    try {
        var emailExist = await User.findOne({ email: req.body.email })
        if (emailExist) {
            return res.status(400).json("Email already exist")
        }

        // Password hash
        var hash = await bcrypt.hash(req.body.password, 10)
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash
        })
        var data = await user.save()
        res.json(data)
    }
    catch (error) {
        res.json(error)
    }
    res.json(req.body)

})
router.post('/login', async (req, res) => {
    try {
        var userData = await User.findOne({ email: req.body.email })
        if (!userData) {
            return res.status(400).json("Email not exist")
        }
        var validPassword = await bcrypt.compare(req.body.password, userData.password)
        if (!validPassword) {
            return res.status(400).json("password not match")
        }
        var userToken = jwt.sign({ email: userData.email }, 'secretKey')
        res.header('auth', userToken).json(userToken)

    }
    catch (err) {
        res.status(400).json(err)
    }
})
const validUser = (req, res, next) => {
    var token = req.header('auth')
    req.token = token
    next()
}
router.get('/home', validUser, async (req, res) => {
    jwt.verify(req.token, 'secretKey', async (err, data) => {
        if (err) {
            res.sendStatus(403)
        } else {
            var getAll = await User.find().select(['-password'])
            res.json(getAll)
        }
    })
})

module.exports = router