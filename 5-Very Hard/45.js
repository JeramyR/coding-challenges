

//title: Double Palindromes

//tags: regex,strings

//url: https://edabit.com/challenge/KsbT9c2zf7jczanTt

//Description:
//Strings can be segregated into both their letter and digit components.
//A double palindrome is when a string's letter component and digit component are both palindromes.
//A single-palindrome is when either (but not both) the letter component or the digit component are palindromes.
//To illustrate:
//"cab97ac79" // double-palindrome
//// "cabac" and "9779" are both palindromes.
//
//"1abc4de1" // single-palindrome
//// "141" is a palindrome.
//Write a function that maps double palindromes to the number 2, single palindromes to the number 1, and everything else to the number 0.
//Examples
//palindromeSet(["cb77c", "ccc888", "ccc789", "abc89"]) ➞ [2, 2, 1, 0]
//
//palindromeSet(["789", "555", "ccc", "abba"]) ➞ [0, 1, 1, 1]
//
//palindromeSet(["7a", "5f", "6c"]) ➞ [2, 2, 2]
//Notes
//A string is composed of only letters or only numbers, can be at most a single palindrome (see example #2).
//All single character components are trivially palindromes (see example #3).
//All letters will be lower cased.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(palindromeSet(["cb77c", "ccc888", "ccc789", "abc89"]), [2, 2, 1, 0])
//Test.assertSimilar(palindromeSet(["18a99b89cc881ba", "p7o8p987", "p7o", "p7o8"]), [1, 2, 1, 0])
//Test.assertSimilar(palindromeSet(["ab9a", "abba", "aa78bb8bbaa7", "a88a"]), [2, 1, 2, 2])
//Test.assertSimilar(palindromeSet(["789", "555", "ccc", "abba"]), [0, 1, 1, 1])
//Test.assertSimilar(palindromeSet(["7a", "5f", "6c"]), [2, 2, 2])
//Test.assertSimilar(palindromeSet(["7ab", "5fc", "6cd"]), [1, 1, 1])
//Test.assertSimilar(palindromeSet(["87ab", "15fc", "26cd"]), [0, 0, 0])
//Test.assertSimilar(palindromeSet(["1234ab", "144a441"]), [0, 2])
//Test.assertSimilar(palindromeSet([""]), [0])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Maximum and Minimum Product Triplets

//tags: arrays,numbers

//url: https://edabit.com/challenge/zEFP5c8ZshTXRfgYb

//Description:
//Write two functions:
//One that returns the maximum product of three numbers in an array.
//One that returns the minimum product of three numbers in an array.
//Examples
//maxProduct([-8, -9, 1, 2, 7]) ➞ 504
//
//maxProduct([-8, 1, 2, 7, 9]) ➞ 126
//
//minProduct([1, -1, 1, 1]) ➞ -1
//
//minProduct([-5, -3, -1, 0, 4]) ➞ -15
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//describe("Max Product Tests", function() {
//  Test.assertEquals(maxProduct([1, -1, 1]), -1)
//  Test.assertEquals(maxProduct([1, -1, 1, 1]), 1)
//  Test.assertEquals(maxProduct([-8, -9, 1, 2, 7]), 504)
//  Test.assertEquals(maxProduct([-8, 1, 2, 7, 9]), 126)
//  Test.assertEquals(maxProduct([1, 1, 5, 1, 1, -10, -1]), 50)
//  Test.assertEquals(maxProduct([-8, -7, -6, -5]), -210)
//  Test.assertEquals(maxProduct([-8, -7, -6, -5, 1]), 56)
//  Test.assertEquals(maxProduct([1, 0, 1, 0, 0]), 0)
//  Test.assertEquals(maxProduct([-5, 1, 10, 0, 0]), 0)
//  Test.assertEquals(maxProduct([-5, -1, -1, 0, 0]), 0)
//  Test.assertEquals(maxProduct([-5, 1, -1, 0, 0]), 5)
//  Test.assertEquals(maxProduct([-5, -3, -1, 0, 4]), 60)
//  Test.assertEquals(maxProduct([5, 3, -1, 0, -4, 7, 7, 9]), 441)
//})
//​
//describe("Min Product Tests", function() {
//  Test.assertEquals(minProduct([1, -1, 1]), -1)
//  Test.assertEquals(minProduct([1, -1, 1, 1]), -1)
//  Test.assertEquals(minProduct([-8, -9, 1, 2, 7]), -126)
//  Test.assertEquals(minProduct([-8, 1, 2, 7, 9]), -504)
//  Test.assertEquals(minProduct([1, 1, 5, 1, 1, -10, -1]), -50)
//  Test.assertEquals(minProduct([-8, -7, -6, -5]), -336)
//  Test.assertEquals(minProduct([-8, -7, -6, -5, 1]), -336)
//  Test.assertEquals(minProduct([1, 0, 1, 0, 0]), 0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Semiprimes

//tags: math,numbers,validation

//url: https://edabit.com/challenge/ZPWXhy8wmK2fqJPzT

//Description:
//A semiprime is a composite number that is the product of two primes. Apart from these two primes, its only other proper (non-self) divisor is 1.
//The two prime factors of a semiprime can be the same number (e.g. the semiprime 49 is the product of 7x7). A semiprime that has two distinct prime factors is called a squarefree semiprime.
//Create a function that takes a number and returns "Squarefree Semiprime", "Semiprime", or "Neither".
//Examples
//semiprime(49) ➞ "Semiprime"
//
//semiprime(15) ➞ "Squarefree Semiprime"
//
//semiprime(97) ➞ "Neither"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(semiprime(49), "Semiprime")
//Test.assertEquals(semiprime(15), "Squarefree Semiprime")
//Test.assertEquals(semiprime(19), "Neither")
//Test.assertEquals(semiprime(75), "Neither")
//Test.assertEquals(semiprime(169), "Semiprime")
//Test.assertEquals(semiprime(203), "Squarefree Semiprime")
//Test.assertEquals(semiprime(177), "Squarefree Semiprime")
//Test.assertEquals(semiprime(125), "Neither")
//Test.assertEquals(semiprime(70), "Neither")

