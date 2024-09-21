

//title: Scalable Mountain?

//tags: arrays,loops,numbers,validation

//url: https://edabit.com/challenge/LSPPZKTuQJhqW2Rwb

//Description:
//Given an array of numbers, representing the height of a mountain in certain intervals, return whether this mountain is scalable.
//A mountain can be considered scalable if each number is within 5 units of the next number in either direction.
//Examples
//isScalable([1, 2, 4, 6, 7, 8]) ➞ true
//
//isScalable([40, 45, 50, 45, 47, 52]) ➞ true
//
//isScalable([2, 9, 11, 10, 18, 21]) ➞ false
//Notes
//The array may start at any number and can be any length.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isScalable([1, 2, 4, 6, 7, 8]), true)
//Test.assertEquals(isScalable([40, 45, 50, 48, 47, 52]), true)
//Test.assertEquals(isScalable([2, 9, 11, 10, 18, 21]), false)
//Test.assertEquals(isScalable([200, 200, 200, 200]), true)
//Test.assertEquals(isScalable([30, 29, 24, 19, 16, 11]), true)
//Test.assertEquals(isScalable([22, 22, 22, 29, 29, 29, 29]), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Enharmonic Equivalents

//tags: formatting,strings

//url: https://edabit.com/challenge/ZMk2HeNSWX7vRewcD

//Description:
//In music, notes can be written out in multiple ways (especially for notes on the black keys). Although these notes are spelled out differently, they still are the same note physically.
//
//Given a musical note, create a function that returns its enharmonic equivalent. The examples below should make this clear.
//Examples
//getEquivalent("D#") ➞ "Eb"
//
//getEquivalent("Gb") ➞ "F#"
//
//getEquivalent("Bb") ➞"A#"
//Notes
//Note names will always be a capital letter followed by either # or b.
//Remember that the note after G is A and vice versa.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(getEquivalent("C#"), "Db")
//Test.assertEquals(getEquivalent("Db"), "C#")
//Test.assertEquals(getEquivalent("D#"), "Eb")
//Test.assertEquals(getEquivalent("Eb"), "D#")
//Test.assertEquals(getEquivalent("F#"), "Gb")
//Test.assertEquals(getEquivalent("Gb"), "F#")
//Test.assertEquals(getEquivalent("G#"), "Ab", "Remember that the note after G is A")
//Test.assertEquals(getEquivalent("Ab"), "G#", "Remember that the note before A is G")
//Test.assertEquals(getEquivalent("A#"), "Bb")
//Test.assertEquals(getEquivalent("Bb"), "A#")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Same Parity?

//tags: conditions,language_fundamentals,validation

//url: https://edabit.com/challenge/NH7uN8JRgPz23GSNq

//Description:
//Create a function that takes a number as input and returns true if the sum of its digits has the same parity as the entire number. Otherwise, return false.
//Examples
//parityAnalysis(243) ➞ true
//// 243 is odd and so is 9 (2 + 4 + 3)
//
//parityAnalysis(12) ➞ false
//// 12 is even but 3 is odd (1 + 2)
//
//parityAnalysis(3) ➞ true
//// 3 is odd and 3 is odd and 3 is odd (3)
//Notes
//Parity is whether a number is even or odd. If the sum of the digits is even and the number itself is even, return true. The same goes if the number is odd and so is the sum of its digits.
//Single digits will obviously have the same parities (see example #3).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(parityAnalysis(243), true, "Example #1")
//Test.assertEquals(parityAnalysis(12), false, "Example #2")
//Test.assertEquals(parityAnalysis(3), true, "Example #3")
//Test.assertEquals(parityAnalysis(5), true)
//Test.assertEquals(parityAnalysis(4), true)
//Test.assertEquals(parityAnalysis(3453), true)
//Test.assertEquals(parityAnalysis(0), true)
//Test.assertEquals(parityAnalysis(123456789), true)
//Test.assertEquals(parityAnalysis(987654321), true)
//Test.assertEquals(parityAnalysis(13), false)
//Test.assertEquals(parityAnalysis(37), false)
//Test.assertEquals(parityAnalysis(182), false)
//Test.assertEquals(parityAnalysis(133331), false)
//​
//// made by @Joshua Señoron

