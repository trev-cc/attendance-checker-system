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

router.get('/add/:firstname/:lastname', function(req, res, next){
    var rand = new Student(
        { 
            buffID: '975338',
            firstname: req.params.firstname,
            lastname: req.params.lastname
        }
    );
    rand.save(function (err) {
        if (err) {
            console.log(err);
            res.send('There was an error');
        } else {
            var message = req.params.firstname + ' ' + req.params.lastname + ' is saved in the db';
            console.log(message);
            res.send(message);
        }
    });
});

module.exports = router;
