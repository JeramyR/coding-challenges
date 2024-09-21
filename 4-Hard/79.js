

//title: Almost Palindrome

//tags: strings,validation

//url: https://edabit.com/challenge/rm5MSuzTPGr4t3X7h

//Description:
//A string is an almost-palindrome if, by changing only one character, you can make it a palindrome. Create a function that returns true if a string is an almost-palindrome and false otherwise.
//Examples
//almostPalindrome("abcdcbg") ➞ true
//// Transformed to "abcdcba" by changing "g" to "a".
//
//almostPalindrome("abccia") ➞ true
//// Transformed to "abccba" by changing "i" to "b".
//
//almostPalindrome("abcdaaa") ➞ false
//// Can't be transformed to a palindrome in exactly 1 turn.
//
//almostPalindrome("1234312") ➞ false
//Notes
//Return false if the string is already a palindrome.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(almostPalindrome("abcdcbg"), true)
//Test.assertEquals(almostPalindrome("abccia"), true)
//Test.assertEquals(almostPalindrome("abcdaaa"), false)
//Test.assertEquals(almostPalindrome("gggfgig"), true)
//Test.assertEquals(almostPalindrome("gggffff"), false)
//Test.assertEquals(almostPalindrome("GIGGG"), true)
//Test.assertEquals(almostPalindrome("ggggi"), true)
//Test.assertEquals(almostPalindrome("ggggg"), false, 'Should return false if already palindrome.')
//Test.assertEquals(almostPalindrome("gggfggg"), false, 'Should return false if already palindrome.')
//Test.assertEquals(almostPalindrome("1234312"), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Simple Row Sum

//tags: algorithms,logic,math,numbers,recursion

//url: https://edabit.com/challenge/vbf2iSSP4dnJ8PQq7

//Description:
//Imagine this triangle:
//    1
//   2 3
//  4 5 6
// 7 8 9 10
//...
//Create a function that takes a number n and returns the sum of all numbers in nth row.
//Examples
//rowSum(1) ➞ 1
//
//rowSum(2) ➞ 5
//
//rowSum(4) ➞ 34
//Notes
//1 <= N <= 1000

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(rowSum(1), 1)
//Test.assertEquals(rowSum(2), 5)
//Test.assertEquals(rowSum(3), 15)
//Test.assertEquals(rowSum(4), 34)
//Test.assertEquals(rowSum(5), 65)
//Test.assertEquals(rowSum(6), 111)
//Test.assertEquals(rowSum(7), 175)
//Test.assertEquals(rowSum(8), 260)
//Test.assertEquals(rowSum(9), 369)
//Test.assertEquals(rowSum(10), 505)
//Test.assertEquals(rowSum(11), 671)
//Test.assertEquals(rowSum(12), 870)
//Test.assertEquals(rowSum(13), 1105)
//Test.assertEquals(rowSum(14), 1379)
//Test.assertEquals(rowSum(15), 1695)
//Test.assertEquals(rowSum(16), 2056)
//Test.assertEquals(rowSum(17), 2465)
//Test.assertEquals(rowSum(18), 2925)
//Test.assertEquals(rowSum(19), 3439)
//Test.assertEquals(rowSum(20), 4010)
//Test.assertEquals(rowSum(21), 4641)
//Test.assertEquals(rowSum(22), 5335)
//Test.assertEquals(rowSum(23), 6095)
//Test.assertEquals(rowSum(24), 6924)
//Test.assertEquals(rowSum(25), 7825)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: A Simple Comparison

//tags: arrays,interview,math,numbers

//url: https://edabit.com/challenge/DTvQD5MeTDbYh27nL

//Description:
//Mubashir needs your help to compare two arrays.
//First array arr1 contains some numbers and second array arr2 contains squared values of numbers given in the first array.
//Create a function which takes these two arrays and returns true if all square values are available, false otherwise.
//arr1 = [121, 144, 19, 161, 19, 144, 19, 11]  
//arr2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
//Returns true because 121 is square of 11, 14641 is square of 121, 20736 is square of 144, 361 is square of 19, 25921 the square of 161, and so on...
//arr1 = [121, 144, 19, 161, 19, 144, 19, 11] 
//arr2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
//Examples
//simpleComp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]) ➞ true
//
//simpleComp([4, 4], [1, 31]) ➞ false
//
//simpleComp([2, 2, 3], [4, 4, 9]) ➞ true
//Notes
//Numbers can be in any order.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//lst1 = [121, 144, 19, 161, 19, 144, 19, 11]
//lst2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
//Test.assertEquals(simpleComp(lst1, lst2), true)
//lst1 = [4, 4]
//lst2 = [1, 31]
//Test.assertEquals(simpleComp(lst1, lst2), false)
//lst1 = [121, 144, 19, 161, 19, 144, 19, 11]
//lst2 = [11*21, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
//Test.assertEquals(simpleComp(lst1, lst2), false)
//lst1 = [121, 144, 19, 161, 19, 144, 19, 11]
//lst2 = [11*11, 121*121, 144*144, 190*190, 161*161, 19*19, 144*144, 19*19]
//Test.assertEquals(simpleComp(lst1, lst2), false)
//lst1 = []
//lst2 = []
//Test.assertEquals(simpleComp(lst1, lst2), true)
//lst1 = []
//lst2 = null
//Test.assertEquals(simpleComp(lst1, lst2), false)
//lst1 = [121, 144, 19, 161, 19, 144, 19, 11, 1008]
//lst2 = [11*11, 121*121, 144*144, 190*190, 161*161, 19*19, 144*144, 19*19]
//Test.assertEquals(simpleComp(lst1, lst2), false)
//lst1 = [10000000, 100000000]
//lst2 = [10000000 * 10000000, 100000000 * 100000000]
//Test.assertEquals(simpleComp(lst1, lst2), true)
//lst1 = [10000001, 100000000]

