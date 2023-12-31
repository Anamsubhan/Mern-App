const {Schema, model} = require('mongoose')




const OrderSchema = new Schema(
    {
        items: {
            type : Array,
            required : true
        },
         totalBill: {
            type : String,
            required : true
         }, 
         customerAdress: {
            type: String,
            required : true
         },
         customerContact: {
            type : String,
            required: true
         },
         customerName: {
            type : String,
            required:true
         }, 
         customerEmail: {
            type: String,
            required: true
         },
         orderDate: {
            type: Date,
            default: Date.now
         }
    }
)

const Order = model('order', OrderSchema)
module.exports = Order