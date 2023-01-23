const {Router} = require('express');
const {createCustomer} = require('../controllers/index');

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

module.exports = router;