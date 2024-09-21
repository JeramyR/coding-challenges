

//title: The Twins Paradox

//tags: math,numbers

//url: https://edabit.com/challenge/B4GHBsZTGffz2ySGL

//Description:
//Jack and Jill are twins. When they are 10 years of age, Jack leaves earth in his spaceship bound for Altair IV, some 17 light-years distant. Though not equipped with warp drive, Jack's ship is still capable of attaining near light speed. When he returns to earth he finds that Jill has grown to adulthood while he, Jack, remains a young boy.
//Albert Einstein had predicted this strange quirk of time in his 1905 paper "On the Electrodynamics of Moving Bodies" aka The Theory of Special Relativity. It has been verified experimentally many times.
//Implement a function that has as its arguments: The twins' age at the time of Jack's departure, the distance in light-years to the destination star, and the speed of Jack's ship as a fraction of the speed of light. The function will return Jack's age and Jill's age at the time of Jack's return to earth, rounded to the nearest tenth of a year. The math is simple enough for 10-year-old Jack to understand. See Resources for help.
//Examples
//twins(20, 10, 0.4) ➞ "Jack's age is 65.8, Jill's age is 70.0"
//
//twins(20, 10, 0.8) ➞ "Jack's age is 35.0, Jill's age is 45.0"
//
//twins(10, 16.73, 0.999) ➞ "Jack's age is 11.5, Jill's age is 43.5"
//// The Altair IV trip.
//Notes
//We are assuming for the sake of simplicity that Jack's periods of acceleration and deceleration are negligibly brief. That is a huge assumption but, nevertheless, it doesn't invalidate the age calculations.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(twins(20, 10, 0.4), "Jack's age is 65.8, Jill's age is 70.0")
//Test.assertEquals(twins(20, 10, 0.8), "Jack's age is 35.0, Jill's age is 45.0")
//Test.assertEquals(twins(10, 16.73, 0.999), "Jack's age is 11.5, Jill's age is 43.5")
//Test.assertEquals(twins(1, 5, 0.1), "Jack's age is 100.5, Jill's age is 101.0")
//Test.assertEquals(twins(25, 30, 0.99999), "Jack's age is 25.3, Jill's age is 85.0")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Muddled Middles

//tags: loops,strings

//url: https://edabit.com/challenge/GcAyjyN5rvdHSXnLP

//Description:
//Given a sentence of all lowercase words, reverse all the letters in each word, but leave the first and last letters as they are.
//Examples
//mixMiddle("the quick brown fox jumps high") ➞ "the qciuk bworn fox jpmus hgih"
//
//mixMiddle("this sentence is quite muddled") ➞ "tihs scnetnee is qtiue melddud"
//
//mixMiddle("buying a first-class ticket") ➞ "bniyug a fsalc-tsris tekcit"
//Notes
//Treat hyphenated words like one word (example #3).
//Notice how one, two and three-letter words remain unchanged!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(mixMiddle("the quick brown fox jumps high"), "the qciuk bworn fox jpmus hgih")
//Test.assertEquals(mixMiddle("this sentence is quite muddled"), "tihs scnetnee is qtiue melddud")
//Test.assertEquals(mixMiddle("buying a first-class ticket"), "bniyug a fsalc-tsris tekcit")
//Test.assertEquals(mixMiddle("hello world"), "hlleo wlrod")
//Test.assertEquals(mixMiddle("is it a cat or a dog"), "is it a cat or a dog")
//​
//// Author : Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Reverse Coding Challenge #4

//tags: arrays,strings

//url: https://edabit.com/challenge/s6ZMJPDH4woN3d3Gc

//Description:
//This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.
//Your task is to create a function that, when fed the inputs below, produce the sample outputs shown.
//Examples
//"hello" ➞ [4, 1, 3, 3, 1]
//
//"maybe" ➞ [4, 2, 1, 3, 1]
//
//"hopeless" ➞ [0, 7, 0, 5, 4, 5, 3, 3]
//
//"higher" ➞ [2, 3, 1, 2, 5, 0]
//
//"movement" ➞ [5, 7, 6, 5, 5, 5, 6, 4]
//Notes
//If you get stuck, see Comments for a hint.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(mysteryFunc("hello"), [4, 1, 3, 3, 1])
//Test.assertSimilar(mysteryFunc("maybe"), [4, 2, 1, 3, 1])
//Test.assertSimilar(mysteryFunc("hopeless"), [0, 7, 0, 5, 4, 5, 3, 3])
//Test.assertSimilar(mysteryFunc("higher"), [2, 3, 1, 2, 5, 0])
//Test.assertSimilar(mysteryFunc("movement"), [5, 7, 6, 5, 5, 5, 6, 4])

