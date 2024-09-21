

//title: Point Within Triangle

//tags: algebra,math,validation

//url: https://edabit.com/challenge/3r6rTcdpkQtzFmHwy

//Description:
//Create a function that takes four pairs. The first three are (x, y) coordinates of three corners of a triangle. Return true if the fourth tuple — the (x, y) coordinates of a test point — lies within the triangle, false if it doesn't.
//Examples
//withinTriangle([1, 4], [5, 6], [6, 1], [4, 5]) ➞ true
//
//withinTriangle([1, 4], [5, 6], [6, 1], [3, 2]) ➞ false
//
//withinTriangle([-6, 2], [-2, -2], [8, 4], [4, 2]) ➞ true
//Notes
//Pairs are given as arrays of length two.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(withinTriangle([1, 4], [5, 6], [6, 1], [4, 5]), true)
//Test.assertEquals(withinTriangle([1, 4], [5, 6], [6, 1], [3, 2]), false)
//Test.assertEquals(withinTriangle([1, 7], [2, 4], [9, 3], [2, 6]), true)
//Test.assertEquals(withinTriangle([1, 7], [2, 4], [9, 3], [6, 5]), false)
//Test.assertEquals(withinTriangle([-2, 6], [12, -3], [1, 7], [9, -1]), true)
//Test.assertEquals(withinTriangle([-2, 6], [12, -3], [1, 7], [4, 2]), false)
//Test.assertEquals(withinTriangle([-6, 2], [-2, -2], [8, 4], [4, 2]), true)
//Test.assertEquals(withinTriangle([-6, 2], [-2, -2], [8, 4], [0, -4]), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Day Number of Year

//tags: dates,formatting,numbers,strings

//url: https://edabit.com/challenge/XRymHQ2p4p5T7GbQC

//Description:
//Each year has 365 or 366 days. Given a string date representing a Gregorian calendar date formatted as month/day/year, return the day-number of the year.
//Examples
//dayOfYear("12/13/2020") ➞ 348
//
//dayOfYear("12/17/2020") ➞ 352
//
//dayOfYear("11/16/2020") ➞ 321
//
//dayOfYear("1/9/2019") ➞ 9
//
//dayOfYear("3/1/2004") ➞ 61
//
//dayOfYear("12/31/2000") ➞ 366
//Notes
//All input strings in the tests are valid dates.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(dayOfYear("12/13/2020"), 348)
//Test.assertEquals(dayOfYear("12/17/2020"), 352)
//Test.assertEquals(dayOfYear("11/16/2020"), 321)
//Test.assertEquals(dayOfYear("1/9/2019"), 9)
//Test.assertEquals(dayOfYear("3/1/2004"), 61)
//Test.assertEquals(dayOfYear("12/31/2000"), 366)
//​
//let testDates = [
//    ["7/25/2015", 206], ["10/15/1985", 288], ["2/29/1904", 60],
//    ["8/29/1900", 241], ["10/7/2050", 280], ["4/1/3024", 92],
//    ["2/29/1600", 60], ["3/31/1999", 90], ["5/3/0002", 123],
//    ["9/11/2001", 254], ["7/1/9996", 183], ["11/3/2020", 308]
//]
//for (let [ac, ex] of testDates) Test.assertEquals(dayOfYear(ac), ex)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: nPr and nCr

//tags: algebra,math,numbers

//url: https://edabit.com/challenge/5WEzjzSrJ9W7t6dLX

//Description:
//Write a function that efficiently calculates nPr (number of permutations of r items from a set of size n) and another function that efficiently calculates nCr (number of combinations of r items from a set of size n, regardless of order).
//The formula for calculating nPr is n!/(n-r)! ("!" is the factorial operation).
//The formula for calculating nCr is n!/(r!(n-r)!).
//Your functions should work efficiently for cases where n! or r! are very large compared to the result. Simply calculating the factorials and dividing will cause your program to time out. See if you can think of a more efficient method.
//Examples
//// Permutations
//
//nPr(7, 4) ➞ 840
//nPr(300, 3) ➞ 26730600
//
//// Combinations
//
//nCr(7, 4) ➞ 35
//nCr(300, 3) ➞ 4455100
//nCr(300, 297) ➞ 4455100
//Notes
//n and r will always be positive integers where n >= r.
//Think about what factors will cancel out when dividing the factorials.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(nPr(7, 4), 840)
//Test.assertEquals(nPr(8, 5), 6720)
//Test.assertEquals(nPr(4, 3), 24)
//Test.assertEquals(nPr(7, 7), 5040)
//Test.assertEquals(nPr(7, 1), 7)
//Test.assertEquals(nPr(300, 3), 26730600)
//Test.assertEquals(nPr(1000000, 2), 999999000000)
//Test.assertEquals(nPr(1000000000, 1), 1000000000)
//​
//Test.assertEquals(nCr(7, 4), 35)
//Test.assertEquals(nCr(8, 5), 56)
//Test.assertEquals(nCr(4, 3), 4)
//Test.assertEquals(nCr(7, 7), 1)
//Test.assertEquals(nCr(7, 1), 7)
//Test.assertEquals(nCr(300, 3), 4455100)
//Test.assertEquals(nCr(300, 297), 4455100)
//Test.assertEquals(nCr(1000000, 2), 499999500000)
//Test.assertEquals(nCr(1000000, 999998), 499999500000)
//Test.assertEquals(nCr(1000000000, 1), 1000000000)
//Test.assertEquals(nCr(1000000000, 1000000000), 1)

