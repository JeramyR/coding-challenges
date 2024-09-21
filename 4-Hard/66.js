

//title: Dice Score

//tags: games,numbers,validation

//url: https://edabit.com/challenge/tM3qXKn2MMCYCpWMD

//Description:
//Greed is a dice game played with five six-sided dice. Your mission is to score a throw according to these rules:
// Three 1's => 1000 points
// Three 6's =>  600 points
// Three 5's =>  500 points
// Three 4's =>  400 points
// Three 3's =>  300 points
// Three 2's =>  200 points
// One   1   =>  100 points
// One   5   =>   50 point
//See the below examples for a better understanding:
// Throw       Score
// ---------   ------------------
// 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
// 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
// 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
//Create a function that takes an array of five six-sided throw values and returns the final calculated dice score.
//Examples
//diceScore([2, 3, 4, 6, 2]) ➞ 0
//
//diceScore([4, 4, 4, 3, 3]) ➞ 400
//
//diceScore([2, 4, 4, 5, 4]) ➞ 450
//Notes
//A single dice can only be counted once in each roll. For example, a given "5" can only be counted as a part of the triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(diceScore([2,3,4,6,2]),0)
//Test.assertEquals(diceScore([1,1,1,3,3]),1000,"Should be 1000");
//Test.assertEquals(diceScore([2,2,2,3,3]),200,"Should be 200");
//Test.assertEquals(diceScore([3,3,3,3,3]),300,"Should be 300");
//Test.assertEquals(diceScore([4,4,4,3,3]),400,"Should be 400");
//Test.assertEquals(diceScore([5,5,5,3,3]),500,"Should be 500");
//Test.assertEquals(diceScore([6,6,6,3,3]),600,"Should be 600");
//Test.assertEquals(diceScore([1,1,1,1,3]),1100,"Should be 1100");
//Test.assertEquals(diceScore([1,1,1,1,5]),1150,"Should be 1150");
//Test.assertEquals(diceScore([2,4,4,5,4]),450,"Should be 450");
//Test.assertEquals(diceScore([3,4,5,3,3]),350,"Should be 350");
//Test.assertEquals(diceScore([1,5,1,3,4]),250,"Should be 250");
//​
////Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Secret Function

//tags: language_fundamentals,logic,math,numbers

//url: https://edabit.com/challenge/BFJbFNJv2E8icogRk

//Description:
//Create a function based on the input and output. Look at the examples, there is a pattern.
//Examples
//secret(24) ➞ 8
//
//secret(42) ➞ 8
//
//secret(15) ➞ -4
//
//secret(52) ➞ 15
//Notes
//num >= 10 and num <= 52
//Math.pow, * and - can be helpful.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(secret(24), 8)
//Test.assertEquals(secret(32), 3)
//Test.assertEquals(secret(23), 2)
//Test.assertEquals(secret(42), 8)
//Test.assertEquals(secret(15), -4)
//Test.assertEquals(secret(32), 3)
//Test.assertEquals(secret(52), 15)
//Test.assertEquals(secret(25), 22)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Format Date String

//tags: dates,formatting

//url: https://edabit.com/challenge/mti3rGTDLyk4woxCi

//Description:
//Create a function that takes a date object and return string in the following format:
//YYYYMMDDHHmmSS
//The format should contain a 4 digit year, 2 digit month, 2 digit day, 2 digit hour(00-23), 2 digit minute and 2 digit second. If any of the value has only signle digit, you must use zero prefix, so that the result string length is always same.
//Examples
//formatDate(new Date(2020, 6, 4, 8, 0, 0)) ➞ "20200704080000"
//
//formatDate(new Date(2019, 11, 31, 23, 59, 59)) ➞ "20191231235959"
//
//formatDate(new Date(2020, 6, 4)) ➞ "20200704000000"
//Notes
//Assume Date year input will always be greater than 1970.
//Try not to rely on default Date.toString() output in your impelementation.
//Be aware that the Date's month field is zero based (0 is January and 11 is December).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(formatDate(new Date(2020, 6, 4, 8, 0, 0)), "20200704080000")
//Test.assertEquals(formatDate(new Date(2019, 11, 31, 23, 59, 59)), "20191231235959")
//Test.assertEquals(formatDate(new Date(1970, 0, 1, 00, 00, 00)), "19700101000000")
//Test.assertEquals(formatDate(new Date(2020, 6, 4)), "20200704000000")

