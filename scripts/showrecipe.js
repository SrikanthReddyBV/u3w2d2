async function showRecipe() {
  let res = await fetch("http://www.themealdb.com/api/json/v1/1/random.php");
  let data = await res.json();
  return data;
}

// async function getRandom() {
//   let res = await fetch("http://www.themealdb.com/api/json/v1/1/random.php");
//   let data = await res.json();
//   return data;
// }

export { showRecipe };
