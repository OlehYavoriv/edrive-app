const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/models')

const generateJwt = (uid, first_name, last_name, email, role) => {
    return jwt.sign({uid, first_name, last_name, email, role}, process.env.SECRET_KEY, {expiresIn: '24h'})
}

class UserController {
    async registration(req, res, next) {
        const {first_name, last_name, email, password, role} = req.body

        if (!email || !password) return next(ApiError.badRequest("The email address or password is incorrect."))

        const candidate = await User.findOne({where: {email}})

        if (candidate) return next(ApiError.badRequest("A user with this email address already exists."))

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({first_name, last_name, email, role, password: hashPassword})
        const token = generateJwt(user.uid, user.first_name, user.last_name, user.email, user.role)

        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})

        if (!user) return next(ApiError.internal("User not found."))

        let comparePassword = bcrypt.compareSync(password, user.password)

        if (!comparePassword) return next(ApiError.internal('Invalid password!'))

        const token = generateJwt(user.uid, user.first_name, user.last_name, user.email, user.role)

        return res.json({token})
    }

    async auth(req, res, next) {
        const token = generateJwt(req.user.uid, req.user.first_name, req.user.last_name, req.user.email, req.user.role)

        return res.json({token})
    }
}

module.exports = new UserController()
