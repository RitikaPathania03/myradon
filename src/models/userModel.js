const mongoose = require('mongoose');
const userId= mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema( {
    _id: userId,
    firstName: String,
    lastName: String,
    mobile: {
        type: String,

        required: true
    },
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    age: Number,
    isDeleted:{
        type:Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema)
