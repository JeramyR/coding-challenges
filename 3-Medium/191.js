

//title: RegEx: Boundary Assertions VII

//tags: formatting,language_fundamentals,regex

//url: https://edabit.com/challenge/HG93JYjse2r3mb9n3

//Description:
//You are given the task to fetch all positive numbers from lists. You discover that the lists are in string format and the numbers are separated by spaces. Someone has already created a function to output positive numbers but they just need a RegEx to make it work.
//const list = "23 -43 34 -44 45 -55 56"
//
//function positiveNumbers(list) {
//  const REGEXP = /* YOU FILL IN */
//  return res.filter( x => REGEXP.test(x))
//}
//
//positiveNumbers(list) // should return ["23", "34", "45", "56"]
//Write the regular expression to make the function work. You are required to use a negative lookbehind assertion in your expression.
//Notes
//Check the Resources tab for details on lookbehind assertions.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const str1 = "23 234 -2 334 -3"
//const str2 = "1 2 -3 -4 5"
//const str3 = "234 -3 -5 3"
//​
//const validate = (REGEXP) => {
//   if(!/\(\?\<\!/.test(String(REGEXP))) return () => "negative lookbehind required"
//   return function testReg(str) {
//     return str.match(REGEXP)
//   }
//}
//​
//const testExp = validate(REGEXP)
//​
//Test.assertNotEquals(testExp(str1), "negative lookbehind required", "You are required to use a negative lookbehind in your expression.")
//Test.assertSimilar(testExp(str1), ["23", "234", "334"])
//Test.assertSimilar(testExp(str2), ["1", "2", "5"])
//Test.assertSimilar(testExp(str3), ["234", "3"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the First Non-Repeated Character

//tags: interview,language_fundamentals,loops,strings

//url: https://edabit.com/challenge/NyQF2kPYt3YHdhhjn

//Description:
//Create a function that accepts a string as an argument and returns the first non-repeated character.
//Examples
//firstNonRepeatedCharacter("g") ➞ "g"
//
//firstNonRepeatedCharacter("it was then the frothy word met the round night") ➞ "a"
//
//firstNonRepeatedCharacter("the quick brown fox jumps then quickly blows air") ➞ "f"
//
//firstNonRepeatedCharacter("hheelloo") ➞ false
//
//firstNonRepeatedCharacter("") ➞ false
//Notes
//An empty string should return false.
//If every character repeats, return false.
//Don't worry about case sensitivity or non-alphanumeric characters.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(firstNonRepeatedCharacter("the quick brown fox jumps then quickly blows air"), "f")
//Test.assertEquals(firstNonRepeatedCharacter("the misty examination pleases into the drab county"), "x")
//Test.assertEquals(firstNonRepeatedCharacter("hheelloo"), false, "Return false when every character repeats.")
//Test.assertEquals(firstNonRepeatedCharacter("it was then the darling top met the whispering wing"), "d")
//Test.assertEquals(firstNonRepeatedCharacter(""), false, "An empty string should return false.")
//Test.assertEquals(firstNonRepeatedCharacter("it was then the frothy word met the round night"), "a")
//Test.assertEquals(firstNonRepeatedCharacter("is the remind zone better than the section"), "m")
//Test.assertEquals(firstNonRepeatedCharacter("b"), "b")
//Test.assertEquals(firstNonRepeatedCharacter("what if the brainy boss ate the afternoon"), "w")
//Test.assertEquals(firstNonRepeatedCharacter("the sympathetic mixture rejects into the leafy objective"), "p")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Censor Words from Array

//tags: formatting,language_fundamentals,strings

//url: https://edabit.com/challenge/vxourdkAeRR3fm7H8

//Description:
//Create a function that takes a string str and censors any word from a given array arr. The text removed must be replaced by the given character char.
//Examples
//censorString("Today is a Wednesday!", ["Today", "a"], "-") ➞ "----- is - Wednesday!"
//
//censorString("The cow jumped over the moon.", ["cow", "over"], "*"), "The *** jumped **** the moon.")
//
//censorString("Why did the chicken cross the road?", ["Did", "chicken", "road"], "*") ➞ "Why *** the ******* cross the ****?"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(censorString("The cow jumped over the moon.", ["cow", "over"], "*"), "The *** jumped **** the moon.")
//Test.assertEquals(censorString("Why do my cats keep eating grass?", ["Why", "keep", "eating"], "!"), "!!! do my cats !!!! !!!!!! grass?")
//Test.assertEquals(censorString("How do I stop myself from using python!?", ["do", "stop", "using"], "-"), "How -- I ---- myself from ----- python!?")
//Test.assertEquals(censorString("If statements are pretty fun to use.", ["statements", "pretty", "to"], "~~"), "If ~~~~~~~~~~~~~~~~~~~~ are ~~~~~~~~~~~~ fun ~~~~ use.")
//Test.assertEquals(censorString("I'm dyslexic, but that deos'tn matter!", ["that", "matter!"], "?"), "I'm dyslexic, but ???? deos'tn ???????")
//Test.assertEquals(censorString("I should be doing work but I am doing this instead.", ["should", "but", "this"], "*"), "I ****** be doing work *** I am doing **** instead.")

