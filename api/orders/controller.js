const nodemailer = require("nodemailer");
var Mailgen = require('mailgen');
const Order = require('./model');
const { connect } = require("mongoose");
require('dotenv').config


const sendMail = async (req, res) => {
    const {email, customerName} = req.body;


    if(!email || !customerName){
        res.status(403).json({message: "plz give email"})
    }
    else{

        const config ={
            service : "gmail",
            auth: {
              user: process.env.NODEMAILER_EMAIL,
              pass: process.env.NODEMAILER_PASSWORD
            }
          }
        const transporter = nodemailer.createTransport(config);

        var mailGenerator = new Mailgen({
            theme: 'default',
            product: {
                // Appears in header & footer of e-mails
                name: 'Mailgen',
                link: 'https://mailgen.js/'
                // Optional product logo
                // logo: 'https://mailgen.js/img/logo.png'
            }
        });

        var mailEmail = {
            body: {
                name: customerName,
                intro: 'Welcome to Mailgen! We\'re very excited to have you on board.',
                outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
            }
        };



        const response ={
            from: process.env.NODEMAILER_EMAIL, // sender address
            to: email, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: mailGenerator.generate(mailEmail), // html body
          }

       try {

        

        res.json({message : "check"})
        
       } catch (error) {
        res.json({error})
        
       }

    }

}

const addOrders = async(req, res) =>{
    
        const {items, totalBill, customerAdress, customerContact,customerName, customerEmail} = req.body
        if(!items || !totalBill || !customerAdress || !customerContact || !customerName || !customerEmail){
            res.status(403).json({message: "Invalid Information"})
        }
        else{

            try {
                await connect(process.env.MONGO_URL)
                const order= await Order.create(items, totalBill, customerAdress, customerContact,customerName, customerEmail)
     
                 //email
                 const transporter = nodemailer.createTransport({
                     service : "gmail",
                     auth: {
                       user: process.env.NODEMAILER_EMAIL,
                       pass: process.env.NODEMAILER_PASSWORD
                     }
                   });     
             var mailGenerator = new Mailgen({
                 theme: 'default',
                 product: {
                     name: 'Mailgen',
                     link: 'https://mailgen.js/'
                 }
             });
     
               await transporter.sendMail({
                 from: process.env.NODEMAILER_EMAIL, // sender address
                 to: customerEmail, // list of receivers
                 subject: "Hello ✔", // Subject line
                 text: "Hello world?", // plain text body
                 html: mailGenerator.generate( {
                     body: {
                     name: customerName,
                     intro: 'Thanks for ordering',
                     table: {
                        data: [{
                            name : customerName,
                            email: customerEmail,
                            TrackingId: order._id,
                            Address : customerAdress,
                            Contact : customerContact
                     }]

                     },
                     outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
                     }
                 }), // html body
               });
                res.status(201).json({
                 message: "Order Placed Successfully ",
                 TrackingId : order._id
                })
             
                
            } catch (error) {
                res.json({message: error.message})
                
            }
           
        } 
        
    } 

    const allOrders = async(req, res) =>{
        try {
            await connect(process.env.MONGO_URL)
            const orders = await Order.find()
            res.json({orders})
            
        } catch (error) {
            res.status(500).json({message: error.message})
            
        }
    }

    const orderbyId = async(req, res) =>{
        const {_id} = req.params
        try {
            await connect(process.env.MONGO_URL)
            const order = await Order.findOne(_id)
            res.json({order})
            
        } catch (error) {
            res.status(500).json({message: error.message})
            
        }
    }

module.exports = {sendMail, addOrders,orderbyId, allOrders}