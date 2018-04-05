 
var express = require('express');
var router = express.Router();
var bookController = require('./controller/bookControler');


router.get('/api', function(req, res, next) {
  res.send('Welcome Node Express Api with gulp\n To view data go to localhost:7800/api');
});


// get all books
router.get('/api/books', (req, res)=> {
	return bookController.books(req,res);
});

// get one books
router.get('/api/book/:id', (req, res)=> {
	return bookController.details(req,res);
});

// search by genre
router.get('/api/search', (req, res)=> {
	return bookController.search(req,res);
});

// create one books
router.post('/api/post', (req, res)=> {
	return bookController.post(req,res);
});

// edit one books
router.put('/api/edit/:id', (req, res)=> {
	return bookController.put(req,res);
});

// delete one books
router.delete('/api/delete/:id', (req, res)=> {
	return bookController.delete(req,res);
});

// seeding the db
router.get('/api/seed', (req, res)=> {
	return bookController.create(req,res);
});


module.exports = router;


