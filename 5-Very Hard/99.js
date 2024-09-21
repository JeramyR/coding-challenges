

//title: Is It a Valid RGB(A) Color?

//tags: conditions,regex,validation

//url: https://edabit.com/challenge/CoAPnr8jxcTah2CzZ

//Description:
//Given an RGB(A) CSS color, determine whether its format is valid or not. Create a function that takes a string (e.g. "rgb(0, 0, 0)") and return true if it's format is correct, otherwise return false.
//Examples
//validColor("rgb(0,0,0)") ➞ true
//
//validColor("rgb(0,,0)") ➞ false
//
//validColor("rgb(255,256,255)") ➞ false
//
//validColor("rgba(0,0,0,0.123456789)") ➞ true
//Notes
//Alpha is between 0 and 1.
//There are a few edge cases (check out the Tests tab to know more).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// True tests
//Test.assertEquals(validColor('rgb(0,0,0)'), true, 'rgb lowest valid numbers');
//Test.assertEquals(validColor('rgb(255,255,255)'), true, 'rgb highest valid numbers');
//Test.assertEquals(validColor('rgba(0,0,0,0)'), true, 'rgba lowest valid numbers');
//Test.assertEquals(validColor('rgba(255,255,255,1)'), true, 'rgba highest valid numbers');
//Test.assertEquals(validColor('rgba(0,0,0,0.123456789)'), true, 'alpha can have many decimals');
//Test.assertEquals(validColor('rgba(0,0,0,.8)'), true, 'in alpha the number before the dot is optional');
//Test.assertEquals(validColor('rgba( 0 , 127 , 255 , 0.1 )'), true, 'whitespace is allowed around numbers (even tabs)');
//Test.assertEquals(validColor('rgb(0%,50%,100%)'), true, 'numbers can be percentages');
//​
//// False tests
//Test.assertEquals(validColor('rgb(0,,0)'), false, 'INVALID: missing number');
//Test.assertEquals(validColor('rgb (0,0,0)'), false, 'INVALID: whitespace before parenthesis');
//Test.assertEquals(validColor('rgb(0,0,0,0)'), false, 'INVALID: rgb with 4 numbers');
//Test.assertEquals(validColor('rgba(0,0,0)'), false, 'INVALID: rgba with 3 numbers');
//Test.assertEquals(validColor('rgb(-1,0,0)'), false, 'INVALID: numbers below 0');
//Test.assertEquals(validColor('rgb(255,256,255)'), false, 'INVALID: numbers above 255');
//Test.assertEquals(validColor('rgb(100%,100%,101%)'), false, 'INVALID: numbers above 100%');
//Test.assertEquals(validColor('rgba(0,0,0,-1)'), false, 'INVALID: alpha below 0');
//Test.assertEquals(validColor('rgba(0,0,0,1.1)'), false, 'INVALID: alpha above 1');

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Matrix Multiplication

//tags: algorithms,arrays,functional_programming,loops

//url: https://edabit.com/challenge/bqF3dphpBEKXE3miC

//Description:
//Create a function that multiplies two matricies (n x n each).
//Examples
//matrixMult([[4, 2],[3, 1]], [[5, 6], [3, 8]]) ➞ [[26, 40], [18, 26]]
//
//matrixMult([[3, 6],[4, 5]], [[8, 1], [7, 2]]) ➞ [[66, 15], [67, 14]]
//
//matrixMult([[7, 5],[2, 2]], [[6, 7], [3, 2]]) ➞ [[57, 59], [18, 18]]
//Notes
//Limit yourself to 2 x 2 matricies.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(matrixMult([[4, 2],[3, 1]], [[5, 6], [3, 8]]), [[26, 40], [18, 26]])
//Test.assertSimilar(matrixMult([[3, 6],[4, 5]], [[8, 1], [7, 2]]), [[66, 15], [67, 14]])
//Test.assertSimilar(matrixMult([[7, 5],[2, 2]], [[6, 7], [3, 2]]), [[57, 59], [18, 18]])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Word Overlapping

//tags: algorithms,loops,strings

//url: https://edabit.com/challenge/kficszsYY2ojKfDL9

//Description:
//Given two words, overlap them in such a way, morphing the last few letters of the first word with the first few letters of the second word. Return the shortest overlapped word possible.
//Examples
//overlap("sweden", "denmark") ➞ "swedenmark"
//
//overlap("edabit", "iterate") ➞ "edabiterate"
//
//overlap("honey", "milk") ➞ "honeymilk"
//
//overlap("dodge", "dodge") ➞ "dodge"
//Notes
//All words will be given in lowercase.
//If no overlap is possible, return both words one after the other (example #3).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(overlap("sweden", "denmark"), "swedenmark")
//Test.assertEquals(overlap("edabit", "iterate"), "edabiterate")
//Test.assertEquals(overlap("honey", "milk"), "honeymilk")
//Test.assertEquals(overlap("dodge", "dodge"), "dodge")
//Test.assertEquals(overlap("colossal", "alligator"), "colossalligator")
//Test.assertEquals(overlap("leave", "eavesdrop"), "leavesdrop")
//Test.assertEquals(overlap("joshua", "osha"), "joshuaosha")
//Test.assertEquals(overlap("diction", "dictionary"), "dictionary")
//Test.assertEquals(overlap("massive", "mass"), "massivemass")

