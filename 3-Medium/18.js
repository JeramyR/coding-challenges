

//title: Special Arrays

//tags: arrays,conditions,higher_order_functions,loops,validation

//url: https://edabit.com/challenge/wikfKaQm3zP7buRA4

//Description:
//An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.
//Examples
//isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
//// Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]
//
//isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ➞ false
//// Index 2 has an odd number 9.
//
//isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) ➞ false
//// Index 3 has an even number 8.
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]), true)
//Test.assertEquals(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]), false)
//Test.assertEquals(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]), false)
//Test.assertEquals(isSpecialArray([1, 1, 1, 2]), false)
//Test.assertEquals(isSpecialArray([2, 2, 2, 2]), false)
//Test.assertEquals(isSpecialArray([2, 1, 2, 1]), true)
//Test.assertEquals(isSpecialArray([4, 5, 6, 7]), true)
//Test.assertEquals(isSpecialArray([4, 5, 6, 7, 0, 5]), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sum of Number Elements in an Array

//tags: algebra,arrays,conditions,validation

//url: https://edabit.com/challenge/PWqkt9HiLcJSr6QEY

//Description:
//Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.
//Examples
//numbersSum([1, 2, "13", "4", "645"]) ➞ 3
//
//numbersSum([true, false, "123", "75"]) ➞ 0
//
//numbersSum([1, 2, 3, 4, 5, true]) ➞ 15
//Notes
//Check the Resources tab for help.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(numbersSum([1, 2, "13", "4", "645"]), 3)
//Test.assertEquals(numbersSum([true, false, "123", "75"]), 0)
//Test.assertEquals(numbersSum([1, 2, 3, 4, 5, true]), 15)
//Test.assertEquals(numbersSum(["abcd", 1234, false, true, 564, "hii"]), 1798)
//Test.assertEquals(numbersSum(["abcd", "abc45", "assssd", true]), 0)
//Test.assertEquals(numbersSum([]), 0)
//Test.assertEquals(numbersSum(["cghyki", "cd", 12114, 786, true, "me", "bey"]), 12900)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Currying Functions

//tags: arrays,closures,functional_programming,interview,numbers

//url: https://edabit.com/challenge/eXAQtdbsfodHL59Jd

//Description:
//Mubashir was reading about currying functions. He needs your help to multiply an array of numbers using currying functions.
//Create a function which takes an array arr of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.
//The returned array should consist of each of the elements from the first array multiplied by the integer.
//Examples
//multiply([1, 2, 3])(2) ➞ [2, 4, 6]
//
//multiply([4, 6, 5])(10) ➞ [40, 60, 50]
//
//multiply([1, 2, 3])(0) ➞ [0, 0, 0]
//Notes
//Your function must be called multiply.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(multiply([1, 2, 3])(1), [1, 2, 3])
//Test.assertSimilar(multiply([1, 2, 3])(2), [2, 4, 6])
//Test.assertSimilar(multiply([1, 2, 3])(0), [0, 0, 0])
//Test.assertSimilar(multiply([4, 6, 5])(10), [40, 60, 50])
//Test.assertSimilar(multiply([])(10), [], "should return an empty array")
//// Mubashir

