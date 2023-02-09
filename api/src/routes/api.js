const {Router} = require('express');
require('dotenv').config();
const router = Router();
const foods = require('./foods.routes');
const customers = require('./customers.routes');
const filters = require ('./filters.routes');
const email = require("./email.routes");



router.use('/foods', foods);
router.use('/login', customers);
router.use('/filters', filters);
router.use("/email", email);

//sdk
const mercadopago = require("mercadopago");
// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
 mercadopago.configure({
	access_token:  process.env.MERCADOPAGO_KEY,
  // vendedor:TEST-3414226777276232-020119-07d7de57a2a1d95355c1e25fd9a86aba-1300590179
}); 
///////mp routes sdk //////////////////
router.post("/create_preference", (req, res) => {

	let preference = {
		items: req.body, 
		back_urls: {
			"success": "http://localhost:3000/success",
			"failure": "http://localhost:3000/failure",
			"pending": ""
		},
		auto_return: "approved",
		//no acepte pagos efectivo (pendientes),solo tarjetas
		binary_mode:true,
		//notification_url:"http://localhost:3001/feedback"

	};
     

	mercadopago.preferences.create(preference)
		.then(function (response) {
			//id: response.body.id
			res.status(200).json( response );
		}).catch(function (error) {
			res.status(400).send(error);
			console.log(error);
		});

	
});

router.get('/feedback', function (req, res) {
	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
}); 




 
module.exports = router
