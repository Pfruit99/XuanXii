document.getElementById("button").addEventListener("click", () => {
  let inputvalue = document.getElementById("InputName").value;
  let details = document.getElementById("details");
  details.innerHTML = "";

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputvalue}`)
    .then((response) => response.json())
    .then((data) => {
      const items = document.getElementById("items");
      items.innerHTML = "";
      if (data.meals == null) {
        document.getElementById("msg").style.display = "block";
      } else {
        document.getElementById("msg").style.display = "none  ";
        data.meals.forEach((meal) => {
          console.log(meal);

          itemDiv = document.createElement("div");
          itemDiv.setAttribute("onclick", `details('${meal.idMeal}')`);

          let itemInfo = `<div class="card" style="width: 12rem;">
                            <img src="${meal.strMealThumb}" alt="..." style="width:100%">
                            
                            <div class="card-body text-center">
                            <h5 class="ingredients">${meal.strMeal}</h5>
                            <p>Some text above food.</p>
                            </div>
 
                            </div>`;

          itemDiv.innerHTML = itemInfo;
          items.appendChild(itemDiv);
        });
      }
    });
});

function details(id) {
  console
    .log(id)
    .fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => res.json())
    .then((detail) => {
      let meal = detail.meals[0];
      console.log(meal);

      let details = document.getElementById("details");
      details.innerHTML = "";
      let detailsDiv = document.createElement("div");
      let detailsInfo = `<div class="card" style="width: 17rem;">
                            <img src="${meal.strMealThumb}" alt="..." style="width:100%">
                            
                            <div class="card-body text-center">
                            <h3  class="card-text">${meal.strMeal}</h3>
                            <h6>Ingredients</h6>

                            <ul>
                                <li> ${meal.strArea}</li>
                            
                            
                                <li> ${meal.strCategory}</li>
                            
                            
                                <li> ${meal.strIngredient1}</li>
                            
                                <li> ${meal.strIngredient2}</li>
                                                                <li> ${meal.strIngredient3}</li>
                                                                                                <li> ${meal.strIngredient4}</li>
                                                                                                                                <li> ${meal.strIngredient5}</li>
                            </ul>

                            <p>Some text above food.</p>
                            </div>
 
                            </div>`;

      detailsDiv.innerHTML = detailsInfo;
      details.appendChild(detailsDiv);
    });
}
