

//title: Shortest Subarray Whose Sum Exceeds N

//tags: arrays,loops

//url: https://edabit.com/challenge/kfFvrue8r45zZahXW

//Description:
//Write a function that returns the length of the shortest contiguous subarray whose sum of all elements strictly exceeds n.
//Examples
//minLength([5, 8, 2, -1, 3, 4], 9) ➞ 2
//
//minLength([3, -1, 4, -2, -7, 2], 4) ➞ 3
//// Shortest subarray whose sum exceeds 4 is: [3, -1, 4]
//
//minLength([1, 0, 0, 0, 1], 1) ➞ 5
//
//minLength([0, 1, 1, 0], 2) ➞ -1
//Notes
//The subarray should be composed of contiguous elements from the original array.
//If no such subarray exists, return -1.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(minLength([5, 10, 2, -1, 3, 4], 9), 1)
//Test.assertEquals(minLength([3, -1, 4, -2, -7, 2], 4), 3)
//Test.assertEquals(minLength([-5, 3, 2, 7, 8, 9, -1, 5], 16), 2)
//Test.assertEquals(minLength([1, 0, -1, 1, 1], 1), 2)
//Test.assertEquals(minLength([1, 0, 1, 1, -1, 0, 1], 2), 4)
//Test.assertEquals(minLength([1, 0, 0, 0, 1], 1), 5)
//Test.assertEquals(minLength([1, 0, 1, 0, 1], 1), 3)
//Test.assertEquals(minLength([-1, 1, 1, 0, 1, 1], 3), 5)
//Test.assertEquals(minLength([3, -1, 4, 3, 0, 1, 2], 7), 4)
//Test.assertEquals(minLength([0, 1, 1, 0], 2), -1)
//Test.assertEquals(minLength([0, 1, 5, 2, 0], 10), -1)
//Test.assertEquals(minLength([3, -1, 4, -2, -7, 2], 6), -1)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Time Elapsed

//tags: algebra,strings

//url: https://edabit.com/challenge/y55uFmf4xCdivNBaT

//Description:
//Create a function that takes two timestamps as input, and returns a string describing the time elapsed between them (in days, hours, minutes, seconds as appropriate).
//Examples
//elapsed(1559813526, 1559899926) ➞ "1 day"
//
//elapsed(1559681004, 1559899926) ➞ "2 days, 12 hours, 48 minutes, 42 seconds"
//
//elapsed(1558773066, 1559899926) ➞ "13 days, 1 hour, 1 minute"
//Notes
//Timestamps are seconds elapsed since 1st January 1970.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(elapsed(1559813526, 1559899926), "1 day")
//Test.assertEquals(elapsed(1559681004, 1559899926), "2 days, 12 hours, 48 minutes, 42 seconds")
//Test.assertEquals(elapsed(1557641659, 1559899926), "26 days, 3 hours, 17 minutes, 47 seconds")
//Test.assertEquals(elapsed(1557652446, 1559899926), "26 days, 18 minutes")
//Test.assertEquals(elapsed(1558773066, 1559899926), "13 days, 1 hour, 1 minute")
//Test.assertEquals(elapsed(1552513985, 1559899926), "85 days, 11 hours, 39 minutes, 1 second")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Pyramidal Strings

//tags: formatting,math,strings

//url: https://edabit.com/challenge/4BKEcK9Y4WW6o64Mt

//Description:
//In this challenge, you have to obtain a pyramidal version of a given string, transforming the string into an array containing a series of string slices that progressively increase or decrease steadily from the left to the right. Every slice containing two or more characters must have a space between every pair of characters, to permit a hypothetical vertical alignment. See the example below:
//// REGULAR pyramidal version of "EDABIT"
//
//[ "E",
// "D A",
//"B I T" ]
//Depending on the given type, you have to obtain a regular pyramid starting from its vertex (type === "REG") as in the example above, or a reversed pyramid starting from its base (type === "REV") as in the example below:
//// REVERSED pyramidal version of "EDABIT"
//
//["E D A",
//  "B I",
//   "T"  ]
//Every pyramid must follow the same steadily increment/decrement of its slices (or rows) by exactly one character (excluding spaces), so that not every string can be transformed in a pyramid! See the example below:
//// Regular pyramidal version of "PYRAMID"
//
//[ "P",
// "Y R",
//"A M I" ]
//
//// Letter "D" can't be placed in the pyramid
//Given as parameters a string and a type, implement a function that returns:
//A string "Error!" if the pyramidal version can't be obtained from the given string.
//An array containing the regular pyramidal version of the string if the given type is equal to "REG".
//An array containing the reversed pyramidal version of the string if the given type is equal to "REV".
//Examples
//pyramidalString("EDABIT", "REG") ➞ ["E", "D A", "B I T"]
//
//pyramidalString("EDABIT", "REV") ➞ ["E D A", "B I", "T"]
//
//pyramidalString("PYRAMID", "REG") ➞ "Error!"
//
//pyramidalString("!", "REV") ➞ ["!"]
//
//pyramidalString("", "REG") ➞ []
//Notes
//If the given string has just one character, the returned array will contain that single character. If the given string is empty, the returned array will be empty.
//Remember to insert a space between every character inside the rows containing two or more characters.
//The increment and the decrement of the rows in a pyramidal string are equal to one character more or less than the previous, depending on the given type.
//You have to find a discriminant rule to establish if a string can be transformed into a pyramid, without creating single exceptions for every given case. What is suggesting to you the shape of a pyramid seen frontally?

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// Regular pyramids
//Test.assertSimilar(pyramidalString("", "REG"), [])
//Test.assertSimilar(pyramidalString("ZAPHODBEEBLEBROX", "REG"), "Error!")
//Test.assertSimilar(pyramidalString("THEHITCHIKERGUIDETOTHEGALAXY", "REG"), ["T", "H E", "H I T", "C H I K", "E R G U I", "D E T O T H", "E G A L A X Y"])
//Test.assertSimilar(pyramidalString("HOTBLACKDESIATO", "REG"), ["H", "O T", "B L A", "C K D E", "S I A T O"])
//Test.assertSimilar(pyramidalString("TRILLIAN", "REG"), "Error!")
//Test.assertSimilar(pyramidalString("APERFECTLYNORMALBEAST", "REG"), ["A", "P E", "R F E", "C T L Y", "N O R M A", "L B E A S T"])
//Test.assertSimilar(pyramidalString("RESTAURANTATTHEENDOFTHEUNIVERSE", "REG"), "Error!")
//​
//// Reversed pyramids
//Test.assertSimilar(pyramidalString("?", "REV"), [ "?" ])
//Test.assertSimilar(pyramidalString("ARTHURDENT", "REV"), ["A R T H", "U R D", "E N", "T"])
//Test.assertSimilar(pyramidalString("DONTPANIC", "REV"), "Error!")
//Test.assertSimilar(pyramidalString("MARVIN", "REV"), ["M A R", "V I", "N"])
//Test.assertSimilar(pyramidalString("42", "REV"), "Error!")
//Test.assertSimilar(pyramidalString("LIFETHEUNIVERSEANDEVERYTHING", "REV"), ["L I F E T H E", "U N I V E R", "S E A N D", "E V E R", "Y T H", "I N", "G"])
//Test.assertSimilar(pyramidalString("FORDPREFECT", "REV"), "Error!")

