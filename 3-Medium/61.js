

//title: Radioactive Decay

//tags: math,physics

//url: https://edabit.com/challenge/bQPSi3s2zp6sjrYJL

//Description:
//A half life is the amount of time for half of a radioactive substance to decay.
//After 1 half life, 50% of a substance will be left.
//After 2 half lives, 25% of a substance will be left.
//After 3 half lives, 12.5% of a substance will be left, etc...
//Create a function which calculates the remaining mass and the number of years that it took for the substance to decay. You will be given:
//The mass of the substance.
//The time in years for a halflife to elapse.
//The number of half lives.
//Worked Example
//halflifeCalculator(1000, 5730, 2) ➞ [250, 11460]
//
//// There are 2 half lives, so the mass decays from 1000 to 500, then from 500 to 250.
//// Each halflife is 5730 years, and since there were 2, it took 11460 years in total.
//Examples
//halflifeCalculator(1600, 6, 3) ➞ [200, 18]
//
//halflifeCalculator(13, 500, 1) ➞ [6.5, 500]
//
//halflifeCalculator(100, 35, 5) ➞ [3.125, 175]
//Notes
//Round the final mass to three decimal places.
//All inputs are positive numbers.
//Return the final mass first, then the number of years.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(halflifeCalculator(1000, 5730, 2), [250, 11460])
//Test.assertSimilar(halflifeCalculator(1600, 6, 3), [200, 18])
//Test.assertSimilar(halflifeCalculator(13, 500, 1), [6.5, 500])
//Test.assertSimilar(halflifeCalculator(100, 35, 5), [3.125, 175])
//Test.assertSimilar(halflifeCalculator(11037, 53, 6), [172.453, 318])
//​
//// Author: Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Even Index Elements in Array

//tags: arrays,language_fundamentals,numbers

//url: https://edabit.com/challenge/vwLPMwTHQshP3PkJN

//Description:
//Create a function that takes an array of integers and returns the sum of all the integers that have an even index, multiplied by the integer at the last index.
//For example:
//[2, 3, 4, 5] ➞ 30
//(2 + 4) * 5 ➞ 30
//
//[1, 4, 5, 6, 7, 2, 3] ➞ 48
//(1 + 5 + 7 + 3) * 3 ➞ 48
//Examples
//evenLast([]) ➞ 0
//
//evenLast([1, 3, 3, 1, 10]) ➞ 140
//
//evenLast([-11, 3, 3, 1, 10]) ➞ 20
//Notes
//If the array is empty, return 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(evenLast([]), 0)
//Test.assertEquals(evenLast([1, 3, 3, 1, 10]), 140)
//Test.assertEquals(evenLast([-11, 3, 3, 1, 10]), 20)
//Test.assertEquals(evenLast([1, 31, 3, 11, 0]), 0)
//Test.assertEquals(evenLast([1, 2, 3, 4, 5, 6, 8]), 136) 
//Test.assertEquals(evenLast([2, 3, 4, 5]), 30)
//Test.assertEquals(evenLast([2, 4, 6, 8, 9, 11]), 187)
//Test.assertEquals(evenLast([6, 5, 7, 2, 1]), 14)
//Test.assertEquals(evenLast([2, 2, 2, 2]), 8)
//Test.assertEquals(evenLast([5, 1, 2, 3, 4, 6, 7, 8, 4]), 88)
//Test.assertEquals(evenLast([2, 4, 3, 2, 3, 4, 4, 5]), 60)
//Test.assertEquals(evenLast([7, 23, 22, 6, 8, 2]), 74)
//Test.assertEquals(evenLast([33, 2, -22, 5, -6, 5]), 25)
//Test.assertEquals(evenLast([5, 6, 7, 3, 22, 2]), 68)
//Test.assertEquals(evenLast([3, 4, 5, 6, 7, 8]), 120)
//Test.assertEquals(evenLast([1, 4, 5, 6, 7, 2, 3]), 48)
//Test.assertEquals(evenLast([2, 7, 0, 3, 4, 8, 3]), 27)
//Test.assertEquals(evenLast([9, 3, -6, 2, 7, 8]), 80)
//Test.assertEquals(evenLast([7, 7, 7, 7, 1]), 15)
//Test.assertEquals(evenLast([6, 7, 8, 9, 10, 3, 4]), 112)
//Test.assertEquals(evenLast([9, 8, 7, 6, 5, 4, 3, 2]), 48)
//Test.assertEquals(evenLast([]), 0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Shhh Be Quiet Function

//tags: formatting,language_fundamentals,strings

//url: https://edabit.com/challenge/wJBWjX5kSPMKLFmPX

//Description:
//Write a function that removes all capital letters from a sentence except the first letter, puts quotation marks around the sentence and adds ", whispered Edabit." at the end.
//Examples
//shhh("HI THERE!") ➞ '"Hi there!", whispered Edabit.'
//
//shhh("tHaT'S Pretty awesOme") ➞ '"That's pretty awesome", whispered Edabit.'
//
//shhh("") ➞ '"", whispered Edabit.'
//Notes
//Don't forget to surround the original string with double quotation marks "".

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(shhh("HI THERE!"), "\"Hi there!\", whispered Edabit.")
//Test.assertEquals(shhh("cool cool cool"), "\"Cool cool cool\", whispered Edabit.")
//Test.assertEquals(shhh("YEAH yeah YEAH yeah"), "\"Yeah yeah yeah yeah\", whispered Edabit.")
//Test.assertEquals(shhh(""), "\"\", whispered Edabit.")

