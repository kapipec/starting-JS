//Коммент однострочный 
/* Коммент от и до */

//alert("Hello, JavaScript!!!");

console.log ('Hi, JavaScript');

let x;
let a, b;
console.log(x);
x = 5;
console.log('x=', x);
console.log(x, a, b);
a = "world";
b = 0.77;
console.log(x, a, b);

let userName;
userName = "Shalom, menya zovut Vasiliy";
console.log(userName);

let userAge = 100;
console.log(userAge);

let name = 'Ivan', age;
console.log(name, age);

const COLOR_CAR = "My car is Yellow", FIRST_USER = "Vasiliy";
console.log(COLOR_CAR, FIRST_USER);

let a1, a2, result;
a1 = 100;
a2 = 200;
result = a1 + a2;
console.log(result);
result = a1 - a2;
console.log(result);
result = a1 * a2;
console.log(result);
result = a1 / a2;
console.log(result);

console.log(result2);
var result2 = 'some value';
console.log(result2);
console.log(x);
x = x + 1;
console.log(x);
x = x - 5;
console.log(x);
x = x / 2;
console.log(x);
x = x * 3;

//инкремент х = х + 1 это то же самое что х++
//декремент х = х - 1 это то же самое что х--

console.log(x);
x++;
console.log(x);

let valueKg, valueGr;
const DEFAULT_VALUE_KG = 1;
valueKg = prompt("Vvedite znachenie Killogram", DEFAULT_VALUE_KG);
valueGr = valueKg * 1000;
console.log("Rusult is - ", valueGr, "gramm")