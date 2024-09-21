

//title: Sum of Digits Between Two Numbers

//tags: loops,numbers

//url: https://edabit.com/challenge/uryLqjondNYMTXhBt

//Description:
//Create a function that sums the total number of digits between two numbers, inclusive. For example, between the numbers 19 and 22 we have:
//// 19, 20, 21, 22
//(1 + 9) + (2 + 0) + (2 + 1) + (2 + 2) = 19
//Examples
//sumDigits(7, 8) ➞ 15
//
//sumDigits(17, 20) ➞ 29
//
//sumDigits(10, 12) ➞ 6
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sumDigits(7, 8), 15)
//Test.assertEquals(sumDigits(17, 20), 29)
//Test.assertEquals(sumDigits(10, 12), 6)
//Test.assertEquals(sumDigits(500, 506), 56)
//Test.assertEquals(sumDigits(66, 789), 9324)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Count the Number of Duplicate Characters

//tags: arrays,loops,strings

//url: https://edabit.com/challenge/7T2ytDgjgsh9CMq6D

//Description:
//Create a function that returns the amount of duplicate characters in a string. It will be case sensitive and spaces are included. If there are no duplicates, return 0.
//Examples
//duplicates("Hello World!") ➞ 3
//// "o" = 2, "l" = 3.
//// "o" is duplicated 1 extra time and "l" is duplicated 2 extra times.
//// Hence 1 + 2 = 3
//
//duplicates("foobar") ➞ 1
//
//duplicates("helicopter") ➞ 1
//
//duplicates("birthday") ➞ 0
//// If there are no duplicates, return 0
//Notes
//Make sure to only start counting the second time a character appears.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(duplicates("Hello World!"), 3)
//Test.assertEquals(duplicates("birthday"), 0)
//Test.assertEquals(duplicates("helicopter"), 1)
//Test.assertEquals(duplicates("foobar"), 1)
//Test.assertEquals(duplicates("The Quick Brown Fox Jumps Over the Lazy Dog"), 14)
//Test.assertEquals(duplicates("donald trump"), 1)
//Test.assertEquals(duplicates("Row, row, row your boat Gently down the stream Merrily merrily, merrily, merrily Life is but a dream."), 77)
//Test.assertEquals(duplicates("Gen'rals gathered in their masses,Just like witches at black masses"), 45)
//Test.assertEquals(duplicates("Evil minds that plot destruction,Sorcerer of death's construction"), 43)
//Test.assertEquals(duplicates("gamer"), 0)
//Test.assertEquals(duplicates("gamer gang"), 3)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Alternating between Numbers Two and Eight with a Catch

//tags: math,numbers

//url: https://edabit.com/challenge/HzLNCPG3JTequH2Wa

//Description:
//Create a function that takes a number n (integer greater than zero) as an argument, and returns 2 if n is odd and 8 if n is even.
//You can only use the following arithmetic operators: addition of numbers +, subtraction of numbers -, multiplication of number *, division of number /, and exponentiation **.
//You are not allowed to use any other methods in this challenge (i.e. no if statements, comparison operators, etc).
//Examples
//f(1) ➞ 2
//
//f(2) ➞ 8
//
//f(3) ➞ 2
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(f(1), 2)
//Test.assertEquals(f(2), 8)
//Test.assertEquals(f(3), 2)
//Test.assertEquals(f(4), 8)
//Test.assertEquals(f(100), 8)
//Test.assertEquals(f(101), 2)
//Test.assertEquals(f(2567), 2)
//Test.assertEquals(f(2367134), 8)

