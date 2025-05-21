//Jest's mock funtion 
function addFive(val) {
    return val +5
}

module.exports = addFive;

/*
for (var i=1; i<11; i++)
    {
        if (i==1) {console.log("Gold medal")}    
        else if (i==2) {console.log("Silver medal")}    
        else if (i==3) {console.log("Bronze medal")}
        else {console.log(i)}
    }
*/

/*
//Array Exercise
function letterFinder(word, match) {
    for (i = 0; i < word.length; i++) {
        if (word[i] == match){
            console.log("Found the", match, "at", i+1)
        }
        else {console.log("---No found", "at", i+1)}
    }
}

letterFinder("test", "t");
*/

/*
//Error Prevention, enabling running at the same time
function addTwoNums(a,b){
    try{
        if (typeof a != 'number'){
            throw new ReferenceError('The first argument is not a number.')
        }   
        else if (typeof b != 'number'){
            throw new ReferenceError('The second argument is not a number.')
        }
        else{
            console.log(a+b)    
        } 
    } catch (err) {
        console.log("Error!", err)
    }
}

addTwoNums(5,"5")
console.log("It still works")
*/


//Defensive Programming -> argument validation with condition vars
function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2
    var condition2 = typeof(match) == 'string' && match.length == 1

    if (condition1 && condition2)
    {
        for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //if the current character at position i in the word is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
        }
    } else {
        console.log("Please pass correct arguments to the function.")
    }
}

letterFinder(5,5)
console.log()
letterFinder("cat","c")

//OO Programming
class Animal {
    constructor(color = 'yellow', energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if(this.energy > 0) {
            this.energy -= 20;
            console.log('Energy is decreasing, currently at:', this.energy)
        } else if(this.energy == 0){
            this.sleep();
        }
    }
    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy)
    }
    getColor() {
        console.log(this.color)
    }
}

class Cat extends Animal {
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canClimbTrees = canClimbTrees;
        this.canJumpHigh = canJumpHigh;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound,canFly, color,energy) {
        super(sound,canFly, color,energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}

var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk

fiji.makeSound(); // undefined
fiji.makeSound(true); // chirp

polly.makeSound(); // I'm a talking parrot!
polly.makeSound(true); // chirp, I'm a talking parrot!

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow
// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!

//Destructure variable
let {PI} = Math
console.log(typeof(PI), PI)

//For of, loop an object using array
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}

//Template Literal
let greet = "Hello";
let place = "World";
console.log(greet + " " + place + "!"); //display both variables without using template literals
console.log(`${greet} ${place} !`) //display both variables using template literals

console.log(`${1 + 1 + 1 + 1 + 1} stars!`) //it's possible to perform arithmetic operation inside a template literal expression

//Spread
//join arrays

const fruits = ['apple', 'pear', 'plum'];
const berries = ['blueberry', 'strawberry'];
const fruitsAndBerries = [...fruits, ...berries]; // concatenate
console.log(fruitsAndBerries); // ['apple', 'pear', 'plum', 'blueberry', 'strawberry'];

//join objects

const flying = { wings: 2 };
const car = { wheels: 4 };
const flyingCar = {...flying, ...car};
console.log(flyingCar); // {wings: 2, wheels: 4}

//ADD new members to arrays without using the push() method

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies); // ['onion', 'parsley', 'carrot', 'beetroot'];


//CONVERT a string to an array using the spread operator

const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

//COPY either an object or an array into a separate one

const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1};
car1.speed = 201;
console.log(car1.speed, car2.speed); // 201, 200


const fruits1 = ['apples', 'pears'];
const fruits2 = [...fruits1];
fruits1.pop();
console.log(fruits1, "not", fruits2); // ['apples'] 'not' ['apples','pears'];

//DOM
// ❗ Wrap browser-only code to prevent Jest from running it
if (typeof window !== 'undefined') {
//Prompt
let answer = prompt('What is your name?');
if (typeof(answer) === 'string') {
    var h1 = document.createElement('h1')
    h1.innerText = answer;
    document.body.innerText = '';
    document.body.appendChild(h1);
}

//HTML attribute
var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    h1.innerText = input.value
})

//Exercise for addEventListener 
var h1 = document.querySelector('h1')
var arr = ['Example Domain',
        'First Click',
        'Second Click',
        'Third Click']

function handleClicks () {
    switch (h1.innerText){
        case arr[0]:
            h1.innerText = arr[1]
            break
        case arr[1]:
            h1.innerText = arr[2]
            break
        case arr[2]:
            h1.innerText = arr[3]
            break
        default:
            h1.innerText = arr[0]
    }
}

h1.addEventListener('click',handleClicks)
}

//OOP
class Animals {

}

class Dog extends Animals {
    constructor() {
        super();
        this.noise = "bark";
    }

    makeNoise() {
      return this.noise;
    }
}

class Wolf extends Dog {
    constructor() {
        super(); // Calls Dog's constructor
        this.noise = "growl";
    }
}

var result = new Wolf();
console.log(result.makeNoise()); // Even though makeNoise() is defined in Dog, it uses this.noise, and this is the Wolf object — which has noise = "growl".