
// 	_id: ObjectId("61951bfa4d9fe0d34da86344"),
// 	userId: “61951bfa4d9fe0d34da86829”,
// 	productId: “61951bfa4d9fe0d34da86344”
// 	amount: 0,
// 	isFreeAppUser: true, 
// 	date: “22/11/2021”

const MidUserModel = require("./MidUserModel");
const productModel= require("./productModel")

const mongooose= mongoose("require")
const ObjectId= mongoose.Schema.Types.OrderId
const orderModel= new mongoose.schema({
order_id:{
    type: objectId,
    ref: "MidUser"
},
productId:{
    type:objectId,
    ref: "product"
},
amount: Number,
isFreeAppUser:{
    type:Boolean,
    default:true
},
date: Number

}, {timestamps:true});
module.export= mongoose.model( 'order', orderSchema)
