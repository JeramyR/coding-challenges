

//title: Amazing Edabit!

//tags: regex,strings,validation

//url: https://edabit.com/challenge/bCMai3bYsRpikCyrh

//Description:
//Create a function that takes a string and changes the word amazing to not amazing. Return the string without any change if the word edabit is part of the string.
//Examples
//amazingEdabit("edabit is amazing.") ➞ "edabit is amazing."
//
//amazingEdabit("Mubashir is amazing.") ➞ "Mubashir is not amazing."
//
//amazingEdabit("Infinity is amazing.") ➞ "Infinity is not amazing."
//Notes
//Edabit is amazing :)

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(amazingEdabit("edabit is amazing."), "edabit is amazing.")
//Test.assertEquals(amazingEdabit("Mubashir is amazing."), "Mubashir is not amazing.")
//Test.assertEquals(amazingEdabit("Trump is amazing."), "Trump is not amazing.")
//Test.assertEquals(amazingEdabit("Infinity is amazing."), "Infinity is not amazing.")
//Test.assertEquals(amazingEdabit("Mubashir and edabit are amazing."), "Mubashir and edabit are amazing.")
//Test.assertEquals(amazingEdabit("Matt is amazing."), "Matt is not amazing.")
//Test.assertEquals(amazingEdabit("Helen is amazing."), "Helen is not amazing.")
//Test.assertEquals(amazingEdabit("Python and edabit are amazing."), "Python and edabit are amazing.")
//Test.assertEquals(amazingEdabit("C++ is amazing."), "C++ is not amazing.")
//Test.assertEquals(amazingEdabit("javascript is amazing."), "javascript is not amazing.")
//Test.assertEquals(amazingEdabit("java is amazing."), "java is not amazing.")
//Test.assertEquals(amazingEdabit("ruby is amazing."), "ruby is not amazing.")
//Test.assertEquals(amazingEdabit("SQL is amazing."), "SQL is not amazing.")
//Test.assertEquals(amazingEdabit("CSS is amazing."), "CSS is not amazing.")
//Test.assertEquals(amazingEdabit("Pakistan is amazing. edabit"), "Pakistan is amazing. edabit")
//Test.assertEquals(amazingEdabit("You and edabit are amazing."), "You and edabit are amazing.")
//Test.assertEquals(amazingEdabit("Matt and edabit are amazing."), "Matt and edabit are amazing.")
//Test.assertEquals(amazingEdabit("Helen and edabit are amazing."), "Helen and edabit are amazing.")
//Test.assertEquals(amazingEdabit("Everyone is amazing."), "Everyone is not amazing.")
//Test.assertEquals(amazingEdabit("Swift and edabit are amazing."), "Swift and edabit are amazing.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Taxi Journey

//tags: conditions,math,numbers

//url: https://edabit.com/challenge/cMLjrLbhFAswxhtFL

//Description:
//A taxi journey costs $3 for the first kilometer travelled. However, all kilometers travelled after that will cost $2 each.
//Create a function which returns the distance that the taxi must've travelled, given the cost as a parameter.
//Examples
//journeyDistance(3) ➞ 1
//// The first kilometer costs $3
//
//journeyDistance(9) ➞ 4
//// The first kilometer costs $3 plus the other three kilometers (costing $2 each)
//
//journeyDistance(5) ➞ 2
//Notes
//The input tests are integers >= 0.
//Remember that you are calculating the distance from the cost, not the other way around!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(journeyDistance(0), 0)
//Test.assertEquals(journeyDistance(3), 1)
//Test.assertEquals(journeyDistance(5), 2)
//Test.assertEquals(journeyDistance(9), 4)
//Test.assertEquals(journeyDistance(15), 7)
//Test.assertEquals(journeyDistance(99), 49)
//Test.assertEquals(journeyDistance(11037), 5518)
//​
//// Author: Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Hello; Hello World; World

//tags: conditions,math,strings

//url: https://edabit.com/challenge/uJqrcYkz4NvYi9eCY

//Description:
//Write a function that takes an integer and:
//If the number is a multiple of 3, return "Hello".
//If the number is a multiple of 5, return "World".
//If the number is a multiple of both 3 and 5, return "Hello World".
//Examples
//helloWorld(3) ➞ "Hello"
//
//helloWorld(5) ➞ "World"
//
//helloWorld(15) ➞ "Hello World"
//Notes
//Don't forget to return the result.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(helloWorld(3), "Hello")
//Test.assertEquals(helloWorld(5), "World")
//Test.assertEquals(helloWorld(15), "Hello World")

