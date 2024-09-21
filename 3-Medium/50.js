

//title: Filter Repeating Character Strings

//tags: arrays,language_fundamentals,loops,strings

//url: https://edabit.com/challenge/fxvceQdv7RHQzrx2J

//Description:
//Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).
//Examples
//identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]) 
//➞ ["aaaaaa", "d", "eeee"]
//
//identicalFilter(["88", "999", "22", "545", "133"]) 
//➞ ["88", "999", "22"]
//
//identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]) 
//➞ []
//Notes
//A string with a single character is trivially counted as a string with repeating identical characters.
//If there are no strings with repeating identical characters, return an empty array (see example #3).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(identicalFilter(['aaaaaa', 'bc', 'd', 'eeee', 'xyz']), 
//['aaaaaa', 'd', 'eeee'])
//​
//Test.assertSimilar(identicalFilter(['88', '999', '22', '545', '133']), 
//['88', '999', '22'])
//​
//Test.assertSimilar(identicalFilter(['xxxxo', 'oxo', 'xox', 'ooxxoo', 'oxo']), 
//[])
//​
//Test.assertSimilar(identicalFilter(['aa', 'bb', 'cc', 'dd', 'ee']), 
//['aa', 'bb', 'cc', 'dd', 'ee'])
//​
//Test.assertSimilar(identicalFilter(['aba', 'bcb', 'abb', 'bcc', 'eee']), 
//['eee'])
//​
//Test.assertSimilar(identicalFilter(['1', '2', '3']), 
//['1', '2', '3'])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Second Occurrence of "zip" in a String

//tags: logic,loops,strings

//url: https://edabit.com/challenge/HLvES6FKvbFGPXs7X

//Description:
//Write a function that returns the position of the second occurrence of "zip" in a string, or -1 if it does not occur at least twice. Your code should be general enough to pass every possible case where "zip" can occur in a string.
//Examples
//findZip("all zip files are zipped") ➞ 18
//
//findZip("all zip files are compressed") ➞ -1
//Notes
//Uppercase "Zip" is not the same as lowercase "zip".

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(findZip("all zip files are zipped"), 18)
//Test.assertEquals(findZip("all zip files are compressed"), -1)
//Test.assertEquals(findZip("We believe university-level zip education can be both high quality and low cost. Using the economics of the Internet, we've connected some of the greatest teachers to hundreds of thousands of students all over the world."), -1)
//Test.assertEquals(findZip("Zip is a file format used for data compression and archiving. A zip file contains one or more files that have been compressed, to reduce file size, or stored as is. The zip file format permits a number of compression algorithms."), 169)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Explosion Intensity

//tags: algorithms,conditions,formatting,strings

//url: https://edabit.com/challenge/XnZAcvr4tCD9ppyrN

//Description:
//Given a number, return a string of the word "Boom", which varies in the following ways:
//The string should include n number of "o"s, unless n is below 2 (in that case, return "boom").
//If n is evenly divisible by 2, add an exclamation mark to the end.
//If n is evenly divisible by 5, return the string in ALL CAPS.
//If n is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
//The example below should help clarify these instructions.
//Examples
//boomIntensity(4) ➞ "Boooom!"
//// There are 4 "o"s and 4 is divisible by 2 (exclamation mark included)
//
//boomIntensity(1) ➞ "boom"
//// 1 is lower than 2, so we return "boom"
//
//boomIntensity(5) ➞ "BOOOOOM"
//// There are 5 "o"s and 5 is divisible by 5 (all caps)
//
//boomIntensity(10) ➞ "BOOOOOOOOOOM!"
//// There are 10 "o"s and 10 is divisible by 2 and 5 (all caps and exclamation mark included)
//Notes
//A number which is evenly divisible by 2 and 5 will have both effects applied (see example #4).
//"Boom" will always start with a capital "B", except when n is less than 2, then return a minature explosion as "boom".

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(boomIntensity(0), "boom")
//Test.assertEquals(boomIntensity(1), "boom")
//Test.assertEquals(boomIntensity(2), "Boom!")
//Test.assertEquals(boomIntensity(3), "Booom")
//Test.assertEquals(boomIntensity(4), "Boooom!")
//Test.assertEquals(boomIntensity(5), "BOOOOOM")
//Test.assertEquals(boomIntensity(6), "Boooooom!")
//Test.assertEquals(boomIntensity(7), "Booooooom")
//Test.assertEquals(boomIntensity(8), "Boooooooom!")
//Test.assertEquals(boomIntensity(9), "Booooooooom")
//Test.assertEquals(boomIntensity(10), "BOOOOOOOOOOM!")
//Test.assertEquals(boomIntensity(11), "Booooooooooom")
//Test.assertEquals(boomIntensity(12), "Boooooooooooom!")
//Test.assertEquals(boomIntensity(13), "Booooooooooooom")
//Test.assertEquals(boomIntensity(14), "Boooooooooooooom!")
//Test.assertEquals(boomIntensity(15), "BOOOOOOOOOOOOOOOM")
//Test.assertEquals(boomIntensity(16), "Boooooooooooooooom!")
//Test.assertEquals(boomIntensity(17), "Booooooooooooooooom")
//Test.assertEquals(boomIntensity(18), "Boooooooooooooooooom!")
//Test.assertEquals(boomIntensity(19), "Booooooooooooooooooom")
//Test.assertEquals(boomIntensity(20), "BOOOOOOOOOOOOOOOOOOOOM!")
//Test.assertEquals(boomIntensity(21), "Booooooooooooooooooooom")
//Test.assertEquals(boomIntensity(22), "Boooooooooooooooooooooom!")
//Test.assertEquals(boomIntensity(23), "Booooooooooooooooooooooom")
//Test.assertEquals(boomIntensity(24), "Boooooooooooooooooooooooom!")

