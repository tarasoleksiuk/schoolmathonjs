console.clear();
console.log('\x1Bc'); // Очищення консолі

//Reference vs Value type

//Primitive type

// null
// boolean
// undefined
// string
// number
// Big Int (ES6)

// typeof

let exNull = null; 
//console.log('~ exNull', typeof exNull); //object *

let exBoolean = true;
//console.log('~ exBoolean',typeof exBoolean); //boolean

let exUndefined; 
//console.log('~ exUndefined',typeof exUndefined); //undefined

let exString = 'Hi';
//console.log('~ exString',typeof exString); // String

let exNumber = 23;
//console.log('~ exNumber',typeof exNumber); //number


//Reference type
//Objects
//Arrays

let arrEx = [1, 2, 3]; 
//console.log(arrEx[2]);

let objEx = {
    name: 'Js_ES6',
    year: 2015
}


//console.log(typeof arrEx);
//console.log(typeof objEx);

//JSON.stringify()

JSON.stringify(objEx);
//console.log('~ JSON.stringify(objEx)', JSON.stringify(objEx));

JSON.stringify(arrEx);
//console.log('~ JSON.stringify(arrEx)', JSON.stringify(arrEx));



//Copy of primiteves

let aEx = 11;

let bEx = aEx; //Copy of aEx

bEx = bEx + 1;

//console.log('~ aEx', aEx);
//console.log('~ bEx', bEx);


//Object

// let person1 = {
//     name:'Tarik',
//     years: 1997
// }

//let person2 = person1; //Reference

//person2.name = 'Tom';

//console.log('~ person1', person1);
//console.log('~ person2', person2);

//Copy of object

// let person2 = Object.assign({},person1);
// person2.name = 'Tom';

//console.log('~ person1', person1);
//console.log('~ person2', person2);

//2 diffrent objects

// let car1 = {
//     name: 'Ford',
//     year: 2000
// };

// let car2 = {
//     name: 'Ford',
//     year: 2000
// }

// console.log(car1 == car2);

//About dogs
// let person1 = {
//     name:'Tarik',
//     years: 1997,
//     fingersArr: [1,2,3,4,5]
// }

// let person2 = Object.assign({},person1);
// person2.name = 'Tom';

// person2.fingersArr.push(6);

// console.log('~ person1', person1);
// console.log('~ person2', person2);

//About arrays

let arrFingers1 = [1,2,3,4,5];
arrFingers2 = arrFingers1;
arrFingers2.push(6);

let copyFingers = arrFingers1.slice();
copyFingers.push(7);

console.log('~ arrFingers1', arrFingers1);
console.log('~ arrFingers2', arrFingers2);
console.log('~ copyFingers', copyFingers);
