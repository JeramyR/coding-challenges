

//title: Number to Google

//tags: algorithms,data_structures

//url: https://edabit.com/challenge/2o8GAmetGCkn5a68Y

//Description:
//Create a function that takes an array and returns a string.
//0 Repeat the actual decrypted value (using like this : 014 to repeat 14 times).
//Warning: When you start a repeat you can't stop it to add other numbers.
//1, 2, 3, 4 = g, o, l, e
//5 Corresponding to up case of letter before this.
//6 Add a point to the end.
//7 Change case of the first letter.
//8 Reverse the string.
//9 Clear the actual decrypted string.
//Examples
//numToGoogle(["12213467"]) ➞ "Google."
//
//numToGoogle(["12213467", "321"]) ➞ "Google.log"
//
//numToGoogle(["12213467", "321", "122906"]) ➞ "Google.log"
//
//numToGoogle(["15", "2502", "15", 345]) ➞ "GOOGLE"
//
//numToGoogle(["15", "2502", "15", 35, 45]) ➞ "GOOGLE"
//
//numToGoogle([15, 202, 1, 3, 4]) ➞ "Google"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(numToGoogle(["12213467"]), "Google.")
//Test.assertEquals(numToGoogle(["12213467", "321"]), "Google.log")
//Test.assertEquals(numToGoogle(["12213467", "321", "122906"]), "Google.log")
//Test.assertEquals(numToGoogle(["15", "2502", "15",345]), "GOOGLE")
//Test.assertEquals(numToGoogle(["15", "2502", "15",35,45]), "GOOGLE")
//Test.assertEquals(numToGoogle([15,202,1,3,4]), "Google")
//Test.assertEquals(numToGoogle(["1221348"]), "elgoog")
//Test.assertEquals(numToGoogle(["15345678"]), ".ELG")
//Test.assertEquals(numToGoogle(["218","6","12",6,1,2,]), "go.go.go")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Simon Says

//tags: arrays,numbers,strings

//url: https://edabit.com/challenge/DxAhwhR3cxiHK9E4d

//Description:
//Simon asks you to perform operations on an array of numbers that only he tells you. You should ignore all other instructions given. Create a function which evaluates an array of commands (written in plain English) if the command begins with Simon says. Return the result as an integer.
//Examples
//simonSays([
//  "Simon says add 4",
//  "Simon says add 6",
//  "Then add 5"
//]) ➞ 10
//
//simonSays([
//  "Susan says add 10",
//  "Simon says add 3",
//  "Simon says multiply by 8"
//]) ➞ 24
//
//simonSays([
//  "Firstly, add 4",
//  "Simeon says subtract 100"
//]) ➞ 0
//Notes
//If no instructions are given by Simon, return 0.
//For the sake of simplicity, there will be no command for dividing.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(simonSays([
//  "Simon says add 4",
//  "Simon says add 6",
//  "Then add 5"
//]), 10)
//​
//Test.assertSimilar(simonSays([
//  "Susan says add 10",
//  "Simon says add 3",
//  "Simon says multiply by 8",
//]), 24)
//​
//Test.assertSimilar(simonSays([
//  "Firstly, add 4",
//  "Simeon says subtract 100"
//]), 0)
//​
//Test.assertSimilar(simonSays(["Simeon says subtract 46", "Firstly, multiply by 3", "Simon says add 18", "Then subtract 50", "Next, multiply by 2", "Then add 17", "Simeon says multiply by 43", "Now add 13", "Now subtract 32", "Firstly, multiply by 35", "Simon says subtract 22", "Joshua says subtract 48", "Simon says subtract 45", "Simon says add 7", "Simon says add 25", "Simeon says add 13"]), -17)
//Test.assertSimilar(simonSays(["Firstly, multiply by 19", "Simon says add 6", "Next, add 29", "Simon says add 50", "Joshua says multiply by 27"]), 56)
//Test.assertSimilar(simonSays(["Now add 44", "Now multiply by 27", "Simon says multiply by 30", "Now subtract 4", "Then multiply by 45"]), 0)
//Test.assertSimilar(simonSays(["Firstly, multiply by 26", "Simon says add 13", "Simeon says add 21"]), 13)
//Test.assertSimilar(simonSays(["Now subtract 41", "Now add 30", "Simon says multiply by 46", "Firstly, subtract 37", "Now multiply by 6", "Then multiply by 19", "Simon says add 23", "Simon says subtract 28"]), -5)
//Test.assertSimilar(simonSays(["Sarah says subtract 36", "Sieon says add 25", "Now add 24", "Sarah says add 27", "Then multiply by 8", "Firstly, add 35", "Sarah says add 21"]), 0)
//Test.assertSimilar(simonSays(["Simon says subtract 19", "Firstly, subtract 26", "Now add 48", "Then subtract 22", "Now subtract 15", "Then add 1", "Simon says add 28", "Firstly, multiply by 22", "Then add 44", "Simeon says multiply by 16", "Then multiply by 50", "Simon says subtract 26", "Firstly, add 49"]), -17)
//Test.assertSimilar(simonSays(["Now add 48", "Simeon says subtract 30", "Firstly, subtract 46", "Simon says subtract 21", "Sieon says add 32", "Joshua says add 45", "Now subtract 4", "Then multiply by 5", "Next, add 36"]), -21)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Are Pairs Sufficient for a Clear Ordering?

//tags: arrays,logic

//url: https://edabit.com/challenge/9cwxZNTWByMeEQAej

//Description:
//Create a function that returns true if an array of pairs are sufficient for a clear ordering of all items.
//To illustrate:
//clearOrdering([["D", "A"], ["C", "B"], ["A", "C"]]) ➞ true
//// Since unequivocally: "D" < "A" < "C" < "B"
//On the other hand:
//clearOrdering([["D", "A"], ["B", "A"], ["C", "D"]]) ➞ false
//// Since we know that "C" < "D" < "A", and we know "B" < "A"
//// but we don't know anything about "B"s relationship with "C" or "D".
//Examples
//clearOrdering([["S", "T"], ["T", "U"], ["U", "V"]]) ➞ true
//
//clearOrdering([["T", "S"], ["T", "U"], ["U", "V"], ["V", "W"]]) ➞ false
//Notes
//See Comments for a good visualization of the question.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(clearOrdering([["D", "A"], ["C", "B"], ["A", "C"]]), true)
//Test.assertEquals(clearOrdering([["D", "A"], ["B", "A"], ["C", "D"]]), false)
//Test.assertEquals(clearOrdering([["S", "T"], ["T", "U"], ["U", "V"]]), true)
//Test.assertEquals(clearOrdering([["T", "S"], ["T", "U"], ["U", "V"], ["V", "W"]]), false)
//Test.assertEquals(clearOrdering([["A", "D"], ["C", "D"]]), false)
//Test.assertEquals(clearOrdering([["A", "D"], ["D", "C"]]), true)
//Test.assertEquals(clearOrdering([["c", "d"], ["a", "b"], ["b", "c"]]), true)
//Test.assertEquals(clearOrdering([["d", "c"], ["a", "b"], ["b", "c"]]), false)
//Test.assertEquals(clearOrdering([["a", "b"], ["b", "c"], ["c", "d"], ["e", "f"], ["d", "e"]]), true)
//Test.assertEquals(clearOrdering([["b", "a"], ["b", "c"], ["c", "d"], ["e", "f"], ["d", "e"]]), false)

