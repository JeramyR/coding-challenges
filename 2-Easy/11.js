

//title: RegEx XV : Group Ranges - Negated Character Sets

//tags: regex,strings

//url: https://edabit.com/challenge/rHtS59yApEQbANPcx

//Description:
//Groups and ranges indicate groups and ranges of expression characters. Negated character sets match any characters that are NOT inside of brackets [ ]. You differentiate a negated character set from a regular character set by inserting a ^ inside of the [ ].
//"1234cba5678".match(/[^abc]/g)
//// "12345678", matches any character that are not a, b, or c.
//You can also negate ranges, but like with regular character sets, if the hyphen is at the beginning or ending of a range then it will be considered a literal hyphen.
//"excludenumbers123".match(/[^1-3]/g)
//// "excludenumbers", matches any character that are not the numbers 1, 2 or 3.
//Create a REGEXP that matches any characters except letters, digits and spaces. You must use a negated character set in your expression.
// "alice15@gmail.com".match(/REGEXP/gi) ➞ ["@", "."]
//Notes
//Check the Resources tab if you get stuck.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const str = "alice15@gmail.com"
//​
//const validate = (REGEXP) => {
//   if(!/\[\^/.test(String(REGEXP))) return () => "invalid" 
//   return function testReg(str) {
//    return str.match(REGEXP);
//   }
//}
//​
//const testExp = validate(REGEXP)
//​
//Test.assertNotEquals(testExp(str), "invalid", "You are require to use a negated character set your expression.")
//Test.assertSimilar(testExp(str), ["@", "."])
//​
//// credits to https://javascript.info/regexp-character-sets-and-ranges

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: RegEx XVII : Quantifiers - x{n}, x{n,}, x{n,}

//tags: regex

//url: https://edabit.com/challenge/5vsYNXXQ7aXzQMMpQ

//Description:
//Quantifiers indicate numbers of characters or expressions to match.
//x{n}
//Where n is a positive integer, matches exactly n occurrences of the preceding item x.
//"candy".match(/a{2}/) ➞ null
//"caandy".match(/a{2}/) ➞ "aa"
//x{n,}
//Where n is a positive integer, matches at least n occurrences of the preceding item x.
//"candy".match(/a{2,}/) ➞ null
//"caandy".match(/a{2,}/) ➞ "aa"
//"caaaaaandy".match(/a{2,}/) ➞ "aaaaaa"
//x{n,m}
//Where n is 0 or a positive integer, m is a positive integer, and m > n, matches at least n and at most m occurrences of the preceding item x.
//"cndy".match(/a{1,3}/) ➞ null
//"candy".match(/a{1,3}/) ➞ "a"
//"caandy".match(/a{1,3}/) ➞ "aa"
//"caaaaaaaaaaandy".match(/a{1,3}/) ➞ "aaa"
//Create a RegExp to find ellipsis: 3 (or more?) dots in a row. Use one of the 3 quantifiers above in your solution.
//"Hello!... Wait. How goes?..... GoodBye!..".match(/REGEXP/g) ➞ "..., ....."
//Notes
//Check out the Resources tab if you get stuck.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const str = "Hello!... Wait. How goes?..... GoodBye!.."
//​
//const validate = (REGEXP) => {
//   if(!/\{.*\}/.test(String(REGEXP))) return () => "invalid" 
//   return function testReg(str) {
//    return str.match(REGEXP);
//   }
//}
//​
//const testExp = validate(REGEXP)
//​
//Test.assertNotEquals(testExp(str), "invalid", "You are require to use a quantifier in set your expression.")
//Test.assertSimilar(testExp(str), ["...", "....."])
//​
//// credits to https://javascript.info/regexp-quantifiers

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Spotlight Sum

//tags: math,numbers

//url: https://edabit.com/challenge/PZ7rZh9C47CvYHfN2

//Description:
//Given a 10x10 grid of numbers 1-100, return the Spotlight Sum, given a number n. The spotlight sum can be defined as the total of the 8 numbers immediately surrounding the number n on the grid, including n in the total.
//Worked Example
//[
//  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//  [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
//  [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
//  [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
//  [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
//  [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
//  [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
//  [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
//  [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
//]
//
//spotlight_sum(45) ➞ 405
//
//// The 8 numbers surrounding 45 on the grid are:
//// [34, 35, 36, 44, 46, 54, 55, 56]
//// Total of the numbers is 360.
//// Include 45 in the total (360 + 45 = 405)
//// Return the answer.
//Examples
//spotlightSum(19) ➞ 171
//
//spotlightSum(48) ➞ 432
//
//spotlightSum(88) ➞ 792
//Notes
//Note that any numbers which don't have the full 8 numbers surrounding it are not included in the tests.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(spotlightSum(12), 108)
//Test.assertEquals(spotlightSum(13), 117)
//Test.assertEquals(spotlightSum(14), 126)
//Test.assertEquals(spotlightSum(15), 135)
//Test.assertEquals(spotlightSum(16), 144)
//Test.assertEquals(spotlightSum(17), 153)
//Test.assertEquals(spotlightSum(18), 162)
//Test.assertEquals(spotlightSum(19), 171)
//Test.assertEquals(spotlightSum(22), 198)
//Test.assertEquals(spotlightSum(23), 207)
//Test.assertEquals(spotlightSum(24), 216)
//Test.assertEquals(spotlightSum(25), 225)
//Test.assertEquals(spotlightSum(26), 234)
//Test.assertEquals(spotlightSum(27), 243)
//Test.assertEquals(spotlightSum(28), 252)
//Test.assertEquals(spotlightSum(29), 261)
//Test.assertEquals(spotlightSum(32), 288)
//Test.assertEquals(spotlightSum(33), 297)
//Test.assertEquals(spotlightSum(34), 306)
//Test.assertEquals(spotlightSum(35), 315)
//Test.assertEquals(spotlightSum(36), 324)
//Test.assertEquals(spotlightSum(37), 333)
//Test.assertEquals(spotlightSum(38), 342)
//Test.assertEquals(spotlightSum(39), 351)
//Test.assertEquals(spotlightSum(42), 378)

