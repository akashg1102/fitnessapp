var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
 
// Thanks to http://blog.matoski.com/articles/jwt-express-node-mongoose/
 
// set up a mongoose model
var ExerciseCategorySchema = new Schema({
  exercisecategoryname: {
        type: String,
        required: true
    },
    exercisecategoryid: {
        type: String,
        unique: true,
        required: true
    },
    timestamp:{ 
		type :Date ,
		'default': Date.now
		}
  
});
 
 
module.exports = mongoose.model('ExerciseCategory', ExerciseCategorySchema);
