//const cars=["volvo","mersce","bmw","audi"]
//console.log(cars)
//var a=[1,2,3,4,5,6,7,8]
//for(a=0;a<=8; a=i-2){
  //  console.log()
//}
// function reverseString(str) {
//     let reversedStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversedStr += str[i];
//     }
//     return reversedStr;   
  
//   }
  
//   const inputString = "this is a test";
//   const outputString = reverseString(inputString);
//   console.log(outputString); 
// function hasRepeatedNumber(arr) {
//     const numCounts = {}; // Object to store number counts
  
//     for (const num of arr) {
//       numCounts[num] = (numCounts[num] || 0) + 1; // Increment count or initialize to 1
//     }
  
//     for (const count of Object.values(numCounts)) {
//       if (count > 1) {
//         return [true, count]; // Return true and the count of repeated numbers
//       }
//     }
  
//     return [false, 0]; // No repeated numbers
//   }
  
//   // Test cases
//   const testCases = [
//     [1, 2, 3, 4, 2],
//     [1, 2, 3, 4, 5],
//     [1, 1, 1, 1, 1]
//   ];
  
//   for (const testCase of testCases) {
//     const result = hasRepeatedNumber(testCase);
//     console.log(testCase, result);
//   }
  

//   
for(var  i=1; i<=5; i++){
  let string= ''
for (var j=1; j<=i; j++){
  string=string+j;
 } console.log(string)
}  
