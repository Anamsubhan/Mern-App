const app = require('express')
const router = app.Router()
const {sendMail, addOrders, allOrders, orderbyId} = require('./controller')

router.post('./sendmail', sendMail)
router.post('./placeorder', addOrders)
router.post('./allorders', allOrders)
router.post('./orderbyid/:_id', orderbyId)




module.exports = router