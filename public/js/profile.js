
$(document).ready(function () {

    $(".favBtn").on("click", function (e) {
        document.location.replace("/favorites")
       
        e.preventDefault();
        console.log("yousa cilka da battan");
    });
});


$(document).ready(function () {

    $(".commentBtn").on("click", function (e) {
        e.preventDefault();
        console.log("yousa cilka da battan2");
    });
});

