

//title: Check If It`s a Title String

//tags: formatting,language_fundamentals,strings,validation

//url: https://edabit.com/challenge/6q9iTtQdnZZM5Cbai

//Description:
//Check if a string title is a title string or not. A title string is one which has all the words in the string start with a upper case letter.
//Examples
//checkTitle("A Mind Boggling Achievement") ➞ true
//
//checkTitle("A Simple Java Script Program!") ➞ true
//
//checkTitle("Water is transparent") ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(checkTitle("A Mind Boggling Achievement"), true, "error")
//Test.assertSimilar(checkTitle("A Simple Java Script Program!"), true, "error")
//Test.assertSimilar(checkTitle("Water is transparent"), false, "error")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Omnipresent Value

//tags: algorithms,arrays,loops,validation

//url: https://edabit.com/challenge/Twbmxzd3JwkkqAWES

//Description:
//A value is omnipresent if it exists in every subarray inside the main array.
//To illustrate:
//[[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
//// 3 exists in every element inside this array, so is omnipresent.
//Create a function that determines whether an input value is omnipresent for a given array.
//Examples
//isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true
//
//isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false
//
//isOmnipresent([[5], [5], [5], [6, 5]], 5) ➞ true
//
//isOmnipresent([[5], [5], [5], [6, 5]], 6) ➞ false
//Notes
//Sub-arrays can be any length.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1), true)
//Test.assertEquals(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6), false)
//Test.assertEquals(isOmnipresent([[5], [5], [5], [6, 5]], 5), true)
//Test.assertEquals(isOmnipresent([[5], [5], [5], [6, 5]], 6), false)
//Test.assertEquals(isOmnipresent([[5, 1], [5, 1], [5, 1], [6, 5, 1]], 1), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Transforming Words into Binary Strings

//tags: regex,strings

//url: https://edabit.com/challenge/djNxjykvXvKuHvGPZ

//Description:
//Write a function that transforms all letters from [a, m] to 0 and letters from [n, z] to 1 in a string.
//Examples
//convertBinary("house") ➞ "01110"
//
//convertBinary("excLAIM") ➞ "0100000"
//
//convertBinary("moon") ➞ "0111"
//Notes
//Conversion should be case insensitive (see example #2).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(convertBinary("house"), "01110")
//Test.assertEquals(convertBinary("excLAIM"), "0100000")
//Test.assertEquals(convertBinary("moon"), "0111")
//Test.assertEquals(convertBinary("MOOn"), "0111")
//Test.assertEquals(convertBinary("topsyTurvy"), "1111111111")

