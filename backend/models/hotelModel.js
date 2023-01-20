const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please Enter product Name"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please Enter product Description"],
    },
    user:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    }

})

module.exports = mongoose.model("Hotel", hotelSchema);