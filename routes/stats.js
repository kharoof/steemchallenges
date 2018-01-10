var express = require('express');
var partials = require('express-partials');
var router = express.Router();



/* GET stats listing. */
router.get('/stats', function(req, res, next) {
  	res.render('stats.ejs');
});

module.exports = router;