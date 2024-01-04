// if(false) {
//     console.log(1);
// }else {
//     console.log(0);
// }

// if (true) console.log(1)
// else console.log(0);

// true ? console.log(1) : console.log(2)


// let n = 1;

// let n = prompt("Enter your nickname", "john")
// let result =  alert(`Power ${n} is not supported`)

// // if (n < 0) return result
// (n < 0) ?  result : console.log("something went wrong");



// function decloration(a,b) {
//     console.log(a,b);
// }

// decloration(
//     {a:2},[1,23],2
// ) //

// decloration(
//     [1,2],"home",{a:2}
// ) //

// let obj = {
//     4:"home",
//     "4":4,
// }

// console.log(obj[4]); // 4
// console.log(obj["4"]); // 4


// let body = document.querySelector("body")
// let body = document.body;

// let div = document.createElement("div");
// let div2 = document.createElement("div");

// let h1 = document.createElement("h1");

// h1.textContent = "Hello world"

// console.log(h1);
// document.createElement("img").classList.add("image");
// console.log(document.createElement("img").classList.add("image"));

// div.classList.add("wrapper");

// div.textContent = "<h1>Hello</h1>"
// div2.innerHTML = "<h1>Hello</h1>"

// div.insertAdjacentElement("beforebegin", h1)


// body.appendChild(div)
// body.appendChild(h1)



// let div = document.createElement("div");
// let body = document.body;

// function getAuto(color,brand,price,img) {
//     return `
//         <div class="wrapper">
//             <p>color: ${color}</p>
//             <h1>brand: ${brand}</h1>
//             <h2>price: ${price}</h2>
//             <img src=${img} alt="rasm"/>
//         </div>
//     `
// }

// let cars = [
//     {brand: 'Nexia', color: "olcha rang", price: 10000, img: "https://picsum.photos/150"},
//     {brand: 'Kamaz', color: "kulrang", price: 100000, img: "https://picsum.photos/150"},
//     {brand: 'Kamaz', color: "kulrang", price: 100000, img: "https://picsum.photos/150"},
//     {brand: 'Kamaz', color: "kulrang", price: 100000, img: "https://picsum.photos/150"},
//     {brand: 'Kamaz', color: "kulrang", price: 100000, img: "https://picsum.photos/150"},
// ]

// let allCars = cars.map(item => getAuto(item.color, item.brand, item.price, item.img))

// div.innerHTML = allCars;

// div.style.display = "flex"

// // console.log(div);

// body.appendChild(div)



// var name;
// var name;

// if(true) {

//     let name = "hello"
// }

// console.log(name);
// {
//     {
//         {
//             {
//                 let a = null;
//                 {
//                     {
//                         {
//                             a = undefined;
//                             {
//                                 {
                                    
//                                     {
//                                         console.log(a);
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

let a = "home";

// (function () {
//     console.log(a);
// }())

// !(function () {
//     console.log(a);
// }())



// +(function () {
//     console.log(a);
// }())

// -(function () {
//     console.log(a);
// }())


// *(function () {
//     console.log(a);
// }())


// function decloration(...a) {
//     console.log(a);
// }


// decloration(
//     {
//     a:2,
//     b:3,
//     c:4
// }, [ 1,2],2,3
// )

// let obj = {
//     a:100,
//     b:200,
// }

// let {price2} = obj.a;
// let {price} = obj.b;

// console.log(price + price2);


// let arr = [1,2,34,];

// 10

// let result = arr.reduce((a,b) => a + b);

// console.log(result);

// let sum = 0;


// for(let value of arr) {
//     sum = sum + value;
// }

// console.log(sum);


// let obj = {
//     name:2,
// }


// let obj2 = obj;

// console.log(obj2.name); // 2