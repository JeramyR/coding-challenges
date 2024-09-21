

//title: Bug: Regular Expression

//tags: bugs,regex,strings,validation

//url: https://edabit.com/challenge/6S92uTgcEcbcx4waS

//Description:
//Indira first year computer science student is taking an intro to RegEx class. Her professor gives her the assignment to write a function that checks whether an input date as a string is in the format yyyy/mm/dd. She has written a regular expression but the regular expression does not seem to be correct. Help her fix the error.
//Examples
//assignment("12/1/1") ➞ false
//
//assignment("1234/12/01") ➞ true
//
//assignment("2012/1/1") ➞ false
//
//assignment("2012/01/07") ➞ true
//Notes
//The pattern may not be the only part of the code that needs fixing.
//Check the Resources tab for help.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(assignment("12/1/1"), false)
//Test.assertEquals(assignment("1234/12/01"), true)
//Test.assertEquals(assignment("2012/1/1"), false)
//Test.assertEquals(assignment("2012/01/07"), true)
//Test.assertEquals(assignment("dates2012/01/07appo"), false)
//Test.assertEquals(assignment("2018/09/12"), true)
//Test.assertEquals(assignment("ammo2011/01/07"), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: Fibonacci Numbers

//tags: numbers,recursion

//url: https://edabit.com/challenge/z9NGF7CJvXfk9y8eB

//Description:
//Fibonacci numbers are created in the following way:
//F(0) = 0
//F(1) = 1
//...
//F(n) = F(n-2) + F(n-1)
//Write a function that calculates the nth Fibonacci number.
//Examples
//fib(0) ➞ 0
//
//fib(1) ➞ 1
//
//fib(2) ➞ 1
//
//fib(8) ➞ 21
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(fib(2), 1)
//Test.assertEquals(fib(5), 5)
//Test.assertEquals(fib(8), 21)
//Test.assertEquals(fib(12), 144)
//Test.assertEquals(fib(0), 0)
//Test.assertEquals(fib(1), 1)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: First N Mid

//tags: math,strings

//url: https://edabit.com/challenge/CcPuaktyGhMw2ki98

//Description:
//Create a function that takes a string and returns the first character of every word if the length of the word is even and the middle character if the length of the word is odd.
//Examples
//stmid("Alexa have to paid") ➞ "ehtp"
//// "e" is the middle character of "Alexa"
//// "h" is the first character of "have"
//
//stmid("Th3 0n3 4nd 0n1y") ➞ "hnn0"
//
//stmid("who is the winner") ➞ "hihw"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(stmid("Alexa have to paid"), "ehtp")
//Test.assertEquals(stmid("Th3 0n3 4nd 0n1y") , "hnn0")
//Test.assertEquals(stmid("who is the winner"), "hihw")

