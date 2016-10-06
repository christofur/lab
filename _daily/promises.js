function doSomeWork(text, delay){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('Doing work with ' + text + '\n');
        }, delay);
    });
}

var p1 = doSomeWork('Alpha', 1000);
var p2 = doSomeWork('Beta', 2000);
var p3 = doSomeWork('Christof', 1000);

p1
    .then(output)
    .then(function(){
        return p2;
    })
    .then(output)
    .then(function(){
        return p3;
    })
    .then(output)
    .then(function(){
        return p3;
    })
    .then(function(){
        output('Completed');
    });

function output(text){
    console.log(text);
}