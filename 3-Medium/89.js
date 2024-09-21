

//title: Probabilities (Part 1)

//tags: arrays,math

//url: https://edabit.com/challenge/L98LmPEeY4LzpYF8i

//Description:
//Given an array of numbers and a value n, write a function that returns the probability of choosing a number greater than or equal to n from the array. The probability should be expressed as a percentage, rounded to one decimal place.
//Examples
//probability([5, 1, 8, 9], 6) ➞ 50.0
//
//probability([7, 4, 17, 14, 12, 3], 16) ➞ 16.7
//
//probability([4, 6, 2, 9, 15, 18, 8, 2, 10, 8], 6) ➞ 70.0
//Notes
//Precent probability of event = 100 * (num of favourable outcomes) / (total num of possible outcomes)
//The numbers in the array are uniformly distributed, and have an equal chance of being chosen.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(probability([14, 19, 2, 6], 12), 50.0)
//Test.assertEquals(probability([11, 10, 9, 18, 16, 18, 4, 3, 5], 13), 33.3)
//Test.assertEquals(probability([2, 13, 1, 11, 6, 9, 11, 14, 3], 15), 0.0)
//Test.assertEquals(probability([11, 6, 17, 2, 1, 16, 20, 15], 7), 62.5)
//Test.assertEquals(probability([12, 15, 12, 8, 20, 16, 1], 1), 100.0)
//Test.assertEquals(probability([15, 8, 12, 1, 11, 4], 4), 83.3)
//Test.assertEquals(probability([14, 11, 16, 3, 13, 14, 3], 8), 71.4)
//Test.assertEquals(probability([1, 4, 18, 19, 15, 3, 3, 11], 23), 0.0)
//Test.assertEquals(probability([9, 8, 17, 13, 17], 8), 100.0)
//Test.assertEquals(probability([4, 6, 2, 9, 15, 18, 8, 2, 10, 8], 6), 70.0)
//Test.assertEquals(probability([15, 4, 6, 11, 11, 17, 9, 16, 7, 4, 5, 10], 12), 25.0)
//Test.assertEquals(probability([7, 1, 5, 7, 15, 15, 16, 14], 2), 87.5)
//Test.assertEquals(probability([11, 4, 6, 7, 14, 4, 4], 8), 28.6)
//Test.assertEquals(probability([10, 10, 3, 18, 14, 1, 2, 19, 17, 2, 4, 11, 18, 6, 3], 11), 40.0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Flatten the Curve

//tags: arrays,language_fundamentals,numbers

//url: https://edabit.com/challenge/DhbRAw6so2nHJKcXP

//Description:
//Given an array of integers, replace every number with the mean of all numbers.
//Examples
//flattenCurve([1, 2, 3, 4, 5]) ➞ [3, 3, 3, 3, 3]
//
//flattenCurve([0, 0, 0, 2, 7, 3]) ➞ [2, 2, 2, 2, 2, 2]
//
//flattenCurve([4]) ➞ [4]
//
//flattenCurve([]) ➞ []
//Notes
//Round averages to 1 decimal point.
//Return an empty array if given an empty array (see example #4).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(flattenCurve([1, 2, 3, 4, 5]),  [3, 3, 3, 3, 3])
//Test.assertSimilar(flattenCurve([0, 0, 0, 2, 7, 3]), [2, 2, 2, 2, 2, 2])
//Test.assertSimilar(flattenCurve([4]), [4])
//Test.assertSimilar(flattenCurve([]), [])
//Test.assertSimilar(flattenCurve([7, 4, 2, 1]), [3.5, 3.5, 3.5, 3.5])
//Test.assertSimilar(flattenCurve([-13, 0, -18]), [-10.3, -10.3, -10.3])
//Test.assertSimilar(flattenCurve([24, 9, 18, -26, -4]), [4.2, 4.2, 4.2, 4.2, 4.2])
//Test.assertSimilar(flattenCurve([-16, -4, -8, 28, 26]), [5.2, 5.2, 5.2, 5.2, 5.2])
//Test.assertSimilar(flattenCurve([21, 2, 10]), [11.0, 11.0, 11.0])
//Test.assertSimilar(flattenCurve([-19, 4, -21, -23, -25, 23, -4]), [-9.3, -9.3, -9.3, -9.3, -9.3, -9.3, -9.3])
//Test.assertSimilar(flattenCurve([-19, 20]), [0.5, 0.5])
//Test.assertSimilar(flattenCurve([1, -24, 19]), [-1.3, -1.3, -1.3])
//Test.assertSimilar(flattenCurve([6, -8, -12, 12, 22, 26, -9, 8, 27, 13]), [8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5])
//Test.assertSimilar(flattenCurve([-7, -4]), [-5.5, -5.5])
//Test.assertSimilar(flattenCurve([23, -13, -13, -15, 13]), [-1.0, -1.0, -1.0, -1.0, -1.0])
//Test.assertSimilar(flattenCurve([22, -12, 0, -19, 2, 17, -11, 6]), [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6])
//Test.assertSimilar(flattenCurve([-18, -1, 28, -29, -7, 12, -11]), [-3.7, -3.7, -3.7, -3.7, -3.7, -3.7, -3.7])
//Test.assertSimilar(flattenCurve([-7, 13, 18]), [8.0, 8.0, 8.0])
//Test.assertSimilar(flattenCurve([-19, 29, -15, 30, -17]), [1.6, 1.6, 1.6, 1.6, 1.6])
//Test.assertSimilar(flattenCurve([26, -15, 4, -7, 30, 25, -16, -10, -15]), [2.4, 2.4, 2.4, 2.4, 2.4, 2.4, 2.4, 2.4, 2.4])
//Test.assertSimilar(flattenCurve([-24, 19, -25, -2, 12, 22, -3, 8, 29]), [4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0])
//Test.assertSimilar(flattenCurve([-10, 23, -4, -29, -3, -17, -17, 18]), [-4.9, -4.9, -4.9, -4.9, -4.9, -4.9, -4.9, -4.9])
//Test.assertSimilar(flattenCurve([2, -13, -20, -25, 24, -18, -30, -4, 14, -21]), [-9.1, -9.1, -9.1, -9.1, -9.1, -9.1, -9.1, -9.1, -9.1, -9.1])
//Test.assertSimilar(flattenCurve([-10, 26, 14, 1, 14, -8, 3, -19]), [2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6])
//Test.assertSimilar(flattenCurve([8, -16, 28, 8, 16, 30, -4]), [10.0, 10.0, 10.0, 10.0, 10.0, 10.0, 10.0])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sum of Odd and Even Numbers

//tags: arrays,data_structures,higher_order_functions,math

//url: https://edabit.com/challenge/EY4nTmp6SbAmtJz5C

//Description:
//Write a function that takes an array of numbers and returns an array with two elements:
//The first element should be the sum of all even numbers in the array.
//The second element should be the sum of all odd numbers in the array.
//Example
//sumOddAndEven([1, 2, 3, 4, 5, 6]) ➞ [12, 9]
//// 2 + 4 + 6 = 12 and 1 + 3 + 5 = 9
//
//sumOddAndEven([-1, -2, -3, -4, -5, -6]) ➞ [-12, -9])
//
//sumOddAndEven([0, 0]) ➞ [0, 0])
//Notes
//Count 0 as an even number.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(sumOddAndEven([1, 2, 3, 4, 5, 6]), [12, 9])
//Test.assertSimilar(sumOddAndEven([-1, -2, -3, -4, -5, -6]), [-12, -9])
//Test.assertSimilar(sumOddAndEven([0, 0]), [0, 0])
//Test.assertSimilar(sumOddAndEven([]), [0, 0])

