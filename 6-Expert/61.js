

//title: Recursion: Isolated or Grouped?

//tags: arrays,recursion

//url: https://edabit.com/challenge/ZshzQmvWACqgy7heQ

//Description:
//Write a function that extracts the max value of a number in an array. If there are two or more max values, return it as an array, otherwise, return the number. This process could be relatively easy with some of the built-in Array functions, but the required approach is recursive.
//Examples
//isoGroup([31, 7, 2, 13, 7, 9, 10, 13]) ➞ 31
//
//isoGroup([1, 3, 9, 5, 1, 7, 9, -9]) ➞ [9, 9]
//
//isoGroup([97, 19, -18, 97, 36, 23, -97]) ➞ [97, 97]
//
//isoGroup([-31, -7, -13, -7, -9, -13]) ➞ [-7, -7]
//
//isoGroup([-1, -3, -9, -5, -1, -7, -9, -9]) ➞ [-1, -1]
//
//isoGroup([107, 19, -18, 79, 36, 23, 97]) ➞ 107
//Notes
//You can read more about recursion (see the Resources tab) if you aren't familiar with it yet or haven't fully understood the concept before taking up this challenge.
//If you think recursion is fun, you can find a collection of those challenges here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const recursive = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
//Test.assertNotEquals(recursive(isoGroup), false, "Recursion is required!")
//​
//let [numVector, resVector] = [[
//  [31, 7, 2, 13, 7, 9, 10, 13],
//  [1, 3, 9, 5, 1, 7, 9, -9],
//  [97, 19, -18, 97, 36, 23, -97],
//  [-31, -7, -13, -7, -9, -13],
//  [-1, -3, -9, -5, -1, -7, -9, -9],
//  [107, 19, -18, 79, 36, 23, 97],
//  [10, -6, -3, 38, 12, 72, 59, 32]],
//  [31, [9, 9], [97, 97], [-7, -7], [-1, -1], 107, 72]]
//for (let i in numVector) {
//  !Array.isArray(resVector[i]) ?
//  Test.assertEquals(isoGroup(numVector[i]), resVector[i]) :
//  Test.assertSimilar(isoGroup(numVector[i]), resVector[i])
//}

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: String Compression from Character Array

//tags: arrays,control_flow,language_fundamentals,strings

//url: https://edabit.com/challenge/Pb6JrAEsFbizx7Ssz

//Description:
//The function is given an array of characters. Compress the array into a string using the following rules. For each group of consecutively repeating characters:
//If the number of repeating characters is one, append the string with only this character.
//If the number n of repeating characters x is greater than one, append the string with "x" + n.
//Examples
//compress(["t", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "s", "s", "s", "h"]) ➞ "te14s3h"
//
//compress(["a", "a", "b", "b", "c", "c", "c"]) ➞ "a2b2c3"
//
//compress(["a"]) ➞ "a"
//
//compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]) ➞ "ab12"
//
//compress(["a", "a", "a", "b", "b", "a", "a"]) ➞ "a3b2a2"
//Notes
//A recursive version of this challenge can be found via this link

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [actualParam, expectedParam] = [
//  [
//    ["a", "a", "b", "b", "c", "c", "c"], ["a"], ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"], 
//    ["a", "a", "a", "b", "b", "a", "a"], ["t", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "s", "s", "s", "h"]
//  ],
//  ["a2b2c3", "a", "ab12", "a3b2a2", "te14s3h"]
//]
//for (let i in actualParam) Test.assertEquals(compress(actualParam[i]), expectedParam[i])
//for (let i = 0; i < 20; i++) {
//  let [actual, expected] = [Array(), Array()]
//  for (let k = 0; k < Math.random() * 200 + 1; k++) {
//    let [c, n] = [String.fromCharCode(97 + k % 26), Math.round(Math.random() * 200 + 1)]
//    actual = [...actual, c.repeat(n)]
//    expected = [...expected, n > 1 ? c + n : c]
//  }
//  Test.assertEquals(compress(actual), expected.join(''))
//}

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: Disarium Number

//tags: math,numbers,recursion,validation

//url: https://edabit.com/challenge/3bMksFY5emJLvLJBW

//Description:
//A number is said to be Disarium if the sum of its digits raised to their respective positions is the number itself. Create a function that determines whether a number is a Disarium or not.
//Examples
//isDisarium(75) ➞ false
//// 7^1 + 5^2 = 7 + 25 = 32
//
//isDisarium(135) ➞ true
//// 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135
//
//isDisarium(518) ➞ false
//
//isDisarium(518) ➞ true
//
//isDisarium(544) ➞ false
//
//isDisarium(8) ➞ true
//
//isDisarium(466) ➞ false
//Notes
//Position of the digit is not likely its index.
//You are expected to solve this challenge via recursion.
//You can check on the Resources tab for more details about recursion.
//An iterative version of this challenge can be found via this link.
//A collection of challenges in recursion can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const recursive = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
//Test.assertNotEquals(recursive(isDisarium), false, "Recursion is required!")
//​
//let [numVector, resVector] = [
//  [6, 75, 135, 466, 372, 175, 1, 696, 876, 89, 518, 598],
//  [true, false, true, false, false, true, true, false, false, true, true, true]
//]
//for (let i in numVector) Test.assertEquals(isDisarium(numVector[i]), resVector[i])

