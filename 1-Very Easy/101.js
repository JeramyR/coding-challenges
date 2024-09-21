

//title: Regex Series: String Contains at Least One Digit

//tags: regex,strings,validation

//url: https://edabit.com/challenge/wBAuop24JYt9MZhXF

//Description:
//Write a regular expression that matches a string if it contains at least one digit.
//Examples
//"c8" ➞ true
//
//"23cc4" ➞ true
//
//"abwekz" ➞ false
//
//"sdfkxi" ➞ false
//Notes
//This challenge is designed to use RegEx only.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//describe("Deterministic Tests", function() {
//  Test.expect(validate("c8")); 
//  Test.expect(validate("23cc4")); 
//  Test.expect(!validate("abwekz")); 
//  Test.expect(!validate("sdfkxi")); 
//})
//​
//function validate(str) {
//  return x.test(str);
//}
//​
//const letters = "abcdefghijklmnopqrstuvwxyz"
//const digits = "0123456789"
//​
//String.prototype.shuffle = function () {
//  let a = this.split("");
//  let n = a.length; 
//  
//  for (let i = n-1; i > 0; i--) {
//    let j = Math.floor(Math.random()*(i+1)); 
//    let tmp = a[i]; 
//    a[i] = a[j]; 
//    a[j] = tmp; 
//  }
//  return a.join(""); 

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: ES6: Destructuring Objects I

//tags: language_fundamentals,objects

//url: https://edabit.com/challenge/JyJZbgLZCdYE4uYgC

//Description:
//In JavaScript, you can do basic object assignment like this:
//const obj =  { one : 1, two : 2 }
//
//let one = obj.one
//let two = obj.two
//However, with ES6 you can assign the variables in a much more succinct way. Use ES6 object destructuring to assign variables one and two to obj.one and obj.two respectively.
//Although you can use let, var, or const for assignment, DO NOT use these in this challenge.
//Notes
//Ignore the backticks `` (used for validation).
//Ignore the .toString() function (used for validation).
//Replace the commented part of the first line with proper, left-side part of the solution.
//If you know how to use object destructuring, go ahead and complete the challenge, otherwise check the Resources tab for examples and then come back to try the challenge.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//eval(str)
//​
//const validString = (str) => {
//  return /\{.*(one).*(two).*\}.*\=/.test(str) ? "valid" : "not valid" 
//}
// 
//Test.assertEquals(validString(str), "valid", "You must use the object destructuring to assign variables one and two")
//Test.assertEquals(one, 1, "The variable one must equal 1")
//Test.assertEquals(two, 2, "The variable two must equal 2")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Largest Number in an Array

//tags: arrays,loops,numbers,sorting

//url: https://edabit.com/challenge/HTbRYCmPwfZGnBcxW

//Description:
//Create a function that takes an array of numbers. Return the largest number in the array.
//Examples
//findLargestNum([4, 5, 1, 3]) ➞ 5
//
//findLargestNum([300, 200, 600, 150]) ➞ 600
//
//findLargestNum([1000, 1001, 857, 1]) ➞ 1001
//Notes
//Expect either a positive number or zero (there are no negative numbers).
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(findLargestNum([4, 5, 1, 3]), 5)
//Test.assertEquals(findLargestNum([13, 27, 18, 26]), 27)
//Test.assertEquals(findLargestNum([32, 35, 37, 39]), 39)
//Test.assertEquals(findLargestNum([1000, 1001, 857, 1]), 1001)
//Test.assertEquals(findLargestNum([27364, 837363, 736736, 73635]), 837363)
//Test.assertEquals(findLargestNum([30, 2, 40, 3]), 40)
//Test.assertEquals(findLargestNum([0, 1, 0, 0, 1]), 1)

