
var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/', async (req, res, next) => {
  var posts = await db.posts.getAll();
  res.send(posts);
});

router.post('/')
module.exports = router;
