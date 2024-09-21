

//title: Regex Series: Initials

//tags: regex,strings

//url: https://edabit.com/challenge/HL2sXjjBHgKZJYQJy

//Description:
//Write a regular expression that checks if a string is a valid initial. Valid initials either look like (ex. for Chandler Muriel Bing):
//C. B.
//C. M. B.
//Rules for a valid initial:
//Each letter must be upper case.
//Each letter must be immediately followed by a period.
//There must be exactly one space separating each letter-period pair.
//Leading or trailing whitespaces are valid.
//Examples
//"C. B." ➞ true
//
//"    C. B." ➞ true
//// Leading and trailing spaces are OK!
//
//"C. B. k." ➞ false
//// One of the initials is lower cased 
//
//"C B" ➞ false
//// Missing a dot to immediately follow. 
//Notes
//This challenge is designed to use RegEx only.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//function validate(name) {
//  return x.test(name)
//}
//​
//Test.expect(validate("R. T."), "R. T. is a valid initial.")
//Test.expect(validate("R. K. T."), "R. K. T. is a valid initial.")
//​
//Test.expect(validate(" R. T."), " R. T. is valid with leading spaces.")
//Test.expect(validate(" R. T.    "), " R. T. is valid with trailing spaces.")
//Test.expect(validate("    R. K. T."), " R. K. T. is valid with leading spaces.")
//Test.expect(validate("R. K. T. "), " R. K. T. is valid with trailing spaces.")
//​
//Test.expect(!validate("RT. K."), "RK. T. Invalid. Initials must be one character only.")
//Test.expect(!validate("R. K. T. B."), "R. K. T. B. Invalid. Two or three names only.")
//Test.expect(!validate("r. k."), "r. k. Invalid. Initials must be uppercased.")
//Test.expect(!validate("R.  K."), "R.  K. Invalid. There must be exactly one space between characters.")
//Test.expect(!validate("R. K"), "R. K Invalid. Missing a period.")
//Test.expect(!validate("R . K."), "R . K. Invalid. Dots must immediately follow initials.")
//Test.expect(!validate(".R K."), ".R K. Invalid. Dots should go after initials.")
//Test.expect(!validate("3. K."), "3. K. Invalid. Initials can only be composed of letters.")
//Test.expect(!validate("R, K."), "R, K. Invalid. Only periods can follow initials.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Zygodromes

//tags: numbers,validation

//url: https://edabit.com/challenge/7bJApSrKyv72yWa2d

//Description:
//A number is Zygodrome if it can be partitioned into clusters of repeating digits with a length equals or greater than two (as to say that repeating digits need to be placed as an adjacent pair or a greater group, and that no single digits are allowed).
//Given a non-negative integer num, implement a function that returns true if num is a Zygodrome number, or false otherwise.
//Examples
//isZygodrome(11) ➞ true
//// 11 is a pair of repeated digits
//
//isZygodrome(33322) ➞ true
//// 333 is a triplet of repeated digits, and 22 is a pair
//
//isZygodrome(5) ➞ false
//// 5 is a single digit, it doesn't form a pair
//
//isZygodrome(1001) ➞ false
//// 00 is a pair, but the two 1's are not adjacent
//Notes
//Trivia: the number 9997777 is the only known Zygodrome prime whose index in the Zygodromes sequence (664444) is a prime in turn.
//You can expect only non-negative integers as given input, without exceptions to handle.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isZygodrome(11), true)
//Test.assertEquals(isZygodrome(222), true)
//Test.assertEquals(isZygodrome(223), false)
//Test.assertEquals(isZygodrome(1001), false)
//Test.assertEquals(isZygodrome(1100), true)
//Test.assertEquals(isZygodrome(11122), true)
//Test.assertEquals(isZygodrome(3344466777), true)
//Test.assertEquals(isZygodrome(33444667778), false)
//Test.assertEquals(isZygodrome(8866611229999), true)
//Test.assertEquals(isZygodrome(9977866655522), false)
//Test.assertEquals(isZygodrome(99999999), true)
//Test.assertEquals(isZygodrome(0), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Reverse Coding Challenge #5

//tags: logic,math,numbers

//url: https://edabit.com/challenge/Mq6LeA75xJjzvdthh

//Description:
//This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.
//Your task is to create a function that, when fed the inputs below, produce the sample outputs shown.
//Examples
//832 ➞ 594
//
//51 ➞ 36
//
//7977 ➞ 198
//
//1 ➞ 0
//
//665 ➞ 99
//
//149 ➞ 0
//Notes
//If you get stuck, see Comments for a hint.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(mysteryFunc(832), 594)
//Test.assertEquals(mysteryFunc(51), 36)
//Test.assertEquals(mysteryFunc(7977), 198)
//Test.assertEquals(mysteryFunc(1), 0)
//Test.assertEquals(mysteryFunc(665), 99)
//Test.assertEquals(mysteryFunc(149), 0)

