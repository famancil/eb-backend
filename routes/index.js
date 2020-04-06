var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json('Bienvenido al Servidor REST');
  //res.render('index', { title: 'Express' });
});

module.exports = router;
