

//title: Priority Sort

//tags: conditions,language_fundamentals,sorting

//url: https://edabit.com/challenge/qMcdtSKAPESJWKpzP

//Description:
//Given an array and a set, return a sorted array with its items in ascending order but prioritize the elements in the set over the other items in the array.
//Examples
//prioritySort([5, 4, 3, 2, 1], new Set([2, 3])) ➞ [2, 3, 1, 4, 5]
//
//prioritySort([5, 4, 3, 2, 1], new Set([3, 6])) ➞ [3, 1, 2, 4, 5]
//
//prioritySort([-5, -4, -3, -2, -1, 0], new Set([-4, -3])) ➞ [-4, -3, -5, -2, -1, 0]
//Notes
//If the array is empty, return an empty array.
//If the set is empty there is nothing to prioritize, but the array should still be sorted.
//The set may contain values that are not in the array.
//The array may contain duplicates.
//The array and the set will only contain integer values.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(prioritySort([5, 4, 3, 2, 1], new Set([2, 3])), [2, 3, 1, 4, 5])
//Test.assertSimilar(prioritySort([], new Set([2, 3])), [])
//Test.assertSimilar(prioritySort([], new Set()), [])
//Test.assertSimilar(prioritySort([1, 2, 3], new Set()), [1, 2, 3])
//Test.assertSimilar(prioritySort([5, 4, 3, 2, 1], new Set([3, 6])), [3, 1, 2, 4, 5])
//Test.assertSimilar(prioritySort([-5, -4, -3, -2, -1, 0], new Set([-4, -3])), [-4, -3, -5, -2, -1, 0])
//Test.assertSimilar(prioritySort([-10, 0, 10], new Set([0])), [0, -10, 10])
//Test.assertSimilar(prioritySort([4, 2, 2], new Set([1])), [2, 2, 4])
//Test.assertSimilar(prioritySort([1, 5, 5, 5, 5, 2, 1], new Set([1,5])), [1, 1, 5, 5, 5, 5, 2])
//​
//// Author : Peter Marko

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: XOR Cipher

//tags: algorithms,bit_operations,cryptography,logic,strings

//url: https://edabit.com/challenge/CHnhjwomyvwnEp7Sd

//Description:
//In XOR Cipher, encoding is done by an XOR operation on two given strings. If the strings are of different lengths then the output should be the length of the shorter string. Cut the length of the longer string to the same size as the smaller string before XOR operation.
//Given two strings of msg1 and msg2, return the encoded message.
//Examples
//XORCipher("11", "22") ➞ "33"
//// 11 XOR 22 = 33
//
//XORCipher("1020304", "403201") ➞ "501231"
//
//XORCipher("c611d9bdd9de38b9eb", "23a0745505d4d25494") ➞ "e5b1ade8dc0aeaed7f"
//Notes
//A hint is in the Comments section.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(XORCipher("11", "22"), "33")
//Test.assertEquals(XORCipher("1020304", "403201"), "501231")
//Test.assertEquals(XORCipher("1c0111001f010100061a024b53535009181c", "686974207468652062756c6c277320657965"), "746865206b696420646f6e277420706c6179")
//Test.assertEquals(XORCipher("aadf", "bce2"), "163d")
//Test.assertEquals(XORCipher("ab3f", "ac"), "07")
//Test.assertEquals(XORCipher("", ""), "")
//Test.assertEquals(XORCipher("c611d9bdd9de38b9eb", "23a0745505d4d25494"), "e5b1ade8dc0aeaed7f")
//Test.assertEquals(XORCipher("7d1e875da9d5e89b54c7eaf", "3541599be591709795cebd5"), "485fdec64c44980cc10957a")
//Test.assertEquals(XORCipher("785a6677b3e52f0e7", "a8d97da7441"), "d0831bd0f7f")
//Test.assertEquals(XORCipher("6cbd75511e7f750c6827", "1753547c813bfcd"), "7bee212d9f4489d")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Lonely Numbers

//tags: loops,numbers,regex

//url: https://edabit.com/challenge/TKTeWvgxYmuu5Z4Rq

//Description:
//Given a number, insert duplicate digits on both sides of all digits which appear in a group of 1.
//Worked Example
//numbersNeedFriendsToo(22733) ➞ 2277733
//
//// The number can be split into groups 22, 7, and 33.
//// 7 appears on its own.
//// Put 7s on both sides to create 777.
//// Put the numbers together and return the result.
//Examples
//numbersNeedFriendsToo(123) ➞ 111222333
//
//numbersNeedFriendsToo(56657) ➞ 55566555777
//
//numbersNeedFriendsToo(33) ➞ 33
//Notes
//All tests will include positive integers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(numbersNeedFriendsToo(123), 111222333)
//Test.assertEquals(numbersNeedFriendsToo(56657), 55566555777)
//Test.assertEquals(numbersNeedFriendsToo(33), 33)
//Test.assertEquals(numbersNeedFriendsToo(22733), 2277733)
//Test.assertEquals(numbersNeedFriendsToo(11223333), 11223333)
//​
//// Author: Joshua Señoron

