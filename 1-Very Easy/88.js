

//title: Characters in Shapes

//tags: arrays,language_fundamentals,strings

//url: https://edabit.com/challenge/nkp5xkZwbBH5Ape8b

//Description:
//Create a function to calculate how many characters in total are needed to make up the shape. You will be given an array of strings which make up a shape in the compiler (i.e. a square, a rectangle or a line).
//Examples
//countCharacters([
//  "###",
//  "###",
//  "###"
//]) ➞ 9
//
//countCharacters([
//  "22222222",
//  "22222222",
//]) ➞ 16
//
//countCharacters([
//  "------------------"
//]) ➞ 18
//
//countCharacters([]) ➞ 0
//
//countCharacters(["", ""]) ➞ 0
//Notes
//Return 0 if the given array is empty.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(countCharacters([
//'###',
//'###',
//'###'
//]), 9)
//​
//Test.assertEquals(countCharacters([
//'22222222',
//'22222222',
//]), 16)
//​
//Test.assertEquals(countCharacters([
//'------------------'
//]), 18)
//​
//Test.assertEquals(countCharacters([]), 0)
//Test.assertEquals(countCharacters([
//'',
//'']), 0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: RegEx: Special Characters

//tags: formatting,regex,validation

//url: https://edabit.com/challenge/cqTmqdMQW83PkZH97

//Description:
//Using the .test() method in your function, return whether a string contains the characters "a" and "c" (in that order) with any number of characters (including zero) between them.
//Examples
//asterisk("account") ➞ true
//
//asterisk("abccount") ➞ true
//
//asterisk("abbbccount") ➞ true
//
//asterisk("bbbccount") ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(asterisk("abccount"), true)
//Test.assertEquals(asterisk("abbbcount"), true)
//Test.assertEquals(asterisk("account"), true)
//Test.assertEquals(asterisk("bbbccount"), false)
//Test.assertEquals(asterisk("ccount"), false)
//Test.assertEquals(asterisk("abbount"), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Extremely Over-Nested

//tags: arrays,formatting,loops

//url: https://edabit.com/challenge/mptt94wPwNxqJJzgr

//Description:
//Create a function that returns the original value from a matrix with too many sub-arrays.
//Examples
//deNest([[[[[[[[[[[[3]]]]]]]]]]]]) ➞ 3
//
//deNest([[[[[[[true]]]]]]]) ➞ true
//
//deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]]) ➞ "edabit"
//Notes
//You only need to retrieve one element.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(deNest([[[[[[[[[[[[3]]]]]]]]]]]]), 3)
//Test.assertEquals(deNest([[[[[[[true]]]]]]]), true)
//Test.assertEquals(deNest([[[[[[[[[[[[[[[[['edabit']]]]]]]]]]]]]]]]]), 'edabit')
//Test.assertEquals(deNest([1]), 1)
//Test.assertEquals(deNest([[[[[[[4.3]]]]]]]), 4.3)
//Test.assertEquals(deNest([[[[[false]]]]]), false)
//Test.assertEquals(deNest([['sixty']]), 'sixty')
//​
//// made by @Joshua Señoron

