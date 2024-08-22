// to swap 2 varibles
// (1)
// var a=1;
// var b=2;
// var c=8;
// [a,b]=[b,a];
// var temp;
// temp=a;
// a=b;
// b=temp;{
// a=a+b;
// b=a-b;
// a=a-b;
// [a,b,c]=[c,a,b]
// {console.log("a,b,c",a,b,c)}
//     [a,b]=[b,a]
// ////how to summ three variables without using *
// /var number= 123;
// var sum=0;
// console.log(123%10)
// while(number>0){
//    sum=sum+number%10;
//    number=(number-(number%10))/10

// }
// console.log(sum)
//////////second method
// var number=123;

// var sum=0;
// while (number>0){var rem= number%10;
//  sum =sum+rem;
//  number=(number-rem)/10
// }
// console.log(sum)
///////how to find armstrong number
// var number=154;

// var sum=0;
// var pow= number.toString().length;

// while (number>0){
//     var rem= number%10;
//  sum =sum+(rem**pow)
//  number=(number-rem)/10
// }
// console.log(sum)
/////(12 aug )revision

// for (i=1; i<=5; i++){
// for (j=1; j<=5; j++){
//     console.log("i, j", i,j)
// }
// }
// to write # in lines

// for(var i=1; i<=5; i++){
//     let string= ''
// for (var j=1; j<=i; j++){
//     string=string+"#";

// }
// console.log(string)}
//////// (13 aug)
///// abcd loop
//Code:
// for (var i=0; i<=26; i++){
//     console.log( String.fromCharCode(65+i))
// }
// (new)
// for (let i=0; i<=3;i++){
//     let string= '';
//     for(let j = i; j >=1; j--){
//         string += String.fromCharCode(64+j);
// }
// console.log(string);
//   }
// for(let i=0;i<=3;i++){
// let string="jkwexhijw";
// for(let j=0;j<=i; j++){
//     string+=String.fromCharCode(65+j);
// }
// console.log(string)
// }
////////(new)
// for(let i=1; i<=3; i++){
//   let string ='';
//  for(let j=3; j>=4-i; j--){
//  string+= String.fromCharCode(64+j);
// }
// console.log(string)
// }
////////(arrow functions)
// var my_name="krishna"
// var age="19"
// console.log(`my name is ${my_name} and my age is ${age}`);
// console.log("my name is", my_name, "and my age is",age);
// console.log("my name is " + my_name + " and my age is "+ age );
/////(new )
// let new_array =[1,2,3,4,5,6]
// let [one,two,three] = [1,2,3,4,5,6]
// console.log(two)


// const lang=["java","html","python","psp"]
// const [firststlang,secondlang,thirdlang,forthlang] =lang
// console.log(firststlang)
// console.log(secondlang)
// console.log(thirdlang)
// console.log(forthlang)
////(by object)

// let new_array = {name:"krishna", age:19}
// let{age, name} ={name:"krishna",age:19}
// console.log(name)
// console.log(age)
////(set)

// const uniqueNumbers = new Set();
// uniqueNumbers.add(1);
// uniqueNumbers.add({key:"diff_value"});
// uniqueNumbers.add(function myname(){});
// uniqueNumbers.add("1");
// uniqueNumbers.add(true);
// uniqueNumbers.add(1);
// uniqueNumbers.add(1);
// console.log("set : Unique Numbers -", Array.from(uniqueNumbers).join(","));
