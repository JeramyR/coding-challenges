

//title: Learn Lodash: _.get, Get an Item From an Object

//tags: objects

//url: https://edabit.com/challenge/rXXfWiJufSHjRhthu

//Description:
//According to the lodash documentation, _.get gets the value at the path of the object. If the resolved value is undefined, the defaultValue is returned in its place.
//Arguments
//object (Object): The object to query.
//path (Array or string): The path of the property to get.
//defaultValue (*): The value returned for undefined resolved values.
//Returns
//(*): Returns the resolved value.
//Real World Example
//You work at a car dealership and your boss asks you to get the color of a car. He tells you the parking lot to get it from (the object you're searching) and then writes exactly where it is. row1[0].color, he could also give you this direction as an array ["row1", "[0]", "color"]. If there is no color he tells you to tell him "no color found" (the default value). You follow his instructions and return "red".
//Examples
//var object = { "a": [{ "b": { "c": 3 } }] }
//
//get(object, "a[0].b.c")  ➞ 3
//
//get(object, ["a", "0", "b", "c"])  ➞ 3
//
//get(object, "a.b.c", "default") ➞ "default"
//Notes
//Do not attempt to import lodash; you are simply writing your own version.
//This entire series of challenges can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const parkingLot = {
//  row1: {
//    [0]: {
//      make: "mazda",
//      color: "red",
//    },
//    [1]: {
//      make: "mazda",
//      color: "blue",
//    },
//    [2]: {
//      make: "mazda",
//      color: "green",
//    },
//  },
//  row2: {
//    [0]: {
//      make: "ford",
//      color: "red",
//    },
//    [1]: {
//      make: "ford",
//      color: "blue",
//    },
//    [2]: {

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Awarding Prizes

//tags: arrays,numbers,sorting

//url: https://edabit.com/challenge/TkmZmXjTjiiu2iCjF

//Description:
//You are given a dictionary of names and the amount of points they have. Return a dictionary with the same names, but instead of points, return what prize they get.
//"Gold", "Silver", or "Bronze" to the 1st, 2nd and 3rd place respectively. For all the other names, return "Participation" for the prize.
//Examples
//awardPrizes({
//  "Joshua" : 45,
//  "Alex" : 39,
//  "Eric" : 43
//}) ➞ {
//  "Joshua" : "Gold",
//  "Alex" : "Bronze",
//  "Eric" : "Silver"
//}
//
//awardPrizes({
//  "Person A" : 1,
//  "Person B" : 2,
//  "Person C" : 3,
//  "Person D" : 4,
//  "Person E" : 102
//}) ➞ {
//  "Person A" : "Participation",
//  "Person B" : "Participation",
//  "Person C" : "Bronze",
//  "Person D" : "Silver",
//  "Person E" : "Gold"
//}
//
//awardPrizes({
//  "Mario" : 99,
//  "Luigi" : 100,
//  "Yoshi" : 299,
//  "Toad" : 2
//}) ➞ {
//  "Mario" : "Bronze",
//  "Luigi" : "Silver",
//  "Yoshi" : "Gold",
//  "Toad" : "Participation"
//}
//Notes
//There will always be at least three participants to recieve awards.
//No number of points will be the same amongst participants.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(awardPrizes({
//  'Joshua' : 45,
//  'Alex' : 39,
//  'Eric' : 43
//}), {
//  'Joshua' : 'Gold',
//  'Alex' : 'Bronze',
//  'Eric' : 'Silver'
//})
//​
//Test.assertSimilar(awardPrizes({
//  'Person A' : 1,
//  'Person B' : 2,
//  'Person C' : 3,
//  'Person D' : 4,
//  'Person E' : 102
//}), {
//  'Person A' : 'Participation',
//  'Person B' : 'Participation',
//  'Person C' : 'Bronze',
//  'Person D' : 'Silver',
//  'Person E' : 'Gold'
//})
//​
//Test.assertSimilar(awardPrizes({

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Happy Function

//tags: algorithms,loops,numbers,recursion

//url: https://edabit.com/challenge/NMCc4pcDx6d7hkvcu

//Description:
//In this challenge, you have to implement an algorithm to establish if a given positive integer num is a Happy number, and how many steps of the algorithm are needed to establish it.
//You have to repeatedly transform the given num into the sum of its squared digits:
//If after the transformation the new number is equal to 1, num is a Happy number and the algorithm stops.
//If after the transformation, the new number is not equal to 1, you have to transform it again.
//
//If a number can't be reduced to 1, sooner or later the algorithm will enter into an infinitely repeating loop:
//... 20, 4, 16, 37, 58, 89, 145, 42, 20, 4 ...
//Given a positive integer num, implement a function that returns:
//If num is a Happy number, the string "HAPPY x" with the "x" being the number of steps necessary to reduce num to 1.
//If num is not a Happy number, the string "SAD x" with the "x" being the number of steps necessary to enter into the infinite loop reaching so any number in the series 4, 16, 37, 58, 89, 145, 42, 20, plus the number of steps necessary to obtain again that number.
//Look at the examples below for a better visualization.
//Examples
//happyAlgorithm(139) ➞ "HAPPY 5"
//
//// Step 1: Transform 139
//// 1² + 3² + 9² = 1 + 9 + 81 = 91
//
//// Step 2: Transform 91
//// 9² + 1² = 81 + 1 = 82
//
//// Step 3: Transform 82
//// 8² + 2² = 64 + 4 = 68
//
//// Step 4: Transform 68
//// 6² + 8² = 36 + 64 = 100
//
//// Step 5: Transform 100
//// 1² + 0² + 0² = 1 + 0 + 0 = 1
//
//// The algorithm stops at step 5: 139 is a Happy number
//
//happyAlgorithm(67) ➞ "SAD 10"
//
//// Step 1: Transform 67
//// 6² + 7² = 36 + 49 = 85
//
//// Step 2: Transform 85
//// 8² + 5² = 64 + 25 = 89
//// It entered into the infinite loop...
//// ...but we have to demonstrate that is a loop!
//
//// Step 3: Transform 89
//// 8² + 9² = 64 + 81 = 145
//
//// Step 4: Transform 145: result is 42
//// Step 5: Transform 42: result is 20
//// Step 6: Transform 20: result is 4
//// Step 7: Transform 4: result is 16
//// Step 8: Transform 16: result is 37
//// Step 9: Transform 37: result is 58
//// Step 10: Transform 58: result is 89
//
//// 89 was the result of step 2: it's a loop
//// The algorithm stops at step 10: 67 is not a Happy number
//
//happyAlgorithm(1) ➞ "HAPPY 1"
//
//// Step 1: Transform 1
//// 1² = 1
//
//// The algorithm stops at step 1: 1 is a Happy number
//
//happyAlgorithm(89) ➞ "SAD 8"
//
//// Step 1: Transform 89: result is 145
//// Step 2: Transform 145: result is 42
//// Step 3: Transform 42: result is 20
//// Step 4: Transform 20: result is 4
//// Step 5: Transform 4: result is 16
//// Step 6: Transform 16: result is 37
//// Step 7: Transform 37: result is 58
//// Step 8: Transform 58: result is 89
//
//// 89 was the original number: it's a loop
//// The algorithm stops at step 8: 89 is not a Happy number
//Notes
//The transformation of a single-digit number is, trivially, the square of the digit (see example #3).
//If the given number is 1, a step is needed to establish if it's Happy (see example #3).
//To establish if a number is not happy, you have to find the number of steps necessary to obtain again a number already found (it can be a number obtained through a transformation as in example #2 or the same given number as in example #4).
//You can expect only positive integers as input, without exceptions to handle.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(happyAlgorithm(139), "HAPPY 5", "Example #1")
//Test.assertEquals(happyAlgorithm(67), "SAD 10", "Example #2")
//Test.assertEquals(happyAlgorithm(1), "HAPPY 1", "Example #3")
//Test.assertEquals(happyAlgorithm(44), "HAPPY 4")
//Test.assertEquals(happyAlgorithm(89), "SAD 8")
//Test.assertEquals(happyAlgorithm(10), "HAPPY 1")
//Test.assertEquals(happyAlgorithm(1327), "SAD 17")
//Test.assertEquals(happyAlgorithm(2871), "SAD 17")
//Test.assertEquals(happyAlgorithm(3970), "HAPPY 6")
//Test.assertEquals(happyAlgorithm(5209), "SAD 11")
//Test.assertEquals(happyAlgorithm(6329), "HAPPY 3")
//Test.assertEquals(happyAlgorithm(8888), "SAD 12")
//Test.assertEquals(happyAlgorithm(9331), "HAPPY 2")
//Test.assertEquals(happyAlgorithm(10000), "HAPPY 1")

