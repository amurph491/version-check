var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/new', function(req, res) {
  res.render('new', { title: 'Express' });
});

module.exports = router;