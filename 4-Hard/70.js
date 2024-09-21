

//title: Promises IX: Composition Introduction

//tags: functional_programming

//url: https://edabit.com/challenge/Z5EwpzWB37HpbvmsG

//Description:
//The built-in javascript Promise object has several methods you can use to compose your asynchronous operations. The Promise.resolve() function takes either a value or a promise.
//var original = Promise.resolve(33)
//var cast = Promise.resolve(original)
//cast.then(function(value) {
//  console.log('value: ' + value)
//})
//So what is going on here?
//original is assigned a promise that is passed the value 33.
//cast is passed the promise original.
//The then function is passed original and becomes the then function for original.
//Then it takes original's value(33) and logs it to the console.
//One other thing Promise.resolve() does is that it will cast anything that might be a promise(ie. thenables) to a native Javascript Promise. This is generally the use case for it.
//Use a Promise method to turn the thenable object into a native promise and assign it to the promise variable. Assign the fulfilled value to the result variable.
//Notes
//Check out the Resources tab if you get stuck.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//function promiseState(p) {
//  const t = {};
//  return Promise.race([p, t]).then(v => (v === t)? "pending" : "fulfilled", () => "rejected");
//}
//​
//Test.assertEquals(result, "", "You are only allowed to reassign 'result' in the onFufilled handler.")
//promiseState(promise).then(state => Test.assertEquals(state, "pending"))
//promise.then(x => Test.assertEquals(x, "edabit!")).then(() => Test.assertEquals(result, "edabit!"))

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Greater Than the Sum?

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/Q6f6SKcnc922g95s5

//Description:
//For each number in an array, check if that number is greater than the sum of all numbers that appear before it in the array. If all numbers in the array pass this test, return true. Return false otherwise.
//Examples
//greaterThanSum([2, 3, 7, 13, 28]) ➞ true
//
//// 3 > 2 = true
//// 7 > 2 + 3 = true
//// 13 > 2 + 3 + 7 = true
//// 28 > 2 + 3 + 7 + 13 = true
//
//greaterThanSum([1, 2, 4, 6, 13]) ➞ false
//
//// 2 > 1 = true
//// 4 > 1 + 2 = true
//// 6 > 1 + 2 + 4 = false
//// 13 > 1 + 2 + 4 + 6 = false
//Notes
//The first number in any array will always pass the test.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(greaterThanSum([1, -2, 11, 26]), false)
//Test.assertEquals(greaterThanSum([5, 8, 18, 32, 67, 131, 265, 529, 1056, 2115]), true)
//Test.assertEquals(greaterThanSum([8, 29, 62, 115, 232]), true)
//Test.assertEquals(greaterThanSum([5, 7, 15, 52, 88, 173, 346, 686, 1393, 2765]), false)
//Test.assertEquals(greaterThanSum([1, 25, 35, 74, 159, 305, 623]), true)
//Test.assertEquals(greaterThanSum([21, 40, 58, 134, 250]), false)
//Test.assertEquals(greaterThanSum([9, 32, 60, 107, 223, 442, 894, 1782, 3564]), true)
//Test.assertEquals(greaterThanSum([4, 26, 51, 103, 204, 412, 821, 1638, 3257]), false)
//Test.assertEquals(greaterThanSum([16, 35, 51, 120]), false)
//Test.assertEquals(greaterThanSum([-4, 1, 2, 14, 9, 44, 67, 131, 286]), false)
//Test.assertEquals(greaterThanSum([1, 4, 6, 14, 26, 56, 112]), true)
//Test.assertEquals(greaterThanSum([1, 18, 25, 42, 82, 188]), false)
//Test.assertEquals(greaterThanSum([13, 23, 36, 97, 186, 369, 728]), false)
//Test.assertEquals(greaterThanSum([8, 30, 44, 97]), true)
//Test.assertEquals(greaterThanSum([8, 31, 39, 102, 176, 363, 732, 1455, 2917, 5840]), false)
//Test.assertEquals(greaterThanSum([9, 10, 20, 43]), true)
//Test.assertEquals(greaterThanSum([25, 34, 68, 128, 262]), true)
//Test.assertEquals(greaterThanSum([18, 34, 77, 129, 270, 544, 1075, -2148]), false)
//Test.assertEquals(greaterThanSum([14, 34, 70, 123, 263, 506]), true)
//Test.assertEquals(greaterThanSum([24, 29, 58, 115, 236, 468, 950, 1905, 3787, 7575]), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Positives and Negatives

//tags: arrays,loops,numbers,validation

//url: https://edabit.com/challenge/SZnDZpQeBwhGXMBPW

//Description:
//Create a function which validates whether a given array alternates between positive and negative numbers.
//Examples
//alternatePosNeg([3, -2, 5, -5, 2, -8]) ➞ true
//
//alternatePosNeg([-6, 1, -1, 4, -3]) ➞ true
//
//alternatePosNeg([4, 4, -2, 3, -6, 10]) ➞ false
//Notes
//Lists can be of any length.
//It doesn't matter if an array begins/ends with a positive or negative, as long as it alternates.
//If an array contains 0, return false (as it is neither positive nor negative).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(alternatePosNeg([3, -2, 5, -5, 2, -8]), true)
//Test.assertEquals(alternatePosNeg([-6, 1, -1, 4, -3]), true)
//Test.assertEquals(alternatePosNeg([4, 4, -2, 3, -6, 10]), false)
//Test.assertEquals(alternatePosNeg([34, 49, 33, 17, -47]), false)
//Test.assertEquals(alternatePosNeg([22]), true)
//Test.assertEquals(alternatePosNeg([41, 11, 37, -30, -29, 39, -45, 15, -41, 7]), false)
//Test.assertEquals(alternatePosNeg([3, -7, 15, 18]), false)
//Test.assertEquals(alternatePosNeg([40]), true)
//Test.assertEquals(alternatePosNeg([40, 27, -44, -13, -31]), false)
//Test.assertEquals(alternatePosNeg([40, 50, -7, 45, -7]), false)
//Test.assertEquals(alternatePosNeg([-23, -16, -9, -15, 16]), false)
//Test.assertEquals(alternatePosNeg([0, 0, 0, 0]), false)
//Test.assertEquals(alternatePosNeg([50, 28, -5, 25, -14, -2, 20, 26, -32]), false)
//Test.assertEquals(alternatePosNeg([24, -10]), true)
//Test.assertEquals(alternatePosNeg([-2, 4, 16, -15, 24, 2]), false)
//Test.assertEquals(alternatePosNeg([19, -12, -37, 44, -43, 44, 47]), false)
//Test.assertEquals(alternatePosNeg([-21, 42, -11, 27, -16, 36, 37]), false)
//Test.assertEquals(alternatePosNeg([30]), true)
//Test.assertEquals(alternatePosNeg([3, -7, 15, -18]), true)
//Test.assertEquals(alternatePosNeg([9, -4, 8, -16]), true)
//Test.assertEquals(alternatePosNeg([3, -7, 15, -18, 0]), false)
//Test.assertEquals(alternatePosNeg([0]), false)
//Test.assertEquals(alternatePosNeg([0, 2, -5, 8, -12]), false)

