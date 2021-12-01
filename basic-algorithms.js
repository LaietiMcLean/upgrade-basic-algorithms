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

//Iteración 3
    //3.1
    let result1 = 10 * 5;
    alert(result1);

    //3.2
    let result2 = 10 / 2;
    alert(result2);
    //3.3
    let result3 = 15 % 9;
    alert(result3);

    //3.4
    var y = 10;
    var z = 5;
    var x = y + z;
    texto = 'x = ' + x;
    console.log(texto);

    //3.5
    var y = 10;
    var z = 5;
    var x = y * z;
    texto2 = 'x = ' + x;
    console.log(texto2);

//Iteración 4
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
    //4.1
    let name1 = avengers[0];
    console.log(name1);

    //4.2
    avengers.unshift("IRONMAN");
    console.log(avengers);

    //4.3
    alert(avengers.length);

    //4.4
    const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
    rickAndMortyCharacters.push("Morty", "Summer");
    console.log(rickAndMortyCharacters[4]);

    //4.5
    const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];    
    rickAndMortyCharacters2.pop();
    console.log(rickAndMortyCharacters2);
    console.log(rickAndMortyCharacters2[0]);
    console.log(rickAndMortyCharacters2[4]);

    //4.6
    const rickAndMortyCharacters3 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
    rickAndMortyCharacters3.splice(1, 1);
    console.log(rickAndMortyCharacters3);

 //Iteración 5   
 const number1 = 10;
 const number2 = 20;
 const number3 = 2;

     if (number2 / number1 == 2) {
        console.log("number2 dividido entre number1 es igual a 2");
    }

    if (number1 !== number2) {
        console.log("number1 es estrictamente distinto a number2");
    }

    if (!number3 == number1) {
        console.log("number3 es distinto number1");
    }

    if (number3 * 5 == number1) {
        console.log("number3 por 5 es igual a number1");
    }

    if (number3 * 5 == number1 && number1 * 2 == number2) {
        console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
    }

    if (number2 / 2 == number1 || number1 / 5 == number3) {
        console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
    }

//Iteración 6
    //6.1
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }

    //6.2
    for (var i = 0; i < 10; i++) {
        if (!(i % 2 === 0)){
          continue;
        }
        console.log(i);
    }

    //6.3
    var mensaje = 'Intentando dormir';
    var mensaje2 = 'Dormido!';
    for (i= 0; i <= 9; i++) {
        if (i === 9) {
            console.log(mensaje2);
        } else {
            console.log(mensaje);
        }
    }

        















