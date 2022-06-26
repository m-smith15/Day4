

function pizzaTime(crustType,sauceType,cheese,toppings){
    var pizza = [];
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}
var pizza1 = pizzaTime("deep dish", "traditional", ["mozzarella"],["pepperoni","sausage"]);
// console.log(pizza1);
var pizza2 = pizzaTime("hand tossed","marinara",["mozzarella","feta"],["mushrooms","olives","onions"]);
// console.log(pizza2);
var pizza3 = pizzaTime("hand tossed","marinara",["mozzarella"],["green peppers","green olives","old bay"]);
// console.log(pizza3);
var pizza4 = pizzaTime("thin crust","pesto", ["mozzarella", "riccatta"],["pruchuto","arugala","cocktail shrimp"]);
// console.log(pizza4);
var pizzaPossibilities = [pizza1, pizza2, pizza3, pizza4];
var pizzaRoulette = pizzaPossibilities[Math.floor(Math.random()*5)];
console.log(pizzaRoulette);