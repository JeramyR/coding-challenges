

//title: Digit Distance

//tags: arrays,numbers

//url: https://edabit.com/challenge/aeYjmvYD5YmmA9Dso

//Description:
//The digit distance between two numbers is the total value of the difference between each pair of digits.
//To illustrate:
//digitDistance(234, 489) ➞ 12
//// Since |2 - 4| + |3 - 8| + |4 - 9| = 2 + 5 + 5
//Create a function that returns the digit distance between two integers.
//Examples
//digitDistance(121, 599) ➞ 19
//
//digitDistance(12, 12) ➞ 0
//
//digitDistance(10, 20) ➞ 1
//Notes
//Both integers will be exactly the same length.
//All digits in num2 have to be higher than their counterparts in num1.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(digitDistance(121, 599), 19)
//Test.assertEquals(digitDistance(12, 12), 0)
//Test.assertEquals(digitDistance(10, 20), 1)
//Test.assertEquals(digitDistance(12345678, 23456789), 8)
//Test.assertEquals(digitDistance(5555, 6666), 4)
//Test.assertEquals(digitDistance(105, 777), 15)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Letters Shared between Two Words

//tags: arrays,data_structures,strings

//url: https://edabit.com/challenge/esP7cxXgx8ygiTq9f

//Description:
//Create a function that returns the number of characters shared between two words.
//Examples
//sharedLetters("apple", "meaty") ➞ 2
//// Since "ea" is shared between "apple" and "meaty".
//
//sharedLetters("fan", "forsook") ➞ 1
//
//sharedLetters("spout", "shout") ➞ 4
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sharedLetters("apple", "meaty"), 2)
//Test.assertEquals(sharedLetters("fan", "forsook"), 1)
//Test.assertEquals(sharedLetters("spout", "shout"), 4)
//Test.assertEquals(sharedLetters("took", "taken"), 2)
//Test.assertEquals(sharedLetters("mentor", "terminal"), 5)
//Test.assertEquals(sharedLetters("class", "last"), 3)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sum of Negative Integers

//tags: algorithms,language_fundamentals,regex,strings

//url: https://edabit.com/challenge/ttD7mWf329nxxS3wf

//Description:
//Create a function that takes a string containing integers as well as other characters and return the sum of the negative integers only.
//Examples
//negativeSum("-12 13%14&-11") ➞ -23
//// -12 + -11 = -23
//
//negativeSum("22 13%14&-11-22 13 12") ➞ -33
//// -11 + -22 = -33
//Notes
//There is at least one negative integer.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(negativeSum("-12 13%14&-11"), -23)
//Test.assertEquals(negativeSum("-12 13%14&-2 0 12 -4"), -18)
//Test.assertEquals(negativeSum("33%14&-1 12 a 21 -2 b c"), -3)
//Test.assertEquals(negativeSum("22 13%14&-11-22 13 12"), -33)
//Test.assertEquals(negativeSum("-12 -8"), -20)

