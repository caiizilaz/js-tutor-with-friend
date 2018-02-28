//***Losing “this” ***/
// let user = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   }
// };

// setTimeout(user.sayHi, 1000); // Hello, undefined!

// let user = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   }
// };

// setTimeout(function() {
//   user.sayHi(); // Hello, John!
// }, 1000);

// setTimeout(() => user.sayHi(), 1000); // Hello, John!

// let user = {
//   firstName: "John"
// };


// function func() {
//   console.log(this.firstName);
// }

// let funcUser = func.bind(user);
// funcUser(); // John

// let user = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   }
// };

// let sayHi = user.sayHi.bind(user); // (*)

// sayHi(); // Hello, John!

// setTimeout(sayHi, 1000); // Hello, John!

// let user = {
//   firstName: "John",
//   say(phrase) {
//     console.log(`${phrase}, ${this.firstName}!`);
//   }
// };

// let say = user.say.bind(user);

// say("Hello"); // Hello, John ("Hello" argument is passed to say)
// say("Bye"); // Bye, John ("Bye" is passed to say)
