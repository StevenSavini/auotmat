let food = [
  "Chicken Pot Pie",
  "Baked Beans",
  "Macaroni and Cheese",
  "Burgundy Sauce with Beef and Noodles",
  "Creamed Spinach",
  "Pumpkin Pie",
  "Strawberry Shortcake"
];

i = 0;
while (i < food.length) {
  newFood = food[i];
  i++;
  let foodItemDiv = document.createElement('div');
  foodItemDiv.className = 'food-item';
  foodItemDiv.innerHTML = newFood;

  foodItemDiv.addEventListener('click', () => {
    foodItemDiv.className += ' hidden';

  });
  let mainDiv = document.getElementById('main');
  mainDiv.appendChild(foodItemDiv);

}
