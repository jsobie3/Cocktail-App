const router = require('express').Router();
const { User } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');





// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    res.render('homepage', {

      loggedIn: req.session.loggedIn,
    });
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }

    res.render('login');
  });

  router.get('/profile', (req, res) => {

    res.render('profile', {
      loggedIn: req.session.loggedIn
    });
  });


  // Classics
  router.get('/classics', (req, res) => {

    res.render('classics', {
      loggedIn: req.session.loggedIn
    });
  });

  module.exports = router;
