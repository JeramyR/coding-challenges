

//title: Formating BigInts

//tags: algebra,formatting,language_fundamentals,numbers,strings

//url: https://edabit.com/challenge/cXgmHb6aXESZBvW4b

//Description:
//Cryptocurrencies often have a lot of decimals. For example, the popular cryptocurrency Ethereum has 18 decimals.
//When dealing with money, precision is important, you don't want to lose money because a number is losing precision. However, with JavaScript, normal numbers only can go up to 9007199254740991. To deal with this, Javascript now has BigInt for integers bigger than that.
//However, in order to get back to a decimal number, the number needs to be formatted from a BigInt to a string with the right number of decimals.
//Write a function that takes as arguments a BigInt and the desired amount of decimals and returns a string (not a number, as it will lose precision) with the correct amount of decimals.
//Examples
//formatBigInt(1938908490185852058934n, 18) ➞ "1938.908490185852058934"
//
//formatBigInt(987654321987654321n, 6 ) ➞ "987654321987.654321"
//
//formatBigInt(13902183984901849081284n, 12) ➞ "13902183984.901849081284"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(formatBigInt(1938908490185852058934n, 18), "1938.908490185852058934")
//Test.assertEquals(formatBigInt(987654321987654321n, 6), "987654321987.654321")
//Test.assertEquals(formatBigInt(13902183984901849081284n, 12), "13902183984.901849081284")
//Test.assertEquals(formatBigInt(923948293849023849082094892384024n, 18), "923948293849023.849082094892384024")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Peeling off the Outer Layers

//tags: arrays,language_fundamentals,loops

//url: https://edabit.com/challenge/mQznJjH2mtaybMCG8

//Description:
//Given an array of arrays, return a new array of arrays containing every element, except for the outer elements.
//Examples
//peelLayerOff([
//  ["a", "b", "c", "d"],
//  ["e", "f", "g", "h"],
//  ["i", "j", "k", "l"],
//  ["m", "n", "o", "p"]
//]) ➞ [
//  ["f", "g"],
//  ["j", "k"]
//]
//
//peelLayerOff([
//  [1, 2, 3, 4, 5],
//  [6, 7, 8, 9, 10],
//  [11, 12, 13, 14, 15],
//  [16, 17, 18, 19, 20],
//  [21, 22, 23, 24, 25],
//  [26, 27, 28, 29, 30],
//  [31, 32, 33, 34, 35]
//]) ➞ [
//  [7, 8, 9],
//  [12, 13, 14],
//  [17, 18, 19],
//  [22, 23, 24],
//  [27, 28, 29]
//]
//
//peelLayerOff([
//  [true, false, true],
//  [false, false, true],
//  [true, true, true]
//]) ➞ [[false]]
//
//peelLayerOff([
//  ["hello", "world"],
//  ["hello", "world"]
//]) ➞ []
//Notes
//The 2D grid is always a rectangular/square shape.
//Always return some form of nested array, unless there are no elements. In that case, return an empty array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(peelLayerOff([
//  ['a', 'b', 'c', 'd'],
//  ['e', 'f', 'g', 'h'],
//  ['i', 'j', 'k', 'l'],
//  ['m', 'n', 'o', 'p']
//]), [
//  ['f', 'g'],
//  ['j', 'k']
//])
//​
//Test.assertSimilar(peelLayerOff([
//  [1, 2, 3, 4, 5], 
//  [6, 7, 8, 9, 10], 
//  [11, 12, 13, 14, 15],
//  [16, 17, 18, 19, 20], 
//  [21, 22, 23, 24, 25], 
//  [26, 27, 28, 29, 30],
//  [31, 32, 33, 34, 35]
//]), [
//  [7, 8, 9], 
//  [12, 13, 14], 
//  [17, 18, 19],
//  [22, 23, 24], 
//  [27, 28, 29],
//])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Largest Even Number

//tags: algorithms,loops,numbers,recursion

//url: https://edabit.com/challenge/DX898Gd3L6QXAWMSf

//Description:
//Write a function that finds the largest number in an array nums that is also even. If there is no even number, return -1.
//Examples
//largestEven([3, 7, 2, 1, 7, 9, 10, 13]) ➞ 10
//
//largestEven([1, 3, 5, 7]) ➞ -1
//
//largestEven([0, 19, 18973623]) ➞ 0
//Notes
//Consider using the modulo % operator.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(largestEven([3, 7, 2, 1, 7, 9, 10, 13]), 10)
//Test.assertEquals(largestEven([1]), -1)
//Test.assertEquals(largestEven([22]), 22)
//Test.assertEquals(largestEven([13, 5, 7, 9]), -1)
//Test.assertEquals(largestEven([3, 19, 18973623, 2]), 2)

