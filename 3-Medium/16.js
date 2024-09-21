

//title: Move Capital Letters to the Front

//tags: formatting,regex,strings

//url: https://edabit.com/challenge/8n9RyHThC3dNEPCng

//Description:
//Create a function that moves all capital letters to the front of a word.
//Examples
//capToFront("hApPy") ➞ "APhpy"
//
//capToFront("moveMENT") ➞ "MENTmove"
//
//capToFront("shOrtCAKE") ➞ "OCAKEshrt"
//Notes
//Keep the original relative order of the upper and lower case letters the same.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(capToFront("hApPy"), "APhpy")
//Test.assertEquals(capToFront("moveMENT"), "MENTmove")
//Test.assertEquals(capToFront("aPPlE"), "PPEal")
//Test.assertEquals(capToFront("shOrtCAKE"), "OCAKEshrt")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Let`s Sort This Array!

//tags: arrays,numbers,sorting

//url: https://edabit.com/challenge/vsoQiYJXRANcYrX3Z

//Description:
//Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:
//"Asc" returns a sorted array in ascending order.
//"Des" returns a sorted array in descending order.
//"None" returns an array without any modification.
//Examples
//ascDesNone([4, 3, 2, 1], "Asc" ) ➞ [1, 2, 3, 4]
//
//ascDesNone([7, 8, 11, 66], "Des") ➞ [66, 11, 8, 7]
//
//ascDesNone([1, 2, 3, 4], "None") ➞ [1, 2, 3, 4]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(ascDesNone([4, 3, 2, 1], "Asc"), [1, 2, 3, 4])
//Test.assertSimilar(ascDesNone([7, 8, 11, 66], "Des"), [66, 11, 8, 7])
//Test.assertSimilar(ascDesNone([1, 2, 3, 4], "None"),[1, 2, 3, 4])
//Test.assertSimilar(ascDesNone([1, 0, 1, 0], "Asc"), [0, 0, 1, 1])
//Test.assertSimilar(ascDesNone([1, 2, 2, 2, 2, 2, 2], "Des"), [2, 2, 2, 2, 2, 2, 1])
//Test.assertSimilar(ascDesNone([9, 7, 43, 11, 16, 111, 19], "Asc"), [7, 9, 11, 16, 19, 43, 111])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Algebra Sequence — Boxes

//tags: algebra,algorithms,loops

//url: https://edabit.com/challenge/Q4mYkd8nc8zdFBDE8

//Description:
//Create a function that takes a number (step) as an argument and returns the amount of boxes in that step of the sequence.
//
//Step 0: Start with 0
//Step 1: Add 3
//Step 2: Subtract 1
//Repeat Step 1 & 2 ...
//Examples
//boxSeq(0) ➞ 0
//
//boxSeq(1) ➞ 3
//
//boxSeq(2) ➞ 2
//Notes
//Step (the input) is always a positive integer (or zero).
//For an odd step add 3, for an even step subtract 1.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(boxSeq(5), 7)
//Test.assertEquals(boxSeq(0), 0)
//Test.assertEquals(boxSeq(6), 6)
//Test.assertEquals(boxSeq(99), 101)
//Test.assertEquals(boxSeq(2), 2)
//Test.assertEquals(boxSeq(1), 3)

