const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyUser = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedData = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decodedData?.id;
        if (!userId) throw new Error("Invalid token");
        req.userId = userId;
        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized" });
    }
};

module.exports = { verifyUser };
