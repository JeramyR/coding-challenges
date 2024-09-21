

//title: Rotate for Max Number

//tags: language_fundamentals,logic,math,numbers

//url: https://edabit.com/challenge/NJQ64N6xhrppEMkjY

//Description:
//Create a function which takes a number and returns the maximum value by rearranging its digits.
//Examples
//rotateMaxNumber(123) ➞ 321
//
//rotateMaxNumber("001") ➞ 100
//
//rotateMaxNumber(999) ➞ 999
//Notes
//The input number can be a digit or a string.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(rotateMaxNumber(123), 321)
//Test.assertEquals(rotateMaxNumber(1546), 6541)
//Test.assertEquals(rotateMaxNumber("001"), 100)
//Test.assertEquals(rotateMaxNumber(999), 999)
//Test.assertEquals(rotateMaxNumber("12345"), 54321)
//Test.assertEquals(rotateMaxNumber("00009"), 90000)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: YouTube Upload Count

//tags: data_structures,loops,strings

//url: https://edabit.com/challenge/GoXcArzHKTWaA8C2z

//Description:
//You are given an array of dates in the format Dec 11 and a monthin the format Dec as arguments. Each date represents a video that was uploaded on that day. Return the number of uploads for a given month.
//Examples
//uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Sept") ➞ 2
//
//uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Oct") ➞ 1
//Notes
//If you only pay attention to the month and ignore the day, the challenge will become easier.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(uploadCount(['Dec 10', 'Dec 10', 'Dec 9', 'Dec 9', 'Dec 9', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 7', 'Dec 7', 'Dec 7', 'Dec 7', 'Dec 7', 'Dec 5', 'Dec 5', 'Dec 5', 'Dec 4', 'Dec 4', 'Dec 4', 'Dec 4', 'Dec 4', 'Dec 3', 'Dec 3', 'Dec 3', 'Dec 2', 'Dec 2', 'Dec 2', 'Dec 1', 'Dec 1', 'Dec 1', 'Dec 1','Nov 30', 'Nov 30', 'Nov 28', 'Nov 28', 'Nov 27', 'Nov 27', 'Nov 27', 'Nov 26', 'Nov 26', 'Nov 25', 'Nov 25', 'Nov 25', 'Nov 25', 'Nov 24', 'Nov 24', 'Nov 23', 'Nov 23', 'Nov 23', 'Nov 21', 'Nov 21', 'Nov 20', 'Nov 20', 'Nov 20', 'Nov 19', 'Nov 19', 'Nov 19', 'Nov 18', 'Nov 18', 'Nov 17', 'Nov 17', 'Nov 17', 'Nov 16', 'Nov 16', 'Nov 16', 'Nov 16', 'Nov 15', 'Nov 15', 'Nov 14', 'Nov 14', 'Nov 14', 'Nov 13', 'Nov 13', 'Nov 13', 'Nov 13', 'Nov 12', 'Nov 12', 'Nov 12', 'Nov 11', 'Nov 11', 'Nov 11', 'Nov 11', 'Nov 10', 'Nov 10', 'Nov 10', 'Nov 9', 'Nov 9', 'Nov 9', 'Nov 9', 'Nov 9', 'Nov 8', 'Nov 7', 'Nov 7', 'Nov 7', 'Nov 6', 'Nov 6', 'Nov 5', 'Nov 5', 'Nov 4', 'Nov 4', 'Nov 4', 'Nov 4', 'Nov 3', 'Nov 3', 'Nov 3', 'Nov 2', 'Nov 2', 'Nov 2', 'Nov 2', 'Nov 1', 'Oct 31', 'Oct 31', 'Oct 31', 'Oct 31', 'Oct 31', 'Oct 30', 'Oct 29', 'Oct 29', 'Oct 28', 'Oct 28', 'Oct 28', 'Oct 27', 'Oct 27', 'Oct 26', 'Oct 26', 'Oct 26', 'Oct 25', 'Oct 24', 'Oct 24', 'Oct 24', 'Oct 23', 'Oct 23', 'Oct 23', 'Oct 22', 'Oct 22', 'Oct 22', 'Oct 21', 'Oct 20', 'Oct 20', 'Oct 20', 'Oct 20', 'Oct 19', 'Oct 19', 'Oct 19', 'Oct 18', 'Oct 17', 'Oct 17', 'Oct 17', 'Oct 17', 'Oct 16', 'Oct 16', 'Oct 15', 'Oct 15', 'Oct 14', 'Oct 14', 'Oct 13', 'Oct 13', 'Oct 13', 'Oct 12', 'Oct 12', 'Oct 10', 'Oct 10', 'Oct 10', 'Oct 9', 'Oct 9', 'Oct 9', 'Oct 8', 'Oct 8', 'Oct 7', 'Oct 7', 'Oct 6', 'Oct 6','Oct 5', 'Oct 5', 'Oct 3', 'Oct 3', 'Oct 3', 'Oct 2', 'Oct 2', 'Oct 2', 'Oct 2', 'Oct 1', 'Oct 1', 'Sept 30', 'Sept 30', 'Sept 29', 'Sept 29', 'Sept 29', 'Sept 28', 'Sept 28', 'Sept 26', 'Sept 26', 'Sept 25', 'Sept 24', 'Sept 24', 'Sept 23', 'Sept 23', 'Sept 23', 'Sept 22', 'Sept 22', 'Sept 22', 'Sept 21', 'Sept 21', 'Sept 20', 'Sept 19', 'Sept 19', 'Sept 19', 'Sept 18', 'Sep 18'], "Nov"), 79)
//Test.assertEquals(uploadCount(['Dec 10', 'Dec 10', 'Dec 9', 'Dec 9', 'Dec 9', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 7', 'Dec 7', 'Dec 7', 'Dec 7', 'Dec 7', 'Dec 5', 'Dec 5', 'Dec 5', 'Dec 4', 'Dec 4', 'Dec 4', 'Dec 4', 'Dec 4', 'Dec 3', 'Dec 3', 'Dec 3', 'Dec 2', 'Dec 2', 'Dec 2', 'Dec 1', 'Dec 1', 'Dec 1', 'Dec 1','Nov 30', 'Nov 30', 'Nov 28', 'Nov 28', 'Nov 27', 'Nov 27', 'Nov 27', 'Nov 26', 'Nov 26', 'Nov 25', 'Nov 25', 'Nov 25', 'Nov 25', 'Nov 24', 'Nov 24', 'Nov 23', 'Nov 23', 'Nov 23', 'Nov 21', 'Nov 21', 'Nov 20', 'Nov 20', 'Nov 20', 'Nov 19', 'Nov 19', 'Nov 19', 'Nov 18', 'Nov 18', 'Nov 17', 'Nov 17', 'Nov 17', 'Nov 16', 'Nov 16', 'Nov 16', 'Nov 16', 'Nov 15', 'Nov 15', 'Nov 14', 'Nov 14', 'Nov 14', 'Nov 13', 'Nov 13', 'Nov 13', 'Nov 13', 'Nov 12', 'Nov 12', 'Nov 12', 'Nov 11', 'Nov 11', 'Nov 11', 'Nov 11', 'Nov 10', 'Nov 10', 'Nov 10', 'Nov 9', 'Nov 9', 'Nov 9', 'Nov 9', 'Nov 9', 'Nov 8', 'Nov 7', 'Nov 7', 'Nov 7', 'Nov 6', 'Nov 6', 'Nov 5', 'Nov 5', 'Nov 4', 'Nov 4', 'Nov 4', 'Nov 4', 'Nov 3', 'Nov 3', 'Nov 3', 'Nov 2', 'Nov 2', 'Nov 2', 'Nov 2', 'Nov 1', 'Oct 31', 'Oct 31', 'Oct 31', 'Oct 31', 'Oct 31', 'Oct 30', 'Oct 29', 'Oct 29', 'Oct 28', 'Oct 28', 'Oct 28', 'Oct 27', 'Oct 27', 'Oct 26', 'Oct 26', 'Oct 26', 'Oct 25', 'Oct 24', 'Oct 24', 'Oct 24', 'Oct 23', 'Oct 23', 'Oct 23', 'Oct 22', 'Oct 22', 'Oct 22', 'Oct 21', 'Oct 20', 'Oct 20', 'Oct 20', 'Oct 20', 'Oct 19', 'Oct 19', 'Oct 19', 'Oct 18', 'Oct 17', 'Oct 17', 'Oct 17', 'Oct 17', 'Oct 16', 'Oct 16', 'Oct 15', 'Oct 15', 'Oct 14', 'Oct 14', 'Oct 13', 'Oct 13', 'Oct 13', 'Oct 12', 'Oct 12', 'Oct 10', 'Oct 10', 'Oct 10', 'Oct 9', 'Oct 9', 'Oct 9', 'Oct 8', 'Oct 8', 'Oct 7', 'Oct 7', 'Oct 6', 'Oct 6','Oct 5', 'Oct 5', 'Oct 3', 'Oct 3', 'Oct 3', 'Oct 2', 'Oct 2', 'Oct 2', 'Oct 2', 'Oct 1', 'Oct 1', 'Sept 30', 'Sept 30', 'Sept 29', 'Sept 29', 'Sept 29', 'Sept 28', 'Sept 28', 'Sept 26', 'Sept 26', 'Sept 25', 'Sept 24', 'Sept 24', 'Sept 23', 'Sept 23', 'Sept 23', 'Sept 22', 'Sept 22', 'Sept 22', 'Sept 21', 'Sept 21', 'Sept 20', 'Sept 19', 'Sept 19', 'Sept 19', 'Sept 18', 'Sep 18'], "Dec"), 36)
//Test.assertEquals(uploadCount(['Dec 10', 'Dec 10', 'Dec 9', 'Dec 9', 'Dec 9', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 7', 'Dec 7', 'Dec 7', 'Dec 7', 'Dec 7', 'Dec 5', 'Dec 5', 'Dec 5', 'Dec 4', 'Dec 4', 'Dec 4', 'Dec 4', 'Dec 4', 'Dec 3', 'Dec 3', 'Dec 3', 'Dec 2', 'Dec 2', 'Dec 2', 'Dec 1', 'Dec 1', 'Dec 1', 'Dec 1','Nov 30', 'Nov 30', 'Nov 28', 'Nov 28', 'Nov 27', 'Nov 27', 'Nov 27', 'Nov 26', 'Nov 26', 'Nov 25', 'Nov 25', 'Nov 25', 'Nov 25', 'Nov 24', 'Nov 24', 'Nov 23', 'Nov 23', 'Nov 23', 'Nov 21', 'Nov 21', 'Nov 20', 'Nov 20', 'Nov 20', 'Nov 19', 'Nov 19', 'Nov 19', 'Nov 18', 'Nov 18', 'Nov 17', 'Nov 17', 'Nov 17', 'Nov 16', 'Nov 16', 'Nov 16', 'Nov 16', 'Nov 15', 'Nov 15', 'Nov 14', 'Nov 14', 'Nov 14', 'Nov 13', 'Nov 13', 'Nov 13', 'Nov 13', 'Nov 12', 'Nov 12', 'Nov 12', 'Nov 11', 'Nov 11', 'Nov 11', 'Nov 11', 'Nov 10', 'Nov 10', 'Nov 10', 'Nov 9', 'Nov 9', 'Nov 9', 'Nov 9', 'Nov 9', 'Nov 8', 'Nov 7', 'Nov 7', 'Nov 7', 'Nov 6', 'Nov 6', 'Nov 5', 'Nov 5', 'Nov 4', 'Nov 4', 'Nov 4', 'Nov 4', 'Nov 3', 'Nov 3', 'Nov 3', 'Nov 2', 'Nov 2', 'Nov 2', 'Nov 2', 'Nov 1', 'Oct 31', 'Oct 31', 'Oct 31', 'Oct 31', 'Oct 31', 'Oct 30', 'Oct 29', 'Oct 29', 'Oct 28', 'Oct 28', 'Oct 28', 'Oct 27', 'Oct 27', 'Oct 26', 'Oct 26', 'Oct 26', 'Oct 25', 'Oct 24', 'Oct 24', 'Oct 24', 'Oct 23', 'Oct 23', 'Oct 23', 'Oct 22', 'Oct 22', 'Oct 22', 'Oct 21', 'Oct 20', 'Oct 20', 'Oct 20', 'Oct 20', 'Oct 19', 'Oct 19', 'Oct 19', 'Oct 18', 'Oct 17', 'Oct 17', 'Oct 17', 'Oct 17', 'Oct 16', 'Oct 16', 'Oct 15', 'Oct 15', 'Oct 14', 'Oct 14', 'Oct 13', 'Oct 13', 'Oct 13', 'Oct 12', 'Oct 12', 'Oct 10', 'Oct 10', 'Oct 10', 'Oct 9', 'Oct 9', 'Oct 9', 'Oct 8', 'Oct 8', 'Oct 7', 'Oct 7', 'Oct 6', 'Oct 6','Oct 5', 'Oct 5', 'Oct 3', 'Oct 3', 'Oct 3', 'Oct 2', 'Oct 2', 'Oct 2', 'Oct 2', 'Oct 1', 'Oct 1', 'Sept 30', 'Sept 30', 'Sept 29', 'Sept 29', 'Sept 29', 'Sept 28', 'Sept 28', 'Sept 26', 'Sept 26', 'Sept 25', 'Sept 24', 'Sept 24', 'Sept 23', 'Sept 23', 'Sept 23', 'Sept 22', 'Sept 22', 'Sept 22', 'Sept 21', 'Sept 21', 'Sept 20', 'Sept 19', 'Sept 19', 'Sept 19', 'Sept 18'], "Sept"), 25)
//Test.assertEquals(uploadCount(['Dec 10', 'Dec 10', 'Dec 9', 'Dec 9', 'Dec 9', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 7', 'Dec 7', 'Dec 7', 'Dec 7', 'Dec 7', 'Dec 5', 'Dec 5', 'Dec 5', 'Dec 4', 'Dec 4', 'Dec 4', 'Dec 4', 'Dec 4', 'Dec 3', 'Dec 3', 'Dec 3', 'Dec 2', 'Dec 2', 'Dec 2', 'Dec 1', 'Dec 1', 'Dec 1', 'Dec 1','Nov 30', 'Nov 30', 'Nov 28', 'Nov 28', 'Nov 27', 'Nov 27', 'Nov 27', 'Nov 26', 'Nov 26', 'Nov 25', 'Nov 25', 'Nov 25', 'Nov 25', 'Nov 24', 'Nov 24', 'Nov 23', 'Nov 23', 'Nov 23', 'Nov 21', 'Nov 21', 'Nov 20', 'Nov 20', 'Nov 20', 'Nov 19', 'Nov 19', 'Nov 19', 'Nov 18', 'Nov 18', 'Nov 17', 'Nov 17', 'Nov 17', 'Nov 16', 'Nov 16', 'Nov 16', 'Nov 16', 'Nov 15', 'Nov 15', 'Nov 14', 'Nov 14', 'Nov 14', 'Nov 13', 'Nov 13', 'Nov 13', 'Nov 13', 'Nov 12', 'Nov 12', 'Nov 12', 'Nov 11', 'Nov 11', 'Nov 11', 'Nov 11', 'Nov 10', 'Nov 10', 'Nov 10', 'Nov 9', 'Nov 9', 'Nov 9', 'Nov 9', 'Nov 9', 'Nov 8', 'Nov 7', 'Nov 7', 'Nov 7', 'Nov 6', 'Nov 6', 'Nov 5', 'Nov 5', 'Nov 4', 'Nov 4', 'Nov 4', 'Nov 4', 'Nov 3', 'Nov 3', 'Nov 3', 'Nov 2', 'Nov 2', 'Nov 2', 'Nov 2', 'Nov 1', 'Oct 31', 'Oct 31', 'Oct 31', 'Oct 31', 'Oct 31', 'Oct 30', 'Oct 29', 'Oct 29', 'Oct 28', 'Oct 28', 'Oct 28', 'Oct 27', 'Oct 27', 'Oct 26', 'Oct 26', 'Oct 26', 'Oct 25', 'Oct 24', 'Oct 24', 'Oct 24', 'Oct 23', 'Oct 23', 'Oct 23', 'Oct 22', 'Oct 22', 'Oct 22', 'Oct 21', 'Oct 20', 'Oct 20', 'Oct 20', 'Oct 20', 'Oct 19', 'Oct 19', 'Oct 19', 'Oct 18', 'Oct 17', 'Oct 17', 'Oct 17', 'Oct 17', 'Oct 16', 'Oct 16', 'Oct 15', 'Oct 15', 'Oct 14', 'Oct 14', 'Oct 13', 'Oct 13', 'Oct 13', 'Oct 12', 'Oct 12', 'Oct 10', 'Oct 10', 'Oct 10', 'Oct 9', 'Oct 9', 'Oct 9', 'Oct 8', 'Oct 8', 'Oct 7', 'Oct 7', 'Oct 6', 'Oct 6','Oct 5', 'Oct 5', 'Oct 3', 'Oct 3', 'Oct 3', 'Oct 2', 'Oct 2', 'Oct 2', 'Oct 2', 'Oct 1', 'Oct 1', 'Sept 30', 'Sept 30', 'Sept 29', 'Sept 29', 'Sept 29', 'Sept 28', 'Sept 28', 'Sept 26', 'Sept 26', 'Sept 25', 'Sept 24', 'Sept 24', 'Sept 23', 'Sept 23', 'Sept 23', 'Sept 22', 'Sept 22', 'Sept 22', 'Sept 21', 'Sept 21', 'Sept 20', 'Sept 19', 'Sept 19', 'Sept 19', 'Sept 18', 'Sep 18'], "Oct"), 73)
//​
//// Author: Raka Raka

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Human, Cat and Dog Years 🧑🏻🐱🐶

//tags: interview,logic,math,numbers

//url: https://edabit.com/challenge/HbkxB6egEhRewQDqr

//Description:
//Mubashir has a cat and a dog. He purchased both of them at the same time humanYears ago.
//Create a function which takes an argument of humanYears and returns [humanYears, catYears, dogYears] array.
//Human Years
//Human Years >= 1
//Human Years are whole numbers only.
//Cat Years
//15 cat years for first year.
//+9 cat years for second year.
//+4 cat years for each year after that.
//Dog Years
//15 dog years for first year
//+9 dog years for second year
//+5 dog years for each year after that
//Examples
//calculateYears(1) ➞ [1, 15, 15]
//
//calculateYears(2) ➞ [2, 24, 24]
//
//calculateYears(10) ➞ [10, 56, 64]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(calculateYears(1), [1,15,15])
//Test.assertSimilar(calculateYears(2), [2,24,24])
//Test.assertSimilar(calculateYears(10), [10,56,64])
//Test.assertSimilar(calculateYears(20), [20,96,114])
//Test.assertSimilar(calculateYears(65), [65,276,339])
//Test.assertSimilar(calculateYears(43), [43,188,229])
//Test.assertSimilar(calculateYears(100), [100,416,514])
//// Mubashir

