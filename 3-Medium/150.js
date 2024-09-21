

//title: Unusual Subtraction

//tags: algorithms,logic,math

//url: https://edabit.com/challenge/x8ucw62XkGQkv9QdR

//Description:
//Create a function that subtracts 1 from n (unless it ends in 0) k number of times. If n ends in 0, remove the 0.
//To illustrate:
//n = 22
//k = 3
//This means our number is 22 and we have to repeat the algorithm three times. 22 does not end in 0 so we continue subtracting 1.
//22 - 1 = 21
//k = 1
//21 - 1 = 20
//k = 2
//Now 20 ends in 0, so we can remove it. We get 2; k = 3. The algorithm ends there because we applied it three times.
//N:  K:
//22
//21  1
//20  2
//2   3
//Examples
//notGoodMath(540, 5) ➞ 50
//
//notGoodMath(1000000000, 9) ➞ 1
//
//notGoodMath(42023110, 10) ➞ 4201
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(notGoodMath(78, 9), 7)
//Test.assertEquals(notGoodMath(540, 5), 50)
//Test.assertEquals(notGoodMath(1000000000, 9), 1)
//Test.assertEquals(notGoodMath(420, 4), 4)
//Test.assertEquals(notGoodMath(42023110, 10), 4201)
//Test.assertEquals(notGoodMath(88888888, 50), 883)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Largest Gap

//tags: arrays,math,numbers,sorting

//url: https://edabit.com/challenge/zf4rcA3emeytMZArq

//Description:
//Given an array of integers, return the largest gap between elements of the sorted version of that array.
//Here's an illustrative example. Consider the array:
//[9, 4, 26, 26, 0, 0, 5, 20, 6, 25, 5]
//... which, after sorting, becomes the array:
//[0, 0, 4, 5, 5, 6, 9, 20, 25, 26, 26]
//... so that we now see that the largest gap in the array is the gap of 11 between 9 and 20.
//Examples
//largestGap([9, 4, 26, 26, 0, 0, 5, 20, 6, 25, 5]) ➞ 11
//// After sorting get [0, 0, 4, 5, 5, 6, 9, 20, 25, 26, 26]
//// Largest gap of 11 between 9 and 20
//
//largestGap([14, 13, 7, 1, 4, 12, 3, 7, 7, 12, 11, 5, 7]) ➞ 4
//// After sorting get [1, 3, 4, 5, 7, 7, 7, 7, 11, 12, 12, 13, 14]
//// Largest gap of 4 between 7 and 11
//
//largestGap([13, 3, 8, 5, 5, 2, 13, 6, 14, 2, 11, 4, 10, 8, 1, 9]) ➞ 2
//// After sorting get [1, 2, 2, 3, 4, 5, 5, 6, 8, 8, 9, 10, 11, 13, 13, 14]
//// Largest gap of 2 between 6 and 8
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(largestGap([9, 4, 26, 26, 0, 0, 5, 20, 6, 25, 5]), 11)
//Test.assertEquals(largestGap([14, 13, 7, 1, 4, 12, 3, 7, 7, 12, 11, 5, 7]), 4)
//Test.assertEquals(largestGap([1, 2, 2, 3, 4, 5, 5, 6, 8, 8, 9, 10, 11, 13, 13, 14]), 2)
//Test.assertEquals(largestGap([21, 28, 0, 5, 11, 6, 17, 25, 2, 19]), 6)
//Test.assertEquals(largestGap([8, 11, 24, 2, 7, 4, 4, 25, 24, 14, 8, 0, 7]), 10)
//Test.assertEquals(largestGap([26, 17, 4, 25, 29, 26, 8, 30, 4, 20, 2, 7, 29, 7, 20, 30, 23, 5]), 9)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Perfect Number

//tags: math,numbers,validation

//url: https://edabit.com/challenge/CEF6zcYWWWhbbgA2M

//Description:
//Create a function that tests whether or not an integer is a perfect number. A perfect number is a number that can be written as the sum of its factors, (equal to sum of its proper divisors) excluding the number itself.
//For example, 6 is a perfect number, since 1 + 2 + 3 = 6, where 1, 2, and 3 are all factors of 6. Similarly, 28 is a perfect number, since 1 + 2 + 4 + 7 + 14 = 28.
//Examples
//checkPerfect(6) ➞ true
//
//checkPerfect(28) ➞ true
//
//checkPerfect(496) ➞ true
//
//checkPerfect(12) ➞ false
//
//checkPerfect(97) ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(checkPerfect(6), true);
//Test.assertEquals(checkPerfect(28), true);
//Test.assertEquals(checkPerfect(496), true);
//Test.assertEquals(checkPerfect(8128), true);
//Test.assertEquals(checkPerfect(33550336), true);
//Test.assertEquals(checkPerfect(12), false);
//Test.assertEquals(checkPerfect(97), false);
//Test.assertEquals(checkPerfect(481), false);
//Test.assertEquals(checkPerfect(1001), false);
//Test.assertEquals(checkPerfect(55555), false);

