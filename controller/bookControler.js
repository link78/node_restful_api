var Book = require('../models/bookModel');


 var d = [
{
    title: 'Killing Jesus',
	author: 'Leon R Kelly',
	genre: 'History',
	read: false,
	price: 15
},
{
    title: 'Block 13',
	author:'Terry Walgreens',
	genre: 'Horror',
	read: false,
	price: 14
}

 ]



// seeding the database
exports.create = function(req, res, next) {
	Book.create(d,function(err,data){
		if(err) 
			{
				res.status(500).send(err);
				return next(err);
			}else{
				res.send(data)
			}
		
	});

	
};

exports.books = function(req, res, next){
	Book.find(function(err,doc) {
		if(err) return next(err);
		res.send(doc);
	});
};


// search one book by genre
exports.search = function(req, res, next){
	var q = {};

	if(req.query.genre){
		q.genre = req.query.genre;
	}

	Book.find(q,function(err,doc) {
		if(err) return next(err);
		res.send(doc);
	});
};

// get one book
exports.details = function(req, res, next){
	var q = req.params.id;
	Book.findById(q,function(err,doc) {
		if(err) return next(err);
		res.send(doc);
	});
};


// post a book
exports.post = function(req, res, next){
	var book = new Book(req.body);

	// validating title field
	if(!req.body.title){
		res.send(400);
		res.send('Title is require');
	}else {
	book.save();
	res.status(201).send(book);
}
};

// update a book
exports.put = function(req, res, next){
	// get a book by id first

	var q = req.params.id;
	Book.findById(q,function(err,book) {
		if(err){
			return next(err);
		}else
		{

			// updating
	book.title = req.body.title;
	book.author = req.body.author;
	book.genre = req.body.genre;
 	book.read = req.body.read;
 	book.price = req.body.price;

		}
	

 		book.save();
		res.send(book);
	});
};



// delete a single book
exports.delete = function(req, res, next){
	// get a book by id first
	Book.remove({_id:req.params.id},function(err,book) {	
	if (err)
       res.send(err);

        res.json({ message: 'Successfully deleted' });
		
	});
};



// 