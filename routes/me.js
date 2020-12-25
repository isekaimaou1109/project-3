var express = require('express');
var router = express.Router();
var jwt = require("jsonwebtoken")

/* GET users listing. */
router.get('/', function(req, res, next) {
  var query = req.query.token

  jwt.verify(query, "aaaa", (err, decoded) => {
    res.send(decoded)
  })
});

module.exports = router;
