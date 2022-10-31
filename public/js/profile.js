
$(document).ready(function () {

    $(".favBtn").on("click", async function (e) {
        e.preventDefault();
        favoriteList = await fetch('/api/favorites')
        .then(results=> results.json())
        .catch(err => console.error(err))
        console.log(favoriteList)
        // document.location.replace("/favorites", {favoriteList})
        // await fetch('/api/favorites', {
        //     method: 'GET'
        // })
        // console.log("yousa cilka da battan");
    });
});


$(document).ready(function () {

    $(".commentBtn").on("click", function (e) {
        e.preventDefault();
        console.log("yousa cilka da battan2");
    });
});

