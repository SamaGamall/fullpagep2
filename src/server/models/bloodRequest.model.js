const mongoose = require("mongoose")

const bloodRequestSchema = new mongoose.Schema({
    patientName: {
        type: String,
        required: true
    },
    requestDetails: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    donationLocation: {
        type: String,
        required: true
    },
    requestDate: {
        type: Date,
        required: true
    },
    requestBloodType: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        required: true
    },
    bloodQuantity: {
        type: Number,
        required: true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    acceptedBy: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        default: []
    },
    privacy: {
        type: String,
        enum: ["private", "public"]
    }
})


const bloodRequestModel = mongoose.model('bloodRequest', bloodRequestSchema)

module.exports = bloodRequestModel