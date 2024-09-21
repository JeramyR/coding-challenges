

//title: Reverse Coding Challenge #6

//tags: algorithms,loops,numbers

//url: https://edabit.com/challenge/igEBCD9MzBfKfEMog

//Description:
//This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.
//Your task is to create a function that, when fed the inputs below, produces the sample outputs shown.
//Examples
//mysteryFunc(152) ➞ 10
//
//mysteryFunc(832) ➞ 48
//
//mysteryFunc(19) ➞ 9
//
//mysteryFunc(133) ➞ 9
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(mysteryFunc(152), 10)
//Test.assertEquals(mysteryFunc(832), 48)
//Test.assertEquals(mysteryFunc(5511), 25)
//Test.assertEquals(mysteryFunc(19), 9)
//Test.assertEquals(mysteryFunc(133), 9)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Fractions and Rounding

//tags: formatting,numbers,strings

//url: https://edabit.com/challenge/e9oMvkS7Fb72kSehT

//Description:
//Given a fraction frac (given in the format "1/2" for example) and n number of decimal places, return a sentence in the following format:
//"{fraction} rounded to {n} decimal places is {answer}"
//Examples
//fracRound("1/3", 5) ➞ "1/3 rounded to 5 decimal places is 0.33333"
//
//fracRound("2/8", 4) ➞ "2/8 rounded to 4 decimal places is 0.2500"
//
//fracRound("22/7", 2) ➞ "22/7 rounded to 2 decimal places is 3.14"
//Notes
//Add trailing zeros if n is greater than the actual number of decimal places the fraction has (see example #2).
//Numbers greater than one may be given as top-heavy fractions (no mixed numbers).
//n won't be 1 because that would cause "decimal places" to be "decimal place", making the challenge more cumbersome than it needs to be.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(fracRound("1/3", 5), "1/3 rounded to 5 decimal places is 0.33333")
//Test.assertEquals(fracRound("2/8", 4), "2/8 rounded to 4 decimal places is 0.2500")
//Test.assertEquals(fracRound("22/7", 2), "22/7 rounded to 2 decimal places is 3.14")
//Test.assertEquals(fracRound("23/2", 2), "23/2 rounded to 2 decimal places is 11.50")
//Test.assertEquals(fracRound("40/77", 3), "40/77 rounded to 3 decimal places is 0.519")
//Test.assertEquals(fracRound("15/58", 3), "15/58 rounded to 3 decimal places is 0.259")
//Test.assertEquals(fracRound("2/92", 2), "2/92 rounded to 2 decimal places is 0.02")
//Test.assertEquals(fracRound("21/65", 6), "21/65 rounded to 6 decimal places is 0.323077")
//Test.assertEquals(fracRound("29/40", 3), "29/40 rounded to 3 decimal places is 0.725")
//Test.assertEquals(fracRound("49/38", 6), "49/38 rounded to 6 decimal places is 1.289474")
//Test.assertEquals(fracRound("20/69", 3), "20/69 rounded to 3 decimal places is 0.290")
//Test.assertEquals(fracRound("17/46", 6), "17/46 rounded to 6 decimal places is 0.369565")
//Test.assertEquals(fracRound("46/28", 4), "46/28 rounded to 4 decimal places is 1.6429")
//Test.assertEquals(fracRound("12/89", 3), "12/89 rounded to 3 decimal places is 0.135")
//Test.assertEquals(fracRound("9/76", 7), "9/76 rounded to 7 decimal places is 0.1184211")
//Test.assertEquals(fracRound("20/64", 4), "20/64 rounded to 4 decimal places is 0.3125")
//Test.assertEquals(fracRound("28/77", 7), "28/77 rounded to 7 decimal places is 0.3636364")
//Test.assertEquals(fracRound("17/52", 4), "17/52 rounded to 4 decimal places is 0.3269")
//Test.assertEquals(fracRound("21/98", 6), "21/98 rounded to 6 decimal places is 0.214286")
//Test.assertEquals(fracRound("49/61", 4), "49/61 rounded to 4 decimal places is 0.8033")
//Test.assertEquals(fracRound("28/62", 3), "28/62 rounded to 3 decimal places is 0.452")
//Test.assertEquals(fracRound("17/36", 3), "17/36 rounded to 3 decimal places is 0.472")
//Test.assertEquals(fracRound("8/41", 2), "8/41 rounded to 2 decimal places is 0.20")
//Test.assertEquals(fracRound("50/37", 7), "50/37 rounded to 7 decimal places is 1.3513514")
//Test.assertEquals(fracRound("21/41", 3), "21/41 rounded to 3 decimal places is 0.512")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Harshad Number

//tags: loops,math,numbers,strings

//url: https://edabit.com/challenge/Rrauvu8afRbjqPM8L

//Description:
//A number is said to be Harshad if it's exactly divisible by the sum of its digits. Create a function that determines whether a number is a Harshad or not.
//Examples
//isHarshad(75) ➞ false
//// 7 + 5 = 12
//// 75 is not exactly divisible by 12
//
//isHarshad(171) ➞ true
//// 1 + 7 + 1 = 9
//// 9 exactly divides 171
//
//isHarshad(481) ➞ true
//
//isHarshad(89) ➞ false
//
//isHarshad(516) ➞ true
//
//isHarshad(200) ➞ true
//Notes
//A recursive version of this challenge can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [numVector, resVector] = [
//  [75, 171, 481, 89, 516, 200, 209, 12345, 53, 27],
//  [false, true, true, false, true, true, true, true, false, true]
//]
//for (let i in numVector) Test.assertEquals(isHarshad(numVector[i]), resVector[i])

