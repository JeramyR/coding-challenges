

//title: Truncate String at a Given Length

//tags: formatting,strings

//url: https://edabit.com/challenge/pYSX8duMGhQCM3mWZ

//Description:
//Create a function that takes a string (the string to truncate) and a number (the maximum length of the truncated string) as arguments and returns the truncated string at the given length.
//Examples
//truncate("Lorem ipsum dolor sit amet.", 11) ➞ "Lorem ipsum"
//
//truncate("Lorem ipsum dolor sit amet.", 16) ➞ "Lorem ipsum"
//
//truncate("Lorem ipsum dolor sit amet.", 17) ➞ "Lorem ipsum dolor"
//Notes
//To "truncate" means "to shorten by cutting off the top or end".
//If a word is truncated in the middle, discard it in the output (see 2nd example above).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// "Clean cut".
//Test.assertEquals(truncate("Lorem ipsum dolor sit amet.", 11), "Lorem ipsum")
//​
//// "Dirty cut", you have to discard the last word.
//Test.assertEquals(truncate("Lorem ipsum dolor sit amet.", 16), "Lorem ipsum", "You have to discard the last word.")
//​
//// If length is greater than the strings length.
//Test.assertEquals(truncate("Lorem ipsum", 20), "Lorem ipsum", "If length is greater than the strings length.")
//​
//// Some extra tests.
//Test.assertEquals(truncate("Lorem ipsum", 4), "")
//Test.assertEquals(truncate("Lorem ipsum", 0), "")
//Test.assertEquals(truncate("", 30), "")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Safecracker

//tags: arrays,language_fundamentals,math

//url: https://edabit.com/challenge/ggDcLksKsBd8xAiFd

//Description:
//Traditional safes use a three-wheel locking mechanism, with the safe combination entered using a dial on the door of the safe. The dial is marked with clockwise increments between 0 and 99. The three-number combination is entered by first dialling to the right (clockwise), then to the left (anti-clockwise), and then to the right (clockwise) again. Combination numbers are read from the top of the dial:
//
//Given the starting (top) position of the dial and the increments used for each turn of the dial, return an array containing the combination of the safe.
//Step-By-Step Example
//safecracker(0, [3, 10, 5]) ➞ [97, 7, 2]
//
//Starting dial position of 0 (same as the diagram above).
//
//First turn (rightward) of 3 increments:
//0 -> 99, 98, 97
//First number of combination = 97
//
//Second turn (leftward) of 10 increments:
//97 -> 98, 99, 0, 1, 2, 3, 4, 5, 6, 7
//Second number of combination = 7
//
//Third turn (rightward) of 5 increments:
//7 -> 6, 5, 4, 3, 2
//Third number of combination = 2
//
//The final combination is [97, 7, 2]
//Other Examples
//safecracker(96, [54, 48, 77]) ➞ [42, 90, 13]
//
//safecracker(43, [51, 38, 46]) ➞ [92, 30, 84]
//
//safecracker(4, [69, 88, 55]) ➞ [35, 23, 68]
//Notes
//Each of the three combination numbers will be different.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(safecracker(99, [87, 61, 91]), [12, 73, 82])
//Test.assertSimilar(safecracker(63, [22, 16, 35]), [41, 57, 22])
//Test.assertSimilar(safecracker(18, [10, 57, 96]), [8, 65, 69])
//Test.assertSimilar(safecracker(82, [91, 4, 91]), [91, 95, 4])
//Test.assertSimilar(safecracker(83, [37, 12, 7]), [46, 58, 51])
//Test.assertSimilar(safecracker(31, [44, 86, 23]), [87, 73, 50])
//Test.assertSimilar(safecracker(96, [47, 76, 89]), [49, 25, 36])
//Test.assertSimilar(safecracker(82, [41, 5, 66]), [41, 46, 80])
//Test.assertSimilar(safecracker(31, [59, 79, 99]), [72, 51, 52])
//Test.assertSimilar(safecracker(67, [71, 93, 93]), [96, 89, 96])
//Test.assertSimilar(safecracker(95, [14, 35, 34]), [81, 16, 82])
//Test.assertSimilar(safecracker(77, [73, 98, 55]), [4, 2, 47])
//Test.assertSimilar(safecracker(78, [86, 4, 40]), [92, 96, 56])
//Test.assertSimilar(safecracker(0, [21, 94, 92]), [79, 73, 81])
//Test.assertSimilar(safecracker(45, [63, 96, 30]), [82, 78, 48])
//Test.assertSimilar(safecracker(98, [25, 93, 94]), [73, 66, 72])
//Test.assertSimilar(safecracker(27, [64, 25, 63]), [63, 88, 25])
//Test.assertSimilar(safecracker(52, [6, 81, 49]), [46, 27, 78])
//Test.assertSimilar(safecracker(56, [70, 88, 70]), [86, 74, 4])
//Test.assertSimilar(safecracker(85, [25, 24, 73]), [60, 84, 11])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Minimum Removals to Make Two Strings Anagrams

//tags: data_structures,strings

//url: https://edabit.com/challenge/MAAWsTiLs6s4xbLLW

//Description:
//Create a function that returns the smallest number of letter removals so that two strings are anagrams of each other.
//Examples
//minRemovals("abcde", "cab") ➞ 2
//// Remove "d", "e" to make "abc" and "cab".
//
//minRemovals("deafk", "kfeap") ➞ 2
//// Remove "d" and "p" from the first and second word, respectively.
//
//minRemovals("acb", "ghi") ➞ 6
//// Remove all letters from both words to get "" and "".
//Notes
//An anagram is any string that can be formed by shuffling the characters of the original string. For example: baedc is an anagram of abcde.
//An empty string can be considered an anagram of itself.
//Characters won't be used more than once per string.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(minRemovals("abcde", "cab"), 2)
//Test.assertEquals(minRemovals("deafk", "kfeap"), 2)
//Test.assertEquals(minRemovals("abc", "ghi"), 6)
//Test.assertEquals(minRemovals("abcxyz", "ghixytz"), 7)

