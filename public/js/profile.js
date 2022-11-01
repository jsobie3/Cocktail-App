
$(document).ready(function () {

    $(".favBtn").on("click", async function (e) {
        e.preventDefault();
        // favoritesList = await fetch('/api/favorites')
        // .then(results=> results.json())
        // .catch(err => console.error(err))
        // console.log(favoriteList)
        document.location.replace("/profile/favorites")
        await fetch('/api/favorites', {
            method: 'GET'
        })
       
    });
});


$(document).ready(function () {

    $(".commentBtn").on("click", function (e) {
        e.preventDefault();
        console.log("button clicked 2");
    });
});

