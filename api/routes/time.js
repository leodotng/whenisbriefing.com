var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/time', function(req, res, next) {
  res.render('time', { title: 'Express' });
});

module.exports = router;
