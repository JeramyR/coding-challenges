

//title: Apocalyptic Numbers

//tags: numbers,strings,validation

//url: https://edabit.com/challenge/nY4MYku8Sn9kDs8m8

//Description:
//In this challenge, you have to establish if a number is apocalyptic. A positive integer n greater than 0 is apocalyptic when 2 elevated to n contains one or more occurrences of 666 inside it.
//Given an integer n, implement a function that returns:
//"Safe" if n is not apocalyptic.
//"Single" if inside 2^n there's a single occurrence of 666.
//"Double" if inside 2^n there are two occurrence of 666.
//"Triple" if inside 2^n there are three occurrence of 666.
//Examples
//isApocalyptic(66) ➞ "Safe"
//// 2^66 = 73786976294838206464
//
//isApocalyptic(157) ➞ "Single"
//// 2^157 =
//// 182687704|666|362864775460604089535377456991567872
//
//isApocalyptic(220) ➞ "Double"
//// 2^220 =
//// 168499|666|66969149871|666|8844293872691710232152640 ...
//
//isApocalyptic(931) ➞ "Triple"
//// 2^931 =
//// 181520618710|666|8777829|666|135436890332191479738353753001777065257954029122510259245050254290156440857653562895251700406555730694879815558725330603736697259064676478076718090|666| ...
//Notes
//Any given n will be a positive integer in the range of 1 to 1000.
//Occurrences have to be unique. You can't use digits that have already been matched again (see example #3, there are five adjacent 6s, but only one possible match).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isApocalyptic(66), "Safe", "Example #1")
//Test.assertEquals(isApocalyptic(157), "Single", "Example #2")
//Test.assertEquals(isApocalyptic(220), "Double", "Example #3")
//Test.assertEquals(isApocalyptic(931), "Triple", "Example #4")
//Test.assertEquals(isApocalyptic(166), "Safe")
//Test.assertEquals(isApocalyptic(529), "Double")
//Test.assertEquals(isApocalyptic(443), "Single")
//Test.assertEquals(isApocalyptic(166), "Safe")
//Test.assertEquals(isApocalyptic(703), "Safe")
//Test.assertEquals(isApocalyptic(528), "Single")
//Test.assertEquals(isApocalyptic(648), "Double")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: New Word Builder

//tags: arrays,formatting,strings

//url: https://edabit.com/challenge/nhcFHFHDYGwyAFNSy

//Description:
//Create a function that builds a word from the scrambled letters contained in the first array. Use the second array to establish each position of the letters in the first array. Return a string from the unscrambled letters (that made-up the word).
//Examples
//wordBuilder(["g", "e", "o"], [1, 0, 2]) ➞ "ego"
//
//wordBuilder(["e", "t", "s", "t"], [3, 0, 2, 1]) ➞ "test"
//
//wordBuilder(["b", "e", "t", "i", "d", "a"], [1, 4, 5, 0, 3, 2]) ➞ "edabit"
//Notes
//The elements in the second array are indexes of the elements in the first array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(wordBuilder(["g", "e", "o"], [1, 0, 2]), 'ego')
//Test.assertEquals(wordBuilder(["e", "t", "s", "t"], [3, 0, 2, 1]), 'test')
//Test.assertEquals(wordBuilder(["b", "e", "t", "i", "d", "a"], [1, 4, 5, 0, 3, 2]), 'edabit')
//Test.assertEquals(wordBuilder(["l", "e", "h", "n", "l", "c", "a", "e", "g"], [5, 2, 6, 4, 0, 1, 3, 8, 7]), 'challenge')
//Test.assertEquals(wordBuilder(["s", "o", "r", "t", "e", "d"], [0, 1, 2, 3, 4, 5]), 'sorted')
//​
//​
///* -------------- Xahid Howlader --------------*/

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Construct and Deconstruct

//tags: arrays,language_fundamentals,loops,strings

//url: https://edabit.com/challenge/ALy97jpKC2CPRJsYR

//Description:
//Given a string, create a function which outputs an array, building and deconstructing the string letter by letter. See the examples below for some helpful guidance.
//Examples
//constructDeconstruct("Hello") ➞ [
//  "H",
//  "He",
//  "Hel",
//  "Hell",
//  "Hello",
//  "Hell",
//  "Hel",
//  "He",
//  "H"
//]
//
//constructDeconstruct("edabit") ➞ [
//  "e",
//  "ed",
//  "eda",
//  "edab",
//  "edabi",
//  "edabit",
//  "edabi",
//  "edab",
//  "eda",
//  "ed",
//  "e"
//]
//
//constructDeconstruct("the sun") ➞ [
//  "t",
//  "th",
//  "the",
//  "the ",
//  "the s",
//  "the su",
//  "the sun",
//  "the su",
//  "the s",
//  "the ",
//  "the",
//  "th",
//  "t"
//]
//Notes
//Include spaces (see example #3).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(constructDeconstruct("Hello"), [
//  "H",
//  "He",
//  "Hel",
//  "Hell",
//  "Hello",
//  "Hell",
//  "Hel",
//  "He",
//  "H"
//])
//​
//Test.assertSimilar(constructDeconstruct("edabit"), [
//  "e",
//  "ed",
//  "eda",
//  "edab",
//  "edabi",
//  "edabit",
//  "edabi",
//  "edab",
//  "eda",
//  "ed",
//  "e"
//])

