/**
 * Determining the this binding for an executing function requires finding the direct call-site of that function.
 * Once examined, four rules can be applied to the call-site, in this order of precedence:

 1. Called with new? Use the newly constructed object.

 2. Called with call or apply (or bind)? Use the specified object.

 3. Called with a context object owning the call? Use that context object.

 4. Default: undefined in strict mode, global object otherwise.
 */


/**
 * New
 *
 * When a function is invoked with new in front of it, otherwise known as a constructor call, the following things are done automatically:

 1.  a brand new object is created (aka, constructed) out of thin air
 2. the newly constructed object is [[Prototype]]-linked
 3. the newly constructed object is set as the this binding for that function call
 4. unless the function returns its own alternate object, the new-invoked function call will automatically return the newly constructed object.

 *
 */

function foo(a) {
    this.a = a;
}

var bar = new foo( 2 );
console.log( bar.a ); // 2




/**
 * Explicit Binding
 *
 * Invoking foo with explicit binding by foo.call(..) allows us to force its this to be obj.
 */

function foo() {
    console.log( this.a );
}

var obj = {
    a: 2
};

foo.call( obj ); // 2


/**
 * Implicit Binding
 *
 * Another rule to consider is: does the call-site have a context object, also referred to as an owning or containing object
 */

function foo() {
    console.log( this.a );
}

var obj2 = {
    a: 42,
    foo: foo
};

var obj1 = {
    a: 2,
    obj2: obj2
};

obj1.obj2.foo(); // 42


/**
 * Default Binding
 *
 * The first rule we will examine comes from the most common case of function calls: standalone function invocation. Think of this this rule as the default catch-all rule when none of the other rules apply.
 *
 * If strict mode is in effect, the global object is not eligible for the default binding, so the this is instead set to undefined.
 */

function foo() {
    "use strict";

    console.log( this.a );
}

var a = 2;

foo(); // TypeError: `this` is `undefined`