

//title: Percentage of Box Filled In

//tags: arrays,logic,strings

//url: https://edabit.com/challenge/qYgE5kyLYuRve4Zap

//Description:
//Create a function that calculates what percentage of the box is filled in. Give your answer as a string percentage rounded to the nearest integer.
//Examples
//percentFilled([
//  "####",
//  "#  #",
//  "#o #",
//  "####"
//]) ➞ "25%"
//
//// One element out of four spaces.
//
//percentFilled([
//  "#######",
//  "#o oo #",
//  "#######"
//]) ➞ "60%"
//
//// Three elements out of five spaces.
//
//percentFilled([
//  "######",
//  "#ooo #",
//  "#oo  #",
//  "#    #",
//  "#    #",
//  "######"
//]) ➞ "31%"
//
//// Five elements out of sixteen spaces.
//Notes
//Only "o" will fill the box and also "o" will not be found outside of the box.
//Don't focus on how much physical space an element takes up, pretend that each element occupies one whole unit (which you can judge according to the number of "#" on the sides).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(percentFilled([
//  "####",
//  "#  #",
//  "#o #",
//  "####"
//]), "25%", "One element out of four spaces.")
//​
//Test.assertEquals(percentFilled([
//  "#######",
//  "#o oo #",
//  "#######"
//]), "60%", "Three elements out of five spaces.")
//​
//Test.assertEquals(percentFilled([
//  "######",
//  "#ooo #",
//  "#oo  #",
//  "#    #",
//  "#    #",
//  "######"
//]), "31%", "Five elements out of sixteen spaces.")
//​
//Test.assertEquals(percentFilled([
//  "####",
//  "#  #",

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Consecutive Numbers

//tags: arrays,loops,sorting,validation

//url: https://edabit.com/challenge/cCNsvFaBQYMkgYnGc

//Description:
//Create a function that determines whether elements in an array can be re-arranged to form a consecutive list of numbers where each number appears exactly once.
//Examples
//cons([5, 1, 4, 3, 2]) ➞ true
//// Can be re-arranged to form [1, 2, 3, 4, 5]
//
//cons([5, 1, 4, 3, 2, 8]) ➞ false
//
//cons([5, 6, 7, 8, 9, 9]) ➞ false
//// 9 appears twice
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(cons([5, 1, 4, 3, 2]), true)
//Test.assertEquals(cons([55, 59, 58, 56, 57]), true)
//Test.assertEquals(cons([-3, -2, -1, 1, 0]), true)
//Test.assertEquals(cons([5, 1, 4, 3, 2, 8]), false)
//Test.assertEquals(cons([5, 6, 7, 8, 9, 9]), false)
//Test.assertEquals(cons([5, 3]), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: What`s My Golf Score?

//tags: arrays,conditions,language_fundamentals

//url: https://edabit.com/challenge/NENuEMyxCoPzxwq5D

//Description:
//A standard-sized golf course has 18 holes. Each hole is given a par, which is the expected number of strokes (hits) that a good player would use to complete a hole. Golf also uses different terms for a player being over/under par for a particular hole:
//"eagle" = 2 under par (-2)
//"birdie" = 1 under par (-1)
//"bogey" = 1 over par (+1)
//"double-bogey" = 2 over par (+2)
//Example scores:
//"birdie" on a par 3 hole = 2
//"eagle" on a par 5 hole = 3
//"par" on a par 3 hole = 3
//"bogey" on a par 4 hole = 5
//Given an array of pars for an 18-hole golf course, and another array containing the player result for each hole, return the total score for the round of golf.
//Example
//course = [4, 4, 5, 3, 4, 4, 3, 5, 5, 3, 5, 4, 4, 4, 4, 3, 4, 4]
//
//result = ["eagle", "bogey", "par", "bogey", "double-bogey", "birdie", "bogey", "par", "birdie", "par", "par", "par", "par", "par", "bogey", "eagle", "bogey", "par"]
//
//score = 2+5+5+4+6+3+4+5+4+3+5+4+4+4+5+1+5+4 = 73
//Notes
//For this challenge, there will be no holes-in-one, albatrosses (-3), or anything worse than a double-bogey.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(golfScore([4, 4, 4, 4, 5, 3, 3, 4, 3, 5, 4, 4, 3, 4, 5, 4, 4, 5], ['double-bogey', 'par', 'par', 'double-bogey', 'eagle', 'par', 'bogey', 'birdie', 'birdie', 'bogey', 'par', 'birdie', 'par', 'par', 'par', 'par', 'bogey', 'par']), 74)
//Test.assertEquals(golfScore([5, 4, 4, 4, 4, 4, 5, 4, 3, 3, 4, 5, 3, 4, 4, 3, 5, 4], ['par', 'bogey', 'birdie', 'bogey', 'par', 'birdie', 'par', 'bogey', 'eagle', 'par', 'par', 'birdie', 'par', 'eagle', 'double-bogey', 'birdie', 'par', 'birdie']), 68)
//Test.assertEquals(golfScore([4, 3, 4, 4, 5, 4, 5, 4, 4, 4, 3, 5, 4, 4, 3, 4, 3, 5], ['bogey', 'par', 'birdie', 'par', 'par', 'birdie', 'bogey', 'par', 'par', 'double-bogey', 'par', 'double-bogey', 'par', 'eagle', 'par', 'par', 'par', 'par']), 74)
//Test.assertEquals(golfScore([4, 5, 4, 4, 4, 5, 5, 3, 4, 5, 4, 3, 4, 3, 3, 4, 4, 4], ['par', 'par', 'eagle', 'bogey', 'birdie', 'par', 'par', 'par', 'birdie', 'eagle', 'bogey', 'bogey', 'par', 'par', 'par', 'par', 'birdie', 'bogey']), 69)
//Test.assertEquals(golfScore([5, 5, 3, 5, 4, 4, 3, 4, 4, 4, 3, 3, 4, 4, 4, 5, 4, 4], ['birdie', 'par', 'par', 'par', 'bogey', 'bogey', 'bogey', 'double-bogey', 'par', 'par', 'par', 'par', 'eagle', 'par', 'double-bogey', 'par', 'birdie', 'par']), 75)
//Test.assertEquals(golfScore([4, 4, 4, 4, 5, 3, 4, 4, 3, 5, 3, 4, 5, 3, 4, 5, 4, 4], ['eagle', 'par', 'birdie', 'par', 'par', 'par', 'bogey', 'birdie', 'par', 'bogey', 'birdie', 'double-bogey', 'par', 'par', 'par', 'par', 'par', 'par']), 71)
//Test.assertEquals(golfScore([4, 5, 4, 4, 4, 4, 3, 5, 4, 3, 5, 5, 4, 3, 3, 4, 4, 4], ['par', 'par', 'bogey', 'birdie', 'birdie', 'par', 'par', 'par', 'par', 'bogey', 'par', 'par', 'birdie', 'par', 'birdie', 'bogey', 'birdie', 'double-bogey']), 72)
//Test.assertEquals(golfScore([4, 5, 3, 4, 4, 4, 4, 3, 4, 5, 4, 5, 4, 4, 4, 3, 5, 3], ['double-bogey', 'birdie', 'eagle', 'par', 'par', 'birdie', 'par', 'par', 'double-bogey', 'par', 'par', 'par', 'birdie', 'par', 'bogey', 'par', 'birdie', 'par']), 71)
//Test.assertEquals(golfScore([5, 5, 4, 5, 3, 4, 3, 4, 5, 3, 4, 4, 4, 4, 4, 4, 3, 4], ['par', 'par', 'eagle', 'bogey', 'bogey', 'par', 'birdie', 'par', 'par', 'par', 'par', 'birdie', 'birdie', 'eagle', 'par', 'birdie', 'par', 'birdie']), 65)
//Test.assertEquals(golfScore([5, 3, 4, 4, 4, 4, 5, 3, 4, 4, 4, 3, 4, 5, 4, 5, 4, 3], ['bogey', 'eagle', 'par', 'eagle', 'bogey', 'birdie', 'par', 'par', 'birdie', 'birdie', 'eagle', 'birdie', 'par', 'double-bogey', 'par', 'bogey', 'bogey', 'par']), 68)
//Test.assertEquals(golfScore([5, 4, 4, 3, 5, 4, 4, 4, 4, 5, 4, 3, 4, 3, 4, 5, 4, 3], ['birdie', 'par', 'par', 'par', 'par', 'par', 'par', 'eagle', 'birdie', 'par', 'bogey', 'birdie', 'bogey', 'birdie', 'par', 'par', 'birdie', 'par']), 67)
//Test.assertEquals(golfScore([4, 4, 4, 3, 4, 4, 4, 5, 4, 3, 4, 3, 5, 3, 4, 5, 4, 5], ['double-bogey', 'par', 'bogey', 'birdie', 'par', 'par', 'birdie', 'par', 'par', 'par', 'par', 'par', 'bogey', 'par', 'par', 'birdie', 'birdie', 'par']), 72)
//Test.assertEquals(golfScore([4, 3, 4, 4, 3, 5, 4, 4, 5, 3, 4, 3, 5, 4, 4, 4, 5, 4], ['par', 'eagle', 'bogey', 'par', 'birdie', 'bogey', 'par', 'par', 'birdie', 'par', 'par', 'double-bogey', 'par', 'bogey', 'bogey', 'double-bogey', 'par', 'bogey']), 77)
//Test.assertEquals(golfScore([3, 4, 5, 3, 4, 5, 3, 5, 4, 4, 4, 4, 4, 3, 5, 4, 4, 4], ['double-bogey', 'par', 'par', 'par', 'bogey', 'par', 'par', 'par', 'par', 'birdie', 'par', 'eagle', 'eagle', 'bogey', 'par', 'birdie', 'bogey', 'double-bogey']), 73)
//Test.assertEquals(golfScore([3, 4, 5, 4, 4, 3, 5, 4, 4, 4, 4, 4, 5, 3, 5, 3, 4, 4], ['double-bogey', 'par', 'par', 'par', 'par', 'birdie', 'par', 'bogey', 'bogey', 'par', 'par', 'birdie', 'par', 'par', 'par', 'par', 'birdie', 'bogey']), 74)
//Test.assertEquals(golfScore([5, 3, 4, 3, 4, 5, 4, 4, 4, 4, 4, 3, 4, 5, 5, 4, 3, 4], ['par', 'double-bogey', 'par', 'birdie', 'eagle', 'eagle', 'birdie', 'birdie', 'eagle', 'par', 'par', 'par', 'par', 'par', 'eagle', 'birdie', 'bogey', 'bogey']), 64)
//Test.assertEquals(golfScore([5, 4, 4, 3, 4, 5, 4, 3, 3, 4, 4, 4, 4, 5, 3, 5, 4, 4], ['bogey', 'birdie', 'birdie', 'par', 'eagle', 'par', 'birdie', 'par', 'par', 'eagle', 'par', 'bogey', 'par', 'par', 'par', 'eagle', 'par', 'par']), 65)
//Test.assertEquals(golfScore([4, 4, 4, 4, 5, 3, 5, 4, 4, 4, 3, 3, 3, 5, 4, 5, 4, 4], ['par', 'par', 'par', 'eagle', 'birdie', 'birdie', 'bogey', 'eagle', 'bogey', 'eagle', 'par', 'birdie', 'bogey', 'bogey', 'par', 'bogey', 'par', 'par']), 68)
//Test.assertEquals(golfScore([4, 5, 5, 3, 3, 4, 5, 3, 5, 4, 3, 4, 4, 4, 4, 4, 4, 4], ['par', 'bogey', 'par', 'par', 'bogey', 'par', 'birdie', 'birdie', 'eagle', 'bogey', 'par', 'par', 'par', 'eagle', 'bogey', 'double-bogey', 'par', 'eagle']), 70)
//Test.assertEquals(golfScore([4, 5, 3, 4, 4, 4, 5, 5, 4, 4, 4, 3, 4, 4, 3, 5, 3, 4], ['par', 'birdie', 'par', 'birdie', 'eagle', 'birdie', 'par', 'par', 'par', 'par', 'par', 'birdie', 'par', 'double-bogey', 'par', 'birdie', 'bogey', 'eagle']), 66)

