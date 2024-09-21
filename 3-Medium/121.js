

//title: Secret Function 4.0

//tags: arrays,strings

//url: https://edabit.com/challenge/orssXtmaHSBw57HAH

//Description:
//Create a function based on the input and output. Look at the examples, there is a pattern.
//Examples
//secret("p.one.two.three") ➞ `<p class="one two three"></p>`
//
//secret("p.one") ➞ `<p class="one"></p>`
//
//secret("p.four.five") ➞ `<p class="four five"></p>`
//Notes
//Input is a string.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(secret("p.one.two.three"), `<p class="one two three"></p>`)
//Test.assertEquals(secret("p.one"), `<p class="one"></p>`)
//Test.assertEquals(secret("h3.one"), `<h3 class="one"></h3>`)
//Test.assertEquals(secret("p.four.five"), `<p class="four five"></p>`)
//Test.assertEquals(secret("h1.four.five"), `<h1 class="four five"></h1>`)
//Test.assertEquals(secret("p.a.b.c.d"), `<p class="a b c d"></p>`)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: All Occurrences of an Element in an Array

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/rLf6ApKPLy3fP37XH

//Description:
//Create a function that returns the indices of all occurrences of an item in the array.
//Examples
//getIndices(["a", "a", "b", "a", "b", "a"], "a") ➞ [0, 1, 3, 5]
//
//getIndices([1, 5, 5, 2, 7], 7) ➞ [4]
//
//getIndices([1, 5, 5, 2, 7], 5) ➞ [1, 2]
//
//getIndices([1, 5, 5, 2, 7], 8) ➞ []
//Notes
//If an element does not exist in an array, return [].
//Arrays are zero-indexed.
//Values in the array will be value-types (don't need to worry about nested arrays).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(getIndices(['a', 'a', 'b', 'a', 'b', 'a'], 'a'), [0, 1, 3, 5])
//Test.assertSimilar(getIndices([1, 5, 5, 2, 7], 7), [4])
//Test.assertSimilar(getIndices([1, 5, 5, 2, 7], 5),[1, 2])
//Test.assertSimilar(getIndices([1, 5, 5, 2, 7], 8), [])
//Test.assertSimilar(getIndices([8, 8, 8, 8, 8], 8), [0, 1, 2, 3, 4])
//Test.assertSimilar(getIndices([8, 8, 7, 8, 8], 8), [0, 1, 3, 4])
//Test.assertSimilar(getIndices([true, false, true, false], true), [0, 2])
//Test.assertSimilar(getIndices([true, false, true, false], false), [1, 3])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Cumulative Array Sum

//tags: arrays,loops,math,numbers

//url: https://edabit.com/challenge/77eH2ZqXqEjifotZM

//Description:
//Create a function that takes an array of numbers and returns an array where each number is the sum of itself + all previous numbers in the array.
//Examples
//cumulativeSum([1, 2, 3]) ➞ [1, 3, 6]
//
//cumulativeSum([1, -2, 3]) ➞ [1, -1, 2]
//
//cumulativeSum([3, 3, -2, 408, 3, 3]) ➞ [3, 6, 4, 412, 415, 418]
//Notes
//Return an empty array if the input is an empty array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(cumulativeSum([]), [], 'Should return an empty array if given an empty array.')
//Test.assertSimilar(cumulativeSum([1]), [1], 'Should work with 1 value.')
//Test.assertSimilar(cumulativeSum([1, 2, 3]), [1, 3, 6], 'Should work with multiple values.')
//Test.assertSimilar(cumulativeSum([-1, -2, -3]), [-1, -3, -6], 'Should work with multiple negative values.')
//Test.assertSimilar(cumulativeSum([1, -2, 3]), [1, -1, 2], 'Should work with multiple positive and negative values.')
//Test.assertSimilar(cumulativeSum([3, 3, -2, 408, 3, 3, 0, 66, 2, -2, 2, 3, 4, 2, -47, 3, 3, 2]), [3, 6, 4, 412, 415, 418, 418, 484, 486, 484, 486, 489, 493, 495, 448, 451, 454, 456], 'Should work with long array.')

