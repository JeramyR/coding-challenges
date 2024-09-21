

//title: Sum of Factors of Factors

//tags: loops,math,numbers

//url: https://edabit.com/challenge/BjpT9DZhCteCveeP2

//Description:
//Create a function that takes a number and returns the sum of factors of factors of the given number.
//Examples
//sumFF(69) ➞ 3, 23 ➞ 0
//// Both 3 and 23 are prime numbers and have no factors
//// other than 1 and themselves so the result is 0.
//
//sumFF(12) ➞ 2, 3, 4, 6 ➞ (0) + (0) + (2) + (2+3) ➞ 7
//
//sumFF(420) ➞ 2,4, 6, 10, 12 ... ➞ (2) + (2+3) + (2+5) + (2+3+4+6) ... ➞ 1175
//
//sumFF(619) ➞ ___ ➞ 0
//// 619 doesn't have any factors (other than 1 and 619).
//Notes
//The number will always be greater than 0.
//Factors that are equal to the number or 1, don't count (see example #1).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sumFF(98), 16)
//Test.assertEquals(sumFF(435), 74)
//Test.assertEquals(sumFF(534), 188)
//Test.assertEquals(sumFF(3123), 353)
//Test.assertEquals(sumFF(1232), 1931)
//Test.assertEquals(sumFF(12), 7)
//Test.assertEquals(sumFF(31232), 32630)
//Test.assertEquals(sumFF(4234), 208)
//Test.assertEquals(sumFF(655), 0)
//Test.assertEquals(sumFF(432), 1240)
//Test.assertEquals(sumFF(2343), 170)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Morse Alphabet

//tags: cryptography,data_structures

//url: https://edabit.com/challenge/heamNm6MXBn4w6exw

//Description:
//Given is a dict with the Morse alphabet, added a code for space between words. Write a function, which takes a string, either out of letters or out of Morse code from the hash. The function outputs an encrypted letter string of a decrypted Mmorse code.
//Examples
//morse("F Mueller") ➞ "..-. ..... -- ..- . .-.. .-.. . .-."
//
//morse(".--- --- .... -. ..... ..-. ..... -.- . -. -. . -.. -.--") ➞ "JOHN F KENNEDY"
//
//morse("Barack Obama") ➞ "-... .- .-. .- -.-. -.- ..... --- -... .- -- .-"
//Notes
//You can use capital or small letters, however Morse always returns capitals.
//Use only letters and Morse codes from the hash.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(morse("Barack Obama"), "-... .- .-. .- -.-. -.- ..... --- -... .- -- .-")
//Test.assertEquals(morse("Bill Clinton"), "-... .. .-.. .-.. ..... -.-. .-.. .. -. - --- -.")
//Test.assertEquals(morse("George Washington"), "--. . --- .-. --. . ..... .-- .- ... .... .. -. --. - --- -.")
//Test.assertEquals(morse("Benjamin Franklin"), "-... . -. .--- .- -- .. -. ..... ..-. .-. .- -. -.- .-.. .. -.")
//Test.assertEquals(morse("..-. .-. .. . -.. .-. .. -.-. .... ..... ... -.-. .... .. .-.. .-.. . .-."), "FRIEDRICH SCHILLER")
//Test.assertEquals(morse(".--- --- .... .- -. -. ..... .-- --- .-.. ..-. --. .- -. --. ..... ...- --- -. ..... --. --- . - .... ."), "JOHANN WOLFGANG VON GOETHE")
//Test.assertEquals(morse(".--. . - . .-. ..... .... .- -. -.. -.- ."), "PETER HANDKE")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Strip URL Query Parameters

//tags: algorithms,regex,strings

//url: https://edabit.com/challenge/PoqAEPydtM2CEssSQ

//Description:
//Create a function that takes a URL (string), removes duplicate query parameters and parameters specified within the 2nd argument (which will be an optional array).
//Examples
//stripUrlParams("https://edabit.com?a=1&b=2&a=2") ➞ "https://edabit.com?a=2&b=2"
//
//stripUrlParams("https://edabit.com?a=1&b=2&a=2", ["b"]) ➞ "https://edabit.com?a=2"
//
//stripUrlParams("https://edabit.com", ["b"]) ➞ "https://edabit.com"
//Notes
//The 2nd argument paramsToStrip is optional.
//paramsToStrip can contain multiple params.
//If there are duplicate query parameters with different values, use the value of the last occurring parameter (see examples #1 and #2 above).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(stripUrlParams("https://edabit.com?a=1&b=2&a=2"), "https://edabit.com?a=2&b=2")
//Test.assertEquals(stripUrlParams("https://edabit.com?a=1&b=2&a=2", ["b"]), "https://edabit.com?a=2")
//Test.assertEquals(stripUrlParams("https://edabit.com", ["b"]), "https://edabit.com")
//Test.assertEquals(stripUrlParams("https://edabit.com?a=1&b=2"), "https://edabit.com?a=1&b=2")
//Test.assertEquals(stripUrlParams("https://edabit.com?a=1&b=2", ["c"]), "https://edabit.com?a=1&b=2")
//Test.assertEquals(stripUrlParams("https://edabit.com?a=1&b=2&c=3&d=4", ["a", "d"]), "https://edabit.com?b=2&c=3", "The 2nd argument can contain multiple URL params.")
//Test.assertEquals(stripUrlParams("https://edabit.com?a=1&b=2&c=3&d=4&c=5", ["a", "d"]), "https://edabit.com?b=2&c=5")

