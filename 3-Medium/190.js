

//title: Get the Diagonals

//tags: arrays,language_fundamentals,loops

//url: https://edabit.com/challenge/GwdGioqhZGdGRD2FJ

//Description:
//Given a square array (n*n size) implement a function that returns a new array containing two arrays equal to the two diagonals, in the following order:
//diagonal 1 = from upper-left to lower-right corner
//diagonal 2 = from upper-right to lower-left corner
//Examples
//getDiagonals([ [1, 2], [3, 4] ]) ➞ [ [1, 4], [2, 3] ]
//
//getDiagonals([ ["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"] ]) ➞ [ ["a", "e", "i"], ["c", "e", "g"] ]
//
//getDiagonals([ [true] ]) ➞ [ [true], [true] ]
//Notes
//Your function must also work with single elements or empty arrays.
//Try to build both diagonals with a single loop.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(getDiagonals([
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
//]), [
//  [1, 5, 9], 
//  [3, 5, 7]
//])
//​
//Test.assertSimilar(getDiagonals([
//  ["e", "z", "y", "o", "p", "t"],
//  ["b", "d", "a", "t", "i", "w"],
//  ["u", "l", "a", "n", "s", "k"],
//  ["s", "v", "k", "b", "r", "z"],
//  ["h", "e", "w", "c", "i", "j"],
//  ["r", "p", "y", "d", "x", "t"]
//]), [
//  ["e", "d", "a", "b", "i", "t"], 
//  ["t", "i", "n", "k", "e", "r"]
//])
//​
//Test.assertSimilar(getDiagonals([
//  [true, false, true, false],
//  [false, true, false, true],
//  [true, false, true, false],

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Blah, Blah, Blah...

//tags: formatting,strings

//url: https://edabit.com/challenge/sTk6vyGewy3vZbZkD

//Description:
//Create a function which replaces the last n words with "blah". Add "..." to the last blah.
//Examples
//blahBlah("A function is a block of code which only runs when it is called",  5) ➞ "A function is a block of code which only blah blah blah blah blah..."
//
//blahBlah("one two three four five", 2) ➞ "one two three blah blah..."
//
//blahBlah("Sphinx of black quartz judge my vow", 10) ➞ "blah blah blah blah blah blah blah..."
//Notes
//If n is longer than the amount of words in the sentence, replace every word with "blah" (see example #3).
//All blahs shall be lowercase!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(blahBlah("A function is a block of code which only runs when it is called",  5), "A function is a block of code which only blah blah blah blah blah...");
//Test.assertEquals(blahBlah("one two three four five", 2), "one two three blah blah...");
//Test.assertEquals(blahBlah("Sphinx of black quartz judge my vow", 10), "blah blah blah blah blah blah blah...");
//Test.assertEquals(blahBlah("The quadratic formula is negative b plus or minus the square root of b squared subtract four ac all over two a", 5), "The quadratic formula is negative b plus or minus the square root of b squared subtract four blah blah blah blah blah...");
//​
//// made by @Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Binary to ASCII Conversion

//tags: formatting,strings

//url: https://edabit.com/challenge/p3NwqZ2evahs9jnPh

//Description:
//Create a function that takes a string of 1's and 0's (binary) as an argument and return the equivalent decoded ASCII text. Characters can be in the range of "00000000" to "11111111", which means every eight digits of binary input represents a single character.
//a = 01100001
//b = 01100010
//c = 01100011
//If you were to combine these characters into the string "abc", the corresponding binary would be 011000010110001001100011. Use the resources tab for more info on how to approach this.
//Examples
//binaryConversion("011001010110010001100001011000100110100101110100") ➞ "edabit"
//
//binaryConversion("001100010011001000110011") ➞ "123"
//
//binaryConversion("010010000110010101101100011011000110111100111111") ➞ "Hello?"
//Notes
//If you are given an empty string as input, you must also return an empty string. Otherwise, the input will always be a valid binary string.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(binaryConversion("011001010110010001100001011000100110100101110100"), 'edabit')
//Test.assertEquals(binaryConversion("001100010011001000110011"), "123", "Ah! You have to handle numeric characters.")
//Test.assertEquals(binaryConversion("010010000110010101101100011011000110111100111111"), "Hello?", "You've got to also handle special characters.")
//Test.assertEquals(binaryConversion(""), "", "You forgot to handle an empty string correnctly.")
//Test.assertEquals(binaryConversion("0010000101000000001000110010010000100101010111100010011000101010001010000010100101010001010101110100010101110010011101000111100101010101010010010100111101001100011001000110011001100111011000100110001001101000011011100110110101001001010010110100001001001010010010110100100001001001010101010100111100101000001111110011111000111111001111000111111001111110011111100111111001111110001010010010100000101010001001100010010101011110001110010011100000110111001100010011001100101111001011010010111100101010001011010010101000101111"), "!@#$%^&*()QWErtyUIOLdfgbbhnmIKBJKHIUO(?>?<~~~~~)(*&%^98713/-/*-*/", "It's those darn special characters!")
//​
//// Random binary string
//let randomString = Math.random().toString(36);
//let randomStringBinary = "";
//for (i=0; i < randomString.length; i++) {
//  var bin = randomString[i].charCodeAt(0).toString(2);
//  randomStringBinary += "00000000".slice(bin.length) + bin;
//}
//Test.assertEquals(binaryConversion(randomStringBinary), randomString, "Must handle random binary string.")

