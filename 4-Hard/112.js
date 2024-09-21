

//title: Letter Distance

//tags: loops,strings

//url: https://edabit.com/challenge/SgmaKy8e8X7ibaGYM

//Description:
//Given two words, the letter distance is calculated by taking the absolute value of the difference in character codes and summing up the difference.
//If one word is longer than another, add the difference in lengths towards the score.
//To illustrate:
//letterDistance("house", "fly") = dist("h", "f") + dist("o", "l") + dist("u", "y") + dist(house.length, fly.length)
//
//= |104 - 102| + |111 - 108| + |117 - 121| + |5 - 3|
//= 2 + 3 + 4 + 2
//= 11
//Examples
//letterDistance("sharp", "sharq") ➞ 1
//
//letterDistance("abcde", "Abcde") ➞ 32
//
//letterDistance("abcde", "bcdef") ➞ 5
//Notes
//Always start comparing the two strings from their first letter.
//Excess letters are not counted towards distance.
//Capital letters are included.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(letterDistance("house", "fly"), 11)
//Test.assertEquals(letterDistance("sharp", "sharq"), 1)
//Test.assertEquals(letterDistance("abcde", "bcdef"), 5)
//Test.assertEquals(letterDistance("abcde", "a"), 4)
//Test.assertEquals(letterDistance("abcde", "e"), 8)
//Test.assertEquals(letterDistance("abcde", "Abcde"), 32)
//Test.assertEquals(letterDistance("abcde", "A"), 36)
//Test.assertEquals(letterDistance("very", "fragile"), 67)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Longest Word

//tags: arrays,recursion,strings,validation

//url: https://edabit.com/challenge/cq8taH4P7NkTm3hL2

//Description:
//Write a function that will return the longest word in a sentence. In cases where more than one word is found, return the first one.
//Examples
//findLongest("A thing of beauty is a joy forever.") ➞ "forever"
//
//findLongest("Forgetfulness is by all means powerless!") ➞ "forgetfulness"
//
//findLongest("\"Strengths\" is the longest and most commonly used word that contains only a single vowel.") ➞ "strengths"
//Notes
//Special characters and symbols don't count as part of the word.
//Return the longest word found in lowercase letters.
//A recursive version of this challenge can be found in here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [strVector, resVector] = [[
//  "Hello darkness my old friend.", "Yourself is your soul's captain and fate's master.",
//  "The pretty daughter's toy, a doll, is as pretty as her.",
//  "A thing of beauty is a joy forever.", "Forgetfulness is by all means powerless!",
//  "Strengths is the longest and most commonly used word that contains only a single vowel."
//], [
//  "darkness", "yourself", "daughter", "forever", "forgetfulness", "strengths"
//]]
//for (let i in strVector) Test.assertSimilar(findLongest(strVector[i]), resVector[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Junction or Self?

//tags: loops,numbers

//url: https://edabit.com/challenge/dpc8d3knJRf2aBkif

//Description:
//In this challenge, you have to separate integers into two families, establishing if they are Junction Numbers or Self Numbers. Given a number n:
//If exists at least a single number which added to the sum of its digits is equal to n, then n is a Junction Number.
//
//If there are not numbers which added to the sum of their digits are equal to n, then n is a Self Number.
//Given a positive integer n, implement a function that returns:
//The string "Self" if n is a Self Number.
//If n is a Junction Number an array, ordered descendingly, containing the numbers which generate n.
//Examples
//junctionOrSelf(25) ➞ [17]
//// If we add 17 to the sum of its digits...
//// ...17 + 1 + 7 = 25
//// 25 is a Junction Number
//
//junctionOrSelf(818) ➞ [805, 796]
//// If we add 805 to the sum of its digits...
//// ...805 + 8 + 0 + 5 = 818
//// If we add 796 to the sum of its digits...
//// ...796 + 7 + 9 + 6 = 818
//// 818 is a Junction Number
//
//junctionOrSelf(7) ➞ "Self"
//// 1 + 1 = 2
//// 2 + 2 = 4
//// 3 + 3 = 6
//// No number added to its own digits is equal to 7
//// 7 is a Self Number
//Notes
//As in example #3, the sum of the digits of a positive integer lower than 10 is equal to that same integer.
//By the formal definition, a Junction number must have at least two other numbers that generate it, so that the Instructions are to be considered valid only for this specific challenge.
//You can expect only valid data as input.
//Trivia: the first Junction Number that can be generated by three different numbers is 10000000000001, while the first generated by four different numbers is 1000000000000000000000102.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(junctionOrSelf(25), [17], "Example #1")
//Test.assertSimilar(junctionOrSelf(818), [805, 796], "Example #2")
//Test.assertSimilar(junctionOrSelf(7), "Self", "Example #3")
//Test.assertSimilar(junctionOrSelf(309), [303, 294])
//Test.assertSimilar(junctionOrSelf(406), [401, 392])
//Test.assertSimilar(junctionOrSelf(188), [175])
//Test.assertSimilar(junctionOrSelf(20), "Self")
//Test.assertSimilar(junctionOrSelf(1), "Self")
//Test.assertSimilar(junctionOrSelf(2), [1])
//Test.assertSimilar(junctionOrSelf(11), [10])
//Test.assertSimilar(junctionOrSelf(117), [108, 99])
//Test.assertSimilar(junctionOrSelf(165), "Self")

