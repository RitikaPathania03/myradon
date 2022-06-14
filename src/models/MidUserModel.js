const mongooose=require('mongoose');
const objectId= mongoose.Schema.Types.bjectId
const MidUserSchema= new mongoose.schema({
    User_id:{
        type: objectId,
        require:true
    },

    Name :{
        type:string
        
    },
    Balance:{
        type:Number,
        Default: 100
    },
    address:{
        type: string
    },
    Age:Number,
    Gender:{
        type:String,
        emum: ["female", "male", "other"]
    },
    isFreeAppUser: {
        default:false
}

}, {timestamps:true});
module.exports = mongoose.model('MidUser', MidUserSchema)
