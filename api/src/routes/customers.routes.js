const {Router} = require('express');
const {createCustomer,getCustomers, emailValidation, deleteCustomer, updateCustomer} = require('../controllers/index');
const Customer = require('../models/customers');

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

router.get('/customers', async (req, res) => {
    try {
        const customers = await getCustomers();
        res.send(customers);
    } catch (error) {
        res.send(error);
    }
})

router.get('/:email', async (req, res) => {
    const {email} = req.params;
    try {
        let validate = await emailValidation(email);
        if(validate == true){
            return res.status(400).send('Este email ya está en uso');
        } else if (validate == false) {
            return res.send('El mail se puede utilizar')
        }
    } catch (error) {
        res.send(error);
    }
}); 

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        await deleteCustomer(id);
        res.status(200).send('El usuario fue eliminado');
    } catch (error) {
        res.status(400).send(error);
    }
});

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const {name, email, password} = req.body    
    try {
        await updateCustomer(id, name, password, email);
        res.status(200).send('La constraseña fue actualizada');
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;