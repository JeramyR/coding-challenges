

//title: Perfect Square Binomial

//tags: algebra,math

//url: https://edabit.com/challenge/YaQBTZztEjxuEzyxq

//Description:
//A perfect square binomial is a trinomial that when factored gives you the square of a binomial. For example, the trinomial x²+2x+1 is a perfect square binomial because it factors to (x+1)².
//Three integers (a, b, and c) are randomly (and independently) chosen between 1 and n (inclusive) where n is an integer greater than one. Create a function that takes a number n as an argument and returns the number of triplets (a, b, c) such that ax²+bx+c is a perfect square binomial.
//Examples
//perfectSquare(6) ➞ 3
//
//perfectSquare(30) ➞ 21
//
//perfectSquare(100) ➞ 81
//Notes
//Trinomials like 2x²+4x+2=2(x+1)² are not considered to be perfect square binomials but trinomials like 4x²+8x+4=(2x+2)² are (in this challenge).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(perfectSquare(6), 3)
//Test.assertEquals(perfectSquare(30), 21)
//Test.assertEquals(perfectSquare(100), 81)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Exponential Fibonacci

//tags: loops,math

//url: https://edabit.com/challenge/DdwAwqsLLQnKhQQjk

//Description:
//Write a function that efficiently calculates Fibonacci terms.
//Examples
//fibonacci(1) ➞ 1
//
//fibonacci(2) ➞ 1
//
//fibonacci(4) ➞ 3
//
//fibonacci(64) ➞ 10610209857723
//Notes
//The input will always be a power of two.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(fibonacci(1), 1)
//Test.assertEquals(fibonacci(2), 1)
//Test.assertEquals(fibonacci(4), 3)
//Test.assertEquals(fibonacci(8), 21)
//Test.assertEquals(fibonacci(16), 987)
//Test.assertEquals(fibonacci(32), 2178309)
//Test.assertEquals(fibonacci(64), 10610209857723)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Learn Lodash: _.pull, Pull Items From an Array

//tags: arrays

//url: https://edabit.com/challenge/a8pSKKAr4JQBg9WcF

//Description:
//According to the lodash documentation, _.pull Removes all given values from array using SameValueZero for equality comparisons. Note that unlike _.without, this method mutates array.
//Arguments
//array (Array): The array to modify.
//values: The values to remove.
//Example
//You work in a car dealership. A government inspector is coming to visit and wants to ensure you are only selling electric cars. Your boss asks you to pull all the cars that aren't electric off the lot.
//pull("electric", "gas", "electric", "gas", "gas", "electric", "gas")
//➞ ["electric", "electric", "electric"]
//The challenege of this function is that it mutates the array so methods like filter and map can't be used.
//Notes
//Do not attempt to import lodash; you are simply writing your own version.
//This entire series of challenges can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(pull(["cat", "penguin", "dog", "mouse"], "mouse"), ["cat", "penguin", "dog"]);
//​
//Test.assertSimilar(pull([1, 2, 3, 4, 5, 6, 7, 8, 9], 2, 3, 4), [1, 5, 6, 7, 8, 9]);
//​
//const array = ['mug', 'spoon', 'pan', 'glass', 'spatula']
//const array2 = pull(array, "spatula");
////since it mutates array they must be the same array after the function
//Test.assertSimilar(array,  array2);

