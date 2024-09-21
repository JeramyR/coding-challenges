

//title: Flick Switch

//tags: arrays,logic,loops

//url: https://edabit.com/challenge/ny2JAEmW5j6NgmpC8

//Description:
//Create a function that always returns true for every item in a given array. However, if an element is the word "flick", switch to always returning the opposite boolean value.
//Examples
//flickSwitch(["edabit", "flick", "eda", "bit"]) ➞ [true, false, false, false]
//
//flickSwitch(["flick", 11037, 3.14, 53]) ➞ [false, false, false, false]
//
//flickSwitch([false, false, "flick", "sheep", "flick"]) ➞ [true, true, false, false, true]
//Notes
//"flick" will always be given in lowercase.
//An array may contain multiple flicks.
//Switch the boolean value on the same element as the flick itself.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(flickSwitch(['edabit', 'flick', 'eda', 'bit']), [true, false, false, false])
//Test.assertSimilar(flickSwitch(['flick', 11037, 3.14, 53]), [false, false, false, false])
//Test.assertSimilar(flickSwitch([false, false, 'flick', 'sheep', 'flick']), [true, true, false, false, true])
//Test.assertSimilar(flickSwitch([flickSwitch]), [true])
//Test.assertSimilar(flickSwitch([('john', 'smith', 'susan'), 'flick']), [true, false])
//Test.assertSimilar(flickSwitch(['flick', 'flick', 'flick', 'flick', 'flick']), [false, true, false, true, false])
//Test.assertSimilar(flickSwitch([]), [])
//​
//// Author: Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Simon Says

//tags: arrays,games,validation

//url: https://edabit.com/challenge/i7gQkdYrx4yyW7uLp

//Description:
//Create a function that takes in two arrays and returns true if the second array follows the first array by one element, and false otherwise. In other words, determine if the second array is the first array shifted to the right by 1.
//Examples
//simonSays([1, 2], [5, 1]) ➞ true
//
//simonSays([1, 2], [5, 5]) ➞ false
//
//simonSays([1, 2, 3, 4, 5], [0, 1, 2, 3, 4]) ➞ true
//
//simonSays([1, 2, 3, 4, 5], [5, 5, 1, 2, 3]) ➞ false
//Notes
//Both input arrays will be of the same length, and will have a minimum length of 2.
//The values of the 0-indexed element in the second list and the n-1th indexed element in the first list do not matter.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(simonSays(
//  [1, 2, 3, 4, 5],
//  [0, 1, 2, 3, 4]
//), true)
//​
//Test.assertEquals(simonSays(
//  [1, 2, 3, 4, 5],
//  [5, 5, 1, 2, 3]
//), false)
//​
//Test.assertEquals(simonSays(
//  [1, 2],
//  [5, 1]
//), true)
//​
//Test.assertEquals(simonSays(
//  [1, 2],
//  [5, 5]
//), false)
//​
//Test.assertEquals(simonSays(
//  [1, 2, 3],
//  [0, 1, 2]
//), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Numbered Alphabet

//tags: algorithms,formatting,logic,strings

//url: https://edabit.com/challenge/i3b97FrfXT5mr9Lnx

//Description:
//Create a function that converts a string of letters to their respective number in the alphabet.
//A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	...
//0	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17	18	19	20	21	22	...
//Examples
//alphNum("XYZ") ➞ "23 24 25"
//
//alphNum("ABCDEF") ➞ "0 1 2 3 4 5"
//
//alphNum("JAVASCRIPT") ➞ "9 0 21 0 18 2 17 8 15 19"
//Notes
//Make sure the numbers are spaced.
//All letters will be UPPERCASE.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(alphNum("ABCD"), "0 1 2 3")
//Test.assertEquals(alphNum("BCDA"), "1 2 3 0")
//Test.assertEquals(alphNum("AAA"), "0 0 0")
//Test.assertEquals(alphNum("XYZ"), "23 24 25")

