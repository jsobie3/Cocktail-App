const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f74f08a91bmshf078c80f0ca28b0p1d1924jsn8f1272119590',
        'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    }
};


const searchFormHandler = async (event) => {
    event.preventDefault();

    const searchParam = document.querySelector('#liquor-search').value.trim();

 await fetch(`https://the-cocktail-db.p.rapidapi.com/search.php?s=${searchParam}`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    }.catch(err => console.error(err));
}