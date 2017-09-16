var express = require('express');
var router = express.Router();
var csrf = require("csurf");

var csrfProtection = csrf();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', {csrfToken: req.csrfToken()});
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


router.post("/login", function(req, res, next){
	var username = req.body.username
	var password = req.body.password



})


module.exports = router;
