

//title: Powerful Prime Factor

//tags: algorithms,formatting,math

//url: https://edabit.com/challenge/B2v5qnwvYK929TnWB

//Description:
//Create a function that takes a positive integer and returns a string expressing how the number can be made by multiplying powers of its prime factors.
//Examples
//expressFactors(2) ➞ "2"
//
//expressFactors(4) ➞ "2^2"
//
//expressFactors(10) ➞ "2 x 5"
//
//expressFactors(60) ➞ "2^2 x 3 x 5"
//Notes
//All inputs will be positive integers in the range 1 < n < 10,000.
//If a factor is repeated express it in the form "x^y" where x is the factor and y is the number of repetitions of the factor.
//If n is a prime number, return n as a string as in example #1 above.
//Factors should appear in ascending order in the expression.
//Make sure you include the space either side of the multiplication sign, " x ".
//Check the Resources if you need to understand Prime Factorization.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(expressFactors(2), "2")
//Test.assertEquals(expressFactors(4), "2^2")
//Test.assertEquals(expressFactors(10), "2 x 5")
//Test.assertEquals(expressFactors(11), "11")
//Test.assertEquals(expressFactors(29), "29")
//Test.assertEquals(expressFactors(60), "2^2 x 3 x 5")
//Test.assertEquals(expressFactors(100), "2^2 x 5^2")
//Test.assertEquals(expressFactors(151), "151")
//Test.assertEquals(expressFactors(323), "17 x 19")
//Test.assertEquals(expressFactors(997), "997")
//Test.assertEquals(expressFactors(3349), "17 x 197")
//Test.assertEquals(expressFactors(5040), "2^4 x 3^2 x 5 x 7")
//Test.assertEquals(expressFactors(6097), "7 x 13 x 67")
//Test.assertEquals(expressFactors(8192), "2^13")
//Test.assertEquals(expressFactors(9870), "2 x 3 x 5 x 7 x 47")
//Test.assertEquals(expressFactors(9973), "9973")
//Test.assertEquals(expressFactors(9999), "3^2 x 11 x 101")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: An OSHA Approved Ladder?

//tags: arrays,strings,validation

//url: https://edabit.com/challenge/uKPNPMQxfnS7o4Xod

//Description:
//Due to a huge scandal about the Laddersons Ladder Factory creating faulty ladders, the Occupational Safety and Health Administration require your help in determining whether a ladder is safe enough for use in the work place! It is vital that a ladder passes all criterea:
//The ladder must be at least 5 characters wide.
//The ladder mustn't have more than a 2 character gap between rungs.
//Rungs must be evenly spaced apart.
//Rungs should not be broken (i.e. no gaps).
//Given a ladder (drawn as an array of strings) return true if it passes all of OSHA's criterea.
//Examples
//isLadderSafe([
//  "#   #",
//  "#####",
//  "#   #",
//  "#   #",
//  "#####",
//  "#   #",
//  "#   #",
//  "#####",
//  "#   #"
//]) ➞ true
//isLadderSafe([
//  "#   #",
//  "#####",
//  "#   #",
//  "#####",
//  "#   #",
//  "#   #",
//  "#####",
//  "#   #"
//]) ➞ false
//
//// Uneven spaces between rungs.
//isLadderSafe([
//  "#  #",
//  "####",
//  "#  #",
//  "#  #",
//  "####",
//  "#  #",
//  "#  #",
//  "####",
//  "#  #"
//]) ➞ false
//
//// Ladder is too narrow, should be at least 5 characters wide.
//isLadderSafe([
//  "#   #",
//  "#####",
//  "#   #",
//  "#   #",
//  "#   #",
//  "#   #",
//  "#####",
//  "#   #",
//  "#   #",
//  "#   #",
//  "#   #",
//  "#####",
//  "#   #"
//]), ➞ false
//
//// Gap between rungs is too wide, should be less than 3.
//isLadderSafe([
//  "#   #",
//  "#  ##",
//  "#   #",
//  "#   #",
//  "#####",
//  "#   #",
//  "#   #",
//  "#####",
//  "#   #"
//]) ➞ false
//
//// The top rung is broken.
//Notes
//There will be a one character space with no rung at the top and bottom of every ladder.
//The height of the ladder is not needed for solving this problem.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isLadderSafe([
//  "#   #",
//  "#####",
//  "#   #",
//  "#   #",
//  "#####",
//  "#   #",
//  "#   #",
//  "#####",
//  "#   #"
//]), true)
//​
//Test.assertEquals(isLadderSafe([
//  "#   #",
//  "#####",
//  "#   #",
//  "#####",
//  "#   #",
//  "#   #",
//  "#####",
//  "#   #"
//]), false, "There are uneven spaces between rungs!")
//​
//Test.assertEquals(isLadderSafe([
//  "#  #",

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Largest Island

//tags: arrays,data_structures,games,logic

//url: https://edabit.com/challenge/nR3b6f3kwX8Pn9jE4

//Description:
//An island is a region of contiguous ones. A contiguous one is a 1 that is touched by at least one other 1, either horizontally, vertically or diagonally. Given a piece of the map, represented by a 2-D array, create a function that returns the area of the largest island.
//To illustrate, if we were given the following piece of the map, we should return 4.
//[
//  [0, 0, 0],
//  [0, 1, 1],
//  [0, 1, 1]
//]
//Our function should yield 2 for the map below:
//[
//  [1, 0, 0],
//  [0, 0, 1],
//  [0, 0, 1]
//]
//Our function should yield 4 for the map below: :
//[
//  [1, 0, 0],
//  [0, 1, 1],
//  [0, 0, 1]
//]
//Examples
//largestIsland([
//  [1, 0, 0], 
//  [0, 0, 0], 
//  [0, 0, 1]
//])
//
//➞ 1
//
//largestIsland([
//  [1, 1, 0], 
//  [0, 1, 1], 
//  [0, 0, 1]
//])
//
//➞ 5
//
//largestIsland([
//  [1, 0, 0], 
//  [1, 0, 0], 
//  [1, 0, 1]
//])
//
//➞ 3
//Notes
//Maps can be any m x n dimension.
//Maps will always have at least 1 element. m >= 1 and n >= 1.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(largestIsland([
//  [1, 0, 0],
//  [0, 0, 0],
//  [0, 0, 1]
//]), 1)
//​
//Test.assertEquals(largestIsland([
//  [1, 1, 0],
//  [0, 1, 1],
//  [0, 0, 1]
//]), 5)
//​
//Test.assertEquals(largestIsland([
//  [1, 0, 0],
//  [1, 0, 0],
//  [1, 0, 1]
//]), 3)
//​
//Test.assertEquals(largestIsland([
//  [0, 0, 0],
//  [0, 1, 1],
//  [0, 1, 1]
//]), 4)
//​
//Test.assertEquals(largestIsland([

