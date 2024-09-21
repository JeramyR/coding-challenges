

//title: Absolute Sum

//tags: arrays,loops,math,numbers

//url: https://edabit.com/challenge/rCmEy2AQYLbRGgKyL

//Description:
//Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.
//Examples
//getAbsSum([2, -1, 4, 8, 10]) ➞ 25
//
//getAbsSum([-3, -4, -10, -2, -3]) ➞ 22
//
//getAbsSum([2, 4, 6, 8, 10]) ➞ 30
//
//getAbsSum([-1]) ➞ 1
//Notes
//The term "absolute value" means to remove any negative sign in front of a number, and to think of all numbers as positive (or zero).
//All the elements in the given array are integers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(getAbsSum([2, -1, -3, 4, 8]), 18);
//Test.assertEquals(getAbsSum([-1]), 1);
//Test.assertEquals(getAbsSum([-1, -3, -5, -4, -10, 0]), 23);
//Test.assertEquals(getAbsSum([8, 9, 10, 32, 101, -10]), 170);
//Test.assertEquals(getAbsSum([500]), 500);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: Factorials

//tags: numbers,recursion

//url: https://edabit.com/challenge/rgXMMHEmbh2MCKSrM

//Description:
//Write a function that calculates the factorial of a number recursively.
//Examples
//factorial(5) ➞ 120
//
//factorial(3) ➞ 6
//
//factorial(1) ➞ 1
//
//factorial(0) ➞ 1
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(factorial(5), 120)
//Test.assertEquals(factorial(3), 6)
//Test.assertEquals(factorial(1), 1)
//Test.assertEquals(factorial(0), 1)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sort Numbers in Ascending Order

//tags: arrays,numbers,sorting

//url: https://edabit.com/challenge/SS23vniCZ6ssGwsQP

//Description:
//Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).
//Sort numbers array in ascending order.
//If the function's argument is null, an empty array, or undefined; return an empty array.
//Return a new array of sorted numbers.
//Examples
//sortNumsAscending([1, 2, 10, 50, 5]) ➞ [1, 2, 5, 10, 50]
//
//sortNumsAscending([80, 29, 4, -95, -24, 85]) ➞ [-95, -24, 4, 29, 80, 85]
//
//sortNumsAscending(null) ➞ []
//
//sortNumsAscending([]) ➞ []
//Notes
//Test input can be positive or negative.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(sortNumsAscending([1, 2, 10, 50, 5]), [1, 2, 5, 10, 50])
//Test.assertSimilar(sortNumsAscending([80, 29, 4, -95, -24, 85]), [-95, -24, 4, 29, 80, 85])
//Test.assertSimilar(sortNumsAscending(null), [])
//Test.assertSimilar(sortNumsAscending([]), [])
//Test.assertSimilar(sortNumsAscending([47, 51, -17, -16, 91, 47, -85, -8, -16, -27]), [-85, -27, -17, -16, -16, -8, 47, 47, 51, 91])
//Test.assertSimilar(sortNumsAscending([-51, -73, 65, 69, -76, 74, -14]), [-76, -73, -51, -14, 65, 69, 74])
//Test.assertSimilar(sortNumsAscending([45, 98, 35, 65, 97, 21, 33]), [21, 33, 35, 45, 65, 97, 98])
//Test.assertSimilar(sortNumsAscending([-23, -69, -54, -2, -32]), [-69, -54, -32, -23, -2])
//Test.assertSimilar(sortNumsAscending([-21, -9, -96]), [-96, -21, -9])
//Test.assertSimilar(sortNumsAscending([0]), [0])

