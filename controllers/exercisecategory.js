
var path 			= require('path');
var ExerciseCategory        = require('../app/models/exercisecategory');

module.exports = {
	addexercisecategory : function(req, res ,next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		
		if (!req.body.exercisecategoryname || !req.body.exercisecategoryid) {
				res.json({success: false, msg: 'Please  exercisecategoryname &  exercisecategoryid.'});
			}else {
				var addExerciseCategoryData = new ExerciseCategory({
					exercisecategoryname: req.body.exercisecategoryname,
					exercisecategoryid: req.body.exercisecategoryid
					});
					// save the exercise
					addExerciseCategoryData.save(function(err) {
					if (err) {
						return res.json({success: false, msg: 'Error in add exercise category.'});
					}
						res.json({success: true, msg: 'Successful added new  exercise category.'});
					}); 
			}
		 
	},
	listexercisecategory:function(req, res) {
		ExerciseCategory.find({}, function (err, ercisecategory) {

		if(!ercisecategory) {return res.json({success: false, msg: 'no ercisecategory exists.'}); }
		res.json({success: true, msg: 'Successful found all exercisecategory.' ,data:ercisecategory});
		}).select('exercisecategoryname exercisecategoryid');
	},


};






