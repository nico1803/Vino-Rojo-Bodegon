const {Router} = require('express');
const {createCustomer,getCustomers, emailValidation} = require('../controllers/index');

const router = Router();

router.post('/', async (req, res) => {
    const {name, email, password} = req.body;
    try {
        await createCustomer(name, email, password);
        res.status(200).send('Usuario creado');
    } catch (error) {
        res.send(error);
    }
});

router.get('/', async (req, res) => {
    const {email} = req.body;
    try {
        let validation = await emailValidation(email);
        if(validation === true){
            return res.status(400).send('Este email ya está en uso');
        };
        res.status(200).send('El mail se puede usar');
    } catch (error) {
        res.status(400).send(error)
    } 
}); 

module.exports = router;