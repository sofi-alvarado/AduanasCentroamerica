
const { Router } = require('express');

const { aduanaGTGet,
        aduanaGTPost,
        aduanaCRPost } = require('../controllers/aduana');

const router = Router();


router.get('/', aduanaGTGet);
router.post('/GT', aduanaGTPost);
router.post('/CR', aduanaCRPost);

module.exports = router;