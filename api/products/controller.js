require('dotenv').config()
const Brand = require('../brands/model')
const Category = require('../categories/model')
const Products = require('./model')
const { connect } = require('mongoose')


const getAllProducts = async (req, res) => {
    try {
        await connect(process.env.MONGO_URL)
        const products = await Products.find()
        res.json({products})
    }
    catch (error) {
        res.status(400).json(
            {
                message: error.message
            }
        )
    }
}

const addProduct = async (req, res) => {
    const { title, price, thumb, brandname, catname, description, images } = req.body;

    if (!title || !price || !thumb || !brandname || !catname || !description || !images) {
        res.status(400).json({
            message: "Missing Required Field"
        })
    }

    else {

        try {
            await connect(process.env.MONGO_URL)
            const checkExistProd = await Products.exists({ title })

            if (checkExistProd) {
                res.json({
                    message: "Product Already Added"
                })
            }
            else {
                await Products.create({ title, price, thumb, brandname, catname,  description,  images })
                const products = await Products.find()
                res.status(201).json({
                    message: "Done"
                })

            }
        }
        catch (error) {
            res.status(200).json({
                message: "Error"
            })

        }

    }
}


const productbyId = async (req, res) => {

    const { _id } = req.params
    try {
        await connect(process.env.MONGO_URL)
        const product = await Products.findOne({ _id})
        res.json(
            {
                product
            }
        )

    }

    catch (error) {
        res.json(
            {
                message: error.message
            }
        )

    }
}

const productbyBrand = async (req, res) => {

    const { brandname } = req.params
    try {
        await connect(process.env.MONGO_URL)
        const products = await Products.find({ brandname  })
        res.json({ products : products})

    }
    catch (error) {
        res.json(
            {
                message: error.message
            }
        )

    }
}

const productbyCategory = async (req, res) => {

    const { catname } = req.params


    try {
        await connect(process.env.MONGO_URL)
        const products = await Products.find({ catname })
        res.json({ products} )

    }

    catch (error) {
        res.json(
            {
                message: error.message
            }
        )

    }
}

//updateproduct

const updateproduct = async (req, res) => {

    const { _id } = req.params


    try {
        await connect(process.env.MONGO_URL)
        const products = await Products.updateOne({ _id }, {
            $set: {
                title: req.body.title,
                price: req.body.price
            }
        })
        res.json(
            {
                message: "Product Updated Successfully"
            }
        )

    }

    catch (error) {
        res.json(
            {
                message: error.message
            }
        )

    }
}


//deleteproduct

const deleteproduct = async (req, res) => {

    const { _id } = req.body


    try {
        await connect(process.env.MONGO_URL)
        const products = await Products.deleteOne({ _id })
        res.json(
            {
                message: "Product Deleted Successfully"
            }
        )

    }

    catch (error) {
        res.json(
            {
                message: error.message
            }
        )

    }
}

module.exports = { getAllProducts, addProduct, productbyBrand, productbyCategory, productbyId, updateproduct, deleteproduct }