

//title: Age Difference Between Spouses

//tags: arrays,language_fundamentals,sorting

//url: https://edabit.com/challenge/3pJCxeSiKFC9gKtYt

//Description:
//Create a function that determines the age difference between spouses in a household. The ages ages in years of the parents and their children are given in an array.
//If there is no difference in age between the parents, return "No age difference between spouses.". Otherwise, return the difference in years. Check the examples for more clarification.
//Examples
//ageDifference([29, 1, 6, 8, 28]) ➞ "1 year"
//
//ageDifference([43, 86, 49, 86]) ➞ "No age difference between spouses."
//
//ageDifference([2, 4, 6, 32, 27]) ➞ "5 years"
//Notes
//Note the singular "year".
//The younger spouse (if the spouses are not the same age) will be older than their oldest child by a minimum of 20 years.
//The age difference between spouses will not be more than 18 years.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(ageDifference([29, 1, 6, 8, 28]), "1 year")
//Test.assertEquals(ageDifference([43, 86, 49, 86]), "No age difference between spouses.")
//Test.assertEquals(ageDifference([2, 4, 6, 32, 27]), "5 years")
//Test.assertEquals(ageDifference([55, 28, 25, 56, 20]), "1 year")
//Test.assertEquals(ageDifference([21, 56, 69, 18]), "13 years")
//Test.assertEquals(ageDifference([25, 70, 25, 26, 58]), "12 years")
//Test.assertEquals(ageDifference([10, 12, 44, 9, 44]), "No age difference between spouses.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Return Last Item

//tags: arrays,strings

//url: https://edabit.com/challenge/MT5SbF9Xg5Dku6bqL

//Description:
//Create a function that returns the last value of the last item in an array or string.
//Examples
//lastItem([0, 4, 19, 34, 50, -9, 2]) ➞ 2
//
//lastItem("The quick brown fox jumped over the lazy dog") ➞ "g"
//
//lastItem([]) ➞ undefined
//Notes
//Arrays/strings will be of varying size.
//Return undefined if array/string is empty.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(lastItem([0, 4, 19, 34, 50, -9, 2]), 2)
//Test.assertEquals(lastItem(["Hello", "There", "JavaScript", "User"]), "User")
//Test.assertEquals(lastItem([]), undefined)
//Test.assertEquals(lastItem([true, false, false, true]), true)
//Test.assertEquals(lastItem([(5, 0), (0, 5, 6, 7), (3, 5, 67, 7), (0, -9, 3, 45, 5)]), (0, -9, 3, 45, 5))
//Test.assertEquals(lastItem("JavaScript is a great programming langauge."), ".")
//Test.assertEquals(lastItem(["H", "E", "L", "L", "O"]), "O")
//Test.assertEquals(lastItem("The quick brown fox jumped over the lazy dog"), "g")
//Test.assertEquals(lastItem(""), undefined)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Primitive Darts Game

//tags: conditions,control_flow,language_fundamentals,math

//url: https://edabit.com/challenge/kKZ8icWBuMFaSXbfr

//Description:
//Darts is a target game played by throwing feathered darts at a circular board with numbered spaces. Our darts game is the simplest of all games. The score of a single turn is calculated based on the distance from the middle. You need to create a function that takes the dart location as two cartesian coordinates (x, y) and returns a score based on the distance from the middle, aka Bullseye (x=0, y=0).
//Bullseye and inner circle scores = 10 points
//Middle ring scores = 5 points
//Outer ring scores = 1 point
//Outside the target = 0 points
//We play it simple so a dart in the double or treble ring counts as usual and does not affect the segment score.
//Board and circle radius is as follows:
//Board radius and outer circle radius = 10 units
//Middle circle radius = 5 units
//Inner circle radius = 1 unit
//Short Description
//Convert cartesian coordinates (x, y) to polar coordinates (R, phi) and return score based on the R value. R > 10 gives 0 points, 10 >= R > 5 gives 1 point, 5 >= R > 1 gives 5 points, R <= 1 gives 10 points.
//Examples
//dartsScoring(0, 0) ➞ 10
//
//dartsScoring(3, 2) ➞ 5
//
//dartsScoring(0, -0.8) ➞ 10
//Notes
//X, Y values can be both positive and negative.
//X, Y values can be int and float.
//No wrong type values will be given.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(dartsScoring(-9, 9), 0)
//Test.assertEquals(dartsScoring(0, 10), 1)
//Test.assertEquals(dartsScoring(-5, 0), 5)
//Test.assertEquals(dartsScoring(0, -1), 10)
//Test.assertEquals(dartsScoring(0, 0), 10)
//Test.assertEquals(dartsScoring(-0.1, -0.1), 10)
//Test.assertEquals(dartsScoring(0.7, 0.7), 10)
//Test.assertEquals(dartsScoring(0.8, -0.8), 5)
//Test.assertEquals(dartsScoring(-3.5, 3.5), 5)
//Test.assertEquals(dartsScoring(-3.6, -3.6), 1)
//Test.assertEquals(dartsScoring(-7.0, 7.0), 1)
//Test.assertEquals(dartsScoring(7.1, -7.1), 0)
//Test.assertEquals(dartsScoring(0.5, -4), 5)
//​
//// Author : serf (Python)

