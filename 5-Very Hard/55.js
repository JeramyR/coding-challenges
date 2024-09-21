

//title: Mowing the Lawn

//tags: arrays,higher_order_functions,language_fundamentals

//url: https://edabit.com/challenge/L99jAtiuAeWaB9jdm

//Description:
//Create a function that takes in an array of grass heights and a variable sequence of lawn mower cuts and outputs the array of successive grass heights.
//If after a cut, any single element in the array reaches zero or negative, return "Done" instead of the array of new heights.
//A demo:
//cuttingGrass([3, 4, 4, 4], 1, 1, 1) ➞ [[2, 3, 3, 3], [1, 2, 2, 2], "Done"]
//
//// 1st cut shaves off 1: [3, 4, 4, 4] ➞ [2, 3, 3, 3]
//// 2nd cut shaves off 1: [2, 3, 3, 3] ➞ [1, 2, 2, 2]
//// 3rd cut shaves off 1: [1, 2, 2, 2] ➞ [0, 1, 1, 1], but one element reached zero so we return "Done".
//Examples
//cuttingGrass([5, 6, 7, 5], 1, 2, 1)
//➞ [[4, 5, 6, 4], [2, 3, 4, 2], [1, 2, 3, 1]]
//
//cuttingGrass([4, 4, 4, 4], 1, 1, 1, 1)
//➞ [[3, 3, 3, 3], [2, 2, 2, 2], [1, 1, 1, 1], "Done"]
//
//cuttingGrass([8, 9, 9, 8, 8], 2, 3, 2, 1)
//➞ [[6, 7, 7, 6, 6], [3, 4, 4, 3, 3], [1, 2, 2, 1, 1], "Done"]
//
//cuttingGrass([1, 0, 1, 1], 1, 1, 1) ➞ ["Done", "Done", "Done"]
//Notes
//The number of lawn cuts is variable.
//There will be at least one cut.
//Return "Done" onwards for each additional cut if the grass has already been completely mowed (see fourth example).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(cuttingGrass([4, 4, 4, 4], 1, 1, 1, 1), 
//  [[3, 3, 3, 3], [2, 2, 2, 2], [1, 1, 1, 1], "Done"])
//​
//Test.assertSimilar(cuttingGrass([5, 6, 7, 5], 1, 2, 1), 
//  [[4, 5, 6, 4], [2, 3, 4, 2], [1, 2, 3, 1]])
//​
//Test.assertSimilar(cuttingGrass([8, 9, 9, 8, 8], 2, 3, 2, 1), 
//  [[6, 7, 7, 6, 6], [3, 4, 4, 3, 3], [1, 2, 2, 1, 1], "Done"])
//​
//Test.assertSimilar(cuttingGrass([1, 0, 1, 1], 1, 1, 1), 
//  ["Done", "Done", "Done"])
//​
//Test.assertSimilar(cuttingGrass([4, 5, 4, 5], 2, 1, 1), 
//  [[2, 3, 2, 3], [1, 2, 1, 2], "Done"])
//​
//Test.assertSimilar(cuttingGrass([4, 2, 2], 2, 1, 1), 
//  ["Done", "Done", "Done"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Hole Number Sequence

//tags: algorithms,numbers,strings

//url: https://edabit.com/challenge/67z9Tzvadgxb5pDmS

//Description:
//What do the digits 0, 4, 6, 8, and 9 have in common? Well, they are whole numbers... and they are also hole numbers (not actually a thing until now). Hole numbers are numbers with holes in their shapes (8 is special in that it contains two holes).
//14 is a hole number with one hole. 88 is a hole number with four holes.
//Your task is to create a function with argument N that returns the sum of the holes for the integers n in the range of range 0 < n <= N.
//To illustrate, sumOfHoles(14) returns 7, because there are 7 holes in 4, 6, 8, 9, 10 and 14.
//Examples
//sumOfHoles(4) ➞ 1
//
//sumOfHoles(6) ➞ 2
//
//sumOfHoles(8) ➞ 4
//
//sumOfHoles(6259) ➞ 12345
//Notes
//All test cases are positive real integers.
//Don't forget that 8 has two holes.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sumOfHoles(1), 0)
//Test.assertEquals(sumOfHoles(4), 1)
//Test.assertEquals(sumOfHoles(6), 2)
//Test.assertEquals(sumOfHoles(8), 4)
//Test.assertEquals(sumOfHoles(9), 5)
//Test.assertEquals(sumOfHoles(10), 6)
//Test.assertEquals(sumOfHoles(88), 90)
//Test.assertEquals(sumOfHoles(10000), 22893)
//Test.assertEquals(sumOfHoles(12345), 27991)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Digits Recovery

//tags: algorithms,logic,loops,strings

//url: https://edabit.com/challenge/neusGdhh2ofuBXTnd

//Description:
//Mubashir shuffled a given string of letters by mistake. Some letters in the input string are representing a digit (from zero to nine). Help him to recover all the digits.
//Only consecutive letters can be used. "OTNE" cannot be recovered to 1.
//Every letter has to start with an increasing index. "ONENO" results to 11, because E can be used two times.
//You can ignore all letters in the string if they don't end-up in a digit.
//If no digits can be found, return "No digits found"
//Take care about the order! "ENOWT" will be recovered to 12 and not to 21.
//The input string consists only UpperCase letters.
//Examples
//digitsRecovery("NEO") ➞ "1"
//
//digitsRecovery("ONETWO") ➞ "12"
//
//digitsRecovery("ZYX") ➞ "No digits found"
//
//digitsRecovery("NEOTWONEINEIGHTOWSVEEN") ➞ "12219827"
//Notes
//You can use dictionary in the code tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(digitsRecovery("NEO"), "1")
//Test.assertEquals(digitsRecovery("ONETWO"), "12")
//Test.assertEquals(digitsRecovery("TWWTONE"), "21")
//Test.assertEquals(digitsRecovery("OTNE"), "No digits found")
//Test.assertEquals(digitsRecovery("ZYX"), "No digits found")
//Test.assertEquals(digitsRecovery("ONENO"), "11")
//Test.assertEquals(digitsRecovery("ZERO"), "0")
//Test.assertEquals(digitsRecovery("NEOTWONEINEIGHTOWSVEEN"), "12219827")
//Test.assertEquals(digitsRecovery("FOURSEVENTHREENINETWOIOSNSIXNNEIGHTFIVEONEJFTHREE"), "4739926985113")
////Mubashir

