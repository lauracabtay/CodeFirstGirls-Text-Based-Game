var play = prompt("Would you like to play a game? Please enter yes or no.");

console.log(play);

/*
If user wants to play
*/
if (play.toLowerCase() === "yes") {
alert("Alright, let's play!")


/*
Rules of the game
*/
alert('Here is the game: I will generate a letter. You will then be presented with a category, and you must type a word beginning with the given letter and matching that category. ');


/*
Generate a letter
*/
var letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
letter = letter[Math.floor(Math.random() * 25)  ];
alert(`Your letter is ${letter}`);

/*
Animal category
*/
var animal = prompt('Animal:');
console.log(animal);

if (animal.toUpperCase().startsWith(letter)) {
    alert('Good job!')
}
else {
    alert(`Oh no! ${animal} starts with a ${animal.charAt(0).toUpperCase()}`)
};

/*
Food category
*/
var food = prompt('Food:');
console.log(food);

if (food.toUpperCase().startsWith(letter)) {
    alert('Well done!')
}
else {
    alert(`Oh no! ${food} starts with a ${food.charAt(0).toUpperCase()}`)
};

/*
City category
*/
var city = prompt('City:');
console.log(city);

if (city.toUpperCase().startsWith(letter)) {
    alert('You\'re smashing it!')
}
else {
    alert(`Oh no! ${city} starts with a ${city.charAt(0).toUpperCase()}`)
};

/*
Occupation category
*/
var occupation = prompt('Occupation:');
console.log(occupation);

if (occupation.toUpperCase().startsWith(letter)) {
    alert('Good job!')
}
else {
    alert(`Oh no! ${occupation} starts with a ${occupation.charAt(0).toUpperCase()}`)
};

/*
Country category
*/
var country = prompt('Country:');
console.log(country);

if (country.toUpperCase().startsWith(letter)) {
    alert('Very good!')
}
else {
    alert(`Oh no! ${country} starts with a ${country.charAt(0).toUpperCase()}`)
};


/*
Singer category
*/
var singer = prompt('Singer:');
console.log(singer);

if (singer.toUpperCase().startsWith(letter)) {
    alert('You are incredible!')
}
else {
    alert(`Oh no! ${singer} starts with a ${singer.charAt(0).toUpperCase()}`)
};

/*
Actor category
*/
var actor = prompt('Actor:');
console.log(actor);

if (actor.toUpperCase().startsWith(letter)) {
    alert('You are by far the best player I\'ve seen!')
}
else {
    alert(`Oh no! ${actor} starts with a ${actor.charAt(0).toUpperCase()}`)
};

/*
Movie Title category
*/
var movietitle = prompt('Movie Title:');
console.log(movietitle);

if (movietitle.toUpperCase().startsWith(letter)) {
    alert('Well done!')
}
else {
    alert(`Oh no! ${movietitle} starts with a ${movietitle.charAt(0).toUpperCase()}`)
};

/*
Flower category
*/
var flower = prompt('Flower:');
console.log(flower);

if (flower.toUpperCase().startsWith(letter)) {
    alert('You\`re smashing it!')
}
else {
    alert(`Oh no! ${flower} starts with a ${flower.charAt(0).toUpperCase()}`)
};

/*
Brand category
*/
var brand = prompt('Brand:');
console.log(brand);

if (brand.toUpperCase().startsWith(letter)) {
    alert('Well done you!')
}
else {
    alert(`Oh no! ${brand} starts with a ${brand.charAt(0).toUpperCase()}`)
}
}

/*
If user doesn't want to play
*/
else if(play.toLowerCase() === "no") {
    alert("Nevermind, come back when you're ready!")
}

/*
Other input
*/

else {
alert("Sorry, I didn't get that.")
};
