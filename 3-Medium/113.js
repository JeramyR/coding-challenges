

//title: "EdaBit" Challenge

//tags: algorithms,math

//url: https://edabit.com/challenge/RGtTrNLpckt6bdmSx

//Description:
//Create a function that returns the array of numbers from a given range. But for multiples of three, return “Eda” instead of the number and for the multiples of five, return “Bit”. For numbers which are multiples of both three and five, return “EdaBit”.
//Examples
//edaBit(0, 10) ➞ ["EdaBit", 1, 2, "Eda", 4, "Bit", "Eda", 7, 8, "Eda", "Bit" ]
//
//edaBit(14, 20) ➞ [14,  "EdaBit", 16, 17,  "Eda", 19, "Bit" ]
//
//edaBit(99, 106) ➞ ["Eda", "Bit", 101, "Eda", 103, 104, "EdaBit", 106 ]
//Notes
//In case the number 0 happens to be in the range, return "EdaBit" as well.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(edaBit(1, 20), [1,2,'Eda',4,'Bit','Eda',7,8,'Eda','Bit',11,'Eda',13,14,'EdaBit',16,17,'Eda',19,'Bit'])
//Test.assertSimilar(edaBit(-250, -230), ['Bit', 'Eda', -248, -247, 'Eda', 'Bit', -244, 'Eda', -242, -241, 'EdaBit', -239, -238, 'Eda', -236, 'Bit', 'Eda', -233, -232, 'Eda', 'Bit'])
//Test.assertSimilar(edaBit(-10, 5), ['Bit', 'Eda', -8, -7, 'Eda', 'Bit', -4, 'Eda', -2, -1, 'EdaBit', 1, 2, 'Eda', 4, 'Bit'])
//Test.assertSimilar(edaBit(33, 45), ['Eda', 34, 'Bit', 'Eda', 37, 38, 'Eda', 'Bit', 41, 'Eda', 43, 44, 'EdaBit'])
//Test.assertSimilar(edaBit(50, 90), ['Bit', 'Eda', 52, 53, 'Eda', 'Bit', 56, 'Eda', 58, 59, 'EdaBit', 61, 62, 'Eda', 64, 'Bit', 'Eda', 67, 68, 'Eda', 'Bit', 71, 'Eda', 73, 74, 'EdaBit', 76, 77, 'Eda', 79, 'Bit', 'Eda', 82, 83, 'Eda', 'Bit', 86, 'Eda', 88, 89, 'EdaBit'])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: What`s the Data Type?

//tags: language_fundamentals,validation

//url: https://edabit.com/challenge/muSMtsoSbygZ7J5Xw

//Description:
//Create a function that returns the data type of a given variable. These are the eight data types this challenge will be testing for:
//Array
//Object
//String
//Number
//Boolean
//Null
//Undefined
//Date
//Examples
//dataType([1, 2, 3, 4]) ➞ "array"
//
//dataType({key: "value"}) ➞ "object"
//
//dataType("This is an example string.") ➞ "string"
//
//dataType(new Date()) ➞ "date"
//Notes
//Return the name of the data type as a lowercase string.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(dataType([1, 2, 3, 4, 5]), "array")
//Test.assertEquals(dataType({key: "value"}), "object")
//Test.assertEquals(dataType("This is an example string..."), "string")
//Test.assertEquals(dataType(2017), "number")
//Test.assertEquals(dataType(true), "boolean")
//Test.assertEquals(dataType(null), "null")
//Test.assertEquals(dataType(undefined), "undefined")
//Test.assertEquals(dataType(new Date()), "date")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Identical Subarrays

//tags: arrays,conditions,loops

//url: https://edabit.com/challenge/TWwNf9xxyvWGjEn3n

//Description:
//Create a function that takes in a two-dimensional array and returns the number of sub-arrays with only identical elements.
//Examples
//countIdentical([
//  [1],
//  [2],
//  [3],
//  [4]
//]) ➞ 4
//
//// Single-item arrays still count as having identical elements.
//
//
//countIdentical([
//  [1, 2],
//  [2, 3],
//  [3, 4],
//  [4, 4]
//]) ➞ 1
//
//
//countIdentical([
//  [33, 33],
//  [5],
//  ["a", "a"],
//  [2, 2, 2],
//  [1, 2, 2],
//  [3, 1]
//]) ➞ 4
//
//// 4 arrays with identical elements: [33, 33], [5], ["a", "a"], and [2, 2, 2]
//
//
//countIdentical([
//  ["@", "@", "@", "@"],
//  [2, 3], [3, 4], [4, 4]
//]) ➞ 2
//Notes
//Single-element arrays count as (trivially) having identical elements.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(countIdentical([[33, 33], [5], ['a', 'a'], [2, 2, 2], [1, 2, 2], [3, 1]]), 4)
//Test.assertSimilar(countIdentical([[1], [2], [3], [4]]), 4)
//Test.assertSimilar(countIdentical([[1, 2], [2, 3], [3, 4], [4, 4]]), 1)
//Test.assertSimilar(countIdentical([['@', '@', '@', '@'], [2, 3], [3, 4], [4, 4]]), 2)

