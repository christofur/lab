/**
 
 In JS, plain objects are actually hash maps. It's just like in C#, a Dictionary<Int, String> is a hashmap
 
 ES6 gives us nicer Map syntax to work with.
 
 We can also make a Set - this is a list with unique values
 
 */


// The basic methods are set, get, size, has and delete
const profiles = new Map();
profiles.set("twitter", "@perksc");
profiles.set("github", "christofur");
profiles.set("instagram", "paper_fight");

console.log(profiles.size); //3
console.log(profiles.has('twitter')); //true
console.log(profiles.get('twitter')); //@perksc
console.log(profiles.has('youtube')); //false
profiles.delete('twitter');
console.log(profiles.has('twitter')); //false
console.log(profiles.get('twitter')); //undefined


// But more interestingly, we can use objects and functions as the keys in the map.
// Let's you do weird and wonderful things:

const tests = new Map();
tests.set(() => 2 + 2, 4); //Pass!
tests.set(() => 2 * 2, 5); //Fail!
tests.set(() => 2 / 2, 1); //Pass!

// To iterate, we use for .. of
// order which the entries was added is respected by the iterator
for(const entry of tests){
  console.log((entry[0]() === entry[1]) ? "Pass!" : "Fail!");
}

// Sets are unique lists of values

const s = new Set([0, 1, 2, 3, 4]);
s.add(3); //this is not added, as 3 already exists
console.log(s.size); //5
s.delete(0);
console.log(s.has(0)); //false

for(const entry of s){
  console.log(entry); // 1 2 3 4
}