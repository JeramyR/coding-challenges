

//title: Union and Intersection of Arrays

//tags: arrays,functional_programming

//url: https://edabit.com/challenge/MfAkm7CkWqepAZTBM

//Description:
//Create a function that takes in two arrays and returns an intersection array and a union array.
//Intersection Array: Elements shared by both.
//Union Array: Elements that exist in first or second array, or both (not exclusive OR).
//While the input arrays may have duplicate numbers, the returned intersection and union arrays should be set-ified - that is, contain no duplicates. Returned arrays should be sorted in ascending order.
//Array 1: [5, 6, 6, 6, 8, 9]
//Array 2: [3, 3, 4, 4, 5, 5, 8]
//
//Intersection: [5, 8]
//// 5 and 8 are the only 2 numbers that exist in both arrays.
//
//Union: [3, 4, 5, 6, 8, 9]
//// Each number exists in at least one array.
//Examples
//intersectionUnion([1, 2, 3, 4, 4], [4, 5, 9]) ➞ [[4], [1, 2, 3, 4, 5, 9]]
//
//intersectionUnion([1, 2, 3], [4, 5, 6]) ➞ [[], [1, 2, 3, 4, 5, 6]]
//
//intersectionUnion([1, 1], [1, 1, 1, 1]) ➞ [[1], [1]]
//Notes
//Order of output should be: [Intersection], [Union].
//Remember both output arrays should be in ascending order.
//Each input array will have at least one element.
//If both arrays are disjoint (share nothing in common), return an empty array [] for the intersection.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(intersectionUnion([1, 2, 3, 4, 4], [4, 5, 9]), [[4], [1, 2, 3, 4, 5, 9]])
//Test.assertSimilar(intersectionUnion([1, 2, 3], [4, 5, 6]), [[], [1, 2, 3, 4, 5, 6]])
//Test.assertSimilar(intersectionUnion([1, 1], [1, 1, 1, 1]), [[1], [1]])
//Test.assertSimilar(intersectionUnion([5, 5], [5, 6]), [[5], [5, 6]])
//Test.assertSimilar(intersectionUnion([7, 8, 9, 6], [9, 7, 6, 8]), [[6, 7, 8, 9], [6, 7, 8, 9]])
//Test.assertSimilar(intersectionUnion([4, 1, 1, 2], [1, 4, 4, 4, 4, 4, 4]), [[1, 4], [1, 2, 4]])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: RegEx XIX : Group Ranges - Capturing groups (x)

//tags: formatting,regex

//url: https://edabit.com/challenge/2xLmzBEjBzg4LSygs

//Description:
//Groups and ranges indicate groups and ranges of expression characters. Capturing groups matches x in (x) and remembers the match.
//"foo bar".match(/(foo)/) ➞ matches and remembers "foo"
//Capturing groups often are used along with quantifiers. Quantifiers will use the capturing group as a whole.
//"Gogogo now!".match(/(go)+/i) ➞ "Gogogo"
//Caveat: Capturing groups have a performance penalty. If you don't need the matched substring to be recalled, prefer non-capturing parentheses.
//MAC-address of a network interface consists of 6 two-digit hex numbers separated by a colon (e.g. 01:32:54:67:89:AB). Write a RegExp that checks whether a string is MAC-address.
//let regexp = /your regexp/
//
//regexp.test("01:32:54:67:89:AB") ➞ true
//regexp.test("0132546789AB") ➞ false
//Notes
//Check the Resources tab if you get stuck.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const str1 = '01:32:54:67:89:AB'
//const str2 = '0132546789AB'
//const str3 = '01:32:54:67:89'
//const str4 = '01:32:54:67:89:ZZ'
//​
//const validate = (REGEXP) => {
// return function testReg(str) {
//    return REGEXP.test(str);
//   }
//}
//​
//const testExp = validate(REGEXP)
//​
//Test.assertSimilar(testExp(str1), true)
//Test.assertSimilar(testExp(str2), false, "no colons")
//Test.assertSimilar(testExp(str3), false, "5 numbers, need 6")
//Test.assertSimilar(testExp(str4), false, "ZZ at the end")
//​
//// credits to https://javascript.info/regexp-groups

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Uban Numbers

//tags: math,numbers,strings,validation

//url: https://edabit.com/challenge/GZkdz9WEeHSBy2ScE

//Description:
//A number n is called uban if its name (in English) does not contain the letter "u". In particular, it cannot contain the terms "four", "hundred", and "thousand", so the uban number following 99 is 1,000,000.
//Write a function to determine if the given integer is uban.
//Examples
//isUban(456) ➞ false
//
//isUban(25) ➞ true
//
//isUban(1098) ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isUban(0), true)
//Test.assertEquals(isUban(24), false)
//Test.assertEquals(isUban(223), false)
//Test.assertEquals(isUban(2051), false)
//Test.assertEquals(isUban(627), false)
//Test.assertEquals(isUban(6258), false)
//Test.assertEquals(isUban(12), true)
//Test.assertEquals(isUban(202), false)
//Test.assertEquals(isUban(98), true)
//Test.assertEquals(isUban(6592), false)
//Test.assertEquals(isUban(393), false)
//Test.assertEquals(isUban(1000096), true)
//Test.assertEquals(isUban(40), true)
//​
//// By Harith Shah

