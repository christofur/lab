/**

 Enhanced object literals: new nicer syntax on creating objects in-place.
 
 */

function sayHello(){
  console.log('Hi! I am ' + this.name);
}

// You can just create simple objects quickly - instead of using the class syntax
const person = {
  name: 'Chris',
  age: 34,
  sayHello: sayHello
};

person.sayHello(); // Hi! I am Chris

// And even use computed values for property names
var randomNumber = Math.random();

const randomObject = {
  ['seed_' + randomNumber]: 42
};

console.log(randomObject['seed_' + randomNumber]); //42

// You now even have `get` and `set` syntax in JS

const author = {
  name: 'Roald',
  surname: 'Dahl',
  get fullname() {
    return this.name + ' ' + this.surname;
  },
  set fullname(fullname){
    let parts = fullname.split(' ');
    this.name = parts[0];
    this.surname = parts[0];
  }
};

console.log(author.fullname); //Roald Dahl

// Something interesting happens below. This calls the set function,
// and (as a language feature), always returns the `get` value of the same name
console.log(author.fullname = 'Enid Blyton'); //Enid Blyton
console.log(author.name); //Enid


