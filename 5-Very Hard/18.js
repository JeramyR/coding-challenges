

//title: Untouchable Numbers

//tags: algorithms,math,numbers

//url: https://edabit.com/challenge/MRJBdWsEubRSufbs7

//Description:
//A positive number greater than 1 can be defined untouchable when it's not equal to the sum of the proper divisors (called also aliquot sum) of any other positive number, in a range starting from 2 and ending with the square of the given number (bounds included).
//Given an integer number, implement a function that returns:
//true if the given number is untouchable.
//An array containing the numbers whose proper divisors sum is equal to the number, if the given number is not untouchable.
//A string "Invalid Input" if the given number is lower than 2.
//Examples
//isUntouchable(2) ➞ true
//// Range: 2 to 4
//// 2 = 1  |  3 = 1  |  4 = 1+2 = 3
//// No sum is equal to the given number
//
//isUntouchable(3) ➞ [4]
//// Range: 2 to 9
//// As in the example above, 4 = 1+2 = 3
//
//isUntouchable(6) ➞ [6, 25]
//// Range: 2 to 36
//// 6 = 1+2+3 = 6  |  25 = 1+5 = 6
//
//isUntouchable(1) ➞ "Invalid Input"
//// The given number is lower than 2
//Notes
//The proper divisors of a number are, merely, all its divisors less the number itself.
//More than a number can have a proper divisors sum equal to the given number, with given number included (see example #3).
//Trivia: As far as we know, numbers 2 and 5 are the only two primes present in the sequence, with 5 being the only odd number present; by the way, these two assertions are still unproofed.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isUntouchable(2), true, "Example #1")
//Test.assertSimilar(isUntouchable(3), [4], "Example #2")
//Test.assertSimilar(isUntouchable(6), [6, 25], "Example #3")
//Test.assertEquals(isUntouchable(1), "Invalid Input", "Example #4")
//Test.assertEquals(isUntouchable(5), true)
//Test.assertSimilar(isUntouchable(8), [10, 49])
//Test.assertEquals(isUntouchable(52), true)
//Test.assertSimilar(isUntouchable(30), [841])
//Test.assertEquals(isUntouchable(-10), "Invalid Input")
//Test.assertEquals(isUntouchable(188), true)
//Test.assertSimilar(isUntouchable(60), [3481])
//Test.assertSimilar(isUntouchable(100), [124, 194])
//Test.assertEquals(isUntouchable(120), true)
//Test.assertSimilar(isUntouchable(121), [243,  791, 1199, 1391, 1751, 1919, 2231, 2759, 3071, 3239, 3431, 3551, 3599])
//Test.assertEquals(isUntouchable(0), "Invalid Input")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Spotlight Map

//tags: algorithms,arrays,conditions,higher_order_functions

//url: https://edabit.com/challenge/ZkGDweXrsSaCfXGzq

//Description:
//Given a grid of numbers, return a grid of the Spotlight Sum of each number. The spotlight sum can be defined as the total of all numbers immediately surrounding the number on the grid, including the number in the total.
//Examples
//spotlightMap([
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
//]) ➞ [
//  [12, 21, 16],
//  [27, 45, 33],
//  [24, 39, 28]
//]
//
//
//spotlightMap([
//  [2, 6, 1, 3, 7],
//  [8, 5, 9, 4, 0]
//]) ➞ [
//  [21, 31, 28, 24, 14],
//  [21, 31, 28, 24, 14]
//]
//
//
//spotlightMap([[3]]) ➞ [[3]]
//Notes
//Note that all numbers have a spotlight sum, including numbers on the edges.
//All inputs will be valid grid (all rows will have the same length).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(spotlightMap([
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
//]), [
//  [12, 21, 16],
//  [27, 45, 33],
//  [24, 39, 28]
//])
//​
//Test.assertSimilar(spotlightMap([
//  [2, 6, 1, 3, 7],
//  [8, 5, 9, 4, 0]
//]), [
//  [21, 31, 28, 24, 14],
//  [21, 31, 28, 24, 14]
//])
//​
//Test.assertSimilar(spotlightMap([
//  [7, 8],
//  [3, 1],
//  [4, 2],
//  [0, 5],
//  [9, 6]
//]), [

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Number Pairs

//tags: arrays,numbers,strings

//url: https://edabit.com/challenge/fpHGmHoKX5RyD3wjQ

//Description:
//Create a function that determines how many number pairs are embedded in a space-separated string. The first numeric value in the space-separated string represents the count of the numbers, thus, excluded in the pairings.
//Examples
//number_pairs("7 1 2 1 2 1 3 2") ➞ 2
//// (1, 1), (2, 2)
//
//number_pairs("9 10 20 20 10 10 30 50 10 20") ➞ 3
//// (10, 10), (20, 20), (10, 10)
//
//number_pairs("4 2 3 4 1") ➞ 0
//// Although two 4's are present, the first one is discounted.
//Notes
//Always take into consideration the first number in the string is not part of the pairing, thus, the count. It may not seem so useful as most people see it, but it's mathematically significant if you deal with set operations.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let strVectors = ["7 1 2 1 2 1 3 2", "9 10 20 20 10 10 30 50 10 20", "4 2 3 4 1",
//                 "13 10 20 20 10 10 30 50 10 20 50 50 30 20", "10 1 2 5 6 5 2 1 7 8 1",
//                 "16 2 3 5 11 1 11 5 7 9 13 17 3 8 7 2 1", "6 1 2 2 4 3 4"]
//let numVectors = [2, 3, 0, 6, 3, 6, 2]
//​
//for (let i in strVectors)
//  Test.assertEquals(numberPairs(strVectors[i]), numVectors[i])

