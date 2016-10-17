/*
  Arrow functions and lexical scope
  
  #1 is broken. The solution used to be using bind() as in #2
  
  However, Arrow Functions are bound to their lexical scope!
  This means that we get the scope we want, when we want it. #3
 */

"use strict";

function DelayedGreeter(name){
  this.name = name;
}

// #1 - this is broken as the callback loses its scope

DelayedGreeter.prototype.greet = function(){
  setTimeout(function cb() {
    console.log("Hello " + this.name);
  }, 500);
};

const greeter = new DelayedGreeter("World");
greeter.greet(); // Hello undefined


// #2 - This is how you used to fix it, using bind() on the callback

DelayedGreeter.prototype.fixedGreet = function(){
  setTimeout((function cb() {
    console.log("Hello " + this.name);
  }).bind(this), 500);
};

greeter.fixedGreet(); // Hello World

DelayedGreeter.prototype.arrowGreet = function() {
  setTimeout(() => console.log("Hello " + this.name), 500)
};

greeter.arrowGreet(); // Hello World


