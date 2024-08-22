const person = {
    first_name:"krishna",
    last_name:"paridwal",
    age:"18",
    full_name :function(){return this.first_name + " " + this.last_name;}
}
console.log(person.first_name);
console.log(person.full_name());
function myfun(){
    let c=10;
    return c;


}
const pi = 22/7
console.log(myfun())
console.log(pi)