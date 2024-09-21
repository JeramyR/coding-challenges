

//title: Pascal`s Triangle

//tags: algebra,algorithms,math,numbers

//url: https://edabit.com/challenge/PDKc8DaTFRre5HydA

//Description:
//Mubashir was reading about Pascal's triangle on Wikipedia.
//In mathematics, Pascal's triangle is a triangular array of the binomial coefficients that arises in probability theory, combinatorics, and algebra.
//
//Formula for Pascal's triangle is given by:
//
//where n denotes a row of the triangle, and k is the position of a term in the row.
//Create a function which takes a number n and returns n top rows of Pascal's Triangle flattened into a one-dimensional list.
//Examples
//pascalsTriangle(1) ➞ [1]
//
//pascalsTriangle(2) ➞ [1, 1, 1]
//
//pascalsTriangle(4) ➞ [1, 1, 1, 1, 2, 1, 1, 3, 3, 1]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(pascalsTriangle(1), [1])
//Test.assertSimilar(pascalsTriangle(2), [1, 1, 1])
//Test.assertSimilar(pascalsTriangle(4), [1, 1, 1, 1, 2, 1, 1, 3, 3, 1])
//Test.assertSimilar(pascalsTriangle(6), [1, 1, 1, 1, 2, 1, 1, 3, 3, 1, 1, 4, 6, 4, 1, 1, 5, 10, 10, 5, 1])
//Test.assertSimilar(pascalsTriangle(10), [1, 1, 1, 1, 2, 1, 1, 3, 3, 1, 1, 4, 6, 4, 1, 1, 5, 10, 10, 5, 1, 1, 6, 15, 20, 15, 6, 1, 1, 7, 21, 35, 35, 21, 7, 1, 1, 8, 28, 56, 70, 56, 28, 8, 1, 1, 9, 36, 84, 126, 126, 84, 36, 9, 1])
//Test.assertSimilar(pascalsTriangle(20), [1, 1, 1, 1, 2, 1, 1, 3, 3, 1, 1, 4, 6, 4, 1, 1, 5, 10, 10, 5, 1, 1, 6, 15, 20, 15, 6, 1, 1, 7, 21, 35, 35, 21, 7, 1, 1, 8, 28, 56, 70, 56, 28, 8, 1, 1, 9, 36, 84, 126, 126, 84, 36, 9, 1, 1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1, 1, 11, 55, 165, 330, 462, 462, 330, 165, 55, 11, 1, 1, 12, 66, 220, 495, 792, 924, 792, 495, 220, 66, 12, 1, 1, 13, 78, 286, 715, 1287, 1716, 1716, 1287, 715, 286, 78, 13, 1, 1, 14, 91, 364, 1001, 2002, 3003, 3432, 3003, 2002, 1001, 364, 91, 14, 1, 1, 15, 105, 455, 1365, 3003, 5005, 6435, 6435, 5005, 3003, 1365, 455, 105, 15, 1, 1, 16, 120, 560, 1820, 4368, 8008, 11440, 12870, 11440, 8008, 4368, 1820, 560, 120, 16, 1, 1, 17, 136, 680, 2380, 6188, 12376, 19448, 24310, 24310, 19448, 12376, 6188, 2380, 680, 136, 17, 1, 1, 18, 153, 816, 3060, 8568, 18564, 31824, 43758, 48620, 43758, 31824, 18564, 8568, 3060, 816, 153, 18, 1, 1, 19, 171, 969, 3876, 11628, 27132, 50388, 75582, 92378, 92378, 75582, 50388, 27132, 11628, 3876, 969, 171, 19, 1])
//Test.assertSimilar(pascalsTriangle(25), [1, 1, 1, 1, 2, 1, 1, 3, 3, 1, 1, 4, 6, 4, 1, 1, 5, 10, 10, 5, 1, 1, 6, 15, 20, 15, 6, 1, 1, 7, 21, 35, 35, 21, 7, 1, 1, 8, 28, 56, 70, 56, 28, 8, 1, 1, 9, 36, 84, 126, 126, 84, 36, 9, 1, 1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1, 1, 11, 55, 165, 330, 462, 462, 330, 165, 55, 11, 1, 1, 12, 66, 220, 495, 792, 924, 792, 495, 220, 66, 12, 1, 1, 13, 78, 286, 715, 1287, 1716, 1716, 1287, 715, 286, 78, 13, 1, 1, 14, 91, 364, 1001, 2002, 3003, 3432, 3003, 2002, 1001, 364, 91, 14, 1, 1, 15, 105, 455, 1365, 3003, 5005, 6435, 6435, 5005, 3003, 1365, 455, 105, 15, 1, 1, 16, 120, 560, 1820, 4368, 8008, 11440, 12870, 11440, 8008, 4368, 1820, 560, 120, 16, 1, 1, 17, 136, 680, 2380, 6188, 12376, 19448, 24310, 24310, 19448, 12376, 6188, 2380, 680, 136, 17, 1, 1, 18, 153, 816, 3060, 8568, 18564, 31824, 43758, 48620, 43758, 31824, 18564, 8568, 3060, 816, 153, 18, 1, 1, 19, 171, 969, 3876, 11628, 27132, 50388, 75582, 92378, 92378, 75582, 50388, 27132, 11628, 3876, 969, 171, 19, 1, 1, 20, 190, 1140, 4845, 15504, 38760, 77520, 125970, 167960, 184756, 167960, 125970, 77520, 38760, 15504, 4845, 1140, 190, 20, 1, 1, 21, 210, 1330, 5985, 20349, 54264, 116280, 203490, 293930, 352716, 352716, 293930, 203490, 116280, 54264, 20349, 5985, 1330, 210, 21, 1, 1, 22, 231, 1540, 7315, 26334, 74613, 170544, 319770, 497420, 646646, 705432, 646646, 497420, 319770, 170544, 74613, 26334, 7315, 1540, 231, 22, 1, 1, 23, 253, 1771, 8855, 33649, 100947, 245157, 490314, 817190, 1144066, 1352078, 1352078, 1144066, 817190, 490314, 245157, 100947, 33649, 8855, 1771, 253, 23, 1, 1, 24, 276, 2024, 10626, 42504, 134596, 346104, 735471, 1307504, 1961256, 2496144, 2704156, 2496144, 1961256, 1307504, 735471, 346104, 134596, 42504, 10626, 2024, 276, 24, 1])
////Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Deepest Subarray

//tags: arrays,functional_programming,language_fundamentals

//url: https://edabit.com/challenge/yQEpNqBw4dCbGoYPr

//Description:
//You are given an array which may contain subarrays. Your task is to find the depth of the deepest subarray.
//[a] = 1 depth
//[[a]] = 2 depth
//[[[a]]] = 3 depth, etc
//Examples
//deepest([1, [2, 3], 4, [5, 6]]) ➞ 2
//
//deepest([[[[[[[[[[1]]]]]]]]]]) ➞ 10
//
//deepest([1, 4, [1, 4, [1, 4, [1, 4, [5]]]]]) ➞ 5
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(deepest([1, 4, 5]), 1)
//Test.assertEquals(deepest([[2, 3], 4, [6, 7, [8]]]), 3)
//Test.assertEquals(deepest([5, [[[[[[[[[[2]]]]]]]]]], [[[[[[[[[[[[4]]]]]]]]]]]]]), 13)
//Test.assertEquals(deepest([[[3, 2, [[4]], 8], [[2, 4], 5]], 3, 5, [9, 1]]), 5)
//Test.assertEquals(deepest([[6, 9, 6], [[[1, 4], 0, 8], [8, 0, [4, 1]]], [[5, 3, 4], [4, 3, 5]]]), 4)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: ES6 Object Methods in ES5

//tags: arrays,language_fundamentals,objects

//url: https://edabit.com/challenge/6XKsAq8yT7gHex75i

//Description:
//In ES6 JavaScript, there exist two Object methods:
//Object.prototype.entries() takes a single object as an argument, and returns an array. In this array are arrays with the name of every property of the object, and the value of the property.
//Object.prototype.values() also takes a single object as an argument, and returns an array. In this array are the values of every property of the object.
//Examples
//const myObject = {
//  a: 1,
//  b: 2
//}
//
//Object.entries(myObject) ➞ [ ["a", 1], ["b", 2] ]
//Object.values(myObject) ➞ [1, 2]
//Your job is to recreate these Object methods in ES5 JavaScript, creating new methods:
//Object.prototype.entriesNew()
//Object.prototype.valuesNew()
//The methods you create should return the same values as Object.prototype.entries() and Object.prototype.values(), and should adhere to ES5 limits. If the object has no properties your methods should return an empty array.
//Examples
//Object.valuesNew({ a: 1, b: 2 }) ➞ [1, 2]
//
//Object.entriesNew({ first: 1, second: 2 }) ➞ [ ["first", 1], ["second", 2] ]
//
//Object.valuesNew({}) ➞ []
//
//Object.entiresNew({}) ➞ []
//Notes
//Do not use ES6 Object methods.
//Do not use ES6 features like arrow functions or let.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(Object.valuesNew({name: 'john', hairColor: 'brown'}), ['john','brown']);
//Test.assertSimilar(Object.entriesNew({1: 'One', 2: 'Two', 3: 'Three'}), [['1','One'],['2','Two'],['3','Three']]);
//Test.assertSimilar(Object.valuesNew({}), []);
//Test.assertSimilar(Object.entriesNew({}), []);
//Test.assertSimilar(Object.entriesNew({purpose: null, reason: 'none', cause: 'none'}), [['purpose',null],['reason','none'],['cause','none']]);
//Test.assertSimilar(Object.valuesNew({first: 1, second: 2, third: 3}), [1,2,3])

