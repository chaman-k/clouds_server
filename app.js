var express = require('express');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
//var fs = require('fs');

mongoose.connect('mongodb://admin:test@ds133004.mlab.com:33004/clouds');

var result = require('./models/result');
var user = require('./models/user');
var album = require('./models/album');
var image = require('./models/image');
var db = mongoose.connection;
//var router = express.router;
//var expressValidator = require('express-validator');
// const { check, body,oneOf, validationResult } = require('express-validator/check');
// const { matchedData } = require('express-validator/filter');
var app = express();
app.use(express.static(__dirname + '/public'));
//app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(cookieParser());

// Express Validator
//app.use(expressValidator());


// connect flash
app.use(function (req, res, next) {
  // res.locals.success_msg = req.flash('success_msg');
  // res.locals.error_msg = req.flash('error_msg');
  // res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

app.get('/', function(req, res){
  result.find({}, function(err, docs) {
    if(err){
      console.log("error finding results");
    }
    else if(docs){
      res.render('index',{winners: docs});
    } else res.render('index');
    //results=JSON.stringify(docs);
//  console.log(results);
//  console.log(docs);
  });
});

app.get('/console', function(req, res, next){
  return res.render('console');
});

app.get('/gallery', function(req, res, next){
  album.find({}, function (err, docs){
    if(err){
      console.log("error fetching album");
      res.render('gallery');
    }
    else if(docs){
      res.render('gallery', {albums: docs});
    }
    else res,render('gallery');
  });
  //return res.render('gallery');
});

app.get('/album_view', function(req, res, next){
  // var Album = new album({
  //     albumName: "CLOUDS Farewell",
  //     cover: "images/gallery/album_cover/sample.jpg",
  //     description: "Description of the album"
  //
  //
  // });
  // Album.save(function (err){
  //     if (err) console.log("error ");
  //     else console.log("event inserted into db");
  // });
  return res.render('album_view');
});

app.post('/winners', function(req, res){
//   fs.writeFile('mynewfile3.txt', req.body.data, function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });
//  req.('eventName', 'Event name is required').notEmpty();
  // req.checkbody('studentName1', 'Student name is required').notEmpty();
  // req.checkbody('studentClass1', 'Class is required').notEmpty();
  //var errors = req.validationErrors();


   {
  console.log(req.body.eventName);
  console.log(req.body.studentName1);
  console.log(req.body.studentClass1);
  console.log(req.body.studentName2);
  console.log(req.body.studentClass2);
  console.log(req.body.studentName3);
  console.log(req.body.studentClass3);
  var Result = new result({
    eventName: req.body.eventName,
    studentName1: req.body.studentName1,
    studentClass1: req.body.studentClass1,
    studentName2: req.body.studentName2,
    studentClass2: req.body.studentClass2,
    studentName3: req.body.studentName3,
    studentClass3: req.body.studentClass3
  });
  Result.save(function (err){
      if (err) console.log("error saving event");
      else console.log("event inserted into db");
  });
}
});
//ensure authenticated for protected routes
function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/');
	}
}

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function(){
	console.log('Server started on port '+app.get('port'));
});
