var express = require('express');
var router = express.Router();
var { body } = require('express-validator');

var comments = ['Hack me if you can'];

/* GET home page. */
router.get('/', function(req, res, next) {
  // Disallows any kind of in-line scripts / scripts that don't come from self (our own domain)
  // res.setHeader('Content-Security-Policy', "script-src 'self'");

  // To allow scripts from trusted source
  // res.setHeader('Content-Security-Policy', "script-src 'self' https://fonts.googleapis.com");

  // Disallows in-line styles
  // but this also block our inline styles!
  res.setHeader('Content-Security-Policy', "script-src 'self' https://fonts.googleapis.com; style-src 'self'");

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
