

//title: Anti Array

//tags: arrays,loops,validation

//url: https://edabit.com/challenge/ci4pyupzxrJmZydJ5

//Description:
//Given two arrays, return whether the two arrays are opposites of each other. That means both arrays are comprised only from elements a and b and the occurrences of these elements are swapped between the two arrays.
//Examples
//isAntiArray(["1", "0", "0", "1"], ["0", "1", "1", "0"]) ➞ true
//
//isAntiArray(["apples", "bananas", "bananas"], ["bananas", "apples", "apples"]) ➞ true
//
//isAntiArray([3.14, true, 3.14], [3.14, false, 3.14]) ➞ false
//Notes
//All tests will include only two different elements.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isAntiArray(["1", "0", "0", "1"], ["0", "1", "1", "0"]), true)
//Test.assertEquals(isAntiArray(["apples", "bananas", "bananas"], ["bananas", "apples", "apples"]), true)
//Test.assertEquals(isAntiArray([3.14, true, 3.14], [3.14, false, 3.14]), false)
//Test.assertEquals(isAntiArray([6.28, true, 6.28], [true, false, true]), false)
//Test.assertEquals(isAntiArray(['int', 'str'], ['str', 'int']), true)
//Test.assertEquals(isAntiArray([3.14, true, 3.14], [3.14, true, 3.14]), false)
//Test.assertEquals(isAntiArray([121, 'float', 'float', 'float', 121, 'float'], ['float', 121, 121, 121, 'float', 121]), true)
//​
//​
//// From Joshua Señoron's python challenge

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Tallest Skyscraper

//tags: arrays,higher_order_functions

//url: https://edabit.com/challenge/bJJTkKdyBwxWy4J3o

//Description:
//A city skyline can be represented as a 2-D array with 1s representing buildings. In the example below, the height of the tallest building is 4 (second-most right column).
//[[0, 0, 0, 0, 0, 0],
//[0, 0, 0, 0, 1, 0],
//[0, 0, 1, 0, 1, 0],
//[0, 1, 1, 1, 1, 0],
//[1, 1, 1, 1, 1, 1]]
//Create a function that takes a skyline (2-D array of 0's and 1's) and returns the height of the tallest skyscraper.
//Examples
//tallestSkyscraper([
//  [0, 0, 0, 0],
//  [0, 1, 0, 0],
//  [0, 1, 1, 0],
//  [1, 1, 1, 1]
//]) ➞ 3
//
//tallestSkyscraper([
//  [0, 1, 0, 0],
//  [0, 1, 0, 0],
//  [0, 1, 1, 0],
//  [1, 1, 1, 1]
//]) ➞ 4
//
//tallestSkyscraper([
//  [0, 0, 0, 0],
//  [0, 0, 0, 0],
//  [1, 1, 1, 0],
//  [1, 1, 1, 1]
//]) ➞ 2
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(tallestSkyscraper([
//  [0, 0, 0, 0],
//  [0, 1, 0, 0],
//  [0, 1, 1, 0],
//  [1, 1, 1, 1]
//]), 3)
//​
//Test.assertSimilar(tallestSkyscraper([
//  [0, 1, 0, 0],
//  [0, 1, 0, 0],
//  [0, 1, 1, 0],
//  [1, 1, 1, 1]
//]), 4)
//​
//Test.assertSimilar(tallestSkyscraper([
//  [0, 0, 0, 0],
//  [0, 0, 0, 0],
//  [1, 1, 1, 0],
//  [1, 1, 1, 1]
//]), 2)
//​
//Test.assertSimilar(tallestSkyscraper([
//  [0, 0, 0, 1],
//  [0, 0, 0, 1],
//  [1, 1, 1, 1],

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Matrix Transpose

//tags: arrays,math

//url: https://edabit.com/challenge/6xWP2WqWrhjbu2ZyG

//Description:
//Create a function that transposes a 2D matrix.
//Examples
//transposeMatrix([
//  [1, 1, 1],
//  [2, 2, 2],
//  [3, 3, 3]
//]) ➞ [
//  [1, 2, 3],
//  [1, 2, 3],
//  [1, 2, 3]
//]
//
//transposeMatrix([
//  [5, 5],
//  [6, 7],
//  [9, 1]
//]) ➞ [
//  [5, 6, 9],
//  [5, 7, 1]
//]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(transposeMatrix([
//    [1, 1, 1], 
//    [2, 2, 2], 
//    [3, 3, 3]
//  ]),  ([
//    [1, 2, 3], 
//    [1, 2, 3], 
//    [1, 2, 3]
//  ]))
//  
//Test.assertSimilar(transposeMatrix([
//    [1, 1, 1], 
//    [2, 2, 2]
//  ]),  ([
//    [1, 2],
//    [1, 2],
//    [1, 2]
//  ]))
//  
//Test.assertSimilar(transposeMatrix([
//    [1, 2, 3, 4], 
//    [5, 6, 7, 8], 
//    [9, 10, 11, 12]
//  ]),  ([
//    [1, 5, 9],

