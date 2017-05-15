var express = require('express'),
router = express.Router(),
path = require('path'),
user = require('./controllers/user');
exercise = require('./controllers/exercise');
exercisecategory = require('./controllers/exercisecategory');

var multer = require('multer');
//var upload = multer({dest: 'uploads/'});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
  }
})

var upload = multer({ storage: storage })
 


module.exports = function(app) {
	router.post('/',user.welcome);
	router.post('/signup', user.signup);
	router.post('/login', user.login);
	router.post('/addexcercise', upload.single('exercisepic'),exercise.addexercise);
	router.post('/listexercise', exercise.listexercise);
	router.post('/addexercisecategory', exercisecategory.addexercisecategory);
	router.get('/listexercisecategory', exercisecategory.listexercisecategory);
	app.use(router);
}
