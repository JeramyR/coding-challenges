

//title: Anti-Divisors of a Number

//tags: algorithms,conditions,math,numbers

//url: https://edabit.com/challenge/Dk95Tc99fB2Bz2SjX

//Description:
//The anti-divisors are numbers that do not divide a given number by the largest possible margin, and they can be found following a simple set of rules:
//Every number greater than 1 and lower than n is checked.
//Every checked number must not be a divisor of n.
//If the checked number is odd and it is a divisor of n * 2 - 1 or n * 2 + 1 it's an anti-divisor.
//If the checked number is even and it is a divisor of n * 2, it's an anti-divisor.
//Given an integer n, implement a function that returns an array containing the anti-divisors of n sorted in ascending order.
//Examples
//antiDivisors(10) ➞ [3, 4, 7]
//// 3 is a divisor of 21 (10 * 2 + 1)
//// 4 is a divisor of 20 (10 * 2)
//// 7 is a divisor of 21
//
//antiDivisors(12) ➞ [5, 8]
//// 5 is a divisor of 25 (12 * 2 + 1)
//// 8 is a divisor of 24 (12 * 2)
//
//antiDivisors(20) ➞ [3, 8, 13]
//// 3 is a divisor of 39 (20 * 2 - 1)
//// 8 is a divisor of 40 (20 * 2)
//// 13 is a divisor of 39
//Notes
//The given n can be any integer, either positive, negative or 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(antiDivisors(10), [3, 4, 7], "Example #1")
//Test.assertSimilar(antiDivisors(12), [5, 8], "Example #2")
//Test.assertSimilar(antiDivisors(20), [3, 8, 13], "Example #3")
//Test.assertSimilar(antiDivisors(1), [])
//Test.assertSimilar(antiDivisors(31), [2, 3, 7, 9, 21])
//Test.assertSimilar(antiDivisors(55), [2, 3, 10, 22, 37])
//Test.assertSimilar(antiDivisors(0), [])
//Test.assertSimilar(antiDivisors(105), [2,  6, 10, 11, 14, 19, 30, 42, 70])
//Test.assertSimilar(antiDivisors(666), [4, 11, 12, 31, 36, 43, 121, 148, 444])
//Test.assertSimilar(antiDivisors(9999), [2, 6, 7, 18, 22, 66, 198, 202, 606, 1818, 2222, 2857, 6666])
//Test.assertSimilar(antiDivisors(-33), [])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Pages in a Book

//tags: math,numbers,validation

//url: https://edabit.com/challenge/zhKrkGqt6pbs7xEEw

//Description:
//Suppose that you add all of the page numbers in a book. If the total is 21, the book could only have 6 pages because 1 + 2 + 3 + 4 + 5 + 6 = 21. If I had said the total were 25, that would be impossible because the next number in the series is 28 (21 + 7).
//Create a function that, given the total number of pages as an argument, returns true if it is a valid total and false if it is not.
//Can you devise a solution that is more efficient than simply adding consecutive integers as I did above?
//Examples
//pagesInBook(5) ➞ false
//
//pagesInBook(4005) ➞ true
//
//pagesInBook(9453) ➞ true
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(pagesInBook(5), false)
//Test.assertEquals(pagesInBook(4005), true)
//Test.assertEquals(pagesInBook(9453), true)
//Test.assertEquals(pagesInBook(9474), false)
//Test.assertEquals(pagesInBook(125250), true)
//Test.assertEquals(pagesInBook(920046), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Hamming Code

//tags: cryptography,logic,numbers,strings

//url: https://edabit.com/challenge/ZPnHtXP7du3XRi85A

//Description:
//The Hamming Code is used to correct errors in data transmissions. Create a function that takes a string containing the message and returns an encoded message using hamming code.
//There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:
//hammingCode("hey") ➞
//"000111111000111000000000000111111000000111000111000111111111111000000111"
//Step 1: Convert every character to its ASCII value:
//h, e, y = 104, 101, 121
//Step 2: Convert ASCII values to 8-bit binary:
//104, 101, 121 = 01101000, 01100101, 01111001
//Step 3: Triple every bit:
//01101000, 01100101, 01111001 =
//
//000111111000111000000000, 000111111000000111000111, 000111111111111000000111
//Step 4: Concatenate the result:
//"000111111000111000000000000111111000000111000111000111111111111000000111"
//See the below examples for a better understanding:
//Examples
//hammingCode("hey") ➞
//"000111111000111000000000000111111000000111000111000111111111111000000111"
//
//hammingCode("mubashir") ➞
//"000111111000111111000111000111111111000111000111000111111000000000111000000111111000000000000111000111111111000000111111000111111000111000000000000111111000111000000111000111111111000000111000"
//
//hammingCode("matt") ➞
//"000111111000111111000111000111111000000000000111000111111111000111000000000111111111000111000000"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(hammingCode("hey"), "000111111000111000000000000111111000000111000111000111111111111000000111")
//Test.assertEquals(hammingCode("mubashir"), "000111111000111111000111000111111111000111000111000111111000000000111000000111111000000000000111000111111111000000111111000111111000111000000000000111111000111000000111000111111111000000111000")
//Test.assertEquals(hammingCode("matt"), "000111111000111111000111000111111000000000000111000111111111000111000000000111111111000111000000")
//Test.assertEquals(hammingCode("T3st"), "000111000111000111000000000000111111000000111111000111111111000000111111000111111111000111000000")
//Test.assertEquals(hammingCode("T?st!%"), "000111000111000111000000000000111111111111111111000111111111000000111111000111111111000111000000000000111000000000000111000000111000000111000111")
//// Mubashir

