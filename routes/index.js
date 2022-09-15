var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit', function(req, res, next) {
  var name = req.body.username;
  res.render("chat", {name});
});

router.post('/chat', function(req, res, next) {

})

module.exports = router;
