

//title: Same on Both Ends

//tags: loops,regex,strings

//url: https://edabit.com/challenge/JDDeK9jSFKJbfzhMt

//Description:
//Given a sentence, return the number of words which have the same first and last letter.
//Examples
//countSameEnds("Pop! goes the balloon") ➞ 1
//
//countSameEnds("And the crowd goes wild!") ➞ 0
//
//countSameEnds("No I am not in a gang.") ➞ 1
//Notes
//Don't count single character words (such as "I" and "A" in example #3).
//The function should not be case sensitive, meaning a capital "P" should match with a lowercase one.
//Mind the punctuation!
//Bonus points indeed for using regex!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(countSameEnds('Pop! the balloon!'), 1)
//Test.assertEquals(countSameEnds('My mom is not a nun.'), 2)
//Test.assertEquals(countSameEnds('A fine morning'), 0)
//Test.assertEquals(countSameEnds('And the crowd goes wild!'), 0)
//Test.assertEquals(countSameEnds('No I am not in a gang.'), 1)
//Test.assertEquals(countSameEnds('Taste the difference'), 0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Get the Excel Column

//tags: loops,strings

//url: https://edabit.com/challenge/bqJmJxZYgkRKrLq7v

//Description:
//Excel column names are in the following format:
//A, B, ..., Z, AA, ..., AZ, BA, ..., ZZ, AAA, AAB, ...
//Write a function that returns the column number from the row name.
//Examples
//column("A") ➞ 1
//
//column("Z") ➞ 26
//
//column("AA") ➞ 27
//
//column("BA") ➞ 53
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(column("A"), 1)
//Test.assertEquals(column("B"), 2)
//Test.assertEquals(column("Z"), 26)
//Test.assertEquals(column("AA"), 27)
//Test.assertEquals(column("BA"), 53)
//Test.assertEquals(column("BB"), 54)
//Test.assertEquals(column("CW"), 101)
//Test.assertEquals(column("DD"), 108)
//Test.assertEquals(column("PQ"), 433)
//Test.assertEquals(column("ZZ"), 702)
//Test.assertEquals(column("ABC"), 731)
//Test.assertEquals(column("ZZT"), 18272)
//Test.assertEquals(column("STVW"), 348059)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sum of Positive Integers

//tags: regex,strings

//url: https://edabit.com/challenge/xjv7kk6Q7tDhyZTtZ

//Description:
//Create a function that takes a string containing integers as well as other characters and return the sum of the positive integers only.
//Examples
//positiveSum("-12#-33 13%14&-11") ➞ 27
//// 13 + 14 = 27
//
//positiveSum("22 13%14&-11-22 13 12 0") ➞ 74
//// 22 + 13 + 14 + 13 + 12 = 74
//
//positiveSum("0 12 12 2") ➞ 26
//Notes
//There is at least one positive integer.
//Each integer is separated by a space, #, %, &, etc.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(positiveSum("-12#-33 13%14&-11"), 27)
//Test.assertEquals(positiveSum("22 13%14&-11-22 13 12 0"), 74)
//Test.assertEquals(positiveSum("3%4&-1 13 a 20 -2 b c"), 40)
//Test.assertEquals(positiveSum("2 3%-144&-1123 -2122"), 5)
//Test.assertEquals(positiveSum("-123 -8 1"), 1)
//Test.assertEquals(positiveSum("-122 2"), 2)
//Test.assertEquals(positiveSum("-121 0 3"), 3)
//Test.assertEquals(positiveSum("0 12 12 2"), 26)

