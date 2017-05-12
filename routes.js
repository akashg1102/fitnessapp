var express = require('express'),
router = express.Router(),
path = require('path'),
user = require('./controllers/user');
exercise = require('./controllers/exercise');
exercisecategory = require('./controllers/exercisecategory');
module.exports = function(app) {
	router.post('/signup', user.signup);
	router.post('/login', user.login);
	router.post('/addexcercise', exercise.addexercise);
	router.get('/listexercise', exercise.listexercise);
	router.post('/addexercisecategory', exercisecategory.addexercisecategory);
	router.get('/listexercisecategory', exercisecategory.listexercisecategory);
	app.use(router);
}
