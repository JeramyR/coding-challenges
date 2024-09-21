

//title: The Hangman Game

//tags: games,language_fundamentals,loops,strings

//url: https://edabit.com/challenge/Qc8k4WX2Gi4uSYR5A

//Description:
//Create a function that, given a phrase and number of letters guessed, returns a string with hyphens - for every letter of the phrase not guessed, and each letter guessed in place.
//Examples
//hangman("helicopter", ["o", "e", "s"]) ➞ "-e---o--e-"
//
//hangman("tree", ["r", "t", "e"]) ➞ "tree"
//
//hangman("Python rules", ["a", "n", "p", "r", "z"]) ➞ "P----n r----"
//
//hangman("He"s a very naughty boy!", ["e", "a", "y"]) ➞ "-e"- a -e-y -a----y --y!"
//Notes
//The letters are always given in lowercase, but they should be returned in the same case as in the original phrase (see example #3).
//All characters other than letters should always be returned (see example #4).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(hangman("Looney Tunes", ["a", "e", "i", "o", "u"]), "-oo-e- -u-e-")
//Test.assertEquals(hangman("summer", ["f", "l", "i"]), "------")
//Test.assertEquals(hangman("Connect-4", ["c", "e", "e"]), "C---ec--4")
//Test.assertEquals(hangman("thE elePhaNt IN the rOom.", ["o", "g", "g", "m", "h","n","p"]), "-h- ---Ph-N- -N -h- -Oom.")
//Test.assertEquals(hangman("deoxyribonucleic acid", []), "---------------- ----")
//Test.assertEquals(hangman("IM YELLING!", ["m", "y", "i", "l", "g"]), "IM Y-LLI-G!")
//Test.assertEquals(hangman("Show me the money", ["a", "f", "u", "r", "q"]), "---- -- --- -----")
//Test.assertEquals(hangman("peter pan", ["e", "r", "p", "n", "n", "a", "t"]), "peter pan")
//​
//// Author : @MyName

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Break Point

//tags: arrays,loops,validation

//url: https://edabit.com/challenge/eoFDKdjN9tFXWcEQi

//Description:
//A number has a breakpoint if it can be split in a way where the digits on the left side and the digits on the right side sum to the same number.
//For instance, the number 35190 can be sliced between the digits 351 and 90, since 3 + 5 + 1 = 9 and 9 + 0 = 9. On the other hand, the number 555 does not have a breakpoint (you must split between digits).
//Create a function that returns true if a number has a breakpoint, and false otherwise.
//Examples
//breakPoint(159780) ➞ true
//
//breakPoint(112) ➞ true
//
//breakPoint(1034) ➞ true
//
//breakPoint(10) ➞ false
//
//breakPoint(343) ➞ false
//Notes
//Read each digit as only one number.
//Check the Resources tab for a hint.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(breakPoint(159780), true)
//Test.assertEquals(breakPoint(112), true)
//Test.assertEquals(breakPoint(10), false)
//Test.assertEquals(breakPoint(1034), true)
//Test.assertEquals(breakPoint(343), false)
//Test.assertEquals(breakPoint(1119444), true)
//Test.assertEquals(breakPoint(6666), true)
//Test.assertEquals(breakPoint(9777771), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Reverse the String (with a catch)

//tags: formatting,strings

//url: https://edabit.com/challenge/AcL4HiKbC9cYSHmYt

//Description:
//Create a function that takes a string and returns the reversed string. However there's a few rules to follow in order to make the challenge interesting:
//The UPPERCASE/lowercase positions must be kept in the same order as the original string (see example #1 and #2).
//Spaces must be kept in the same order as the original string (see example #3).
//Examples
//specialReverseString("Edabit") ➞ "Tibade"
//
//specialReverseString("UPPER lower") ➞ "REWOL reppu"
//
//specialReverseString("1 23 456") ➞ "6 54 321"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(specialReverseString('Edabit'), 'Tibade')
//Test.assertEquals(specialReverseString('UPPER lower'), 'REWOL reppu')
//Test.assertEquals(specialReverseString('1 23 456'), '6 54 321')
//Test.assertEquals(specialReverseString('Hello World!'), '!dlro Wolleh')
//Test.assertEquals(specialReverseString("Where's your dog Daisy?"), "?ysiadg odru oys 'erehw")
//Test.assertEquals(specialReverseString('addition(3, 2) ➞ 5'), '5➞)2,3(noit id d a')
//Test.assertEquals(specialReverseString("It's known that CSS means Cascading Style Sheets"), "Stee hsely tsgn IDA csacs Naemsscta Htnwo Nks'ti")

