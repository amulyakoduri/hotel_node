const Book = require("../models/bookModel")
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors")

// get all products

exports.getAllBooks= catchAsyncErrors(async(req,res) => {
    let books = await Book.find(req.body)
    res.status(200).json({
        sucess: true,
        books
    })
})

// Create book --Admin

exports.createBook = async(req,res,next) => {
    req.body.user = req.user.id
    let book = await Book.create(req.body)

    res.status(201).json({
        sucess: true,
        book
    })
}

// update book --Admin

exports.updateBook = catchAsyncErrors(async(req,res,next)=> {
    let book = await Book.findById(req.params.id)

    if(!book){
        return next(new ErrorHandler("Book not found" , 404))
    }

    book = await Book.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runvalidators: true,
        useFindAndModify: false
    })

    res.status(201).json({
        sucess: true,
        book
    })
})

// delete the book

exports.deleteBook = catchAsyncErrors(async(req,res,next) => {
    let book = await Book.findByIdAndDelete(req.params.id)

    if(!book){
        return next(new ErrorHandler("Hotel not found" , 404))
    }

    await book.remove()

    res.status(200).json({
        sucess: true,
        message: "Product deleted sucessfully"
    })
})

// get book details

exports.getBookDetails = catchAsyncErrors(async(req,res,next) => {
    let book = await Book.findById(req.params.id)

    if(!book){
        return next(new ErrorHandler("Hotel not found" , 404))
    }


    res.status(200).json({
        sucess: true,
        book
    })

})