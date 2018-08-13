var express = require('express');
var router = express.Router();
var fs = require('fs');

const Discord = require('discord.js');
const client = new Discord.Client();

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
	
	fs.readFile('private/discord_id_token','utf8', function(err,contents){
		var array = contents.toString().split(',');
		var discord_id = array[0];
		var discord_token = array[1];
		const hook = new Discord.WebhookClient(discord_id,discord_token);
		hook.send('```'+
				'Character Name: \t' + charactername +
				'\nServer Name:\t\t' + characterrealm +
				'\nWhy Join?:\t\t  ' + whyjoin +
				'\nRaid Experience:\t' + raidexperience +
				'\nPreferred Role:\t ' + preferredrole +
				'```');
	});



	res.redirect('/thankyou');
});

module.exports = router;
