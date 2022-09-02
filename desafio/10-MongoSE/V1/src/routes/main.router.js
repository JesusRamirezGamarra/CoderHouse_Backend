//----------* IMPORT'S *----------//
import {Router} from 'express'
const router= new Router();
import {login,logout} from '../middleware/SecurityContainer.js'

//----------* CART ROUTES *----------//
// Admin User Login
router.get('/login', login)

// Admin User Logout
router.get('/logout', logout)

//----------* EXPORTS ROUTER *----------//
export default router;

