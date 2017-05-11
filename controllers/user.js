var path = require('path');
var User        = require('../app/models/user');
module.exports = {
	signup: function(req, res) {
		 
		var signUpNewUser = function() {
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
		};
		signUpNewUser();
	},
	login: function(req, res) {
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
	}
};
