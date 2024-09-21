

//title: Fix the Expression

//tags: bugs,language_fundamentals,validation

//url: https://edabit.com/challenge/FipbQSYquQLPZ8QXG

//Description:
//Fix the code in the Code tab so the function returns true if and only if x is equal to 7.
//Examples
//isSeven(4) ➞ false
//
//isSeven(9) ➞ false
//
//isSeven(7) ➞ true
//Notes
//The bug can be hard to find, so look closely!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isSeven(4), false) 
//Test.assertEquals(isSeven(9), false)
//Test.assertEquals(isSeven(7),  true)
//Test.assertEquals(isSeven(10),  false)
//Test.assertEquals(isSeven(20),  false)
//Test.assertEquals(isSeven(7),  true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Equality Check

//tags: language_fundamentals,logic,validation

//url: https://edabit.com/challenge/BGvTMfwxYDRbtaTJ3

//Description:
//In this challenge, you must verify the equality of two different values given the parameters a and b.
//Both the value and type of the parameters need to be equal. The possible types of the given parameters are:
//Numbers
//Strings
//Booleans (false or true)
//Special values: undefined, null and NaN
//What have you learned so far that will permit you to do two different checks (value and type) with a single statement?
//Implement a function that returns true if the parameters are equal, and false if they are not.
//Examples
//checkEquality(1, true) ➞ false
//// A number and a boolean: the value and type are different.
//
//checkEquality(0, "0") ➞ false
//// A number and a string: the type is different.
//
//checkEquality(1,  1) ➞ true
//// A number and a number: the type and value are equal.
//Notes
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(checkEquality(1, true), false, "Example #1")
//Test.assertEquals(checkEquality(0, "0"), false, "Example #2")
//Test.assertEquals(checkEquality(1, 1), true, "Example #3")
//Test.assertEquals(checkEquality(0, ""), false)
//Test.assertEquals(checkEquality(1, "1"), false)
//Test.assertEquals(checkEquality(0, false), false)
//Test.assertEquals(checkEquality(NaN, NaN), false)
//Test.assertEquals(checkEquality(null, undefined), false)
//Test.assertEquals(checkEquality(undefined, undefined), true)
//Test.assertEquals(checkEquality(false, null), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Profitable Gamble

//tags: conditions,math,validation

//url: https://edabit.com/challenge/ghbHrRnRiDz9fvQNF

//Description:
//Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.
//To illustrate:
//profitableGamble(0.2, 50, 9)
//... should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.
//Examples
//profitableGamble(0.2, 50, 9) ➞ true
//
//profitableGamble(0.9, 1, 2) ➞ false
//
//profitableGamble(0.9, 3, 2) ➞ true
//Notes
//A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: net_outcome = probability_of_winning * prize - cost_of_playing.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(profitableGamble(0.2, 50, 9), true)
//Test.assertEquals(profitableGamble(0.9, 1, 2), false)
//Test.assertEquals(profitableGamble(0.9, 3, 2), true)
//Test.assertEquals(profitableGamble(0.33, 10, 3.30), true)
//Test.assertEquals(profitableGamble(0, 1000, 0.01), false)
//Test.assertEquals(profitableGamble(0.1, 1000, 7), true)
//Test.assertEquals(profitableGamble(0, 0, 0), false)

