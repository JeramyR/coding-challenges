

//title: Count Letters in a Word Search

//tags: arrays,higher_order_functions

//url: https://edabit.com/challenge/6QNPoEjY8DLGKPiqr

//Description:
//Create a function that counts the number of times a particular letter shows up in the word search.
//Examples
//letterCounter([
//  ["D", "E", "Y", "H", "A", "D"],
//  ["C", "B", "Z", "Y", "J", "K"],
//  ["D", "B", "C", "A", "M", "N"],
//  ["F", "G", "G", "R", "S", "R"],
//  ["V", "X", "H", "A", "S", "S"]
//], "D") ➞ 3
//
//// "D" shows up 3 times: twice in the first row, once in the third row.
//
//letterCounter([
//  ["D", "E", "Y", "H", "A", "D"],
//  ["C", "B", "Z", "Y", "J", "K"],
//  ["D", "B", "C", "A", "M", "N"],
//  ["F", "G", "G", "R", "S", "R"],
//  ["V", "X", "H", "A", "S", "S"]
//], "H") ➞ 2
//Notes
//You will always be given an array with five sub-arrays.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(letterCounter([
//  ['D', 'E', 'Y', 'H', 'A', 'D'],
//  ['C', 'B', 'Z', 'Y', 'J', 'K'],
//  ['D', 'B', 'C', 'A', 'M', 'N'],
//  ['F', 'G', 'G', 'R', 'S', 'R'],
//  ['V', 'X', 'H', 'A', 'S', 'S']
//], 'D'), 3)
//​
//Test.assertEquals(letterCounter([
//  ['D', 'E', 'Y', 'H', 'A', 'D'],
//  ['C', 'B', 'Z', 'Y', 'J', 'K'],
//  ['D', 'B', 'C', 'A', 'M', 'N'],
//  ['F', 'G', 'G', 'R', 'S', 'R'],
//  ['V', 'X', 'H', 'A', 'S', 'S']
//], 'H'), 2)
//​
//Test.assertEquals(letterCounter([
//  ['D', 'E', 'Y', 'H', 'A', 'D'],
//  ['C', 'B', 'Z', 'Y', 'J', 'K'],
//  ['D', 'B', 'C', 'A', 'M', 'N'],
//  ['F', 'G', 'G', 'R', 'S', 'R'],
//  ['V', 'X', 'H', 'A', 'S', 'S']
//], 'Z'), 1)
//​
//Test.assertEquals(letterCounter([

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Cycling Through Strings

//tags: loops,strings

//url: https://edabit.com/challenge/gfm9nQFzogSYTE24t

//Description:
//Given two strings, repeatedly cycle through all of the letters in the first string until it is the same length as the second string.
//Examples
//stringCycling("abc", "hello") ➞ "abcab"
//
//stringCycling("programming", "edabit") ➞ "progra"
//
//stringCycling("the world in me evolves in hers", "i love Tesh, so much so") ➞ "the world in me evolves"
//
//stringCycling("a thing of beauty is a joy forever", "indulge me surely") ➞ "a thing of beauty"
//
//stringCycling("to", "hide") ➞ "toto"
//
//stringCycling("such a feeling coming over me", "top of the world") ➞ "such a feeling c"
//Notes
//All tests will include valid strings.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [actualParam, expectedParam] = [
//  [
//    ["abc", "hello"],
//    ["programming", "edabit"],
//    ["ha", "good morning"],
//    [" ", "python"],
//    ["the quick brown fox jumps over the lazy dog", "abcde"],
//    ["the world in me evolves in hers", "i love Tesh, so much so"],
//    ["a thing of beauty is a joy forever", "indulge me surely"],
//    ["to", "hide"],
//    ["such a feeling coming over me", "top of the world"]
//  ], [
//    "abcab",
//    "progra",
//    "hahahahahaha",
//    "      ",
//    "the q",
//    "the world in me evolves",
//    "a thing of beauty",
//    "toto",
//    "such a feeling c"
//  ]
//]
//for (let i in actualParam) Test.assertEquals(stringCycling(...actualParam[i]), expectedParam[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Apples and Bananas

//tags: language_fundamentals,strings

//url: https://edabit.com/challenge/bhanrxz6EKfWR7ApR

//Description:
//Write a function, .vreplace() that extends the String prototype by replacing all vowels in a string with a specified vowel.
//Examples
//"apples and bananas".vreplace("u") ➞ "upplus und bununus"
//
//"cheese casserole".vreplace("o") ➞ "chooso cossorolo"
//
//"stuffed jalapeno poppers".vreplace("e") ➞ "steffed jelepene peppers"
//Notes
//All words will be lowercase.
//"Y" is not considered a vowel.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals("apples and bananas".vreplace("u"), "upplus und bununus")
//Test.assertEquals("cheese casserole".vreplace("o"), "chooso cossorolo")
//Test.assertEquals("stuffed jalapeno poppers".vreplace("e"), "steffed jelepene peppers")
//Test.assertEquals("shrimp tempura".vreplace("a"), "shramp tampara")
//Test.assertEquals("tuna sashimi".vreplace("i"), "tini sishimi")
//Test.assertEquals("chocolate cake".vreplace("a"), "chacalata caka")

