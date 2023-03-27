const express = require('express')
const cors = require('cors')
const app = express();
const cookieParser = require("cookie-parser");

const middleware = require("./middleware/error")

app.use(express.json())
app.use(cookieParser())
app.use(cors());

// Route imports
const book = require("./routes/bookRoute")
const user = require('./routes/userRoute')

app.use('/api/v1', book)
app.use('/api/v1', user)

// middleware for errors
app.use(middleware)

module.exports = app;