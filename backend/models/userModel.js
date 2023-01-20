const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Please enter a name"],
        maxlenght: [30, "name cannot exeed 30 charectors"],
        minlenght: [4, "name should have more than 5 charectors"]
    },
    email: {
        type: String,
        required: [true,"Please enter a email"],
        unique:true,
        validate:[validator.isEmail, "Please enter the valide email"]
    },
    password: {
        type: String,
        required: [true,"Please enter a password"],
        minlenght: [8, "password should have more than 8 charectors"],
        select:false
    },
    role: {
       type: String,
       default: "user",
       required: true
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date

})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
       next()
    }
    this.password = await bcrypt.hash(this.password,10)
})

// JWT TOKEN

userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
};

// compare password
userSchema.methods.comparePassword =async function(enterPassword){
    return await bcrypt.compare(enterPassword,this.password)
}
  



module.exports = mongoose.model("User", userSchema)