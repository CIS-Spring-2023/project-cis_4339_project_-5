const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const org = process.env.ORG

// import services model
const { users } = require('../models/models')

const saltRounds = process.env.SALT_ROUNDS || 10;

// GET create user
router.post('/signup', async (req, res, next) => {
    const { username, password, role } = req.body;
    if (!username || !password || role) {
        res.status(400).send({ error: "providfe user name and passord" })
        return
    }

    const salt = await bcrypt.genSalt(parseInt(saltRounds))
    const hasdhedPassword = await bcrypt.hash(password.trim(), salt)

    const newUser = await users.create({ username: username.trim(), password: hasdhedPassword, role })

    await newUser.save();
    res.json(newUser)

})

// GET login user
router.post('/login', async (req, res, next) => {

    const { username, password } = req.body;

    // check if username and passowrd exist in the request body
    if (!username || !password) {
        error = new Error("user not found nnnn")
        error.statusCode = 400;
        return next(error);
    }

    // lookup the user in the database
    const user = await users.findOne({ username })

    // if no user found, return error
    if (!user) {
        const error = new Error('User not found')
        error.statusCode = 400;
        return next(error)
    }

    const matched = await bcrypt.compare(password.trim(), user.password)

    // if password does not match return 400
    if (!matched) {
        const error = new Error('Please check your username or password')
        error.statusCode = 400;
        return next(error)
    }

    res.json(user)

})



module.exports = router
