
Glamour City... An Ecommerce Website

This is an ecommerce cosmetics website where you easily buy things that you want ...

Live URL

https://glorious-top-hat-seal.cyclic.cloud/

API Routes

Brand Routes:

//addBrand
router.post('/addbrand', addBrand)

router.get('/getallbrands', getAllBrands)


router.get('/brandbyname/:brandname', brandbyname)

router.get('/brandbyid/:_id', brandbyid)

router.put('/updatebrand/:_id', updatebrand)

router.delete('/deletebrand', deletebrand)

Category Routes:

router.post('/addcat', addCat)

router.get('/getallcategories', getAllCategories)


router.get('/categorybyname/:catname', categorybyname)

router.get('/categorybyid/:_id', categorybyid)

router.put('/updatecategory/:_id', updatecategory)

router.delete('/deletecategory', deletecategory)


Product Routes

router.get('/getallproducts', getAllProducts)

//addProducts
router.post('/addproduct', addProduct)

//getproductbyid
router.get('/productbyid/:_id', productbyId)

//getproductsbybrand
router.get('/productbybrand/:brandname', productbyBrand)

//getproductbycategory
router.get('/productbycategory/:catname', productbyCategory)

router.put('/updateproduct/:_id', updateproduct)

router.delete('/deleteproduct', deleteproduct)


User Routes

router.post('/signup', signup )

  router.post('/login' , login)

  router.get('/getallusers', allUsers)

  router.get('/getuserbyemail/:email', getUserbyEmail)

  router.get('/getuserbyid/:_id', getuserbyid)

  router.delete('/deleteuserbyid/:_id', deleteuserbyid)

  router.put('/updateuser/:_id', updateuser)
