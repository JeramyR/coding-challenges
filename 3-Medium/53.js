

//title: Position in the Alphabet

//tags: language_fundamentals,numbers

//url: https://edabit.com/challenge/nSYREMMMz239AoKxX

//Description:
//Given a number between 1-26, return what letter is at that position in the alphabet. Return "invalid" if the number given is not within that range, or isn't an integer.
//Examples
//letterAtPosition(1) ➞ "a"
//
//letterAtPosition(26.0) ➞ "z"
//
//letterAtPosition(0) ➞ "invalid"
//
//letterAtPosition(4.5) ➞ "invalid"
//Notes
//Return a lowercase letter.
//Numbers that end with ".0" are valid.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(letterAtPosition(1), "a")
//Test.assertEquals(letterAtPosition(2), "b")
//Test.assertEquals(letterAtPosition(3), "c")
//Test.assertEquals(letterAtPosition(4), "d")
//Test.assertEquals(letterAtPosition(5), "e")
//Test.assertEquals(letterAtPosition(6), "f")
//Test.assertEquals(letterAtPosition(7), "g")
//Test.assertEquals(letterAtPosition(8), "h")
//Test.assertEquals(letterAtPosition(9), "i")
//Test.assertEquals(letterAtPosition(10), "j")
//Test.assertEquals(letterAtPosition(11), "k")
//Test.assertEquals(letterAtPosition(12), "l")
//Test.assertEquals(letterAtPosition(13), "m")
//Test.assertEquals(letterAtPosition(14), "n")
//Test.assertEquals(letterAtPosition(15), "o")
//Test.assertEquals(letterAtPosition(16), "p")
//Test.assertEquals(letterAtPosition(17), "q")
//Test.assertEquals(letterAtPosition(18), "r")
//Test.assertEquals(letterAtPosition(19), "s")
//Test.assertEquals(letterAtPosition(20), "t")
//Test.assertEquals(letterAtPosition(21), "u")
//Test.assertEquals(letterAtPosition(22), "v")
//Test.assertEquals(letterAtPosition(23), "w")
//Test.assertEquals(letterAtPosition(24), "x")
//Test.assertEquals(letterAtPosition(25), "y")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sum of Found Indexes

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/TTu48ECaTRwZDj69x

//Description:
//Create a function which takes in an array of numbers and a number to find. Return the sum of every index in the array which matches the chosen number.
//Examples
//sumFoundIndexes([0, 3, 3, 0, 0, 3], 3) ➞ 8
//// The number 3 was found at indexes 1, 2 and 5.
//// 8 = 1 + 2 + 5
//
//sumFoundIndexes([1, 2, 3, 4, 5, 6], 3) ➞ 2
//
//sumFoundIndexes([100, 100, 100, 100, 100], 100) ➞ 10
//
//sumFoundIndexes([5, 10, 15, 20], 2) ➞ 0
//Notes
//0 can be the result if no number in the array matches or if the only matching element is at index 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sumFoundIndexes([0, 3, 3, 0, 0, 3], 3), 8)
//Test.assertEquals(sumFoundIndexes([1, 2, 3, 4, 5, 6], 3), 2)
//Test.assertEquals(sumFoundIndexes([100, 100, 100, 100, 100], 100), 10)
//Test.assertEquals(sumFoundIndexes([5, 10, 15, 20], 2), 0)
//Test.assertEquals(sumFoundIndexes([5, 10, 15, 20], 5), 0)
//Test.assertEquals(sumFoundIndexes([2, 1, 7, 6, 3, 10, 6, 1, 3, 9, 1, 9, 3, 3, 9, 10, 4, 6, 3, 2, 5, 3, 0, 1, 0, 1, 9, 4, 8, 0, 5], 2), 19)
//Test.assertEquals(sumFoundIndexes([10, 9, 9, 3, 9, 2, 4, 5, 5, 10, 10, 2, 0, 8, 0, 6, 2, 1, 4, 5, 5, 0, 3, 1, 5, 3, 2, 9, 8, 3, 1, 7, 4, 3, 8, 6, 7, 1, 3, 1, 10, 7, 1, 8, 8, 1, 3, 3, 7, 0, 6, 8, 6, 2, 1, 4, 0, 4, 7, 2, 1, 5, 3, 9, 7, 7, 3, 10, 9, 7, 10, 6, 0, 0, 0, 6, 0, 1, 0, 2, 4, 1, 7, 10, 4, 10, 2, 1, 0, 9], 3), 371)
//Test.assertEquals(sumFoundIndexes([7, 10, 8, 2, 1, 2, 1, 7, 3, 10, 0, 6, 9, 3, 9, 9], 9), 41)
//Test.assertEquals(sumFoundIndexes([1, 10, 4, 9, 4, 6, 5, 5, 3, 3, 4, 9, 4, 10, 7, 1, 0, 5, 0, 1, 3, 7, 7, 7, 4, 2, 3, 10, 2, 9, 5, 1, 10, 5, 5, 2, 10, 2, 1, 8, 2, 3, 4, 1, 10, 7, 3, 8, 10, 4, 9, 10, 3, 2, 4, 10, 4, 8, 6], 2), 218)
//Test.assertEquals(sumFoundIndexes([9, 1, 5, 6, 9, 10, 6, 8, 8, 4, 8, 8, 2, 10, 5, 10, 3, 1, 0, 0, 4, 9, 7, 10, 7, 4, 2, 1, 3, 3, 10, 0, 10, 8, 0, 8, 2, 5, 2, 2, 0, 10, 6, 6, 1, 4, 8, 2, 5, 9, 5, 6, 3, 1, 10, 3, 8, 6, 8, 3, 4, 0, 3, 1, 6], 1), 205)
//Test.assertEquals(sumFoundIndexes([2, 7, 1, 9, 1, 4, 8, 1, 0, 4, 4, 5], 9), 3)
//Test.assertEquals(sumFoundIndexes([1, 9, 5, 7, 3, 6, 5, 10, 7, 9, 2, 1, 2, 9, 5, 1, 7, 3, 6, 2, 1, 6, 9, 8, 1, 2, 10, 3, 8, 9, 6, 7, 10, 8, 9, 10, 2, 2, 6, 7, 3, 9, 1, 2, 1, 3, 7, 5, 10], 7), 143)
//Test.assertEquals(sumFoundIndexes([5, 2, 8, 3, 9, 3, 8, 3, 7, 1, 4, 6, 5, 7, 1, 3, 3, 8, 6, 0, 3, 8, 6, 10, 5, 10, 2, 6, 8, 7, 0, 10, 0, 6, 8, 1, 6, 9, 8, 8, 6, 7, 9, 1, 8, 4, 3, 8, 5, 3, 2], 1), 101)
//Test.assertEquals(sumFoundIndexes([10, 10, 6, 10, 9, 9, 4, 0, 4, 1, 3, 4, 9, 6, 4, 5, 0, 1, 7, 8, 3, 4, 3, 3, 5, 1, 4, 7], 4), 86)
//Test.assertEquals(sumFoundIndexes([0, 2, 8, 1, 1, 8, 3, 9, 8, 10, 4, 9, 7, 9, 4, 5, 5, 7, 4, 3, 2, 5, 6, 10, 5, 4, 9, 4, 7, 3, 10, 10, 10, 6, 2, 0, 5, 8, 6, 4, 6, 7, 5, 2, 8, 7, 2, 6, 1, 9, 3, 5, 0, 0, 5, 6, 2, 8, 6, 0, 0, 8, 1, 1, 0], 6), 293)
//Test.assertEquals(sumFoundIndexes([10, 2, 5, 10, 1, 9, 10, 7, 7, 8, 4, 0, 7, 0, 9, 1, 0, 0, 3, 4, 5, 9, 10, 3, 1, 1, 9, 6, 7, 0, 8, 3, 4, 7, 0, 7, 7, 5, 3, 10, 3, 1, 1, 5, 5, 5, 1, 0, 10, 7, 3, 5, 1, 7, 1, 2, 1, 0, 7, 3, 2, 0, 0, 2, 3, 9, 6, 8, 0, 6, 0, 3, 0, 9, 10, 3, 1, 1, 3, 5, 1, 1, 8, 1, 3, 1, 6, 6, 3, 9, 7], 8), 188)
//Test.assertEquals(sumFoundIndexes([0, 9, 1, 8, 1, 4, 3, 7, 9, 0, 0, 4, 9, 10, 4, 7, 6, 3, 8, 7, 7, 8, 8, 5, 4, 3, 8, 3, 8, 7, 3, 1, 6, 9, 6, 6, 6, 8, 9, 9, 6, 5, 0, 1, 4, 0, 2, 1, 4, 8, 7, 5, 7, 3, 3, 2, 4, 8, 3, 0, 3, 6, 10, 8, 5, 2, 9, 10, 5, 10, 2, 1, 1, 3, 8, 0, 7, 5, 8, 1, 8, 6, 10, 8, 10, 4, 2, 6], 5), 324)
//Test.assertEquals(sumFoundIndexes([1, 9, 5, 5, 7, 5, 2, 4, 3, 9, 0, 5, 3, 2, 5, 9, 6, 9, 3], 1), 0)
//Test.assertEquals(sumFoundIndexes([5, 4, 10, 2, 5, 5, 5, 0, 5, 2, 8, 8, 5, 3], 5), 35)
//Test.assertEquals(sumFoundIndexes([4, 3, 2, 2, 4, 5, 5, 5, 1, 3, 8, 1, 8, 9, 0, 10], 9), 13)
//Test.assertEquals(sumFoundIndexes([1, 8, 2, 9, 1, 8, 4, 0, 10, 0, 6, 10, 9, 7, 9, 4, 5, 2, 7, 7, 8, 1, 6, 2, 6, 0, 2, 7, 4, 8, 10, 2, 0, 0, 1, 2, 9, 9, 10, 3, 10, 8, 8, 5, 9, 3, 9, 1, 5, 4, 6, 7, 6, 8, 3, 10, 5, 8, 9, 2, 1, 5, 4, 2, 8, 9, 1, 1, 9, 7, 4, 9, 7, 7, 0, 4, 10, 3, 2, 8, 9, 0, 9, 1, 2, 1, 3, 1], 9), 616)
//Test.assertEquals(sumFoundIndexes([6, 0, 7, 9, 2, 4, 0, 2, 9, 8, 6, 1, 2, 9, 2, 4, 2, 8, 3, 9, 9, 7, 3, 0, 9, 10, 9, 9, 3, 1, 2, 9, 6, 1, 4, 0, 2, 6, 9, 3, 3, 8, 3, 3, 5, 0, 2, 4, 10, 0, 1, 4, 3, 3, 2, 5, 6, 5, 0, 9, 0, 7, 4, 0, 3, 3, 7, 9, 3, 8, 7, 3, 4, 10, 5, 2, 7, 3, 2, 4, 1, 3, 5, 9, 0, 7, 10, 6, 6, 2, 1], 6), 310)
//Test.assertEquals(sumFoundIndexes([1, 5, 0, 4, 3, 0, 4, 8, 10, 10, 3, 2, 2, 0, 2, 10, 2, 1, 3, 6, 4, 3, 6, 6, 0, 4, 9, 6, 0, 4, 1, 7, 3, 4, 3, 4, 9, 4, 5, 4, 2, 0, 4, 4, 7, 7, 7, 5, 9, 6, 0, 1, 7, 6, 5, 6, 0, 8, 7, 0, 5, 5, 6, 5, 0, 8, 5, 8, 6, 1, 6, 5, 5, 4, 7, 3, 7, 0, 2, 1, 7, 10], 1), 246)
//Test.assertEquals(sumFoundIndexes([7, 8, 1, 2, 8, 6, 7, 10, 0, 4, 6, 9, 5, 10, 8, 2, 4, 9, 9, 7, 10, 2, 6, 9, 6, 5, 9, 1, 5, 7, 2, 7, 5, 3, 10, 2, 7], 5), 97)
//Test.assertEquals(sumFoundIndexes([4, 5, 3, 0, 9, 9, 7, 4, 6, 4, 7, 3, 1, 8, 3], 2), 0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Same ASCII?

//tags: strings,validation

//url: https://edabit.com/challenge/y6TD7s63sm9RwByLY

//Description:
//Return true if the sum of ASCII values of the first string is same as the sum of ASCII values of the second string, otherwise return false.
//Examples
//sameAscii("a", "a") ➞ true
//
//sameAscii("AA", "B@") ➞ true
//
//sameAscii("EdAbIt", "EDABIT") ➞ false
//Notes
//If you need some help with ASCII codes, check the Resources tab for an image of all ASCII codes used in this challenge.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sameAscii("a", "a"), true)
//Test.assertEquals(sameAscii("A", "a"), false)
//Test.assertEquals(sameAscii("!", "g"), false)
//Test.assertEquals(sameAscii("aAAAaaAA", "~~~aa,"), true)
//Test.assertEquals(sameAscii("aUGSIGHIhiSJGijs", "~~~~~~~~~FF,"), false)
//Test.assertEquals(sameAscii("~~Tga2", "{}[]()I"), true)

