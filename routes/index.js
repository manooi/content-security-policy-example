var express = require('express');
var router = express.Router();
var { body } = require('express-validator');

var comments = ['Hack me if you can'];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Content Security Policy', comments: comments });
});

router.post('/comment', function (req, res) {
  comments.push(req.body.fcomment);
  res.redirect('/');
})

router.post('/comment-sanitized', body('fcomment').escape() ,function (req, res) {
  comments.push(req.body.fcomment);
  res.redirect('/');
})

module.exports = router;
