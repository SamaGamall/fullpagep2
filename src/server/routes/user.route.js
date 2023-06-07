const router = require('express').Router()
const userController = require('../controllers/user.controller.js')
const auth = require('../middleware/verfiyUser.middleware')

router.post('/create', userController.createUser)
router.get('/read/:id', userController.readUser);
router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);
router.get('/viewAll', auth.verifyUser, userController.viewAllUsers);
router.get('/viewAvailable', auth.verifyUser, userController.viewAvailableUsers);
router.get('/viewProfile', auth.verifyUser, userController.viewProfile);
router.put('/editProfile', auth.verifyUser, userController.editProfile);
module.exports = router