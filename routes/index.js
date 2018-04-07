const express = require('express');
const router = express.Router();

const db = require('../db');

/* GET home page. */
router.get('/', async function(req, res, next) {
  var posts = await db.posts.getAll();
  res.render('index', { title: 'Express', posts: posts });
});

module.exports = router;
