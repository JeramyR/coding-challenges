

//title: Burrows-Wheeler Transform

//tags: cryptography,formatting,sorting,strings

//url: https://edabit.com/challenge/Sdj4jE7tHuoiyNKFv

//Description:
//Burrows-Wheeler transform (BWT) is an algorithm which is used in data compression. Given a string text, BWT of text is a modified version of the string with same length as text. It can then be used to efficiently find substrings of text (which won't be covered here). We will just find the BWT of text.
//Build Burrows-Wheeler-Matrix (BWM) containing all rotations of text.
//Sort BWM lexicographically ($ < a < b < ... < z).
//BWT is the last coloumn of BWM and gets returned.
//// Example with text = "banana$"
//
//// BWM (all rotations of text):
//banana$
//anana$b
//nana$ba
//ana$ban
//na$bana
//a$banan
//$banana
//
//// BWM sorted lexicographically:
//$banana
//a$banan
//ana$ban
//anana$b
//banana$
//na$bana
//nana$ba
//
//// BWT (last coloumn of BWM):
//annb$aa
//Examples
//bwTransform("banana$") ➞ "annb$aa"
//
//bwTransform("mississippi$") ➞ "ipssm$pissii"
//
//bwTransform("acccgtttgtttcaatagatccatcaa$") ➞ "aacc$tacgttctaccatcaatatttgg"
//Notes
//Consider $ as the terminator character at the end of every input text.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(bwTransform("banana$"), "annb$aa")
//Test.assertEquals(bwTransform("mississippi$"), "ipssm$pissii")
//Test.assertEquals(bwTransform("abaaba$"), "abba$aa")
//Test.assertEquals(bwTransform("acccgtttgtttcaatagatccatcaa$"), "aacc$tacgttctaccatcaatatttgg")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Anna Likes Daniel

//tags: regex,strings,validation

//url: https://edabit.com/challenge/9kTgWLWEgpqRKakoy

//Description:
//Anna is a strange girl. She likes certain boys, but not others. You have to figure out why she likes some, and not the others.
//Examples
//annaLikes("David") ➞ false
//
//annaLikes("Samuel") ➞ true
//
//annaLikes("Gary") ➞ false
//Notes
//All names / inputs are valid.
//Anna likes her own name.
//Check the Tests tab for all 100 examples.
//Try to solve this one using RegEx.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(annaLikes("James"), false) // Test 1
//Test.assertEquals(annaLikes("John"), false) // Test 2 
//Test.assertEquals(annaLikes("Robert"), false) // Test 3 
//Test.assertEquals(annaLikes("Michael"), false) // Test 4 
//Test.assertEquals(annaLikes("William"), false) // Test 5
//Test.assertEquals(annaLikes("David"), false) // Test 6 
//Test.assertEquals(annaLikes("Richard"), false) // Test 7 
//Test.assertEquals(annaLikes("Joseph"), false) // Test 8 
//Test.assertEquals(annaLikes("Thomas"), false) // Test 9 
//Test.assertEquals(annaLikes("Charles"), false) // Test 10 
//Test.assertEquals(annaLikes("Christopher"), false) // Test 11 
//Test.assertEquals(annaLikes("Daniel"), true) // Test 12 
//Test.assertEquals(annaLikes("Matthew"), false) // Test 13 
//Test.assertEquals(annaLikes("Anthony"), false) // Test 14 
//Test.assertEquals(annaLikes("Donald"), false) // Test 15 
//Test.assertEquals(annaLikes("Mark"), false) // Test 16 
//Test.assertEquals(annaLikes("Paul"), true) // Test 17 
//Test.assertEquals(annaLikes("Steven"), false) // Test 18 
//Test.assertEquals(annaLikes("Andrew"), false) // Test 19 
//Test.assertEquals(annaLikes("Kenneth"), false) // Test 20 
//Test.assertEquals(annaLikes("Joshua"), true) // Test 21 
//Test.assertEquals(annaLikes("Kevin"), false) // Test 22 
//Test.assertEquals(annaLikes("Brian"), false) // Test 23 
//Test.assertEquals(annaLikes("George"), true) // Test 24 
//Test.assertEquals(annaLikes("Edward"), false) // Test 25 

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Directionally Challenged

//tags: arrays,control_flow

//url: https://edabit.com/challenge/jRXxKKZh5kGojDd2H

//Description:
//Suppose you are directionally challenged, and get lost easily. As a result, sometimes you walk in circles or make U-turns. You might take a sub-optimal route. Create a function that returns the difference in length between your path and the optimal path. Both paths reach the same destination.
//You start at (0,0) and reach your destination by the end of the input array.
//A demonstration:
//Your route: ["N", "S", "E", "W", "E", "E", "E", "N"]  // 8
//Optimal route: ["E", "E", "E", "N"] (or ["N", "E", "E", "E"], etc.) // 4
//// Difference in length: 8 - 4 = 4
//
//// Explanation: Your "S" cancels out your "N" and your "W" cancels out your "E" leaving you back at (0,0)
//Examples
//routeDiff(["N", "E", "S", "W"]) ➞ 4
//// You"ve just walked in a circle! You are back at the origin. Your optimal path was `[]`.
//
//routeDiff(["N", "N", "N", "E", "N", "E"]) ➞ 0
//// No improvements here!
//
//routeDiff(["N", "S", "N", "S", "E", "W", "E", "E"]) ➞ 6
//Notes
//Remember that a N cancels out a S, and an E cancels out a W

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(routeDiff(['N', 'E', 'S', 'W']), 4)
//Test.assertEquals(routeDiff(['N', 'N', 'N', 'E', 'N', 'E']), 0)
//Test.assertEquals(routeDiff(['N', 'S', 'N', 'S', 'E', 'W', 'E', 'E']), 6)
//Test.assertEquals(routeDiff(['N', 'S', 'N', 'S', 'E']), 4)
//Test.assertEquals(routeDiff(['N', 'N', 'S', 'S', 'S', 'S', 'E']), 4)
//Test.assertEquals(routeDiff(['N', 'N', 'S', 'S', 'W', 'S', 'E']), 6)
//Test.assertEquals(routeDiff(['N', 'S', 'E']), 2)
//Test.assertEquals(routeDiff(['S', 'S', 'S']), 0)
//Test.assertEquals(routeDiff(['S', 'S', 'S', 'S', 'S', 'N']), 2)

