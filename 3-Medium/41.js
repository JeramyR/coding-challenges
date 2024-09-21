

//title: Rock, Paper, Scissors

//tags: conditions,data_structures,games

//url: https://edabit.com/challenge/uXf7RQ5am84tup7mQ

//Description:
//Create a function which takes two strings (p1 and p2 ⁠— which represent player 1 and 2) as arguments and returns a string stating the winner in a game of Rock, Paper, Scissors.
//Each argument will contain a single string: "Rock", "Paper", or "Scissors". Return the winner according to the following rules:
//Rock beats Scissors
//Scissors beats Paper
//Paper beats Rock
//If p1 wins, return the string "The winner is p1". If p2 wins, return the string "The winner is p2" and if p1 and p2 are the same, return "It's a draw".
//Examples
//rps("Rock", "Paper") ➞ "The winner is p2"
//
//rps("Scissors", "Paper") ➞ "The winner is p1"
//
//rps("Paper", "Paper") ➞ "It's a draw"
//Notes
//All inputs will be valid strings.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(rps("Rock", "Paper"), "The winner is p2")
//Test.assertEquals(rps("Scissors", "Rock"), "The winner is p2")
//Test.assertEquals(rps("Scissors", "Paper"), "The winner is p1")
//Test.assertEquals(rps("Paper", "Rock"), "The winner is p1")
//Test.assertEquals(rps("Paper", "Paper"), "It's a draw")
//Test.assertEquals(rps("Rock", "Rock"), "It's a draw")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Last Digit Ultimate

//tags: algebra,logic,numbers,validation

//url: https://edabit.com/challenge/RQtF47HMPbHDGBeW6

//Description:
//Your job is to create a function, that takes 3 numbers: a, b, c and returns true if the last digit of a * b = the last digit of c. Check the examples below for an explanation.
//Examples
//lastDig(25, 21, 125) ➞ true
//// The last digit of 25 is 5, the last digit of 21 is 1, and the last
//// digit of 125 is 5, and the last digit of 5*1 = 5, which is equal
//// to the last digit of 125(5).
//
//lastDig(55, 226, 5190) ➞ true
//// The last digit of 55 is 5, the last digit of 226 is 6, and the last
//// digit of 5190 is 0, and the last digit of 5*6 = 30 is 0, which is
//// equal to the last digit of 5190(0).
//
//lastDig(12, 215, 2142) ➞ false
//// The last digit of 12 is 2, the last digit of 215 is 5, and the last
//// digit of 2142 is 2, and the last digit of 2*5 = 10 is 0, which is
//// not equal to the last digit of 2142(2).
//Notes
//Numbers can be negative.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(lastDig(1, 1, 1), true)
//Test.assertEquals(lastDig(12, 15, 10), true)
//Test.assertEquals(lastDig(15228, 9209, 72162), true)
//Test.assertEquals(lastDig(15, 1, 1), false)
//Test.assertEquals(lastDig(123, 15, 10), false)
//Test.assertEquals(lastDig(5213, 99219, 6165), false)
//Test.assertEquals(lastDig(1523, 513, 512), false)
//Test.assertEquals(lastDig(-15, 1, 1), false, "Should work with negative numbers.")
//Test.assertEquals(lastDig(123, -15, 10), false, "Should work with negative numbers.")
//Test.assertEquals(lastDig(-12, 15, -10), true, "Should work with negative numbers.")
//Test.assertEquals(lastDig(15228, -9209, -72162), true, "Should work with negative numbers.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Diagonal of a Cube

//tags: geometry,math

//url: https://edabit.com/challenge/meoZZBsxboQojBzWC

//Description:
//Create a function that takes the volume of a cube and returns the length of the cube's main diagonal, rounded to two decimal places.
//Examples
//cubeDiagonal(8) ➞ 3.46
//
//cubeDiagonal(343) ➞ 12.12
//
//cubeDiagonal(1157.625) ➞ 18.19
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(cubeDiagonal(8), 3.46)
//Test.assertEquals(cubeDiagonal(343), 12.12)
//Test.assertEquals(cubeDiagonal(1157.625), 18.19)
//Test.assertEquals(cubeDiagonal(12), 3.97)
//Test.assertEquals(cubeDiagonal(1), 1.73)
//Test.assertEquals(cubeDiagonal(48), 6.29)
//Test.assertEquals(cubeDiagonal(1728), 20.78)

