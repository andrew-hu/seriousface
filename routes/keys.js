var express = require('express');
var router = express.Router();
var fs = require('fs');

var Request = require("request");

// Get Keys page.
router.get('/keys', function(req, res, next){
	
	Request.get("http://httpbin.org/ip", (error, response, body) => {
	    if(error) {
	        console.log(error);
	    }

	    console.log(body);
	});



	res.render('keys', {title: 'Serious Keys'});
});

//https://raider.io/api/v1/characters/profile?region=us&realm=proudmoore&name=eclix

module.exports = router;
