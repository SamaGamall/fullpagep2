const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
        required: true,
    },
    bloodType: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        required: true,
    },
    photo: {
        type: String
    },
    availability: {
        type: String,
        enum: ["Available", "NotAvailable"],
        default: "NotAvailable"
    },
    sentPrivateBloodRequests: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "bloodRequest",
        default: []
    },
    receivedPrivateBloodRequests: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "bloodRequest",
        default: []
    }
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;