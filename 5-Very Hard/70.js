

//title: Fix the Right Answer

//tags: math,strings

//url: https://edabit.com/challenge/h7c3CTDzWge6SAzKT

//Description:
//Create a function that takes a string and returns the right answer.
//Examples
//postfix("2 2 +") ➞ 4
//
//postfix("2 2 /") ➞ 1
//
//postfix("8 4 / 9 * 3 1 * /") ➞ 54
//Notes
//The operators + - * / may be supported.
//Output always returns an integer.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(postfix("2 2 +"), 4)
//Test.assertEquals(postfix("2 2 /"), 1)
//Test.assertEquals(postfix("8 4 / 9 * 3 1 * /"), 54)
//Test.assertEquals(postfix("5 6 * 2 1 + /"), 32)
//Test.assertEquals(postfix("10 10 * 10 /"), 10)
//Test.assertEquals(postfix("1 1 + 2 2 + -"), 2)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Longest Consecutive Run

//tags: arrays,control_flow,logic,loops

//url: https://edabit.com/challenge/J3HA3p3enpxnMJCmd

//Description:
//A consecutive-run is a list of adjacent, consecutive integers. This list can be either increasing or decreasing. Create a function that takes an array of numbers and returns the length of the longest consecutive-run.
//To illustrate:
//longestRun([1, 2, 3, 5, 6, 7, 8, 9]) ➞ 5
//// Two consecutive runs: [1, 2, 3] and [5, 6, 7, 8, 9] (longest).
//Examples
//longestRun([1, 2, 3, 10, 11, 15]) ➞ 3
//// Longest consecutive-run: [1, 2, 3].
//
//longestRun([5, 4, 2, 1]) ➞ 2
//// Longest consecutive-run: [5, 4] and [2, 1].
//
//longestRun([3, 5, 7, 10, 15]) ➞ 1
//// No consecutive runs, so we return 1.
//Notes
//If there aren't any consecutive runs (there is a gap between each integer), return 1.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(longestRun([1, 2, 3, 5, 6, 7, 8, 9]), 5)
//Test.assertEquals(longestRun([1, 2, 3, 10, 11, 15]), 3)
//Test.assertEquals(longestRun([-7, -6, -5, -4, -3, -2, -1]), 7)
//Test.assertEquals(longestRun([3, 5, 6, 10, 15]), 2)
//Test.assertEquals(longestRun([3, 5, 7, 10, 15]), 1)
//Test.assertEquals(longestRun([5, 4, 3, 2, 1]), 5)
//Test.assertEquals(longestRun([5, 4, 2, 1]), 2)
//Test.assertEquals(longestRun([10, 9, 0, 5]), 2)
//Test.assertEquals(longestRun([1, 2, 3, 2, 1]), 3)
//Test.assertEquals(longestRun([10, 9, 8, 7, 6, 2, 1]), 5)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Route Tracer

//tags: arrays,data_structures,formatting,loops

//url: https://edabit.com/challenge/cZReb2PbqAcfRserf

//Description:
//In this challenge, the work area will be a 4x4 matrix containing three types of characters:
//@ Your position.
//- A blank spot.
//&, #, $ Collectible items.
//From your starting point in the grid, you have to trace a route placing a x in every spot visited, following a sequence of letters with the directions to take:
//l Left
//r Right
//u Up
//d Down
//input = "luur"
//// left, up, up, right
//
//grid = [
//["-", "-", "-", "#"]
//["-", "-", "$", "-"]
//["-", "-", "-", "@"]
//["-", "&", "-", "-"] ]
//
//result = { route = [
//["-", "-", "x", "x"],
//["-", "-", "x", "-"],
//["-", "-", "x", "@"],
//["-", "&", "-", "-"] ],
//items: "$#" }
//When moves are finished, you will have a new grid with the traced given route (a route made of x chars), and a series of items collected along the way.
//Given a matrix grid and a string with the directions to take input, implement a function that returns an object literal containing the traced route as a new matrix and the items collected as a string.
//Examples
//function routeTracer([
//  ["-", "#", "-", "-"],
//  ["$", "#", "@", "&"],
//  ["-", "#", "$", "&"],
//  ["$", "-", "&", "-"]
//], "lddr",) ➞ {
//  route: [
// ["-", "#", "-", "-"],
//  ["$", "x", "@", "&"],
//  ["-", "x", "$", "&"],
//  ["$", "x", "x", "-"]
//  ],
//  items: "##&"
//}
//Notes
//The starting position must not be changed in the new matrix.
//The x will overwite the symbol already present in the spot visited.
//In the returned string, items have to appear in the order you collected them. Watch out for the blank spots: they're not collectible!
//Don't worry about "out of bounds" cases, instruction strings contain only valid routes.
//Instruction strings will have different lengths.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const grid1 =   [ ["-", "#", "-", "-"],
//                  ["$", "#", "@", "&"],
//                  ["-", "#", "$", "&"],
//                  ["$", "-", "&", "-"] ],
//      inpt1 =   "lddr",
//      // Test #1
//      answ1 =   {route:
//                [ [ '-', '#', '-', '-' ],
//                  [ '$', 'x', '@', '&' ],
//                  [ '-', 'x', '$', '&' ],
//                  [ '$', 'x', 'x', '-' ] ],
//                items: '##&'},  
//      grid2 =   [ ["-", "-", "&", "-"],
//                  ["-", "-", "&", "-"],
//                  ["$", "#", "-", "#"],
//                  ["-", "@", "-", "$"] ],
//      inpt2 =   "ulurrr",
//      // Test #2
//      answ2 =   {route:
//                [ [ '-', '-', '&', '-' ],
//                  [ 'x', 'x', 'x', 'x' ],
//                  [ 'x', 'x', '-', '#' ],
//                  [ '-', '@', '-', '$' ] ],
//                items: '#$&'},
//      grid3 =   [ ["-", "#", "&", "-"],

