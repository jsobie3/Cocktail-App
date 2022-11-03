console.log("favorites.js accessed")
const deleteButtons = document.getElementsByClassName('deleteFavoriteButton')


async function deleteFavorite (ID) {
  //console.log(`This would delete favorite with drink_id ${ID}`)
  await fetch(`/api/favorites/${ID}`, {
    method: 'DELETE'
  })
  .then (console.log(`${ID} deleted`))
  .catch(err => console.error(err))
}


document.addEventListener('click', (event) => {
  if(!event.target.dataset.drinkid){
    console.log("Delete Button Hit Incorrectly");
    console.log(event.target.dataset);
    return
  }
  console.log("Delete Button Hit");
  deleteFavorite(event.target.dataset.drinkid)
  .then(()=> window.location.reload())
})
