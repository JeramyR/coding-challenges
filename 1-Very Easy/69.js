

//title: Convert Kilometers to Miles

//tags: language_fundamentals,math,numbers

//url: https://edabit.com/challenge/G6iPEYEesayG5eko8

//Description:
//In this challenge, you have to implement a function that returns the given distance kilometers converted into miles. You have to round the result up to the fifth decimal digit.
//Examples
//kmtomiles(2) ➞ 1.24274
//
//kmtomiles(6) ➞ 3.72823
//
//kmtomiles(8) ➞ 4.97097
//Notes
//1 kilometer = 0.621371 miles.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(kmtomiles(2), 1.24274)
//Test.assertEquals(kmtomiles(6), 3.72823)
//Test.assertEquals(kmtomiles(8), 4.97097)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Summing the Squares

//tags: language_fundamentals,loops,math,numbers

//url: https://edabit.com/challenge/ip7xupP78R5z5mTmT

//Description:
//Create a function that takes a number n and returns the sum of all square numbers up to and including n.
//squaresSum(3) ➞ 14
//// 1² + 2² + 3² =
//// 1 + 4 + 9 =
//// 14 
//Examples
//squaresSum(3) ➞ 14
//
//squaresSum(12) ➞ 650
//
//squaresSum(13) ➞ 819
//Notes
//Remember that n is included in the total.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(squaresSum(1), 1)
//Test.assertEquals(squaresSum(2), 5)
//Test.assertEquals(squaresSum(3), 14)
//Test.assertEquals(squaresSum(4), 30)
//Test.assertEquals(squaresSum(5), 55)
//Test.assertEquals(squaresSum(6), 91)
//Test.assertEquals(squaresSum(7), 140)
//Test.assertEquals(squaresSum(8), 204)
//Test.assertEquals(squaresSum(9), 285)
//Test.assertEquals(squaresSum(10), 385)
//Test.assertEquals(squaresSum(11), 506)
//Test.assertEquals(squaresSum(12), 650)
//Test.assertEquals(squaresSum(13), 819)
//Test.assertEquals(squaresSum(14), 1015)
//Test.assertEquals(squaresSum(15), 1240)
//Test.assertEquals(squaresSum(16), 1496)
//Test.assertEquals(squaresSum(17), 1785)
//Test.assertEquals(squaresSum(18), 2109)
//Test.assertEquals(squaresSum(19), 2470)
//Test.assertEquals(squaresSum(20), 2870)
//Test.assertEquals(squaresSum(21), 3311)
//Test.assertEquals(squaresSum(22), 3795)
//Test.assertEquals(squaresSum(23), 4324)
//Test.assertEquals(squaresSum(24), 4900)
//Test.assertEquals(squaresSum(25), 5525)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Filter Strings from Array

//tags: arrays,conditions,loops,strings

//url: https://edabit.com/challenge/XKX5NHT92okxXCKW7

//Description:
//Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.
//Examples
//filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]
//
//filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) ➞ [0, 1729]
//
//filterArray(["Nothing", "here"]) ➞ []
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(filterArray([1, 2, 3, "a", "b", 4]), [1, 2, 3, 4])
//Test.assertSimilar(filterArray(["A", 1, "&amp", 0, -9, "Edabit"]), [1, 0, -9])
//Test.assertSimilar(filterArray(["Nothing", "here"]),[])
//Test.assertSimilar(filterArray([1, 2, 3, 3.5 , "a", "b", 4 , 5.8 , 6]), [1, 2, 3, 4 , 6])

