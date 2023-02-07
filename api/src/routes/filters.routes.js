const {Router} = require('express');
const {getFoods, getByType,getDrinkByType} = require('../controllers/index');

const router = Router();

router.get('/priceMinMax' , async (req, res) => {
    try {
        const data = await getFoods();
        const ordenado = data.map(e => e).sort((a, b) => Number(a.price) - Number(b.price));
        res.status(200).send(ordenado);
    } catch (error) {
        res.send(error);
    }
});

router.get('/priceMaxMin' , async (req, res) => {
    try {
        const data = await getFoods();
        const ordenado = data.map(e => e).sort((a, b) => Number(b.price) - Number(a.price));
        res.status(200).send(ordenado);
    } catch (error) {
        res.send(error);
    }
});

router.get('/:type', async (req, res) => {
    const {type} = req.params;
    try {
        const encontrados = await getByType(type);
        res.status(200).send(encontrados);
    } catch (error) {
        res.send(error);
    }
});

router.get('/drinks/:type', async (req, res) => {
    const {type} = req.params;
    try {
        const encontrados = await getDrinkByType(type);
        res.status(200).send(encontrados);
    } catch (error) {
        res.send(error);
    }
});



module.exports = router;

