var express = require('express');
const User = require('../models/Users');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', async function(req, res, next) {
  // retrieve login info
  console.log(req.body.username+"-"+req.body.password)
  const user = await User.findUser(req.body.username, req.body.password)
  if(user!==null){
    req.session.user = user
    res.redirect('/courses')
  }else{
    res.redirect("/?msg=fail")  // later modularize
  }
});

module.exports = router;