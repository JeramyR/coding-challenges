

//title: Simplifying to Simplest Ratio

//tags: math,numbers,strings

//url: https://edabit.com/challenge/cAvXoLephroL2dKRp

//Description:
//Create a function which simplifies a given fraction into its simplest ratio. Return the fraction as a string.
//Examples
//simplifyFrac("2/4") ➞ "1/2"
//
//simplifyFrac("15/25") ➞ "3/5"
//
//simplifyFrac("4/9") ➞ "4/9"
//Notes
//Fractions are given as strings.
//Return the same fraction if it is already in its simplified ratio (see example #3).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(simplifyFrac("2/4"), "1/2")
//Test.assertEquals(simplifyFrac("15/25"), "3/5")
//Test.assertEquals(simplifyFrac("4/9"), "4/9")
//Test.assertEquals(simplifyFrac("15/48"), "5/16")
//Test.assertEquals(simplifyFrac("8/41"), "8/41")
//Test.assertEquals(simplifyFrac("13/94"), "13/94")
//Test.assertEquals(simplifyFrac("9/95"), "9/95")
//Test.assertEquals(simplifyFrac("8/69"), "8/69")
//Test.assertEquals(simplifyFrac("4/31"), "4/31")
//Test.assertEquals(simplifyFrac("13/8"), "13/8")
//Test.assertEquals(simplifyFrac("7/86"), "7/86")
//Test.assertEquals(simplifyFrac("19/75"), "19/75")
//Test.assertEquals(simplifyFrac("10/44"), "5/22")
//Test.assertEquals(simplifyFrac("1/93"), "1/93")
//Test.assertEquals(simplifyFrac("17/23"), "17/23")
//Test.assertEquals(simplifyFrac("20/80"), "1/4")
//Test.assertEquals(simplifyFrac("12/13"), "12/13")
//Test.assertEquals(simplifyFrac("8/51"), "8/51")
//Test.assertEquals(simplifyFrac("8/29"), "8/29")
//Test.assertEquals(simplifyFrac("20/41"), "20/41")
//Test.assertEquals(simplifyFrac("2/75"), "2/75")
//Test.assertEquals(simplifyFrac("20/24"), "5/6")
//Test.assertEquals(simplifyFrac("13/22"), "13/22")
//Test.assertEquals(simplifyFrac("4/15"), "4/15")
//Test.assertEquals(simplifyFrac("9/29"), "9/29")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find All Digits

//tags: arrays,numbers

//url: https://edabit.com/challenge/5hsyLC2Ntgoqn2wAy

//Description:
//Taking each four digit number of an array in turn, return the number that you are on when all of the digits 0-9 have been discovered. If not all of the digits can be found, return "Missing digits!".
//Examples
//findAllDigits([5175, 4538, 2926, 5057, 6401, 4376, 2280, 6137, 8798, 9083]) ➞ 5057
//// digits found:  517-  4-38  29-6  -0
//
//findAllDigits([5719, 7218, 3989, 8161, 2676, 3847, 6896, 3370, 2363, 1381]) ➞ 3370
//// digits found:  5719  -2-8  3---  --6-  ----  --4-  ----  ---0
//
//findAllDigits([4883, 3876, 7769, 9846, 9546, 9634, 9696, 2832, 6822, 6868]) ➞ "Missing digits!"
//// digits found:  48-3  --76  ---9  ----  -5--  ----  ----  2---
//// 0 and 1 are missing
//Notes
//The digits can be discovered in any order.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(findAllDigits([3129, 7689, 7449, 4389, 5855, 9670, 9245, 1291, 7367, 1810]), 9670)
//Test.assertEquals(findAllDigits([2758, 3737, 3349, 5118, 7004, 6106, 8868, 6687, 2510, 8911]), 6106)
//Test.assertEquals(findAllDigits([5343, 6743, 2922, 2423, 7050, 5116, 3992, 2707, 2435, 5251]), "Missing digits!")
//Test.assertEquals(findAllDigits([4169, 4511, 1498, 6945, 7959, 2666, 7872, 3217, 5408, 8662]), 5408)
//Test.assertEquals(findAllDigits([7985, 7130, 4625, 7392, 4933, 7163, 7130, 2145, 1596, 6188]), 4625)
//Test.assertEquals(findAllDigits([4823, 1049, 9555, 9466, 2191, 9316, 1105, 4489, 8318, 7081]), 7081)
//Test.assertEquals(findAllDigits([9827, 4405, 6317, 6086, 8091, 7800, 8365, 2544, 3402, 7248]), 6317)
//Test.assertEquals(findAllDigits([2227, 7262, 9322, 8967, 4807, 8708, 3317, 6543, 9522, 7106]), 6543)
//Test.assertEquals(findAllDigits([8452, 7326, 6786, 1893, 6546, 8714, 6699, 1361, 4891, 9797]), "Missing digits!")
//Test.assertEquals(findAllDigits([2627, 1146, 3964, 6280, 9759, 6188, 8917, 9375, 4012, 4217]), 9759)
//Test.assertEquals(findAllDigits([1291, 6903, 5887, 8914, 3906, 1465, 8452, 4909, 4143, 6921]), 8914)
//Test.assertEquals(findAllDigits([7433, 8245, 9603, 1446, 8158, 8756, 5066, 4996, 5233, 2856]), 1446)
//Test.assertEquals(findAllDigits([4661, 1207, 8411, 2010, 2092, 2441, 7885, 3810, 7433, 2034]), 3810)
//Test.assertEquals(findAllDigits([9429, 6519, 3795, 7924, 3042, 3425, 1371, 7194, 7680, 9007]), 7680)
//Test.assertEquals(findAllDigits([6621, 9480, 8239, 4542, 9772, 5108, 6872, 5057, 9477, 3602]), 9772)
//Test.assertEquals(findAllDigits([9701, 3828, 7183, 2727, 5212, 6721, 5413, 2351, 4237, 8207]), 5413)
//Test.assertEquals(findAllDigits([3914, 9923, 8187, 1657, 4271, 9538, 3759, 4543, 3438, 1943]), "Missing digits!")
//Test.assertEquals(findAllDigits([6572, 3752, 9661, 7017, 8139, 2596, 3054, 2730, 1350, 2483]), 3054)
//Test.assertEquals(findAllDigits([2102, 4519, 4229, 8347, 2019, 7342, 7181, 8977, 1339, 9988]), "Missing digits!")
//Test.assertEquals(findAllDigits([4467, 2849, 5706, 7330, 9488, 2529, 8837, 2256, 3975, 7311]), 7311)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Almost-Palindrome Sieve

//tags: arrays,higher_order_functions,strings

//url: https://edabit.com/challenge/xPnZKhYcn5TwK3HFT

//Description:
//Write a function that takes in an array of integers and returns the integers that are either palindromes or almost-palindromes. An almost-palindrome is any integer that can be rearranged to form a palindrome.
//For example, the numbers 677 and 338 are both almost-palindromes, since they can be rearranged to form 767 and 383, respectively.
//Examples
//palindromeSieve([443, 12, 639, 121, 3232]) ➞ [443, 121, 3232]
//// Since 443 => 434; 121 is a palindrome; 3232 => 2332 or 3223
//
//palindromeSieve([5, 55, 6655, 8787]) ➞ [5, 55, 6655, 8787]
//// Single-digit numbers are automatically palindromes.
//
//palindromeSieve([897, 89, 23, 54, 6197, 53342]) ➞ []
//Notes
//Return an empty array if none of the numbers are palindromes or almost-palindromes.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(palindromeSieve([443, 12, 639, 121, 3232]), [443, 121, 3232])
//Test.assertSimilar(palindromeSieve([5, 55, 6655, 8787]), [5, 55, 6655, 8787])
//Test.assertSimilar(palindromeSieve([897, 89, 23, 54, 6197, 53342]), [])
//Test.assertSimilar(palindromeSieve([112, 334, 555, 656, 665, 444, 443, 7]), [112, 334, 555, 656, 665, 444, 443, 7])
//Test.assertSimilar(palindromeSieve([1, 2, 123]), [1, 2])
//Test.assertSimilar(palindromeSieve([1, 2, 3]), [1, 2, 3])
//Test.assertSimilar(palindromeSieve([555, 687868877]), [555, 687868877])
//Test.assertSimilar(palindromeSieve([555, 68786887]), [555, 68786887])

