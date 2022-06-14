const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     module.exports = .model('User', userSchema)fatherName: String,
    //     siblingName: Stringmongoose
    // },
    // cars: [ String  ]
}, { timestamps: true });

 //users



// String, Number
// Boolean, Object/json, array