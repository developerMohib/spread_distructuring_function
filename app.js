console.log('Spreading Operator....');

// spread operator

const max = Math.max(4,2,5,7,11,21,22);
console.log('The max Number is : ', max);

const maxFromArray = [33, 22,44, 32, 34, 65];
const maxNum = Math.max(...maxFromArray);
// console.log( 'anything wrong i know - ', maxNum);
console.log( 'all right i know - ', maxNum);