

// $('.accordion-content').foundation('toggle', `.accordion-content`);

// $(document).ready(function () {
//     favoriteDrinks = JSON.parse(localStorage.getItem("favoriteDrinks"));
//     let hrefs = Object.values(favoriteDrinks);
//     Object.keys(favoriteDrinks).forEach((el, index) => {

//     });
//   });

// $(`.favBtn`).on("click", function () {
//     var favDrinks = $(this).text();
//     if (favoriteDrinks[drinkName] == undefined) {
//       favoriteDrinks[drinkName] = $(this)
//         .siblings(".description")
//         .children()
//         .attr("href")}
//         localStorage.setItem("favoriteDrinks", JSON.stringify(favoriteDrinks));
//         console.log('.favBtn', 'you hit the fav btn');
//     });


// router.get('/', async (req, res) => {
//     try {
//       const dbDrinkData = await Gallery.findAll({
//         include: [
//           {
//             model: Painting,
//             attributes: ['filename', 'description'],
//           },
//         ],
//       });

//       const galleries = dbGalleryData.map((gallery) =>
//         gallery.get({ plain: true })
//       );

//       req.session.save(() => {
//         // We set up a session variable to count the number of times we visit the homepage
//         if (req.session.countVisit) {
//           // If the 'countVisit' session variable already exists, increment it by 1
//           req.session.countVisit++;
//         } else {
//           // If the 'countVisit' session variable doesn't exist, set it to 1
//           req.session.countVisit = 1;
//         }

//         res.render('homepage', {
//           galleries,
//           // We send over the current 'countVisit' session variable to be rendered
//           countVisit: req.session.countVisit,
//         });
//       });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });


$(document).ready(function () {

    $(".favBtn").on("click", function (e) {
        e.preventDefault();
        console.log("yousa cilka da battan");
    });
});


$(document).ready(function () {

    $(".lbbBtn").on("click", function (e) {
        e.preventDefault();
        console.log("yousa cilka da battan2");
    });
});


$(document).ready(function () {

    $(".commentBtn").on("click", function (e) {
        e.preventDefault();
        console.log("yousa cilka da battan3");
    });
});