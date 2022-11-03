import { Router } from 'express'
import userController from '../Controllers/users.controller.js'

const router = Router()

router.get('/',userController.getAllUsers_)
router.get('/in',userController.getAllUsers_)

export default router;