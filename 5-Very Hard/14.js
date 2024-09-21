

//title: Majority Vote

//tags: arrays,loops

//url: https://edabit.com/challenge/aewSLr2r2LMSDhPxf

//Description:
//Create a function that returns the majority vote in an array. A majority vote is an element that occurs > N/2 times in an array (where N is the length of the array).
//Examples
//majorityVote(["A", "A", "B"]) ➞ "A"
//
//majorityVote(["A", "A", "A", "B", "C", "A"]) ➞ "A"
//
//majorityVote(["A", "B", "B", "A", "C", "C"]) ➞ null
//Notes
//The frequency of the majority element must be strictly greater than 1/2.
//If there is no majority element, return null.
//If the array is empty, return null.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(majorityVote(["A", "B", "B", "B", "A", "A"]), null)
//Test.assertEquals(majorityVote(["B", "B", "B"]), "B")
//Test.assertEquals(majorityVote(["A", "B", "B"]), "B")
//Test.assertEquals(majorityVote(["A", "A", "B"]), "A")
//Test.assertEquals(majorityVote(["A", "A", "A", "B", "C", "A"]), "A")
//Test.assertEquals(majorityVote(["B", "A", "B", "B", "C", "A", "B", "B"]), "B")
//Test.assertEquals(majorityVote(["A", "B", "B", "A", "C", "C"]), null)
//Test.assertEquals(majorityVote(["A", "B"]), null)
//Test.assertEquals(majorityVote(["A"]), "A")
//Test.assertEquals(majorityVote([]), null)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Making a Box 2.0!

//tags: formatting,validation

//url: https://edabit.com/challenge/jXJZoEXNF5jBvc7j4

//Description:
//This is based on Helen Yu's Making a Box challenge. This challenge is the same execpt that instead of an array of strings, your function should output a matrix of characters.
//Examples
//charBox(1) ➞ [
//  ["#"]
//]
//
//charBox(4) ➞ [
//  ["#", "#", "#", "#"],
//  ["#", " ", " ", "#"],
//  ["#", " ", " ", "#"],
//  ["#", "#", "#", "#"]
//]
//
//charBox(2) ➞ [
//  ["#", "#"],
//  ["#", "#"]
//]
//Notes
//As an added bonus, try making charBox(0) output [[]] and make any strings, non-integers, and negative numbers output -1.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// standard cases
//Test.assertSimilar(charBox(1), [["#"]])
//Test.assertSimilar(charBox(2), [["#", "#"], ["#", "#"]])
//Test.assertSimilar(charBox(4), [["#", "#", "#", "#"], ["#", " ", " ", "#"], ["#", " ", " ", "#"], ["#", "#", "#", "#"]])
//Test.assertSimilar(charBox(3), [["#", "#", "#"], ["#", " ", "#"], ["#", "#", "#"]])
//Test.assertSimilar(charBox(10), [["#", "#", "#", "#", "#", "#", "#", "#", "#", "#"], ["#", " ", " ", " ", " ", " ", " ", " ", " ", "#"], ["#", " ", " ", " ", " ", " ", " ", " ", " ", "#"], ["#", " ", " ", " ", " ", " ", " ", " ", " ", "#"], ["#", " ", " ", " ", " ", " ", " ", " ", " ", "#"], ["#", " ", " ", " ", " ", " ", " ", " ", " ", "#"], ["#", " ", " ", " ", " ", " ", " ", " ", " ", "#"], ["#", " ", " ", " ", " ", " ", " ", " ", " ", "#"], ["#", " ", " ", " ", " ", " ", " ", " ", " ", "#"], ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#"]])
//// special cases
//Test.assertSimilar(charBox(0), [[]], "Value at 0 should be empty")
//Test.assertSimilar(charBox("Hi"), -1, "String values should output -1")
//Test.assertSimilar(charBox(.23), -1, "Decimal valus should output -1")
//Test.assertSimilar(charBox(-4), -1, "Negative values should output -1")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: A Capital Challenge

//tags: formatting,strings

//url: https://edabit.com/challenge/gjKemfXwedir9y7D4

//Description:
//Given two strings, s1 and s2, select only the characters in each string where the character in the same position in the other string is in uppercase. Return these as a single string.
//To illustrate, given the strings s1 = "heLLo" and s2 = "GUlp", we select the letters "he" from s1, because "G" and "U" are uppercase. We then select "lp" from s2, because "LL" is in uppercase. Finally, we join these together and return "help".
//Examples
//selectLetters("heLLO", "GUlp") ➞ "help"
//
//selectLetters("1234567", "XxXxX")  ➞ "135"
//
//selectLetters("EVERYTHING", "SomeThings") ➞  "EYSomeThings"
//Notes
//The strings don't have to be the same length.
//Strings can contain non-alphabetic characters.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(selectLetters("heLLO", "GUlp"), "help")
//Test.assertEquals(selectLetters("1234567", "XxXxX"), "135")
//Test.assertEquals(selectLetters("EVERYTHING", "SomeThings"), "EYSomeThings")
//Test.assertEquals(selectLetters("PaTtErN", "pAtTeRn"), "atrpten")
//Test.assertEquals(selectLetters("nothing", "nothing"), "")
//Test.assertEquals(selectLetters("What do you think of it so far?", "RUBBISH!"), "What doR")

