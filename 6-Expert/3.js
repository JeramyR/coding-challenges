

//title: Tap Code Translation

//tags: cryptography,math

//url: https://edabit.com/challenge/ihrD5RjtD34ThEb4z

//Description:
//Tap code is a way to communicate messages via a series of taps (or knocks) for each letter in the message. Letters are arranged in a 5x5 polybius square, with the letter "K" being moved to the space with "C".
//   1  2  3  4  5
//1  A  B C\K D  E
//2  F  G  H  I  J
//3  L  M  N  O  P
//4  Q  R  S  T  U
//5  V  W  X  Y  Z
//Each letter is translated by tapping out the row and column number that the letter appears in, leaving a short pause in-between. If we use "." for each tap, and a single space to denote the pause:
//text = "break"
//
//"B" = (1, 2) = ". .."
//"R" = (4, 2) = ".... .."
//"E" = (1, 5) = ". ....."
//"A" = (1, 1) = ". ."
//"K" = (1, 3) = ". ..."
//Another space is added between the groups of taps for each letter to give the final code:
//"break" = ". .. .... .. . ..... . . . ..."
//Write a function that returns the tap code if given a word, or returns the translated word (in lower case) if given the tap code. When translating from tap-code, default to the letter "c" if the tap-code ". ..." is found.
//Examples
//tapCode("break") ➞ ". .. .... .. . ..... . . . ..."
//
//tapCode(".... ... ... ..... . ..... ... ... .... ....") ➞ "spent"
//Notes
//For more information on tap code, please see the resources section. The code was widely used in WW2 as a way for prisoners to communicate.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(tapCode("greeting"), ".. .. .... .. . ..... . ..... .... .... .. .... ... ... .. ..")
//Test.assertEquals(tapCode("confrontation"), ". ... ... .... ... ... .. . .... .. ... .... ... ... .... .... . . .... .... .. .... ... .... ... ...")
//Test.assertEquals(tapCode("leadership"), "... . . ..... . . . .... . ..... .... .. .... ... .. ... .. .... ... .....")
//Test.assertEquals(tapCode("ankle"), ". . ... ... . ... ... . . .....")
//Test.assertEquals(tapCode("extreme"), ". ..... ..... ... .... .... .... .. . ..... ... .. . .....")
//Test.assertEquals(tapCode(".... .... ... .... ... ... .. .... .. .. .. ... .... ...."), "tonight")
//Test.assertEquals(tapCode("... . ... .... ..... .... . . ... . .... .... ..... ...."), "loyalty")
//Test.assertEquals(tapCode(".... .. . ..... .. . . ..... .... .. .... .. . . ... ."), "referral")
//Test.assertEquals(tapCode(". ..... ..... ... ... ..... .... .. . ..... .... ... .... ... .. .... ... .... ... ..."), "expression")
//Test.assertEquals(tapCode(". . .. . .. . .. .... ... ... .. .... .... .... ..... ...."), "affinity")
//Test.assertEquals(tapCode("correspondence"), ". ... ... .... .... .. .... .. . ..... .... ... ... ..... ... .... ... ... . .... . ..... ... ... . ... . .....")
//Test.assertEquals(tapCode("atmosphere"), ". . .... .... ... .. ... .... .... ... ... ..... .. ... . ..... .... .. . .....")
//Test.assertEquals(tapCode("absolute"), ". . . .. .... ... ... .... ... . .... ..... .... .... . .....")
//Test.assertEquals(tapCode("redundancy"), ".... .. . ..... . .... .... ..... ... ... . .... . . ... ... . ... ..... ....")
//Test.assertEquals(tapCode("infrastructure"), ".. .... ... ... .. . .... .. . . .... ... .... .... .... .. .... ..... . ... .... .... .... ..... .... .. . .....")
//Test.assertEquals(tapCode("... ..... ... .... .. .... ... ... .... ...."), "point")
//Test.assertEquals(tapCode("... ..... .... .. . ..... .. . . ..... .... .. . ..... ... ... . ... . ....."), "preference")
//Test.assertEquals(tapCode(".. .. .... ..... .. .... . .... . ....."), "guide")
//Test.assertEquals(tapCode(". ... .. ... . . .... .. . . . ... .... .... . ..... .... .. .. .... .... ... .... .... .. .... . ..."), "characteristic")
//Test.assertEquals(tapCode(". ... ... .... ... .. ... .. . ..... .... .. . ... . ....."), "commerce")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Minimum Steps to a Palindrome

//tags: algorithms,strings

//url: https://edabit.com/challenge/zadc59oCm9Hj5xnrh

//Description:
//Given an incomplete palindrome as a string, return the minimum letters needed to be added on to the end to make the string a palindrome.
//Examples
//minPalindromeSteps("race") ➞ 3
//// Add 3 letters: "car" to make "racecar"
//
//minPalindromeSteps("mada") ➞ 1
//// Add 1 letter: "m" to make "madam"
//
//minPalindromeSteps("mirror") ➞ 3
//// Add 3 letters: "rim" to make "mirrorrim"
//Notes
//Trivially, words which are already palindromes should return 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(minPalindromeSteps("race"), 3)
//Test.assertEquals(minPalindromeSteps("mada"), 1)
//Test.assertEquals(minPalindromeSteps("mirror"), 3)
//Test.assertEquals(minPalindromeSteps("maa"), 1)
//Test.assertEquals(minPalindromeSteps("m"), 0)
//Test.assertEquals(minPalindromeSteps("rad"), 2)
//Test.assertEquals(minPalindromeSteps("madam"), 0)
//Test.assertEquals(minPalindromeSteps("radar"), 0)
//Test.assertEquals(minPalindromeSteps("www"), 0)
//Test.assertEquals(minPalindromeSteps("me"), 1)
//Test.assertEquals(minPalindromeSteps("rorr"), 2)
//Test.assertEquals(minPalindromeSteps("pole"), 3)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Big Integers, Big Errors

//tags: classes,conditions,functional_programming

//url: https://edabit.com/challenge/uKkGLkDZSAaRAxwya

//Description:
//In this challenge, you have to create a class to deal with Big Integers. It will use just a single static method called max, used to find the Big Integer with the highest value among the given data.
//You'll have to also manage a series of exceptions, establishing if the given input is valid:
//A given Big Integer will always be valid.
//A given integer lower or equal than the JS MAX_SAFE_INTEGER will be converted into a Big Integer (before calculating the max value).
//A given string containing an integer lower or equal than the JS MAX_SAFE_INTEGER will be converted into a Big Integer (before calculating the max value).
//If no input is given, the function must return null.
//If none of the previous conditions are satisfied, the given input is not valid.
//The max method applied to the input has to return:
//If the input is valid, the highest given value as a Big Integer.
//null if no input is given.
//A string "Big Error" if the input contains invalid data.
//Examples
//Big.max(1n, 10n, 5n) ➞ 10n
//
//Big.max("10", 5n, 1) ➞ 10n
//
//Big.max() ➞ null
//
//Big.max(2 ** 53 - 1) ➞ 9007199254740991n
//
//Big.max(2 ** 53) ➞ "Big Error"
//
//Big.max("10" / 3) ➞ "Big Error"
//
//Big.max("10" / 2) ➞ 5n
//
//Big.max(10 - 12, 10 - 10, 10 - 11) ➞ 0n
//
//Big.max(0n) ➞ 0n
//
//Big.max("") ➞ "Big Error"
//Note
//Reading the specific link about BigInt behaviors (look at the Resources tab) is highly recommended.
//Inputs and values will be given in various ways trying to represent a real scenario. For coding easiness, tests are grouped separately.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// Testing big integers
//Test.assertEquals(Big.max(1n, 5n, 3n), 5n)
//Test.assertEquals(Big.max(11n, 5n, 13n), 13n)
//Test.assertEquals(Big.max(-11n, -5n, -13n), -5n)
//Test.assertEquals(Big.max(...[8n ** 100n, 10n ** 100n, 9n ** 100n]), 10n ** 100n)
//Test.assertEquals(Big.max(-2n, -1n, 0n), 0n)
//​
//// Testing convertible values
//Test.assertEquals(Big.max(1, 2, 3), 3n)
//Test.assertEquals(Big.max(100 - 80, 19n, "2"), 20n)
//Test.assertEquals(Big.max(2 ** 53 - 1), BigInt(2 ** 53 - 1))
//Test.assertEquals(Big.max("50" * "8", "50" * "9", "50" / "10"), 450n)
//Test.assertEquals(Big.max("1", "3", "2"), 3n)
//​
//// Testing empty inputs
//Test.assertEquals(Big.max(...[]), null)
//Test.assertEquals(Big.max(), null)
//​
//// Testing invalid inputs
//Test.assertEquals(Big.max(""), "Big Error")
//Test.assertEquals(Big.max([]), "Big Error")
//Test.assertEquals(Big.max([11n, 5n, 13n]), "Big Error")
//Test.assertEquals(Big.max({a: 10n}), "Big Error")
//Test.assertEquals(Big.max("10n * 5n"), "Big Error")
//Test.assertEquals(Big.max(2 ** 53 - 1, 3 ** 50, 2 ** 54), "Big Error")

