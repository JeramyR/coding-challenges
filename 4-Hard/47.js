

//title: Average Word Length

//tags: math,strings

//url: https://edabit.com/challenge/ACeSvyhYe7Qrtsk5R

//Description:
//Create a function that takes in a sentence and returns the average length of each word in that sentence. Round your result to two decimal places.
//Examples
//averageWordLength("A B C.") ➞ 1.00
//
//averageWordLength("What a gorgeous day.") ➞ 4.00
//
//averageWordLength("Dude, this is so awesome!") ➞ 3.80
//Notes
//Ignore punctuation when counting the length of a word.

//code area
///////////////////////////////////////////////////////////////////////////
// const averageWordLength = str => {  
//     let newArr = str.match(/[a-z]+/gi)  
//     let n = newArr.length
//     // console.log(newArr)
// }


//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(averageWordLength('A B C.'), 1.00)
// Test.assertEquals(averageWordLength('What a gorgeous day.'), 4.00)
// Test.assertEquals(averageWordLength('Dude, this is so awesome!'), 3.80)
// Test.assertEquals(averageWordLength('Working on my tan right now.'), 3.67)
// Test.assertEquals(averageWordLength('Having a blast partying in Las Vegas.'), 4.29)
// Test.assertEquals(averageWordLength('Have you ever wondered what Saturn looks like?'), 4.75)
// Test.assertEquals(averageWordLength('I just planted a young oak tree, wonder how tall it will grow in a few years?'), 3.47)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Snake — Area Filling

//tags: algorithms,games,logic,loops,math

//url: https://edabit.com/challenge/gQuex4Ldsohmzscb3

//Description:
//This challenge is based on the classic videogame "Snake".
//Assume the game screen is an n * n square, and the snake starts the game with length 1 (i.e. just the head) positioned on the top left corner.
//For example, if n = 7 the game looks something like this:
//
//In this version of the game, the length of the snake doubles each time it eats food (e.g. if the length is 4, after eating it becomes 8).
//Create a function that takes the side n of the game screen and returns the number of times the snake can eat before it runs out of space in the game screen.
//Examples
//snakefill(3) ➞ 3
//
//snakefill(6) ➞ 5
//
//snakefill(24) ➞ 9
//Notes
//The given number will always be a positive integer (there are no exceptions to handle).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(snakefill(8), 6)
//Test.assertEquals(snakefill(18), 8)
//Test.assertEquals(snakefill(555), 18)
//Test.assertEquals(snakefill(2), 2)
//Test.assertEquals(snakefill(1), 0)
//Test.assertEquals(snakefill(900), 19)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Matrix Transpose

//tags: algebra,algorithms,arrays,interview

//url: https://edabit.com/challenge/NosDHsjwAviEkPDfS

//Description:
//In linear algebra, the transpose of a matrix is an operator which flips a matrix over its diagonal; that is, it switches the row and column indices of the matrix A by producing another matrix, often denoted by A^T.
//Create a function that takes a 2D array (matrix A) and returns a 2D array (matrix A^T).
//Examples
//makeTranspose([
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
//]) ➞ [
//  [1, 4, 7],
//  [2, 5, 8],
//  [3, 6, 9]
//]
//
//makeTranspose([
//  [1, 2],
//  [3, 4],
//  [5, 6]
//]) ➞ [
//  [1, 3, 5],
//  [2, 4, 6]
//]
//
//makeTranspose([
//  ["a", "b"]
//]) ➞ [
//  ["a"],
//  ["b"]
//]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(makeTranspose([[1,2,3],[4,5,6],[7,8,9]]), [[1,4,7],[2,5,8],[3,6,9]])
//Test.assertSimilar(makeTranspose([[1,2],[3,4],[5,6]]), [[1,3,5],[2,4,6]])
//Test.assertSimilar(makeTranspose([[1,2],[3,4],[5,6],[7,8],[9,10]]), [[1,3,5,7,9],[2,4,6,8,10]])
//Test.assertSimilar(makeTranspose([[42]]), [[42]])
//Test.assertSimilar(makeTranspose([[0.5,0.6,0.8]]), [[0.5],[0.6],[0.8]])
//Test.assertSimilar(makeTranspose([[0,0]]), [[0],[0]])
//Test.assertSimilar(makeTranspose([["a","b"]]), [["a"],["b"]])

