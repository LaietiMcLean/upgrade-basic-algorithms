//Iteración 1
var myFavoriteHero = "Hulk";
var x = 50;
var h = 5;
var y = 10;
var z = h + y;

//Iteración 2
    //2.1
    const character = {
    name: 'Jack Sparrow', 
    age: 10 
    };

    character.age = 25;

    //2.2
    var firstName = 'Jon'; 
    var lastName = 'Snow'; 
    var age = 24;

    texto = 'Soy ' + firstName + ' ' + lastName + ', tengo ' + age + ' años y me gustan los lobos.';
    console.log(texto);

    //2.3
    const toy1 = {name: 'Buss myYear', price: 19};
    const toy2 = {name: 'Rallo mcKing', price: 29};
    console.log(toy1.price + toy2.price);

    //2.4
    let globalBasePrice = 10000;
    const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
    const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

    globalBasePrice = 25000;
    car1.finalPrice = car1.basePrice + globalBasePrice;
        console.log(car1.finalPrice);
    car2.finalPrice = car2.basePrice + globalBasePrice;
        console.log(car2.finalPrice);
