var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("inside posts router on server");
  console.log("this is req.query: ", req.query);

  var obj = [{
    headline:"samsung tv",
    description:"great tv brand new $300"
  },
  {
    headline:"sony tv $200",
    description: "crappy tv but it will do the trick for bordom"
  }]
  res.send(obj);
});

module.exports = router;
