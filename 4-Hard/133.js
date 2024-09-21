

//title: Hall Monitor 2

//tags: algorithms,interview,objects,validation

//url: https://edabit.com/challenge/yPa5YwAoqfdJuWK4C

//Description:
//A floor plan is arranged as follows:
//You may freely move between rooms 1 and 2.
//You may freely move between rooms 3 and 4.
//However, you can enter the hallway to move between rooms 2 and 4.
//
//Create a function that validates whether the route taken between rooms is possible. The hallway will be given as the letter "H".
//Examples
//possiblePath([1, 2, "H", 4, 3]) ➞ true
//
//possiblePath(["H", 1, 2]) ➞ false
//
//possiblePath([4, 3, 4, "H", 4, "H"]) ➞ true
//Notes
//A route may begin or end in any room (including the hallway).
//All inputs are either numbers 1-4 or the letter "H".
//No rooms will repeat.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(possiblePath([1, 2, "H", 4, 3]), true)
//Test.assertEquals(possiblePath(["H", 1, 2]), false)
//Test.assertEquals(possiblePath([4, 3, 4, "H", 4, "H"]), true)
//Test.assertEquals(possiblePath(["H"]), true)
//Test.assertEquals(possiblePath([1]), true)
//Test.assertEquals(possiblePath([1, 2, 1]), true)
//Test.assertEquals(possiblePath(["H", 2, 1, "H", 2]), false)
//Test.assertEquals(possiblePath([3, "H", 2, 1]), false)
//Test.assertEquals(possiblePath(["H", 2, 3, "H"]), false)
//Test.assertEquals(possiblePath([1, 3, 4]), false)
//​
//// Author: Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Generate Floats

//tags: loops,math,numbers

//url: https://edabit.com/challenge/g9z2gkXH5zurRPpSD

//Description:
//Python's range function can only generate a list of integers, your task is to generate a list of floats. Generate a list of values between 0 and an endpoint n spaced at i intervals.
//Examples
//genValues(2, 0.25) ➞ [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0]
//
//genValues(1, 0.1) ➞ [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
//
//genValues(20, 2) ➞ [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
//Notes
//The endpoint will always be a positive integer.
//This function should also work for generating integers (last example).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(genValues(10, 0.5), [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0])
//Test.assertSimilar(genValues(5, 0.25), [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 3.75, 4.0, 4.25, 4.5, 4.75, 5.0])
//Test.assertSimilar(genValues(9, 1.5), [0.0, 1.5, 3.0, 4.5, 6.0, 7.5, 9.0])
//Test.assertSimilar(genValues(1, 0.04), [0.0, 0.04, 0.08, 0.12, 0.16, 0.2, 0.24, 0.28, 0.32, 0.36, 0.4, 0.44, 0.48, 0.52, 0.56, 0.6, 0.64, 0.68, 0.72, 0.76, 0.8, 0.84, 0.88, 0.92, 0.96, 1.0])
//Test.assertSimilar(genValues(1, 0.09), [0.0, 0.09, 0.18, 0.27, 0.36, 0.45, 0.54, 0.63, 0.72, 0.81, 0.9, 0.99])
//Test.assertSimilar(genValues(4, 1.5), [0.0, 1.5, 3.0])
//Test.assertSimilar(genValues(20, 2), [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20])
//Test.assertSimilar(genValues(21, 2), [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find Repeating

//tags: loops,strings

//url: https://edabit.com/challenge/AtNMAGcwKDad5rC69

//Description:
//Create a function that accepts a string and groups repeated values. The groups should have the following structure: [[value, first_index, last_index, times_repeated], ..., [value, first_index, last_index, times_repeated]].
//value: Character being assessed.
//first_index: Index of characters first appearance.
//last_index: Index of characters last appearance.
//times_repeated: Number of consecutive times character repeats.
//Examples
//findRepeating("a") ➞ [["a", 0, 0, 1]]
//
//findRepeating("aabbb") ➞ [["a", 0, 1, 2], ["b", 2, 4, 3]]
//
//findRepeating("1337") ➞ [["1", 0, 0, 1], ["3", 1, 2, 2], ["7", 3, 3, 1]]
//
//findRepeating("aabbbaabbb") ➞ [["a", 0, 1, 2], ["b", 2, 4, 3], ["a", 5, 6, 2], ["b", 7, 9, 3]]
//Notes
//An empty string should return an empty array: "" ➞ []
//Non-repeated values should start and end on the same index.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(findRepeating(''), [])
//Test.assertSimilar(findRepeating('a'), [['a', 0, 0, 1]])
//Test.assertSimilar(findRepeating('1337'), [['1', 0, 0, 1], ['3', 1, 2, 2], ['7', 3, 3, 1]])
//Test.assertSimilar(findRepeating('aabbb'), [['a', 0, 1, 2], ['b', 2, 4, 3]])
//Test.assertSimilar(findRepeating('addressee'), [['a', 0, 0, 1], ['d', 1, 2, 2], ['r', 3, 3, 1], ['e', 4, 4, 1], ['s', 5, 6, 2], ['e', 7, 8, 2]])
//Test.assertSimilar(findRepeating('aabbbaabbb'), [['a', 0, 1, 2], ['b', 2, 4, 3], ['a', 5, 6, 2], ['b', 7, 9, 3]])
//Test.assertSimilar(findRepeating('1111222233334444'), [['1', 0, 3, 4], ['2', 4, 7, 4], ['3', 8, 11, 4], ['4', 12, 15, 4]])
//Test.assertSimilar(findRepeating('1000000000000066600000000000001'), [['1', 0, 0, 1], ['0', 1, 13, 13], ['6', 14, 16, 3], ['0', 17, 29, 13], ['1', 30, 30, 1]])
//​

