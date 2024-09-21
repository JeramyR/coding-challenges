

//title: Buggy Code (Part 6)

//tags: bugs,formatting,interview,strings

//url: https://edabit.com/challenge/9FPq9Ya9KGYtG8QLE

//Description:
//Mubashir wants to remove numbers from a given string!
//Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.
//Examples
//removeNumbers("mubashir1") ➞ "mubashir"
//
//removeNumbers("12ma23tt") ➞ "matt"
//
//removeNumbers("e1d2a3b4i5t6") ➞ "edabit"
//Notes
//READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
//Don't overthink this challenge; it's not supposed to be hard.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(removeNumbers("mubashir1"), "mubashir")
//Test.assertEquals(removeNumbers("12ma23tt"), "matt")
//Test.assertEquals(removeNumbers("e1d2a3b4i5t6"), "edabit")
//Test.assertEquals(removeNumbers("pakistan007"), "pakistan")
//Test.assertEquals(removeNumbers("ai4653rf53or4235ce"), "airforce")
////Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Perfect Roots

//tags: algebra,math,numbers

//url: https://edabit.com/challenge/rqciShntwyz4zMoTZ

//Description:
//Given a number n, find if its 2nd, 4th and 8th roots are all integers (perfect roots), return true if it exists, false if not.
//Examples
//perfectRoots(256) ➞ true
//// 2nd root of 256 is 16
//// 4th root of 256 is 4
//// 8th root of 256 is 2
//
//perfectRoots(1000) ➞ false
//
//perfectRoots(6561) ➞ true
//Notes
//n > 1

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(perfectRoots(256), true)
//Test.assertEquals(perfectRoots(1000), false)
//Test.assertEquals(perfectRoots(6561), true)
//Test.assertEquals(perfectRoots(12534), false)
//Test.assertEquals(perfectRoots(3455), false)
//Test.assertEquals(perfectRoots(65536), true)
//Test.assertEquals(perfectRoots(390625), true)
//Test.assertEquals(perfectRoots(1679616), true)
//Test.assertEquals(perfectRoots(6534561), false)
//Test.assertEquals(perfectRoots(253456), false)
//Test.assertEquals(perfectRoots(5764801), true)
//Test.assertEquals(perfectRoots(100000000), true)
////Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Total Number of Digits the Given Number Has

//tags: math,numbers

//url: https://edabit.com/challenge/MxXj9ZhTGfA96uPm7

//Description:
//Create a function that takes a number as an argument and returns the amount of digits it has.
//Examples
//findDigitAmount(123) ➞ 3
//
//findDigitAmount(56) ➞ 2
//
//findDigitAmount(7154) ➞ 4
//
//findDigitAmount(61217311514) ➞ 11
//
//findDigitAmount(0) ➞ 1
//Notes
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(findDigitAmount(1), 1, 'Should work with one digit')
//Test.assertEquals(findDigitAmount(67), 2, 'Should work with a two-digit number')
//Test.assertEquals(findDigitAmount(123), 3, 'Should work with a three-digit number')
//Test.assertEquals(findDigitAmount(55551), 5, 'Should work with a bit bigger number')
//Test.assertEquals(findDigitAmount(96456431), 8, 'Should work with bigger numbers')
//Test.assertEquals(findDigitAmount(0), 1, '0 should return 1, as it is a digit')

