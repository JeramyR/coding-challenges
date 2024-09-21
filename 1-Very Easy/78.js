

//title: Tallest Birthday Cake Candles

//tags: arrays

//url: https://edabit.com/challenge/rqu2efZF7N2MEYDWk

//Description:
//You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
//Examples
//birthdayCakeCandles([4, 4, 1, 3]) ➞ 2
//// The maximum height candles are four units high.
//// There are two of them, so you return 2.
//
//birthdayCakeCandles([3, 2, 1, 3]) ➞ 2
//
//birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25]) ➞ 4
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(birthdayCakeCandles([4,4,1,3]), 2)
//Test.assertEquals(birthdayCakeCandles([3,2,1,3]), 2)
//Test.assertEquals(birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25]), 4)
//Test.assertEquals(birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]), 5)
//​
//// Author: Anshu Patel

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sum of Minimums

//tags: arrays,logic,loops,numbers

//url: https://edabit.com/challenge/5RiZh6yJKeGEo4P3z

//Description:
//Create a function that takes a 2D array arr and returns the sum of the minimum value in each row.
//Examples
//sumMinimums([
//  [1, 2, 3, 4, 5],
//  [5, 6, 7, 8, 9],
//  [20, 21, 34, 56, 100]
//]) ➞ 26
//
//// minimum value of the first row is 1
//// minimum value of the second row is 5
//// minimum value of the third row is 20
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sumMinimums([[1, 2, 3, 4, 5], [5, 6, 7, 8, 9], [20, 21, 34, 56, 100]]), 26) 
//Test.assertEquals(sumMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]), 9)
//Test.assertEquals(sumMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]), 76)
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Minimal V:

//tags: conditions,language_fundamentals,logic,validation

//url: https://edabit.com/challenge/8uJeSJ4fkmFJzs4eS

//Description:
//Check the principles of minimalist code in the intro to the first challenge.
//In the Code tab you will find a code that has a missplaced character in order to pass the tests. However, your goal is to submit a function as minimalist as possible.
//Write a function that returns the boolean true if the given arrays do not share any numbers, and false otherwise.
//Notes
//This challenge is translated from Alessandro Manicone's Python's "Minimal Series". The following are his comments and link to the series:
//This is an open series: there isn't a definite list of features for the challenges. Please, do not hesitate to leave your suggestions in the Comments.
//Readability is indeed a subjective concept. Let's discuss it! Feel free to leave your opinion in the Comments.
//You can find all the exercises in this series over here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(notShare([1, 2, 3], [4, 5, 6]), true)
//Test.assertEquals(notShare([1, 2, 3], [3, 4, 5]), false)
//Test.assertEquals(notShare([3, 3, 3], [4, 5, 6]), true)
//Test.assertEquals(notShare([3, 3, 3], [1, 2, 3]), false)
//Test.assertEquals(notShare([1, 2, 3, 4, 5, 6], [7]), true)
//Test.assertEquals(notShare([1, 2, 3, 4, 5, 6], [6]), false)
//Test.assertEquals(notShare([1], [2, 3, 4, 5, 6, 7]), true)
//Test.assertEquals(notShare([1], [1, 2, 3, 4, 5, 6]), false)
//​
//// Author: Alessandro Manicone

