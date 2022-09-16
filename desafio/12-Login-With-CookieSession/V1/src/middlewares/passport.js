import passport from 'passport'
import { Strategy } from 'passport-local'

import { getById } from '../persistencia/users.js'

import { registrateUser } from '../api/usersApi.js'

import {authenticate} from '../api/authApi.js'

passport.use('register', new Strategy({
    passReqToCallback: true,
},
    async (req, username, password, done) => {
        try {
            const usuario = await  registrateUser(req.body)
            done(null, usuario)
        } catch (error) {
            return done(error)
        }
    }))

passport.use('login', new Strategy(
    async (username, password, done) => {
        try {
            const usuario = await authenticate(username, password)
            done(null, usuario)
        } catch (error) {
            done(null, false)
        }
    }))

export const passportMiddleware = passport.initialize()

passport.serializeUser((user, done) => {
    console.log(user, new Date().toLocaleDateString())
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    const user = await getById(id)
    done(null, user)
})

export const passportSessionHandler = passport.session()