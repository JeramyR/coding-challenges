

//title: Crop Fields

//tags: arrays,conditions,loops,strings,validation

//url: https://edabit.com/challenge/9KMYT5u9sww3MSzNt

//Description:
//You're given a 2D array / matrix of a crop field. Each crop needs to be hydrated. Each water source hydrates the 8 tiles around it. With "w" representing a water source, and "c" representing a crop, is every crop hydrated?
//Examples
//cropHydrated([
//  [ "w", "c" ],
//  [ "w", "c" ],
//  [ "c", "c" ]
//]) ➞ true
//
//cropHydrated([
//  [ "c", "c", "c" ]
//]) ➞ false
//// There isn"t even a water source.
//
//cropHydrated([
//  [ "c", "c", "c", "c" ],
//  [ "w", "c", "c", "c" ],
//  [ "c", "c", "c", "c" ],
//  [ "c", "w", "c", "c" ]
//]) ➞ false
//Notes
//"w" on its own should return true, and "c" on its own should return false.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(cropHydrated([
//  [ "w", "w" ],
//  [ "w", "c" ],
//  [ "c", "c" ],
//  [ "c", "w" ],
//  [ "c", "w" ]
//]), true)
//​
//Test.assertEquals(cropHydrated([
//  [ "c", "w", "w", "w", "c" ],
//  [ "w", "c", "c", "c", "c" ],
//  [ "c", "c", "c", "c", "c" ],
//  [ "w", "c", "c", "w", "c" ]
//]), true)
//​
//Test.assertEquals(cropHydrated([
//  [ "c", "w" ]
//]), true)
//​
//Test.assertEquals(cropHydrated([
//  [ "w", "c", "c", "c", "c" ],
//  [ "c", "c", "c", "w", "c" ]
//]), true)
//​
//Test.assertEquals(cropHydrated([

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Conway`s Game of Life

//tags: arrays,conditions,games,loops

//url: https://edabit.com/challenge/CzfwodvnWs5QjzEgv

//Description:
//
//The goal of this challenge is to implement the logic used in Conway's Game of Life. Wikipedia will give a better understanding of what it is and how it works (check the resources tab above).
//Rules
//For a space that's "populated":
//Each cell with 0 or 1 neighbours dies, as if by solitude.
//Each cell with 2 or 3 neighbours survives.
//Each cell with 4 or more neighbours dies, as if by overpopulation.
//For a space that's "empty" or "unpopulated":
//Each cell with 3 neighbours becomes populated.
//Parameters
//board: a 2-dimensional array of values 0 to 1.
//0 means the cell is empty.
//1 means the cell is populated.
//Return Value
//A string containing the board's state after the game logic has been applied once.
//On character: █
//Off character: ░
//Notes
//The string should be divided by newlines \n to signal the end of each row.
//A cell's "neighbours" are the eight cells that are vertically, horizontally and diagonally adjacent to it.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const example1 = [
//  [0, 0, 0],
//  [0, 1, 0],
//  [0, 0, 0],
//];
//​
//const example2 = [
//  [0, 1, 0],
//  [1, 1, 1],
//  [0, 1, 0],
//];
//​
//const example3 = [
//  [1, 0, 0],
//  [0, 1, 0],
//  [0, 0, 1],
//];
//​
//const example4 = [
//  [1, 0, 1],
//  [0, 0, 0],
//  [1, 0, 0],
//];
//​
//const glider = [

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Free Range

//tags: arrays,numbers

//url: https://edabit.com/challenge/rdK3DgsTrx6jg97Ab

//Description:
//Create a function which converts an ordered number array into a array of ranges (represented as strings). Note how some arrays have some numbers missing.
//Examples
//numbersToRanges([1, 2, 3, 4, 5]) ➞ ["1-5"]
//
//numbersToRanges([3, 4, 5, 10, 11, 12]) ➞ ["3-5", "10-12"]
//
//numbersToRanges([1, 2, 3, 4, 99, 100]) ➞ ["1-4", "99-100"]
//
//numbersToRanges([1, 3, 4, 5, 6, 7, 8]) ➞ ["1", "3-8"]
//Notes
//If there are no numbers consecutive to a number in the array, represent it as only the string version of that number (see example #4).
//Return an empty array if the given array is empty.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(numbersToRanges([1, 2, 3, 4, 5]), ['1-5'])
//Test.assertSimilar(numbersToRanges([6, 7, 8, 10, 11, 12]), ['6-8', '10-12'])
//Test.assertSimilar(numbersToRanges([1, 2, 3, 6, 7, 8]), ['1-3', '6-8'])
//Test.assertSimilar(numbersToRanges([1, 3, 4, 5, 6, 7, 8]), ['1', '3-8'])
//Test.assertSimilar(numbersToRanges([1]), ['1'])
//Test.assertSimilar(numbersToRanges([3, 4, 5, 10, 11, 12]), ['3-5', '10-12'])
//Test.assertSimilar(numbersToRanges([1, 2, 3, 4, 99, 100]), ['1-4', '99-100'])
//Test.assertSimilar(numbersToRanges([]), [])

