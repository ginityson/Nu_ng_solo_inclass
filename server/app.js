// //require modules
var express = require('express');
// //create express app
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');
//
var urlencodedParser = bodyParser.urlencoded( {extended: false});
//
// postgres must be running and you must have this db name correct
var connectionString = 'postgres://localhost:5432/DBGOESHERE';

//
// //spin up server
app.listen( 3000, 'localhost', function( req, res ){
  console.log( '3000 up');
});//end of listen

//set up static route for public folder
app.use(express.static('public'));

// base url
app.get( '/', function( req, res ){
  console.log( 'Ta Da! base url get' );
  res.sendFile( path.resolve( 'views/index.html' ) );
}); // end base url

app.get('/getSomething', function( req, res ){
  console.log( 'in getSomething' );
  res.send( 'sent from get' );
});//end of getSomething

app.post('/postSomething', urlencodedParser, function( req, res ){
  console.log( 'in postSomething: ' + req.body );
  res.send( 'sent from post' );
});//end of postSomething
