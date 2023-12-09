// Decloration Function

// let fName = "John";

// function getInfo(name) {
//     let fName = "Ann"
//     console.log(fName);
//     console.log(name);
// }
// getInfo("Otto")


// function getInfo(a,b = {}) {
//     console.log(a,b);
// }


// getInfo(1)





// function getNothing() {
//     return;
// }
// console.log(typeof getNothing());


// let arr = ["a", 1, function name(){}, {}, [123, [1, [2,4]]]];
// let result = arr;
// console.log(result);

// const arr = [1,2,3];

// console.log(arr = {});
// console.log(arr[0] = 2);
// console.log(arr);


// let obj =  {
//     name: "John"
// }

// console.log(obj.name);

// let arr = [1,2, {name:"John"}]

// console.log(arr[2].name);

// let arr = [ 'Apple', { name: 'John' }, true, function() { console.log('hello'); } ];

// console.log(arr[3]());

// let arrr = [s => "name"];
// [] => {}
// () => {}

// console.log(arrr);

// let ss = [1]

// function getInfo(let arr = []) {
//     return [1]
// }

// console.log(ss);


// let i = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };
  
//   for (let key in i) {
//     // keys
//     console.log( key );  // name, age, isAdmin
    
//     console.log( user[key] ); // John, 30, true
//   }
  

let salaries = {
    John: 100,
    Ann:200,
}

let sum = 0;


for(let money in salaries) {
    sum += salaries[money];
}


console.log(sum);