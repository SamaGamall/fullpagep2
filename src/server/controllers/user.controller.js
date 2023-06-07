const userModel = require('../models/user.model')

const createUser = (req, res) => {
    userModel.create(req.body.user)
        .then(user => {
            res.json({
                msg: 'User created successfully',
                data: user
            })
        })
        .catch(err => {
            res.send(err)
        })
}

const readUser = (req, res) => {
    userModel.findById(req.params.id)
        .then(user => {
            if (!user) {
                res.status(404).json({
                    msg: 'User not found'
                })
            } else {
                res.json({
                    data: user
                })
            }
        })
        .catch(err => {
            res.send(err)
        })
}

const deleteUser = (req, res) => {
    userModel.findByIdAndDelete(req.params.id)
        .then(user => {
            if (!user) {
                res.status(404).json({
                    msg: 'User not found'
                })
            } else {
                res.json({
                    msg: 'User deleted successfully',
                    data: user
                })
            }
        })
        .catch(err => {
            res.send(err)
        })
}

const updateUser = (req, res) => {
    userModel.findByIdAndUpdate(req.params.id, req.body.user, { new: true })
        .then(user => {
            if (!user) {
                res.status(404).json({
                    msg: 'User not found'
                })
            } else {
                res.json({
                    msg: 'User updated successfully',
                    data: user
                })
            }
        })
        .catch(err => {
            res.send(err)
        })
}

const viewAllUsers = (req, res) => {
    userModel.find({}, { password: 0, sentPrivateBloodRequests: 0, receivedPrivateBloodRequests: 0 })
        .then(users => {
            if (!users || users.length === 0) {
                res.status(404).json({
                    msg: 'No users found'
                })
            } else {
                res.json({
                    data: users
                })
            }
        })
        .catch(err => {
            res.send(err)
        })
}

const viewAvailableUsers = (req, res) => {
    userModel.find({ availability: "Available" }, { password: 0, sentPrivateBloodRequests: 0, receivedPrivateBloodRequests: 0 })
        .then(users => {
            if (!users || users.length === 0) {
                res.status(404).json({
                    msg: 'No available users found'
                })
            } else {
                res.json({
                    data: users
                })
            }
        })
        .catch(err => {
            res.send(err)
        });
}
//viewprofile() editprofile()
const viewProfile = async (req, res) => {
    const id = req.body.id;
    let user;
    try {
        user = await userModel.findById(id);
    } catch (e) {
        user = null;
    }
    if (!user) {
        res.status(404).json({
            msg: 'User not found'
        })
    } else {
        user.password = undefined;
        user.sentPrivateBloodRequests = undefined;
        user.receivedPrivateBloodRequests = undefined;
        res.json(user);
    }
}

const editProfile = async (req, res) => {
    let updateData = req.body;
    let user;
    try {
        user = await userModel.findByIdAndUpdate(req.body.id, updateData, { returnOriginal: false });
    } catch (e) {
        user = null;
    }
    if (!user) {
        res.status(404).json({
            msg: 'User not found'
        })
    } else {
        user.password = undefined;
        user.sentPrivateBloodRequests = undefined;
        user.receivedPrivateBloodRequests = undefined;
        res.json({
            data: user,
            msg: "user updated successfully"
        });
    }
}
// user can view or edit any user not his own only issue not fixed

module.exports = {
    createUser,
    updateUser,
    readUser,
    deleteUser,
    viewAllUsers,
    viewAvailableUsers,
    viewProfile,
    editProfile,
}
