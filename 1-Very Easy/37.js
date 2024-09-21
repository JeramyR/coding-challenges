

//title: Array of Strings to Array of Numbers

//tags: arrays,language_fundamentals,strings

//url: https://edabit.com/challenge/rTDLyF5itdoubs9ka

//Description:
//Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.
//Example:
//["1", "3", "3.6"] ➞ [1, 3, 3.6]
//Examples
//toNumberArray(["9.4", "4.2"]) ➞ [9.4, 4.2]
//
//toNumberArray(["91", "44"]) ➞ [91, 44]
//
//toNumberArray(["9.5", "8.8"]) ➞ [9.5, 8.8]
//Notes
//Some inputs are floats.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(toNumberArray(["1", "2"]), [1, 2])
//Test.assertSimilar(toNumberArray(["3", "4"]), [3, 4])
//Test.assertSimilar(toNumberArray(["5", "6"]), [5, 6])
//Test.assertSimilar(toNumberArray(["7", "8"]), [7, 8])
//Test.assertSimilar(toNumberArray(["9", "10"]), [9, 10])
//Test.assertSimilar(toNumberArray(["91", "44"]), [91, 44])
//Test.assertSimilar(toNumberArray(["19", "14"]), [19, 14])
//Test.assertSimilar(toNumberArray(["29", "34"]), [29, 34])
//Test.assertSimilar(toNumberArray(["0", "4"]), [0, 4])
//Test.assertSimilar(toNumberArray(["21", "23"]), [21, 23])
//Test.assertSimilar(toNumberArray(["12", "25"]), [12, 25])
//Test.assertSimilar(toNumberArray(["99", "20"]), [99, 20])
//Test.assertSimilar(toNumberArray(["9", "4", "5", "6", "7", "8", "9"]), [9, 4, 5, 6, 7, 8, 9])
//Test.assertSimilar(toNumberArray(["11", "14", "13", "12", "3", "6"]), [11, 14, 13, 12, 3, 6])
//Test.assertSimilar(toNumberArray(["7", "14", "16", "18", "19", "20"]), [7, 14, 16, 18, 19, 20])
//Test.assertSimilar(toNumberArray(["9.4", "4.2"]), [9.4, 4.2])
//Test.assertSimilar(toNumberArray(["1.4", "4.4", "5.7", "4.3", "9.8", "5.3", "8.7", "8.6", "9.8"]), [1.4, 4.4, 5.7, 4.3, 9.8, 5.3, 8.7, 8.6, 9.8])
//Test.assertSimilar(toNumberArray(["9.5", "8.8"]), [9.5, 8.8])
//Test.assertSimilar(toNumberArray(["3.4", "8.6"]), [3.4, 8.6])
//Test.assertSimilar(toNumberArray(["5.9", "1.5", "7.8", "4.9", "8.5", "8.4"]), [5.9, 1.5, 7.8, 4.9, 8.5, 8.4])
//Test.assertSimilar(toNumberArray(["8.7"]), [8.7])
//Test.assertSimilar(toNumberArray(["7.0", "4.7", "8.4"]), [7, 4.7, 8.4])
//Test.assertSimilar(toNumberArray(["7.2", "9.7", "4.0", "9.7", "6.5"]), [7.2, 9.7, 4, 9.7, 6.5])
//Test.assertSimilar(toNumberArray(["9.3", "3.9", "7.9", "4.7"]), [9.3, 3.9, 7.9, 4.7])
//Test.assertSimilar(toNumberArray(["4.1", "2.9", "1.7"]), [4.1, 2.9, 1.7])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Luke, I Am Your ...

//tags: conditions,formatting,objects,strings

//url: https://edabit.com/challenge/Ac8GiJBAzEJYmcqyF

//Description:
//Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.
//Person	Relation
//Darth Vader	father
//Leia	sister
//Han	brother in law
//R2D2	droid
//Examples
//relationToLuke("Darth Vader") ➞ "Luke, I am your father."
//
//relationToLuke("Leia") ➞ "Luke, I am your sister."
//
//relationToLuke("Han") ➞ "Luke, I am your brother in law."
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(relationToLuke("Darth Vader"), "Luke, I am your father.")
//Test.assertEquals(relationToLuke("Leia"), "Luke, I am your sister.")
//Test.assertEquals(relationToLuke("Han"), "Luke, I am your brother in law.")
//Test.assertEquals(relationToLuke("R2D2"), "Luke, I am your droid.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Convert All Array Items to String

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/TihiK4mBiYsdGuR5H

//Description:
//Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.
//Examples
//parseArray([1, 2, "a", "b"]) ➞ ["1", "2", "a", "b"]
//
//parseArray(["abc", 123, "def", 456]) ➞ ["abc", "123", "def", "456"]
//
//parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]) ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]
//
//parseArray([]) ➞ []
//Notes
//Return [] if array is empty.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(parseArray([1, 2, "a", "b"]), ['1', '2', "a", "b"])
//Test.assertSimilar(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]), ['1', '2', '3', '17', '24', '3', 'a', '123b'])
//Test.assertSimilar(parseArray(["abc", 123, "def", 456]), ['abc', '123', 'def', '456'])
//Test.assertSimilar(parseArray([]), [])

