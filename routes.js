var express = require('express'),
router = express.Router(),
path = require('path'),
user = require('./controllers/user');
module.exports = function(app) {
	router.post('/signup', user.signup);
	router.post('/login', user.login);
	app.use(router);
}
