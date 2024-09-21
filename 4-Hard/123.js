

//title: Digital Division

//tags: conditions,math,numbers,validation

//url: https://edabit.com/challenge/ZSiHm257pcdv9QiXa

//Description:
//In this challenge, you have to verify if a number is exactly divisible by a combination of its digits. There are three possible conditions to test:
//The given number is exactly divisible by each of its digits excluding the zeros.
//The given number is exactly divisible by the sum of its digits.
//The given number is exactly divisible by the product of its digits.
//Given an integer n, implement a function that returns:
//If every test is true, a string "Perfect".
//If some test is true, the number of true tests (1 or 2).
//If every test is false, a string "Indivisible".
//Examples
//digitalDivision(21) ➞ 1
//// Exactly divisible only by the sum of its digits (2 + 1 = 3).
//
//digitalDivision(128) ➞ 2
//// Exactly divisible by each of its digits.
//// Exactly divisible by the product of its digits (1 * 2 * 8 = 16).
//
//digitalDivision(100) ➞ 2
//// Exactly divisible by each of its digits (excluding zeros).
//// Exactly divisible by the sum of its digits (1 + 0 + 0 = 1).
//
//digitalDivision(12) ➞ "Perfect"
//// Exactly divisible by each of its digits.
//// Exactly divisible by 3 (sum of digits = 1 + 2).
//// Exactly divisible by 2 (product of digits = 1 * 2).
//
//digitalDivision(31) ➞ "Indivisible"
//// Every testing condition is false.
//Notes
//Remember to exclude any 0-digit when testing if the given n is divisible by each of its digits (see example #3).
//A number containing at least a 0-digit can't be exactly divided by the product of its digits (division by 0).
//Trivially, every single-digit positive number greater than 0 is Perfect
//Any given number will be a positive integer greater than 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(digitalDivision(21), 1, "Example #1")
//Test.assertEquals(digitalDivision(128), 2, "Example #2")
//Test.assertEquals(digitalDivision(100), 2, "Example #3")
//Test.assertEquals(digitalDivision(12), "Perfect", "Example #4")
//Test.assertEquals(digitalDivision(31), "Indivisible", "Example #5")
//Test.assertEquals(digitalDivision(111), "Perfect")
//Test.assertEquals(digitalDivision(40), 2)
//Test.assertEquals(digitalDivision(35), "Indivisible")
//Test.assertEquals(digitalDivision(666), 2)
//Test.assertEquals(digitalDivision(735), "Perfect")
//Test.assertEquals(digitalDivision(1890), 1)
//Test.assertEquals(digitalDivision(444268), "Indivisible")
//Test.assertEquals(digitalDivision(123456789), "Indivisible")
//Test.assertEquals(digitalDivision(1), "Perfect")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: All or Nothing

//tags: arrays,validation

//url: https://edabit.com/challenge/ZYJNYe2tKhG2kb7Sh

//Description:
//Suppose a student can earn 100% on an exam by getting the answers all correct or all incorrect. Given a potentially incomplete answer key and the student's answers, write a function that determines whether or not a student can still score 100%. Questions with missing answers are marked with an underscore, "_".
//["A", "_", "C", "_", "B"]   // answer key
//["A", "D", "C", "E", "B"]   // student's solution
//
//➞ true
//
//// Possible for student to get all questions correct.
//
//["B", "_", "B"]   // answer key
//["B", "D", "C"]   // student's solution
//
//➞ false
//
//// First question is correct but third is wrong, so not possible to score 100%.
//
//["T", "_", "F", "F", "F"]   // answer key
//["F", "F", "T", "T", "T"]   // student's solution
//
//➞ true
//
//// Possible for student to get all questions incorrect.
//Examples
//possiblyPerfect(["B", "A", "_", "_"], ["B", "A", "C", "C"]) ➞ true
//
//possiblyPerfect(["A", "B", "A", "_"], ["B", "A", "C", "C"]) ➞ true
//
//possiblyPerfect(["A", "B", "C", "_"], ["B", "A", "C", "C"]) ➞ false
//
//possiblyPerfect(["B", "_"], ["C", "A"]) ➞ true
//
//possiblyPerfect(["B", "A"], ["C", "A"]) ➞ false
//
//possiblyPerfect(["B"], ["B"]) ➞ true
//Notes
//Test has at least one question.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(possiblyPerfect(['A', '_', 'C', '_', 'B'], ['A', 'D', 'C', 'E', 'B']), true)
//Test.assertEquals(possiblyPerfect(['B', '_', 'B'], ['B', 'D', 'C']), false)
//Test.assertEquals(possiblyPerfect(['T', '_', 'F', 'F', 'F'], ['F', 'F', 'T', 'T', 'T']), true)
//​
//Test.assertEquals(possiblyPerfect(['B', 'A', '_', '_'], ['B', 'A', 'C', 'C']), true)
//Test.assertEquals(possiblyPerfect(['A', 'B', 'A', '_'], ['B', 'A', 'C', 'C']), true)
//Test.assertEquals(possiblyPerfect(['A', 'B', 'C', '_'], ['B', 'A', 'C', 'C']), false)
//​
//Test.assertEquals(possiblyPerfect(['B', '_'], ['C', 'A']), true)
//Test.assertEquals(possiblyPerfect(['B', 'A'], ['C', 'A']), false)
//Test.assertEquals(possiblyPerfect(['B'], ['B']), true)
//​
//Test.assertEquals(possiblyPerfect(['_', 'T', '_', '_'], ['T', 'F', 'F', 'F']), true)
//Test.assertEquals(possiblyPerfect(['_', 'T', '_', '_'], ['T', 'T', 'F', 'T']), true)
//Test.assertEquals(possiblyPerfect(['_', 'T', 'T', 'T'], ['T', 'T', 'F', 'T']), false)
//Test.assertEquals(possiblyPerfect(['_', 'T', 'T', 'T'], ['T', 'T', 'T', 'T']), true)
//Test.assertEquals(possiblyPerfect(['_', 'T', 'T', 'T'], ['F', 'F', 'F', 'F']), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Stock Picker

//tags: algorithms,arrays,data_structures

//url: https://edabit.com/challenge/DQR6rjLkFtKgoqgWX

//Description:
//Create a function that takes an array of integers that represent the amount in dollars that a single stock is worth, and return the maximum profit that could have been made by buying stock on day x and selling stock on day y where y>x.
//If given the following array:
//[44, 30, 24, 32, 35, 30, 40, 38, 15]
//... your program should return 16 because at index 2 the stock was worth $24 and at the index 6 the stock was then worth $40, so if you bought the stock at 24 and sold it on 40, you would have made a profit of $16, which is the maximum profit that could have been made with this list of stock prices.
//If there is no profit that could have been made with the stock prices, then your program should return -1 (e.g. [[10, 9, 8, 2]] should return -1).
//Examples
//stockPicker([10, 12, 4, 5, 9]) ➞ 5
//
//stockPicker([14, 20, 4, 12, 5, 11]) ➞ 8
//
//stockPicker([80, 60, 10, 8]) ➞ -1
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(stockPicker([90, 100, 111, 0, 1, 2, 3]), 21)
//Test.assertEquals(stockPicker([1, 2, 4, 10, 100, 2, 3]), 99)
//Test.assertEquals(stockPicker([10, 1000, 1, 1, 1, 2000, 3]), 1999)
//Test.assertEquals(stockPicker([7, 1, 5, 5, 2, 1, 3]), 4)
//Test.assertEquals(stockPicker([100, 10, 8, 5]), -1)

