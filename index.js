// Write your code here

class Breakfast{
    constructor(food,drink){
        this.food = food;
        this.drink = drink;
    }
}

const breakfast = new Breakfast("cereal","milk");

class Lunch{
    constructor(salad,soup,drink){
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

const lunch = new Lunch("salad","tomato soup","orange juice");

class Dinner{
    #dessert;
    constructor(salad,soup,entree,dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;
        
    }
}

const dinner = new Dinner("mediterian salad","fish soup","meat","tiramisu");