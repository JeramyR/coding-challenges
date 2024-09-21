

//title: Spicy Food

//tags: arrays,higher_order_functions

//url: https://edabit.com/challenge/WoFZTyrayj9f2FPwD

//Description:
//The facts are:
//You've just finished dinner.
//You love spicy food but your friend hates it.
//Given your friend's unfortunate taste preferences, you decide to split the bill only for non-spicy items. You will pay in full for the spicy dishes.
//Given two ordered arrays, one classifying the dishes as spicy vs. non-spicy and the other listing their prices, write a function that outputs an array where the first element is how much you pay and the second element is how much your friend pays.
//billSplit(["S", "N", "S", "S"], [13, 18, 15, 4]) ➞ [41, 9]
//
//// Since:
//// You pay: [13, 9, 15, 4] = 41
//// Friend pays: [0, 9, 0, 0] = 9
//Examples
//billSplit(["N", "S", "N"], [10, 10, 20]) ➞ [25, 15]
//// You pay for half of both "N" dishes (5 + 10) and entirely pay for the "S" dish (10).
//
//billSplit(["N", "N"], [10, 10]) ➞ [10, 10]
//
//billSplit(["S", "N"], [41, 10]) ➞ [46, 5]
//Notes
//The dishes are in the same order for both input arrays.
//Remember to output an array in this order: [your payment, friend's payment]
//The array will contain at least one non-spicy dish N (you're not going to let your poor friend go hungry, are you?).
//Express both payments as integers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(billSplit(['N', 'S', 'N'], [10, 10, 20]), [25, 15])
//Test.assertSimilar(billSplit(['N', 'N'], [10, 10]), [10, 10])
//Test.assertSimilar(billSplit(['S', 'N'], [41, 10]), [46, 5])
//Test.assertSimilar(billSplit(['S', 'S', 'S', 'N', 'N'], [8, 9, 8, 7, 7]), [32, 7])
//Test.assertSimilar(billSplit(['N', 'N', 'N', 'S'], [40, 20, 20, 10]), [50, 40])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Club Entry

//tags: logic,numbers,regex

//url: https://edabit.com/challenge/ySJdX68yQdbP3rz2A

//Description:
//A night club will give you a word. For entrance, you need to provide the right number according to the provided word.
//Every given word will have a doubled letter, like "dd" in addiction. To answer the right number you need to find the doubled letter's position in the alphabet and multiply this number with 4.
//Create a function that takes the argument of word and returns the right number.
//Examples
//clubEntry("hill") ➞ 48
//// 'l' is 12th in the alphabet
//// 12*4 = 48
//
//clubEntry("apple") ➞ 64
//
//clubEntry("bee") ➞ 20
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(clubEntry("lettuce"), 80)
//Test.assertEquals(clubEntry("hill"), 48)
//Test.assertEquals(clubEntry("apple"), 64)
//Test.assertEquals(clubEntry("addiction"), 16)
//Test.assertEquals(clubEntry("bee"), 20)
//Test.assertEquals(clubEntry("zz"), 104)
//Test.assertEquals(clubEntry("mubashirr"), 72)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Left, Right Shift

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/GSXZ9PBjGhKijkC4o

//Description:
//Create two functions: a left-shift function and a right-shift function. Each function will take in an array and a single parameter: the number of shifts.
//[1, 2, 3, 4, 5]
//
//[2, 3, 4, 5, 1]  // left shift of 1
//[5, 1, 2, 3, 4]  // left shift of 4
//
//[5, 1, 2, 3, 4]  // right shift of 1
//[3, 4, 5, 1, 2]  // right shift of 3
//Examples
//leftShift([1, 2, 3, 4], 1) ➞ [2, 3, 4, 1]
//
//rightShift([1, 2, 3, 4], 1) ➞ [4, 1, 2, 3]
//
//leftShift([1, 2, 3, 4, 5], 3) ➞ [4, 5, 1, 2, 3]
//
//leftShift([1, 2, 3, 4, 5], 5) ➞ [1, 2, 3, 4, 5]
//// You have fully shifted the array, you end up back where you began.
//
//leftShift([1, 2, 3, 4, 5], 6) ➞ [2, 3, 4, 5, 1]
//// You should be able to take in numbers greater than the length.
//// Think of the length of the array as a modulo.
//Notes
//num might be higher than the number of values in the array.
//num will never be negative.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(leftShift([1, 2, 3, 4], 1), [2, 3, 4, 1])
//Test.assertSimilar(rightShift([1, 2, 3, 4], 1), [4, 1, 2, 3])
//Test.assertSimilar(leftShift([1, 2, 3, 4, 5], 3), [4, 5, 1, 2, 3])
//Test.assertSimilar(leftShift([1, 2, 3, 4, 5], 5), [1, 2, 3, 4, 5])
//Test.assertSimilar(leftShift([1, 2, 3, 4, 5], 6), [2, 3, 4, 5, 1])
//Test.assertSimilar(leftShift([1, 2, 3, 4, 5], 1), [2, 3, 4, 5, 1])
//Test.assertSimilar(leftShift([1, 2, 3, 4, 5], 4), [5, 1, 2, 3, 4])
//Test.assertSimilar(rightShift([1, 2, 3, 4, 5], 1), [5, 1, 2, 3, 4])
//Test.assertSimilar(rightShift([1, 2, 3, 4, 5], 3), [3, 4, 5, 1, 2])
//Test.assertSimilar(rightShift([1, 2, 3, 4, 5], 0), [1, 2, 3, 4, 5])
//Test.assertSimilar(rightShift([1, 2, 3, 4, 5], 15), [1, 2, 3, 4, 5])

