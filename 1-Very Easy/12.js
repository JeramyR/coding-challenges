

//title: Let`s Fuel Up!

//tags: control_flow,language_fundamentals,numbers

//url: https://edabit.com/challenge/YMWDcSuYwYvve3HZj

//Description:
//A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.
//Create a function which calculates the amount of fuel it needs, given the distance.
//Examples
//calculateFuel(15) ➞ 150
//
//calculateFuel(23.5) ➞ 235
//
//calculateFuel(3) ➞ 100
//Notes
//Distance will be a number greater than zero.
//Return 100 if the calculated fuel turns out to be less than 100.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(calculateFuel(15), 150)
//Test.assertEquals(calculateFuel(23), 230)
//Test.assertEquals(calculateFuel(10), 100)
//Test.assertEquals(calculateFuel(3), 100)
//Test.assertEquals(calculateFuel(23.5), 235)
//Test.assertEquals(calculateFuel(3.14), 100)
//Test.assertEquals(calculateFuel(9.99999), 100)
//Test.assertEquals(calculateFuel(822315322), 8223153220)
//Test.assertEquals(calculateFuel(12345.6789), 123456.789)
//Test.assertEquals(calculateFuel(31.41), 314.1)
//​
//// Author: Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Buggy Code (Part 2)

//tags: bugs,language_fundamentals

//url: https://edabit.com/challenge/uE9AJ4sSrrpSASMpu

//Description:
//Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
//Examples
//maxNum(3, 7) ➞ 7
//
//maxNum(-1, 0) ➞ 0
//
//maxNum(1000, 400) ➞ 1000
//Notes
//READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
//Don't overthink this challenge; it's not supposed to be hard.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(maxNum(3, 7), 7)
//Test.assertEquals(maxNum(-1, 0), 0)
//Test.assertEquals(maxNum(1000, 400), 1000)
//Test.assertEquals(maxNum(-3, -9), -3)
//Test.assertEquals(maxNum(88, 90), 90)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Pair Management

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/BFnsRqe8PFvEwcRNt

//Description:
//Given two arguments, return an array which contains these two arguments.
//Examples
//makePair(1, 2) ➞ [1, 2]
//
//makePair(51, 21) ➞ [51, 21]
//
//makePair(512124, 215) ➞ [512124, 215]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(makePair(1, 2), [1, 2])
//Test.assertSimilar(makePair(21, 82), [21, 82])
//Test.assertSimilar(makePair(4213, 526), [4213, 526])

