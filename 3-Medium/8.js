

//title: Integer in Range?

//tags: conditions,language_fundamentals,numbers,validation

//url: https://edabit.com/challenge/YT2kXSMEtACPPk35R

//Description:
//Create a function that validates whether a number n is within the bounds of lower and upper. Return false if n is not an integer.
//Examples
//intWithinBounds(3, 1, 9) ➞ true
//
//intWithinBounds(6, 1, 6) ➞ false
//
//intWithinBounds(4.5, 3, 8) ➞ false
//Notes
//The term "within bounds" means a number is considered equal or greater than a lower bound and lesser (but not equal) to an upper bound, (see example #2).
//Bounds will be always given as integers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(intWithinBounds(3, 1, 9), true)
//Test.assertEquals(intWithinBounds(6, 1, 6), false)
//Test.assertEquals(intWithinBounds(4.5, 3, 8), false)
//Test.assertEquals(intWithinBounds(-5, -10, 6), true)
//Test.assertEquals(intWithinBounds(4, 0, 0), false)
//Test.assertEquals(intWithinBounds(10, 9, 11), true)
//Test.assertEquals(intWithinBounds(6.3, 2, 6), false)
//Test.assertEquals(intWithinBounds(6.3, 2, 10), false)
//Test.assertEquals(intWithinBounds(9, 2, 3), false)
//Test.assertEquals(intWithinBounds(9, 9, 9), false)
//Test.assertEquals(intWithinBounds(-3, -5, -2), true)
//Test.assertEquals(intWithinBounds(-3, -5, -3), false)
//Test.assertEquals(intWithinBounds(-3, -10, 10), true)
//Test.assertEquals(intWithinBounds(0, -3, 3), true)
//Test.assertEquals(intWithinBounds(0, 0, 1), true)
//Test.assertEquals(intWithinBounds(7, 7, 12), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Integer Digits Count

//tags: loops,math,numbers

//url: https://edabit.com/challenge/wv6p5WR648oG6mTZx

//Description:
//Create a function that counts the integer's number of digits.
//Examples
//count(318) ➞ 3
// 
//count(-92563) ➞ 5
// 
//count(4666) ➞ 4
//
//count(-314890) ➞ 6
//
//count(654321) ➞ 6
//
//count(638476) ➞ 6
//Notes
//For an added challenge, try to solve this without using strings.
//Alternatively, you can solve this via a recursive approach.
//A reversion of this challenge can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [numVector, resVector] = [
//  [0, 318, -92563, 4666, -314890, 654321, 638476, 12345, 1289396, -1232323, 12839393, -231273683],
//  [1, 3, 5, 4, 6, 6, 6, 5, 7, 7, 8, 9]
//]
//for (let i in numVector) Test.assertEquals(count(numVector[i]), resVector[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Is the Number a Repdigit

//tags: algebra,functional_programming,math,numbers,validation

//url: https://edabit.com/challenge/8vSpPNjNx6JBcvxdc

//Description:
//A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it's a repdigit or not.
//Examples
//isRepdigit(66) ➞ true
//
//isRepdigit(0) ➞ true
//
//isRepdigit(-11) ➞ false
//Notes
//The number 0 should return true (even though it's not a positive number).
//Check the Resources tab for more info on repdigits.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isRepdigit(6), true)
//Test.assertEquals(isRepdigit(66), true)
//Test.assertEquals(isRepdigit(666), true)
//Test.assertEquals(isRepdigit(6666), true)
//Test.assertEquals(isRepdigit(1001), false)
//Test.assertEquals(isRepdigit(-11), false, "The number must be >= 0")

