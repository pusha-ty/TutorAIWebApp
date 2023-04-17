var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  // retrieve login info via body parser
  console.log(req.body.username+"-"+req.body.password)
  res.redirect('/courses');
});

module.exports = router;
