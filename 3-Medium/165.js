

//title: Is the Sum of Letters Even or Odd?

//tags: sorting,strings,validation

//url: https://edabit.com/challenge/RMJwgK3MzAb5DQoFY

//Description:
//Create a function that takes a string and returns true if the sum of the position of every letter in the alphabet is even and false if the sum is odd.
//Examples
//isAlpha("i'am king")  ➞ true
//// 9 + 1 + 13 + 11 + 9 + 14 + 7 = 64 (even)
//
//isAlpha("True") ➞ true
//// 20 + 18 + 21 + 5= 64 (even)
//
//isAlpha("alexa") ➞ false
//// 1 + 12 + 5 + 24 + 1= 43 (odd)
//Notes
//Case insensitive.
//Ignore non-letter symbols.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isAlpha("i'am king"), true)
//Test.assertEquals(isAlpha("True"), true)
//Test.assertEquals(isAlpha("alexa"), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Unique Letters

//tags: interview,strings

//url: https://edabit.com/challenge/4fY7BRiPga8MEvYGQ

//Description:
//Create a function that takes a string and returns an array of the letters that occur only once.
//Examples
//findLetters("monopoly") ➞ ["m", "n", "p", "l", "y"]
//
//findLetters("balloon") ➞ ["b", "a", "n"]
//
//findLetters("analysis") ➞ ["n", "l", "y", "i"]
//Notes
//The final array should not include letters that appear more than once in the string.
//Return the letters in the sequence they were originally in, do not sort them.
//All letters will be in lowercase.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(findLetters("monopoly"), ["m", "n", "p", "l", "y"])
//Test.assertSimilar(findLetters("balloon"), ["b", "a", "n"])
//Test.assertSimilar(findLetters("analysis"),  ["n", "l", "y", "i"])
//Test.assertSimilar(findLetters("summer"), ["s", "u", "e", "r"])
//Test.assertSimilar(findLetters("apple"), ["a", "l", "e"])
//Test.assertSimilar(findLetters("commission"), ["c", "n"])
//Test.assertSimilar(findLetters("fox"), ["f", "o", "x"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Characters and ASCII Code

//tags: higher_order_functions,objects

//url: https://edabit.com/challenge/h87ArHxmQaaYGKD7m

//Description:
//Write a function that transforms an array of characters into an array of objects, where:
//The keys are the characters themselves.
//The values are the ASCII codes of those characters.
//Examples
//toObj(["a", "b", "c"]) ➞ [{a: 97}, {b: 98}, {c: 99}]
//
//toObj(["z"]) ➞ [{z: 122}]
//
//toObj([]) ➞ []
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(toObj(["a", "b", "c"]), [{a: 97}, {b: 98}, {c: 99}])
//Test.assertSimilar(toObj(["a", "p", "e"]), [{a: 97}, {p: 112}, {e: 101}])
//Test.assertSimilar(toObj(["z"]), [{z: 122}])
//Test.assertSimilar(toObj(["e","o","n"]), [{e: 101},{o:111},{n:110}])
//Test.assertSimilar(toObj([]), [])

