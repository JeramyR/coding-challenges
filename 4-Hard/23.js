

//title: Consecutive Sum Check

//tags: bit_operations,logic,math,numbers,validation

//url: https://edabit.com/challenge/KX4eJv6ZSJWsvtijd

//Description:
//Create a function that takes a number n as an argument and checks whether the given number can be expressed as a sum of two or more consecutive positive numbers.
//Examples
//consecutiveSum(9) ➞ true
//// 9 can be expressed as a sum of (2 + 3 + 4) or (4 + 5).
//
//consecutiveSum(10) ➞ true
//// 10 can be expressed as a sum of 1 + 2 + 3 + 4.
//
//consecutiveSum(64) ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(consecutiveSum(69), true)
//Test.assertEquals(consecutiveSum(8), false)
//Test.assertEquals(consecutiveSum(57), true)
//Test.assertEquals(consecutiveSum(6), true)
//Test.assertEquals(consecutiveSum(13), true)
//Test.assertEquals(consecutiveSum(16), false)
//Test.assertEquals(consecutiveSum(91), true)
//Test.assertEquals(consecutiveSum(75), true)
//Test.assertEquals(consecutiveSum(38), true)
//Test.assertEquals(consecutiveSum(25), true)
//Test.assertEquals(consecutiveSum(32), false)
//Test.assertEquals(consecutiveSum(65), true)
//Test.assertEquals(consecutiveSum(13), true)
//Test.assertEquals(consecutiveSum(16), false)
//Test.assertEquals(consecutiveSum(99), true)
//Test.assertEquals(consecutiveSum(522), true)
//Test.assertEquals(consecutiveSum(974), true)
//Test.assertEquals(consecutiveSum(755), true)
//Test.assertEquals(consecutiveSum(512), false)
//Test.assertEquals(consecutiveSum(739), true)
//Test.assertEquals(consecutiveSum(1006), true)
//Test.assertEquals(consecutiveSum(838), true)
//Test.assertEquals(consecutiveSum(1092), true)
//Test.assertEquals(consecutiveSum(727), true)
//Test.assertEquals(consecutiveSum(648), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Karaca`s Encryption Algorithm

//tags: algorithms,cryptography,formatting,regex

//url: https://edabit.com/challenge/ccZBsRp6pX869gyqx

//Description:
//Make a function that encrypts a given input with these steps:
//Input: "apple"
//Step 1: Reverse the input: "elppa"
//Step 2: Replace all vowels using the following chart:
//a => 0
//e => 1
//i => 2
//o => 2
//u => 3
//
//// "1lpp0"
//Step 3: Add "aca" to the end of the word: "1lpp0aca"
//Output: "1lpp0aca"
//Examples
//encrypt("banana") ➞ "0n0n0baca"
//
//encrypt("karaca") ➞ "0c0r0kaca"
//
//encrypt("burak") ➞ "k0r3baca"
//
//encrypt("alpaca") ➞ "0c0pl0aca"
//Notes
//All inputs are strings, no uppercases and all output must be strings.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(encrypt("karaca"), "0c0r0kaca")
//Test.assertEquals(encrypt("burak"), "k0r3baca")
//Test.assertEquals(encrypt("banana"), "0n0n0baca")
//Test.assertEquals(encrypt("alpaca"), "0c0pl0aca")
//Test.assertEquals(encrypt("hello"), "2ll1haca")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: RegExp: Validate Pin

//tags: regex,validation

//url: https://edabit.com/challenge/ojHe4uXWvxqAARbfm

//Description:
//Create a RegExp myRegExp to test if a string is a valid pin or not.
//A valid pin has:
//Exactly 4 or 6 characters.
//Only numerical characters (0-9).
//No whitespace.
//Examples
//myRegExp.test("1234") ➞ true
//
//myRegExp.test("45135") ➞ false
//
//myRegExp.test("89abc1") ➞ false
//
//myRegExp.test("900876") ➞ true
//
//myRegExp.test(" 4983") ➞ false
//Notes
//Empty strings should return false when tested.
//If you need help, look in the Resources tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const tests = [
//  ['123456', true],
//  ['4512a5', false],
//  ['', false],
//  ['21904', false],
//  ['9451', true],
//  ['213132', true],
//  [' 4520', false],
//  ['15632 ', false],
//  ['000000', true]
//];
//for( const i of tests )
//  {
//    Test.assertEquals(myRegExp.test(i[0]), i[1]);
//  }

