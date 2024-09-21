

//title: Data Structures (1): Find Max of Sliding Window

//tags: arrays,data_structures,interview

//url: https://edabit.com/challenge/eiwM33xiRvWwpRZua

//Description:
//The sliding window is a technique used to simplify complex data problems. A window that slides over the data to examine different sections of it.
//Your challenge is to create a sliding window that traverses the array and returns the maximum value in each window.
//Arguments
//Array:The array over which you are traversing.
//windowLength: The length of the window you will be using to do the search.
//Returns Array: A new array containing the maximums for each window.
//You are given this array and a window length of 2.
//[4, 5, 6, 7, 8, 9]
//Our function would start by examining the first two elements of the array and pushes the max value to a new array.
//[**4, 5,** 6, 7, 8, 9]
//... then the window slides to examine the next two, in this case 5 and 6, and pushes the max value to the array.
//[4, **5, 6**, 7, 8, 9]
//The window will examine the entire length of the array until the maximums for each window have been added to the new array.
//Examples
//windowMaxes([1, 2, 3, 4, 3, 2, 1, 2, 5], 3) ➞ [3, 4, 4, 4, 3, 2, 5]
//Notes
//This is part of my Data Structures series. A collection of common coding interview challenges used to test ones understanding of data structures.
//This entire series of challenges can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(windowMaxes([4, 5, 6, 7, 8, 9], 2), [5, 6, 7, 8, 9])
//Test.assertSimilar(windowMaxes([1, 2, 3, 4, 3, 2, 1, 2, 5], 4), [4, 4, 4, 4, 3, 5])
//Test.assertSimilar(windowMaxes([1, 2, 3, 4, 3, 2, 1, 2, 5], 3), [3, 4, 4, 4, 3, 2, 5])
//Test.assertSimilar(windowMaxes([1, 2, 3, 4, 3, 2, 1, 2, 5], 5), [4, 4, 4, 4, 5])
//Test.assertSimilar(windowMaxes([1, 4, -2, -9, 5, 32, -89, 23, 43, 2, 75, 3, 12, -3], 6), [
//  32,
//  32,
//  32,
//  43,
//  43,
//  75,
//  75,
//  75,
//  75,
//])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Rotate a 2D Array 90 Degrees Clockwise

//tags: arrays

//url: https://edabit.com/challenge/8wBCSpjjEre5uksXT

//Description:
//Create a function that returns an 2D array where the elements have been rotated 90 degrees. The provided array will contain three elements, each being an array with three elements as unique integers.
//The desired output would return a new 2D array where the contents of the original array have been rotated 90 degrees clockwise. So row 1 from the original array becomes column 3 for the returned array, row 2 becomes column 2 and row 3 becomes column 1.
//Examples
//rotate([
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
//]) ➞ [
//  [7, 4, 1],
//  [8, 5, 2],
//  [9, 6, 3]
//]
//
//rotate([
//  ["a", "b", "c"],
//  ["d", "e", "f"],
//  ["g", "h", "i"]
//]) ➞ [
//  ["g", "d", "a"],
//  ["h", "e", "b"],
//  ["i", "f", "c"]
//]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [[7, 4, 1], [8, 5, 2], [9, 6, 3]])
//Test.assertSimilar(rotate([["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]]), [["g", "d", "a"], ["h", "e", "b"], ["i", "f", "c"]])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Wild Tiles

//tags: games,strings,validation

//url: https://edabit.com/challenge/2vmA8faDorenTwLf3

//Description:
//Write a function that returns true if it is possible to build a string with a particular scrabble hand.
//Examples
//canBuild("quavers", ["S", "U", "Q", "V", "A", "#", "#"]) ➞ true
//
//canBuild("move", ["M", "U", "T", "V", "E", "J", "#"]) ➞ true
//
//canBuild("move", ["M", "U", "T", "V", "E", "J", "S"]) ➞ false
//
//canBuild("sharp", ["S", "K", "H", "#", "#", "F", "F"]) ➞ false
//Notes
//Hashtags "#" represent wild tiles.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(canBuild("quavers", ["S", "U", "Q", "V", "A", "#", "#"]), true)
//Test.assertEquals(canBuild("move", ["M", "U", "T", "V", "E", "J", "#"]), true)
//Test.assertEquals(canBuild("banter", ["N", "E", "B", "N", "#", "A", "T"]), true)
//Test.assertEquals(canBuild("snake", ["S", "K", "E", "N", "V", "J", "A"]), true)
//Test.assertEquals(canBuild("move", ["M", "U", "T", "V", "E", "J", "S"]), false)
//Test.assertEquals(canBuild("sharp", ["S", "K", "H", "#", "#", "F", "F"]), false)
//Test.assertEquals(canBuild("more", ["M", "R", "I", "E", "U", "S", "F"]), false)
//Test.assertEquals(canBuild("talker", ["#", "#", "Z", "V", "P", "A", "K"]), false)
//Test.assertEquals(canBuild("talker", ["#", "#", "T", "T", "A", "A", "L"]), false)
//Test.assertEquals(canBuild("brain", ["#", "S", "B", "B", "I", "I", "#"]), false)

