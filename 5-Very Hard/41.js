

//title: Simplified Fractions

//tags: math,strings,validation

//url: https://edabit.com/challenge/ZNnfzsWj5i6S93Cxk

//Description:
//Create a function that returns the simplified version of a fraction.
//Examples
//simplify("4/6") ➞ "2/3"
//
//simplify("10/11") ➞ "10/11"
//
//simplify("100/400") ➞ "1/4"
//
//simplify("8/4") ➞ "2"
//Notes
//A fraction is simplified if there are no common factors (except 1) between the numerator and the denominator. For example, 4/6 is not simplified, since 4 and 6 both share 2 as a factor.
//If improper fractions can be transformed into integers, do so in your code (see example #4).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(simplify("5/7"), "5/7")
//Test.assertEquals(simplify("4/6"), "2/3")
//Test.assertEquals(simplify("11/10"), "11/10")
//Test.assertEquals(simplify("8/4"), "2")
//Test.assertEquals(simplify("7/4"), "7/4", 'should work for improper fractions')
//Test.assertEquals(simplify("6/4"), "3/2")
//Test.assertEquals(simplify("300/200"), "3/2")
//Test.assertEquals(simplify("50/25"), "2")
//Test.assertEquals(simplify("5/45"), "1/9")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Bring Down The Class Average

//tags: arrays,math,numbers

//url: https://edabit.com/challenge/JemYN797Zmqj98YEt

//Description:
//What is the percentage you can score on a test, which singlehandedly brings down the class average by 5%? Given an array of your classmates' scores, create a function that returns the answer. Round to the nearest percent.
//Examples
//takeDownAverage(["95%", "83%", "90%", "87%", "88%", "93%"]) ➞ "54%"
//
//takeDownAverage(["10%"]) ➞ "0%"
//
//takeDownAverage(["53%", "79%"]) ➞ "51%"
//Notes
//No tests will include empty arrays or require negative percentages.
//Note that you need to return a string.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [actualParam, expectedParam] = [[
//  ["95%", "83%", "90%", "87%", "88%", "93%"], ["10%"], ["74%", "76%", "58%", "50%", "99%", "70%"],
//  ["64%", "95%", "89%", "69%", "96%", "59%", "84%", "93%"], ["77%", "77%"], ["73%", "98%"],
//  ["96%", "87%", "66%"], ["94%", "79%", "54%", "62%"], ["56%", "50%"], ["100%", "51%", "98%"],
//  ["85%", "74%", "61%", "70%", "56%", "67%", "53%", "53%"],
//  ["67%", "91%", "93%", "87%", "81%", "79%", "88%", "69%", "92%", "69%"], ["75%", "100%"]],
//  ["54%", "0%", "36%", "36%", "62%", "71%", "63%", "47%", "38%", "63%", "20%", "27%", "73%"]
//]
//for (let i in actualParam) Test.assertEquals(takeDownAverage(actualParam[i]), expectedParam[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Palindromic Anagrams

//tags: algorithms,strings,validation

//url: https://edabit.com/challenge/8wqJTmobdGWuQKFmy

//Description:
//Given a word, create a function which returns whether or not it's possible to create a palindrome by rearranging the letters in the word.
//Examples
//isPalindromePossible("rearcac") ➞ true
//// You can make "racecar"
//
//isPalindromePossible("suhbeusheff") ➞ true
//// You can make "sfuehbheufs" (not a real word but still a palindrome)
//
//isPalindromePossible("palindrome") ➞ false
//// It's impossible
//Notes
//Trivially, words which are already palindromes return true.
//Words are given in all lowercase.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isPalindromePossible("rearcac"), true)
//Test.assertEquals(isPalindromePossible("suhbeusheff"), true)
//Test.assertEquals(isPalindromePossible("palindrome"), false)
//Test.assertEquals(isPalindromePossible("yagnx"), false)
//Test.assertEquals(isPalindromePossible("zgzqxljjp"), false)
//Test.assertEquals(isPalindromePossible("tgmqkpdhnhatoco"), false)
//Test.assertEquals(isPalindromePossible("akyka"), true)
//Test.assertEquals(isPalindromePossible("kjyyrftnbsbq"), false)
//Test.assertEquals(isPalindromePossible("jynmynqhcy"), false)
//Test.assertEquals(isPalindromePossible("hfe"), false)
//Test.assertEquals(isPalindromePossible("noon"), true)
//Test.assertEquals(isPalindromePossible("azmkallbanpu"), false)
//Test.assertEquals(isPalindromePossible("drrede"), true)
//Test.assertEquals(isPalindromePossible("xmhwcocldjdnqvv"), false)
//Test.assertEquals(isPalindromePossible("reparpe"), true)
//Test.assertEquals(isPalindromePossible("jnavz"), false)
//Test.assertEquals(isPalindromePossible("orort"), true)
//Test.assertEquals(isPalindromePossible("mel"), false)
//Test.assertEquals(isPalindromePossible("jdxknf"), false)
//Test.assertEquals(isPalindromePossible("qo"), false)
//Test.assertEquals(isPalindromePossible("neett"), true)
//Test.assertEquals(isPalindromePossible("wow"), true)
//Test.assertEquals(isPalindromePossible("avkkiaapiusuapspiip"), true)
//Test.assertEquals(isPalindromePossible("aann"), true)
//Test.assertEquals(isPalindromePossible("iivcc"), true)

