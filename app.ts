// //chunk
// function chunkOperation(array, size=1){
//     let arrayChunks = [];
//     for(let i = 0; i < array.length; i += size){
//       let arrayChunk = array.slice(i, i+size);
//       arrayChunks.push(arrayChunk);
//     }
//     console.log("chunks output is "+arrayChunks);
//   }

// chunkOperation(['a', 'b', 'c', 'd'], 2);


// // sum

// function sumOperation(arr){
//     let sum = 0;
//     arr.forEach(element => {
//         sum+=element;
//     });
//     console.log("Sum is "+sum);
// }

// sumOperation([2,4,6,8]);

// //reduce 

// function reduceOperation(arrayInput,func,initial){
//     let result = initial;
//     if(Array.isArray(arrayInput)){
//       arrayInput.forEach(element => {
//         result = func(result, element);
//       });
//     } else {
//       for (const key in arrayInput) {
//         result = func(result, arrayInput[key], key);
//       }
//     }
//     return result;
//   }

// let res = reduceOperation([1,2],function(sum,n){
//     return sum+n;
// },0);
// console.log("Reduce result is "+res);

// //find

// let obj = [
//     { 'user': 'ravikiran', 'age': 36, 'active': true },
//     { 'user': 'Henry',   'age': 30, 'active': false },
//     { 'user': 'barney', 'age': 36, 'active': false },
//     { 'user': 'fred',   'age': 30, 'active': false },
//   ];

// function customFind(inputArray, obj){
//     let result: any;
//     inputArray.forEach((user, index, arr) => {
//         if(typeof obj === 'function'){
//           if(obj(user)){
//             result = user;
//             arr.length = index + 1;
//           }
//       } else if(Array.isArray(obj)){
//         let userKeys = Object.keys(user);
//         if(userKeys.indexOf(obj[0]) !== -1){
//           if(user[obj[0]] === obj[1]){
//             result = user;
//             arr.length = index + 1;
//           }
//         }
//       } else if(typeof obj === 'object'){
//         let userKeys = Object.keys(user);
//         let objKeys = Object.keys(obj);
//         let bool = true;
//         objKeys.forEach(objKey => {
//           if(userKeys.indexOf(objKey) !== -1){
//             bool = bool && (user[objKey] === obj[objKey]);
//           }
//         });
//         if(bool){
//           result = user;
//           arr.length = index + 1;
//         }
//       } else {
//         let userKeys = Object.keys(user);
//         if(userKeys.indexOf(obj) !== -1){
//           result = user;
//           arr.length = index + 1;
//         }
//       }
//     })
//     return result;
//   }
//   console.log(customFind(obj, function(o) { return !o.active; }));
  
// //filter

// let users_3 = [
//     { 'user': 'Mihir', 'age': 23, 'active': true },
//     { 'user': 'Rahul',   'age': 30, 'active': false },
//     { 'user': 'Ramesh', 'age': 36, 'active': false },
//     { 'user': 'Alfred',   'age': 30, 'active': false },
//   ];
//   function customFilter(inputArray, obj){
//     let result= [];
//     inputArray.forEach((user, index, arr) => {
//         if(typeof obj === 'function'){
//           if(obj(user)){
//             result.push(user);
//           }
//       } else if(Array.isArray(obj)){
//         let userKeys = Object.keys(user);
//         if(userKeys.indexOf(obj[0]) !== -1){
//           if(user[obj[0]] === obj[1]){
//             result.push(user);
//           }
//         }
//       } else if(typeof obj === 'object'){
//         let userKeys = Object.keys(user);
//         let objKeys = Object.keys(obj);
//         let bool = true;
//         objKeys.forEach(objKey => {
//           if(userKeys.indexOf(objKey) !== -1){
//             bool = bool && (user[objKey] === obj[objKey]);
//           }
//         });
//         if(bool){
//           result.push(user);
//         }
//       } else {
//         let userKeys = Object.keys(user);
//         if(userKeys.indexOf(obj) !== -1){
//           result.push(user);
//         }
//       }
//     })
//     return result;
//   }
  
//   console.log(customFilter(users_3, function(o) { return o.active; }));
