const router = require('express').Router();

// render search results page given an array of results returned by the API

router.get('/', (req, res) => {
    console.log('YOU HAVE HIT THE SEARCH ROUTE')
    console.log(req.body)
    let results = req.body;
    console.log('RESULTS: ', results)
    res.render('search', {
        results
    })
})

module.exports = router;