

//title: Collatz Conjecture

//tags: control_flow,language_fundamentals

//url: https://edabit.com/challenge/KRoiyj53QPfvubpPk

//Description:
//A Collatz sequence is generated like this. Start with a positive number. If it's even, halve it. If it's odd, multiply it by three and add one. Repeat the process with the resulting number. The Collatz Conjecture is that every sequence eventually reaches 1 (continuing past 1 just results in an endless repeat of the sequence: 4, 2, 1).
//The length of the sequence from starting number to 1 varies widely.
//Create a function that takes a number as an argument and returns an array of two elements — the number of steps in the Collatz sequence of the number, and the highest number reached.
//Examples
//collatz(2) ➞ [2, 2]
//// seq = [2, 1]
//
//collatz(3) ➞ [8, 16]
//// seq = [3, 10, 5, 16, 8, 4, 2, 1]
//
//collatz(7) ➞ [17, 52]
//// seq = [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]
//
//collatz(8) ➞ [4, 8]
//// seq = [8, 4, 2, 1]
//Notes
//(Improbable) Bonus: Find a positive starting number that doesn't reach 1, and score a place in Math history plus a cash prize.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertDeepEquals(collatz(3), [8, 16])
//Test.assertDeepEquals(collatz(7), [17, 52])
//Test.assertDeepEquals(collatz(17), [13, 52])
//Test.assertDeepEquals(collatz(42), [9, 64])
//Test.assertDeepEquals(collatz(33), [27, 100])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Balancing Scales

//tags: algorithms,arrays,conditions

//url: https://edabit.com/challenge/g3tBCBvw8Q7phdrPP

//Description:
//Given an array with an odd number of elements, return whether the scale will tip "left" or "right" based on the sum of the numbers. The scale will tip on the direction of the largest total. If both sides are equal, return "balanced".
//Examples
//scaleTip([0, 0, "I", 1, 1]) ➞ "right"
//// 0 < 2 so it will tip right
//
//scaleTip([1, 2, 3, "I", 4, 0, 0]) ➞ "left"
//// 6 > 4 so it will tip left
//
//scaleTip([5, 5, 5, 0, "I", 10, 2, 2, 1]) ➞ "balanced"
//// 15 = 15 so it will stay balanced
//Notes
//The middle element will always be "I" so you can just ignore it.
//Assume the numbers all represent the same unit.
//Both sides will have the same number of elements.
//There are no such things as negative weights in both real life and the tests!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(scaleTip([0, 0, 0, "I", 1, 1, 1]), "right", "0 < 3 so it will tip right")
//Test.assertEquals(scaleTip([1, 2, 3, "I", 4, 0, 0]), "left", "6 > 4 so it will tip left")
//Test.assertEquals(scaleTip([5, 5, 5, "I", 10, 2, 3]), "balanced", "15 = 15 so it will stay balanced")
//Test.assertEquals(scaleTip([2, 3, 1, "I", 6, 0, 0]), "balanced")
//Test.assertEquals(scaleTip([500, 0, 0, "I", 32, 53, 12]), "left")
//Test.assertEquals(scaleTip([500, 0, 0, "I", 302, 53, 12]), "left")
//Test.assertEquals(scaleTip([50, 0, 0, "I", 32, 53, 12]), "right")
//Test.assertEquals(scaleTip([5, "I", 3]), "left")
//Test.assertEquals(scaleTip([500, 0, 0, "I", 500, 0, 0]), "balanced")
//Test.assertEquals(scaleTip([500, 0, 0, 0, 0, 0, "I", 32, 53, 12, 0, 0, 0]), "left")
//Test.assertEquals(scaleTip([1, 300, "I", 300, 1]), "balanced")
//Test.assertEquals(scaleTip([1, 300, "I", 300, 2]), "right")
//​
//// made by @Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Happy Birthday! 🍩

//tags: algorithms,logic,math,numbers

//url: https://edabit.com/challenge/Fo8PEd7eZsWNsMrpH

//Description:
//Mubashir is getting old but he wants to celebrate his 20th or 21st birthday only. It is possible with some basic maths skills. He just needs to select the correct number base with your help!
//For example, if his current age is 22, that's exactly 20 - in base 11. Similarly, 65 is exactly 21 - in base 32 and so on.
//Create a function that takes his current age and returns the given age 20 (or 21) years, with number base in the format specified in the below examples.
//Examples
//happyBirthday(22) ➞ "Mubashir is just 20, in base 11!"
//
//happyBirthday(65) ➞ "Mubashir is just 21, in base 32!"
//
//happyBirthday(83) ➞ "Mubashir is just 21, in base 41!"
//Notes
//Given age will always be greater than 21.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(happyBirthday(32), "Mubashir is just 20, in base 16!")
//Test.assertEquals(happyBirthday(39), "Mubashir is just 21, in base 19!")
//Test.assertEquals(happyBirthday(22), "Mubashir is just 20, in base 11!")
//Test.assertEquals(happyBirthday(65), "Mubashir is just 21, in base 32!")
//Test.assertEquals(happyBirthday(83), "Mubashir is just 21, in base 41!")
//Test.assertEquals(happyBirthday(95), "Mubashir is just 21, in base 47!")
//Test.assertEquals(happyBirthday(100), "Mubashir is just 20, in base 50!")
//Test.assertEquals(happyBirthday(120), "Mubashir is just 20, in base 60!")
//Test.assertEquals(happyBirthday(147), "Mubashir is just 21, in base 73!")

