var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var passport	= require('passport');
var config      = require('./config/database'); // get db config file
var User        = require('./app/models/user'); // get the mongoose model
var port        = process.env.PORT || 8880;
var jwt         = require('jwt-simple');
var routes 		= require('./routes');
 
// get our request parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
// log to console
app.use(morgan('dev'));
 
// Use the passport package in our application
app.use(passport.initialize());
 
// demo Route (GET http://localhost:8080)
app.get('/', function(req, res) {
  res.send('Hello! The API is at http://localhost:' + port + '/api');
});
 
// Start the server
app.listen(port);
console.log('There will be dragons: http://localhost:' + port);

mongoose.connect(config.database);
 
// pass passport for configuration
require('./config/passport')(passport);
 
// bundle our routes
//var apiRoutes = express.Router();
 
// create a new user account (POST http://localhost:8080/api/signup)
/*apiRoutes.post('/signup', function(req, res) {
  if (!req.body.name || !req.body.username ||!req.body.age ||!req.body.height ||!req.body.weight || !req.body.password ) {
    res.json({success: false, msg: 'Please pass name,username,age,height,weight and password.'});
  } else {
	  
	var newUser = new User({
		username: req.body.username,
	 });
	  
	  User.find({username:newUser.username}, function(errr, userrecord) {
	  if(errr) { console.log(errr) }
      if(userrecord.length > 0){
          res.json({success: false, msg: 'Username already exists.'});
      }
      else{
			var newUserData = new User({
			  name: req.body.name,
			  username: req.body.username,
			  age: req.body.age,
			  height: req.body.height,
			  weight: req.body.weight,
			  password: req.body.password
			});
			// save the user
			newUserData.save(function(err) {
			  if (err) {
				return res.json({success: false, msg: 'Username already exists.'});
			  }
			  res.json({success: true, msg: 'Successful created new user.'});
			}); 
      }
    });
  }
});
*/

/*apiRoutes.post('/authenticate', function(req, res) {
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) throw err;
 
    if (!user) {
      res.send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          res.json({success: true, msg: 'Successfully logged in.', data : user});
        } else {
          res.send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});
*/
/*
apiRoutes.post('/finduser', function(req, res) {
  if (!req.body.name) {
    res.json({success: false, msg: 'Please pass name.'});
  } else {
    var newUser = new User({
      name: req.body.name,
 
    });
    // save the user
    
     User.find({name:newUser.name}, function(errr, userrecord) {
        if(errr) { console.log(errr) }
      if(userrecord.length > 0)
      {
          res.json({success: true, msg: 'Successful found new user.' ,data:userrecord});
         
      }
      else
      {
          return res.json({success: false, msg: 'no user exists.'});
      }
    });


  }
});

*/

 
// connect the api routes under /api/*
//app.use('/api', apiRoutes);
routes(app);

