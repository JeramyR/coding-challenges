

//title: Find an Anagram of a String in Another String

//tags: regex,strings,validation

//url: https://edabit.com/challenge/q577i4KiZRFKyPLJf

//Description:
//Create a function that takes two strings and determines if an anagram of the first string is in the second string. Anagrams of "bag" are "bag", "bga", "abg", "agb", "gab", "gba". Since none of those anagrams are in "grab", the answer is false. A "g", "a", and "b" are in the string "grab", but they're split up by the "r".
//Examples
//anaStrStr("car", "race") ➞ true
//
//anaStrStr("nod", "done") ➞ true
//
//anaStrStr("bag", "grab") ➞ false
//Notes
//Inputs will be valid strings in all lowercase letters.
//There exists a linear time algorithm for this.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(anaStrStr("car", "race"), true)
//Test.assertEquals(anaStrStr("nod", "done"), true)
//Test.assertEquals(anaStrStr("bag", "grab"), false)
//Test.assertEquals(anaStrStr("sap", "spatula"), true)
//Test.assertEquals(anaStrStr("sat", "spatula"), false)
//Test.assertEquals(anaStrStr("vein", "universal"), true)
//Test.assertEquals(anaStrStr("salt", "universal"), false)
//Test.assertEquals(anaStrStr("roast", "pastoral"), true)
//Test.assertEquals(anaStrStr("altar", "pastoral"), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Is One String in the Other?

//tags: conditions,logic,strings,validation

//url: https://edabit.com/challenge/taDMEiBjokE9AymBb

//Description:
//Create a function that takes two strings and returns true if either of the strings appears at the very end of the other string. Return false otherwise. The character * is a wildcard, so it can take the place of any character.
//Examples
//overlap("ABC", "Ican'tsingmyABC") ➞ true
//
//overlap("abc", "Ican'tsingmyABC") ➞ true
//
//overlap("Ican'tsingmyABC", "abc") ➞ true
//
//overlap("hello world", "hello") ➞ false
//
//overlap("+=", "this should work too +=") ➞ true
//
//overlap("hey", "*********") ➞ true
//Notes
//Your function should NOT be case sensitive (see example #2).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(overlap("ABC", "Ican'tsingmyABC"), true)
//Test.assertEquals(overlap("abc", "Ican'tsingmyABC"), true)
//Test.assertEquals(overlap("Ican'tsingmyABC", "abc"), true)
//Test.assertEquals(overlap("*bc", "Ican'tsingmyABC"), true)
//Test.assertEquals(overlap("abc", "Ican'tsingmy***"), true)
//Test.assertEquals(overlap("ab", "Ican'tsingmy**c"), false)
//Test.assertEquals(overlap("hello world", "hello"), false)
//Test.assertEquals(overlap("+=", "this should work too +="), true)
//Test.assertEquals(overlap("don't forget hyphens-", "-"), true)
//Test.assertEquals(overlap("don't forget periods ", "."), false)
//Test.assertEquals(overlap("this will always be true", "*"), true)
//Test.assertEquals(overlap("this will always be false", "F"), false)
//Test.assertEquals(overlap("hey", "*********"), true)
//Test.assertEquals(overlap("a*c", "*b*"), true)
//Test.assertEquals(overlap("last test", "congrats you passed the last test"), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Tall People

//tags: arrays,loops

//url: https://edabit.com/challenge/5evtRfyL7kyxXZciY

//Description:
//Create a function that takes a 2D array as an argument and returns the number of people whose view is blocked by a tall person. The concert stage is pointed towards the top of the 2D array and the tall person (represented by a 2) blocks the view of all the people (represented by a 1) behind them.
//Examples
//block([
//  [1, 1, 1, 1, 1],
//  [1, 1, 1, 1, 1],
//  [1, 1, 1, 1, 2],
//  [1, 1, 1, 1, 1],
//  [1, 1, 1, 1, 1]
//]) ➞ 2
//
//// The tall person blocks 2 people behind him thus
//// the function returns 2.
//
//
//block([
//  [1, 2, 1, 1],
//  [1, 1, 1, 2],
//  [1, 1, 1, 1],
//  [1, 1, 1, 1],
//]) ➞ 5
//
//// There are 2 tall people that block everyone behind
//// them. The first tall person in the first row blocks 3
//// people behind him while the second tall person in
//// the second row blocks 2 people behind him thus the
//// function returns 5.
//
//
//block([
//  [1, 1, 1, 1],
//  [2, 1, 1, 2],
//  [1, 1, 1, 1],
//  [1, 1, 1, 1],
//]) ➞ 4
//Notes
//There is only a maximum of 1 tall person in every column.
//No view is blocked if the tall person is in the last row.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(block([
//  [1, 1, 1, 1, 1], 
//  [1, 1, 1, 1, 1], 
//  [1, 1, 1, 1, 2], 
//  [1, 1, 1, 1, 1], 
//  [1, 1, 1, 1, 1]
//]), 2)
//​
//Test.assertEquals(block([
//  [1, 2, 1, 1], 
//  [1, 1, 1, 2], 
//  [1, 1, 1, 1], 
//  [1, 1, 1, 1], 
//]), 5)
//​
//Test.assertEquals(block([
//  [1, 1, 1, 1], 
//  [2, 1, 1, 2], 
//  [1, 1, 1, 1], 
//  [1, 1, 1, 1], 
//]), 4)
//​
//Test.assertEquals(block([
//  [1, 1, 1, 1], 
//  [2, 1, 1, 2], 

