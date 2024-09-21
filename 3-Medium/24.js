

//title: ReverseAndNot

//tags: formatting,language_fundamentals,strings

//url: https://edabit.com/challenge/moK78CirzYbqk6g3z

//Description:
//Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.
//To illustrate:
//123
//We reverse 123 to get 321 and then add 123 to the end, resulting in 321123.
//Examples
//reverseAndNot(123) ➞ 321123
//
//reverseAndNot(152) ➞ 251152
//
//reverseAndNot(123456789) ➞ 987654321123456789
//Notes
//i is a non-negative integer.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(reverseAndNot(123), 321123)
//Test.assertEquals(reverseAndNot(123456789), 987654321123456789)
//Test.assertEquals(reverseAndNot(496), 694496)
//Test.assertEquals(reverseAndNot(307), 703307)
//Test.assertEquals(reverseAndNot(500), 5500)
//Test.assertEquals(reverseAndNot(321), 123321)
//Test.assertEquals(reverseAndNot(564), 465564)
//Test.assertEquals(reverseAndNot(66), 6666)
//Test.assertEquals(reverseAndNot(553), 355553)
//Test.assertEquals(reverseAndNot(518), 815518)
//Test.assertEquals(reverseAndNot(152), 251152)
//Test.assertEquals(reverseAndNot(273), 372273)
//Test.assertEquals(reverseAndNot(603), 306603)
//Test.assertEquals(reverseAndNot(864), 468864)
//Test.assertEquals(reverseAndNot(170), 71170)
//Test.assertEquals(reverseAndNot(96), 6996)
//Test.assertEquals(reverseAndNot(869), 968869)
//Test.assertEquals(reverseAndNot(960), 69960)
//Test.assertEquals(reverseAndNot(471), 174471)
//Test.assertEquals(reverseAndNot(925), 529925)
//Test.assertEquals(reverseAndNot(235), 532235)
//Test.assertEquals(reverseAndNot(389), 983389)
//Test.assertEquals(reverseAndNot(293), 392293)
//Test.assertEquals(reverseAndNot(586), 685586)
//Test.assertEquals(reverseAndNot(218), 812218)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Basic Arithmetic Operations

//tags: conditions,language_fundamentals,math

//url: https://edabit.com/challenge/mgCKn998CNowjAZBF

//Description:
//Write a function that does the following for the given values: add, subtract, divide and multiply. These are simply referred to as the basic arithmetic operations. The variables have to be defined, but in this challenge they will be defined for you. All you have to do is check the variables, do some string to integer conversions, use some if conditions, and apply the arithmetic operation.
//The numbers and operation are given as strings and should result in an integer value.
//Examples
//operation("1",  "2",  "add" ) ➞ 3
//
//operation("4",  "5",  "subtract") ➞ -1
//
//operation("6",  "3",  "divide") ➞ 2
//Notes
//The numbers and operation are given as strings and should result in an integer value.
//If the operation results in Infinity, then return "undefined" (e.g. division by zero).
//Division results will be rounded down to their integral parts.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [actualParam, expectedParam] = [
//  [
//    ["1", "2", "add"],
//    ["1", "-20", "add"],
//    ["9", "0", "divide"],
//    ["10", "10", "multiply"],
//    ["-10", "-10", "multiply"],
//    ["10", "10", "subtract"],
//    ["0", "0", "subtract"],
//    ["0", "1", "divide"],
//    ["0", "25415", "divide"]
//  ],
//  [3, -19, "undefined", 100, 100, 0, 0, 0, 0]
//]
//for (let i in actualParam) Test.assertEquals(operation(...actualParam[i]), expectedParam[i])
//Test.assertEquals(operation(operation("10", "10", "multiply"), operation("10", "10", "add"), "divide"), 5)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Check if All Values Are True

//tags: arrays,loops,validation

//url: https://edabit.com/challenge/ttiutYw6NyphfxuCG

//Description:
//Create a function that returns true if all parameters are truthy, and false otherwise.
//Examples
//allTruthy(true, true, true) ➞ true
//
//allTruthy(true, false, true) ➞ false
//
//allTruthy(5, 4, 3, 2, 1, 0) ➞ false
//Notes
//Falsy values include false, 0, "" (empty string), null, undefined, and NaN; everything else is truthy.
//You will always be supplied with at least one parameter.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const tests = [
//  [[true, true, true], true],
//  [[false], false],
//  [[true], true],
//  [[false, true, true, true, 20], false],
//  [[Infinity, 92347238467.219378, 'Hello World'], true],
//  [[Infinity, 92347238467.219378, 'Hello World', 0], false],
//  [['', 'r', 'ra', 'rac', 'race'], false],
//  [[+'Hi!'], false],
//  [[{}.twice], false],
//  [[true, 32, Number, [][1]], false],
//  [[Boolean, Number, Object, String], true],
//];
//​
//tests.forEach(([a, e]) => Test.assertEquals(allTruthy(...a), e))

