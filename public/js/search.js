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

        $(".saveBtn").on("click", function (e) {
            e.preventDefault();
            console.log("yousa cilka da battan3");
        });
    });
 
//getSearchResults();
// document.getElementById('search-button').addEventListener('click', searchFormHandler)