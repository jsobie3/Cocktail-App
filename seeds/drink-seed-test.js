const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f74f08a91bmshf078c80f0ca28b0p1d1924jsn8f1272119590',
        'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    }
};

fetch('https://the-cocktail-db.p.rapidapi.com/search.php?s=vodka', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));