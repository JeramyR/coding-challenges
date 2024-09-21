

//title: House of Cards

//tags: math,numbers

//url: https://edabit.com/challenge/6mYAoRAvLHJ5ypots

//Description:
//The image below shows a sequence of larger and larger houses of cards, with the total number of cards included for each:
//
//Given the tower height n, return the number of cards needed to construct a full house of cards.
//Examples
//cardsNeeded(3) ➞ 15
//
//cardsNeeded(4) ➞ 26
//
//cardsNeeded(0) ➞ 0
//Notes
//The height should always be equal or greater than 0. Return "invalid" if the value given doesn't abide by this rule.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(cardsNeeded(-3), "invalid")
//Test.assertEquals(cardsNeeded(-2), "invalid")
//Test.assertEquals(cardsNeeded(-1), "invalid")
//Test.assertEquals(cardsNeeded(0), 0)
//Test.assertEquals(cardsNeeded(1), 2)
//Test.assertEquals(cardsNeeded(2), 7)
//Test.assertEquals(cardsNeeded(3), 15)
//Test.assertEquals(cardsNeeded(4), 26)
//Test.assertEquals(cardsNeeded(5), 40)
//Test.assertEquals(cardsNeeded(6), 57)
//Test.assertEquals(cardsNeeded(7), 77)
//Test.assertEquals(cardsNeeded(8), 100)
//Test.assertEquals(cardsNeeded(9), 126)
//Test.assertEquals(cardsNeeded(10), 155)
//Test.assertEquals(cardsNeeded(11), 187)
//Test.assertEquals(cardsNeeded(12), 222)
//Test.assertEquals(cardsNeeded(13), 260)
//Test.assertEquals(cardsNeeded(14), 301)
//Test.assertEquals(cardsNeeded(15), 345)
//Test.assertEquals(cardsNeeded(16), 392)
//Test.assertEquals(cardsNeeded(17), 442)
//Test.assertEquals(cardsNeeded(18), 495)
//Test.assertEquals(cardsNeeded(19), 551)
//Test.assertEquals(cardsNeeded(20), 610)
//Test.assertEquals(cardsNeeded(21), 672)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Curzon Numbers

//tags: math,numbers,validation

//url: https://edabit.com/challenge/jXdJfXXtJ77rRCCR8

//Description:
//In this challenge, establish if a given integer num is a Curzon number. If 1 plus 2 elevated to num is exactly divisible by 1 plus 2 multiplied by num, then num is a Curzon number.
//Given a non-negative integer num, implement a function that returns true is num is a Curzon number, or false if it's not.
//Examples
//isCurzon(5) ➞ true
//// 2 ** 5 + 1 = 33
//// 2 * 5 + 1 = 11
//// 33 is a multiple of 11
//
//isCurzon(10) ➞ false
//// 2 ** 10 + 1 = 1025
//// 2 * 10 + 1 = 21
//// 1025 is not a multiple of 21
//
//isCurzon(14) ➞ true
//// 2 ** 14 + 1 = 16385
//// 2 * 14 + 1 = 29
//// 16385 is a multiple of 29
//Notes
//Note for JavaScript version: in this challenge, you must use BigInt objects instead of numbers. If you need an introduction to this special type of numbers, check the Resources and Comments tabs.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isCurzon(5), true)
//Test.assertEquals(isCurzon(10), false)
//Test.assertEquals(isCurzon(14), true)
//Test.assertEquals(isCurzon(86), true)
//Test.assertEquals(isCurzon(90), true)
//Test.assertEquals(isCurzon(115), false)
//Test.assertEquals(isCurzon(120), false)
//Test.assertEquals(isCurzon(194), true)
//Test.assertEquals(isCurzon(293), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Money Formatting

//tags: formatting,numbers,strings

//url: https://edabit.com/challenge/F9aetoMuYmWrALjxh

//Description:
//Given a number, return a string which is formatted into US Dollars and cents!
//Remember that:
//You should round to two digits after the decimal point (even for integers).
//Thousandths should be separated by commas.
//Examples
//dollaDollaBills(10) ➞ "$10.00"
//
//dollaDollaBills(1000000) ➞ "$1,000,000.00"
//
//dollaDollaBills(-314159.2653) ➞ "-$314,159.27"
//
//dollaDollaBills(-56.99) ➞ "-$56.99"
//Notes
//There will be both negative and positive inputs.
//Check the Resources tab for many tutorials on how to approach string formatting.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(dollaDollaBills(10), "$10.00")
//Test.assertEquals(dollaDollaBills(31.4159), "$31.42")
//Test.assertEquals(dollaDollaBills(-56.99), "-$56.99")
//Test.assertEquals(dollaDollaBills(-0.008), "-$0.01")
//Test.assertEquals(dollaDollaBills(0.05), "$0.05")
//Test.assertEquals(dollaDollaBills(1000000), "$1,000,000.00")
//Test.assertEquals(dollaDollaBills(-314159.2653), "-$314,159.27")

