console.log("YOU HAVE ACCESSED SEARCH.JS")


// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '7697d621e5msh45f75f307152943p1d76e8jsn107cee9d3bf4',
//         'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
//     }
// };

// function searchhFormHandler(){
//     console.log("Test triggered")
// }

let searchResults = [];

const getSearchResults = async () => {

    const searchParam =
        await fetch(`https://the-cocktail-db.p.rapidapi.com/search.php?s=${searchParam}`, options)


            .then(response => response.json())
            .then(response => {
                console.log(response)
            })
            .catch(err => console.error(err));
};


$(document).ready(function () {

    console.log(window)

    $(".saveBtn").on("click", async function (e) {
        e.preventDefault();
        console.log("yousa cilka da battan3");
        // console.log(e.target.dataset.drinkid)
        if (e.target.dataset.drinkid) {
            let drinkID = e.target.dataset.drinkid;
            let drinkName = e.target.dataset.drinkname;
            let drinkImage = e.target.dataset.drinkimage;
            const response = await fetch('/api/favorites', {
                method: 'POST',
                body: JSON.stringify({ drinkID, drinkName, drinkImage }),
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
                alert('Favorite added')
            } else {
                alert('Failed');
            }
        };
    });
});





// hideFavorites()
// e.target.dataset.drinkid included in favorites
// e.target.ClassList.add()

// hide the favorite button for a drink if it's already favorited
// async function hideFavorites(){
//     let favorites = Favorite.findAll({
//         where:{
//             user_id : session.user_id
//         }
//     })
//     for(drink in favorites)
// }


//getSearchResults();
// document.getElementById('search-button').addEventListener('click', searchFormHandler)