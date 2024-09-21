

//title: Date Format

//tags: arrays,dates,formatting

//url: https://edabit.com/challenge/NEPFa3NZSd8iiF3ps

//Description:
//Create a function that converts a date formatted as MM/DD/YYYY to YYYYDDMM.
//Examples
//formatDate("11/12/2019") ➞ "20191211"
//
//formatDate("12/31/2019") ➞ "20193112"
//
//formatDate("01/15/2019") ➞ "20191501"
//Notes
//Return value should be a string.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(formatDate("11/12/2019"),"20191211")
//Test.assertEquals(formatDate("12/31/2019"), "20193112")
//Test.assertEquals(formatDate("01/15/2019"), "20191501")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Repeat the Same Item Multiple Times

//tags: arrays,loops

//url: https://edabit.com/challenge/BEHiM4RTmhcLX7Cq6

//Description:
//Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.
//Examples
//repeat("edabit", 3) ➞ ["edabit", "edabit", "edabit"]
//
//repeat(13, 5) ➞ [13, 13, 13, 13, 13]
//
//repeat("7", 2) ➞ ["7", "7"]
//
//repeat(0, 0) ➞ []
//Notes
//item can be either a string or a number.
//times will always be a number.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(repeat("edabit", 3), ["edabit", "edabit", "edabit"]);
//Test.assertSimilar(repeat(13, 5), [13, 13, 13, 13, 13]);
//Test.assertSimilar(repeat("7", 2),  ["7", "7"]);
//Test.assertSimilar(repeat("2 0 1 8", 1), ["2 0 1 8"]);
//Test.assertSimilar(repeat("tom dick and harry", 6), ["tom dick and harry", "tom dick and harry", "tom dick and harry", "tom dick and harry", "tom dick and harry", "tom dick and harry"]);
//Test.assertSimilar(repeat(0, 1), [0]);
//Test.assertSimilar(repeat(0, 0), []);
//Test.assertSimilar(repeat("z", 0), []);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Is the Object Empty?

//tags: language_fundamentals,objects,validation

//url: https://edabit.com/challenge/nGybgqB9agSqvBszF

//Description:
//Write a function that returns true if an object is empty, and false otherwise.
//Examples
//isEmpty({}) ➞ true
//
//isEmpty({ a: 1 }) ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isEmpty({}), true)
//Test.assertEquals(isEmpty({a: 1}), false)
//Test.assertEquals(isEmpty({z: 2, w: 4, y: 5}), false)

