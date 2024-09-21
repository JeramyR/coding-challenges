

//title: Recreating the String.length Property

//tags: arrays,language_fundamentals,loops

//url: https://edabit.com/challenge/bvPBzNq9FutDb2X6J

//Description:
//Create a function which returns the length of a string, WITHOUT using String.length property.
//Examples
//length("Hello World") ➞ 11
//
//length("Edabit") ➞ 6
//
//length("wash your hands!") ➞ 16
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(length("Hello World"), 11)
//Test.assertEquals(length("Edabit"), 6)
//Test.assertEquals(length("wash your hands!"), 16)
//Test.assertEquals(length("34445"), 5)
//Test.assertEquals(length("   "), 3)
//Test.assertEquals(length(""), 0)
//Test.assertEquals(length("%%$"), 3)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Half, Quarter and Eighth

//tags: arrays,math

//url: https://edabit.com/challenge/M9EfvGwTqvSZ5XbRM

//Description:
//Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.
//Examples
//halfQuarterEighth(6) ➞ [3, 1.5, 0.75]
//
//halfQuarterEighth(22) ➞ [11, 5.5, 2.75]
//
//halfQuarterEighth(25) ➞ [12.5, 6.25, 3.125]
//Notes
//The order of the array is: half, quarter, eighth.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(halfQuarterEighth(6), [3, 1.5, 0.75])
//Test.assertSimilar(halfQuarterEighth(22), [11, 5.5, 2.75])
//Test.assertSimilar(halfQuarterEighth(25), [12.5, 6.25, 3.125])
//Test.assertSimilar(halfQuarterEighth(18), [9, 4.5, 2.25])
//Test.assertSimilar(halfQuarterEighth(98), [49, 24.5, 12.25])
//Test.assertSimilar(halfQuarterEighth(14), [7, 3.5, 1.75])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: AND, OR and NOT

//tags: conditions,logic

//url: https://edabit.com/challenge/yuCSeYGAngyT77gsm

//Description:
//You will need to write three unfinished logic gates. Continue to write the three logic gates: AND, OR, and NOT.
//Examples
//AND(1, 1) ➞ 1
//AND(0, 0) ➞ 0
//
//OR(1, 0) ➞ 1
//OR(1, 1) ➞ 1
//
//NOT(0) ➞ 1
//NOT(1) ➞ 0
//Notes
//Check the Resources tab for some help.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(AND(1, 1), 1)
//Test.assertEquals(OR(1, 1), 1)
//Test.assertEquals(AND(0, 1), 0)
//Test.assertEquals(AND(0, 0), 0)
//Test.assertEquals(OR(0, 1), 1)
//Test.assertEquals(OR(1, 0), 1)
//Test.assertEquals(OR(0, 0), 0)
//Test.assertEquals(NOT(0), 1)
//Test.assertEquals(AND(1, 0), 0)
//Test.assertEquals(NOT(1), 0)

