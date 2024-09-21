

//title: Primitive Pythagorean Triples

//tags: algebra,conditions,higher_order_functions,math

//url: https://edabit.com/challenge/7WZBxctgouiNRYAX2

//Description:
//A Pythagorean triple is a set of three integer numbers that form a right triangle. The sum of the squares of the two smaller numbers should equal the square of the largest number. Given three numbers a, b and c (c being the largest):
//a^2 + b^2 = c^2
//Furthermore, a Pythagorean triple is said to be primitive if the three numbers are pairwise coprime — that is, the greatest common prime factor between any two numbers is 1.
//Create a function that takes an array of three numbers (unordered) and returns true if the numbers constitute a primitive Pythagorean triple, false otherwise.
//Examples
//isPrimPythTriple([4, 5, 3]) ➞ true
//
//isPrimPythTriple([7, 12, 13]) ➞ false
//
//isPrimPythTriple([39, 15, 36]) ➞ false
//// Pythagorean triple, but not primitive.
//
//isPrimPythTriple([77, 36, 85]) ➞ true
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isPrimPythTriple([4,5,3]), true)
//Test.assertEquals(isPrimPythTriple([7,12,13]), false)
//Test.assertEquals(isPrimPythTriple([39,15,36]), false,'Pythagorean triple, but not primitive')
//Test.assertEquals(isPrimPythTriple([77,36,85]), true)
//Test.assertEquals(isPrimPythTriple([35,28,21]), false)
//Test.assertEquals(isPrimPythTriple([80,89,39]), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Powerful Numbers

//tags: conditions,math,numbers,validation

//url: https://edabit.com/challenge/qBHiycz67g7BrM9h5

//Description:
//Given a positive number x:
//p = (p1, p2, …)
//// Set of *prime* factors of x
//If the square of every item in p is also a factor of x, then x is said to be a powerful number.
//Create a function that takes a number and returns true if it's powerful, false if it's not.
//Examples
//isPowerful(36) ➞ true
//// p = (2, 3) (prime factors of 36)
//// 2^2 = 4 (factor of 36)
//// 3^2 = 9 (factor of 36)
//
//isPowerful(27) ➞ true
//
//isPowerful(674) ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isPowerful(36), true)
//Test.assertEquals(isPowerful(27), true)
//Test.assertEquals(isPowerful(32), true)
//Test.assertEquals(isPowerful(72), true)
//Test.assertEquals(isPowerful(243), true)
//Test.assertEquals(isPowerful(968), true)
//Test.assertEquals(isPowerful(951), false)
//Test.assertEquals(isPowerful(144), true)
//Test.assertEquals(isPowerful(674), false)
//Test.assertEquals(isPowerful(600), false)
//Test.assertEquals(isPowerful(500), true)
//Test.assertEquals(isPowerful(320), false)
//Test.assertEquals(isPowerful(720), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Amount of Possible Combinations

//tags: math,numbers

//url: https://edabit.com/challenge/Wk7ScSpAG4wLSqm8k

//Description:
//Write a function that returns the amount of possible combinations when drawing the given amount of cards from a deck of cards.
//The function must take two inputs: k is the amount of cards to draw. n the total amount of cards in the deck.
//For example, a poker hand can be described as a 5-combination (k = 5) of cards from a 52 card deck (n = 52). The 5 cards of the hand are all distinct, and the order of cards in the hand does not matter. There are 2,598,960 such combinations.
//The amount of combinations should be returned as an integer.
//Examples
//combinations(52, 52) ➞ 1
//
//combinations(5, 52) ➞ 2598960
//
//combinations(10, 52) ➞ 15820024220
//Notes
//Try solving this natively without any imports.
//Remember to return result as integer.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(combinations(6, 52), 20358520)
//Test.assertEquals(combinations(5, 52), 2598960)
//Test.assertEquals(combinations(10, 52), 15820024220)
//Test.assertEquals(combinations(18, 52), 42671977361650)
//Test.assertEquals(combinations(52, 52), 1)
//Test.assertEquals(combinations(7, 64), 621216192)

