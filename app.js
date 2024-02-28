console.log('Spreading Operator....');

// spread operator

const max = Math.max(4,2,5,7,11,21,22);
console.log('The max Number is : ', max);
document.write('The max Number is : ', max);

const maxFromArray = [33, 22,44, 32, 34, 65];
console.log(maxFromArray);
const maxNum = Math.max(...maxFromArray);
// console.log( 'anything wrong i know - ', maxNum);
console.log( 'all right i know - ', maxNum);
document.write( '<br> All right i know - ', maxNum);

// push in Array 

let myArray = [33, 22,44, 32, 34, 65];
let pushInArray = [];

for (const item of myArray) {
    // console.log( 'items ', item);
    if( item % 2 === 0 ){
        pushInArray.push(item);
    }
}

console.log(pushInArray, 'push in array ');

let myNewArray = [1,2, 3, ...myArray, 4,5,6];
console.log(myNewArray, 'my New Array');