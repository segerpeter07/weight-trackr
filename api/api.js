var express = require('express');
var path = require('path');
var mysql = require('mysql');
// var PathService = require('./PathService');

var router = express.Router();
// var service = new PathService();

// router.route('/paths').post(function(req, res) {
//   service.createPath(req.body, function(err) {
//     if (err == null) {
//       return res.sendStatus(400);
//     }
//     res.json(err);
//   });
// })


module.exports = router;
