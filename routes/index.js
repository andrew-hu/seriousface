var express = require('express');
var router = express.Router();
var fs = require('fs');

var Request = require("request");

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
		hook.send('```'+
				'RealID or Battle Tag: \t\t\t\t\t\t\t\t' + RealID +
				'\nWarcraftlogs link:\t\t\t\t\t\t\t\t\t' + WarcraftLogs +
				'\nRaid Experience:\t\t\t\t\t\t\t\t\t  ' + RaidingExp +
				'\nMost important feature of a sucessful guild:\t\t  ' + SucessfulFeature +
				'\nOne skill from your WoW Character in real life:\t   ' + CharacterSkill +
				'```');
	});



	res.redirect('/thankyou');
});


// Get Keys page.
router.get('/keys', function(req, res, next){
	
	var my_body = "";
	Request.get("https://raider.io/api/v1/characters/profile?region=us&realm=proudmoore&name=eclix", (error, response, body) => {
	    if(error) {
	        console.dir(error);
	    }

	    console.dir(JSON.parse(body));
		my_body += body;


	    
	});


	res.render('keys', {title: 'Serious Keys', body: my_body});
	
});

module.exports = router;
