const { Router } = require('express');
const router = Router();
const ShipsRoutes = require('./ships')
const PiratesRoutes = require('./pirates')


router.get('/', (req, res) => {
    res.render('index.ejs')
    // res.send("HOME")
});

router.use('/ships', ShipsRoutes)
router.use('/pirates', PiratesRoutes)


module.exports = router;