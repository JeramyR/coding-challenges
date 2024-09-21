

//title: Xs and Os, Nobody Knows

//tags: conditions,language_fundamentals,regex,strings,validation

//url: https://edabit.com/challenge/RG5NJWDa7pZGFkhTA

//Description:
//Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.
//Return a boolean value (true or false).
//Return true if the amount of x's and o's are the same.
//Return false if they aren't the same amount.
//The string can contain any character.
//When "x" and "o" are not in the string, return true.
//Examples
//XO("ooxx") ➞ true
//
//XO("xooxx") ➞ false
//
//XO("ooxXm") ➞ true
//// Case insensitive.
//
//XO("zpzpzpp") ➞ true
//// Returns true if no x and o.
//
//XO("zzoo") ➞ false
//Notes
//Remember to return true if there aren't any x's or o's.
//Must be case insensitive.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(XO("ooxx"), true);
//Test.assertEquals(XO("xooxx"), false);
//Test.assertEquals(XO("ooxXm"), true);
//Test.assertEquals(XO("zpzpzpp"), true);
//Test.assertEquals(XO("zzoo"), false);
//Test.assertEquals(XO("Xo"), true);
//Test.assertEquals(XO("x"), false);
//Test.assertEquals(XO("o"), false);
//Test.assertEquals(XO("xxxoo"), false);
//Test.assertEquals(XO(""), true);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Snail Goes Up the Stairs

//tags: algebra,math,numbers

//url: https://edabit.com/challenge/9fhT4EBbBR4BvJLwB

//Description:
//A snail goes up the stairs. Every step, he must go up the step, then go across to the next step. He wants to reach the top of the tower.
//Write a function that returns the distance the snail must travel to the top of the tower given the height and length of each step and the height of the tower.
//Examples
//totalDistance(0.2, 0.4, 100.0) ➞ 300.0
//// Total distance is 300.
//
//totalDistance(0.3, 0.2, 25.0) ➞ 41.7
//
//totalDistance(0.1, 0.1, 6.0) ➞ 12.0
//Notes
//All given values are greater than 0.
//Round answers to the nearest tenth 0.1.
//Number of steps determined by tower height divided by stair height.
//For the purposes of this exercise, the last step's length must be counted to complete the journey.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(totalDistance(0.2, 0.4, 100.0), 300.0)
//Test.assertEquals(totalDistance(0.12, 0.1, 10.0), 18.3)
//Test.assertEquals(totalDistance(0.5, 0.5, 25.0), 50.0)
//Test.assertEquals(totalDistance(0.1, 0.1, 6.0), 12.0)
//Test.assertEquals(totalDistance(0.05, 0.1, 1.1), 3.3)
//Test.assertEquals(totalDistance(1.0, 1.0, 777.0), 1554.0)
//Test.assertEquals(totalDistance(0.2, 0.1, 100.6), 150.9)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: A Long Long Time

//tags: conditions,dates,math,numbers

//url: https://edabit.com/challenge/9fpBX9AFizhDeFk8R

//Description:
//Create a function that takes three values:
//h hours
//m minutes
//s seconds
//Return the value that's the longest duration.
//Examples
//longestTime(1, 59, 3598) ➞ 1
//
//longestTime(2, 300, 15000) ➞ 300
//
//longestTime(15, 955, 59400) ➞ 59400
//Notes
//No two durations will be the same.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(longestTime(1, 59, 3598), 1)
//Test.assertEquals(longestTime(2, 300, 15000), 300)
//Test.assertEquals(longestTime(15, 955, 59400), 59400)

