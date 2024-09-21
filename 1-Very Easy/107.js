

//title: Multiply by Length

//tags: algorithms,arrays,loops,math

//url: https://edabit.com/challenge/LMhRTq3hccz2D9Lax

//Description:
//Create a function to multiply all of the values in an array by the amount of values in the given array.
//Examples
//multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
//
//multiplyByLength([4, 1, 1]) ➞ ([12, 3, 3])
//
//multiplyByLength([1, 0, 3, 3, 7, 2, 1]) ➞  [7, 0, 21, 21, 49, 14, 7]
//
//multiplyByLength([0]) ➞ ([0])
//Notes
//All of the values given are numbers.
//All arrays will have at least one element.
//Don't forget to return the result.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(multiplyByLength([2, 6, 4, 9]), [8, 24, 16, 36])
//Test.assertSimilar(multiplyByLength([4, 1, 1]), [12, 3, 3])
//Test.assertSimilar(multiplyByLength([1, 0, 3, 3, 7, 2, 1]), [7, 0, 21, 21, 49, 14, 7])
//Test.assertSimilar(multiplyByLength([0]), [0])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Both Zero, Negative or Positive

//tags: conditions,math,numbers,validation

//url: https://edabit.com/challenge/447bDYjW8ZBTtFG5M

//Description:
//Write a function that returns true if both numbers are:
//Smaller than 0, OR ...
//Greater than 0, OR ...
//Exactly 0
//Otherwise, return false.
//Examples
//both(6, 2) ➞ true
//
//both(0, 0) ➞ true
//
//both(-1, 2) ➞ false
//
//both(0, 2) ➞ false
//Notes
//Inputs will always be two numbers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//[
//  [6, 2, true],
//  [-6, -9, true],
//  [6, -2, false],
//  [0, 0, true],
//  [100, 1, true],
//  [-0, 0, true],
//  [-80, -5000, true],
//  [6.28, -999, false],
//  [-1, 2, false],
//  [0, 2, false]
//].forEach(x => Test.assertEquals(both(x[0], x[1]), x[2]))

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Remove Null from an Array

//tags: arrays,formatting,language_fundamentals

//url: https://edabit.com/challenge/2SJX9ha6W2bYkzSNX

//Description:
//Create a function to remove all null values from an array.
//Examples
//removeNull(["a", null, "b", null]) ➞ ["a", "b"]
//
//removeNull([null, null, null, null, null]) ➞ []
//
//removeNull([7, 8, null, 9]) ➞ [7, 8, 9]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(removeNull(['a', null, 'b', null]), ['a', 'b'])
//Test.assertSimilar(removeNull([null, null, null, null, null]), [])
//Test.assertSimilar(removeNull([7, 8, null, 9]), [7, 8, 9])
//Test.assertSimilar(removeNull([7, null, 8, null, 9]), [7, 8, 9])

