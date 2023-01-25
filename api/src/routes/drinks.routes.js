const {Router} = require('express');
const { getDrinks, createDrink, findByIdDrink, editDrink, deleteDrink} = require('../controllers/index');

const router = Router();


router.get('/', async (req, res) => {
    try {
        const drinks = await getDrinks();
        res.status(200).json(drinks);
    } catch (error) {
        res.status(400).send(error)
    }
});

router.post('/post', async (req, res) => {
    const {name, image, type, description, price} = req.body;
    try {
        await createDrink(name, image, type, description, price);
        res.status(200).send('La bebida fue añadida');
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/:idDrink', async (req, res) => {
    const {idDrink} = req.params;
    try {
        const drink = await findByIdDrink(idFood);
        res.status(200).json(drink);
    } catch (error) {
        res.status(400).send('No se encontro la bebida');
    }
});


router.delete('/:idDrink', async (req, res) => {
    const {idDrink} = req.params;
    try {
        await deleteDrink(idDrink);
        res.status(200).send('La bebida fue eliminada correctamente')
    } catch (error) {
        res.status(400).send(error);
    }
});

router.put('/edit/:idDrink', async (req, res) => {
    const {idDrink} = req.params;
    const {name, type, description, image, price} = req.body;
    try {
        await editDrink(idDrink, name, image, description, price, type);
        res.status(200).send('La bebida fue actualizada');
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;


