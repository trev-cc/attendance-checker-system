//mongodb://trevorfleeman:password@ds229835.mlab.com:29835/test_db

var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var connection = "mongodb://trevorfleeman:password@ds229835.mlab.com:29835/test_db";
mongoose.connect(connection, { useMongoClient: true });

mongoose.Promise = global.Promise;

var studentSchema = new mongoose.Schema({
    buffID: String,
    firstName: String,
    lastName: String
});

var Student = mongoose.model('Student', studentSchema);



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/greetings', function(req, res, next){
    res.send("Hello there....");
});

router.get('/greetings2', function(req, res, next){
    res.send("Hello I greet you agian");
});

router.get('/add_random_student', function(req, res, next){
    var rand = new Student(
        { 
            buffID: '975338',
            firstname: 'Trevor',
            lastname: 'Fleeman'
        }
    );
    rand.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('The studnet is saved in the db');
        }
});
});

module.exports = router;
