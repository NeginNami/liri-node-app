

var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var request=require('request');

var TwitterKeys=require("./keys.js");
var SpotifyKeys=require("./keys.js");

//console.log(TwitterKeys.twitterKeys.access_token_secret);

var client = new Twitter({
  consumer_key: TwitterKeys.twitterKeys.consumer_key,
  consumer_secret: TwitterKeys.twitterKeys.consumer_secret,
  access_token_key: TwitterKeys.twitterKeys.access_token_key,
  access_token_secret: TwitterKeys.twitterKeys.access_token_secret
});

var spotify = new Spotify({
  id: SpotifyKeys.spotifyKeys.id,
  secret: SpotifyKeys.spotifyKeys.secret
});
//console.log(SpotifyKeys.spotifyKeys.secret);

var commands=process.argv;

if(commands[2]==="my-tweets"){
	console.log("U got it");

	var params = {screen_name: 'negin_test'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
  	if (!error) {
  		for (var i = 0; i < tweets.length; i++) {
  			console.log(tweets[i].text);
  		}
    	
  	}
  	else
  		console.log(error);
	});
}

else if(commands[2]==="spotify-this-song"){

	var songQuery=process.argv[3];
	for (var i = 4; i < process.argv.length; i++) {
		songQuery=songQuery+" "+process.argv[i];
	}
console.log(songQuery);
	spotify.search({ type: 'track', query: songQuery }, function(err, data) {
  	if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log("Name of the song: "+data.tracks.items[0].name); 
console.log("From Album: "+data.tracks.items[0].album.name);
console.log("Artist's Name: "+data.tracks.items[0].artists[0].name);  
console.log("External URL to the song: "+data.tracks.items[0].external_urls.spotify);
console.log('------------------Data------------------------');
//console.log(JSON.stringify(data,null,2));

});

}
else if(commands[2]==="movie-this"){
	var movieName;
	if(process.argv[3]){

		movieName=process.argv[3];
		for (var i = 4; i < process.argv.length; i++) {
			movieName=movieName+" "+process.argv[i];
			console.log("Movie name u entered "+movieName);
		}
		request("http://www.omdbapi.com/?t="+movieName+"&y=&plot=short&apikey=40e9cece", function(error, response, body) {

		  // If the request is successful (i.e. if the response status code is 200)
		if (!error && response.statusCode === 200) {
		console.log(JSON.parse(body));
		
		console.log("Title of the movie: "+JSON.parse(body).Title);
		console.log("Release Date: "+JSON.parse(body).Year);
		console.log("IMDB Rating: "+ JSON.parse(body).imdbRating);
		if (JSON.parse(body).Ratings.length>1) 
			console.log("Rotten Tomatoes Rating: "+JSON.parse(body).Ratings[1].Value);
		else
			console.log("Rotten Tomatoes Rating: Not availabe for this movie");
		console.log("Country: "+JSON.parse(body).Country);
		console.log("Language: "+JSON.parse(body).Language);
		console.log("Plot: "+JSON.parse(body).Plot);
		console.log("Actors: "+JSON.parse(body).Actors);

  		}	
		});
	}
	else{
		movieName="Mr. Nobody";
		request("http://www.omdbapi.com/?t="+movieName+"&y=&plot=short&apikey=40e9cece", function(error, response, body) {

		  // If the request is successful (i.e. if the response status code is 200)
		if (!error && response.statusCode === 200) {
				console.log(JSON.parse(body));
		
			console.log("Title of the movie: "+JSON.parse(body).Title);
			console.log("Release Date: "+JSON.parse(body).Year);
			console.log("IMDB Rating: "+ JSON.parse(body).imdbRating);
			if (JSON.parse(body).Ratings.length>1) 
				console.log("Rotten Tomatoes Rating: "+JSON.parse(body).Ratings[1].Value);
			else
				console.log("Rotten Tomatoes Rating: Not availabe for this movie");
			console.log("Country: "+JSON.parse(body).Country);
			console.log("Language: "+JSON.parse(body).Language);
			console.log("Plot: "+JSON.parse(body).Plot);
			console.log("Actors: "+JSON.parse(body).Actors);
  		}	
		});
	}
	

}
else if(commands[2]==="do-what-it-says"){

}
else{
	console.log("Sorry, Liri can not understand your command.");
}