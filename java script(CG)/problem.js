//*****************************OBJECTS QUESTIONS**************************************************************//

//let new_array = {name:"john",age:25, city:"new york" }
//let {name,age,city} ={name:"john",age:25, city:"new york" }
//console.log(name,age,city)
////by self (10 min)

// //2nd problem
// function createperson(name,age,city){
//     return{
//         name:name,
//         age:age,
//         city:city
//     }}
// const person= createperson("john",25,"new york")
// console.log(person)
// ////chatgpt (10 min)

///3rd problem

// function createcar(brand, model, year){
//     return{
//         brand:brand,
//         model:model,
//         year:year
//     }}
// const car = createcar("toyota","corolla",2020) 
// console.log(car)
////by self (10min)

///4th problem
// let person={
//     user_name:"john doe",
//     password:12345
// }  
// delete person.password
// console.log(person)
/////took help (15 min)

///5th problem
// let person = { name: "alice", age: 30 };
// console.log(Object.keys(person)); 

// const hasProperty = (obj, target) => {
//     return Object.keys(obj).includes(target);
// }

// console.log(hasProperty(person, "name")); 
/////chat gpt (15 min)

// ///6th problem

// const obj2 = { b: 3, c: 4 };
// const obj1 = { a: 1, b: 2 };

// function alphabet(obj1,obj2){
//     return{ ...obj1, ...obj2};
// }

// console.log(alphabet(obj1,obj2));
//////(method 2)
// function mergeObjects(obj1, obj2) {
//     return { ...obj1, ...obj2 };
// }

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };

// console.log(mergeObjects(obj1, obj2));
//chatgpt (15 min)

///7th problem


// function cloneObject(obj) {
//     return JSON.parse(JSON.stringify(obj));
// }

// const original = { name: "alice", details: { age: 30, city: "NYC" } };
// const clone = cloneObject(original);
// clone.details.city = "LA";

// console.log(original.details.city); // Output: NYC
// console.log(clone.details.city);   // Output: LA
////chatgpt  (10 min)

///8th problem

// function person(name,age,city){
//     return{
//         name:name,
//         age:age,
//         city:city
//     }}
// const user= person("john",30,"new york")
// console.log(user)
///////self (5 min )

///9th problem

///***********************************BEGINNER FRIENDLY QUSTIONS************************************************************/////
 
//(1)      console.log("hell world")

// //// (2)    function addnum(a,b){
//     console.log(a+b)
// }
// addnum(3,5);

////(3)
//  function findLargest(a, b, c) {
//     console.log(Math.max(a, b, c));
// }

// findLargest(2, 8, 5); 

///(4)
//function isEven(num) {
//     console.log(num % 2 === 0);
// }

// isEven(5); 
 
////(5)
// function factorial(num) {
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(5)); 

////(6)
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString('hello')); 
////(7)

// function isPalindrome(str) {
//     const reversedStr = str.split('').reverse().join('');
//     return str === reversedStr;
// }

// console.log(isPalindrome('madam')); // Output: true
// console.log(isPalindrome('non')); // Output: false

// ///(8)
// function findMin(arr) {
//     return Math.min(...arr);
// }

// console.log(findMin([3, 1, 4, 0,-0.7,1, 5])); 

// ///(9)
// function sortArray(arr) {
//     return arr.sort((a, b) => a - b);
// }
// // Test the function
// console.log(sortArray([3, 1, 4, 1, 5])); // Expected Output: [1, 1, 3, 4, 5]

/// second method for (9th)
// let numbers=[3,1,4,1,5]

//   numbers.sort()

//   console.log(numbers)

///(10)
// function containsSubstring(str, substring) {
//     return str.includes(substring);
// }

// // Test the function
// console.log(containsSubstring('hello world', 'world')); // Expected Output: true

// ///(11)
// function sumArray(arr) {
//     return arr.reduce((sum, num) => sum + num, 0);
// }

// // Test the function
// console.log(sumArray([1, 2, 3, 4, 5])); // Expected Output: 15
// // ////(12)
// function fibonacci(n) {
//     const sequence = [0, 1];
//     for (let i = 2; i < n; i++) {
//         sequence.push(sequence[i - 1] + sequence[i - 2]);
//     }
//     return sequence.slice(0, n);
// }
// console.log(fibonacci(9)); 


////2nd METHOD+

// function fibonaci(n){
//     n1=0;
//     n2=1;
// console.log(n1)
// console.log(n2)
// for(i=1; i<=n; i++){
// n3=n1+n2
// console.log(n3)
// n1=n2
// n2=n3
// }
// }
// fibonaci(7)

///(13)
// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num === 2) return true;
//     if (num % 2 === 0) return false;

//     for (let i = 3; i <= Math.sqrt(num); i += 2) {
//         if (num % i === 0) return false;
//     }

//     return true;
// }

// // Test the function
// console.log(isPrime(7)); // Expected Output: true

///(14)
// function countVowels(str) {
//     let count = 0;
//     const vowels = "aeiouAEIOU";

//     for (let char of str) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }

//     return count;
// }

// // Test the function
// console.log(countVowels('hello')); // Expected Output: 2

///(15)























