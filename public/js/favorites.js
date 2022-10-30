console.log("favorites.js accessed")
const deleteButtons = document.getElementsByClassName('deleteFavoriteButton')


async function deleteFavorite (ID) {
  // await fetch(`/api/favorites/${ID}`)
  // .then ("Nice")
  // .catch(err => console.err(err))
  console.log(`This would delete favorite with drink_id ${ID}`)
}

function test() {
  console.log("Click!")
}

for (button in deleteButtons) {
button.addEventListener('click', test)
}

// GETTING FAVS FROM USERS

// let myFavorites = [];


// const getMyFavorites = async () = > {
//     const getFavs = 
//     await fetch 
// }



// const favoriteDrinks = {};
// $(document).ready(function () {
//   let favDrinks = JSON.parse(localStorage.getItem("favoriteDrinks"));
//   Object.keys(favDrinks).forEach((el) => {
//     favoriteDrinks[el] = "";
//     $("#dropdown1").append(
//       $("<li>")
//         .addClass("list")
//         .append(
//           $("<a>")
//             .text(el)
//             .attr(
//               "href",
//               $(this).siblings(".description").children().attr("href")
//             )
//             .attr("target", "_blank")
//         )
//         .append(
//           $("<button>").text("-").attr("data-name", el).addClass("btn delete")
//         )
//     );
//   });


 
 
  // $(`.saveBtn`).on("click", function () {
  //   var drinkName = $(this).siblings(".drinkName").text();
  //   favoriteDrinks[drinkName] = "";
  //   $("#dropdown1").append(
  //     $("<li>")
  //       .addClass("list")
  //       .append(
  //         $("<a>")
  //           .text(drinkName)
  //           .attr(
  //             "href",
  //             $(this).siblings(".description").children().attr("href")
  //           )
  //           .attr("target", "_blank")
  //           .append($("<button>").text("-").addClass("btn delete"))
  //       )
  //   );
  //   localStorage.setItem("favoriteDrinks", JSON.stringify(favoriteDrinks));
  // });

  