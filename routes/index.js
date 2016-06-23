var express = require('express');
var router = express.Router();
var session = require('express-session');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Growler' });
  console.log(req.session)
});



// router.get('/growls', function(req, res, next) {

// });


// router.post('/', function(req, res, next) {
//   var growl = Growl.all;
//   req.session.feed.push(growl);
//   console.log(growl);
//   res.redirect('/');
// });

module.exports = router;
