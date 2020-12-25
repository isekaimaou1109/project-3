var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const locale = req.query.lng
  res.render('index', { title: 'Express', lang: locale.toUpperCase() });
});

module.exports = router;
