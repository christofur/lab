/**
 
 ES6 gives you 'weak' versions of Map and Set. These versions have limitations to their functionality,
 but allow the runtime (and in particular GC) to work with them more efficiently.
 
 */

// WeakMap - use when collecting metadata about objects
let obj = {};
const map = new WeakMap();
map.set(obj, {key: "some_value"});
console.log(map.get(obj)); // {key: "some_value"}
obj = undefined; //next gc cycle will clean up obj and the data associated in the map

// WeakSet - we can add objects to the set, as before. But if their only reference
// remaining is in the set, they can be GC'd
let obj1 = { key: "value" };
let obj2 = { key: "value2" };
const set = new WeakSet([obj1, obj2]);
obj1 = undefined; //obj1 can now be GC'd