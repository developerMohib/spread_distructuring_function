
// object destructuring 

const person = {
    name : 'Ananta Jalil',
    age : 35,
    proffession : 'Actor',
    phone : '01701470147',
    balance : 23232 
}

// property acces 
const pName = person.name;
const age = person.age;
const proffession = person.proffession;


document.write ( `<br> Person Name ${pName}, his age is ${age} and his proffession ${proffession} <br>` );

const {name, phone, balance} = person;

console.log(' Name :', name , 'phone :', phone, 'Proffession :', proffession );

// swap data hoilo kmne hehehhehe


const myNumbers = [ 33,22,55,66,44,11 ];

let firstNumber = myNumbers[0];
console.log(firstNumber);

myNumbers[1] = myNumbers[0];

myNumbers[1] = firstNumber;

console.log(myNumbers);


let my_Array = [12, -2, 55, 68, 80];

const temp = my_Array[0];
my_Array[0] = my_Array[1];
myArray[1] = temp;

console.log(my_Array); 