

//title: Building A Binary Clock

//tags: arrays,strings

//url: https://edabit.com/challenge/3zB2qyJRpvJGCsCj4

//Description:
//A binary clock displays the time of day in binary format. Modern binary clocks have six columns of lights; two for each of the hours, minutes and seconds. The photo below shows a binary clock displaying the time "12:15:45":
//
//The binary values increase from the bottom to the top row. Lights on the bottom row have a value of 1, lights on the row above have a value of 2, then 4 on the row above that, and finally a value of 8 on the top row. Any 24-hour time can be shown by switching on a certain combination of lights. For example, to show the time "10:37:49":
//
//You've decided to build your own binary clock, and you need to figure out how to light each row of the clock to show the correct time. Given the time as a string, return an array containing strings that shows the lights for each row of the clock (top to bottom). Use "1" for on, and "0" for off. Leave a blank space for any part of the row that doesn't require a light.
//Examples
//binaryClock("10:37:49") ➞ [
//  " 0 0 1",
//  " 00110",
//  "001100",
//  "101101"
//]
//
//binaryClock("18:57:31") ➞ [
//  " 1 0 0",
//  " 01100",
//  "000110",
//  "101111"
//]
//
//binaryClock("10:50:22") ➞ [
//  " 0 0 0",
//  " 01000",
//  "000011",
//  "101000"
//]
//Notes
//See the Resources section for more information on binary clocks.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(binaryClock("07:24:16"), [' 0 0 0', ' 10101', '011001', '010010'])
//Test.assertSimilar(binaryClock("13:48:18"), [' 0 1 1', ' 01000', '010000', '110010'])
//Test.assertSimilar(binaryClock("18:48:15"), [' 1 1 0', ' 01001', '000000', '100011'])
//Test.assertSimilar(binaryClock("11:47:55"), [' 0 0 0', ' 01111', '000100', '110111'])
//Test.assertSimilar(binaryClock("05:46:39"), [' 0 0 1', ' 11100', '000110', '010011'])
//Test.assertSimilar(binaryClock("20:35:19"), [' 0 0 1', ' 00100', '101000', '001111'])
//Test.assertSimilar(binaryClock("10:51:40"), [' 0 0 0', ' 01010', '000000', '101100'])
//Test.assertSimilar(binaryClock("10:16:17"), [' 0 0 0', ' 00101', '000101', '101011'])
//Test.assertSimilar(binaryClock("08:17:26"), [' 1 0 0', ' 00101', '000111', '001100'])
//Test.assertSimilar(binaryClock("17:48:59"), [' 0 1 1', ' 11010', '010000', '110011'])
//Test.assertSimilar(binaryClock("20:04:33"), [' 0 0 0', ' 00100', '100011', '000011'])
//Test.assertSimilar(binaryClock("01:35:39"), [' 0 0 1', ' 00100', '001010', '011111'])
//Test.assertSimilar(binaryClock("13:23:39"), [' 0 0 1', ' 00000', '011110', '110111'])
//Test.assertSimilar(binaryClock("01:56:09"), [' 0 0 1', ' 01100', '000100', '011001'])
//Test.assertSimilar(binaryClock("10:50:22"), [' 0 0 0', ' 01000', '000011', '101000'])
//Test.assertSimilar(binaryClock("07:41:09"), [' 0 0 1', ' 11000', '010000', '010101'])
//Test.assertSimilar(binaryClock("10:20:42"), [' 0 0 0', ' 00010', '001001', '100000'])
//Test.assertSimilar(binaryClock("02:19:30"), [' 0 1 0', ' 00000', '010010', '001110'])
//Test.assertSimilar(binaryClock("13:41:41"), [' 0 0 0', ' 01010', '010000', '110101'])
//Test.assertSimilar(binaryClock("03:17:28"), [' 0 0 1', ' 00100', '010110', '011100'])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Validate Subsequences

//tags: algorithms,loops,validation

//url: https://edabit.com/challenge/m7MrccayTukhfEeni

//Description:
//Given two non-empty lists, write a function that determines whether the second array is a subsequence of the first array.
//For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4].
//Examples
//isValidSubsequence([1, 1, 6, 1],[1, 1, 1, 6]) ➞ false
//
//isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [22, 25, 6]) ➞ true
//
//isValidSubsequence([1, 2, 3, 4], [2, 4]) ➞ true
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],[1, 6, -1, 10]), true)
//Test.assertEquals(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10]), true)
//Test.assertEquals(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [22, 25, 6]), true)
//Test.assertEquals(isValidSubsequence([1, 1, 6, 1],[1, 1, 1, 6]), false)
//Test.assertEquals(isValidSubsequence([1, 2, 3, 4],[2, 4]), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Minesweeper I — Grid

//tags: arrays,games,loops

//url: https://edabit.com/challenge/voZCqTGMSNjCrRhf9

//Description:
//This challenge is based on the game Minesweeper.
//Create a function that takes a grid of # and -, where each hash (#) represents a mine and each dash (-) represents a mine-free spot. Return an array where each dash is replaced by a digit indicating the number of mines immediately adjacent to the spot (horizontally, vertically, and diagonally).
//Examples
//numGrid([
//  ["-", "-", "-", "-", "-"],
//  ["-", "-", "-", "-", "-"],
//  ["-", "-", "#", "-", "-"],
//  ["-", "-", "-", "-", "-"],
//  ["-", "-", "-", "-", "-"]
//]) ➞ [
//  ["0", "0", "0", "0", "0"],
//  ["0", "1", "1", "1", "0"],
//  ["0", "1", "#", "1", "0"],
//  ["0", "1", "1", "1", "0"],
//  ["0", "0", "0", "0", "0"],
//]
//
//numGrid([
//  ["-", "-", "-", "-", "#"],
//  ["-", "-", "-", "-", "-"],
//  ["-", "-", "#", "-", "-"],
//  ["-", "-", "-", "-", "-"],
//  ["#", "-", "-", "-", "-"]
//]) ➞ [
//  ["0", "0", "0", "1", "#"],
//  ["0", "1", "1", "2", "1"],
//  ["0", "1", "#", "1", "0"],
//  ["1", "2", "1", "1", "0"],
//  ["#", "1", "0", "0", "0"]
//]
//
//numGrid([
//  ["-", "-", "-", "#", "#"],
//  ["-", "#", "-", "-", "-"],
//  ["-", "-", "#", "-", "-"],
//  ["-", "#", "#", "-", "-"],
//  ["-", "-", "-", "-", "-"]
//]) ➞ [
//  ["1", "1", "2", "#", "#"],
//  ["1", "#", "3", "3", "2"],
//  ["2", "4", "#", "2", "0"],
//  ["1", "#", "#", "2", "0"],
//  ["1", "2", "2", "1", "0"],
//]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(numGrid([
//['-', '-', '-', '-', '-'],
//['-', '-', '-', '-', '-'],
//['-', '-', '#', '-', '-'],
//['-', '-', '-', '-', '-'],
//['-', '-', '-', '-', '-']
//]), [
//['0', '0', '0', '0', '0'],
//['0', '1', '1', '1', '0'],
//['0', '1', '#', '1', '0'],
//['0', '1', '1', '1', '0'],
//['0', '0', '0', '0', '0']
//])
//​
//Test.assertSimilar(numGrid([
//['-', '-', '-', '-', '#'],
//['-', '-', '-', '-', '-'],
//['-', '-', '#', '-', '-'],
//['-', '-', '-', '-', '-'],
//['#', '-', '-', '-', '-']
//]), [
//['0', '0', '0', '1', '#'],
//['0', '1', '1', '2', '1'],
//['0', '1', '#', '1', '0'],
//['1', '2', '1', '1', '0'],

