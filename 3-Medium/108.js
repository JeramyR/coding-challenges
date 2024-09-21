

//title: Simulate the Game "Rock, Paper, Scissors"

//tags: data_structures,games

//url: https://edabit.com/challenge/2n6kGrNsqpexmvJhQ

//Description:
//Create a function which simulates the game "rock, paper, scissors". The function takes the input of both players (rock, paper or scissors), first parameter from first player, second from second player. The function returns the result as such:
//"Player 1 wins"
//"Player 2 wins"
//"TIE" (if both inputs are the same)
//The rules of rock, paper, scissors, if not known:
//Both players have to say either "rock", "paper" or "scissors" at the same time.
//Rock beats scissors, paper beats rock, scissors beat paper.
//Examples
//rps("rock", "paper") ➞ "Player 2 wins"
//
//rps("paper", "rock") ➞ "Player 1 wins"
//
//rps("paper", "scissors") ➞ "Player 2 wins"
//
//rps("scissors", "scissors") ➞ "TIE"
//
//rps("scissors", "paper") ➞ "Player 1 wins"
//Notes
//There are several ways to solve this challenge.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(rps("rock", "paper"), "Player 2 wins")
//Test.assertEquals(rps("paper", "rock"), "Player 1 wins")
//Test.assertEquals(rps("paper", "scissors"), "Player 2 wins")
//Test.assertEquals(rps("scissors", "scissors"), "TIE")
//Test.assertEquals(rps("scissors", "paper"), "Player 1 wins")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Intro to Nested Loops

//tags: language_fundamentals,loops

//url: https://edabit.com/challenge/spA7xt9pND22mNuWS

//Description:
//Imagine a school that kids attend for 6 years. In each year, there are five groups started, marked with the letters a, b, c, d, e. For the first year, the groups are 1a, 1b, 1c, 1d, 1e and for the last year, the groups are 6a, 6b, 6c, 6d, 6e.
//Write a function that returns the groups in the school by year (as a string), separated with a comma and a space in the form of "1a, 1b, 1c, 1d, 1e, 2a, 2b (....) 5d, 5e, 6a, 6b, 6c, 6d, 6e".
//Examples
//printAllGroups() ➞ "1a, 1b, 1c, 1d, 1e, 2a, 2b, 2c, 2d, 2e, 3a, 3b, 3c, 3d, 3e, 4a, 4b, 4c, 4d, 4e, 5a, 5b, 5c, 5d, 5e, 6a, 6b, 6c, 6d, 6e "
//Notes
//Use nested "for" loops to achieve this, as well as the array of ["a", "b", "c", "d", "e"] groups.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertNotEquals(printAllGroups(), "1a, 1b, 1c, 1d, 1e, 2a, 2b, 2c, 2d, 2e, 3a, 3b, 3c, 3d, 3e, 4a, 4b, 4c, 4d, 4e, 5a, 5b, 5c, 5d, 5e, 6a, 6b, 6c, 6d, 6e, ", "The was almost correct - but you added an unncessary ", " after the last group.")
//Test.assertEquals(printAllGroups(), "1a, 1b, 1c, 1d, 1e, 2a, 2b, 2c, 2d, 2e, 3a, 3b, 3c, 3d, 3e, 4a, 4b, 4c, 4d, 4e, 5a, 5b, 5c, 5d, 5e, 6a, 6b, 6c, 6d, 6e", "The output was not correct.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sum of Array Elements Except Itself

//tags: arrays

//url: https://edabit.com/challenge/2vu3tzZWzraAaHkJy

//Description:
//An array is given. Return a new array having the sum of all its elements except itself. For more clarity, check the examples below.
//Clarification
//[1, 2, 3, 4] = for first element => sum will be 2+3+4 = [9]
//[1, 2, 3, 4] = for second element => sum will be 1+3+4 = [9, 8]
//[1, 2, 3, 4] = for third element => sum will be 1+2+4 = [9, 8, 7]
//[1, 2, 3, 4] = for fourth element => sum will be 1+2+3 = [9, 8, 7, 6]
//Examples
//arrEleSum([1, 2, 3, 2, 1]) ➞ [8, 7, 6, 7, 8]
//
//arrEleSum([1, 2]) ➞ [2, 1]
//
//arrEleSum([1, 2, 3]) ➞ [5, 4, 3]
//
//arrEleSum([1, 2, 3, 4, 5]) ➞ [14, 13, 12, 11, 10]
//
//arrEleSum([10, 20, 30, 40, 50, 60]) ➞ [200, 190, 180, 170, 160, 150]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

////Test.assertEquals(arrEleSum([1, 2, 3, 2, 1]), [8, 7, 6, 7, 8])
//Test.assertSimilar(arrEleSum([1, 2]), [2, 1])
//Test.assertSimilar(arrEleSum([1, 2, 3]),  [5, 4, 3])
//Test.assertSimilar(arrEleSum([1, 2, 3, 4, 5]), [14, 13, 12, 11, 10])
//Test.assertSimilar(arrEleSum([10, 20, 30, 40, 50, 60]),  [200, 190, 180, 170, 160, 150])

