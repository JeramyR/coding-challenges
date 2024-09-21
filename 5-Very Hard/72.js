

//title: Max Increase While Keeping City Skyline

//tags: arrays,loops,math

//url: https://edabit.com/challenge/zLNho5QD5LcZReZxi

//Description:
//In a 2 dimensional array, each value represents the height of a building located there. You are allowed to increase the height of any number of buildings, by any amount (the amounts can be different for different buildings).
//At the end, the "skyline" when viewed from all four directions of the grid, i.e. top, bottom, left, and right, must be the same as the skyline of the original grid. A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed from a distance.
//Create a function that updates the heights of the buildings to the maximum possible under conditions: keep the original vertical and horizontal skylines; keep the zero heights equal to zero.
//Examples
//[
//  [3, 0, 8, 4],
//  [2, 4, 5, 7],
//  [9, 2, 6, 3],
//  [0, 3, 1, 0]
//]
//
//// Skyline viewed from top or bottom: [9, 4, 8, 7]
//// Skyline viewed from left or right: [8, 7, 9, 3]
//
//[
//  [8, 0, 8, 7],
//  [7, 4, 7, 7],
//  [9, 4, 8, 7],
//  [0, 3, 3, 0]
//]
//
//// Grid after increasing the height of buildings
//// without affecting skylines.
//Notes
//Height 0 is considered to be a protected park and nothing should be built on top of it.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(
//  keepSkyline([[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]]),
//  [[8, 0, 8, 7], [7, 4, 7, 7], [9, 4, 8, 7], [0, 3, 3, 0]]
//);
//Test.assertSimilar(
//  keepSkyline([[3, 1, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [1, 3, 1, 1]]),
//  [[8, 4, 8, 7], [7, 4, 7, 7], [9, 4, 8, 7], [3, 3, 3, 3]]
//);
//Test.assertSimilar(
//  keepSkyline([[11, 19, 4, 5, 6], [6, 21, 5, 13, 4], [9, 2, 0, 11, 3]]),
//  [[11, 19, 5, 13, 6], [11, 21, 5, 13, 6], [11, 11, 0, 11, 6]]
//);
//Test.assertSimilar(
//  keepSkyline([[11, 10, 6], [14, 5, 8], [7, 2, 0], [8, 18, 12], [2, 8, 4]]),
//  [[11, 11, 11], [14, 14, 12], [7, 7, 0], [14, 18, 12], [8, 8, 8]]
//);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Text Twist!

//tags: games,higher_order_functions,strings

//url: https://edabit.com/challenge/Ht7CqJtytgzfezwXA

//Description:
//In Text Twist, players try to score points by forming words using the letters from a 6-letter scrambled word. They win the round if they can successfully unscramble the 6-letter word.
//Create a function that takes in an array of already-guessed words, the unscrambled 6-letter word and returns the total number of points the player scored in a particular round using the following rubric:
//3-letter words are 1 pt
//4-letter words are 2 pts
//5-letter words are 3 pts
//6-letter words are 4 pts + 50 pt bonus (for unscrambling the word)
//Remember that invalid words (words that cannot be formed from the 6-letter unscrambled words) count as 0 pts.
//Examples
//totalPoints(["cat", "create", "sat"], "caster") ➞ 2
//// Since "create" is an invalid word.
//
//totalPoints(["trance", "recant"], "recant") ➞ 108
//// Since "trance" and "recant" score 54 pts each.
//
//totalPoints(["dote", "dotes", "toes", "set", "dot", "dots", "sted"], "tossed") ➞ 13
//// Since 2 + 3 + 2 + 1 + 1 + 2 + 2 = 13
//Notes
//If a 6-letter word has multiple anagrams, count each 6-letter unscramble as an additional 54 pts. For example, if the word is arches, and the player guessed arches and chaser, add 108 pts for both words.
//You can play Text Twist here: http://text-twist2.com

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(totalPoints(["dote", "dotes", "toes", "set", 
//                               "dot", "dots", "sted"], "tossed"), 13)
//Test.assertEquals(totalPoints(["dial", "tail", "lid", "tide", 
//                               "date", "late", "tad"], "detail"), 12)
//​
//// It should work with 6-letter words 
//Test.assertEquals(totalPoints(["trance", "recant"], "recant"), 108)
//Test.assertEquals(totalPoints(["bluest", "sublet", "let", 
//                               "set", "belt", "belts", "bet", 
//                              "bets", "sted", "but", "tule"], "subtle"), 121)
//​
//// It should work with incorrect words too 
//Test.assertEquals(totalPoints(["cat", "create", "sat"], "caster"), 2)
//Test.assertEquals(totalPoints(["emote", "tome", "root"], "meteor"), 5)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Quartic Equation

//tags: algebra,math

//url: https://edabit.com/challenge/fC5vcwuvCQievB4ki

//Description:
//Create a function that returns the number of (real) solutions of ax^4+bx^2+c=0. The function will take three arguments: a as the coefficient of x^4, b as the coefficient of x^2, and c as the constant term.
//Examples
//quarticEquation(1, -5, 4) ➞ 4
//
//quarticEquation(4, 3, -1) ➞ 2
//
//quarticEquation(1, 10, 9) ➞ 0
//Notes
//Hint: Try substitution t=x^2.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(quarticEquation(1, -5, 4), 4)
//Test.assertEquals(quarticEquation(4, 3, -1), 2)
//Test.assertEquals(quarticEquation(1, 10, 9), 0)
//Test.assertEquals(quarticEquation(4, -11, 6), 4)
//Test.assertEquals(quarticEquation(6, 19, -7), 2)
//Test.assertEquals(quarticEquation(9, -4, 0), 3)
//Test.assertEquals(quarticEquation(1, 1, 0), 1)

