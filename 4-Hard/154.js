

//title: Check Magic Square

//tags: algorithms,arrays,data_structures,loops

//url: https://edabit.com/challenge/iYcNv2tDvNgnSsG9S

//Description:
//A "magic square" is a square divided into smaller squares each containing a number, such that the numbers in each vertical, horizontal, and diagonal row add up to the same value.
//
//Write a function that takes a 2D array, checks if it's a magic square and returns either true or false depending on the result.
//Examples
//isMagicSquare([
//  [8, 1, 6],
//  [3, 5, 7],
//  [4, 9, 2]
//]) ➞ true
//
//isMagicSquare([
//  [16,  3,  2, 13],
//  [ 5, 10, 11,  8],
//  [ 9,  6,  7, 12],
//  [ 4, 15, 14,  1]
//]) ➞ true
//
//isMagicSquare([
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
//]) ➞ false
//Notes
//Check diagonals as well.
//Test input will always be square.
//Check the Resources tab for additional info on magic squares.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isMagicSquare([
//  [8, 1, 6],
//  [3, 5, 7],
//  [4, 9, 2]
//]), true)
//​
//Test.assertEquals(isMagicSquare([
//  [16, 3, 2, 13],
//  [5, 10, 11, 8],
//  [9, 6, 7, 12],
//  [4, 15, 14, 1]
//]), true)
//​
//Test.assertEquals(isMagicSquare([
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
//]), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Filter Items from an Array

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/QdiAZBBr59u5PXJaM

//Description:
//Create a function that takes two parameters:
//An array with items ranging from numbers and strings.
//An array with items ranging from numbers, strings and and anonymous function.
//The function should return only the items from the first array that satisfies the anonymous function present in the second array.
//Detail
//#filterArray([1, 2, 3, 4], [100, (num) => num % 2 === 0]) ➞ [2, 4]
//
//# 2 and 4 from [1, 2, 3, 4] satisifies  anonymous function in the second array.
//# (num) => num % 2 === 0          2 % 2 === 0 and 4 % 2 === 0
//# 1 and 3 do not satisfy (num) => num % 2 === 0
//Examples
// filterArray([1, 2, 3, 4], [1, 2, (num) => num % 2 === 0]) ➞ [2 , 4]
//
// filterArray([1, 2, 3, 4, 5], [1, 2, (num) => num % 2 === 1,"eon","epoch"]) ➞ [1, 3, 5]
//
// filterArray(["apple", "kiwi"], [2, (txt) => txt.indexOf("a") > -1]) ➞ ["apple"]
//Notes
//Inputs are always two arrays.
//There is always only one anonymous function in the second array that needs to be checked with the item in the first array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(filterArray([1,2,3,4,5],[1,2, (num) => num % 2 === 1]),[1, 3, 5])
//Test.assertSimilar(filterArray([1,2,3,4,5],[(num) => num % 2 === 1],""),[1, 3, 5]) 
//Test.assertSimilar(filterArray(["apple","kiwi","grape"],[2,(txt) => txt.indexOf("a")>-1],12),["apple","grape"]) 
//Test.assertSimilar(filterArray(["nepal","radar","madam","civic"],[(txt) => txt === [...txt].reverse().join("")]),["radar","madam","civic"])
//Test.assertSimilar(filterArray(["balkot","naxal","dalu","gwarko"],[1,2, (txt) => txt.length > 4,"a","b"]),["balkot","naxal","gwarko"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Stems and Leaves

//tags: data_structures,formatting,numbers

//url: https://edabit.com/challenge/ZAGhB6otwk54JB8FA

//Description:
//In statistics a stem-and-leaf plot is a graphical representation of values distribution in a dataset, usually implemented for a small set of values. In this exercise we'll build a simple plot for positive integer values following the steps below.
//1) You must separate each value in two parts: the stem, equal to all number digits but last and the leaf, equal to the last digit. For numbers in range 0-9 you must add a "0" at the start. Examples:
//4872: stem is "487", leaf is "2".
//429: stem is "42", leaf is "9".
//85: stem is "8", leaf is "5".
//1: stem is "0", leaf is "1".
//2) Insert in the plot the stems without duplicate values in ascending order, and for every stem every proper leaf in ascending order. Examples for a dataset containing 22, 22, 13, 11, 11:
//Stems are 1 and 2 (no duplicates in ascending order).
//Leaves for stem 1 are 1, 1 and 3 (every leaf in ascending order), leaves for stem 2 are 2 and 2.
//Given an array of positive integers you must return the stem-and-leaf plot as an array of strings, one for each stem: strings have to be formatted with stem and leaves separated by " I " (spaces included) and leaves in ascending order separated by a space between them.
//Examples
//stemPlot([111, 11, 1]) ➞ ["0 | 1", "1 | 1", "11 | 1"]
//
//stemPlot([4, 8, 75]) ➞ ["0 | 4 8", "7 | 5"]
//
//stemPlot([22, 22, 38, 22, 19]) ➞ ["1 | 9", "2 | 2 2 2", "3 | 8"]
//Notes
//Every given array is valid, containing only positive integers (no exceptions to handle).
//Pay attention to leading and trailing zeroes.
//You can find more info about stem-and-leaf plots in the Resources tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(stemPlot([111, 11, 1]), ["0 | 1", "1 | 1", "11 | 1"], "Example #1")
//Test.assertSimilar(stemPlot([4, 8, 75]), ["0 | 4 8", "7 | 5"], "Example #2")
//Test.assertSimilar(stemPlot([22, 22, 38, 22, 19]), ["1 | 9", "2 | 2 2 2", "3 | 8"], "Example #3")
//Test.assertSimilar(stemPlot([1062, 310, 89, 9, 16]), ["0 | 9", "1 | 6", "8 | 9", "31 | 0", "106 | 2"])
//Test.assertSimilar(stemPlot([48, 125, 48, 48, 20, 21, 22, 125, 48, 20]), ["2 | 0 0 1 2", "4 | 8 8 8 8", "12 | 5 5"])
//Test.assertSimilar(stemPlot([36, 12, 2, 4, 1062, 1062, 2, 36, 234]), ["0 | 2 2 4", "1 | 2", "3 | 6 6", "23 | 4", "106 | 2 2"])
//Test.assertSimilar(stemPlot([555, 555, 555, 555]), ["55 | 5 5 5 5"])
//Test.assertSimilar(stemPlot([10, 20, 30, 1, 2, 3]), ["0 | 1 2 3", "1 | 0", "2 | 0", "3 | 0"])

