
// import _ from 'lodash'
// ***partials function***

// function mul(a, b) {
//   return a * b;
// }

// let double = mul.bind(null, 2);

// console.log( double(3) ); // = mul(2, 3) = 6
// console.log( double(4) ); // = mul(2, 4) = 8
// console.log( double(5) ); // = mul(2, 5) = 10


// let triple = mul.bind(null, 3);

// console.log( triple(3) ); // = mul(3, 3) = 9
// console.log( triple(4) ); // = mul(3, 4) = 12
// console.log( triple(5) ); // = mul(3, 5) = 15

// ***currying***

// function curry(func) {
//   return function(a) {
//     return function(b) {
//       return func(a, b);
//     };
//   };
// }

// // usage
// function sum(a, b) {
//   return a + b;
// }

// let carriedSum = curry(sum);

// console.log( carriedSum(1)(2) ); // 3

// function log(date, importance, message) {
//   console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
// }
// log = _.curry(log);

// log(new Date(), "DEBUG", "some debug")
// log(new Date())("DEBUG")("some debug"); // log(a)(b)(c)

// // todayLog will be the partial of log with fixed first argument
// let todayLog = log(new Date());

// // use it
// todayLog("INFO", "message"); // [HH:mm] INFO message

// let todayDebug = todayLog("DEBUG");

// todayDebug("message"); // [HH:mm] DEBUG message



// function curry(func) {
//   return function curried(...args) {
//     console.log(args.length, func.length)
//     if (args.length >= func.length) {
//       return func.apply(this, args);
//     } else {
//       return function(...args2) {
//         return curried.apply(this, args.concat(args2));
//       }
//     }
//   };

// }

// function sum(a, b, c) {
//   return a + b + c;
// }

// let curriedSum = curry(sum);

// // still callable normally
// console.log( curriedSum(1, 2, 3) ); // 6

// // get the partial with curried(1) and call it with 2 other arguments
// console.log( curriedSum(1)(2,3) ); // 6

// // full curried form
// console.log( curriedSum(1)(2)(3) ); // 6