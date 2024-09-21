

//title: Calculate an Earned Run Average

//tags: math,numbers,strings

//url: https://edabit.com/challenge/94RHwrv6PfaqEGYtr

//Description:
//Create a function that returns an Earned Run Average (ERA). An ERA is calculated by multiplying 9 by the quotient of Earned Runs Allowed er divided by ip Innings Pitched.
//In baseball statistics, innings are represented with a fractional part of .1 (1/3) or .2 (2/3) to represent the number of outs in an inning. A whole number or a number with a fractional part of .0 represents a full inning with three outs. Check the Resources tab for a deeper explanation.
//Examples
//era(22, 99) ➞ 2.00
//
//era(23, 99.1) ➞ 2.08
//
//era(24, 99.2) ➞ 2.17
//Notes
//ERA is represented with a scale of 2: 2.08
//For 1/3 and 2/3, use a scale of 2.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(era(22, 99), "2.00")
//Test.assertEquals(era(23, 99.1), "2.08")
//Test.assertEquals(era(24, 99.2), "2.17")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: One Plus One

//tags: math,strings

//url: https://edabit.com/challenge/ci52KkmCATSCbSbTP

//Description:
//Create a function that outputs the result of a math expression in words.
//Examples
//wordedMath("One plus one") ➞ "Two"
//
//wordedMath("zero Plus one") ➞ "One"
//
//wordedMath("one minus one") ➞ "Zero"
//Notes
//Expect only the operations plus and minus.
//Expect to only get numbers and answers from 0 to 2.
//The first letter of the answer must be capitalised.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(wordedMath("One plus one"), "Two")
//Test.assertEquals(wordedMath("zero Plus one"), "One")
//Test.assertEquals(wordedMath("one minus one"), "Zero")
//​
//// made by @Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Pentagonal Number

//tags: geometry,logic,numbers,recursion

//url: https://edabit.com/challenge/wmdanmJkaT9waTg3y

//Description:
//Write a function that takes a positive integer num and calculates how many dots exist in a pentagonal shape around the center dot on the Nth iteration.
//In the image below you can see the first iteration is only a single dot. On the second, there are 6 dots. On the third, there are 16 dots, and on the fourth there are 31 dots.
//
//Return the number of dots that exist in the whole pentagon on the Nth iteration.
//Examples
//pentagonal(1) ➞ 1
//
//pentagonal(2) ➞ 6
//
//pentagonal(3) ➞ 16
//
//pentagonal(8) ➞ 141
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(pentagonal(1), 1)
//Test.assertEquals(pentagonal(3), 16)
//Test.assertEquals(pentagonal(8), 141)
//Test.assertEquals(pentagonal(10), 226)
//Test.assertEquals(pentagonal(15), 526)
//Test.assertEquals(pentagonal(33), 2641)
//Test.assertEquals(pentagonal(43), 4516)
//Test.assertEquals(pentagonal(13), 391)
//Test.assertEquals(pentagonal(50), 6126)
//Test.assertEquals(pentagonal(62), 9456)
//Test.assertEquals(pentagonal(21), 1051)

