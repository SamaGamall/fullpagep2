const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const compress = require("compression")
const cors = require("cors")
const helmet = require("helmet")
const mongoose = require("mongoose")
const userRouter = require('./routes/user.route')
const bloodRequestRouter = require('./routes/bloodRequest.route')
const authRouter = require('./routes/auth.route')
mongoose.Promise = global.Promise
mongoose.set('strictQuery', false)

mongoose.connect("mongodb://127.0.0.1:27017/blood_bank", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log(`Database connected successfully @ ${"mongodb://127.0.0.1:27017/blood_bank"}`) })

mongoose.connection.on('error', (err) => {
    throw new Error(`Unable to connect to database: ${"mongodb://127.0.0.1:27017/blood_bank"}\n${err}`)
})
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );
    next();
});
app.use('/api/v1/users', userRouter)
app.use('/api/v1/bloodRequests', bloodRequestRouter)
app.use('/api/v1/auth', authRouter)
app.listen(5000);