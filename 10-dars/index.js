// let id =  Symbol("id");

// console.log(id);
// console.log(id === Symbol("id"))

// console.log(typeof id.description);

// let user = prompt("User", Symbol("id")) // type

// CONSTRUCTOR

// let s = "";

// let b = String();

// console.log(s === b);

// let a = {};

// let b = Object();


// let obj = {};

// alert(obj)

// console.log(obj[key]); // Cannot acces obj before init 


// let obj = {
//     "name": "key",
// }

// let key = "name";

// console.log(obj[key]); // key


// console.log(obj2[key2]); // undefined


// var obj2 = {
//     "name": "key",
// }

// let key2 = "name";

// console.log(obj2[key2]); // key


// console.log(!undefined); // 1
// console.log(!true); // 0
// console.log(!false); // 
// console.log(!"false");
// console.log(!null);

// console.log(!(!(!null)));


// console.log(undefined & null); // undefined // bitwise and
// console.log(undefined && null); // undefined // and
// console.log(!(null ?? undefined)); // undefined // nullish

// console.log(!undefined);
// arrowFunc("s")

// var arrowFunc = (a) =>  console.log(a);

// const


// let obj = {
//     for: for,
//     return,
//     switch,
// }




// console.log(obj.for + obj.return + obj.switch); //


// let ["2"] = "2"
// let s["2"] = "2"
// let s1["2"] = "2"
// let -1["2"] = "2"

// var obj = 2;
// var obj = "2";

// obj = "s";

// console.log(obj);

// console.log(fname); /// undefined


// let obj = {
    
//     [2 + 2]: 4,
//     2: "Bye",
//     "2": "Hello",


// }


// function getElement() {

//     console.log(obj["2"]); // Bye
//     console.log(obj["2" + "" + ("2")]); // Hello  Hello // undefined
//     console.log(obj[Number('2' + "2")]); // 22 // undefined
// }



// getElement()

// console.log(Number('2' + "2")); // 22


// console.log("2" + "" + ("2"));

// GET
// SET
let obj = {
    name: "John"
}

// let obj2 = {
//     name: "John"
// }


// let key =  Symbol("id")
// let key2 =  Symbol("id")


// obj[key] = "Super";
// obj[key2] = "a";

// obj.key = "O"

// console.log(obj.key); //0
// console.log(obj[key]); // super

// console.log(obj[key.description] === obj[key2.description]); // true
// console.log(obj[key] === obj[key2]); // 
// console.log(obj[key] == obj[key2]); // true


// console.log(obj === obj2); //false


// let obj3 = {
//     Ann: 200,

//     John:300
// }

// alert(obj3.Ann + obj3.John) // 500
// alert(typeof (obj3.Ann + obj3.John))


// let obj4 = {
//     name:200,
//     fname:400,
// }

// // DESTRUCTURE

// let {name,fname } = obj4

// console.log(name + fname);

