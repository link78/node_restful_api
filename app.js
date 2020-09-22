const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const chalk = require('chalk');


//var jwt = require('express-jwt');
//var jwks = require('jwks-rsa');

// database connection

var databaseUrl= "mongodb+srv://derka:Marine7815@cluster0.d45v4.azure.mongodb.net/fcsproductapidb?retryWrites=true&w=majority";

//var databaseUrl= `mongodb://localhost:27017/fcsproductapidb`;
mongoose.Promise = global.Promise;
mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true}, function(err){
  if (err){
    console.log(chalk.red('Could not connect to db'));
    console.log(chalk.red(err));
    mongoose.connection.close();
    process.exit(-1);


  }else {
    console.log('successful connection');
  }
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
