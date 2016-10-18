/**
 Classes are just syntactic sugar for the same old JavaScript
 functions and prototypes
 */

class Person {
  constructor(name){
    this.name = name;
    this.age = 0;
  }
  
  setAge(age){
    this.age = age;
  }
  
  isOlderThan(years){
    return this.age > years;
  }
  
  sayHello(){
    return "Hello, my name is " + this.name;
  }
}

// Now we get into code which looks a lot like other OO languages.
// We can extend another class. We must remember to invoke the superclass
// constructor, else `this` is not bound
class PoshPerson extends Person {
  constructor(name){
    super(name);
  }
  
  
  // Override functions
  sayHello(){
    return "Greetings, thy name is " + this.name;
  }
}

const chris = new Person("Chris");
console.log(chris.sayHello());

const elizabeth = new PoshPerson("Queen Elizabeth");
console.log(elizabeth.sayHello());


