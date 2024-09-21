

//title: Printer Levels

//tags: numbers,objects

//url: https://edabit.com/challenge/QXWM2oo7rQNiyDsip

//Description:
//Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.
//Examples
//inkLevels({
//  "cyan": 23,
//  "magenta": 12,
//  "yellow": 10
//}) ➞ 10
//
//inkLevels({
//  "cyan": 432,
//  "magenta": 543,
//  "yellow": 777
//}) ➞ 432
//
//inkLevels({
//  "cyan": 700,
//  "magenta": 700,
//  "yellow": 0
//}) ➞ 0
//Notes
//A single printed page requires each color once, so printing is not possible if any of the slots lack ink (see example #3).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(inkLevels({
//  "cyan": 23,
//  "magenta": 12,
//  "yellow": 10
//}), 10);
//​
//Test.assertEquals(inkLevels({
//  "cyan": 432,
//  "magenta": 543,
//  "yellow": 777
//}), 432);
//​
//Test.assertEquals(inkLevels({
//  "cyan": 700,
//  "magenta": 700,
//  "yellow": 0
//}), 0);
//​
//Test.assertEquals(inkLevels({
//  "cyan": 70,
//  "magenta": 700,
//  "yellow": 1
//}), 1);
//​
//Test.assertEquals(inkLevels({

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Return the Highest and Lowest Numbers

//tags: algorithms,math,numbers,sorting

//url: https://edabit.com/challenge/PBXe4hLP3mbbMEFt8

//Description:
//Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).
//Examples
//highLow("1 2 3 4 5") ➞ "5 1"
//
//highLow("1 2 -3 4 5") ➞ "5 -3"
//
//highLow("1 9 3 4 -5") ➞ "9 -5"
//
//highLow("13") ➞ "13 13"
//Notes
//All numbers are valid Int32, no need to validate them.
//There will always be at least one number in the input string.
//Output string must be two numbers separated by a single space, and highest number is first.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(highLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214")
//Test.assertEquals(highLow("1 -1"), "1 -1")
//Test.assertEquals(highLow("1 1"), "1 1")
//Test.assertEquals(highLow("-1 -1"), "-1 -1")
//Test.assertEquals(highLow("1 -1 0"), "1 -1")
//Test.assertEquals(highLow("1 1 0"), "1 0")
//Test.assertEquals(highLow("-1 -1 0"), "0 -1")
//Test.assertEquals(highLow("42"), "42 42")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Adding Numbers in a String

//tags: language_fundamentals,numbers

//url: https://edabit.com/challenge/qKQ8Bn6ontrLTTNsr

//Description:
//Given a string of numbers separated by a comma and space, return the total sum of all the numbers.
//Examples
//addNums("2, 5, 1, 8, 4") ➞ 20
//
//addNums("1, 2, 3, 4, 5, 6, 7") ➞ 28
//
//addNums("10") ➞ 10
//Notes
//Numbers will always be separated by a comma and space.
//Your function should accept negative numbers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(addNums("2, 5, 1, 8, 4"), 20)
//Test.assertEquals(addNums("1, 2, 3, 4, 5, 6, 7"), 28)
//Test.assertEquals(addNums("10"), 10)
//Test.assertEquals(addNums("-12, -8, 2, 11, -16, 16"), -7)
//Test.assertEquals(addNums("25, -4, -15, -7, 27, 12, 29, -6, 20, 9"), 90)
//Test.assertEquals(addNums("24, 7, -15, -28, -21, 6, 5, -6, 23, 24, -22, 30, -21, -10, -10, -12, 24, -18, -13, -27, 22, -30, -11, -13, 6, 7, 27, 1"), -51)
//Test.assertEquals(addNums("-17, -18, -18, -14, -8, 0, 12, 2, 10, 5, -8, 12, -17, 8, -5, -23, 2, 29, -30, 13, -22, 19, 13, -18, -8"), -81)
//Test.assertEquals(addNums("16, 8, 19, 25, 18, 26, 2, 14"), 128)
//Test.assertEquals(addNums("-18, -10, 9, 12, -16, 22, 2, 17, 10, -25, 1, -25, -15, -29, 12, 11, 4"), -38)
//Test.assertEquals(addNums("12, -30, 26, -18, -4, 25, 19, -22, 7, -17, 3, -30, -27, 10, -12, -12, -24"), -94)
//Test.assertEquals(addNums("0, 21, 20, 0, 26, -9, 12, -9, 20"), 81)
//Test.assertEquals(addNums("-27, 28, -9, -9, 4, -22, -13, 0, -2, 19, 9, 5, 20, 21, -3, 22, 6, -10, -1, -12, 2"), 28)
//Test.assertEquals(addNums("13, -29, 13, 22, 23, 14, 2"), 58)
//Test.assertEquals(addNums("-18, 3, 30, 13, 20, -23, -18, -27, -30, 1, -19, -3, -19, -22, -1"), -113)
//Test.assertEquals(addNums("18, 20, 11, -7, -1, -7, -17, -3, 25, 23, 25, 6, 7, -1, -11, -24, -19, -18, 8, 24, 29, 19, 13, 0, -19, -25, -2, 8"), 82)
//Test.assertEquals(addNums("-13, -30, -1, -9, -25, -9, 11, -28, 0, 10, -23, -20, -5, 21, -29, 6, 20, -23, -23, -24, 30, -14, 24"), -154)
//Test.assertEquals(addNums("5, -16"), -11)
//Test.assertEquals(addNums("-28, -1, 12, 15, 16, -11, 23"), 26)
//Test.assertEquals(addNums("16, -3, 15, -20"), 8)
//Test.assertEquals(addNums("10, -2, -3, 6, -17, -8, -4, -9, -19, -13, 9, 19, 26, 26, -23, 5, 4, 2, -22, -10, 3, 11, -1, 10, 2, 23"), 25)
//Test.assertEquals(addNums("-19, -25, -27, 27, -16, -29, 19, -30, -18"), -118)
//Test.assertEquals(addNums("-28, 14, -19, -24, -17, 30, -1, 8, -13, -21, -4, 29, 4, 6, 29, -23, -9, -26, 8, -20, -14, -22"), -113)
//Test.assertEquals(addNums("-28, -11, -29"), -68)
//Test.assertEquals(addNums("18, -10, 22, -17, -6, -20, -25, -23, -1, 22, -16, 0, -24, 26, 20, 21, 3, -27, -24, -5, -28, -4, -3, 16, -18, 19, 26, -29"), -87)
//Test.assertEquals(addNums("-14, -25, -29, 3, 7, 11, 27, 12, -23, -12, 1, -17, -17, 4, 21, -29"), -80)

