var path 			= require('path');
var Exercise        = require('../app/models/exercise');

module.exports = {
	addexercise: function(req, res ,next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		
		if (!req.body.exercisename || !req.body.exercisedescription || !req.body.exercisecategoryid) {
				res.json({success: false, msg: 'Please  exercisename &  exercisedescription & exercisecategoryid.'});
			}else {
				var newExerciseData = new Exercise({
					exercisecategoryid :req.body.exercisecategoryid,
					exercisename: req.body.exercisename,
					exercisedescription: req.body.exercisedescription
					
					});
					// save the exercise
					newExerciseData.save(function(err) {
					if (err) {
						return res.json({success: false, msg: err });
					}
						res.json({success: true, msg: 'Successful created added new  exercise.'});
					}); 
			}
		 
	},
	listexercise:function(req, res ,next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		Exercise.find({ 'exercisecategoryid': req.body.exercisecategoryid}, function (err, exercise) {
		if(!exercise) {return res.json({success: false, msg: 'no exercise exists.'}); }
		if(exercise.length > 0){
			res.json({success: true, msg: 'Successful found all exercise.' ,data:exercise});
      }else{
		  res.json({success: false, msg: 'no exercise exists.'});

		  }
		}).select('exercisecategoryid exercisename exercisedescription');
	},


};
