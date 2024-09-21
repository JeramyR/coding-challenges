

//title: Increment to Top

//tags: arrays,logic,loops

//url: https://edabit.com/challenge/aR66JfnFDXod5FpbS

//Description:
//Create a function that returns the total number of steps it takes to transform each element to the maximal element in the array. Each step consists of incrementing a digit by one.
//Examples
//incrementToTop([3, 4, 5]) ➞ 3
//// Maximal element in the array is 5.
//// To transform 3 to 5 requires 2 steps: 3 -> 4, 4 -> 5.
//// To transform 4 to 5 requires 1 step: 4 -> 5.
//// Total steps required is 3.
//
//incrementToTop([4, 3, 4]) ➞ 1
//// Maximal element in the array is 4.
//// To transform 3 to 4 requires 1 steps: 3 -> 4.
//// Total steps required is 1.
//
//incrementToTop([3, 3, 3]) ➞ 0
//
//incrementToTop([3, 10, 3]) ➞ 14
//Notes
//If the array contains only the same digits, return 0 (see example #3).
//Bonus: Can you write a solution that achieves this by only traversing the array once? (i.e. without finding the max beforehand)

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(incrementToTop([3, 4, 5]), 3)
//Test.assertEquals(incrementToTop([4, 3, 4]), 1)
//Test.assertEquals(incrementToTop([3, 3, 3]), 0)
//Test.assertEquals(incrementToTop([3, 10, 3]), 14)
//Test.assertEquals(incrementToTop([1, 2, 3, 4, 5]), 10)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Power of Two

//tags: math,numbers,validation

//url: https://edabit.com/challenge/x6hfHCyQtbvf6dQDK

//Description:
//Write a function that returns true if an integer can be expressed as a power of base value 2 and false otherwise.
//Examples
//powerOfTwo(32) ➞ true
//
//powerOfTwo(1) ➞ true
//
//powerOfTwo(-7) ➞ false
//
//powerOfTwo(18) ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//describe("Basic Tests", function() {
//  Test.assertEquals(powerOfTwo(32), true)
//  Test.assertEquals(powerOfTwo(1), true)
//  Test.assertEquals(powerOfTwo(-7), false)
//  Test.assertEquals(powerOfTwo(18), false)
//})
//​
//​
//​
//​
//​
//​
//​
//​
//​
//​
//​
//// Randomized Tests
//describe("Randomized Tests", function() {
//​
//function powerOf2(n) {
//  return n == 0 ? false : Math.floor(Math.log2(n)) == Math.log2(n)
//}
//​
//function getRandomNumber(min, max) {

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Vowel Sandwich

//tags: conditions,language_fundamentals,regex,strings,validation

//url: https://edabit.com/challenge/cSymahmP7vfHSm2jF

//Description:
//Create a function which validates whether a 3 character string is a vowel sandwich. In order to have a valid sandwich, the string must satisfy the following rules:
//The first and last characters must be a consonant.
//The character in the middle must be a vowel.
//Examples
//isVowelSandwich("cat") ➞ true
//
//isVowelSandwich("ear") ➞ false
//
//isVowelSandwich("bake") ➞ false
//
//isVowelSandwich("try") ➞ false
//Notes
//Return false if the word is not 3 characters in length.
//All words will be given in lowercase.
//y is not considered a vowel.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isVowelSandwich("cat"), true)
//Test.assertEquals(isVowelSandwich("ear"), false)
//Test.assertEquals(isVowelSandwich("bake"), false)
//Test.assertEquals(isVowelSandwich("fai"), false)
//Test.assertEquals(isVowelSandwich("eik"), false)
//Test.assertEquals(isVowelSandwich("nel"), true)
//Test.assertEquals(isVowelSandwich("lea"), false)
//Test.assertEquals(isVowelSandwich("rur"), true)
//Test.assertEquals(isVowelSandwich("zuh"), true)
//Test.assertEquals(isVowelSandwich("iiq"), false)
//Test.assertEquals(isVowelSandwich("eir"), false)
//Test.assertEquals(isVowelSandwich("niv"), true)
//Test.assertEquals(isVowelSandwich("xap"), true)
//Test.assertEquals(isVowelSandwich("xuqrc"), false)
//Test.assertEquals(isVowelSandwich("rvp"), false)
//Test.assertEquals(isVowelSandwich("suj"), true)
//Test.assertEquals(isVowelSandwich("aeo"), false)
//Test.assertEquals(isVowelSandwich("nay"), true)
//Test.assertEquals(isVowelSandwich("cis"), true)
//Test.assertEquals(isVowelSandwich("leb"), true)
//Test.assertEquals(isVowelSandwich("aux"), false)
//Test.assertEquals(isVowelSandwich("vii"), false)
//Test.assertEquals(isVowelSandwich("faz"), true)
//Test.assertEquals(isVowelSandwich("taf"), true)
//Test.assertEquals(isVowelSandwich("fek"), true)

