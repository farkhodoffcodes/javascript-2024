// let obj = {};
// let obj1 = new Object();


// PRIMITIVE - PATH BY VALUE

// let a = '2';
// let b = "2"

// console.log(a === b); // true


// REFERENCE - PATH BY KEY/REFERENCE
// console.log(obj === obj1); // true

// let obj = {
//     s4: "Hello world",
//     "4": "Bye world",
//     name: "John"
// }

// console.log(obj[4]); 
// console.log(obj["4"]);
// console.log(obj["2 + 2"]);
// console.log(obj["2" + "2"]);
// console.log(obj[`${2} + ${2}`]);
// console.log(obj[`${2 + 2}`]);

// console.log(obj.s4);

// let a = "2";
// let b = 2;

// console.log(a + b); 

// BITWISE OPERATORS

// BITWISE &
// BITWISE |

// console.log(true & false);
// console.log(true | false);
// console.log(null | undefined);
// console.log("null" & "hey");
// console.log("null" | "hey");

// let a = "s"

// console.log(+a);

// FALSY = 0, null, undefined, "", false
// TRUTHY = Infinity, -Infinity, 1, true, " "

// let obj = {
//     name: "Bob",
// }

// console.log(obj.name = "John");

// const obj2 = {
//     name: "Smith",
// }


// console.log(obj2 = []);

// "use strict"
// console.log(a);

// a = "Home"

// TYPE CONVERSION

// let a = "2";

// CONSTRUCTOR = Number()
// CONSTRUCTOR = String()

// let a = 2;

// console.log(Null(a))
// console.log(Undefined(a))

// let toBoolean = "true";


// console.log(typeof !!toBoolean);


// console.log(!true); // false
// console.log(!1); // 0
// console.log(!"1"); // // false
// console.log(!""); // true
// console.log(!null); // true
// console.log(!undefined); // true


// console.log(!!true); 
// console.log(!!1);  
// console.log(!!"1"); 
// console.log(!!""); 
// console.log(!!null); 
// console.log(!!undefined); 

// BITWISE HOR
// console.log(~-2);
// console.log(~~2.7);


// const decloration = function(a) {
//     return a;
// }

// console.log(decloration("2"));


// SYMBOL

// let sym = Symbol.keyFor("1")
// let sym2 = Symbol("id")

// console.log(sym.keyfro === sym2.description);

// THREAD
// console.log('Hello'); console.log('World');

// function f() {

// }

// console.log(f());

// for(; ;) {
//     console.log(i);
// }

// console.log(typeof (null == "object") );

// console.log(typof (function(){} == "function"))

// let elHeading = document.querySelector("ol li")
// let elHeading = document.querySelector("#class")

// let str = "Hello";
// console.log( str.toUpperCase() );

// ToLowerCase
// let str2 = "Hello";
// console.log( str.toLowerCase() );

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12, -6);

// console.log(part);


// let str = "Apple, Banana, Kiwi";
// let part = str.substring(7, 13);

// console.log(part);

// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");

// console.log(newText);

// let text = "Please Microsoft visit Microsoft!";
// let newText = text.replace(/MICROSOFT/i, "W3Schools");

// console.log(newText);




// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace(/Microsoft/g, "W3Schools");

// console.log(newText);

// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2);
// console.log(text3);
// let str = "Apple, Banana, Kiwi";
// let part = str.substr(7);

// let text1 = "      Hello World!      ";
// let text2 = text1.trim();

// console.log(text2);

let a = "1";

let b = 2;



// console.log(typeof a.toString());

console.log(typeof (a + b));