var express = require('express');
var router = express.Router();

const Discord = require('discord.js');
const client = new Discord.Client();
//Probably should not include the ID and TOKEN here on a public github but oh well...
const hook = new Discord.WebhookClient('476174292300726273','njPXKclhBKULrEVS4wlFNh-QlpgiQckf9Eem2B4bUtachjlfJxiv8tDPfW0HoNcst3X_');

/* GET home page. */
router.get('/', function(req, res, next) {
 	res.render('index.hbs', { title: 'Serious Face' });
});

// Get Apply page.
router.get('/apply' || '/apply.html', function(req, res, next){
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
	
	hook.send('Character Name: \t' +charactername + '\nServer Name:\t\t\t' + servername + '\nWhy Join?:\t\t\t\t' + whyjoin);

	res.redirect('/thankyou');
});

module.exports = router;
