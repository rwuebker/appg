var express = require('express');
var router = express.Router();
var secret = process.env.SECRET || require('../config/env.vars.js').secret;

/* GET home page. */
router.get('/*', function(req, res, next) {
  res.render('index', { title: 'AppG' });
});

module.exports = router;
