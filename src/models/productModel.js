const mongoose = require("mongoose")
const productSchema= new mongoose.Schema({
      product_id: {
        type:objectId,
        require:true

      },
      Name: string,
      Category: String,
      Price: {
        type:Number,
        required: true
      },








},{timestamps:true});
module.export= mogoose.model( 'product' ,productSchema)
