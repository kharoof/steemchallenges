var express = require('express');
var router = express.Router();
var steem = require('steem');
var partials = require('express-partials');

// load the express-partials middleware
router.use(partials());

/* GET home page. */
router.get('/', function(req, res, next) {
	var query = {
	 	tag: 'culturevulture',
	 	limit: 15
	};

	var posts = null;
	steem.api.getDiscussionsByActive(query,function(err, result) {
    	posts = result;
    	res.render('home.ejs', {posts: posts });
	});

  
});


module.exports = router;





