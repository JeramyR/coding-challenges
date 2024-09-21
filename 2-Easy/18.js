

//title: Return the Index of the First Vowel

//tags: language_fundamentals,loops,regex,strings

//url: https://edabit.com/challenge/ppBDRwSoqZYcR95Aq

//Description:
//Create a function that returns the index of the first vowel in a string.
//Examples
//firstVowel("apple") ➞ 0
//
//firstVowel("hello") ➞ 1
//
//firstVowel("STRAWBERRY") ➞ 3
//
//firstVowel("pInEaPPLe") ➞ 1
//Notes
//Input will be single words.
//Characters in words will be upper or lower case.
//"y" is not considered a vowel.
//Input always contains a vowel.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(firstVowel("hello"), 1)
//Test.assertEquals(firstVowel("apple"), 0)
//Test.assertEquals(firstVowel("string"), 3)
//Test.assertEquals(firstVowel("STRAWBERRY"), 3)
//Test.assertEquals(firstVowel("MELON"), 1)
//Test.assertEquals(firstVowel("piNNEaPLE"), 1)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Is it True?

//tags: language_fundamentals,numbers,strings,validation

//url: https://edabit.com/challenge/b8XYLrNhqryNjkDPd

//Description:
//In this challenge you will be given a relation between two numbers, written as a string. Write a function that determines if the relation is true or false.
//Examples
//isTrue("2=2") ➞ true
//
//isTrue("8<7") ➞ false
//
//isTrue("5=13") ➞ false
//
//isTrue("15>4") ➞ true
//Notes
//Tests will only have three types of relations: =, >, and <
//Many approaches work here, but the eval() function is particularly useful!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isTrue("8<7"), false)
//Test.assertEquals(isTrue("15>4"), true)
//Test.assertEquals(isTrue("6>6"), false)
//Test.assertEquals(isTrue("10<10"), false)
//Test.assertEquals(isTrue("10<9"), false)
//Test.assertEquals(isTrue("5>6"), false)
//Test.assertEquals(isTrue("2=2"), true)
//Test.assertEquals(isTrue("5=13"), false)
//Test.assertEquals(isTrue("15=137"), false)
//Test.assertEquals(isTrue("101=101"), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Calculate the Mean

//tags: math,numbers

//url: https://edabit.com/challenge/8zBhNfrQv7CWKvcx3

//Description:
//Create a function that takes an array of numbers and returns the mean (average) of all those numbers.
//Examples
//mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3]) ➞ 2.55
//
//mean([2, 3, 2, 3]) ➞ 2.50
//
//mean([3, 3, 3, 3, 3]) ➞ 3.00
//Notes
//Round to two decimal places.
//You can expect a number ranging from 0 to 10,000.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals((mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3])), 2.55)
//Test.assertEquals((mean([324, 543, 654, 9876])), 2849.25)
//Test.assertEquals((mean([0, 0, 0, 0])), 0.00)
//Test.assertEquals((mean([30, 40, 20, 100, 30])), 44.00)
//Test.assertEquals((mean([1, 1, 1, 0])), 0.75)
//Test.assertEquals((mean([1, 1, 0, 1, 2, 1, 1, 1, 0, 0])), 0.80)
//Test.assertEquals((mean([10000])), 10000.00)

