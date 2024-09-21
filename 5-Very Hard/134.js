

//title: Intersecting Rows and Columns

//tags: arrays,higher_order_functions,loops

//url: https://edabit.com/challenge/tCFfABNfydAuX6qvK

//Description:
//Suppose any nxm matrix of 0s and 1s can be transformed into a second matrix, where each number in position (i, j) in the new matrix is the sum of 1s in row i and column j in the original matrix, excluding itself (if it is a 1).
//[[1, 0, 0, 0, 1],
//[0, 1, 0, 0, 0],
//[0, 0, 0, 1, 0],
//[0, 1, 0, 1, 0],
//[0, 1, 0, 0, 0]]
//
//[1, 5, 2, 4, 1],
//[2, 4, 1, 3, 2],
//[2, 4, 1, 1, 2],
//[3, 2, 2, 2, 3],
//[2, 2, 1, 3, 2]
//
//// The 1 on the upper left corner has 1 other 1 in the same row as itself (excluding itself).
//// The 0 to the right of the 1 has 2 1's on the same row as itself, and 3 1's in the same column, etc.
//Create a function that transforms the first matrix into its second matrix equivalent.
//Examples
//transformMatrix([
//  [1, 0, 0],
//  [0, 1, 0],
//  [0, 0, 1]
//]) ➞ [
//  [0, 2, 2],
//  [2, 0, 2],
//  [2, 2, 0]
//]
//
//transformMatrix([
//  [1, 1, 1],
//  [0, 0, 1],
//  [0, 0, 1]
//]) ➞ [
//  [2, 2, 4],
//  [2, 2, 2],
//  [2, 2, 2]
//]
//
//transformMatrix([
//  [1, 1, 1],
//  [0, 1, 1],
//  [0, 0, 1]
//]) ➞ [
//  [2, 3, 4],
//  [3, 2, 3],
//  [2, 3, 2]
//]
//Notes
//It might be easier to visualize this by drawing the grid of 0's and 1's out on a sheet of paper, and drawing lines through a specific number's row and column.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(transformMatrix([
//  [1, 0, 0, 0, 1],
//  [0, 1, 0, 0, 0],
//  [0, 0, 0, 1, 0],
//  [0, 1, 0, 1, 0],
//  [0, 1, 0, 0, 0]
//]), [
//  [1, 5, 2, 4, 1], 
//  [2, 2, 1, 3, 2], 
//  [2, 4, 1, 1, 2], 
//  [3, 3, 2, 2, 3], 
//  [2, 2, 1, 3, 2]
//])
//​
//Test.assertSimilar(transformMatrix([
//  [1, 0, 0, 0],
//  [0, 1, 0, 0],
//  [0, 0, 1, 0]
//]), [
//  [0, 2, 2, 1],
//  [2, 0, 2, 1],
//  [2, 2, 0, 1]
//])
//​
//Test.assertSimilar(transformMatrix([

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Least Common Multiple

//tags: arrays,math,numbers

//url: https://edabit.com/challenge/gR9DKqpyvBWmyoe9X

//Description:
//Given an array of integers, create a function that will find the smallest positive integer that is evenly divisible by all the members of the array. In other words, find the least common multiple (LCM).
//Examples
//lcm([1, 2, 3, 4, 5, 6, 7, 8, 9]) ➞ 2520
//
//lcm([5]) ➞ 5
//
//lcm([5, 7, 11]) ➞ 385
//
//lcm([5, 7, 11, 35, 55, 77]) ➞ 385
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(lcm([1]), 1)
//Test.assertEquals(lcm([5, 5, 5]), 5)
//Test.assertEquals(lcm([67, 34, 12, 3, 2]), 13668)
//Test.assertEquals(lcm([79, 18, 7, 3, 1]), 9954)
//Test.assertEquals(lcm([10, 20, 30, 40, 50]), 600)
//Test.assertEquals(lcm([2, 3, 5, 7, 11, 13, 17]), 510510)
//// Test.assertEquals(lcm([91, 92, 93, 94, 95]), 3476431140)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Bishop Challenge

//tags: algorithms,games,math,validation

//url: https://edabit.com/challenge/6gkY9f4hNauYgwMpt

//Description:
//Your chess teacher wants to know if a bishop can reach a certain spot on the board in the given amount of moves.
//Given a starting square start, ending square end and the maximum number of moves allowed n. Return true if the ending square can be reached from the starting square within the given amount of moves. Keep in mind the chessboard goes from a1 to h8 (8x8).
//Examples
//bishop("a1", "b4", 2) ➞ true
//
//bishop("a1", "b5", 5) ➞ false
//
//bishop("f1", "f1", 0) ➞ true
//Notes
//Chessboard is always empty (only the bishop is there).
//Bishop can move in any direction diagonally.
//If the starting and ending square are the same, return true (even if the move is 0).
//Square names will always be lowercase and valid.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(bishop("a1", "b4", 2), true)
//Test.assertEquals(bishop("a1", "b5", 5), false)
//Test.assertEquals(bishop("f1", "f1", 0), true)
//Test.assertEquals(bishop("e6", "a1", 2), false)
//Test.assertEquals(bishop("h2", "a2", 1), false)
//Test.assertEquals(bishop("d1", "a3", 1), false)
//Test.assertEquals(bishop("b2", "a4", 2), false)
//Test.assertEquals(bishop("d7", "a5", 0), false)
//Test.assertEquals(bishop("e7", "a6", 2), false)
//Test.assertEquals(bishop("d1", "a7", 1), false)
//Test.assertEquals(bishop("c6", "a8", 2), true)
//Test.assertEquals(bishop("d7", "b1", 1), false)
//Test.assertEquals(bishop("e5", "b2", 2), true)
//Test.assertEquals(bishop("c7", "b3", 0), false)
//Test.assertEquals(bishop("b4", "b4", 1), true)
//Test.assertEquals(bishop("h5", "b5", 1), false)
//Test.assertEquals(bishop("a5", "b6", 1), true)
//Test.assertEquals(bishop("g8", "b7", 2), true)
//Test.assertEquals(bishop("h4", "b8", 1), false)
//Test.assertEquals(bishop("d7", "c1", 2), false)
//Test.assertEquals(bishop("b4", "c2", 1), false)
//Test.assertEquals(bishop("b5", "c3", 1), false)
//Test.assertEquals(bishop("a1", "c4", 2), false)
//Test.assertEquals(bishop("f5", "c5", 1), false)
//Test.assertEquals(bishop("f3", "c6", 1), true)

