var express = require('express');
var router = express.Router();
var secret = process.env.SECRET || require('../config/env.vars.js').secret;

console.log("this is secret: ", secret);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
