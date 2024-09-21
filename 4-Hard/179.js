

//title: Minimum Swaps to Alternate a Binary String

//tags: loops,strings

//url: https://edabit.com/challenge/Wx5EF6o38tAY2stmh

//Description:
//Create a function that returns the minimum number of swaps it takes to transform a binary string into a string of alternating 0s and 1s. A swap is switching from a 0 to a 1 or vice versa.
//Examples
//minSwaps("010010111") ➞ 4
//
//// Two possible conversions:
////   1. "101010101" (4 swaps)
////   2. "010101010" (5 swaps)
//
//minSwaps("10101010") ➞ 0
//
//minSwaps("10010") ➞ 2
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(minSwaps("010010111"), 4)
//Test.assertEquals(minSwaps("010101010"), 0)
//Test.assertEquals(minSwaps("101010100"), 1)
//Test.assertEquals(minSwaps("101010000"), 2)
//Test.assertEquals(minSwaps("101000000"), 3)
//Test.assertEquals(minSwaps("10001"), 1)
//Test.assertEquals(minSwaps("10010"), 2)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Longest Range in the List (Casual Version)

//tags: arrays,conditions,sorting

//url: https://edabit.com/challenge/kDKgBie4ktG2Qf8R3

//Description:
//Given an array of integers, find the length of the longest range of consecutive integers that are contained in the sorted version of the array.
//Here's an illustrative example. Consider the array:
//[4, 9, 10, 5, 17, 3, 8, 11, 1, 12, 18, 20]
//... which, after sorting, becomes:
//[1, 3, 4, 5, 8, 9, 10, 11, 12, 17, 18, 20]
//The longest consecutive subsequence is now clearly [8, 9, 10, 11, 12], which has length 5.
//Examples
//maxConsec([4, 9, 10, 5, 17, 3, 8, 11, 1, 12, 18, 20]) ➞ 5
//// After sorting array becomes [1, 2, 4, 5, 8, 9, 10, 11, 12, 17, 18, 20]
//// Longest consecutive subsequence is [8, 9, 10, 11, 12], which has length 5
//
//maxConsec([14, 13, 7, 1, 4, 12, 3, 7, 7, 12, 11, 5, 7]) ➞ 4
//// After sorting get [1, 3, 4, 5, 7, 7, 7, 7, 11, 12, 12, 13, 14]
//// Longest consecutive subsequence is [11, 12, 13, 14], which has length 4
//
//maxConsec([13, 3, 8, 5, 5, 2, 13, 6, 14, 2, 11, 4, 10, 8, 1, 9]) ➞ 6
//// After sorting get [1, 2, 2, 3, 4, 5, 5, 6, 8, 8, 9, 10, 11, 13, 13, 14]
//// Longest consecutive subsequence is [1, 2, 3, 4, 5, 6], which has length 6
//Notes
//As in the 2nd and 3rd examples, the given array is allowed to include repeated elements, but such repetitions are ignored when finding the longest range of consecutive elements.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(maxConsec([4, 9, 10, 5, 17, 3, 8, 11, 1, 12, 18, 20]), 5);
//Test.assertSimilar(maxConsec([14, 13, 7, 1, 4, 12, 3, 7, 7, 12, 11, 5, 7]), 4);
//Test.assertSimilar(maxConsec([13, 3, 8, 5, 5, 2, 1, 13, 8, 6, 14, 2, 11, 4, 10, 8, 1, 10, 9]), 6);
//Test.assertSimilar(maxConsec([1, 4, 14, 9, 7, 9, 3, 13, 7, 4, 14, 11, 14, 8, 1, 11, 0, 1]), 3);
//Test.assertSimilar(maxConsec([2, 3, 7, 2, 14, 4, 7, 3, 10, 2, 8, 7, 14, 9, 5, 7, 3]), 4);
//Test.assertSimilar(maxConsec([1, 1, 14, 8, 11, 13, 0, 3, 9, 6, 11, 4, 10, 12, 5, 2, 13, 13, 10, 3, 7, 12, 14, 0, 0, 10, 6, 12]), 15);
//Test.assertSimilar(maxConsec([11, 10, 13, 6, 10, 14, 4, 0, 12, 9, 13, 2, 3, 13, 4, 3, 10]), 6);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Make a Number

//tags: arrays,loops,numbers

//url: https://edabit.com/challenge/AA5fY9AshyJkuPEMt

//Description:
//In this challenge, you have to find all the subsequences of consecutive numbers that, when their numbers are added between them, are equals to the given number.
//Given a positive integer n, implement a function that returns a matrix containing every sequence of consecutive numbers smaller than n, sorted ascendingly by their first term, whose sum is equal to n.
//Examples
//makeNumber(9) ➞ [ [2, 3, 4], [4, 5] ]
//
//makeNumber(8) ➞ []
//
//makeNumber(100) ➞ [ [9, 10, 11, 12, 13, 14, 15, 16], [18, 19, 20, 21, 22] ]
//Notes
//If no sequence sum is equal to the given n, return an empty array (see example #2).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(makeNumber(9), [[2,3,4], [4,5]], "Example #1")
//Test.assertSimilar(makeNumber(8), [], "Example #2")
//Test.assertSimilar(makeNumber(100), [[9,10,11,12,13,14,15,16], [18,19,20,21,22]], "Example #3")
//Test.assertSimilar(makeNumber(5), [[2,3]])
//Test.assertSimilar(makeNumber(18), [[3,4,5,6], [5,6,7]])
//Test.assertSimilar(makeNumber(40), [[6,7,8,9,10]])
//Test.assertSimilar(makeNumber(1), [])
//Test.assertSimilar(makeNumber(3), [[1, 2]])
//Test.assertSimilar(makeNumber(333), [
//  [
//    10, 11, 12, 13, 14, 15, 16,
//    17, 18, 19, 20, 21, 22, 23,
//    24, 25, 26, 27
//  ],
//  [
//    33, 34, 35, 36, 37,
//    38, 39, 40, 41
//  ],
//  [ 53, 54, 55, 56, 57, 58 ],
//  [ 110, 111, 112 ],
//  [ 166, 167 ]
//])

