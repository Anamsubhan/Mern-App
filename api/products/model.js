const {Schema, model} =require('mongoose')

const ProductSchema = new Schema({
    title : {
        type : String,
        required : true
    }
    ,
    catname : {
        type : String,
        required :true
    },
    brandname : {
        type : String,
        required : true

    }
    ,
    price : {
        type : Number,
        required : true
    },
    priceUnit: {
        type: String,
        required: true,
        default: "RS"
    },
    description : {
        type : String,
        required : true
    }
    ,
    thumb : {
        type : String,
        required : true
    }
    ,
    images : {
        type : Array,
        required : true
    }
    
})


const Products = model('product',ProductSchema)
module.exports = Products