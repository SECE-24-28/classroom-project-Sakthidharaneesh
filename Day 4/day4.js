// //Implicit Type Conversion
// console.log("1" + 2 + true + '@' + 98.7 + false + null);
// console.log("10" - 2);
// console.log("15" * "2");
// console.log("15" / 3);
// console.log(18 % "4");
// console.log(true - 1);

// //Explicit Type Conversion
// console.log(Number("123"));
// console.log(Number("abc"));
// console.log(String(123));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean("hi"));

// //Boolean
// if(0)
//     console.log("false");
// if("")
//     console.log("false");
// if(1)
//     console.log("true");
//     console.log("false");

// //Loose Equality
// console.log(5 == "5");
// console.log(0 == false);
// console.log(null == undefined);
// console.log("" == false);

// //Strict Equality
// console.log(5 === "5");
// console.log(0 === false);
// console.log(null === undefined);
// console.log("" === false);

// let a = 25; // can't redeclare with let keyword (i.e) let a = 20 after this line will shows error
// a = 30;
// console.log(a);

// var b = 25; // can redeclare / reassign with var keyword (i.e) var b = 20 after this line will not show any error
// var b = 20;
// console.log(b);

// const c = 25; // can't reassign with const keyword (i.e) c = 20 after this line will shows error
// console.log(c);

// //Hoisting
// console.log(x); // compiler will assume that previously var x is declared - undefined works only for var keyword (i.e,) if declared using let it will throw error
// var x = 10;

// // scope of variable
// function example(){
//     if(1)
//         var count = 10; 
//     console.log(count); // var is accessible to the entire function but if we use let (or) const keyword it will shows error as it is block scoped, only accessible within if block
// }
// example();

// //function
// greet(); // can be called before declaration due to hoisting
// function greet(){
//     console.log("Hello");
// }

// //Function Expression
// const functionExpr = function() { // function is declared to a variable
//     console.log("Hello");
// };
// functionExpr(); // function call should be after declaration cannot be hoisted

// const functionExpr = function greet() { // named function expression
//     console.log("Hello");
// };
// functionExpr(); // function call should be after declaration cannot be hoisted

// //Callback Function
// function process(callback) { //a function is passed as an argument to another function, here process is a higher order function(HOF)
//     console.log("Processing");
//     callback();
// }
// function done() {
//     console.log("Task Completed");
// }
// process(done);

//Arrow function
// const greet = (name) => {
//     return "Hello " + name;
// }
// console.log(greet("Alice"));

//const add = (a, b) => a + b;
//console.log(add(5, 3));
//const square = x => x * x;
//console.log(square(4));

// //Arrays
// const fruits = ['apple', 'banana'];
// const newLength = fruits.push('orange'); // adds orange at the end of fruits
// console.log(fruits);
// console.log(newLength);
// let l = fruits.length; // length of fruits
// console.log("Length of fruits: " + l);
// fruits.unshift("cherry"); // adds cherry at the beginning of fruits
// console.log(fruits);
// var popped = fruits.pop(); // removes element at the end of fruits
// console.log(fruits);
// console.log("Removed element: " + popped);
// var popped = fruits.shift(); // removes element at the beginning of fruits
// console.log(fruits);
// console.log("Removed element: " + popped);
// fruits.push('orange');
// fruits.push('grape');
// fruits.unshift("cherry");
// console.log(fruits);
// var lastTwo = fruits.slice(-2);
// console.log(lastTwo);
// console.log(fruits.slice(1, 3));
// console.log(fruits.slice(-3, -1));
// var removed = fruits.splice(1, 2) // remove 2 elements starting from index 1
// console.log(fruits);
// console.log(removed);
// fruits.splice(1, 0, "kiwi", "mango") // remove 0 elements starting from index 1 and replace kiwi, mango at index 1
// console.log(fruits);
// console.log(fruits.indexOf('kiwi')); // first occurence
// console.log(fruits.lastIndexOf('grape')); //last occurence
// console.log(fruits.includes('kiwi')); // true

// let numbers = [1, 4, 7, 12, 15];
// let found = numbers.find(num => num > 10); // return the first element which is greater than 10
// console.log(found);

// let nums = [3, 5, 7, 8, 10]
// let even = nums.find(num => num % 2 === 0);
// console.log(even); //8

// let names = ["Raj", "Abi", "Mahesh", "Kumar"]
// let greaterThanfour = names.find(n => n.length > 4);
// console.log(greaterThanfour);

// let nums = [1, 2, 3, 4];
// let doubled = nums.map(n => n*2);
// console.log(nums);
// console.log(doubled);

// let price = [200, 350]
// let plus100 = price.map(n => n+100)
// console.log(price)
// console.log(plus100)

// let persons = ['Kumar', "Vijay", "Sasi"]
// let mr = persons.map(n => 'Mr.' + n)
// console.log(mr);

// let numbers = [1, 4, 7, 12, 15];
// let found = numbers.filter(num => num > 10); // return all the elements which are greater than 10
// console.log(found);

// let marks = [50, 70, 40, 80, 90, 95]
// let gt80 = marks.filter(n => n > 80);
// console.log(gt80);

// //Object
// let person = {
//     "id": 1,
//     "name": "Alice",
//     "email": "alice@gmail.com",
//     "age": 18
// };
// console.log("ID: " + person.id);
// console.log("Name: " + person.name);
// console.log("Email: " + person.email);
// console.log("Age: " + person["age"]);

// //Array of Objects
// let person = [
//     {"id": 1, "name": "Alice", "age": 18, "grade" : "A"},
//     {"id": 2, "name": "Bob", "age": 18, "grade": "B"},
//     {"id": 3, "name": "Charlie", "age": 18, "grade": "C"}
// ];
// console.log(person);
// let names = person.map(n => n.name);
// console.log(names);

// let students = [
//     { "name" : "Alice", "marks" : 45},
//     { "name" : "Bob" , "marks" : 80},
//     { "name" : "Charlie" , "marks" : 80}
// ];
// let fm = students.filter(m => m.marks > 50).map(m => m.name);
// console.log(fm);

// //Loop
// let person = {
//     "id": 1,
//     "name": "Alice",
//     "email": "alice@gmail.com",
//     "age": 18
// };
// for(let key in person)  //for in loop
//     console.log(key, " : ", person[key]);

// let fruits = [ 'cherry', 'apple', 'banana', 'orange', 'grape' ]
// for(let f of fruits) //for of loop
//     console.log(f);

let fruits = [ 'cherry', 'apple', 'banana', 'orange', 'grape' ]
fruits.forEach(n => {
    console.log("Hello " + n);
});