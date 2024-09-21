

//title: Buggy Code (Part 7)

//tags: bugs,interview,language_fundamentals,numbers

//url: https://edabit.com/challenge/CCGBig9eRPFzAHv46

//Description:
//Mubashir wants to swap two given numbers!
//It is not returning the right values. Can you help him fix it?
//a = 100
//b = 200
//a, b = swap(a, b)
//print(a, b) // Should print out "200, 100", but the function prints out "100, 100"
//Examples
//swap(100, 200) ➞ [200, 100]
//
//swap(44, 33) ➞ [33, 44]
//
//swap(21, 12) ➞ [12, 21]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(swap(100, 200), [200, 100])
//Test.assertSimilar(swap(44, 33), [33, 44])
//Test.assertSimilar(swap(21, 12), [12, 21])
//Test.assertSimilar(swap(10, 20), [20, 10])
////Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Farm Problem

//tags: algorithms,language_fundamentals,math

//url: https://edabit.com/challenge/8Qg78sf5SNDEANKti

//Description:
//In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
//chickens = 2 legs
//cows = 4 legs
//pigs = 4 legs
//The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
//Examples
//animals(2, 3, 5) ➞ 36
//
//animals(1, 2, 3) ➞ 22
//
//animals(5, 2, 8) ➞ 50
//Notes
//Don't forget to return the result.
//The order of animals passed is animals(chickens, cows, pigs).
//Remember that the farmer wants to know the total number of legs and not the total number of animals.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(animals(5, 2, 8), 50)
//Test.assertEquals(animals(3, 4, 7), 50)
//Test.assertEquals(animals(1, 2, 3), 22)
//Test.assertEquals(animals(3, 5, 2), 34)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Using the "&&" Operator

//tags: language_fundamentals,logic,validation

//url: https://edabit.com/challenge/vJCZmgvvDjehyDcDK

//Description:
//JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.
//Consider a && b:
//a is checked if it is true or false.
//If a is false, false is returned.
//b is checked if it is true or false.
//If b is false, false is returned.
//Otherwise, true is returned (as both a and b are therefore true ).
//The && operator will only return true for true && true.
//Make a function using the && operator.
//Examples
//and(true, false) ➞ false
//
//and(true, true) ➞ true
//
//and(false, true) ➞ false
//
//and(false, false) ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(and(true, true), true)
//Test.assertEquals(and(true, false), false)
//Test.assertEquals(and(false, true), false)
//Test.assertEquals(and(false, false), false)

