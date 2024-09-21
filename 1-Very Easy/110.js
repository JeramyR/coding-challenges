

//title: Alphabet Soup

//tags: formatting,sorting,strings

//url: https://edabit.com/challenge/bHDbMWpdeNaw23jqT

//Description:
//Create a function that takes a string and returns a string with its letters in alphabetical order.
//Examples
//AlphabetSoup("hello") ➞ "ehllo"
//
//AlphabetSoup("edabit") ➞ "abdeit"
//
//AlphabetSoup("hacker") ➞ "acehkr"
//
//AlphabetSoup("geek") ➞ "eegk"
//
//AlphabetSoup("javascript") ➞ "aacijprstv"
//Notes
//You can assume numbers and punctuation symbols won't be included in test cases. You'll only have to deal with single word, alphabetic characters.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(AlphabetSoup("hello"), "ehllo");
//Test.assertEquals(AlphabetSoup("edabit"), "abdeit");
//Test.assertEquals(AlphabetSoup("hacker"), "acehkr");
//Test.assertEquals(AlphabetSoup("geek"), "eegk");
//Test.assertEquals(AlphabetSoup("javascript"), "aacijprstv");
//Test.assertEquals(AlphabetSoup("credibility"), "bcdeiiilrty");
//Test.assertEquals(AlphabetSoup("apostrophe"), "aehoopprst");
//Test.assertEquals(AlphabetSoup("determination"), "adeeiimnnortt");
//Test.assertEquals(AlphabetSoup("win"), "inw");
//Test.assertEquals(AlphabetSoup("synthesis"), "ehinsssty");

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Difference of Max and Min Numbers in Array

//tags: arrays,loops,math,numbers

//url: https://edabit.com/challenge/v9DwaeR6NQoapEvHh

//Description:
//Create a function that takes an array and returns the difference between the biggest and smallest numbers.
//Examples
//diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
//// Smallest number is -50, biggest is 32.
//
//diffMaxMin([44, 32, 86, 19]) ➞ 67
//// Smallest number is 19, biggest is 86.
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(diffMaxMin([10, 4, 1, 2, 8, 91]), 90)
//Test.assertEquals(diffMaxMin([-70, 43, 34, 54, 22]), 124)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Generate a Countdown of Numbers in an Array

//tags: arrays,loops

//url: https://edabit.com/challenge/xr4Xf28xeSrc7XmCF

//Description:
//Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.
//Examples
//countdown(5) ➞ [5, 4, 3, 2, 1, 0]
//
//countdown(1) ➞ [1, 0]
//
//countdown(0) ➞ [0]
//Notes
//The argument will always be greater than or equal to zero.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(countdown(3), [3, 2, 1, 0])
//Test.assertSimilar(countdown(20), [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
//Test.assertSimilar(countdown(1), [1, 0])
//Test.assertSimilar(countdown(0), [0])

