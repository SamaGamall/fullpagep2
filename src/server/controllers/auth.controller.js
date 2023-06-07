const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
require("dotenv").config();
const upload = require('../middleware/uploadImage.middleware');
const multer = require('multer');
const { blacklistedTokens } = require("../middleware/blacklist.middleware")
const signUp = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ message: 'File upload failed' });
            }
            const { email, password, name, address, phoneNumber, age, gender, bloodType, availability, sentPrivateBloodRequests, receivedPrivateBloodRequests } = req.body;
            const existingUser = await userModel.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }
            const hashedPassword = await bcrypt.hash(password, 12);
            const newUser = new userModel({
                email,
                password: hashedPassword,
                name,
                address,
                phoneNumber,
                age,
                gender,
                photo: req.file ? req.file.filename : '',
                bloodType,
                availability,
                sentPrivateBloodRequests,
                receivedPrivateBloodRequests
            });
            await newUser.save();
            res.status(201).json({ message: 'User created successfully' });
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};


const logIn = async (req, res) => {
    try {
        const { email, password: userpassword } = req.body;
        const existingUser = await userModel.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: "Invalid credentials" });
        }
        const isPasswordCorrect = await bcrypt.compare(
            userpassword,
            existingUser.password
        );
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign(
            { email: existingUser.email, id: existingUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "3d" }
        );
        const userWithoutPassword = {
            _id: existingUser._id,
            email: existingUser.email,
            name: existingUser.name,
            address: existingUser.address,
            phoneNumber: existingUser.phoneNumber,
            age: existingUser.age,
            gender: existingUser.gender,
            photo: existingUser.photo,
            bloodType: existingUser.bloodType,
            availability: existingUser.availability,
            sentPrivateBloodRequests: existingUser.sentPrivateBloodRequests,
            receivedPrivateBloodRequests: existingUser.receivedPrivateBloodRequests
        };
        res.status(200).json({
            message: "Logged in successfully",
            data: { user: userWithoutPassword, token },
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

// const logout = async (req, res) => {
//     try {
//         const token = req.headers.authorization.split(' ')[1];
//         blacklistedTokens.push(token);
//         // make user NotAvailable
//         res.status(200).json({ message: "Logged out successfully" });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Something went wrong" });
//     }
// };

module.exports = { signUp, logIn };
