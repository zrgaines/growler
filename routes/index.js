var express = require('express');
var router = express.Router();
var session = require('express-session');
var Growl = require('../models/growl');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Growler', growls: Growl.all });
  console.log(req.session)
});


// router.get('/growls', function(req, res, next) {

// });


router.post('/', function(req, res, next) {
  var growl = new Growl(req.body);
  console.log(Growl.text);
  res.redirect('/');
});

module.exports = router;
