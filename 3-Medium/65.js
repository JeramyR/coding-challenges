

//title: Check if One Array is a Subset of Another

//tags: arrays,logic,validation

//url: https://edabit.com/challenge/m8L8PgCTxAbBbnuYf

//Description:
//Array A is contained inside array B if each element in A also exists in B.
//The number of times a number is present doesn't matter. In other words, if we transformed both arrays into sets, A would be a subset of B.
//A = [3, 3, 9, 9, 9, 5]
//B = [1, 3, 9, 5, 8, 44, 44]
//
//A_Set = [3, 9, 5]
//B_Set = [1, 3, 9, 5, 8, 44]
//
//// A_Set is a subset of B_Set
//Create a function that determines if the first array is a subset of the second.
//Examples
//subset([1, 3], [1, 3, 3, 5]) ➞ true
//
//subset([4, 8, 7], [7, 4, 4, 4, 9, 8]) ➞ true
//
//subset([1, 3], [1, 33]) ➞ false
//
//subset([1, 3, 10], [10, 8, 8, 8]) ➞ false
//Notes
//Each input array will have at least one element.
//Check the resources tab for a hint.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(subset([1, 3], [1, 3, 3, 5]), true)
//Test.assertEquals(subset([4, 8, 7], [7, 4, 4, 4, 9, 8]), true)
//Test.assertEquals(subset([1, 3], [1, 33]), false)
//Test.assertEquals(subset([1, 3, 10], [10, 8, 8, 8]), false)
//Test.assertEquals(subset([5, 9, 13], [13, 9, 5]), true)
//Test.assertEquals(subset([5, 9, 13], [13, 9, 5, 1, 1, 1]), true)
//Test.assertEquals(subset([5, 9, 13], [13, 5, 1, 1, 1]), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Inclusive Array Ranges

//tags: arrays,math,numbers

//url: https://edabit.com/challenge/5sdtyMNdLw2FK4fHp

//Description:
//Write a function that, given the start startNum and end endNum values, return an array containing all the numbers inclusive to that range. See examples below.
//Examples
//inclusiveArray(1, 5) ➞ [1, 2, 3, 4, 5]
//
//inclusiveArray(2, 8) ➞ [2, 3, 4, 5, 6, 7, 8]
//
//inclusiveArray(10, 20) ➞ [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
//
//inclusiveArray(17, 5) ➞ [17]
//Notes
//The numbers in the array are sorted in ascending order.
//If startNum is greater than endNum, return an array with the higher value. See example #4.
//A recursive version of this challenge can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [actual, expected] = [
//  [[1, 5], [2, 8], [10, 20], [17, 5], [40, 50], [1, 41], [24, 17], [11, 66], [9, 3], [6, 16]],
//  [[1, 2, 3, 4, 5],
//  [2, 3, 4, 5, 6, 7, 8],
//  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//  [17],
//  [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
//  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41],
//  [24],
//  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66],
//  [9],
//  [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
//]
//for (let i in actual) Test.assertSimilar(inclusiveArray(...actual[i]), expected[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Virtual DAC

//tags: functional_programming

//url: https://edabit.com/challenge/zif8ugd3u2zHjMhsY

//Description:
//In electronics, a digital-to-analog converter (DAC, D/A, or D-to-A) is a system that converts a binary representation of that signal into an analog output. An 8 bit converter can represent a maximum of 2^8 different values, with each successive value differing by 1/256 of the full scale value, this becomes the system resolution and would be approximately 0.25% of the full range.
//Create a function that takes a binary output reading and returns the analog voltage level that would create that DAC reading.
//While value range is 0-1023, reference range is 0-5.00 volts. Value and reference is directly proportional.
//This DAC has 10 bits of resolution and the DAC reference is at 5.00 volts.
//Examples
//adc(0) ➞ 0
//
//adc(1023) ➞ 5
//
//adc(500) ➞ 2.44
//
//adc(400) ➞ 1.96
//Notes
//You should return your value rounded to two decimal places.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(adc(1023), 5)
//Test.assertEquals(adc(0), 0)
//Test.assertEquals(adc(500), 2.44)
//Test.assertEquals(adc(400), 1.96)
//Test.assertEquals(adc(850), 4.15)

