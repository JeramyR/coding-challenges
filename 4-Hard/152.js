

//title: Replace With Next Largest Number

//tags: arrays,loops

//url: https://edabit.com/challenge/yiHtvXv97xLcw7LQh

//Description:
//Write a function that replaces each integer with the next largest in the array.
//Examples
//replaceNextLargest([5, 7, 3, 2, 8]) ➞ [7, 8, 5, 3, -1]
//
//replaceNextLargest([2, 3, 4, 5]) ➞ [3, 4, 5, -1]
//
//replaceNextLargest([1, 0, -1, 8, -72]) ➞ [8, 1, 0, -1, -1]
//Notes
//Replace the maximum with -1.
//Elements in the array will be unique.
//You don't have to swap the elements.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(replaceNextLargest([5, 7, 3, 2, 8]), [7, 8, 5, 3, -1])
//Test.assertSimilar(replaceNextLargest([4, 1, 6, -7, -8, 2]), [6, 2, -1, 1, -7, 4])
//Test.assertSimilar(replaceNextLargest([2, 3, 4, 5]), [3, 4, 5, -1])
//Test.assertSimilar(replaceNextLargest([1, 0, -1, 8, -72]), [8, 1, 0, -1, -1])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Shared Digits

//tags: arrays,strings,validation

//url: https://edabit.com/challenge/B5ReG5ZDAvAdsrztL

//Description:
//Create a function that returns true if each pair of adjacent numbers in an array shares at least one digit and false otherwise.
//Examples
//sharedDigits([33, 53, 6351, 12, 2242, 44]) ➞ true
//// 33 and 53 share 3, 53 and 6351 share 3 and 5, etc.
//
//sharedDigits([1, 11, 12, 13, 14, 15, 16]) ➞ true
//
//sharedDigits([33, 44, 55, 66, 77]) ➞ false
//
//sharedDigits([1, 12, 123, 1234, 1235, 6789]) ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sharedDigits([33, 53, 6351, 12, 2242, 44]), true)
//Test.assertEquals(sharedDigits([1, 11, 12, 13, 14, 15, 16]), true)
//Test.assertEquals(sharedDigits([33, 44, 55, 66, 77]), false)
//Test.assertEquals(sharedDigits([1, 12, 123, 1234, 1235, 6789]), false)
//Test.assertEquals(sharedDigits([5789, 798, 98, 995, 599, 699]), true)
//Test.assertEquals(sharedDigits([5, 4, 44, 444]), false)
//Test.assertEquals(sharedDigits([5, 65, 66, 76, 78]), true)
//Test.assertEquals(sharedDigits([5, 55, 665, 66665555, 65, 66, 76, 78, 989]), true)
//Test.assertEquals(sharedDigits([5, 55, 665, 4444, 65, 66, 76, 78, 989]), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Diagonal Domination

//tags: arrays,language_fundamentals,math,validation

//url: https://edabit.com/challenge/S9HptB3GL3whj8xhQ

//Description:
//A square matrix (same number of rows as columns) is called row diagonally dominant if "the absolute value of each entry in the main diagonal is strictly larger than the sum of the absolute values of the other entries in that row".
//To illustrate ...
//[
//  [10, 3, 6],
//  [2, -9, -6],
//  [1, -1, 4]
//]
//The absolute values from top left to bottom right are:
//10 = First item of first row.
//9 = Second item of second row.
//4 = Third item of third row.
//... making a row diagonal dominant total of 23.
//In the first row ...
//The value of the row diagonal dominant is 10.
//The sum of the other absolute values are 3 and 6 make a total of 9.
//... so far, the matrix is row diagonally dominant, since 10 > 9.
//In the second row ...
//The value of the row diagonal dominant is 9.
//The sum of the other absolute values in the second row are 3 and 6 which make a total of 9.
//... meaning the matrix is not row diagonally dominant since 9 <= 9.
//[
//  [10, 3, 6],
//  [3, -9, -6],
//  [1, -1,  4]
//]
//For a square to be row diagonally dominant, all of the rows in the square have to be like Row 1.
//Write a function that determines if a given square matrix is row diagonally dominant.
//Examples
//diagDom([
//  [2, -1],
//  [-1, 2]
//]) ➞ true
//
//diagDom([
//  [0, 1],
//  [1, 0]
//]) ➞ false
//
//diagDom([
//  [10, 3, 6],
//  [2, -9, -6],
//  [1, -1, 4]
//]) ➞ true
//
//diagDom([
//  [10, 3, 6],
//  [4, -9, -6],
//  [1, -1, 4]
//]) ➞ false
//Notes
//As in the examples, the size of the matrices will change, but they will always be square.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(diagDom([
//  [2, -1],
//  [-1, 2]
//]), true)
//​
//Test.assertEquals(diagDom([
//  [0, 1],
//  [1, 0]
//]), false)
//​
//Test.assertEquals(diagDom([
//  [10,  3,  6],
//  [2, -9, -6],
//  [1, -1,  4]
//]), true)
//​
//Test.assertEquals(diagDom([
//  [10,  3,  6],
//  [3, -9, -6],
//  [1, -1,  4]
//]), false)
//​
//Test.assertEquals(diagDom([
//  [1, 0, 1, 0],
//  [0, 2, 0, 2],

