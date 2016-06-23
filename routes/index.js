var express = require('express');
var router = express.Router();
var session = require('express-session');
var howl = require('../models/howl');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'howler', howls: req.session.feed });
});


// router.get('/howls', function(req, res, next) {

// });


router.post('/', function(req, res, next) {
  var howl = req.body;
  var curSession = req.session.feed;
  curSession.push(howl);
  res.redirect('/');
});

router.get('/', function(req,res,next) {
  res.render('index');
})

module.exports = router;
