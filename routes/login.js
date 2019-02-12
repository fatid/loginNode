const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login/login', { title: 'Şimdi Giriş Yap !' });
});

router.get('/signUp', function(req, res, next) {
    res.render('login/login', { title: 'Şimdi Giriş Yap !' });
});

module.exports = router;
