

//title: Sum of Evenly Divisible Numbers from a Range

//tags: math,numbers

//url: https://edabit.com/challenge/LEPFNs6sgeAnJ7qqo

//Description:
//Create a function that takes three arguments a, b, c and returns the sum of the numbers that are evenly divided by c from the range a, b inclusive.
//Examples
//evenlyDivisible(1, 10, 20) ➞ 0
//// No number between 1 and 10 can be evenly divided by 20.
//
//evenlyDivisible(1, 10, 2) ➞ 30
//// 2 + 4 + 6 + 8 + 10 = 30
//
//evenlyDivisible(1, 10, 3) ➞ 18
//// 3 + 6 + 9 = 18
//Notes
//Return 0 if there is no number between a and b that can be evenly divided by c.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(evenlyDivisible(1, 10, 2), 30)
//Test.assertEquals(evenlyDivisible(1, 10, 3), 18)
//Test.assertEquals(evenlyDivisible(0, 12, 3), 30)
//Test.assertEquals(evenlyDivisible(-10, -1, 2), -30)
//Test.assertEquals(evenlyDivisible(-10, -1, 3), -18)
//Test.assertEquals(evenlyDivisible(1, 10, 20), 0)
//Test.assertEquals(evenlyDivisible(-10, 10, 2), 0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Automorphic Numbers

//tags: algebra,numbers,validation

//url: https://edabit.com/challenge/QXadaT8denMNXvn3t

//Description:
//A number n is automorphic if n^2 ends in n.
//For example: n=5, n^2=25
//Create a function that takes a number and returns true if the number is automorphic, false if it isn't.
//Examples
//isAutomorphic(5) ➞ true
//
//isAutomorphic(8) ➞ false
//
//isAutomorphic(76) ➞ true
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isAutomorphic(0), true)
//Test.assertEquals(isAutomorphic(1), true)
//Test.assertEquals(isAutomorphic(5), true)
//Test.assertEquals(isAutomorphic(6), true)
//Test.assertEquals(isAutomorphic(25), true)
//Test.assertEquals(isAutomorphic(76), true)
//Test.assertEquals(isAutomorphic(7109376), true)
//Test.assertEquals(isAutomorphic(36), false)
//Test.assertEquals(isAutomorphic(100), false)
//Test.assertEquals(isAutomorphic(11), false)
//Test.assertEquals(isAutomorphic(6025), false)
//Test.assertEquals(isAutomorphic(3), false)
//Test.assertEquals(isAutomorphic(1376), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Number of Arrays in an Array

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/TwJghdCGSbDywLZz7

//Description:
//Return the total number of arrays inside a given array.
//Examples
//numOfSubbarrays([[1, 2, 3]]) ➞ 1
//
//numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 3
//
//numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 4
//
//numOfSubbarrays([1, 2, 3]) ➞ 0
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]), 3)
//Test.assertEquals(numOfSubbarrays([[1, 2, 3]]), 1)
//Test.assertEquals(numOfSubbarrays([1, 2, 3]), 0)
//Test.assertEquals(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]), 4)

