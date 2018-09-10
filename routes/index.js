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
	var RealID = req.body.RealID;
	var WarcraftLogs = req.body.WarcraftLogs;
	var RaidingExp = req.body.RaidingExp;
	var SucessfulFeature = req.body.SucessfulFeature;
	var CharacterSkill = req.body.CharacterSkill;
	
	fs.readFile('private/discord_id_token','utf8', function(err,contents){
		var array = contents.toString().split(',');
		var discord_id = array[0];
		var discord_token = array[1];
		const hook = new Discord.WebhookClient(discord_id,discord_token);
		hook.send(
				'=============================================================================\n\n' +
				'RealID or Battle Tag: ```' + RealID + '```\n' +
				'Warcraftlogs link: ```' + WarcraftLogs + '```\n' +
				'Raid Experience: ```' + RaidingExp + '```\n' +
				'Most important feature of a sucessful guild: ```' + SucessfulFeature + '```\n' +
				'One skill from your WoW Character in real life: ```' + CharacterSkill + '```' +
				'\n============================================================================='
				);
	});



	res.redirect('/thankyou');
});

module.exports = router;
