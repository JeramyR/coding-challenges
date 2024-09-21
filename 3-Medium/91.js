

//title: Puzzle Pieces

//tags: arrays,higher_order_functions,loops,validation

//url: https://edabit.com/challenge/Zu4LyLXhd9e49krFP

//Description:
//Write a function that takes two arrays and adds the first element in the first array with the first element in the second array, the second element in the first array with the second element in the second array, etc, etc. Return true if all element combinations add up to the same number. Otherwise, return false.
//Examples
//puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1]) ➞ true
//// 1 + 4 = 5;  2 + 3 = 5;  3 + 2 = 5;  4 + 1 = 5
//// Both arrays sum to [5, 5, 5, 5]
//
//puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6]) ➞ true
//
//puzzlePieces([1, 2], [-1, -1]) ➞ false
//
//puzzlePieces([9, 8, 7], [7, 8, 9, 10]) ➞ false
//Notes
//Each array will have at least one element.
//Return false if both arrays are of different length.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1]), true)
//Test.assertEquals(puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6]), true)
//Test.assertEquals(puzzlePieces([2, 1, 1], [-2, -1, -1]), true)
//Test.assertEquals(puzzlePieces([2], [-2]), true)
//Test.assertEquals(puzzlePieces([5, -1], [-6, 0]), true)
//Test.assertEquals(puzzlePieces([0, 0, 0, 0, 0], [1, 1, 1, 1, 1]), true)
//Test.assertEquals(puzzlePieces([1, 2], [-1, -1]), false)
//Test.assertEquals(puzzlePieces([9, 8, 7], [7, 8, 9, 10]), false)
//Test.assertEquals(puzzlePieces([9, 8, 7], [7, 8, 9, 16]), false)
//Test.assertEquals(puzzlePieces([1, 1, 1], [1, 1, 2]), false)
//Test.assertEquals(puzzlePieces([1, 8, 1], [1, -8, -1]), false)
//Test.assertEquals(puzzlePieces([0, 0, 0, 0, 0], [1, 1, 0, 1, 1]), false)
//Test.assertEquals(puzzlePieces([0, 0, 0, 0, 0], [1, 1, 1, 1]), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Grab the Numbers

//tags: numbers,strings

//url: https://edabit.com/challenge/8E2BQmb5GZ8G4mkgM

//Description:
//Given a string including a bunch of characters and numbers, return the sum of all the numbers in the string. Note that multiple digits next to each other are counted as a whole number rather than separate digits.
//Examples
//grabNumberSum("aeiou250abc10") ➞ 260
//
//grabNumberSum("one1two2twenty20") ➞ 23
//
//grabNumberSum("900uwu50uwuuwuuwu25uwu25") ➞ 1000
//Notes
//Remember not to just add single digit numbers together, it should be possible for answers to easily get into the 100s!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(grabNumberSum("aeiou5abc10"), 15)
//Test.assertEquals(grabNumberSum("75shugeb15hvyff15"), 105)
//Test.assertEquals(grabNumberSum("900uwu50uwuuwuuwu25uwu25"), 1000)
//Test.assertEquals(grabNumberSum("one1two2twenty20"), 23)
//Test.assertEquals(grabNumberSum("1s1s11"), 13)
//Test.assertEquals(grabNumberSum("75"), 75)
//Test.assertEquals(grabNumberSum("aeiou250abc10"), 260)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Single Occurrence

//tags: language_fundamentals,strings

//url: https://edabit.com/challenge/YNb2MDmxDyJNHDMG8

//Description:
//Create a function that, given a string str, finds a letter that has a single occurrence. Return the letter in uppercase. If the input is empty, return an empty string "".
//Examples
//singleOccurrence("EFFEAABbc") ➞ "C"
//
//singleOccurrence("AAAAVNNNNSS") ➞ "V"
//
//singleOccurrence("S") ➞ "S"
//Notes
//The function will not be case sensitive.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(singleOccurrence("EFFEAABbc"), "C")
//Test.assertEquals(singleOccurrence("AAAAVNNNNSS"), "V")
//Test.assertEquals(singleOccurrence("S"), "S")
//Test.assertEquals(singleOccurrence(""), "")
//Test.assertEquals(singleOccurrence("eEDABITaebiT"), "D")
//Test.assertEquals(singleOccurrence("iSs"), "I")
//Test.assertEquals(singleOccurrence("GOODd"), "G")

