const router = require('express').Router();
const { User } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');
const axios = require('axios');

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


//Our Favorites
router.get('/ourfavorites', (req, res) => {
  res.render('ourfavorites', {
    loggedIn: req.session.loggedIn
  })
})

// No Results
router.get('/404', (req, res) => {

  res.render('404', {
    loggedIn: req.session.loggedIn
  });
});




// Search route

const options = {
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
  }
};

router.get('/search', (req, res) => {
  console.log("REQUEST QUERY", req.query)
  axios.get(`https://the-cocktail-db.p.rapidapi.com/search.php?s=${req.query.search}`, options)
    .then(response => {
      const results = response.data.drinks;
      if (results == null) {
        return res.redirect('/404');
      }

      console.log(results)
      let drinks = (results || []).map(drink => {
        let newDrink = { ...drink, ingredients: [] };
        for (let i = 1; i < 16; i++) {
          if (drink["strIngredient" + i]) {
            let ingredient = {
              name: drink["strIngredient" + i],
              qty: drink["strMeasure" + i]
            }
            newDrink.ingredients.push(ingredient);
          }
        }
        return newDrink;
      })
      console.log("RESULTS", drinks)
      res.render('search', {
        drinks: drinks,
        loggedIn: req.session.loggedIn,
        user_id: req.session.user_id
      })
    })

})
// Need to write an if statement in case the search box is left blank. Currently runs a getAll, but would prefer an alert window pop up

router.get('/profile/favorites', async (req, res) => {
  var fullUrl = req.protocol + '://' + req.get('host');
  // console.log(req.session);
  axios.get(`${fullUrl}/api/favorites`, {
    withCredentials: true,
    credentials: "include",
    headers: {
      'user_id': req.session.user_id
    }
  })
    .then((response) => {
      results = response.data
      console.log(results)
      if (results) {
        res.render('favorites', {
          drinks: results,
          loggedIn: req.session.loggedIn
        })
      }
      else {
        console.log("triggering me")
      }
    })
    .catch(e => { console.log(e.response.data) });
})


router.get('/byingredient', (req, res) => {
  console.log("Searching for Ingredient", req.query)
  axios.get(`https://the-cocktail-db.p.rapidapi.com/filter.php?i=${req.query.search}`, options)
    .then(response => {
      const results = response.data.drinks;
      console.log("RESULTS", results)
      res.render('byingredient', { results })
    })
})

module.exports = router;
