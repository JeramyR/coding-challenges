

//title: A Simple Check

//tags: algorithms,interview,language_fundamentals,numbers

//url: https://edabit.com/challenge/JJFgC5bXCfSe9pF2W

//Description:
//Mubashir needs your help in a simple task. Create a function which takes two positive integers a and b. These numbers are simultaneously decreased by 1 until the smaller one reaches 0.
//During this process, the greater number can be divisible by the smaller one. Your task is to count how many times it will happen.
//Example 1
//a = 3, b = 5  // 5 is not divisible by 3
//a = 2, b = 4  // decreased by 1, 4 is divisible by 2
//a = 1, b = 3  // decreased by 1, 3 is divisible by 1
//a = 0, b = 2  // decreased by 1, the smaller number is 0, End
//
//The result should be 2
//Example 2
//a = 8, b = 4  // 8 is divisible by 4
//a = 7, b = 3  // decreased by 1, 7 is not divisible by 3
//a = 6, b = 2  // decreased by 1, 6 is divisible by 2
//a = 5, b = 1  // decreased by 1, 5 is divisible by 1
//a = 4, b = 0  // decreased by 1, the smaller number is 0, End
//
//The result should be 3
//Examples
//simpleCheck(3, 5) ➞ 2
//
//simpleCheck(8, 4) ➞ 3
//
//simpleCheck(54, 17) ➞ 1
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(simpleCheck(3, 5), 2, "For numbers 3 and 5 the result should be 2")
//Test.assertEquals(simpleCheck(10, 1), 1, "For numbers 10 and 1 the result should be 1")
//Test.assertEquals(simpleCheck(7, 7), 7, "For numbers 7 and 7 the result should be 7")
//Test.assertEquals(simpleCheck(16, 32), 5, "For numbers 16 and 32 the result should be 5")
//Test.assertEquals(simpleCheck(42, 21), 4, "For numbers 42 and 21 the result should be 4")
//Test.assertEquals(simpleCheck(54, 17), 1, "For numbers 54 and 17 the result should be 1")
//Test.assertEquals(simpleCheck(150080, 150032), 10, "For numbers 150080 and 150032 the result should be 10")
////Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Delete Occurrences of Extra Elements in an Array

//tags: arrays,data_structures

//url: https://edabit.com/challenge/sRuLYeBet7XE2wpRL

//Description:
//Create a function that takes two arguments: an array arr and a number num. If an element occurs in arr more than num times, remove the extra occurrence(s) and return the result.
//Examples
//deleteOccurrences([1, 1, 1, 1], 2) ➞ [1, 1]
//
//deleteOccurrences([13, true, 13, null], 1) ➞ [13, true, null]
//
//deleteOccurrences([true, true, true], 3) ➞ [true, true, true]
//Notes
//Do not alter the order of the original array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(deleteOccurrences([1, 1, 1, 1], 2), [1, 1]);
//Test.assertSimilar(deleteOccurrences([true, true, true], 3), [true, true, true]);
//Test.assertSimilar(deleteOccurrences([13, true, 13, null], 1), [13, true, null]);
//Test.assertSimilar(deleteOccurrences([], 100), []);
//Test.assertSimilar(deleteOccurrences(["John", "John", "Marry", "Marry"], 1), ["John", "Marry"]);
//Test.assertSimilar(deleteOccurrences(["Marry", "John", null, "John", false, "John", 0, "John", "Marry", "Marry", "John"], 3), ["Marry", "John", null, "John", false, "John", 0, "Marry", "Marry"]);
//Test.assertSimilar(deleteOccurrences([20, 37, 20, 21], 1), [20, 37, 21]);
//Test.assertSimilar(deleteOccurrences([1, 1, 3, 3, 7, 2, 2, 2, 2], 3), [1, 1, 3, 3, 7, 2, 2, 2]);
//Test.assertSimilar(deleteOccurrences([1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 2, 4, 5, 3, 1],3), [1, 2, 3, 1, 1, 2, 2, 3, 3, 4, 5]);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Words to Sentence

//tags: algorithms,arrays,formatting,strings

//url: https://edabit.com/challenge/ddXhrbFi4ozxxgYdG

//Description:
//Create a function that turns an array of words into a comma separated list, where the last word is separated by the word "and".
//Examples
//wordsToSentence(["edabit"]) ➞ "edabit"
//
//wordsToSentence(["Hello", "", "Bye"]) ➞ "Hello and Bye"
//
//wordsToSentence(["Hello", "Bye", "See you soon"]) ➞ "Hello, Bye and See you soon"
//Notes
//null values, empty arrays or arrays with only empty or null values should return an empty string (e.g. "").

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(wordsToSentence(["one", "two", "three", "four"]), "one, two, three and four")
//Test.assertEquals(wordsToSentence(["one", "two", "", "four"]), "one, two and four")
//Test.assertEquals(wordsToSentence(["one"]), "one")
//Test.assertEquals(wordsToSentence(["one", "", "three"]), "one and three")
//Test.assertEquals(wordsToSentence(["one", "two", ""]), "one and two")
//Test.assertEquals(wordsToSentence([""]), "", "An array containing an empty string should return an empty string.")
//Test.assertEquals(wordsToSentence([]), "", "An empty array should return an empty string.")
//Test.assertEquals(wordsToSentence(null), "", "null should return an empty string.")

