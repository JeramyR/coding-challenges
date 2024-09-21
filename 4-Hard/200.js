

//title: Repeating Cycle

//tags: algorithms,control_flow,math,numbers

//url: https://edabit.com/challenge/bYK2XtQJRE88b2yQH

//Description:
//Given an integer n, create a function that returns the length of the repeating cycle of the sequence 1/n. If the cycle is non-repetitive, return -1.
//repeatingCycle(13) ➞ 6
//// 1/13 = 0.076923 076923 076923 076923 ...
//// length of `076923` is 6.
//Examples
//repeatingCycle(5) ➞ -1
//// 1/5 = 0.2 (non-repeative)
//
//repeatingCycle(33) ➞ 2
//// 1/33 = 0.03 03 03 03 03 03 03 03
//// length of `03` is 2
//
//repeatingCycle(197) ➞ 98
//Notes
//Return -1 if the repeating cycle does not start from the first decimal place. As an example, 1/22 = 0.0 45 45 45 45, your function should return -1 in this case.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(repeatingCycle(33), 2)
//Test.assertEquals(repeatingCycle(18118), -1)
//Test.assertEquals(repeatingCycle(69), 22)
//Test.assertEquals(repeatingCycle(197), 98)
//Test.assertEquals(repeatingCycle(65), -1)
//Test.assertEquals(repeatingCycle(97), 96)
//Test.assertEquals(repeatingCycle(19), 18)
//Test.assertEquals(repeatingCycle(111), 3)
//Test.assertEquals(repeatingCycle(53), 13)
//Test.assertEquals(repeatingCycle(59), 58)
//Test.assertEquals(repeatingCycle(93), 15)
//Test.assertEquals(repeatingCycle(51), 16)
//Test.assertEquals(repeatingCycle(159), 13)
//Test.assertEquals(repeatingCycle(183), 60)
//Test.assertEquals(repeatingCycle(197), 98)
//Test.assertEquals(repeatingCycle(167), 166)
//Test.assertEquals(repeatingCycle(94), -1)
//Test.assertEquals(repeatingCycle(133), 18)
//Test.assertEquals(repeatingCycle(218713), 9744)
//Test.assertEquals(repeatingCycle(38127), 6230)
//Test.assertEquals(repeatingCycle(431541), 726)
//Test.assertEquals(repeatingCycle(221193), 3510)
//Test.assertEquals(repeatingCycle(1234567), 34020)
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Digitaldrome

//tags: conditions,numbers,sorting,validation

//url: https://edabit.com/challenge/84jqLSWr288Wqx5eH

//Description:
//In this challenge, you have to establish if the digits of a given number form a sequence (ascending or descending).
//Given an integer n, implement a function that returns a string:
//"Metadrome" if the digits of n form an ascending sequence without repeating digits.
//"Plaindrome" if the digits of n form an ascending sequence with repeating digits.
//"Katadrome" if the digits of n form a descending sequence without repeating digits.
//"Nialpdrome" if the digits of n form a descending sequence with repeating digits.
//"Repdrome" if n contains a single repeating digit.
//"Nondrome" if none of the above conditions is true.
//Examples
//digitaldrome(1357) ➞ "Metadrome"
//// Ascending sequence without repeating digits
//
//digitaldrome(12344) ➞ "Plaindrome"
//// Ascending sequence with repeating digits
//
//digitaldrome(7531) ➞ "Katadrome"
//// Descending sequence without repeating digits
//
//digitaldrome(9874441) ➞ "Nialpdrome"
//// Descending sequence with  repeating digits
//
//digitaldrome(666) ➞ "Repdrome"
//// There's only a single repeating digit
//
//digitaldrome(1985) ➞ "Nondrome"
//// This is not a sequence
//Notes
//Any given n will be a positive integer.
//The word "drome" comes from the Greek suffix for "run", while "kata" and "meta" are the prefixes for "down" (or "into") and "after" (or "through").

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(digitaldrome(1357), "Metadrome", "Example #1");
//Test.assertEquals(digitaldrome(12344), "Plaindrome", "Example #2");
//Test.assertEquals(digitaldrome(7531), "Katadrome", "Example #3");
//Test.assertEquals(digitaldrome(9874441), "Nialpdrome", "Example #4");
//Test.assertEquals(digitaldrome(666), "Repdrome", "Example #5");
//Test.assertEquals(digitaldrome(1985), "Nondrome", "Example #6");
//Test.assertEquals(digitaldrome(33333), "Repdrome");
//Test.assertEquals(digitaldrome(1), "Repdrome");
//Test.assertEquals(digitaldrome(4899), "Plaindrome");
//Test.assertEquals(digitaldrome(7521), "Katadrome");
//Test.assertEquals(digitaldrome(23), "Metadrome");
//Test.assertEquals(digitaldrome(2340), "Nondrome");
//Test.assertEquals(digitaldrome(1000000), "Nialpdrome");
//Test.assertEquals(digitaldrome(269), "Metadrome");

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Twitter Messages

//tags: formatting,strings

//url: https://edabit.com/challenge/gA9dCGTc6bf2fZzE8

//Description:
//John realised that many of his tweets on Twitter are under 140 characters. He wishes to make full use of the allocated space by using any of the remaining space by filling it in with lolololol until he hits 140 characters.
//For example, if his message is:
//"What a wonderful day!"
//He instead wants to tweet:
//"What a wonderful day!lololololololololololololololololololololololololololololololololololololololololololololo
//lolololololololololololololol"
//Note that the "lololol ..." part must always end with an "l". To achieve this, you may leave a space between the message and the start of the "lolololol ..." part.
//That is to say:
//"Odd"
//Will become:
//"Oddlolololololololololololololololololololololololololololololololololololololololololololol
//olololololololololololololololololololololololol"
//
//# Without a space.
//And ...
//"Even"
//Will become:
//"Even lololololololololololololololololololololololololololololololololololololololololololololololol
//olololololololololololololololololololol"
//
//# With a space.
//Help John code a function that will take in the string of his message without the lololol part and return a string containing a tweet as per John's specifications.
//Examples
//pad("Even") ➞ "Even lololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololol"
//
//pad("Odd") ➞ "Oddlolololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololol"
//
//pad("I love the new challenge") ➞ "I love the new challenge lololololololololololololololololololololololololololololololololololololololololololololololololololololololololol"
//
//pad("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dolor purus, finibus eget magna vel, suscipit semper nibh. Quisque posuere.") ➞ "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dolor purus, finibus eget magna vel, suscipit semper nibh. Quisque posuere."
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(pad("Even"), "Even lololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololol")
//Test.assertEquals(pad("Odd"), "Oddlolololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololol")
//Test.assertEquals(pad("I love the new challenge"), "I love the new challenge lololololololololololololololololololololololololololololololololololololololololololololololololololololololololol")
//Test.assertEquals(pad("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dolor purus, finibus eget magna vel, suscipit semper nibh. Quisque posuere."), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dolor purus, finibus eget magna vel, suscipit semper nibh. Quisque posuere.")

