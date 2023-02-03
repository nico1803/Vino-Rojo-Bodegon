const {Router} = require('express');
const router = Router();
const foods = require('./foods.routes');
const drinks = require('./drinks.routes.js');
const customers = require('./customers.routes');
const filters = require ('./filters.routes');
const email = require("./email.routes");
//sdk
const mercadopago = require("mercadopago");
// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
 mercadopago.configure({
	access_token: "TEST-3414226777276232-020119-07d7de57a2a1d95355c1e25fd9a86aba-1300590179",
  // vendedor:TEST-3414226777276232-020119-07d7de57a2a1d95355c1e25fd9a86aba-1300590179
}); 
router.use('/foods', foods);
router.use('/drinks', drinks);
router.use('/login', customers);
router.use('/filters', filters);
router.use("/email", email);


///////mp routes sdk //////////////////
router.post("/create_preference", (req, res) => {

	let preference = {
		items: [
			{
				title: req.body.title,
				description:req.body.description,
				unit_price: Number(req.body.unit_price),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			"success": "http://localhost:3001/feedback",
			"failure": "http://localhost:3001/feedback",
			"pending": "http://localhost:3001/feedback"
		},
		auto_return: "approved",
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response
			});
		}).catch(function (error) {
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
