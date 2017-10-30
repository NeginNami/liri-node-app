# liri-node-app

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. Liri is a server side node application.

### Getting Started 

Clone the repo to your computer. Go to your terminal and navigate to the repo folder. Then type "npm install" then enter. This command installs all the modules you need to run the program.



## Prerequisites & Installing



 
### Running and test

All these four commands below do somthing different.
* node liri.js my-tweets
* node liri.js spotify-this-song "A song name"
* node liri.js movie-this "A movie name"
* node liri.js do-what-it-says
#### First one gets my latest 10 tweets from my twitter account and show them to you as a result.
Second takes a song name and gets the information about it from spotify API. Then it puts them on the output.
Third takes a movie name and gets the information about it form IMDB API, then it puts a part of those information in the output.
Fourth one works a little bit different. It takes in the content of a file called random.txt. Then separates the string in the file in two string which one is going to be the command and the second one would be the parameter. I already filled the content of that file with "spotify-this-song,"I Want it That Way"". This content basically would be interpreted as this: -node liri.js spotify-this-song I Want it That Way. You might want to change the content of that file to other texts. Like "movie-this, "Gladiator"", to get the info about the Gladiator from IMDB API.

 


## Deployment

This application is not deployed on the web. To run this locally you need to go to your terminal and run the program from there. For more information about how to do that, read the app description, Prerequisites & Installing and Running and test section on this file. 

## Built With

* [Node.js](https://nodejs.org)


