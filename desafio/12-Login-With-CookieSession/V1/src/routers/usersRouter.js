import { Router } from "express";

import { requiereAutenticacion } from "../middlewares/authMiddleware.js";

export const usersRouter = new Router()

usersRouter.get('/', requiereAutenticacion, (req, res) => {
    res.json({ gaspi: 'booenas', user: req.user })
})

