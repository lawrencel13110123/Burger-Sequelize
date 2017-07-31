var express = require('express');
var router = express.Router();
var db = require("../models");

router.get('/', function(req, res){
	res.redirect('/burgers')
});

router.get('/burgers', function(req, res){
	db.Burgers.findAll({}).then(function(dbBurgers) {
      var hbsObject = {burgers: dbBurgers}; 
      console.log(hbsObject);
      res.render('index', hbsObject);

    });
});

router.post('/burgers/create', function(req, res){
	console.log("Burger")
	console.log(req.body)
	db.Burgers.create({
		burger_name: req.body.b_name
	}).then(function(dbBurgers) {
		res.redirect('/burgers')
	})
});

router.put('/burgers/update/:id', function(req, res){
	 db.Burgers.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbBurgers) {
      res.redirect('/burgers');
    });
});

module.exports = router;