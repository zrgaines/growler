var express = require('express');
var router = express.Router();
var session = require('express-session');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Growler' });
});


// router.get('/growls', function(req, res, next) {

// });


// router.post('/growls', function(req, res, next) {

//   res.redirect('/');
// });

module.exports = router;
