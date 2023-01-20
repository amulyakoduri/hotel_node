const express = require('express')
const app = express();
const cookieParser = require("cookie-parser");

const middleware = require("./middleware/error")

app.use(express.json())
app.use(cookieParser())

// Route imports
const hotel = require("./routes/hotelRoute")
const user = require('./routes/userRoute')

app.use('/api/v1', hotel)
app.use('/api/v1', user)

// middleware for errors
app.use(middleware)

module.exports = app;