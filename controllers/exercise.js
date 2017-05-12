var path 			= require('path');
var Exercise        = require('../app/models/exercise');

module.exports = {
	addexercise: function(req, res ,next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		
		if (!req.body.exercisename || !req.body.exercisedescription) {
				res.json({success: false, msg: 'Please  exercisename &  exercisedescription.'});
			}else {
				var newExerciseData = new Exercise({
					exercisename: req.body.exercisename,
					exercisedescription: req.body.exercisedescription
					});
					// save the exercise
					newExerciseData.save(function(err) {
					if (err) {
						return res.json({success: false, msg: 'Error in add exercise.'});
					}
						res.json({success: true, msg: 'Successful created added new  exercise.'});
					}); 
			}
		 
	},
	listexercise:function(req, res) {
		Exercise.find({}, function (err, exercise) {

		if(!exercise) {return res.json({success: false, msg: 'no exercise exists.'}); }
		res.json({success: true, msg: 'Successful found all exercise.' ,data:exercise});
		}).select('exercisename exercisedescription');
	},


};
