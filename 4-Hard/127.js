

//title: Look-And-Say Sequence

//tags: language_fundamentals,strings

//url: https://edabit.com/challenge/TCfRGQMcwYuCFq3nA

//Description:
//The look-and-say sequence is generated by describing each group of identical digits in the previous term. If we start at "1", the first five terms in the sequence are:
//"1" = "one 1" = "11"
//"11" = "two 1's" = "21"
//"21" = "one 2, one 1" = "1211"
//"1211" = "one 1, one 2, two 1's" = "111221"
//"111221" = "three 1's, two 2's, one 1" = "312211"
//Given a term (as a string), return the next term in the sequence.
//Examples
//lookAndSay("1211") ➞ "111221"
//
//lookAndSay("111221") ➞ "312211"
//
//lookAndSay("31131211131221") ➞ "13211311123113112211"
//Notes
//Terms will only include the digits 1, 2, and 3.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(lookAndSay("13112221"), "1113213211")
//Test.assertEquals(lookAndSay("1113213211"), "31131211131221")
//Test.assertEquals(lookAndSay("31131211131221"), "13211311123113112211")
//Test.assertEquals(lookAndSay("13211311123113112211"), "11131221133112132113212221")
//Test.assertEquals(lookAndSay("11131221133112132113212221"), "3113112221232112111312211312113211")
//Test.assertEquals(lookAndSay("3113112221232112111312211312113211"), "1321132132111213122112311311222113111221131221")
//Test.assertEquals(lookAndSay("1321132132111213122112311311222113111221131221"), "11131221131211131231121113112221121321132132211331222113112211")
//Test.assertEquals(lookAndSay("11131221131211131231121113112221121321132132211331222113112211"), "311311222113111231131112132112311321322112111312211312111322212311322113212221")
//Test.assertEquals(lookAndSay("311311222113111231131112132112311321322112111312211312111322212311322113212221"), "132113213221133112132113311211131221121321131211132221123113112221131112311332111213211322211312113211")
//Test.assertEquals(lookAndSay("132113213221133112132113311211131221121321131211132221123113112221131112311332111213211322211312113211"), "11131221131211132221232112111312212321123113112221121113122113111231133221121321132132211331121321231231121113122113322113111221131221")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Lychrel Numbers

//tags: algebra,math,numbers

//url: https://edabit.com/challenge/d8gGWEAJuxaPrGoiT

//Description:
//The following is the Lychrel test.
//Start with any positive number. Add the number with the number formed by reversing its digits. Is the sum a palindrome? If not, repeat the process.
//For most numbers, a palindrome is produced after a few iterations (7 or fewer) of the process above. Numbers that never reach a palindrome are called Lychrel numbers. No number in base 10 has been proven to be a Lychrel number, but numbers that don't produce palindromes after an unusually high number of iterations of the reverse-and-add process are said to be Lychrel candidates
//Create a function that takes a number and returns true if it is a Lychrel candidate. If it isn't, return the number of reverse-and-add iterations it takes to produce a palindrome. For this challenge, the threshold for a Lychrel candidate is >=500 iterations.
//Examples
//lychrel(33) ➞ 0
//// Already a palindrome.
//
//lychrel(65) ➞ 1
//// 65+56 -> 121
//
//lychrel(348) ➞ 3
//// 348+843 -> 1191+1911 -> 3102+2013 -> 5115
//
//lychrel(295) ➞ true
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(lychrel(33), 0)
//Test.assertEquals(lychrel(65), 1)
//Test.assertEquals(lychrel(348), 3)
//Test.assertEquals(lychrel(196), true)
//Test.assertEquals(lychrel(89), 24)
//Test.assertEquals(lychrel(7582), 4)
//Test.assertEquals(lychrel(1945), true)
//Test.assertEquals(lychrel(3673), true)
//Test.assertEquals(lychrel(9485367), 2)
//Test.assertEquals(lychrel(695), 3)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: ABA Integers: the Undulating Numbers

//tags: conditions,numbers,regex,validation

//url: https://edabit.com/challenge/sysGYNhR6ZhKBFt9D

//Description:
//In this challenge, you have to establish if a given number is undulating. A number n is undulating when the following conditions are all true:
//n has at least three digits.
//n has exactly two different digits.
//The two digits of n are alternating without repeating groups.
//If we think at the first digit of an undulating number as an "A", and to its second digit as a "B", we can notice a sequence of the form "ABA", that can repeat infinite times and ends either with an "A" or with a "B", but without clusters of "AA" or "BB" into it.
//Given a positive integer n, implement a function that returns true if n is an Undulating number, or false if it's not.
//Examples
//isUndulating(121) ➞ true
//// A = 1, B = 2
//// The sequence ABA is valid
//
//isUndulating(373737) ➞ true
//// A = 3, B = 7
//// The sequence ABABABAB is valid
//
//isUndulating(12) ➞ false
//// Less than three digits
//
//isUndulating(12122) ➞ false
//// The sequence ABABB is not valid
//
//isUndulating(85856) ➞ false
//// More than two different digits
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isUndulating(121), true, "Example #1")
//Test.assertEquals(isUndulating(373737), true, "Example #2")
//Test.assertEquals(isUndulating(12), false, "Example #3")
//Test.assertEquals(isUndulating(12122), false, "Example #4")
//Test.assertEquals(isUndulating(85856), false, "Example #5")
//Test.assertEquals(isUndulating(949494), true)
//Test.assertEquals(isUndulating(494), true)
//Test.assertEquals(isUndulating(363738), false)
//Test.assertEquals(isUndulating(3663), false)
//Test.assertEquals(isUndulating(81818181), true)

