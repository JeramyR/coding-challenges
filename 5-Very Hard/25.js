

//title: Maximize the First Number

//tags: higher_order_functions,strings

//url: https://edabit.com/challenge/7vowiHDR5oYksAjqQ

//Description:
//Write a function that makes the first number as large as possible by swapping out its digits for digits in the second number.
//To illustrate:
//maxPossible(9328, 456) ➞ 9658
//// 9658 is the largest possible number built from swaps from 456.
//// 3 replaced with 6 and 2 replaced with 5.
//Examples
//maxPossible(523, 76) ➞ 763
//
//maxPossible(9132, 5564) ➞ 9655
//
//maxPossible(8732, 91255) ➞ 9755
//Notes
//Each digit in the second number can only be used once.
//Zero to all digits in the second number may be used.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(maxPossible(9328, 456), 9658)
//Test.assertEquals(maxPossible(523, 76), 763)
//Test.assertEquals(maxPossible(9132, 5564), 9655)
//Test.assertEquals(maxPossible(8732, 91255), 9755)
//Test.assertEquals(maxPossible(589, 777), 789)
//Test.assertEquals(maxPossible(1, 0), 1)
//Test.assertEquals(maxPossible(8, 9), 9)
//Test.assertEquals(maxPossible(28, 19), 98)
//Test.assertEquals(maxPossible(12345, 4), 42345)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Tic Tac Toe

//tags: arrays,games,logic,numbers

//url: https://edabit.com/challenge/jsukwFKLKJx2qLs5b

//Description:
//Given a 3x3 matrix of a completed tic-tac-toe game, create a function that returns whether the game is a win for "X", "O", or a "Draw", where "X" and "O" represent themselves on the matrix, and "E" represents an empty spot.
//Examples
//ticTacToe([
//  ["X", "O", "X"],
//  ["O", "X",  "O"],
//  ["O", "X",  "X"]
//]) ➞ "X"
//
//ticTacToe([
//  ["O", "O", "O"],
//  ["O", "X", "X"],
//  ["E", "X", "X"]
//]) ➞ "O"
//
//ticTacToe([
//  ["X", "X", "O"],
//  ["O", "O", "X"],
//  ["X", "X", "O"]
//]) ➞ "Draw"
//Notes
//Make sure that if O wins, you return the letter "O" and not the integer 0 (zero) and if it's a draw, make sure you return the capitalised word "Draw". If you return "X" or "O", make sure they're capitalised too.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(ticTacToe([
//  ["X", "O", "X"],
//  ["O", "X", "O"],
//  ["O", "X", "X"]
//]), "X")
//​
//Test.assertEquals(ticTacToe([
//  ["O", "O", "O"],
//  ["O", "X", "X"],
//  ["E", "X", "X"]
//]), "O")
//​
//Test.assertEquals(ticTacToe([
//  ["X", "X", "O"],
//  ["O", "O", "X"],
//  ["X", "X", "O"]
//]), "Draw")
//​
//Test.assertEquals(ticTacToe([
//  ["X", "O", "O"],
//  ["X", "O", "O"],
//  ["X", "X", "X"]
//]), "X")
//​
//Test.assertEquals(ticTacToe([

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sherlock and Squares

//tags: algorithms,math

//url: https://edabit.com/challenge/aHFBLwgCPKBoAcJAA

//Description:
//Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value describing a range of integers. Sherlock must determine the number of square integers within that range, inclusive of the endpoints (note that a square integer is an integer which is the square of an integer, e.g. 1, 4, 9, 16, 25, 36, 49).
//For example, the range is a=24 and b=49, inclusive. There are three square integers in the range: 25, 36 and 49.
//Complete the squares function that returns an integer representing the number of square integers in the inclusive range from a to b.
//Examples
//squares(3, 9) ➞ 2
//
//squares(17, 24) ➞ 0
//
//squares(1, 1000000000) ➞ 31622
//Notes
//Your solution must solve each problem in 1 second or less.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

///*
// * @author edwardclark
// *translated by jordan sumitomo
// Please post various time complexities O(n) in the comment section.
//*/
//​
//Test.assertEquals(squares(35, 70), 3)
//Test.assertEquals(squares(100, 1000), 22)
//Test.assertEquals(squares(3, 9), 2)
//Test.assertEquals(squares(17, 24), 0)
//Test.assertEquals(squares(433, 100000), 296)
//Test.assertEquals(squares(1, 1000000000), 31622)
//Test.assertEquals(squares(89784519, 103811134), 713)
//Test.assertEquals(squares(50979851, 733216221), 19937)

