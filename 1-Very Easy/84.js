

//title: Array Index

//tags: arrays,functional_programming,language_fundamentals,loops

//url: https://edabit.com/challenge/xwNSxpGzwRh3brHQf

//Description:
//Given a 2D-list of letters arr and a list of indexes idx, find the letters on given indexes and return as a string.
//arr = [
//  ["m", "u", "b"],
//  ["a", "s", "h"],
//  ["i", "r", "1"]
//]
//
//idx = [1, 3, 5, 8]
//You have to find the characters in these indexes of the given list if you think of the indexes as:
//[
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
//]
//arrIndex(lst, idx) ➞ "mbsr"
//Notes
//Remember that the indexes start from one and not zero.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//results1 = arrIndex([['m', 'u', 'b'], ['a', 's', 'h'], ['i', 'r', '1']],  [1, 3, 5, 8])
//Test.assertEquals(results1, 'mbsr')
//results1 = arrIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 2, 3, 4, 5, 6, 7, 8, 9])
//Test.assertEquals(results1, 'myexample')
//results2 = arrIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 5, 6])
//Test.assertEquals(results2, 'mam')
//results3 = arrIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 3, 7, 8])
//Test.assertEquals(results3, 'mepl')
////Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Learn Lodash: isEqual, Check if Two Items Are Equal

//tags: objects

//url: https://edabit.com/challenge/CqnX6mDnFG9tK4Xj2

//Description:
//Write your own version of the lodash _.isEqual function using vanilla JavaScript (so, no external libraries - namely, lodash; don't import it). isEqual performs a deep comparison between two values to determine if they are equal. You can use it to compare arrays, booleans, dates, objects, sets, regexs, and typed arrays.
//This is used as a helper function for many more advanced lodash functions in instances where comparison between objects or arrays is needed, but regular JavaScript comparison is too strict.
//Arguments
//value (can be anything): The first value to compare.
//other (can be anything): The other value to compare against.
//returns: (boolean): Returns true if they are the same, otherwise false.
//Examples
//const objects =
//var object = { "a": 1 }
//var other = { "a": 1 }
//isEqual(object, other)
//returns true
//object === other
//returns false
//Notes
//Do not attempt to import lodash; you are simply writing your own version.
//This entire series of challenges can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const _ = require("lodash")
//​
//const cars = [
//  { make: "mazda", year: 2020, color: "red", isUsed: false },
//  { make: "mazda", year: 2020, color: "red", isUsed: false },
//  { make: "mazda", year: 2018, color: "blue", isUsed: true },
//  { make: "toyota", year: 2018, color: "blue", isUsed: true },
//  { make: "toyota", year: 2017, color: "grey", isUsed: true },
//  { make: "ford", year: 2017, color: "grey", isUsed: true },
//  { make: "for", year: 2020, color: "red", isUsed: false },
//];
//const carsAsObject = {
//  stall1: { make: "mazda", year: 2020, color: "red", isUsed: false },
//  stall2: { make: "mazda", year: 2020, color: "red", isUsed: false },
//  stall3: { make: "mazda", year: 2018, color: "blue", isUsed: true },
//  stall4: { make: "toyota", year: 2018, color: "blue", isUsed: true },
//  stall5: { make: "toyota", year: 2017, color: "grey", isUsed: true },
//  stall6: { make: "ford", year: 2017, color: "grey", isUsed: true },
//  stall7: { make: "for", year: 2020, color: "red", isUsed: false },
//};
//​
//// Lodash Tests
//Test.assertSimilar(_.isEqual(cars[0], cars[1]), isEqual_myVersion(cars[0], cars[1]));
//Test.assertSimilar(_.isEqual(cars[0], cars[2]), isEqual_myVersion(cars[0], cars[2]));
//Test.assertSimilar(_.isEqual(cars, Object.values(carsAsObject)), isEqual_myVersion(cars, Object.values(carsAsObject)));

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Simple Letters

//tags: language_fundamentals,logic,sorting,strings

//url: https://edabit.com/challenge/QsNu3W2JMekxiApxH

//Description:
//Create a function that takes two lowercase strings str1 and str2 of letters from a to z and returns the sorted and longest string containing distinct letters.
//Examples
//str1 = "mubashir"
//str2 = "edabit"
//
//longestString(str1, str2) ➞ "abdehimrstu"
//// Contains sorted and distinct letters of the given strings.
//
//str1 = "abcdefghijklmnopqrstuvwxyz"
//str2 = "abcdefghijklmnopqrstuvwxyz"
//
//longestString(str1, str2) ➞ "abcdefghijklmnopqrstuvwxyz"
//// Contains sorted and distinct letters of the given strings.
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(longestString("mubashir", "edabit"), "abdehimrstu")
//Test.assertEquals(longestString("pakistan", "airforce"), "acefiknoprst")
//Test.assertEquals(longestString("", "e"), "e")
//Test.assertEquals(longestString("", ""), "")
//Test.assertEquals(longestString("noooo", "yesssss"), "enosy")
//Test.assertEquals(longestString("aretheyhere", "yestheyarehere"), "aehrsty")
//Test.assertEquals(longestString("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
//Test.assertEquals(longestString("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
//Test.assertEquals(longestString("lordsofthefallen", "gamekult"), "adefghklmnorstu")
//// Mubashir

