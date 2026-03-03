// synchronous means one task is performed at a time. One job needs to be finished in order to start another. Asynchronous is the opposite. It allows tasks to be executed without being blocked by other tasks.

// let say, a,b,c take 1 min time 
function a (){
    //...
}
function b (){
    //...
}
function c (){
    //...
}
//if we want that a executes first then b is start after a is finished and then c starts after completing execution of b. it can't possible by just call a() then b() and at last c().
a( b(
    c()     
    ) 
)
// There are definitely more elegant ways to write the above example, but the point is that if you have code that has to wait for some other async code to finish then you express that dependency by putting your code in functions that get passed around as callbacks.

var file = readFile()
processFile(file)
// This kind of linear (step-by-step, in order) code isn't the way that node works. If this code were to get executed then readFile and processFile would both get executed at the same exact time. This doesn't make sense since readFile will take a while to complete. Instead you need to express that processFile depends on readFile finishing. This is exactly what callbacks are for! And because of the way that JavaScript works you can write this dependency many different ways.

// Understad why its important to handle asynchronous code : https://github.com/maxogden/art-of-node#callbacks


// ==> Promises : 
// video(why its good to use promise instead of callback) : https://www.youtube.com/watch?v=DHvZLI7Db8E
// event loop video : https://youtu.be/8aGhZQkoFbQ?t=718
// video (visualise - Event Loop, Web APIs, (Micro)task Queue): https://www.youtube.com/watch?v=eiC58R16hb8
// video (visualise - Promise execution) : https://www.youtube.com/watch?v=Xs1EMmBLpn4
// article : https://davidwalsh.name/promises

// XMLHttpRequest API is async but does not use the Promises API 
// The new Promise() constructor should only be used for legacy async tasks, like usage of setTimeout or XMLHttpRequest. 
// A new Promise is created with the new keyword and the promise provides resolve and reject functions to the provided callback:
    var p = new Promise(function(resolve, reject) {
        
        // Do an async task async task and then...

        if(/* good condition */) {
            resolve('Success!');
        }
        else {
            reject('Failure!');
        }
    });

    p.then(function(result) { 
        /* do something with the result */
    }).catch(function() {
        /* error :( */
    }).finally(function() {
    /* executes regardless or success for failure */ 
    });

//then
// The first then method callback receives the result given to it by the resolve() call. The then callback is triggered when the promise is resolved.  You can also chain then method callbacks:
let p2 = new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { resolve(10); }, 3000);
})
.then(function(num) { console.log('first then: ', num); return num * 2; })
.then(function(num) { console.log('second then: ', num); return num * 2; })
.then(function(num) { console.log('last then: ', num);});

// From the console:
// first then:  10
// second then:  20
// last then:  40


// catch : The catch callback is executed when the promise is rejected:

let p3 = new Promise(function(resolve, reject) {
	// A mock async action using setTimeout
	setTimeout(function() { reject('Done!'); }, 3000);
})
.then(function(e) { console.log('done', e); })
.catch(function(e) { console.log('catch: ', e); });

// From the console:
// 'catch: Done!'


// finally : The newly introduced finally callback is called regardless of success or failure:

(new Promise((resolve, reject) => { reject("Nope"); }))
    .then(() => { console.log("success") })
    .catch(() => { console.log("fail") })
    .finally(res => { console.log("finally") });

// >> fail
// >> finally



// Promise.all : 
// Think about JavaScript loaders:  there are times when you trigger multiple async interactions but only want to respond when all of them are completed -- that's where Promise.all comes in.  The Promise.all method takes an array of promises and fires one callback once they are all resolved:
//Dealing with rejection is, of course, hard. Promise.all will be super useful as more APIs move toward promises.

Promise.all([promise1, promise2]).then(function(results) {
	// Both promises resolved
})
.catch(function(error) {
	// One or more promises was rejected
});

// Promise.race :  instead of waiting for all promises to be resolved or rejected, Promise.race triggers as soon as any promise in the array is resolved or rejected:

var req1 = new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { resolve('First!'); }, 8000);
});
var req2 = new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { resolve('Second!'); }, 3000);
});
Promise.race([req1, req2]).then(function(one) {
	console.log('Then: ', one);
}).catch(function(one, two) {
	console.log('Catch: ', one);
});

// From the console:
// Then: Second!