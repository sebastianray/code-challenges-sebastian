const { Router } = require('express');
const router = Router();
const ShipsController = require('../controllers/shipsController')

router.get('/', ShipsController.getShips);
router.get('/add', ShipsController.addFormShips)
router.post('/add', ShipsController.addShip)
router.get('/delete/:id', ShipsController.deleteShip)
router.get('/:id', ShipsController.findById);

module.exports = router;