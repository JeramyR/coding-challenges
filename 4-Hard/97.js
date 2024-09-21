

//title: Digital Vowel Ban

//tags: arrays,conditions,numbers,strings

//url: https://edabit.com/challenge/xE7TGwocj5YvnftCH

//Description:
//In this challenge, it's time to ban some impenitent digit!
//Your job is to delete the digits of a given number that, within their name written in English, contain a given vowel.
//Given an integer n, and a string ban being the vowel to search, implement a function that returns:
//If the given vowel is not present in the name of any of the digits of n, the same n.
//If n has at least a digit that contains the given vowel in its name, the new integer obtained after the elimination of banned digits (as a natural number without leading zeros).
//If all digits of n are banned, a string "Banned Number".
//Examples
//digitalVowelBan(143, "o") ➞ 3
//// 1 = "One" contains "o" (banned).
//// 4 = "Four" contains "o" (banned).
//// 3 = "Three" is safe.
//
//digitalVowelBan(14266330, "e") ➞ 4266
//// "One" contains "e" (banned).
//// "Four", "Two" and "Six" are safe.
//// "Three" and "Zero" contain "e" (banned).
//
//digitalVowelBan(4020, "u") ➞ 20
//// "Four" contains "u" (banned).
//// Leading zeros are not considered.
//
//digitalVowelBan(586, "i") ➞ "Banned Number"
//// All digits ("Five, "Eight", "Six") contain "i".
//Notes
//Every given number will be a positive integer greater than 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(digitalVowelBan(143, "o"), 3, "Example #1")
//Test.assertEquals(digitalVowelBan(14266330, "e"), 4266, "Example #2")
//Test.assertEquals(digitalVowelBan(4020, "u"), 20, "Example #3")
//Test.assertEquals(digitalVowelBan(586, "i"), "Banned Number", "Example #4")
//Test.assertEquals(digitalVowelBan(123456789, "i"), 12347)
//Test.assertEquals(digitalVowelBan(20442, "o"), "Banned Number")
//Test.assertEquals(digitalVowelBan(1100, "u"), 1100)
//Test.assertEquals(digitalVowelBan(1993, "e"), "Banned Number")
//Test.assertEquals(digitalVowelBan(90160350102, "e"), 62)
//Test.assertEquals(digitalVowelBan(79284426, "o"), 7986)
//Test.assertEquals(digitalVowelBan(123456789, "a"), 123456789, "triviAl test")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Where`s Waldo?

//tags: arrays,functional_programming

//url: https://edabit.com/challenge/pNNvNZQCz2DmvT59d

//Description:
//Return the coordinates ([row, col]) of the element that differs from the rest.
//Examples
//whereIsWaldo([
//  ["A", "A", "A"],
//  ["A", "A", "A"],
//  ["A", "B", "A"]
//]) ➞ [3, 2]
//
//whereIsWaldo([
//  ["c", "c", "c", "c"],
//  ["c", "c", "c", "d"]
//]) ➞ [2, 4]
//
//whereIsWaldo([
//  ["O", "O", "O", "O"],
//  ["O", "O", "O", "O"],
//  ["O", "O", "O", "O"],
//  ["O", "O", "O", "O"],
//  ["P", "O", "O", "O"],
//  ["O", "O", "O", "O"]
//]) ➞ [5, 1]
//Notes
//The given array will always be a square or rectangle.
//Rows and columns are 1-indexed (not zero-indexed).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(whereIsWaldo([
//  ["A", "A", "A"], 
//  ["A", "A", "A"], 
//  ["A", "B", "A"]
//]), [3, 2])
//​
//Test.assertSimilar(whereIsWaldo([
//  ["c", "c", "c", "c"], 
//  ["c", "c", "c", "d"]
//]), [2, 4])
//​
//Test.assertSimilar(whereIsWaldo([
//  ["O", "O", "O", "O"], 
//  ["O", "O", "O", "O"], 
//  ["O", "O", "O", "O"], 
//  ["O", "O", "O", "O"], 
//  ["P", "O", "O", "O"], 
//  ["O", "O", "O", "O"]
//]), [5, 1])
//​
//Test.assertSimilar(whereIsWaldo([
//  ["X", "X", "Y", "X"], 
//  ["X", "X", "X", "X"], 
//  ["X", "X", "X", "X"]
//]), [1, 3])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Count Substring

//tags: loops,strings

//url: https://edabit.com/challenge/Q4jq2bky3TdCe8J3M

//Description:
//Implement a function count_substring that counts the number of substrings that begin with character "A" and ends with character "X".
//For example, given the input string "CAXAAYXZA", there are four substrings that begin with "A" and ends with "X", namely: "AX", "AXAAYX", "AAYX", and "AYX".
//Examples
//countSubstring("CAXAAYXZA") ➞  4
//
//countSubstring("AAXOXXA") ➞ 6
//
//countSubstring("AXAXAXAXAX") ➞ 15
//Notes
//You should aim to avoid using nested loops to complete the task.
//You can assume that the input string is composed of English upper case letters only.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(countSubstring("CAXAAYXZA"), 4)
//Test.assertEquals(countSubstring("AAXOXXA"), 6)
//Test.assertEquals(countSubstring("AXAXAXAXAX"), 15)

