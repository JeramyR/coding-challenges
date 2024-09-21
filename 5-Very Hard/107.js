

//title: Concentric Rugs

//tags: arrays,functional_programming,loops

//url: https://edabit.com/challenge/bLyX8WoeX2geoW7j4

//Description:
//Create a function that takes in parameter n and generates an n x n (where n is odd) concentric rug.
//The center of a concentric rug is 0, and the rug "fans-out", as show in the examples below.
//Examples
//generateRug(1) ➞ [
//  [0]
//]
//
//generateRug(3) ➞ [
//  [1, 1, 1],
//  [1, 0, 1],
//  [1, 1, 1]
//]
//
//generateRug(5) ➞ [
//  [2, 2, 2, 2, 2],
//  [2, 1, 1, 1, 2],
//  [2, 1, 0, 1, 2],
//  [2, 1, 1, 1, 2],
//  [2, 2, 2, 2, 2]
//]
//
//generateRug(7) ➞ [
//  [3, 3, 3, 3, 3, 3, 3],
//  [3, 2, 2, 2, 2, 2, 3],
//  [3, 2, 1, 1, 1, 2, 3],
//  [3, 2, 1, 0, 1, 2, 3],
//  [3, 2, 1, 1, 1, 2, 3],
//  [3, 2, 2, 2, 2, 2, 3],
//  [3, 3, 3, 3, 3, 3, 3]
//]
//Notes
//n >= 0.
//Always increment by 1 each "layer" outwards you travel.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(generateRug(1), [
//  [0]
//])
//​
//Test.assertSimilar(generateRug(3), [
//  [1, 1, 1],
//  [1, 0, 1],
//  [1, 1, 1]
//])
//​
//Test.assertSimilar(generateRug(5), [
//  [2, 2, 2, 2, 2],
//  [2, 1, 1, 1, 2],
//  [2, 1, 0, 1, 2],
//  [2, 1, 1, 1, 2],
//  [2, 2, 2, 2, 2]
//])
//​
//Test.assertSimilar(generateRug(7), [
//  [3, 3, 3, 3, 3, 3, 3],
//  [3, 2, 2, 2, 2, 2, 3],
//  [3, 2, 1, 1, 1, 2, 3],
//  [3, 2, 1, 0, 1, 2, 3],
//  [3, 2, 1, 1, 1, 2, 3],
//  [3, 2, 2, 2, 2, 2, 3],

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Tic Tac Toe

//tags: arrays,games,validation

//url: https://edabit.com/challenge/sG8wviXAyMwAu5TyF

//Description:
//Create a function that takes an array of character inputs from a Tic Tac Toe game. Inputs will be taken from player1 as "X", player2 as "O", and empty spaces as "#". The program will return the winner or tie results.
//Examples
//ticTacToe([
//  ["X", "O", "O"],
//  ["O", "X", "O"],
//  ["O", "#", "X"]
//]) ➞ "Player 1 wins"
//
//
//ticTacToe([
//  ["X", "O", "O"],
//  ["O", "X", "O"],
//  ["X", "#", "O"]
//]) ➞ "Player 2 wins"
//
//
//ticTacToe([
//  ["X", "X", "O"],
//  ["O", "X", "O"],
//  ["X", "O", "#"]
//]) ➞ "It's a Tie"
//Notes
//All inputs are valid (there will be no games where both players win).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(ticTacToe(
// [["X", "O", "O"],
//  ["O", "X", "O"],
//  ["O", "#", "X"]]), "Player 1 wins") 
//​
//Test.assertEquals(ticTacToe(
// [["X", "O", "O"],
//  ["O", "X", "O"],
//  ["O", "#", "O"]]), "Player 2 wins")
//​
//Test.assertEquals(ticTacToe(
// [["X", "O", "O"],
//  ["O", "X", "O"],
//  ["O", "O", "#"]]), "It's a Tie")
//​
//Test.assertEquals(ticTacToe(
// [["X", "O", "O"],
//  ["X", "X", "O"],
//  ["X", "O", "#"]]), "Player 1 wins")
//​
//Test.assertEquals(ticTacToe(
// [["X", "#", "O"],
//  ["X", "X", "O"],
//  ["#", "O", "#"]]), "It's a Tie")
//​

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Edabit Platform

//tags: arrays,data_structures,games,loops

//url: https://edabit.com/challenge/uPMuscpXZgwvZmTer

//Description:
//In this challenge, process the inputs given by a player playing a simple platform game. Each level of the game is represented by a matrix that contains two sub-arrays:
//The first (or upper) array is the sky.
//The second (or lower) array is the ground.
//Each sub-array contains ten elements, being either collectible items (in the sky) or walkeable tiles, pitfalls and enemies (in the ground).
//level1 = [
//  [" ", "°", " ", "%", " ", " ", "°", " ", "°", " "],
//  ["_", "!", "_", "_", " ", "_", "_", " ", "_", "_"]
//]
//In the sky, there are empty cells (a single space " "), coins (a degree symbol "°") and double coins (a percentage symbol "%"):
//A coin is worthy 25 points.
//A double coin is worthy 50 points.
//In the ground, there are walkeable tiles (an underscore "_"), pitfalls (a single space " ") and enemies (an exclamation mark "!"):
//If the player goes through a pitfall or if he touches an enemy, the game ends.
//The player starts at the first ground tile (the first cell of the second sub-array), and through its inputs he can do three different moves:
//"F" is for "Forward", the player moves to the next tile in the ground.
//// The "x" is to represent the position of player
//
//// With input "F" player moves forward (1 tile)
//// He touches the enemy
//
//level1 = [
//  [" ", "°", " ", ...],
//  ["x_", "!", "_", ...]
//]
//
//level1 = [
//  [" ", "°", " ", ...],
//  ["_", "x!", "_", ...]
//]
//"U" is for "Up", the player jumps up from a ground tile touching the sky and falling back in the same ground tile
//// The "x" is to represent the position of player
//
//// With input "U" the player jumps up and falls back in the same tile
//// He collects nothing, because there's empty sky
//
//level1 = [
//  [" ", "°", " " ...],
//  ["x_", "!", "_" ...]
//]
//
//level1 = [
//  ["x", "°", " " ...],
//  ["_", "!", "_" ...]
//]
//
//level1 = [
//  ["_", "°", " " ...],
//  ["x_", "!", "_" ...]
//]
//"J" is for "Jump", the player jumps up and right from a ground tile reaching the sky in the next frame, and falling at the ground two tiles after its starting position.
//// The "x" is to represent the position of player
//
//// With input "J" the player jumps up and right
//// He reach the sky of next frame, and he falls at ground two tiles on the right
//// He collects a coin avoiding the enemy
//
//level1 = [
//  [" ", "°", " " ...],
//  ["x_", "!", "_" ...]
//]
//
//level1 = [
//  [" ", "x", " " ...],
//  ["_", "!", "_" ...]
//]
//
//level1 = [
//  [" ", " ", " " ...],
//  ["_", "!", "x_" ...]
//]
//A player submits 10 inputs, and if he reaches the last ground tile (or if he trespass it), the level is completed. If he touches an enemy or falls through a pitfall, it's game over. If the player completes the level (or die) before the tenth input, the game stops so that the inputs in excess are not considered.
//Given a matrix level and a string of ten uppercase letters input, implement a function that returns:
//The string "Level completed! Your score: XXX!" if the player completes the level.
//The string "Game over! Your score: XXX!" if the player falls or touches an enemy.
//Replacing XXX with the score given by the coins and double coins collected before the game stops.
//Example 1
//// The "x" is to represent the position of player after a move
//
//edaPlatform([
//  [" ", "°", " ", "%", " ", " ", "°", " ", "°", " "],
//  ["_", "!", "_", "_", " ", "_", "_", " ", "_", "_"]
//], "JFUJFUJUFF") ➞ "Level completed! Your score: 125!"
//
//// J: Player jumps up and right to avoid the enemy, collecting a coin for 25 points
//
//[
//  [" ", " ", " ", "%", " ", " ", "°", " ", "°", " "],
//  ["_", "!", "x", "_", " ", "_", "_", " ", "_", "_"]
//]
//
//// F: Player goes forward
//
//[
//  [" ", " ", " ", "%", " ", " ", "°", " ", "°", " "],
//  ["_", "!", "_", "x", " ", "_", "_", " ", "_", "_"]
//]
//
//// U: Player jumps up collecting a double coin for 50 points
//
//[
//  [" ", " ", " ", " ", " ", " ", "°", " ", "°", " "],
//  ["_", "!", "_", "x", " ", "_", "_", " ", "_", "_"]
//]
//
//// J: Player jumps up and right to avoid the pitfall
//
//[
//  [" ", " ", " ", " ", " ", " ", "°", " ", "°", " "],
//  ["_", "!", "_", " ", " ", "x", "_", " ", "_", "_"]
//]
//
//// F: Player goes forward
//
//[
//  [" ", " ", " ", " ", " ", " ", "°", " ", "°", " "],
//  ["_", "!", "_", " ", " ", "_", "x", " ", "_", "_"]
//]
//
//// U: Player jumps up collecting a coin for 25 points
//
//[
//  [" ", " ", " ", " ", " ", " ", " ", " ", "°", " "],
//  ["_", "!", "_", " ", " ", "_", "x", " ", "_", "_"]
//]
//
//// J: Player jumps up and right to avoid the pitfall
//
//[
//  [" ", " ", " ", " ", " ", " ", " ", " ", "°", " "],
//  ["_", "!", "_", " ", " ", "_", "_", " ", "x", "_"]
//]
//
//// U: Player jumps up to collect a coin
//
//[
//  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
//  ["_", "!", "_", " ", " ", "_", "_", " ", "x", "_"]
//]
//
//// F: Player goes forward to the last tile and completes the level
//
//[
//  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
//  ["_", "!", "_", " ", " ", "_", "_", " ", "_", "x"]
//]
//
//// The last input "F" is not considered because the level has been completed
//Example 2
//// The "x" is to represent the position of player after a move
//
//edaPlatform([
//  [" ", "°", " ", "%", " ", " ", "°", " ", "°", " "],
//  ["_", "!", "_", "_", " ", "_", "_", " ", "_", "_"]
//], "JFFJUJJUFF") ➞ "Game over! Your score: 25!"
//
//// J: Player jumps up and right to avoid the enemy, collecting a coin for 25 points
//
//[
//  [" ", " ", " ", "%", " ", " ", "°", " ", "°", " "],
//  ["_", "!", "x", "_", " ", "_", "_", " ", "_", "_"]
//]
//
//// F: Player goes forward
//
//[
//  [" ", " ", " ", "%", " ", " ", "°", " ", "°", " "],
//  ["_", "!", "_", "x", " ", "_", "_", " ", "_", "_"]
//]
//
//// F: Player goes forward and falls through the pitfall
//
//[
//  [" ", " ", " ", "%", " ", " ", "°", " ", "°", " "],
//  ["_", "!", "_", "_", "fall", "_", "_", " ", "_", "_"]
//]
//
//// The other seven inputs are not considered because it's game over
//Example 3
//// The "x" is to represent the position of player after a move
//
//edaPlatform([
//  [" ", "°", " ", "%", " ", " ", "°", " ", "°", " "],
//  ["_", "!", "_", "_", " ", "_", "_", " ", "_", "_"]
//], "FFFFJJUJJJ") ➞ "Game over! Your score: 0!"
//
//// F: Player goes forward and touches the enemy
//
//[
//  [" ", "°", " ", "%", " ", " ", "°", " ", "°", " "],
//  ["_", "enemy", "_", "_", " ", "_", "_", " ", "_", "_"]
//]
//
//// The other 9 inputs are not considered
//Notes
//Remember that a level is completed if the player reaches the last ground tile or if he trespass it through a JUMP.
//Data (levels and inputs) will be always valid. You can assume that an end is always assured (through completing the level or through a game over).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let level1 = [
//  [" ", "°", " ", "%", " ", " ", "°", " ", "°", " "],
//  ["_", "!", "_", "_", " ", "_", "_", " ", "_", "_"]
//],
//    input1a = "JFUJFUJUFF",
//    input1b = "JFJFJFFFFF",
//    input1c = "JFFJUJJUFF",
//    input1d = "FFFFJJUJJJ";
//​
//Test.assertEquals(edaPlatform(level1, input1a), "Level completed! Your score: 125!");
//Test.assertEquals(edaPlatform(level1, input1b), "Level completed! Your score: 25!");
//Test.assertEquals(edaPlatform(level1, input1c), "Game over! Your score: 25!");
//Test.assertEquals(edaPlatform(level1, input1d), "Game over! Your score: 0!");
//​
//let level2 = [
//  [" ", "°", "°", " ", " ", " ", "°", " ", " ", "%"],
//  ["_", "_", " ", "_", "_", "!", "_", "!", "_", "_"]
//],
//    input2a = "FUJFJUJJFF",
//    input2b = "FJFJJFJJUF",
//    input2c = "JFUFFFJUUU",
//    input2d = "FJFFUJJFUJ";
//​
//Test.assertEquals(edaPlatform(level2, input2a), "Level completed! Your score: 125!");
//Test.assertEquals(edaPlatform(level2, input2b), "Level completed! Your score: 25!");

