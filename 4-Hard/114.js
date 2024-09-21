

//title: LCM of More Than Three Numbers

//tags: math,numbers

//url: https://edabit.com/challenge/qmQ9kRz6ZbkL4hi5F

//Description:
//Create a function that takes an array of more than three numbers and returns the Least Common Multiple (LCM).
//Examples
//lcmOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ 2520
//
//lcmOfArray([13, 6, 17, 18, 19, 20, 37]) ➞ 27965340
//
//lcmOfArray([44, 64, 12, 17, 65]) ➞ 2333760
//Notes
//The LCM of an array of numbers is the smallest positive number that is divisible by each of the numbers in the array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(lcmOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 2520)
//Test.assertSimilar(lcmOfArray([13, 6, 17, 18, 19,20, 37]), 27965340)
//Test.assertSimilar(lcmOfArray([44, 64, 12, 17, 65]), 2333760)
//Test.assertSimilar(lcmOfArray([200, 30, 18, 11, 8, 64, 34]), 2692800)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Checkerboard Pattern

//tags: arrays,games,validation

//url: https://edabit.com/challenge/qNTiqHJ6cDi6Tccny

//Description:
//Create a function that returns true if the two-dimensional n x n input array has a checker-board pattern.
//Examples
//isCheckerboard([
//  [1, 1],
//  [0, 1]
//]) ➞ false
//
//isCheckerboard([
//  [0, 1],
//  [1, 0]
//]) ➞ true
//
//isCheckerboard([
//  [1, 0, 1, 0, 1],
//  [0, 1, 0, 1, 0],
//  [1, 0, 1, 0, 1],
//  [0, 1, 0, 1, 0],
//  [1, 0, 1, 1, 1]
//]) ➞ false
//
//isCheckerboard([
//  [1, 0, 1, 0, 1],
//  [0, 1, 0, 1, 0],
//  [1, 0, 1, 0, 1],
//  [0, 1, 0, 1, 0],
//  [1, 0, 1, 0, 1]
//]) ➞ true
//Notes
//An element in the array adheres to the checker-board pattern if the elements directly to the left, right, top and below are of a different type, and the elements on the diagonal direction are of the same type.
//The element in the upper-left corner can be either 0 or 1.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isCheckerboard([
//  [1, 0, 1, 0, 1],
//  [0, 1, 0, 1, 0],
//  [1, 0, 1, 0, 1],
//  [0, 1, 0, 1, 0],
//  [1, 0, 1, 0, 1]
//]), true)
//​
//Test.assertEquals(isCheckerboard([
//  [0, 1, 0, 1, 0],
//  [1, 0, 1, 0, 1],
//  [0, 1, 0, 1, 0],
//  [1, 0, 1, 0, 1],
//  [0, 1, 0, 1, 0]
//]), true)
//​
//Test.assertEquals(isCheckerboard([
//  [0, 1, 0, 1, 0],
//  [1, 0, 1, 0, 1],
//  [0, 1, 0, 1, 0],
//  [1, 0, 1, 1, 1],
//  [0, 1, 0, 1, 0]
//]), false)
//​
//Test.assertEquals(isCheckerboard([

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: RegEx Exercise 5: Password Validation

//tags: regex,validation

//url: https://edabit.com/challenge/RCbczQk6jdAd5N46D

//Description:
//Create a regular expression that checks for a password:
//It should contain at least one uppercase letter.
//It should contain at least one lowercase letter.
//It should contain at least one digit.
//It should contain at least one special symbol.
//REGEXP.test("bbA234c@cy~!")  ➞ true
//
//REGEXP.test("32Bl4###xxz") ➞ true
//
//REGEXP.test("!abcABC9lzD") ➞ true
//
//REGEXP.test("d@!2?%^&ahaZbb") ➞ true
//Notes
//You can find the solution in the Resources tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let str1 = "bbA234c@cy~!" 
//let str2 = "32Bl4###xxz" 
//let str3 = "!abcABC9lzD" 
//let str4 = "d@!2?%^&ahaZbb" 
//​
//const validate = (REGEXP) => {
//   // if(!//.test(String(REGEXP))) return () => "invalid" 
//   return function testReg(str) {
//      return REGEXP.test(str)  
//   }
//}
//​
//const testExp = validate(REGEXP)
//​
//// Test.assertNotEquals(testExp(str), "invalid", "Nothing new here")
//Test.assertSimilar(testExp(str1), true)
//Test.assertSimilar(testExp(str2), true)
//Test.assertSimilar(testExp(str3), true)
//Test.assertSimilar(testExp(str4), true)
//​
//// credits to https://levelup.gitconnected.com/extremely-useful-regular-expression-examples-for-real-world-applications-567e844a0822

