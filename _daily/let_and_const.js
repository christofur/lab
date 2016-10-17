"use strict";

/*
  Old school var
 */
if(false){
  var x = "hello";
}
console.log(x); //no error, just outputs "undefined". The cause of many, many bugs

/*
  Let - the difference - the runtime has more information and can spot
  that the referenced variable was defined in another block.
 */
if(false){
  let y = "hello";
}
console.log(y); //Actually throws a proper error: ReferenceError: y is not defined

/*
  Const - different to other languages! Means that the binding reference will stay
  constant - not that the value inside will remain constant.
 */
const name = "Chris";
name = "Perks"; //TypeError: Assignment to constant variable.

const person = {};
person.name = "Perks"; //Fine, as person still references the same object
//person = {}; //This fails though! .. TypeError: Assignment to constant variable.

Object.freeze(person); // This actually creates a constant like you'd get in another language
person.name = "Chris"; // TypeError: Cannot assign to read only property 'name' of object '#<Object>'







