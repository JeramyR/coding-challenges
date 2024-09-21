

//title: Narcissistic Number

//tags: language_fundamentals,logic,math,numbers,validation

//url: https://edabit.com/challenge/pZ7fExda8gRF9YWku

//Description:
//A Narcissistic Number is a number that is the sum of its own digits each raised to the power of the number of digits.
//For example, take 153 (3 digits), which is narcisstic:
//1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
//1652 (4 digits), is non-narcisstic:
//1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
//Create a function that returns true or false depending upon whether the given number n is a Narcissistic number or not.
//Examples
//isNarcissistic(153) ➞ true
//
//isNarcissistic(370) ➞ true
//
//isNarcissistic(1652) ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isNarcissistic( 1 ), true, "1 is narcissistic")
//Test.assertEquals(isNarcissistic( 5 ), true, "5 is narcissistic")
//Test.assertEquals(isNarcissistic( 7 ), true, "7 is narcissistic")
//Test.assertEquals(isNarcissistic( 153 ), true, "153 is narcissistic")
//Test.assertEquals(isNarcissistic( 370 ), true, "370 is narcissistic")
//Test.assertEquals(isNarcissistic( 371 ), true, "371 is narcissistic")
//Test.assertEquals(isNarcissistic( 1634 ), true, "1634 is narcissistic")
//Test.assertEquals(isNarcissistic( 9004 ), false)
//Test.assertEquals(isNarcissistic( 2546 ), false)
//Test.assertEquals(isNarcissistic( 2124 ), false)
//Test.assertEquals(isNarcissistic( 8345 ), false)
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Largest Numbers

//tags: algorithms,arrays,conditions,numbers

//url: https://edabit.com/challenge/fzF6JqF7JjtJok9jY

//Description:
//Create a function that takes two arguments of an array of numbers arr and a constant number n and returns the n largest numbers from the given array.
//Examples
//largestNumbers(2, [4, 3, 2, 1]) ➞ [3, 4]
//
//largestNumbers(1, [7, 19, 4, 2]) ➞ [19]
//
//largestNumbers(3, [14, 12, 57, 11, 18, 16]) ➞ [16, 18, 57]
//
//largestNumbers(0, [1, 3, 4, 2]) ➞ []
//Notes
//The returned array must be sorted in ascending order.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(largestNumbers(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [9, 10])
//Test.assertSimilar(largestNumbers(3, [5, 1, 5, 2, 3, 1, 2, 3, 5]), [5, 5, 5])
//Test.assertSimilar(largestNumbers(7, [9, 1, 50, 22, 3, 13, 2, 63, 5]), [3, 5, 9, 13, 22, 50, 63])
//Test.assertSimilar(largestNumbers(0, [1, 2, 3, 4, 8, 7, 6, 5]), [])
//Test.assertSimilar(largestNumbers(2, [4, 3, 2, 1]), [3, 4])
//Test.assertSimilar(largestNumbers(1, [7, 19, 4, 2]), [19])
//Test.assertSimilar(largestNumbers(3, [14, 12, 57, 11, 18, 16]), [16, 18, 57])
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Factors of a Given Number

//tags: arrays,loops,math,numbers

//url: https://edabit.com/challenge/WR3Q72Jbv7Kyzu6AT

//Description:
//Create a function that finds each factor of a given number n. Your solution should return an array of the number(s) that meet this criteria.
//Examples
//findFactors(9) ➞ [1, 3, 9]
//// 9 has three factors 1, 3 and 9
//
//findFactors(12) ➞ [1, 2, 3, 4, 6, 12]
//
//findFactors(20) ➞ [1, 2, 4, 5, 10, 20]
//
//findFactors(0) ➞ []
//// 0 has no factors
//Notes
//Return an empty array if the given number is less than 1.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(findFactors(9), [1, 3, 9])
//Test.assertSimilar(findFactors(12), [1, 2, 3, 4, 6, 12])
//Test.assertSimilar(findFactors(20), [1, 2, 4, 5, 10, 20])
//Test.assertSimilar(findFactors(0), [])
//Test.assertSimilar(findFactors(100), [1, 2, 4, 5, 10, 20, 25, 50, 100])
//Test.assertSimilar(findFactors(999), [1, 3, 9, 27, 37, 111, 333, 999])
//Test.assertSimilar(findFactors(2226), [1, 2, 3, 6, 7, 14, 21, 42, 53, 106, 159, 318, 371, 742, 1113, 2226])

