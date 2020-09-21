const { Ships } = require('../models')

class ShipsController {
    static getShips(req, res){
        Ships.findAll()
        .then(result => {
            // res.send(result)
            res.render('shipsList.ejs', {ships : result})
        })
        .catch(err => {
            console.log(err)
        })
    }

    static addFormShips(req, res) {
        res.render('addShip.ejs');
    }

    static addShip(req,res){
        const { name, type, power } = req.body;
        Ships.create({
            name,
            type,
            power,
        })
            .then(result => {
                // res.send(result)
                res.redirect('/ships')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static findById(req, res) {
        const id = req.params.id;
        Ships.findOne({
            where: { id }
        })
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static deleteShip(req,res){
        const id = req.params.id;
        Ships.destroy({
            where: { id }
        })
            .then(() => {
                // res.send("Deleted")
                res.redirect('/ships')
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = ShipsController;