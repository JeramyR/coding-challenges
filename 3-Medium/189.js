

//title: RegEx XXII : Unicode property escapes

//tags: formatting,regex

//url: https://edabit.com/challenge/evCmPj8YLm2okcunf

//Description:
//Unicode property escapes match characters based on their Unicode properties - Binary ("boolean-like") or non-binary. They can be used to match emojis, punctuations, letters (even letters from specific languages or scripts), etc.
//const sentence = "A ticket to 大阪 costs ¥2000 👌."
//
//sentence.match(/\p{Emoji_Presentation}/gu) ➞ ["👌"]
//Note: For Unicode property escapes to work, a regular expression must use the u flag which indicates a string must be considered as a series of Unicode code points. See also RegExp.prototype.unicode.
//Note: Some Unicode properties encompasses much more characters than some character classes (such as \w which matches only latin letters, a to z) but the latter is better supported among browsers (as of January 2020).
//Match all words in the nonEnglishText using a unicode property escape.
//const nonEnglishText = "Приключения Алисы в Стране чудес"
//
//const regex = /\w+/gu
//nonEnglishText.match(regex) ➞ null, \w doesn't work with non english text
//
//const regexpBMPWord = /([\u0000-\u0019\u0021-\uFFFF])+/gu
//nonEnglishText.match(regexpBMPWord) ➞ [ 'Приключения', 'Алисы', 'в', 'Стране', 'чудес' ], this works
//
//const regexpUPE = /YOUR SOLUTION HERE/gu
//nonEnglishText.match(regexpUPE) ➞ [ 'Приключения', 'Алисы', 'в', 'Стране', 'чудес' ], an easier way
//Notes
//You will more than likely have to check the references in the Resource tab to solve.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const str = "Приключения Алисы в Стране чудес";
//​
//const validate = (regexpUPE) => {
//   if(!/\p\{/.test(String(regexpUPE))) return () => "invalid" 
//   return function testReg(str) {
//     return str.match(regexpUPE)
//   }
//}
//​
//const testExp = validate(regexpUPE)
//​
//Test.assertNotEquals(testExp(str), "invalid", "You are required to use a unicode property escape in your expression")
//Test.assertSimilar(testExp(str), [ 'Приключения', 'Алисы', 'в', 'Стране', 'чудес' ])
//​
//// credits to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Neighboring Letters

//tags: formatting,higher_order_functions,language_fundamentals,loops,validation

//url: https://edabit.com/challenge/mHP2n9i4XERvCF3C8

//Description:
//Create a function that takes a string and checks if every single character is preceded and followed by a character adjacent to it in the english alphabet.
//Example: "b" should be preceded and followed by ether "a" or "c" (abc || cba || aba || cbc == true but abf || zbc == false).
//Examples
//neighboring("aba") ➞ true
//
//neighboring("abcdedcba") ➞ true
//
//neighboring("efghihfe") ➞ false
//
//neighboring("abc") ➞ true
//
//neighboring("qrstuv") ➞ true
//
//neighboring("mnopqrstsrqponm") ➞ false
//Notes
//All test cases will consist of lower case letters only.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(neighboring("abcdedcba"), true)
//Test.assertEquals(neighboring("aba"), true)
//Test.assertEquals(neighboring("efghihfe"), false)
//Test.assertEquals(neighboring("xyzyx"), true)
//Test.assertEquals(neighboring("mnopqrstsrqponm"), true)
//Test.assertEquals(neighboring("zyz"), true)
//Test.assertEquals(neighboring("aeiou"), false)
//Test.assertEquals(neighboring("cdefg"), true)
//Test.assertEquals(neighboring("qrstuv"), true)
//Test.assertEquals(neighboring("aaaaa"), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Is the Die Loaded

//tags: math,numbers,validation

//url: https://edabit.com/challenge/c9DRPNpNKQ7wJeEHs

//Description:
//The Chi-Squared (χ²) goodness of fit test estimates if an empirical (observed) distribution fits a theoretical (expected) distribution within reasonable margins. For example, to figure out if a die is loaded you could roll it many times and note the results. Because of randomness, you can't expect to get the same frequency for all faces, but if one or more faces turn up much more frequently than some others, it is reasonable to assume the die is loaded.
//The formula to calculate the Chi-Square parameter is:
//
//Below is an example of a die rolled 600 times:
//Face	1	2	3	4	5	6
//Observed frequency	101	116	89	108	97	89
//Expected frequency	100	100	100	100	100	100
//Difference	1	16	-11	8	-3	-11
//In this example, the Chi-Square parameter has a value of:
//χ² = ((1)^2 + (16)^2 + (-11)^2 + (8)^2 + (-3)^2 + (-11)^2) / 100 = 5.72
//This parameter is then compared to a critical value, calculated taking into account the number of categories and the confidence level. Here, the critical value is 11.0705. Since 5.72 < 11.0705, it is safe to assume the die is unloaded.
//Given an array with the six observed frequencies, write a function that returns true if a die is unloaded, or false if it is loaded. Take 11.0705 as the critical value for all cases.
//Examples
//fairDie([44, 52, 33, 40, 41, 30]) ➞ true
//(χ² = 7.75) < 11.0705
//
//fairDie([34, 27, 23, 20, 32, 28]) ➞ true
//(χ² = 1.6) < 11.0705
//
//fairDie([10, 20, 11, 5, 19, 16]) ➞ false
//(χ² = 12.556) > 11.0705
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(fairDie([8, 10, 5, 15, 15, 10]), true, '7.38 < 11.0705')
//Test.assertEquals(fairDie([21, 22, 17, 31, 29, 30]), true, '6.64 < 11.0705')
//Test.assertEquals(fairDie([8, 16, 16, 9, 11, 3]), false, '11.95 > 11.0705')
//Test.assertEquals(fairDie([14, 10, 16, 14, 15, 15]), true, '1.57 < 11.0705')
//Test.assertEquals(fairDie([7, 18, 15, 21, 14, 28]), false, '14.61 > 11.0705')
//Test.assertEquals(fairDie([29, 34, 33, 38, 41, 35]), true, '2.46 < 11.0705')
//Test.assertEquals(fairDie([10, 20, 11, 5, 19, 16]), false, '12.56 < 11.0705')
//​
//// Author : MyName

