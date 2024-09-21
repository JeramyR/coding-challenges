

//title: Simple Numbers

//tags: interview,logic,math,numbers

//url: https://edabit.com/challenge/5zPvYEpfuKig6nirD

//Description:
//Mubashir needs your help to find the Simple Numbers in a given range.
//A number X, that has an N amount of digits (which we'll enumerate as d1, d2, ..., dN), is Simple if the following equation holds true:
//X = d1^1 + d2^2 + ... + dN^N
//Examples of Simple Numbers:
//89 = 8^1 + 9^2
//
//135 = 1^1 + 3^2 + 5^3
//Create a function that returns an array of all the Simple Numbers that exist within a given range between a and b (both numbers are inclusive).
//Generate an array with the numbers from a to b.
//Filter the array so that only "simple numbers" are kept.
//To find out if a number is "simple":
//Generate an array of the individual digits of the number.
//For each digit, calculate digit ^ (indexOfTheDigit + 1).
//Sum the results of the calculations above and compare with the original number. If they're equal, the number is "simple".
//Examples
//simpleNumbers(1, 10) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9]
//
//simpleNumbers(1, 100) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
//
//simpleNumbers(90, 100) ➞ []
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(simpleNumbers(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
//Test.assertSimilar(simpleNumbers(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
//Test.assertSimilar(simpleNumbers(10, 89),  [89])
//Test.assertSimilar(simpleNumbers(10, 100),  [89])
//Test.assertSimilar(simpleNumbers(90, 100), [])
//Test.assertSimilar(simpleNumbers(90, 150), [135])
//Test.assertSimilar(simpleNumbers(50, 150), [89, 135])
//Test.assertSimilar(simpleNumbers(10, 150), [89, 135])
//Test.assertSimilar(simpleNumbers(89, 135), [89, 135])
//Test.assertSimilar(simpleNumbers(100, 32253), [135, 175, 518, 598, 1306, 1676, 2427])
////Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Amazing Alliteration

//tags: strings,validation

//url: https://edabit.com/challenge/RdypN7bxyrjnyhcCe

//Description:
//Alliteration refers to a sequence of words that begin with the same letter. For this exercise, a sentence is correctly alliterated if all words strictly greater than 3 characters begin with the same letter.
//Examples
//alliterationCorrect("She swam to the shore.") ➞ true
//// All words >= 4 letters long begins with "s"
//
//alliterationCorrect("Maybel manages money well.") ➞ false
//// "well" does not begin with an "m"
//
//alliterationCorrect("He helps harness happiness.") ➞ true
//
//alliterationCorrect("There are many animals.") ➞ false
//Notes
//Check the resources tab for a better explanation of alliteration.
//This is to allow for filler words such as "the", "to", "a", etc. - so words with three or fewer characters are not counted.
//Punctuation does not count as part of a word's length.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(alliterationCorrect('She swam to the shore.'), true)
//Test.assertEquals(alliterationCorrect('Maybel manages money well.'), false)
//Test.assertEquals(alliterationCorrect('He helps harness happiness.'), true)
//Test.assertEquals(alliterationCorrect('There are many animals in the zoo.'), false)
//Test.assertEquals(alliterationCorrect('Tanya took the tomatoes. Two times two is not twenty.'), true)
//Test.assertEquals(alliterationCorrect('Two times two is four.'), false)
//Test.assertEquals(alliterationCorrect('Nancy nimbly ran for the newts.'), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Ranged Reversal

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/Me6dgybsZshsdXTQt

//Description:
//Write a function that reverses the subarray between the start and end index (inclusive). The rest of the array should be kept the same.
//Examples
//rangedReversal([1, 2, 3, 4, 5, 6], 1, 3) ➞ [1, 4, 3, 2, 5, 6]
//
//rangedReversal([1, 2, 3, 4, 5, 6], 0, 4) ➞ [5, 4, 3, 2, 1, 6]
//
//rangedReversal([9, 8, 7, 4], 0, 0) ➞ [9, 8, 7, 4]
//Notes
//Arrays will be zero-indexed.
//The start and end indices will always be valid in context of the array.
//The end index will always be greater than or equal to the starting index.
//Return the array itself if the starting and ending index are the same.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(rangedReversal([1, 2, 3, 4, 5, 6], 1, 3), [1, 4, 3, 2, 5, 6])
//Test.assertSimilar(rangedReversal([1, 2, 3, 4, 5, 6], 0, 4), [5, 4, 3, 2, 1, 6])
//Test.assertSimilar(rangedReversal([9, 8, 7, 4], 0, 0), [9, 8, 7, 4])
//Test.assertSimilar(rangedReversal([9, 8, 7, 4], 0, 3), [4, 7, 8, 9])
//Test.assertSimilar(rangedReversal([8, 9, 3, 3, 2, 7, 4], 5, 6), [8, 9, 3, 3, 2, 4, 7])
//Test.assertSimilar(rangedReversal([1, 2], 0, 1), [2, 1])
//Test.assertSimilar(rangedReversal([7, 8, 9, 4], 1, 2), [7, 9, 8, 4])

