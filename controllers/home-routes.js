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


// Search route

const options = {
  headers: {
    'X-RapidAPI-Key': '7697d621e5msh45f75f307152943p1d76e8jsn107cee9d3bf4',
    'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
  }
};

router.get('/search', (req, res) => {
  console.log("REQUEST QUERYYYYYYYY", req.query)
  axios.get(`https://the-cocktail-db.p.rapidapi.com/search.php?s=${req.query.search}`, options)
    .then(response => {
      const results = response.data.drinks;
      if(!results){
        // TODO: THIS IS WHERE WE SHOULD SOMEHOW INDICATE NO RESULTS -- MAKE 404 LANDING PAGE IN VIEWS?
        return res.status(404).end();
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
      loggedIn: req.session.loggedIn })
    })

})


router.get('/favorites', (req, res) => {
  res.render('favorites')
})

// Need to write an if statement in case the search box is left blank. Currently runs a getAll, but would prefer an alert window pop up

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
