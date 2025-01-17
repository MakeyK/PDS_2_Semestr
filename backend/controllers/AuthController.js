const ApiError = require('../ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, UserStorage } = require('../models/models')
const sequelize = require('../db');
const { Users } = require('../models/models');

const generateJwt = (id_user, login, password) => {
  return jwt.sign
    (
      { id_user, login, password },
      process.env.SECRET_KEY,
      { expiresIn: '72h' }
    )
}

class AuthController {
  async registration(req, res, next) {
    try {
      const { login, password } = req.body
      if (!login) {
        return next(ApiError.badRequest('Логин не должен быть пустым!'))
      }
      if (!password) {
        return next(ApiError.badRequest('Пароль не должен быть пустым'))
      }
      let candidate = await Users.findOne({ where: { login } })
      if (candidate) {
        return next(ApiError.badRequest('Пользователь с таким логином уже существует!'))
      }
      const user = await Users.create({ login, password })
      const token = generateJwt(user.id_user, user.role)
      return res.json({ token })
    } catch (error) {
      console.log(error)
      return next(ApiError.badRequest("Что-то пошло не так"))
    }
  }

  async login(req, res, next) {
    try {
      const { login, password } = req.body
      if (!login) {
        return next(ApiError.badRequest('Логин должен быть не пустым!'))
      }
      if (!password) {
        return next(ApiError.badRequest('Пароль должен быть не пустым!'))
      }
      const user = await Users.findOne({ where: { login } })
      if (!user) {
        return next(ApiError.internal('Пользователь не найден!'))
      }
      if (password !== user.password) {
        return next(ApiError.badRequest("Пароли не совпадают!"))
      }
      const token = generateJwt(user.id_user, user.role)
      return res.json({ token })
    } catch (error) {
      console.log(error)
      return next(ApiError.badRequest("Что-то пошло не так"))
    }
  }
}


module.exports = new AuthController()   