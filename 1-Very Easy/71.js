

//title: Next Perfect Square

//tags: algebra,interview,math,numbers

//url: https://edabit.com/challenge/gcsHhjRNWjiZwiFFj

//Description:
//Mubashir needs your help to find next integral perfect square after the one passed as a parameter.
//Create a function which takes a given number n and returns next integral perfect square number. Return null if the given number is not a perfect square.
//Examples
//nextSquare(121) ➞ 144
//
//nextSquare(625) ➞ 676
//
//nextSquare(114) ➞ null
//// 114 is not a perfect square
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(nextSquare(121), 144, "Wrong output for 121")
//Test.assertEquals(nextSquare(625), 676, "Wrong output for 625")
//Test.assertEquals(nextSquare(319225), 320356, "Wrong output for 319225")
//Test.assertEquals(nextSquare(15241383936), 15241630849, "Wrong output for 15241383936")
//Test.assertEquals(nextSquare(155), null, "Wrong output for 155")
//Test.assertEquals(nextSquare(342786627), null, "Wrong output for 342786627")
////Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Binary Array to Decimal

//tags: arrays,math,numbers

//url: https://edabit.com/challenge/iuLDXd4mTgcCeTjhM

//Description:
//In mathematics and digital electronics, a binary number is a number expressed in the base-2 numeral system or binary numeral system. Given an array of ones and zeroes of a binary number, return the equivalent decimal value.
//Examples
//binaryToDecimal([0, 0, 0, 1]) ➞ 1
//
//binaryToDecimal([0, 0, 1, 0]) ➞ 2
//
//binaryToDecimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1]) ➞ 1005
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(binaryToDecimal([0,0,0,1]), 1)
//Test.assertEquals(binaryToDecimal([0,0,1,0]), 2)
//Test.assertEquals(binaryToDecimal([1,1,1,1]), 15)
//Test.assertEquals(binaryToDecimal([0,1,1,0]), 6)
//Test.assertEquals(binaryToDecimal([1,0,1,0,1,1,1]), 87)
//Test.assertEquals(binaryToDecimal([1,1,1,1,1,0,1,1,0,1]), 1005)
//Test.assertEquals(binaryToDecimal([1,1,1,1,1,0,1,1,1,0,1]), 2013)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sum of Cubes

//tags: algorithms,language_fundamentals,math,numbers

//url: https://edabit.com/challenge/9CP2euje5gAT6zzE6

//Description:
//Create a function that takes a positive integer n, and returns the sum of all the cubed values from 1 to n.
//For example, if n is 3:
//sumCubes(3) ➞ 36
//1 ** 3 + 2 ** 3 + 3 ** 3 = 36
//Examples
//sumCubes(7) ➞ 784
//
//sumCubes(8) ➞ 1296
//
//sumCubes(9) ➞ 2025
//Notes
//Input n will be a positive integer.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sumCubes(1), 1)
//Test.assertEquals(sumCubes(2), 9)
//Test.assertEquals(sumCubes(3), 36)
//Test.assertEquals(sumCubes(4), 100)
//Test.assertEquals(sumCubes(5), 225)
//Test.assertEquals(sumCubes(6), 441)
//Test.assertEquals(sumCubes(7), 784)
//Test.assertEquals(sumCubes(8), 1296)
//Test.assertEquals(sumCubes(9), 2025)
//Test.assertEquals(sumCubes(10), 3025)
//Test.assertEquals(sumCubes(123), 58155876)
//Test.assertEquals(sumCubes(125), 62015625)
//Test.assertEquals(sumCubes(133), 79405921)
//Test.assertEquals(sumCubes(167), 196784784)
//Test.assertEquals(sumCubes(188), 315630756)
//Test.assertEquals(sumCubes(199), 396010000)
//Test.assertEquals(sumCubes(200), 404010000)
//Test.assertEquals(sumCubes(300), 2038522500)
//Test.assertEquals(sumCubes(400), 6432040000)
//Test.assertEquals(sumCubes(500), 15687562500)
//Test.assertEquals(sumCubes(12345), 5807306426319225)

