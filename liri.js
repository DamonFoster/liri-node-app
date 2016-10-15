var keys = require('./keys.js');
var fs = require('fs');
var Twitter = require('twitter');
var request = require('request');
var spotify = require('spotify');

var command = process.argv[2];

if (command === 'my-tweets') {
	var client = new Twitter({
  		keys
	});
 
	var params = {screen_name: 'D_Fost27'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
  		if (!error) {
   			console.log(tweets);
  		}
	});
} else if (command === 'spotify-this-song') {
	var song = process.argv[3];
	if (song === '') {
		song = 'the sign';
	}

	spotify.search({ type: 'track', query: 'the sign' }, function(err, data) {
    	if ( err ) {
        	console.log('Error occurred: ' + err);
        	return;
    	}
 
    console.log(data);
	});
} else if (command === 'movie-this') {
	var movie = 'mr+nobody';
	var queryURL = 'http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&tomatoes=true&r=json';

	request(queryURL, function (error, response, body) {
		if (!error && response.statusCode == 200 ) {
			console.log(JSON.parse(body));
		}
	});
} else {
	console.log('Invalid Command');
}


 
