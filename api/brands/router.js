const app = require('express')
const router = app.Router()
const {addBrand, brandbyname, brandbyid, updatebrand, deletebrand, getAllBrands} = require('./controller')


//addBrand
router.post('/addbrand', addBrand)

router.get('/getallbrands', getAllBrands)


router.get('/brandbyname/:brandname', brandbyname)

router.get('/brandbyid/:_id', brandbyid)

router.put('/updatebrand/:_id', updatebrand)

router.delete('/deletebrand', deletebrand)









module.exports = router