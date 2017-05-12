var express = require('express'),
router = express.Router(),
path = require('path'),
user = require('./controllers/user');
module.exports = function(app) {
	router.post('/signup', user.signup);
	router.post('/login', user.login);
	router.post('/addexcercise', exercise.addexercise);
	router.get('/listexercise', exercise.listexercise);
	app.use(router);
}
