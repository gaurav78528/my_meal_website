// www.themealdb.com/api/json/v1/1/random.php
let meal_img = document.getElementById("meal_image");
let meal_desc = document.getElementById("meal_desc");
let getRandomMeal = async () => {
  try {
    let res = await fetch(`https://themealdb.com/api/json/v1/1/random.php`);
    // let data = await res.json();
    let { meals } = await res.json();
    console.log(meals);
    appendMeal(meals);
  } catch (error) {
    console.log(error);
  }
};
getRandomMeal();

let appendMeal = (meals) => {
  let item = meals[0];
  console.log(item);
  let img = document.createElement("img");
  img.src = item.strMealThumb;

  let div = document.createElement("div");
  let meal = document.createElement("h2");
  meal.innerText = item.strMeal;

  let category = document.createElement("h3");
  category.innerText = `Category:- ${item.strCategory}`;

  let link = document.createElement("a");
  link.href = item.strYoutube;
  link.innerText = "Get Receipe";

  let receipeHeading = document.createElement("i");
  receipeHeading.innerText = "Receipe";

  let desc = document.createElement("p");
  desc.innerText = item.strInstructions;

  div.append(meal, category, link);
  meal_img.append(img);
  meal_desc.append(div, receipeHeading, desc);
};
