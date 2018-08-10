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

// Get Streams page.
router.get('/streams', function(req, res, next){
	res.render('streams', {title: 'Serious Streams'});
});

// Post Submit page.
router.post('/apply/submit', function(req, res, next){
	var charactername = req.body.charactername;
	var characterrealm = req.body.characterrealm;
	var raidexperience = req.body.raidexperience;
	var preferredrole = req.body.preferredrole;
	var whyjoin = req.body.whyjoin;
	
	hook.send('```Character Name: \t' +charactername + '\nServer Name:\t\t' + characterrealm + '\nWhy Join?:\t\t  ' + whyjoin +'\nRaid Experience:\t' + raidexperience + '\nPreferred Role:\t ' + preferredrole + '```');

	res.redirect('/thankyou');
});

module.exports = router;
