const Hotel = require("../models/hotelModel")
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors")

// get all products

exports.getAllHotels= catchAsyncErrors(async(req,res) => {
    let hotels = await Hotel.find(req.body)
    res.status(200).json({
        sucess: true,
        hotels
    })
})

// Create hotel --Admin

exports.createHotel = catchAsyncErrors(async(req,res,next) => {
    req.body.user = req.user.id
    let product = await Hotel.create(req.body)

    res.status(201).json({
        sucess: true,
        product
    })
})

// update hotel --Admin

exports.updateHotel = catchAsyncErrors(async(req,res,next)=> {
    let hotel = await Hotel.findById(req.params.id)

    if(!hotel){
        return next(new ErrorHandler("Hotel not found" , 404))
    }

    hotel = await Hotel.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runvalidators: true,
        useFindAndModify: false
    })

    res.status(201).json({
        sucess: true,
        hotel
    })
})

// delete the hotal

exports.deleteHotel = catchAsyncErrors(async(req,res,next) => {
    let hotel = await Hotel.findByIdAndDelete(req.params.id)

    if(!hotel){
        return next(new ErrorHandler("Hotel not found" , 404))
    }

    await hotel.remove()

    res.status(200).json({
        sucess: true,
        message: "Product deleted sucessfully"
    })
})

// get hotel details

exports.getHotelDetails = catchAsyncErrors(async(req,res,next) => {
    let hotel = await Hotel.findById(req.params.id)

    if(!hotel){
        return next(new ErrorHandler("Hotel not found" , 404))
    }

    await hotel.remove()

    res.status(200).json({
        sucess: true,
        hotel
    })

})