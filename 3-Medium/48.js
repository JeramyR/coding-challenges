

//title: Finish the Sentence You`re On!

//tags: loops,strings

//url: https://edabit.com/challenge/MarKs2qWR3cMHZjxy

//Description:
//POV: You are in an exam and time has just run out. While the teacher's back is turned, you hastily take the opportunity to finish scribbling down the last few words of the conclusion.
//For this challenge, it takes 0.5 seconds to write a character (not including spaces). Given the full sentence and the unfinished sentence as inputs, return the time it takes to finish writing in seconds.
//Worked Example
//timeToFinish(
//  "And so brings my conclusion to its conclusion.",
//  "And so brings my conclusion to"
//) ➞ 7
//
//// "its" has 3 characters
//// "conclusion." has 11 characters, including punctuation.
//// 11 + 3 = 14
//// 14 x 0.5 = 7
//// Remember not to include spaces.
//Examples
//timeToFinish(
//  "And so brings my conclusion to its conclusion.",
//  "And so brings my conclusion to its conclus"
//) ➞ 2
//
//timeToFinish(
//  "As a result, my point is still valid.",
//  "As a result, my"
//) ➞ 9
//
//timeToFinish(
//  "Thank you for reading my essay.",
//  "T"
//) ➞ 12.5
//Notes
//The unfinished sentence is always found at the start of a complete sentence.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(timeToFinish(
//  "And so brings my conclusion to its conclusion.",
//  "And so brings my conclusion to its conclus"
//), 2)
//​
//Test.assertEquals(timeToFinish(
//  "As a result, my point is still valid.",
//  "As a result, my"
//), 9)
//​
//Test.assertEquals(timeToFinish(
//  "Thank you for reading my essay.",
//  "T"
//), 12.5)
//​
//Test.assertEquals(timeToFinish(
//  "Therefore, there was over there their only answer.",
//  "Therefore, there w"
//), 13.5)
//​
//Test.assertEquals(timeToFinish(
//  "And there, I end this thesis with a rock solid conclusion.",
//  "And there, I end this thesis with a rock solid conclusion."
//), 0)
//​

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Neutralisation

//tags: conditions,loops,strings

//url: https://edabit.com/challenge/HzxTqSHLmRC3zEfXb

//Description:
//Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:
//When positives and positives interact, they remain positive.
//When negatives and negatives interact, they remain negative.
//But when negatives and positives interact, they become neutral, and are shown as the number 0.
//Worked Example
//neutralise("+-+", "+--") ➞ "+-0"
//// Compare the first characters of each string, then the next in turn.
//// "+" against a "+" returns another "+".
//// "-" against a "-" returns another "-".
//// "+" against a "-" returns "0".
//// Return the string of characters.
//Examples
//neutralise("--++--", "++--++") ➞ "000000"
//
//neutralise("-+-+-+", "-+-+-+") ➞ "-+-+-+"
//
//neutralise("-++-", "-+-+") ➞ "-+00"
//Notes
//The two strings will be the same length.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(neutralise("--++--", "++--++"), "000000")
//Test.assertEquals(neutralise("-+-+-+", "-+-+-+"), "-+-+-+")
//Test.assertEquals(neutralise("-++-", "-+-+"), "-+00")
//Test.assertEquals(neutralise("--++", "++++"), "00++")
//Test.assertEquals(neutralise("+++--+---", "++----++-"), "++0--000-")
//Test.assertEquals(neutralise("-----", "-----"), "-----")
//Test.assertEquals(neutralise("-+", "++"), "0+")
//Test.assertEquals(neutralise("--", "-+"), "-0")
//Test.assertEquals(neutralise("-++", "+--"), "000")
//Test.assertEquals(neutralise("++-++--++-", "-+++-++-++"), "0+0+0000+0")
//Test.assertEquals(neutralise("-++-+-++-", "+-++++---"), "00+0+000-")
//Test.assertEquals(neutralise("---++-+--", "-+++--++-"), "-00+0-+0-")
//Test.assertEquals(neutralise("+-----+++-", "--+-+-++--"), "0-0-0-++0-")
//Test.assertEquals(neutralise("+-----+-", "---++-++"), "0--00-+0")
//Test.assertEquals(neutralise("-+--+-+---", "-+--+-+-+-"), "-+--+-+-0-")
//Test.assertEquals(neutralise("+-+", "-++"), "00+")
//Test.assertEquals(neutralise("-++", "-+-"), "-+0")
//Test.assertEquals(neutralise("---+", "-+++"), "-00+")
//Test.assertEquals(neutralise("+--", "+--"), "+--")
//Test.assertEquals(neutralise("--+++-+-", "+++++---"), "00+++-0-")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Replace Vowel with Another Character

//tags: language_fundamentals,regex,strings

//url: https://edabit.com/challenge/xuRjEej9F9ZG3vg7M

//Description:
//Create a function that takes a string and replaces the vowels with another character.
//a = 1
//e = 2
//i = 3
//o = 4
//u = 5
//Examples
//replaceVowel("karachi") ➞ "k1r1ch3"
//
//replaceVowel("chembur") ➞ "ch2mb5r"
//
//replaceVowel("khandbari") ➞ "kh1ndb1r3"
//Notes
//The input will always be in lowercase.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(replaceVowel("karachi"), "k1r1ch3")
//Test.assertEquals(replaceVowel("dang"), "d1ng")
//Test.assertEquals(replaceVowel("aen"), "12n")
//Test.assertEquals(replaceVowel("chembur"), "ch2mb5r")
//Test.assertEquals(replaceVowel("khandbari"), "kh1ndb1r3")
//Test.assertEquals(replaceVowel("thamel"), "th1m2l")

