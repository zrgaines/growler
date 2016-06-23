var express = require('express');
var router = express.Router();
var session = require('express-session');
var Growl = require('../models/growl');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Growler' });
  console.log(req.session.feed);
});



// router.get('/growls', function(req, res, next) {

// });


router.post('/', function(req, res, next) {
  var growl = Growl.all;
  req.session.feed.push(growl);
  console.log(req.session.feed);
  res.redirect('/');
});

module.exports = router;
