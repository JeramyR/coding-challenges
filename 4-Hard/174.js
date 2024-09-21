

//title: String Factoring

//tags: arrays,conditions,loops,strings

//url: https://edabit.com/challenge/c59r7jg89K9vvJ9Zh

//Description:
//Given the complete factorization of a number, create a function that converts this array of factors to a string.
//To illustrate: 24's complete factorization is [2, 2, 2, 3], which should be converted to "2^3 x 3".
//Examples
//stringFactor([2, 2, 2, 3, 3]) ➞ "2^3 x 3^2"
//
//stringFactor([2, 7]) ➞ "2 x 7"
//
//stringFactor([2, 3, 3]) ➞ "2 x 3^2"
//Notes
//Factors should be joined with x (multiplication sign).
//Multiple instances of the same factor should be exponentiated.
//Factors raised to the 1 power should be left as is, i.e. write 7 instead of 7^1.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(stringFactor([2, 2, 2, 3, 3]), "2^3 x 3^2")
//Test.assertEquals(stringFactor([2, 7]), "2 x 7")
//Test.assertEquals(stringFactor([2, 3, 3]), "2 x 3^2")
//Test.assertEquals(stringFactor([2, 2, 2, 2, 2]), "2^5")
//Test.assertEquals(stringFactor([2, 3, 7]), "2 x 3 x 7")
//Test.assertEquals(stringFactor([2, 2, 7, 11]), "2^2 x 7 x 11")
//Test.assertEquals(stringFactor([11, 11, 11]), "11^3")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Lucky Seven

//tags: algorithms,loops,numbers,validation

//url: https://edabit.com/challenge/HzxFuMHeBuWWeed8h

//Description:
//Given an array of numbers, return whether it is possible to make the number 7 by adding any three different numbers together.
//Examples
//luckySeven([2, 4, 3, 8, 9, 1]) ➞ true
//
//luckySeven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ true
//
//luckySeven([0, 0, 0, 2, 3]) ➞ false
//// You cannot repeat the same number to make 2 + 2 + 3 = 7
//
//luckySeven([4,, 3]) ➞ false
//// You need three different numbers.
//Notes
//Tests will only include numbers.
//Trivially, any array with a length of less than two automatically fails the test.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [actualParam, expectedParam] = [
//  [[2, 4, 3, 8, 9, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 10, 8, -3, -3, -2, 9], [-5, 7, -3, -5, 9, 3, 5],
//   [10, 3, 2, 9, 2, -4, -8, 8], [-6, -1, 6, 6, -1, 0, -5, -2, 7], [-9, 7, 6, -5, 10, 3, -8, 8, -6, 0],
//   [6, -6, 4, 5, -4, 8, 6, 2], [-2, -5, -7, 4, -7, 9, -6, -6], [5, -5, -7, -10, -1, 3, 7, 0, -2, -7], [7, 7],
//   [-2, 4, 7, -3, -5, 7, -1], [5, 2, -6, 6, -5, -5, 5, -10], [1], [2, 3], [], [1, -8], [3, 8, 0, -5],
//   [-7, -3, 0, -4, 0, -6, -1, -5, 2, -3], [-9, 0, 8, -6], [0, 0, 0, 2, 3], [-5, -4, 6, 8, 9, 8, 8]],
//   [true, true, true, true, true, true, true, true, true, true, 
//    false, false, false, false, false, false, false, false, false, false, false, false]
//]
//for (let i in actualParam) Test.assertEquals(luckySeven(actualParam[i]), expectedParam[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Minimum Swaps to Alternate a Binary String

//tags: loops,strings

//url: https://edabit.com/challenge/zTKt7exq3R5idX4RY

//Description:
//Write a function that returns the minimum number of swaps to create an alternating binary string. The input will have the same number of zeroes and ones.
//Examples
//minSwaps("101010") ➞ 0
//
//minSwaps("10001110") ➞ 1
//// Swap the 0 at index 2 for the 1 at index 5.
//
//minSwaps("11110000") ➞ 2
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(minSwaps("10"), 0)
//Test.assertEquals(minSwaps("0101"), 0)
//Test.assertEquals(minSwaps("101010"), 0)
//Test.assertEquals(minSwaps("1100"), 1)
//Test.assertEquals(minSwaps("111000"), 1)
//Test.assertEquals(minSwaps("100101"), 1)
//Test.assertEquals(minSwaps("100011"), 1)
//Test.assertEquals(minSwaps("010110"), 1)
//Test.assertEquals(minSwaps("10001110"), 1)
//Test.assertEquals(minSwaps("11001100"), 2)
//Test.assertEquals(minSwaps("11110000"), 2)
//Test.assertEquals(minSwaps("1001001011"), 2)
//Test.assertEquals(minSwaps("100100100111"), 3)
//Test.assertEquals(minSwaps("101100000111"), 3)
//Test.assertEquals(minSwaps("111000000111"), 3)
//Test.assertEquals(minSwaps("111111000000"), 3)
//Test.assertEquals(minSwaps("11000000011111"), 3)
//Test.assertEquals(minSwaps("11111110000000"), 3)
//Test.assertEquals(minSwaps("1111111100000000"), 4)

