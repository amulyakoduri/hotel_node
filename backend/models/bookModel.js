const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please Enter book Name"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please Enter book Description"],
    },
    user:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("book", bookSchema);