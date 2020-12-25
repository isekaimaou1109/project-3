var express = require('express');
var router = express.Router();
var jwt = require("jsonwebtoken")
var fs = require("fs")
var path = require("path")

router.get("/", (req, res) => {
  res.render("login")
})

router.post("/", (req, res) => {
  var users = fs.readFileSync("D:\\namespaces\\web\\db.json", { encoding: "utf-8" })
  var parsed = JSON.parse(users)
  var user, pass, id, token

  parsed.forEach(u => {
    if(u.username === req.body.username && u.password === req.body.password) {
      user = u.username
      pass = u.password
      id = u.id
      token = jwt.sign({ id }, "aaaa", {
        expiresIn: 86400
      })
    }
  });

  res.redirect(`/me?token=${token}`)
})

module.exports = router;