

//title: Sum of Digits

//tags: algebra,math,numbers,recursion

//url: https://edabit.com/challenge/RyBSEHjHphhwHBTva

//Description:
//Create a function that takes a range of numbers and returns the sum of each digit from start to stop.
//Examples
//digitsSum(1, 10) ➞ 46
//// total numbers in the range are = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
//// sum of each digits is = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 1 + 0 = 46
//
//digitsSum(1, 20) ➞ 102
//
//digitsSum(1, 100) ➞ 901
//Notes
//start and stop are inclusive in the range.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(digitsSum(1, 5), 15)
//Test.assertEquals(digitsSum(2, 8), 35) 
//Test.assertEquals(digitsSum(5, 12), 41) 
//Test.assertEquals(digitsSum(1, 10), 46)
//Test.assertEquals(digitsSum(1, 20), 102)
//Test.assertEquals(digitsSum(1, 100), 901)
//Test.assertEquals(digitsSum(14, 112), 909)
//Test.assertEquals(digitsSum(3, 1000), 13498)
//Test.assertEquals(digitsSum(1, 10000000), 315000001)
//Test.assertEquals(digitsSum(1, 100000000), 3600000001)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Roman Numerals

//tags: math,numbers,strings

//url: https://edabit.com/challenge/qaJQMgCRftrh5kJyx

//Description:
//Create a function that takes in a Roman numeral as a string and converts it to an integer, returning the result. The function should work for all Roman numerals representing positive integers less than 4000.
//The following table shows how digits will be represented in Roman numeral notation:
//Place value	1	2	3	4	5	6	7	8	9
//Ones	I	II	III	IV	V	VI	VII	VIII	IX
//Tens	X	XX	XXX	XL	L	LX	LXX	LXXX	XC
//Hundreds	C	CC	CCC	CD	D	DC	DCC	DCCC	CM
//Thousands	M	MM	MMM	-	-	-	-	-	-
//Examples
//parseRomanNumeral("VII") ➞ 7
//
//parseRomanNumeral("DCLXXIX") ➞ 679
//
//parseRomanNumeral("MMMCMV") ➞ 3905
//Notes
//All letters will be in uppercase.
//Assume all inputs will be well-formed Roman numerals.
//While you could probably solve this by separately checking for each of these sequences inside the string, there is a smarter way. Think about the numerical value each individual letter has, and how the letter immmediately following it can affect that letter's numerical value.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(parseRomanNumeral("I"), 1)
//Test.assertEquals(parseRomanNumeral("VIII"), 8)
//Test.assertEquals(parseRomanNumeral("XXIX"), 29)
//Test.assertEquals(parseRomanNumeral("LIV"), 54)
//Test.assertEquals(parseRomanNumeral("CCV"), 205)
//Test.assertEquals(parseRomanNumeral("CDXLIV"), 444)
//Test.assertEquals(parseRomanNumeral("CMXCIX"), 999)
//Test.assertEquals(parseRomanNumeral("M"), 1000)
//Test.assertEquals(parseRomanNumeral("MMMDCCCLXXXVIII"), 3888)
//Test.assertEquals(parseRomanNumeral("MMMCMX"), 3910)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Matrix Multiplication (Part 2)

//tags: algorithms,arrays,loops,math

//url: https://edabit.com/challenge/oKcZvE99o4Q7TWXwo

//Description:
//Create a function that multiplies two matrices (n x m) and (p x q) and returns:
//"invalid" if the matrices are not multiplicable (i.e. if m is not equal to p).
//The multiplication matrix (n x q) otherwise.
//Examples
//matrixMultiply([[1, 2]], [[3], [4]]) ➞ [[11]]
//
//matrixMultiply([[0, 0], [0, 1]], [[1, 2], [3, 4], [5, 6]]) ➞ "invalid"
//
//matrixMultiply([[4, 2], [3, 1]], [[5, 6], [3, 8]]) ➞ [[26, 40], [18, 26]]
//Notes
//This challenge is a generalized version of Matrix Multiplication.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(matrixMultiply([[1]], [[1, 2], [3, 4]]), "invalid")
//Test.assertSimilar(matrixMultiply([[0, 0], [0, 1]], [[1, 2], [3, 4], [5, 6]]), "invalid")
//Test.assertSimilar(matrixMultiply([[2]], [[3]]), [[6]])
//Test.assertSimilar(matrixMultiply([[1, 2]], [[3], [4]]), [[11]])
//Test.assertSimilar(matrixMultiply([[2, 4], [1, 3]], [[5], [6]]), [[34], [23]])
//Test.assertSimilar(matrixMultiply([[4, 2], [3, 1]], [[5, 6], [3, 8]]), [[26, 40], [18, 26]])
//Test.assertSimilar(matrixMultiply([[3, 6], [4, 5]], [[8, 1], [7, 2]]), [[66, 15], [67, 14]])
//Test.assertSimilar(matrixMultiply([[1, 6], [6, 3]], [[5, 3, 5], [1, 6, 6]]), [[11, 39, 41], [33, 36, 48]])
//Test.assertSimilar(matrixMultiply([[4, 6], [1, 6]], [[5, 5, 4], [5, 3, 2]]), [[50, 38, 28], [35, 23, 16]])
//Test.assertSimilar(matrixMultiply([[5, 1], [1, 1], [2, 5]], [[5, 6, 3], [2, 1, 3]]), [[27, 31, 18], [7, 7, 6], [20, 17, 21]])
//Test.assertSimilar(matrixMultiply([[1, 1, 1], [0, 1, 0], [0, 1, 1]], [[1, 0, 1], [0, 0, 1], [1, 1, 0]]), [[2, 1, 2], [0, 0, 1], [1, 1, 1]])

