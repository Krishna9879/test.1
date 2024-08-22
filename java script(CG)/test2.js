// console.log("hello world")
 let obj={name:"alice",age:30};
 console.log(Object.keys(obj))
 const hasproperty =(obj, target)=>{
   return Objects.keys(obj).includes(target);
}
 console.log(hasproperty(obj,"name"));
// let person = { name: "alice", age: 30 };
// console.log(Object.keys(person)); // Output: ["name", "age"]

// const hasProperty = (obj, target) => {
//     return Object.keys(obj).includes(target);
// }

// console.log(hasProperty(person, "name")); // Expected Output: true
