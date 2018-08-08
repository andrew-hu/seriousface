var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 	res.render('index', { title: 'Serious Face' });
});

// Get Apply page.
router.get('/apply', function(req, res, next){
	res.render('apply', {title: 'Apply to Serious Face'});
});

// Get Thank You page.
router.get('/thankyou', function(req, res, next){
	res.render('thankyou', {title: 'Thank you for applying!'});
});

// Post Submit page.
router.post('/apply/submit', function(req, res, next){
	var charactername = req.body.charactername;
	var servername = req.body.servername;
	var whyjoin = req.body.whyjoin;
	console.log(charactername);
	console.log(servername);
	console.log(whyjoin);
	res.redirect('/thankyou');
});

module.exports = router;
