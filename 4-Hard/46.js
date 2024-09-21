

//title: Building a Staircase

//tags: arrays,formatting,strings

//url: https://edabit.com/challenge/7HiitQLp9CQGQNWJr

//Description:
//Create a function that builds a staircase given the height and the type of building block.
//Examples
//buildStaircase(3, "#") ➞ [
//  ["#", "_", "_"],
//  ["#", "#", "_"],
//  ["#", "#", "#"]
//]
//
//buildStaircase(4, "#") ➞ [
//  ["#", "_", "_", "_"],
//  ["#", "#", "_", "_"],
//  ["#", "#", "#", "_"],
//  ["#", "#", "#", "#"]
//]
//
//buildStaircase(3, "A") ➞ [
//  ["A", "_", "_"],
//  ["A", "A", "_"],
//  ["A", "A", "A"]
//]
//
//// height = 3 and building block = "A"
//
//buildStaircase(4, "$") ➞ [
//  ["$", "_", "_", "_"],
//  ["$", "$", "_", "_"],
//  ["$", "$", "$", "_"],
//  ["$", "$", "$", "$"]
//]
//
//// height = 4 and building block = "$"
//Notes
//If the height is 0, return an empty array [].
//See Comments or Resources for help.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(buildStaircase(0, '#'), 
//[])
//​
//Test.assertSimilar(buildStaircase(1, '#'), 
//[['#']])
//​
//Test.assertSimilar(buildStaircase(2, '#'), 
//[['#', '_'], 
//['#', '#']])
//​
//Test.assertSimilar(buildStaircase(3, '#'), 
//[['#', '_', '_'], 
//['#', '#', '_'], 
//['#', '#', '#']])
//​
//Test.assertSimilar(buildStaircase(4, '#'), 
//[['#', '_', '_', '_'], 
//['#', '#', '_', '_'], 
//['#', '#', '#', '_'], 
//['#', '#', '#', '#']])
//​
//Test.assertSimilar(buildStaircase(3, 'A'), 
//[['A', '_', '_'], 
//['A', 'A', '_'], 
//['A', 'A', 'A']])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Factor Tractor

//tags: logic,math,numbers,recursion

//url: https://edabit.com/challenge/zWf4ayT7nbTsxYgRe

//Description:
//Write a program to find all the prime factors of a given number. The program must return an array containing all the prime factors, sorted in ascending order. Remember that 1 is neither prime nor composite and should not be included in your output array.
//Examples
//primeFactorize(25) ➞ [5, 5]
//
//primeFactorize(19) ➞ [19]
//
//primeFactorize(77) ➞ [7, 11]
//Notes
//Output array must be sorted in ascending order
//The only positive integer which is neither prime nor composite is 1. Return an empty array if 1 is the input.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(primeFactorize(32), [2, 2, 2, 2, 2]);
//Test.assertSimilar(primeFactorize(17), [17]);
//Test.assertSimilar(primeFactorize(35), [5, 7]);
//Test.assertSimilar(primeFactorize(2), [2]);
//Test.assertNotEquals(primeFactorize(2), [1, 2]);
//Test.assertNotEquals(primeFactorize(1), [1]);
//Test.assertNotEquals(primeFactorize(35), [7, 5]);
//Test.assertSimilar(primeFactorize(2591), [2591]);
//Test.assertSimilar(primeFactorize(2532), [2, 2, 3, 211]);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Imaginary Coding Interview

//tags: arrays,conditions,interview

//url: https://edabit.com/challenge/QfYTCdtcZ4TST4JTx

//Description:
//Create a function to check if a candidate is qualified in an imaginary coding interview of an imaginary tech startup.
//The criteria for a candidate to be qualified in the coding interview is:
//The candidate should have complete all the questions.
//The maximum time given to complete the interview is 120 minutes.
//The maximum time given for very easy questions is 5 minutes each.
//The maximum time given for easy questions is 10 minutes each.
//The maximum time given for medium questions is 15 minutes each.
//The maximum time given for hard questions is 20 minutes each.
//If all the above conditions are satisfied, return "qualified", else return "disqualified".
//You will be given an array of time taken by a candidate to solve a particular question and the total time taken by the candidate to complete the interview.
//Given an array, in a true condition will always be in the format [very easy, very easy, easy, easy, medium, medium, hard, hard].
//The maximum time to complete the interview includes a buffer time of 20 minutes.
//Examples
//interview([5, 5, 10, 10, 15, 15, 20, 20], 120) ➞ "qualified"
//
//interview([2, 3, 8, 6, 5, 12, 10, 18], 64) ➞  "qualified"
//
//interview([5, 5, 10, 10, 25, 15, 20, 20], 120) ➞ "disqualified"
//// Exceeded the time limit for a medium question.
//
//interview([5, 5, 10, 10, 15, 15, 20], 120) ➞ "disqualified"
//// Did not complete all the questions.
//
//interview([5, 5, 10, 10, 15, 15, 20, 20], 130) ➞ "disqualified"
//// Solved all the questions in their respected time limits but exceeded the total time limit of the interview.
//Notes
//Try to solve the problem using only array methods.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(interview([5, 5, 10, 10, 15, 15, 20, 20], 120), 'qualified')
//Test.assertSimilar(interview([2, 3, 8, 6, 5, 12, 10, 18], 120), 'qualified')
//Test.assertSimilar(interview([2, 3, 8, 6, 5, 12, 10, 18], 64), 'qualified')
//Test.assertSimilar(interview([5, 5, 10, 10, 25, 15, 20, 20], 120), 'disqualified')
//Test.assertSimilar(interview([5, 5, 10, 10, 15, 15, 20], 120), 'disqualified')
//Test.assertSimilar(interview([5, 5, 10, 10, 15, 15, 20, 20], 130), 'disqualified')
//Test.assertSimilar(interview([5, 5, 10, 10, 15, 20, 50], 160), 'disqualified')
//Test.assertSimilar(interview([5, 5, 10, 10, 15, 15, 40], 120), 'disqualified')
//Test.assertSimilar(interview([10, 10, 15, 15, 20, 20], 150), 'disqualified')
//Test.assertSimilar(interview([5, 5, 10, 20, 15, 15, 20, 20], 140), 'disqualified')

