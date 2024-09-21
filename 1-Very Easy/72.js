

//title: True Ones, False Zeros

//tags: arrays,data_structures,loops,strings

//url: https://edabit.com/challenge/3BqLw3Rp85Y94nAho

//Description:
//Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.
//Examples
//integerBoolean("100101") ➞ [true, false, false, true, false, true]
//
//integerBoolean("10") ➞ [true, false]
//
//integerBoolean("001") ➞ [false, false, true]
//Notes
//Expect numbers with 0 and 1 only.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(integerBoolean("100101"), [true, false, false, true, false, true])
//Test.assertSimilar(integerBoolean("10"), [true, false])
//Test.assertSimilar(integerBoolean("001"), [false, false, true])
//Test.assertSimilar(integerBoolean(""), [])
//Test.assertSimilar(integerBoolean("111"), [true, true, true])
//Test.assertSimilar(integerBoolean("000"), [false, false, false])
//Test.assertSimilar(integerBoolean("10010110"), [true, false, false, true, false, true, true, false])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Forbidden Letter

//tags: arrays,loops,strings,validation

//url: https://edabit.com/challenge/AhFCvDdQeA7TnKSqe

//Description:
//Given a letter and an array of words, return whether the letter does not appear in any of the words.
//Examples
//forbiddenLetter("r", ["rock", "paper", "scissors"]) ➞ false
//
//forbiddenLetter("a", ["spoon", "fork", "knife"]) ➞ true
//
//forbiddenLetter("m", []) ➞ true
//Notes
//All inputs given will be in lowercase.
//You will always be given a forbidden letter, but there may be empty arrays.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(forbiddenLetter('e', ['rinse', 'and', 'repeat']), false)
//Test.assertEquals(forbiddenLetter('d', ['python', 'javascript', 'ruby', 'fortran']), true)
//Test.assertEquals(forbiddenLetter('a', ['spoon', 'fork', 'knife']), true)
//Test.assertEquals(forbiddenLetter('b', ['test', 'dot', 'assert', 'equals']), true)
//Test.assertEquals(forbiddenLetter('i', ['rock', 'paper', 'scissors']), false)
//Test.assertEquals(forbiddenLetter('t', []), true)
//​
//// Author: Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Chinese Zodiac

//tags: arrays,conditions,language_fundamentals

//url: https://edabit.com/challenge/8xAvdyphm83tzKCKt

//Description:
//Create a function that takes a year as an argument and returns the corresponding Chinese zodiac.
//Examples
//chineseZodiac(2021) ➞ "Ox"
//
//chineseZodiac(2020) ➞ "Rat"
//
//chineseZodiac(1933) ➞ "Rooster"
//Notes
//The list of animals used can vary slightly, so check the Resources tab for the list that you will need for this challenge.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(chineseZodiac(2021), "Ox")
//Test.assertEquals(chineseZodiac(2020), "Rat")
//Test.assertEquals(chineseZodiac(1938), "Tiger")
//Test.assertEquals(chineseZodiac(1951), "Rabbit")
//Test.assertEquals(chineseZodiac(1964), "Dragon")
//Test.assertEquals(chineseZodiac(1977), "Snake")
//Test.assertEquals(chineseZodiac(1990), "Horse")
//Test.assertEquals(chineseZodiac(2003), "Sheep")
//Test.assertEquals(chineseZodiac(2016), "Monkey")
//Test.assertEquals(chineseZodiac(1969), "Rooster")
//Test.assertEquals(chineseZodiac(1982), "Dog")
//Test.assertEquals(chineseZodiac(1995), "Pig")

