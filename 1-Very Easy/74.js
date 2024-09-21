

//title: Nothing is Nothing?

//tags: data_structures,language_fundamentals,validation

//url: https://edabit.com/challenge/ujAWXXe8Q7J6xjcTo

//Description:
//Given any number of parameters, return true if none of the arguments are falsy.
//Examples
//nothingIsNothing(0, false, undefined, null) ➞ false
//
//nothingIsNothing(33, "Hello",  true,  []) ➞ true
//
//nothingIsNothing(true, false) ➞ false
//Notes
//You'll have to figure out a way to access the arguments

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(nothingIsNothing(0, false, [], {}), false)
//Test.assertEquals(nothingIsNothing(33, 'Hello', (true, true, 3)), true)
//Test.assertEquals(nothingIsNothing(true, null), false)
//Test.assertEquals(nothingIsNothing(null, null), false)
//Test.assertEquals(nothingIsNothing(221), true)
//Test.assertEquals(nothingIsNothing(221, 0, 0, 0), false)
//Test.assertEquals(nothingIsNothing([221, 0, 0, 0]), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Designing Rugs

//tags: arrays,language_fundamentals,loops

//url: https://edabit.com/challenge/qWhoswdp35f8xzqGw

//Description:
//Write a function that accepts the width and height (m, n) and an optional proc s and generates an array with m elements. Each element is a string consisting of either:
//The default character (hash #) repeating n times (if no proc is given).
//The character passed in through the proc repeating n times.
//Examples
//makeRug(3, 5) ➞ [
//  "#####",
//  "#####",
//  "#####"
//]
//
//makeRug(3, 5, '$')  ➞ [
//  "$$$$$",
//  "$$$$$",
//  "$$$$$"
//]
//
//makeRug(2, 2, 'A')  ➞ [
//  "AA",
//  "AA"
//]
//Notes
//You can set a value for the parameter when creating the function e.g. function (x = 3)

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(makeRug(3, 5), [
//  "#####", 
//  "#####", 
//  "#####"
//])
//​
//Test.assertSimilar(makeRug(3, 5, '$'), [
//  "$$$$$", 
//  "$$$$$", 
//  "$$$$$"
//])
//​
//Test.assertSimilar(makeRug(2, 2, 'A'), [
//  "AA",
//  "AA"
//])
//​
//Test.assertSimilar(makeRug(3, 1, 'b'), [
//  "b", 
//  "b", 
//  "b"
//])
//​
//Test.assertSimilar(makeRug(2, 1, 'bcb'), [
//  "bcb", 

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Learn Lodash: _.fill, Fill an Array With New Values

//tags: arrays

//url: https://edabit.com/challenge/ado29iTz4EGfzY2EP

//Description:
//According to the lodash documentation, _.fill Fills elements of an array with the value from start to, but not including, end. Note that this method mutates the array.
//This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.
//Arguments
//array (Array): The array to fill.
//value (*): The value to fill array with.
//[start=0] (number): The start position.
//[end=array.length] (number): The end position.
//Returns
//(Array): Returns array.
//Examples
//var array = [1, 2, 3]
//
//fill(array, "a") ➞ ["a", "a", "a"]
//
//fill(Array(3), 2) ➞ [2, 2, 2]
//
//fill([4, 6, 8, 10], "*", 1, 3) ➞ [4, "*", "*", 10]
//Notes
//Do not attempt to import lodash; you are simply writing your own version.
//This entire series of challenges can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(fill([1, 2, 3], "a"), ["a", "a", "a"]);
//Test.assertSimilar(fill(Array(3), 2), [2, 2, 2]);
//Test.assertSimilar(fill([4, 6, 8, 10], "*", 1, 3), [4, "*", "*", 10]);
//Test.assertSimilar(
//  fill(
//    [
//      { make: "toyota", color: "red" },
//      { make: "ford", color: "blue" },
//      { make: "mazda", color: "grey" },
//      { make: "ford", color: "green" },
//    ],
//    "TRUCKS!",
//    1,
//    2
//  ),
//  [
//    {
//      make: "toyota",
//      color: "red",
//    },
//    "TRUCKS!",
//    {
//      make: "mazda",
//      color: "grey",
//    },

