const router = require('express').Router()
const authController = require('../controllers/auth.controller.js')
const auth = require('../middleware/verfiyUser.middleware')
router.post('/signUp', authController.signUp)
router.post('/LogIn', authController.logIn)
//router.post('/logout', auth.verifyUser, authController.logout)
module.exports = router