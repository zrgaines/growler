var express = require('express');
var router = express.Router();
var session = require('express-session');
var Growl = require('../models/growl');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Growler', growls: req.session.feed });
});


// router.get('/growls', function(req, res, next) {

// });


router.post('/', function(req, res, next) {
  var growl = req.body;
  req.session.feed.push(growl);
  res.redirect('/');
});

module.exports = router;
