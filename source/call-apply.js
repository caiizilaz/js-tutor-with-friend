//***Transparent caching***
// function slow(x) {
//   // there can be a heavy CPU-intensive job here
//   console.log(`Called with ${x}`);
//   return x;
// }

// function cachingDecorator(func) {
//   let cache = new Map();

//   return function(x) {
//     if (cache.has(x)) { // if the result is in the map
//       return cache.get(x); // return it
//     }

//     let result = func(x); // otherwise call func

//     cache.set(x, result); // and cache (remember) the result
//     return result;
//   };
// }

// slow = cachingDecorator(slow);

// console.log( slow(1) ); // slow(1) is cached
// console.log( "Again: " + slow(1) ); // the same

// console.log( slow(2) ); // slow(2) is cached
// console.log( "Again: " + slow(2) ); // the same as the previous line

//***Using “func.call” for the context
// we'll make worker.slow caching
// let worker = {
//   someMethod() {
//     return 1;
//   },

//   slow(x) {
//     // actually, there can be a scary CPU-heavy task here
//     console.log("Called with " + x);
//     return x * this.someMethod(); // (*)
//   }
// };

// // same code as before
// function cachingDecorator(func) {
//   let cache = new Map();
//   return function(x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }
//     let result = func(x); // (**) 
//     // let result = func.call(this, x)
//     cache.set(x, result);
//     return result;
//   };
// }

// console.log( worker.slow(1) ); // the original method works

// worker.slow = cachingDecorator(worker.slow); // now make it caching
// // worker.slow = cachingDecorator(worker.slow.bind(worker));


// console.log( worker.slow(2) ); // Whoops! Error: Cannot read property 'someMethod' of undefined


//***Going multi-argument with “func.apply”***
// function say(time, phrase) {
//   console.log(`[${time}] ${this.name}: ${phrase}`);
// }

// let user = { name: "John" };

// let messageData = ['10:00', 'Hello']; // become time and phrase

// // user becomes this, messageData is passed as a list of arguments (time, phrase)
// say.call(user, ...messageData); // [10:00] John: Hello (this=user)

let worker = {
  slow(min, max) {
    console.log(`Called with ${min},${max}`);
    return min + max;
  }
};

function cachingDecorator(func, hash) {
  let cache = new Map();
  return function() {
    let key = hash(arguments); // (*)
    console.log(key)
    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.apply(this, arguments); // (**)

    cache.set(key, result);
    return result;
  };
}

function hash() {
  return [].join.call(arguments);
}

worker.slow = cachingDecorator(worker.slow, hash);

console.log( worker.slow(3, 5) ); // works
console.log( "Again " + worker.slow(3, 5) ); // same (cached)