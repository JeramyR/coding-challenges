

//title: Numbers to Arrays and Vice Versa

//tags: arrays,numbers

//url: https://edabit.com/challenge/rufYqKzTLvDefFmKa

//Description:
//Write two functions:
//toArray(), which converts a number to an array of its digits.
//toNumber(), which converts an array of digits back to its number.
//Examples
//toArray(235) ➞ [2, 3, 5]
//
//toArray(0) ➞ [0]
//
//toNumber([2, 3, 5]) ➞ 235
//
//toNumber([0]) ➞ 0
//Notes
//All test cases will be weakly positive numbers: >= 0

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(toArray(235), [2, 3, 5])
//Test.assertSimilar(toArray(19), [1, 9])
//Test.assertSimilar(toArray(0), [0] )
//Test.assertEquals(toNumber([2, 3, 5]), 235)
//Test.assertEquals(toNumber([1, 9]), 19)
//Test.assertEquals(toNumber([0]), 0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Most Left Digit

//tags: numbers,sorting,strings

//url: https://edabit.com/challenge/tPvx6pgPmerPrwqM8

//Description:
//Write a function that takes a string as an argument and returns the left most digit in the string.
//Examples
//leftDigit("TrAdE2W1n95!") ➞ 2
//
//leftDigit("V3r1ta$") ➞ 3
//
//leftDigit("U//DertHe1nflu3nC3") ➞ 1
//
//leftDigit("J@v@5cR1PT") ➞ 5
//Notes
//Each string will have at least two numbers.
//Return the result as an integer.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(leftDigit("TrAdE2W1n95!"), 2)
//Test.assertEquals(leftDigit("V3r1ta$"), 3)
//Test.assertEquals(leftDigit("U//DertHe1nflu3nC3"), 1)
//Test.assertEquals(leftDigit("J@v@5cR1PT"), 5)
//Test.assertEquals(leftDigit("0nSlaUgh7*d3atH"), 0)
//Test.assertEquals(leftDigit("F8andD3st1nY"), 8)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Video Length in Seconds

//tags: language_fundamentals,math,numbers,strings

//url: https://edabit.com/challenge/n7qZMpuLsAMGBGNLA

//Description:
//You are given the length of a video in minutes. The format is mm:ss (e.g.: "02:54"). Create a function that takes the video length and return it in seconds.
//Examples
//minutesToSeconds("01:00") ➞ 60
//
//minutesToSeconds("13:56") ➞ 836
//
//minutesToSeconds("10:60") ➞ false
//Notes
//The video length is given as a string.
//If the number of seconds is 60 or over, return false (see example #3).
//You may get a number of minutes over 99 (e.g. "121:49" is perfectly valid).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(minutesToSeconds("01:00"), 60)
//Test.assertEquals(minutesToSeconds("13:56"), 836)
//Test.assertEquals(minutesToSeconds("10:60"), false, "60 is invalid")
//Test.assertEquals(minutesToSeconds("132:21"), 7941)
//Test.assertEquals(minutesToSeconds("132:271"), false)
//Test.assertEquals(minutesToSeconds("01:30"), 90)
//Test.assertEquals(minutesToSeconds("10:00"), 600)
//​
//// made by @Joshua Señoron

