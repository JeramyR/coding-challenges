

//title: Changing a String into camelCase

//tags: formatting,strings

//url: https://edabit.com/challenge/bZJLPjJL4BuyeeB6j

//Description:
//Using Camel Case (or camelCase) is where the first word is in lower case, and all words after it have their first letter capitalised. Note that there are no spaces in between words!
//Create a function that takes a string and returns it back in camelCase.
//Examples
//camelCasing("Hello World") ➞ "helloWorld"
//
//camelCasing("snake_case") ➞ "snakeCase"
//
//camelCasing("low high_HIGH") ➞ "lowHighHigh"
//Notes
//You need to remove all spaces and underscores.
//There will be no numbers in inputs.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(camelCasing("Hello World"), "helloWorld")
//Test.assertEquals(camelCasing("snake_case"), "snakeCase")
//Test.assertEquals(camelCasing("low high_HIGH"), "lowHighHigh")
//Test.assertEquals(camelCasing("unEcEsSARilY_loNG_vArIablE_NaME"), "unecessarilyLongVariableName")
//Test.assertEquals(camelCasing("camel casing"), "camelCasing")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Burglary Series (16): Nested objects

//tags: arrays,loops,objects

//url: https://edabit.com/challenge/SvodRRbyv7g3LxZsK

//Description:
//And who cursed the most in the fight between you and your spouse?
//Given an object with three rounds, with nested objects as your scores per round, return a string of who cursed the most:
//If you, return "ME!"
//If your spouse, return "SPOUSE!"
//If a draw, return "DRAW!"
//Examples
//determineWhoCursedTheMost({
//  round1: {
//    me: 10,
//    spouse: 5,
//  },
//  round2: {
//    me: 5,
//    spouse: 10,
//  },
//  round3: {
//    me: 10,
//    spouse: 10,
//  },
//}) ➞ "DRAW!"
//
//
//determineWhoCursedTheMost({
//  round1: {
//    me: 40,
//    spouse: 5,
//  },
//  round2: {
//    me: 9,
//    spouse: 10,
//  },
//  round3: {
//    me: 9,
//    spouse: 10,
//  },
//}) ➞ "ME!"
//
//
//determineWhoCursedTheMost({
//  round1: {
//    me: 10,
//    spouse: 5,
//  },
//  round2: {
//    me: 9,
//    spouse: 44,
//  },
//  round3: {
//    me: 10,
//    spouse: 55,
//  },
//}) ➞ "SPOUSE!"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const random = Test.randomNumber()
//const obj = {
//  round1: {
//    me: 10,
//    spouse: 5,
//  },
//  round2: {
//    me: 5,
//    spouse: 10,
//  },
//  round3: {
//    me: 10,
//    spouse: 10,
//  },
//};
//const obj2 = {
//  round1: {
//    me: 10,
//    spouse: 5,
//  },
//  round2: {
//    me: random * 100,
//    spouse: 4,
//  },
//};

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Divide Array into Chunks

//tags: arrays,formatting,loops

//url: https://edabit.com/challenge/g8jGf8wrHtmwFfM8H

//Description:
//Write a function that divides an array into chunks of size n, where n is the length of each chunk.
//Examples
//chunkify([2, 3, 4, 5], 2) ➞ [[2, 3], [4, 5]]
//
//chunkify([2, 3, 4, 5, 6], 2) ➞ [[2, 3], [4, 5], [6]]
//
//chunkify([2, 3, 4, 5, 6, 7], 3) ➞ [[2, 3, 4], [5, 6, 7]]
//
//chunkify([2, 3, 4, 5, 6, 7], 1) ➞ [[2], [3], [4], [5], [6], [7]]
//
//chunkify([2, 3, 4, 5, 6, 7], 7) ➞ [[2, 3, 4, 5, 6, 7]]
//Notes
//It's O.K. if the last chunk is not completely filled (see example #2).
//Integers will always be single-digit.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(chunkify([2, 3, 4, 5], 2), [[2, 3], [4, 5]])
//Test.assertSimilar(chunkify([2, 3, 4, 5, 6], 2), [[2, 3], [4, 5], [6]])
//Test.assertSimilar(chunkify([2, 3, 4, 5, 6, 7], 3), [[2, 3, 4], [5, 6, 7]])
//Test.assertSimilar(chunkify([2, 3, 4, 5, 6, 7], 1), [[2], [3], [4], [5], [6], [7]] )
//Test.assertSimilar(chunkify([2, 3, 4, 5, 6, 7], 7), [[2, 3, 4, 5, 6, 7]] )
//Test.assertSimilar(chunkify([2, 3, 4, 5], 3), [[2, 3, 4], [5]])
//Test.assertSimilar(chunkify([2, 3, 4, 5, 6, 7, 8], 3), [[2, 3, 4], [5, 6, 7], [8]])

