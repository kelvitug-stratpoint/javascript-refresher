import addNumber from "./main.js";

// Object Methods and This keyword

// const user = {
//     name: 'kelvin',
//     age: 27,
//     isMarried: true,
//     friends: ['jayson','norman'],
//     selectColor: null,
//     calculateAge: function(){
//         console.log(`I am ${this.age} Kelvin Vitug`);
//     }
// }

// user.calculateAge();


// Traversing Object
// const user = {
//     name: 'kelvin',
//     age: 27,
//     gender: 'Male',
//     phone: '2323232',
//     email: 'kelvindale.vitug@stratpoint.com'
// }

// // one way
// for (const key in user) {
//     console.log(key, user[key]);
// }

// // two way
// console.log(Object.keys(user));
// console.log(Object.values(user));

// Object Destructuring 
const user = {
    name: 'Kazi',
    age: 40,
    favBook: {
        bookName: 'this before you click',
        bookAuthor: 'Random Author'
    }
}

const {name, age, favBook} = user;
const {bookName, bookAuthor} = favBook;
console.log(name);
console.log(age);
console.log(bookName);
console.log(bookAuthor);


// Function Expression 
const calSumExp = function(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

console.log(calSumExp(50,60));

// Arrow Function 

const calSumArr = (num1, num2) => num1 + num2;

// const calSumArr = (num1, num2) => {
//     // logic here 
// }

console.log(calSumArr(10,30));


// Rest Parameter 
// function multiply(number1, number2, number3, number4){
//     return number1 * number2 * number3 * number4;
// }
// console.log(multiply(2,3,5,8))


function multiply(...args){
    console.log(args);
    let total = 1;
    for (let num of args) {
        total = num * total;
    }
    return total;
}
console.log(`Rest Parameter: ` + multiply(2,3,5,8,7,8,3,4,3 ))


const numbers = [1,2,3,4,5,6,2,4,6];

console.log(numbers.indexOf(199));


// Find Elements (Reference Type)

const doctors = [
    {name: 'Kazi', age: 20},
    {name: 'Jack', age: 30},
    {name: 'Ariyan', age: 40}
]
// return only 1 record 
const result = doctors.find((doctor) => {
    return doctor.age > 30;
});

console.log(result);


// Spread Operator 
const numbersOperator = [1,2,3,4,5,6,7,8,9];
console.log(...numbersOperator);

const copiedNumbersOperator = [...numbersOperator];

console.log(copiedNumbersOperator);

const num1 = [1,2,3];
const num2 = [4,5,6];

const finalNum = [...num1, ...num2];
console.log(finalNum);


// ES6 Features Array Method: Reduce

let numberReduces = [10,20,30,40];

const reduceSum = numberReduces.reduce(function(sum, num) {
    return sum+num;
},0)

console.log(reduceSum)


// ES6 Features: Array and Object Destructuring 

const userDestructure = {
    name: 'Ariyan',
    age: 40,
    address: {
        long: 984343.29,
        lat: 23232.50
    }
}


function greetings(user) {
    const {name, age, address} = user;
    const {long, lat} = address;

    console.log(`Hello ${name} and age ${age} from ${long}, ${lat} `);
}

greetings(userDestructure);


let [a,b,c,d] = [1,2,3,4];

console.log(`${a} ${b} ${c} ${d}`);

// ES6 Data Structure: Set

let set = new Set();
set.add(100)
set.add(200)
set.add(300)
set.add(100)

set.delete(200);
console.log(set.size)

for (const el of set) {
    console.log(el)
}


set.clear();
console.log(set);

// ES6 Data Structure: Map

let map = new Map();

map.set('Mango','Ame');
map.set('Banana','Kola');
map.set('Score',100);

for (const el of map) {
    console.log(el)    
}

console.log(map.has('Score'));

map.delete('Banana');
console.log(map);

console.log(map.values());
console.log(map.keys());

// ES6 Data Structure: Weak Set, Weak Map
// note: objects are only allowed 




// ES6 Module

console.log('Add Numbers: ' + addNumber(10,50));



// Pad Start, Pad End

let minute = '4';
let hour = '8';

console.log(minute.padStart(4,'0'))
console.log(hour.padEnd(5,'0'))


let trimName = '        Kelvin       ';
console.log(trimName.length);


console.log(trimName.trimStart());
console.log(trimName.trimEnd());


// Error handling with try catch and finally

function div(a,b) {
    if(b === 0) {
        throw new SyntaxError("Second Parameter can't be zero");
    }
    return a/b;
}


try {
    console.log(div(4,2));
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
} finally {
    console.log('working');
}


// Factory Functions 


function userDestruct(name, age) {
    const userObj = {
        name,
        age,
        walk: function() {
            console.log(`${name} started walking`);
        }
    }

    return userObj;
}


const user1 = userDestruct('Kelvin', 27);
const user2 = userDestruct('Jayson',26);

console.log(user1, user2)


function User(name, age){
    this.name = name;
    this.age = age;
    this.walk = function() {
        console.log(`${name} started walking`);
    }
}


const userStruct = new User('Kelvin',27);
console.log(userStruct)