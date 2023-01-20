const User = require("../models/userModel")
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors")
const sendToken = require("../utils/jwtToken");

// register a user
exports.registerUser = catchAsyncErrors(async(req,res) => {

    const {name,email,password,role} = req.body
    const user = await User.create({
        name,email,password,role
    })

    const token = user.getJwtToken();
    
    sendToken(user,200,res);
})

// login user

exports.loginUser = catchAsyncErrors(async (req,res,next) => {
    const {email,password} = req.body;

    // checking if user has given password ana email both
    if(!email || !password){
        return next(new ErrorHandler("Please enter email and password",400))
    }
    const user = await User.findOne({email}).select("+password")
    if(!user){
        return next(new ErrorHandler("Invalid email or password", 401))
    }

    const isPasswordMached = user.comparePassword(password);
    if(!isPasswordMached){
        return next(new ErrorHandler("Invalid email or password", 401))
    }

    sendToken(user,200,res);
})

// get all user
exports.getAllUsers = async(req,res) => {
    const users = await User.find(req.body)
    res.status(200).json({
       sucess: true,
       users
       
    })
}

// logout user

exports.logout = catchAsyncErrors(async (req,res,next) => {
    res.cookie("token",null,{
        expires: new Date(Date.now()),
        httpOnly: true
    })
    res.status(200).json({
        sucess:true,
        message: "Logged Out"
    })
})



