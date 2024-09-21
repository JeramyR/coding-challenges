

//title: Is There an Upward Trend?

//tags: arrays,logic,math,validation

//url: https://edabit.com/challenge/X3JBqvoG5aq38Dc38

//Description:
//Create a function that determines if there is an upward trend.
//Examples
//upwardTrend([1, 2, 3, 4]) ➞ true
//
//upwardTrend([1, 2, 6, 5, 7, 8]) ➞ false
//
//upwardTrend([1, 2, 3, "4"]) ➞ "Strings not permitted!"
//
//upwardTrend([1, 2, 3, 6, 7]) ➞ true
//Notes
//If there is a string element in the array, return "Strings not permitted!".
//The numbers don't have to be consecutive (e.g. [1, 3, 5] should still return true).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(upwardTrend([1, 2, 3, 4, 5, 6]), true)
//Test.assertEquals(upwardTrend([1, 3, 2, 5, 6, 7]), false)
//Test.assertEquals(upwardTrend([1, 2, 3, 4, 5, "6", 7, 8, 9]), "Strings not permitted!")
//Test.assertEquals(upwardTrend([1, 3, 5, 7, 9]), true)
//Test.assertEquals(upwardTrend([10, 12, 13, 15, 20]), true)
//Test.assertEquals(upwardTrend([6, 9, 11, 15, 12]), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Harshad Numbers

//tags: math,numbers,strings,validation

//url: https://edabit.com/challenge/p2AdWaNfMLHePoi26

//Description:
//A number n is a Harshad (also called Niven) number if it is divisible by the sum of its digits. For example, 666 is divisible by 6 + 6 + 6, so it is a Harshad number.
//Write a function to determine whether the given number is a Harshad number.
//Examples
//isHarshad(209) ➞ true
//
//isHarshad(41) ➞ false
//
//isHarshad(12255) ➞ true
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isHarshad(0), false)
//Test.assertEquals(isHarshad(15), false)
//Test.assertEquals(isHarshad(990), true)
//Test.assertEquals(isHarshad(461), false)
//Test.assertEquals(isHarshad(297), false)
//Test.assertEquals(isHarshad(345), false)
//Test.assertEquals(isHarshad(529), false)
//Test.assertEquals(isHarshad(839), false)
//Test.assertEquals(isHarshad(281), false)
//Test.assertEquals(isHarshad(252), true)
//Test.assertEquals(isHarshad(123), false)
//Test.assertEquals(isHarshad(840), true)
//Test.assertEquals(isHarshad(789), false)
//Test.assertEquals(isHarshad(43), false)
//Test.assertEquals(isHarshad(907), false)
//Test.assertEquals(isHarshad(441), true)
//Test.assertEquals(isHarshad(729), false)
//Test.assertEquals(isHarshad(801), true)
//Test.assertEquals(isHarshad(923), false)
//Test.assertEquals(isHarshad(569), false)
//Test.assertEquals(isHarshad(828), true)
//Test.assertEquals(isHarshad(658), false)
//Test.assertEquals(isHarshad(838), false)
//Test.assertEquals(isHarshad(711), true)
//Test.assertEquals(isHarshad(216), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Wash Your Hands :)

//tags: math,numbers

//url: https://edabit.com/challenge/XNqAFTw3shrxcEdWz

//Description:
//It takes 21 seconds to wash your hands and help prevent the spread of COVID-19.
//Create a function that takes the number of times a person washes their hands per day N and the number of months they follow this routine nM and calculates the duration in minutes and seconds that person spends washing their hands.
//Examples
//washHands(8, 7) ➞ "588 minutes and 0 seconds"
//
//washHands(0, 0) ➞ "0 minutes and 0 seconds"
//
//washHands(7, 9) ➞ "661 minutes and 30 seconds"
//Notes
//Consider a month has 30 days.
//Wash your hands.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(washHands(8, 7),  "588 minutes and 0 seconds")
//Test.assertEquals(washHands(20, 10), "2100 minutes and 0 seconds")
//Test.assertEquals(washHands(7, 9),  "661 minutes and 30 seconds")
//Test.assertEquals(washHands(0, 2),  "0 minutes and 0 seconds")
//Test.assertEquals(washHands(13, 3), "409 minutes and 30 seconds")
//Test.assertEquals(washHands(1, 1), "10 minutes and 30 seconds")
//Test.assertEquals(washHands(7, 0), "0 minutes and 0 seconds")

