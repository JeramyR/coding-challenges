

//title: Filter Primes from an Array

//tags: algorithms,arrays,numbers

//url: https://edabit.com/challenge/sPdaYSjgqpupa2B7q

//Description:
//Create a function that takes an array and returns a new array containing only prime numbers.
//Examples
//filterPrimes([7, 9, 3, 9, 10, 11, 27]) ➞ [7, 3, 11]
//
//filterPrimes([10007, 1009, 1007, 27, 147, 77, 1001, 70]) ➞ [10007, 1009]
//
//filterPrimes([1009, 10, 10, 10, 3, 33, 9, 4, 1, 61, 63, 69, 1087, 1091, 1093, 1097]) ➞ [1009, 3, 61, 1087, 1091, 1093, 1097]
//Notes
//New array must maintain the order of primes as they first appear in the original array.
//Check the Resources tab for help.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(filterPrimes([7, 9, 3, 9, 10, 11, 27]), [7, 3, 11])
//Test.assertSimilar(filterPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), [2, 3, 5, 7, 11, 13, 17, 19, 23])
//Test.assertSimilar(filterPrimes([1009, 10, 10, 10, 3, 33, 9, 4, 1, 61, 63, 69, 1087, 1091, 1093, 1097]), [1009, 3, 61, 1087, 1091, 1093, 1097])
//Test.assertSimilar(filterPrimes([10007, 1009, 1007, 27, 147, 77, 1001, 70]), [10007, 1009])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Does the Cargo Fit? (Part 1)

//tags: logic,math,strings

//url: https://edabit.com/challenge/7W8aPMTicPy6jbYr3

//Description:
//A ship has to transport cargo from one place to another, while picking up cargo along the way. Given the total amount of cargo and the types of cargo holds in the ship as arrays, create a function that returns true if all the cargo can fit on the ship, and false if it can't.
//"S" means 50 cargo space.
//"M" means 100 cargo space.
//"L" means 200 cargo space.
//Examples
//willFit(["M", "L", "L", "M"], [56, 62, 84, 90]) ➞ true
//
//willFit(["S", "S", "S", "S", "L"], [40, 50, 60, 70, 80, 90, 200]) ➞ false
//
//willFit(["L", "L", "M"], [56, 62, 84, 90]) ➞ true
//Notes
//Calculate the cargo as a whole, and not for each separate cargo hold (see example #2).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(willFit(["M", "L", "L", "M"], [56, 62, 84, 90]), true)
//Test.assertEquals(willFit(["L", "L", "M"], [56, 62, 84, 90]), true)
//Test.assertEquals(willFit(["S", "S", "S", "S", "L"], [40, 50, 60, 70 , 80, 90, 200]), false)
//Test.assertEquals(willFit(["S", "L"], [73 , 87, 95, 229]), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Promises VII: Chaining

//tags: functional_programming

//url: https://edabit.com/challenge/9kB7LsxejgoAeFrSB

//Description:
//then() functions return a new promise, different from the original. Since catch functions are actually then() functions behind the scenes, they also return new promises. So if that's true then you could do something like this:
//new Promise((resolve, reject) => {
//    console.log("Initial");
//    resolve();
//})
//.then(() => {
//    throw new Error("Something failed");
//    console.log("Do this");
//})
//.catch(() => {
//    console.error("Do that");
//})
//.then(() => {
//    console.log("Do this, no matter what happened before");
//});
//
//// logs
//Initial
//Do that
//Do this, no matter what happened before
//The text "Do this" is not displayed because the "Something failed" error caused a rejection.
//The last then() call in the function doSomething() should log in my main call something but logs undefined instead. Find out what's wrong with the code and fix it. You will see two logs in my function something, this is not an error. This is from the test. Do not remove any then() or catch() functions
//Notes
//Do not overthink this!
//Check the Resources tab if you get stuck.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let answer = "" 
//​
//let promise = doSomething().then(response => {
//  return answer = response
//})
//​
//promise.then(x => Test.assertEquals(answer, "something"))
//​
//// Credits to Hammerbot for the challenge and Martin Adamek for the solution on SO.

