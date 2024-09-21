

//title: Range of Rolled Dice

//tags: games,strings

//url: https://edabit.com/challenge/92am52aiwdKRAJjtL

//Description:
//You are playing a game of JavaScript & Jackalopes with your friends, and need to roll dice as part of the game. None of you actually own dice, but you do have a computer handy!
//You'll be given a string representing the number of dice to roll, how many faces each die has, and a "modifier" to apply to the final result after adding up all the dice. For example, rolling a single six-sided die with no modifier might be represented by the string "1d6" — one die with six sides and values ranging from 1 through 6. If you wanted to add 2 to the result of rolling the same die, you might represent that as "1d6+2".
//Create a function that takes a string representing a set of dice to be rolled as an argument, and returns an array of two numbers representing the minimum and maximum possible values that could be achieved.
//Examples
//diceRange("1d6") ➞ [1, 6]
//// If a modifier is not given, assume that nothing will be
//// added to/subtracted from the results.
//
//diceRange("1d6+2") ➞ [3, 8]
//
//diceRange("d6") ➞ [1, 6]
//// If a number of dice is not provided, assume only one is
//// being rolled.
//
//diceRange("d6-2") ➞ [-1, 4]
//// If a modifier is negative, the resulting values may be
//// negative as well.
//
//diceRange("2d6") ➞ [2, 12]
//
//diceRange("2d6-1") ➞ [1, 11]
//// The modifier should be added to/subtracted from the
//// final result after rolling all the dice and adding up their
//// results, not applied to each roll!
//
//diceRange("0d6+1") ➞ [1, 1]
//// If you roll no dice, the result will only be whatever the
//// modifier's value is with no randomness.
//Notes
//All inputs will be valid inputs for the function.
//The number of dice to roll in each test will be either a positive integer, zero, or omitted (with a default assumed value of 1).
//The number of sides of the dice to roll in each test will be a positive integer.
//The modifier in each test will be either an integer (positive, negative, or zero) or omitted (with a default assumed value of 0).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(diceRange("1d6"), [1, 6])
//Test.assertSimilar(diceRange("1d6+1"), [2, 7])
//Test.assertSimilar(diceRange("1d6-2"), [-1, 4])
//Test.assertSimilar(diceRange("2d6"), [2, 12])
//Test.assertSimilar(diceRange("2d6+38"), [40, 50])
//Test.assertSimilar(diceRange("2d6-22"), [-20, -10])
//Test.assertSimilar(diceRange("d6"), [1, 6])
//Test.assertSimilar(diceRange("0d6+3"), [3, 3])
//Test.assertSimilar(diceRange("0d6-4"), [-4, -4])
//Test.assertSimilar(diceRange("0d6"), [0, 0])
//Test.assertSimilar(diceRange("0d6+0"), [0, 0])
//Test.assertSimilar(diceRange("0d6-0"), [0, 0])
//Test.assertSimilar(diceRange("5d20+2"), [7, 102])
//Test.assertSimilar(diceRange("15d4-1"), [14, 59])
//Test.assertSimilar(diceRange("12d100+99"), [111, 1299])
//Test.assertSimilar(diceRange("24d8-100"), [-76, 92])
//Test.assertSimilar(diceRange("50d12"), [50, 600])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Generate N-Size Combinations from an Array

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/knZ2M5xC6XijT7M8w

//Description:
//Create a function that returns all combinations of size n from an array. Sort the array in ascending lexicographical order.
//Examples
//combo([1, 2, 3, 4], 1) ➞ [[1], [2], [3], [4]]
//
//combo([1, 2, 3, 4], 2) ➞ [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
//
//combo([1, 2, 3, 4], 5) ➞ []
//
//combo([1, 2, 3, 4], 0) ➞ [[]]
//Notes
//Lexicographical order: Compare the first element: [1, 2] will be before [2, 4]. If both share the same first element, compare the second element: [1, 2] is before [1, 3], etc.
//Return an empty array [] if n exceeds the length of the array.
//Return [[]] if n is 0 (see example #4). (Since there is only one combination of length 0: an empty array).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(combo([1, 2, 3, 4], 2), [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]])
//Test.assertSimilar(combo([1, 2, 3, 4], 3), [[1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]])
//Test.assertSimilar(combo([1, 2, 3, 4], 1), [[1], [2], [3], [4]])
//Test.assertSimilar(combo([1, 2, 3, 4], 5), [])
//Test.assertSimilar(combo([1, 2, 3, 4], 0), [[]])
//Test.assertSimilar(combo(['a', 'b', 'c'], 0), [[]])
//Test.assertSimilar(combo(['a', 'b', 'c'], 4), [])
//Test.assertSimilar(combo(['a', 'b', 'c'], 1), [['a'], ['b'], ['c']])
//Test.assertSimilar(combo(['a', 'b', 'c'], 2), [['a', 'b'], ['a', 'c'], ['b', 'c']])
//Test.assertSimilar(combo(['a', 'b', 'c'], 3), [['a', 'b', 'c']])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: English to Numbers

//tags: conditions,numbers,strings

//url: https://edabit.com/challenge/ygedmjLgJ9RmzQnjd

//Description:
//This is a companion to yanni's previous challenge.
//Given an English description of an integer in the range 0 to 999, devise a function that returns the integer in numeric form.
//Examples
//engToNums("four") ➞  4
//
//engToNums("forty") ➞ 40
//
//engToNums("six hundred") ➞ 600
//
//engToNums("one hundred fifteen") ➞ 115
//
//engToNums("seven hundred sixty seven") ➞ 767
//Notes
//No hyphens are used in test cases ("twenty three" not "twenty-three").
//The word "and" is not used: "one hundred three" not "one hundred and three".

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(engToNums("one"), 1)
//Test.assertEquals(engToNums("ninety"), 90)
//Test.assertEquals(engToNums("one hundred ten"), 110)
//Test.assertEquals(engToNums("sixty two"), 62)
//Test.assertEquals(engToNums("four hundred thirty"), 430)
//Test.assertEquals(engToNums("zero"), 0)
//Test.assertEquals(engToNums("four hundred fifty six"), 456)
//Test.assertEquals(engToNums("six hundred nine"), 609)
//Test.assertEquals(engToNums("seven hundred"), 700)
//Test.assertEquals(engToNums("thirty seven"), 37)
//Test.assertEquals(engToNums("nine hundred ninety nine"), 999)
//Test.assertEquals(engToNums("three hundred twelve"), 312)
//Test.assertEquals(engToNums("eighteen"), 18)
//Test.assertEquals(engToNums("five hundred eleven"), 511)

