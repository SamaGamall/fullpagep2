const bloodRequestModel = require('../models/bloodRequest.model')
const userModel = require('../models/user.model')
require("dotenv").config();
const jwt = require("jsonwebtoken");
const auth = require('../middleware/verfiyUser.middleware')

const createbloodRequest = (req, res) => {
    bloodRequestModel.create(req.body.bloodRequest)
        .then(bloodRequest => {
            res.json({
                msg: 'bloodRequest created successfully',
                data: bloodRequest
            })
        })
        .catch(err => {
            res.send(err)
        })
}

const viewbloodRequests = async (req, res) => {
    try {
        // Return all blood requests if the user is logged in
        bloodRequestModel.find({ privacy: "public", })
            .then(bloodRequests => {
                res.json({
                    msg: 'All blood requests retrieved successfully',
                    data: bloodRequests
                });
            })
            .catch(err => {
                res.send(err);
            });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

const createBloodRequestPost = async (req, res) => {
    try {
        // Create a new blood request post with the user-provided data
        const bloodRequest = new bloodRequestModel({
            patientName: req.body.patientName,
            requestDetails: req.body.requestDetails,
            phoneNumber: req.body.phoneNumber,
            donationLocation: req.body.donationLocation,
            requestDate: new Date(),
            requestBloodType: req.body.requestBloodType,
            bloodQuantity: req.body.bloodQuantity,
            postedBy: req.userId,
            privacy: "public"
        });
        // Save the blood request post to the database
        const savedBloodRequest = await bloodRequest.save();
        // Return the newly created blood request post to the client
        res.json({
            msg: 'Blood request created successfully',
            data: savedBloodRequest
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

const acceptBloodRequest = async (req, res) => {
    try {
        // Find the blood request by ID
        const bloodRequestId = req.body.requestId;
        const bloodRequest = await bloodRequestModel.findById(bloodRequestId);
        // Check if the blood request exists
        if (!bloodRequest) {
            return res.status(404).json({ message: "Blood request not found" });
        }
        // Check if the logged in user is the same as the user who posted the request
        if (bloodRequest.postedBy.toString() === req.userId) {
            return res.status(400).json({ message: "You cannot accept your own blood request" });
        }
        // Check if the user has already accepted the blood request
        if (bloodRequest.acceptedBy.includes(req.userId)) {
            return res.status(400).json({ message: "You have already accepted this blood request" });
        }
        // Decrement the blood quantity by 1 and add the user to the acceptedBy array
        bloodRequest.bloodQuantity -= 1;
        bloodRequest.acceptedBy.push(req.userId);
        // Save the updated blood request to the database
        const savedBloodRequest = await bloodRequest.save();
        // Return the updated blood request object to the client
        res.json({
            msg: "You have accepted the blood request",
            data: savedBloodRequest,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

const sendPrivateBloodRequest = async (req, res) => {
    try {
        // Create a new blood request with the provided data
        const bloodRequest = new bloodRequestModel({
            patientName: req.body.patientName,
            requestDetails: req.body.requestDetails,
            phoneNumber: req.body.phoneNumber,
            donationLocation: req.body.donationLocation,
            requestDate: new Date(),
            requestBloodType: req.body.requestBloodType,
            bloodQuantity: req.body.bloodQuantity,
            postedBy: req.userId,
            privacy: "private"
        });
        // Save the blood request to the database
        const savedBloodRequest = await bloodRequest.save();
        // Find the receiver user with the provided receiver ID
        const receiver = await userModel.findById(req.body.userId);
        // Check if the receiver user exists
        if (!receiver) {
            return res.status(404).json({ message: 'Receiver user not found' });
        }
        // Send the blood request to the receiver user
        receiver.receivedPrivateBloodRequests.push(savedBloodRequest._id);
        await receiver.save();
        // Find the sender user with the provided sender ID
        const sender = await userModel.findById(req.userId);
        // Add the blood request to the sender user's sent requests
        sender.sentPrivateBloodRequests.push(savedBloodRequest._id);
        await sender.save();
        // Return a success message
        return res.json({ message: 'Blood request sent successfully' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

const deleteBloodRequest = async (req, res) => {
    try {
        const bloodRequestId = req.body.id;
        // Find the blood request post by ID
        const bloodRequest = await bloodRequestModel.findById(bloodRequestId);
        if (!bloodRequest) {
            return res.status(404).json({ message: "Blood request post not found" });
        }
        // Check if the logged-in user is the one who posted the blood request
        if (bloodRequest.postedBy.toString() !== req.userId) {
            return res.status(403).json({ message: "Unauthorized to delete this blood request post" });
        }
        // Delete the blood request post from the database
        await bloodRequestModel.findByIdAndDelete(bloodRequestId);
        res.json({ message: "Blood request deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

const getReceivedPrivateBloodRequests = async (req, res) => {
    try {
        const userId = req.userId;
        const user = await userModel.findById(userId).populate('receivedPrivateBloodRequests');
        const receivedRequests = user.receivedPrivateBloodRequests;
        if (receivedRequests.length === 0) {
            return res.status(200).json({ message: "There are no blood requests" });
        }
        res.status(200).json({
            msg: "receved private blood requests returned successfully",
            data: receivedRequests
        });
    } catch (error) {
        console.log(err);
        res.status(500).json({ message: "Error retrieving received blood requests" });
    }
};
const getSentPrivateBloodRequests = async (req, res) => {
    try {
        const userId = req.userId;
        const user = await userModel.findById(userId).populate('sentPrivateBloodRequests');
        const sentPrivateBloodRequests = user.sentPrivateBloodRequests;
        if (sentPrivateBloodRequests.length === 0) {
            return res.status(200).json({ message: "There are no blood requests" });
        }
        res.status(200).json({
            msg: "sent private blood requests returned successfully",
            data: sentPrivateBloodRequests
        });
    } catch (error) {
        console.log(err);
        res.status(500).json({ message: "Error retrieving sent blood requests" });
    }
};

const getAcceptedBloodRequests = async (req, res) => {
    try {
        const userId = req.userId;
        const acceptedRequests = await bloodRequestModel.find({
            acceptedBy: userId,
        })
        if (acceptedRequests.length === 0) {
            return res.status(200).json({ message: "There are no accepted blood requests" });
        }
        return res.status(200).json({
            msg: "accepted blood request retrieved successfully ",
            data: acceptedRequests
        }
        );
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error retrieving accepted blood requests" });
    }
};



module.exports = {
    createbloodRequest,
    viewbloodRequests,
    createBloodRequestPost,
    acceptBloodRequest,
    sendPrivateBloodRequest,
    deleteBloodRequest,
    getReceivedPrivateBloodRequests,
    getSentPrivateBloodRequests,
    getAcceptedBloodRequests
}