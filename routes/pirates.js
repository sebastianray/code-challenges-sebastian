const { Router } = require('express');
const router = Router();
const PiratesController = require('../controllers/piratesController');

router.get('/', PiratesController.getPirates);
router.get('/add', PiratesController.addFormPirates)
router.post('/add', PiratesController.addPirate)
router.get('/delete/:id', PiratesController.deletePirate)
router.get('/:id', PiratesController.findById);

module.exports = router;