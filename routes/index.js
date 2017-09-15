var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});


router.get('/deposit', function(req, res, next) {
	res.render('deposit');
});

router.get('/withdrawal', function(req, res, next) {
	res.render("withdrawal");
});

router.get('/account', function(req, res, next) {
	res.render("account");
} )





module.exports = router;
