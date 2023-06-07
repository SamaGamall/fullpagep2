const router = require('express').Router()
const bloodRequestController = require('../controllers/bloodRequest.controller.js')
const auth = require('../middleware/verfiyUser.middleware')

router.post('/create-bloodRequest', bloodRequestController.createbloodRequest)
router.get('/view-bloodRequests', auth.verifyUser, bloodRequestController.viewbloodRequests)
router.post('/create-bloodRequestPost', auth.verifyUser, bloodRequestController.createBloodRequestPost)
router.post('/accept-bloodRequest', auth.verifyUser, bloodRequestController.acceptBloodRequest)
router.post('/create-PrivatebloodRequest', auth.verifyUser, bloodRequestController.sendPrivateBloodRequest)
router.delete('/delete-bloodRequest', auth.verifyUser, bloodRequestController.deleteBloodRequest)
router.get('/view-receivedPrivateBloodRequest', auth.verifyUser, bloodRequestController.getReceivedPrivateBloodRequests);
router.get('/view-SentPrivateBloodRequests', auth.verifyUser, bloodRequestController.getSentPrivateBloodRequests);
router.get('/view-AcceptedBloodRequests', auth.verifyUser, bloodRequestController.getAcceptedBloodRequests);

module.exports = router
