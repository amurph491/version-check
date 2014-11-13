var express = require('express');
var router = express.Router();
var fs = require('fs');
var siTKB = require('siTKB');

/* GET home page. */
router.get('/', function(req, res) {
  
  res.render('index', { title: 'MicroStrategy Compatibility Checker' });
});

router.post('/search', function(req, res) {
  console.log(req.body);
  var term = req.body.product.toUpperCase();
  var versionConvert = {
    "9.3.0":"930GA",
    "9.3.1":"931GA",
    "9.3.1 HF1":"931HF1",
    "9.3.1 HF2":"931HF1",
    "9.4.0":"940GA",
    "9.4.1":"941GA",
    "9.4.1 HF1":"941HF1",
    "9.4.1 HF2":"941HF2",
    "9.4.1 HF3":"941HF3",
    "9.4.1 HF4":"941HF4",
    "9.4.1 HF5":"941HF5",
    "9.4.1 HF6":"941HF6"
    }
  var version = req.body.mstrversion.toString() || {};
  console.log("before" + version);
  version = versionConvert[version];
  console.log(versionConvert);
  console.log(version);
  siTKB.siTKB(term,version,function() {
      res.send(term);
    });
});



module.exports = router;