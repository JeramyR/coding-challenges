

//title: Friday the 13th

//tags: dates,language_fundamentals,validation

//url: https://edabit.com/challenge/98CAqzDToJdx5LGFm

//Description:
//Given the month and year as numbers, return whether that month contains a Friday 13th.
//Examples
//hasFriday13(3, 2020) ➞ true
//
//hasFriday13(10, 2017) ➞ true
//
//hasFriday13(1, 1985) ➞ false
//Notes
//January will be given as 1, February as 2, etc ...

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(hasFriday13(3, 2020), true)
//Test.assertEquals(hasFriday13(10, 2017), true)
//Test.assertEquals(hasFriday13(1, 1985), false)
//Test.assertEquals(hasFriday13(5, 1619), false)
//Test.assertEquals(hasFriday13(6, 1614), true)
//Test.assertEquals(hasFriday13(8, 1767), false)
//Test.assertEquals(hasFriday13(6, 1589), false)
//Test.assertEquals(hasFriday13(2, 2015), true)
//Test.assertEquals(hasFriday13(3, 2015), true)
//Test.assertEquals(hasFriday13(11, 2015), true)
//Test.assertEquals(hasFriday13(2, 1759), false)
//Test.assertEquals(hasFriday13(8, 1612), false)
//Test.assertEquals(hasFriday13(8, 1612), false)
//Test.assertEquals(hasFriday13(10, 2029), false)
//Test.assertEquals(hasFriday13(1, 1590), false)
//Test.assertEquals(hasFriday13(7, 1812), false)
//Test.assertEquals(hasFriday13(1, 1785), false)
//Test.assertEquals(hasFriday13(11, 1961), false)
//Test.assertEquals(hasFriday13(9, 1706), false)
//Test.assertEquals(hasFriday13(5, 2016), true)
//Test.assertEquals(hasFriday13(11, 2020), true)
//Test.assertEquals(hasFriday13(1, 2023), true)
//Test.assertEquals(hasFriday13(10, 2023), true)
//Test.assertEquals(hasFriday13(2, 2043), true)
//Test.assertEquals(hasFriday13(4, 2043), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Longest Sequence of Consecutive Zeroes

//tags: language_fundamentals,loops,strings

//url: https://edabit.com/challenge/5zwzw2AFC95u3ZLtm

//Description:
//Write a function that returns the longest sequence of consecutive zeroes in a binary string.
//Examples
//longestZero("01100001011000") ➞ "0000"
//
//longestZero("100100100") ➞ "00"
//
//longestZero("11111") ➞ ""
//Notes
//If no zeroes exist in the input, return an empty string.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(longestZero("01100001011000"), "0000")
//Test.assertEquals(longestZero("100100100"), "00")
//Test.assertEquals(longestZero("111101"), "0")
//Test.assertEquals(longestZero("1000000000011101"), "0000000000")
//Test.assertEquals(longestZero("100001110000100000"), "00000")
//Test.assertEquals(longestZero("101001101"), "00")
//Test.assertEquals(longestZero("101010101"), "0")
//Test.assertEquals(longestZero("1001001"), "00")
//Test.assertEquals(longestZero("111111"), "")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Stripping a Sentence Down

//tags: formatting,language_fundamentals,strings

//url: https://edabit.com/challenge/tgSGGGbS6x9foafg9

//Description:
//Create a function which takes in a sentence str and a string of characters chars and return the sentence but with all the specified characters removed.
//Examples
//stripSentence("the quick brown fox jumps over the lazy dog", "aeiou") ➞ "th qck brwn fx jmps vr th lzy dg"
//
//stripSentence("the hissing snakes sinisterly slither across the rustling leaves", "s") ➞ "the hiing nake initerly lither acro the rutling leave"
//
//stripSentence("gone, reduced to atoms", "go, muscat nerd") ➞ ""
//Notes
//You may be asked to remove punctuation and spaces.
//Return an empty string if every character is specified (see example #3).
//All tests will be in lowercase.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(stripSentence("the quick brown fox jumps over the lazy dog", "aeiou"), "th qck brwn fx jmps vr th lzy dg")
//Test.assertEquals(stripSentence("the hissing snakes sinisterly slither across the rustling leaves", "s"), "the hiing nake initerly lither acro the rutling leave")
//Test.assertEquals(stripSentence("gone, reduced to atoms", "go, muscat nerd"), "")
//Test.assertEquals(stripSentence("uh oh i made a typo please fixq it for me", "q"), "uh oh i made a typo please fix it for me")
//Test.assertEquals(stripSentence("sphinx of black quartz, judge my vow!", "sgwj"), "phinx of black quartz, ude my vo!")
//Test.assertEquals(stripSentence("exclamation! marks! and! the! letter! x! arxxxxxxxxexxxxxx! rxxexxxallxxxxy! anxxxnoxyixxxxxxxngxxxxxx!xx", "x!"), "eclamation marks and the letter  are really annoying")
//Test.assertEquals(stripSentence("!!!!!!!!!!!!!!!!!!!!!!!", "?"), "!!!!!!!!!!!!!!!!!!!!!!!")
//Test.assertEquals(stripSentence("cat rat eat pat eat sat", "at"), "c r e p e s")
//Test.assertEquals(stripSentence("abc", "def"), "abc")
//Test.assertEquals(stripSentence("allegro andante", "aaaaaaaaa"), "llegro ndnte")
//​
//// made by @Joshua Señoron

