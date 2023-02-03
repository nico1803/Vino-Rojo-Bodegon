const {Router} = require('express');
const { getReview, createReview, findByIdReview} = require('../controllers/index');

const router = Router();


router.get('/', async (req, res) => {
    try {
        const review = await getReview();
        res.status(200).json(review);
    } catch (error) {
        res.status(400).send(error)
    }
});

router.post('/post', async (req, res) => {
    const {score, commentary} = req.body;
    try {
        await createReview(score, commentary);
        res.status(200).send('La review fue añadida');
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/:idReview', async (req, res) => {
    const {idReview} = req.params;
    try {
        const review = await findByIdReview(idReview);
        res.status(200).json(review);
    } catch (error) {
        res.status(400).send('No se encontro la review');
    }
});

module.exports = router;