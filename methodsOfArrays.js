console.clear();
console.log('\x1Bc'); // Очищення консолі
//Методи - це функції об'єктів. Наприклад є об'єкт Arrays, а Arrays.push() - його метод

//join()
/*
Adds all the elements of an array into a string, 
separated by the specified separator string.

@param separator — A string used to separate one element 
of the array from the next in the resulting string. If omitted, 
the array elements are separated with a comma.
*/

//let ex = [1, 2, 3, 4, 5];

// let exJoin = ex.join() // without parametr
// console.log('~ exJoin', exJoin); // -> string separated with comma -> '1,2,3,4,5'
// console.log(ex); // the same

// let exJoinSep = ex.join('|') // with parametr
// console.log('~ exJoinSep', exJoinSep);
// console.log(ex); // the same

//If an element is undefined, null or an empty array [], it is converted to an empty string.
// let exEmptyArr = [undefined];
// let exEmptyArrJoin = exEmptyArr.join('/');
// console.log('~ exEmptyArrJoin', exEmptyArrJoin);

//concat()
/*
Additional arrays and/or items to add to the end of the array.

Combines two or more arrays. 
This method returns a new array without modifying any existing arrays.
*/

//let ex = ['a', 'b', 'c', 'd', 'e'];
//Copy // If all valueN parameters are omitted, concat returns a shallow copy 
//of the existing array on which it is called.
// let exConcat = ex.concat(); // without parametr 
// console.log('~ ex', ex);
// console.log('~ exConcat', exConcat);

// let ex2 = ['f','g','h'];
// let ex3 = ['i','j','k'];


// let exConcat1Parametr = ex.concat(ex2,ex3);
// console.log('~ exConcat1Parametr', exConcat1Parametr);
// console.log('~ ex', ex);
//Concatenating values to an array

// let f = 'f';
// let g = 'g';
// let h = 8;
// let i = 9;
// let j = null;
// k = true;

// let exConcatValues = ex.concat(f,g,h,i,j,k);
// console.log('~ exConcatValues', exConcatValues);

// //Concatenating nested arrays
// let row1 = ['a'];
// let row2 = ['b',['c','d']];

// let concatNested = row1.concat(row2); //-> [a,b,[c,d]]
// console.log('~ concatNested', concatNested);


//reverse()
//Reverses the elements in an array in place. 
//This method mutates the array and returns a reference to the same array.
// let ex = [1,2,3,4,5];
// console.log('~ ex', ex);

// let exReverse = ex.reverse()
// console.log('~ exReverse', exReverse);
// console.log('~ ex', ex);

//slice()
// let exArr = ['Tarik','Liubov','Maria','Andriy','Oksana'];
//shallow copy
// let exShallowCopy = exArr.slice();
// console.log('~ exArr', exArr);
// console.log('~ exShallowCopy', exShallowCopy);

//One parametr
// let exStartSlice = exArr.slice(2);
// console.log('~ exArr', exArr); // The original array will not be modified.
// console.log('~ exStartSlice', exStartSlice);

//Two parametrs
// let exTwoParam = exArr.slice(0,1);
// console.log('~ exTwoParam', exTwoParam);

//negative index can be used
// let exNeg = exArr.slice(2,-1);
// //the same
// let exNegTheSame = exArr.slice(2,4);
// console.log('~ exNegTheSame', exNegTheSame);
// console.log('~ exNeg', exNeg);


//[ 1,2,3 .... 101,102,103,104]

// let bigArr = ['a','b','c','d','e','f','g','h','i','j',];

// let hiOfBigArr = bigArr.slice(-3,-1);
// console.log('~ hiOfBigArr', hiOfBigArr);

// let exArr = ['Tarik','Liubov','Maria','Andriy','Oksana'];

// let copy = exArr.slice(1,100);
// console.log('~ copy', copy);

//splice()
//let cars = ['Ford','Mazda','BMW','Opel','KIA'];


//splice(start)
//Splice changes our array

 // Всі елементи будуть видалені починаючи з індекса () включно 

 //One parameter
// let deletedelements = cars.splice(2);
// console.log('~ deletedelements', deletedelements);
// console.log('~ cars', cars);

//Two parameters
// let deleted = cars.splice(1,0); // delete 0 parameters
// console.log('~ cars', cars);
// console.log('~ deleted', deleted);


// let cars = ['Ford','Mazda','BMW','Opel','KIA'];
// let deleted = cars.splice(2,2); // delete 2 parameters
// console.log('~ cars', cars);
// console.log('~ deleted', deleted);

// Three parameters
// let cars = ['Ford','Mazda','BMW','Opel','KIA'];
// let deleted = cars.splice(0,2,'Reno','Toyota','MAZ'); // add some item
// console.log('~ cars', cars);
// console.log('~ deleted', deleted);


//Negative index can be used
// let cars = ['Ford','Mazda','BMW','Opel','KIA']; // [Ford[0] .... KIA [100] ]

// // let deleted = cars.splice(-3,0,'MAZ','Cherry','Москвич'); 

// // console.log('~ cars', cars);
// // console.log('~ deleted', deleted);

// let c = cars.splice();
// console.log('~ c', c);
// console.log('~ cars', cars);


//sort()
// let exStr = ['c','b','e','f','g','h'];
// let exNum = [3,5,1,2,6,8,9,12,15];

//Sort() changes the original array
// exStr.sort();
// exNum.sort();
// console.log('~ exStr', exStr);
// console.log('~ exNum', exNum);

//The sorted array. Note that the array is sorted in place, and no copy is made.
// let exStr2 = exStr.sort();
// exStr2.push('Banana');
// console.log('~ exStr', exStr);
// console.log('~ exStr2', exStr2);

// //Sort number
// console.log(exNum);
// exNum.sort(function (a,b){
// if(a>b) return 0.00000001;
// if (a<b) return -0.000999999999;
// if (a==b) return 0;
// });

// // exNum.sort( (a,b) => { return a - b} );

// console.log(exNum);




//push()
// let cars = ['Ford','BMW','Opel'];
// let pushReturn = cars.push('Tesla','Audi');
// console.log('~ pushReturn', pushReturn);
// console.log('~ cars', cars);

// //empty push
// let emptyPush = cars.push();
// console.log('~ emptyPush', emptyPush);

// //spead syntax
// const carUA = ['Жигуль','Москвич'];
// const carGermany = ['Opel','Mersedes'];

// // carUA.push(carGermany);
// // console.log('~ carUA', carUA);

// /*
// const carUA = ['Жигуль','Москвич',['Opel','Mersedes']];
// */
// carUA.push(...carGermany);
// console.log('~ carUA', carUA);



//pop()

// let friends = [];

// let removedFriend = friends.pop();

// console.log('~ friends', friends);
// console.log('~ removedFriend', removedFriend);



//shift()
// const numbers = [1,2,3,4,5];

// let removedNumber = numbers.shift();

// console.log('~ numbers', numbers);
// console.log('~ removedNumber', removedNumber);

//unshift()
// const numbers = [1,2,3,4,5];

// let lengthOfNumbers = numbers.unshift(10,20,30);
// console.log('~ numbers', numbers);
// console.log('~ lengthOfNumbers', lengthOfNumbers);



//indexOf
// const animals = ['dog','cat','elephant','mouse'];

// let findIndexofCat = animals.indexOf('elephant',-3);
// console.log('~ findIndexofCat', findIndexofCat);

//includes

// const animals = ['mouse','dog','cat','elephant'];
//  let isInclude = animals.includes('mouse',2);
//  console.log('~ isInclude', isInclude);


//  //isArray
// const arr = [1,2,3,4,5];
// const obj = {name:'Tarik', age: 17};

// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));

// //typeof
// //console.log(typeof obj );


//forEach


//Map


//filter

//find

//some

//every

//reduce



