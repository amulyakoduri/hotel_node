const app = require('./app')
const dotenv = require("dotenv")
const {connectDatabase } = require("./config/database");

// handling uncought exceptions

process.on("uncaughtException",(err) => {
   console.log(`Error : ${err.message}`);
   console.log('Shutting down the server uncaughtException Rejection');
   process.exit(1)
})


// config
dotenv.config({path:"backend/config/config.env"})

// connect database

connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`server is working on http://localhost:${process.env.PORT}`)
})


// unhandled Promise rejection

process.on('unhandledRejection', err => {
    console.log(`Error : ${err.message}`);
    console.log('Shutting down the server unhandledRejection Rejection');
    server.close(() => {
        process.exit(1);
    })

})