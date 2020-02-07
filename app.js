const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

// database connection

mongoose.connect('mongodb://localhost/books');
mongoose.Promise = global.Promise;
var dbConnection = mongoose.connection;
dbConnection.on('erro', console.error.bind(console, 'MongoDB connection'));
dbConnection.once('open',function(){
	console.log('successful connection');
});


var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser());

app.set('json spaces',4);
var port = process.env.PORT || 8010;


// setting up routes
 var bookRouter = require('./routes');



app.use('/', bookRouter);
//var jwtCheck = jwt({
  //  secret: jwks.expressJwtSecret({
    //    cache: true,
     //   rateLimit: true,
     //   jwksRequestsPerMinute: 5,
      //  jwksUri: ""
   // }),
  //  audience: '',
  //  issuer: "",
  //  algorithms: ['RS256']
//});

//app.use(jwtCheck);
//app.get('/authorized', function (req, res) {
//  res.send('Secured Resource');
//});



app.listen(port,()=> {
	console.log(`Server is running at: ${port}`);
});
