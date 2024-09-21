

//title: Binary Addition + 0 1 0 1

//tags: algorithms,bit_operations,numbers

//url: https://edabit.com/challenge/m7uCrGQ6KW3pzJsy2

//Description:
//Create a function that takes two numbers and returns their sum as a binary string.
//Examples
//addBinary(1, 1) ➞ "10"
//
//addBinary(1, 2) ➞ "11"
//
//addBinary(4, 5) ➞ "1001"
//Notes
//Remember to return the converted result as a string.
//Check the resources tab in case you are stuck :)

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// enjoy :) 
//Test.assertSimilar(addBinary(1,1), '10')
//Test.assertSimilar(addBinary(1,2), '11')
//Test.assertSimilar(addBinary(4,5),'1001')
//Test.assertSimilar(addBinary(8,20),'11100')
//Test.assertSimilar(addBinary(100,20),'1111000')
//Test.assertSimilar(addBinary(40,50),'1011010')
//Test.assertSimilar(addBinary(65,77),'10001110')
//Test.assertSimilar(addBinary(40,50),'1011010')
//Test.assertSimilar(addBinary(1,0),'1')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Difference of Volumes of Cuboids

//tags: arrays,language_fundamentals,math

//url: https://edabit.com/challenge/2v2FPyt9bhkLm4st6

//Description:
//Create a program that will take two arrays of integers, a and b. Each array will consist of 3 positive integers, representing the dimensions of cuboids a and b. Find the difference of the cuboids' volumes.
//For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
//Examples
//findDifference([ 28, 16, 29 ], [ 7, 8, 17 ]) ➞ 12040
//
//findDifference([ 9, 22, 18 ], [ 16, 24, 10 ]) ➞ 276
//
//findDifference([ 1, 9, 25 ], [ 10, 7, 9 ]) ➞ 405
//
//findDifference([ 7, 6, 16 ], [ 26, 9, 26 ]) ➞ 5412
//Notes
//Each array element is greater than 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(findDifference([ 28, 16, 29 ], [ 7, 8, 17 ]), 12040)
//Test.assertEquals(findDifference([ 9, 22, 18 ], [ 16, 24, 10 ]), 276)
//Test.assertEquals(findDifference([ 1, 9, 25 ], [ 10, 7, 9 ]), 405)
//Test.assertEquals(findDifference([ 7, 6, 16 ], [ 26, 9, 26 ]), 5412)
//Test.assertEquals(findDifference([ 20, 19, 8 ], [ 5, 29, 1 ]), 2895)
//Test.assertEquals(findDifference([ 21, 6, 7 ], [ 25, 14, 17 ]), 5068)
//Test.assertEquals(findDifference([ 18, 29, 12 ], [ 24, 22, 4 ]), 4152)
//Test.assertEquals(findDifference([ 1, 16, 11 ], [ 26, 10, 17 ]), 4244)
//Test.assertEquals(findDifference([ 27, 11, 7 ], [ 2, 8, 26 ]), 1663)
//Test.assertEquals(findDifference([ 20, 17, 30 ], [ 20, 1, 13 ]), 9940)
//Test.assertEquals(findDifference([ 15, 7, 28 ], [ 3, 12, 11 ]), 2544)
//Test.assertEquals(findDifference([ 16, 17, 25 ], [ 18, 14, 28 ]), 256)
//Test.assertEquals(findDifference([ 1, 3, 22 ], [ 12, 23, 16 ]), 4350)
//Test.assertEquals(findDifference([ 3, 29, 12 ], [ 4, 9, 6 ]), 828)
//Test.assertEquals(findDifference([ 5, 18, 15 ], [ 16, 14, 26 ]), 4474)
//Test.assertEquals(findDifference([ 6, 14, 18 ], [ 30, 12, 22 ]), 6408)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: String or Integer?

//tags: language_fundamentals,numbers,strings,validation

//url: https://edabit.com/challenge/NL3ygNoPHcktc4mM6

//Description:
//Create a function that checks if the argument is an integer or a string. Return "int" if it's an integer and "str" if it's a string.
//Examples
//intOrString(8) ➞ "int"
//
//intOrString("Hello") ➞ "str"
//
//intOrString(9843532) ➞ "int"
//Notes
//Input will either be an integer or a string.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(intOrString(1), "int")
//Test.assertEquals(intOrString("HELLO"), "str")
//Test.assertEquals(intOrString("edabit"), "str")
//Test.assertEquals(intOrString(873432874), "int")
//Test.assertEquals(intOrString(5), "int")

