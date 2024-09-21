

//title: Divisible by Left Digit?

//tags: logic,math,numbers,validation

//url: https://edabit.com/challenge/ZRvwAuxcA8SFsPoBP

//Description:
//Create a function that takes a number n and checks if each digit is divisible by the digit on its left. Return a boolean array depending on the condition checks.
//Examples
//divisibleByLeft(73312) ➞ [false, false, true, false, true]
//// no element left to 7 = false
//// 3/7 = false
//// 3/3 = true
//// 1/3 = false
//// 2/1 = true
//
//divisibleByLeft(1) ➞ [false]
//
//divisibleByLeft(635) ➞ [false, false, false]
//Notes
//The array should always start with false as there is no digit to the left of the first digit.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(divisibleByLeft(1), [false])
//Test.assertSimilar(divisibleByLeft(1248), [false, true, true, true])
//Test.assertSimilar(divisibleByLeft(4321), [false, false, false, false])
//Test.assertSimilar(divisibleByLeft(73312), [false, false, true, false, true])
//Test.assertSimilar(divisibleByLeft(2026), [false, true, false, true])
//Test.assertSimilar(divisibleByLeft(635), [false, false, false])
//Test.assertSimilar(divisibleByLeft(1337), [false, true, true, false])
//Test.assertSimilar(divisibleByLeft(135028), [false, true, false, true, false, true])
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Adding Numbers

//tags: conditions,math,numbers

//url: https://edabit.com/challenge/Rd7rkibLqAcBEx7xP

//Description:
//Create a function that takes two number strings and returns their sum as a string.
//Examples
//add("111", "111") ➞ "222"
//
//add("10", "80") ➞ "90"
//
//add("", "20") ➞ "Invalid Operation"
//Notes
//If any input is "", undefined or null, return "Invalid Operation".

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(add('91', '19'), '110');
//Test.assertEquals(add('123456789', '987654322'), '1111111111');
//Test.assertEquals(add('9999999', '1'), '10000000');
//Test.assertEquals(add('300', '3000'), '3300');
//Test.assertEquals(add('1000', '6200'), '7200');
//Test.assertEquals(add('-10', '-20'), '-30');
//Test.assertEquals(add('-100', '100'), '0');
//Test.assertEquals(add('0', '6200'), '6200');
//Test.assertEquals(add('', '6'), 'Invalid Operation');
//Test.assertEquals(add('', undefined), 'Invalid Operation');
//Test.assertEquals(add(null, '23'), 'Invalid Operation');
//Test.assertEquals(add('', '20'),"Invalid Operation");

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: First N Vowels

//tags: loops,regex,strings

//url: https://edabit.com/challenge/2FBEMqxiZ2z9efgQB

//Description:
//Write a function that returns the first n vowels of a string.
//Examples
//firstNVowels("sharpening skills", 3) ➞ "aei"
//
//firstNVowels("major league", 5) ➞ "aoeau"
//
//firstNVowels("hostess", 5) ➞ "invalid"
//Notes
//Return "invalid" if the n exceeds the number of vowels in a string.
//Vowels are: a, e, i, o, u

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(firstNVowels("sharpening skills", 3), "aei")
//Test.assertEquals(firstNVowels("major league", 5), "aoeau")
//Test.assertEquals(firstNVowels("crabby patty", 2), "aa")
//Test.assertEquals(firstNVowels("shrimp", 1), "i")
//Test.assertEquals(firstNVowels("shrimpy", 2), "invalid")
//Test.assertEquals(firstNVowels("hostess", 5), "invalid")

