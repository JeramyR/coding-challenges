

//title: RegEx Exercise 1: Find the Time

//tags: regex

//url: https://edabit.com/challenge/QkuiL7XApt2RMQqTJ

//Description:
//The time has a format: hours:minutes. Both hours and minutes have two digits, like 09:00.
//Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456. In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result. The regexp should not match 123:456.
//Notes
//The solution is in the Resources tab.

//code area
///////////////////////////////////////////////////////////////////////////
// const testExp = str => {
//     let reg = /\d{2}:\d{2}/

//     let x = str.match(reg)
//     console.log(x)
// }


//////////////////////////////////////////////////////////////////////////

//tests:
// testExp("Breakfast at 09:00 in the room 123:456.")


//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: RegEx XIV: Group Ranges x|y

//tags: formatting,regex

//url: https://edabit.com/challenge/7KbZc8QvzqrJPaE6Q

//Description:
//Groups and ranges indicate groups and ranges of expression characters. The regular expression x|y matches either "x" or "y".
//const REGEXP = /blue|red/
//
//"red flag".match(REGEXP)  // red
//"blue flag".match(REGEXP)  // blue
//
//// Matches "blue" in "blue flag" and "red" in "red flag".
//Create a regular expression to match all red flag and blue flag in a string. You must use | in your expression. Flags can come in any order.
//Examples
//"red flag blue flag".match(REGEXP) ➞ ["red flag", "blue flag"]
//
//"yellow flag red flag blue flag green flag".match(REGEXP) ➞ ["red flag", "blue flag"]
//
//"pink flag red flag black flag blue flag green flag red flag ".match(REGEXP) ➞ ["red flag", "blue flag", "red flag"]
//Notes
//Check the Resources tab if you get stuck.

//code area
///////////////////////////////////////////////////////////////////////////
// const testExp = str => {
//     console.log(str.match(/red flag|blue flag/g))
// }

//////////////////////////////////////////////////////////////////////////

//tests:

// const str1 = "red flag blue flag"
// const str2 = "yellow flag red flag blue flag green flag"
// const str3 = "pink flag red flag black flag blue flag green flag red flag"
// const str4 = "blue flag red flag red flag blue flag green flag red flag"
//​
//const validate = (REGEXP) => {
//   if(!/\|/.test(String(REGEXP))) return () => "invalid" 
//   return function testReg(str) {
//     console.log(str.match(REGEXP))
//     return str.match(REGEXP)
//   }
//}
//​
//const testExp = validate(REGEXP)
//​
//Test.assertNotEquals(testExp(str1), "invalid", "You are require to use the | in your expression.")
// testExp(str1)//, ["red flag", "blue flag"])
// testExp(str2)//, ["red flag", "blue flag"])
// testExp(str3)//, ["red flag", "blue flag", "red flag"])
// testExp(str4)//, ["blue flag", "red flag", "red flag", "blue flag", "red flag"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Promises III: Native Promise, Introducing the Executor

//tags: functional_programming,interview

//url: https://edabit.com/challenge/8kTQqoWYQXRsKuYEf

//Description:
//Promises are just objects that contain the outcome of asynchronous operations. So when do you use one? When you want to control the outcome of an asynchronous operation. All you have to do is wrap the asynchronous function with a promise constructor.
//The promise constructor requires you to pass a function called the executor which takes two parameters, resolve and reject. Both are functions that you use to pass or reject a value that is usually the result of the async operation. Here's an example of a simple promise:
//let promise = new Promise( (resolve, reject) => {
//  setTimeout(( ) => {
//     resolve("edabit")
//  }, 1000)
//})
//setTimeout is a browser API that is very commonly used in tutorials to represent async operations. After 1000ms has passed, we call the callback function in setTimeout() and pass a string "edabit" to the resolve function.
//Create a simple promise and pass the resolve function a string value of your choice. Use the setTimeout function as your asynchronous operation. Your setTimeout() function should not exceed 1000ms. Store the promise inside a variable named promise.
//Notes
//Check the Resources tab for more info on promises.

//code area
///////////////////////////////////////////////////////////////////////////
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('complete')
//     }, 1000)
// })


//////////////////////////////////////////////////////////////////////////

//tests:

// let prom = promise.then((err, res) => {
//     if (err) { 
//         return err 
//     }
//     return res
// })

// prom.then((res) => {
//     Test.assertEquals(typeof res, "string", "The promise needs resolve a string.")
// })

// Test.assertEquals(promise, promise)

