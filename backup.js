var a = 15; // tip peremennoy number

var helloWorld = "hi";  //tip peremennoy string

var isSum = 5 > 8; // tip boolean

var myUndefined; //tip myundefined, ne obyavlennay peremennayA

var myNull = document.querySelector("body2"); // naydi chto-nibud na stranice, esli ne nashel to prisvoit "null"

// Object

var cities = ["Dnipro","Kiev", "Odessa"]; // massiv array, otschitivaem 0, 1, 2...

cities.push('Lviv'); // dobavlayet Lviv v massiv cities

var user = {
    age:25, 
    email: "vasa@gmail.com",
    name: "Vasa"
};

user.index = 49000; // ili user["index"] = 49000 i to i to dobavlaet ili perezapisivaet index:49000 v obekt

var users = [
    { name: "Vasa", age: 25 },
    { name: "Vasa", age: 25 },
    { name: "Vasa", age: 25 },

] // eto massiv obyektov


console.log(user);

var answer = ["vasa, peta"];

console.log(answer);

alert(answer);

if (answer) {
alert ("Ti Ded " + answer);
}else{alert("maloy")};

var a = 1;
var b = 2;
var c = 3;

var result = a && b && c; // nahodit perviy FALSE i ostanavlivaetsa

console.log(result);

var a = 1;
var b = 2;
var c = 3;

var result = a || b || c; // nahodit perviy TRUE i ostanavlivaetsa

console.log(result);


//calculator

var a = +prompt('enter number a');

var o =prompt('enter operator');

var b = +prompt('enter number b');

var result = 0;

if ( o === '+') {
    result = a + b
}
if ( o === '-') {
    result = a - b
}
if ( o === '*') {
    result = a * b
}
if ( o === '/') {
    result = a / b
}


var a = +prompt('enter number a');

var o =prompt('enter operator');

var b = +prompt('enter number b');

var result = 0;

// if ( o === '+') {
//     result = a + b
// }
// if ( o === '-') {
//     result = a - b
// }
// if ( o === '*') {
//     result = a * b
// }
// if ( o === '/') {
//     result = a / b
// }

switch(o) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '/': result = a / b; break;
    case '*': result = a * b; break;
}


alert('your answer ' + result);

--------------------------------------------------------------------

var a = 10;

//a = a + 5;
//a += 5; //analogichno a = a + 5;
// a++; //plusuet 1 
//var b = ++a; // b ravno "a" uvelichennaya na 1
//var b = a++; // b ravno predidushemu znacheniyu "a" , a "a" edtkbxbkjcm yf 1

-----------------------------------------------------------------
var names = ['vasa', 'pitya', 'anya', 'kolya', 'zalupa'];

//for(var i = 0; i < names.length; i++) {
//console.log(names[i])
//}


//for(var i in names){
//    console.log(names[i]);
//}

//for(var i of names) {
//    console.log(b);
//}

var container = document.querySelector('#block');

console.log(container);

var res = '';

 for(var name of names) {
     res += `<li>${name}</li>`;
 }

 container.innerHTML = res;

 ---------------------------------------------------------------


 var names = ['vasa', 'pitya', 'anya', 'kolya', 'zalupa'];
var cities = ['dnepr', 'odessa', 'kiev', 'lugansk'];


function renderList(data, containerId) {
    var container = document.querySelector(containerId);

    var res = '';

    for(var item of data) {
     res += `<li>${item}</li>`;
    }

    container.innerHTML = res;
}

renderList(cities, '#cities');
renderList(names, '#names');

-------------------------------------------------------------------------

function sum(a, b, r) {
    var res = a+b+r;

    return res; // vernutj resultat v ovet na vizov etoy funkcii
}


var result = sum(5, 8, 9,); // peredaem  znacheniya v funkciyu sum i srazu poluchaem prisvoeniy resultat

var result2 = sum(6, 7, 8);

console.log(result);

---------------------------------------------------------------------


