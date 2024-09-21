

//title: How Much is True?

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/GLbuMfTtDWwDv2F73

//Description:
//Create a function which returns the number of true values there are in an array.
//Examples
//countTrue([true, false, false, true, false]) ➞ 2
//
//countTrue([false, false, false, false]) ➞ 0
//
//countTrue([]) ➞ 0
//Notes
//Return 0 if given an empty array.
//All array items are of the type bool (true or false).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(countTrue([true, false, false, true, false]), 2)
//Test.assertEquals(countTrue([false, false, false, false]), 0)
//Test.assertEquals(countTrue([]), 0)
//Test.assertEquals(countTrue([false, false, true, true, false, false, false, true, true, true, true, false, true, true, false]), 8)
//Test.assertEquals(countTrue([true, false, true, true, false, false, false, false, false]), 3)
//Test.assertEquals(countTrue([false, true, true, false, true, true, false, true, false, true, false, true, false, true, false]), 8)
//Test.assertEquals(countTrue([true, false, true, true, true, false, true, true, false, false]), 6)
//Test.assertEquals(countTrue([false, false, false, false, true, false, true, false, true, false, false]), 3)
//Test.assertEquals(countTrue([true, false, false, false, true, false, false, true, false, false, false]), 3)
//Test.assertEquals(countTrue([true, true, false, true, false, false, false, false, true, false]), 4)
//Test.assertEquals(countTrue([true, false, true, true, false, true, true, true, true, false, true, false, true, false]), 9)
//Test.assertEquals(countTrue([true, false, true, true, true, true, false, true, true, false, true, false, false, false, false]), 8)
//Test.assertEquals(countTrue([true, true, false, false, false, false, true, false, true, true, false, true]), 6)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: A Redundant Function

//tags: closures,functional_programming,language_fundamentals

//url: https://edabit.com/challenge/hzxN9bAebBPNqdQto

//Description:
//Write a function redundant that takes in a string str and returns a function that returns str.
//Examples
//const f1 = redundant("apple")
//f1() ➞ "apple"
//
//const f2 = redundant("pear")
//f2() ➞ "pear"
//
//const f3 = redundant("")
//f3() ➞ ""
//Notes
//Your function should return a function, not a string.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const f1 = redundant("apple")
//const f2 = redundant("pear")
//const f3 = redundant("")
//​
//Test.assertEquals(f1(), "apple")
//Test.assertEquals(f2(), "pear")
//Test.assertEquals(f3(), "")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: RegEx Exercise: An empty string

//tags: regex

//url: https://edabit.com/challenge/bAqxpvYmDuuvz4LQz

//Description:
//If you've completed this RegEx series from I to XXII then you have been exposed to all of MDN's documentation on regular expressions special characters. You can check my Collections under Basic Reg Ex in my profile if you missed any. This next part of the series is to help solidify what you've learned. In order to save time I will be searching the web to find regular expression exercises to post here.
//You can test for empty string like this:
//"".length === 0 ➞ true
//Use a regular expression to test for an empty string.
//const REGEXP = /your solution/
//REGEXP.test("") ➞ true
//Notes
//You can find the solution in the Resources tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const str = "";
//​
//const validate = (REGEXP) => {
//   // if(!//.test(String(REGEXP))) return () => "invalid" 
//   return function testReg(str) {
//     return REGEXP.test(str)
//   }
//}
//​
//const testExp = validate(REGEXP)
//​
//// Test.assertNotEquals(testExp(str), "invalid", "Nothing new here")
//Test.assertSimilar(testExp(str), true) 
//​
//// credits to https://javascript.info/regexp-anchors

