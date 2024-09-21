

//title: Adding Parity Bits

//tags: logic,numbers,strings

//url: https://edabit.com/challenge/iBFqQCtMsQBgefBNu

//Description:
//Parity bits are used as a very simple checksum to ensure that binary data isn't corrupted during transit. Here's how they work:
//If a binary string has an odd number of 1's, the parity bit is a 1.
//If a binary string has an even number of 1's, the parity bit is a 0.
//The parity bit is appended to the end of the binary string.
//Create a function that adds the correct parity bit to a binary string.
//Examples
//addParityBit("1011011") ➞ "10110111"
//// There are five 1's.
//// Since five is odd, the parity bit should be a 1.
//// Add the parity bit to the end of the string.
//// Return the result.
//
//addParityBit("0110000") ➞ "01100000"
//
//addParityBit("0101101") ➞ "01011010"
//
//addParityBit("1111111") ➞ "11111111"
//Notes
//All inputs will be 7-bits long (so that the parity bit makes it a full byte).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [actualParam, expectedParam] = [
//  [
//    '0010110', '1100000', '1111111', '1111011', '1010110', '1100110',
//    '1010110', '1011011', '0010110', '1100101', '1000000', '1010111',
//  ],
//  [
//    "00101101", "11000000", "11111111", "11110110", "10101100", "11001100",
//    "10101100", "10110111", "00101101", "11001010", "10000001", "10101111",
//  ]
//]
//for (let i in actualParam) Test.assertEquals(addParityBit(actualParam[i]), expectedParam[i])
//​
//// credit goes to the original author/publisher @Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: String Slice-athon

//tags: language_fundamentals,strings

//url: https://edabit.com/challenge/CFswwYtpKgSvMuYcS

//Description:
//This challenge has five miniature exercises to help practice proficiency in string slicing. Check the examples below for a visual indicator of how to slice the strings. Good luck!
//Examples
//const s = "abcdefghijklmnopqrstuvwxyz"
//challenge1(s) ➞ "abcde"
//// First 5 characters of the string.
//
//challenge2(s) ➞ "vwxyz"
//// Last 5 characters of the string.
//
//challenge3(s) ➞ "zyxwvutsrqponmlkjihgfedcba"
//// All characters in the string from back.
//
//challenge4(s) ➞ "fedcba"
//// First 6 characters in the string (start with 6th character and go backwards).
//
//challenge5(s) ➞ "tvxz"
//// Take last 7 characters and only return odd positioned ones.
//Notes
//Check the Tests tab for more examples.
//See the Resources tab for further information on learning string slicing.
//You may use methods other than slice() as needed to complete some of the challenges.
//All test cases follow the same slicing pattern as the above example.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// Author : Joshua Señoron
//​
//var txt = 'abcdefghijklmnopqrstuvwxyz'
//var nums = '0123456789'
//​
//Test.assertEquals(challenge1(txt), 'abcde')
//Test.assertEquals(challenge2(txt), 'vwxyz')
//Test.assertEquals(challenge3(txt), 'zyxwvutsrqponmlkjihgfedcba')
//Test.assertEquals(challenge4(txt), 'fedcba')
//Test.assertEquals(challenge5(txt), 'tvxz')
//​
//Test.assertEquals(challenge1(nums), '01234')
//Test.assertEquals(challenge2(nums), '56789')
//Test.assertEquals(challenge3(nums), '9876543210')
//Test.assertEquals(challenge4(nums), '543210')
//Test.assertEquals(challenge5(nums), '3579')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Measure the Depth of Emptiness

//tags: arrays,language_fundamentals,strings

//url: https://edabit.com/challenge/rKExAu3SwQaCJ2XA8

//Description:
//In this challenge you will receive an input of the form:
//[[[[[[[[[[[]]]]]]]]]]]
//In other words, an array containing an array containing an array containing... an array containing nothing.
//Your goal is to measure the depth of this array, where [] has a depth 1, [[]] has depth of 2, [[[]]] has depth 3, etc.
//Examples
//measureDepth([]) ➞ 1
//
//measureDepth([[]]) ➞ 2
//
//measureDepth([[[]]]) ➞ 3
//
//measureDepth([[[[[[[[[[[]]]]]]]]]]]) ➞ 11
//Notes
//For a bonus challenge, try to find a solution without recursion.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(measureDepth([]), 1)
//Test.assertEquals(measureDepth([[]]), 2)
//Test.assertEquals(measureDepth([[[]]]), 3)
//Test.assertEquals(measureDepth([[[[[[]]]]]]), 6)
//Test.assertEquals(measureDepth([[[[[[[[]]]]]]]]), 8)
//Test.assertEquals(measureDepth([[[[[[[[[[[[[]]]]]]]]]]]]]), 13)
//Test.assertEquals(measureDepth([[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]), 17)
//Test.assertEquals(measureDepth([[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]), 18)

