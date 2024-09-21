

//title: Bitwise Operations

//tags: bit_operations,language_fundamentals,logic

//url: https://edabit.com/challenge/vvuAkYEAArrZvmp6X

//Description:
//A decimal number can be represented as a sequence of bits. To illustrate:
//6 = 00000110
//23 = 00010111
//From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:
//bitwiseAND(6, 23) ➞ 00000110
//
//bitwiseOR(6, 23) ➞ 00010111
//
//bitwiseXOR(6, 23) ➞ 00010001
//Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.
//Examples
//bitwiseAND(7, 12) ➞ 4
//
//bitwiseOR(7, 12) ➞ 15
//
//bitwiseXOR(7, 12) ➞ 11
//Notes
//JavaScript has a useful function: toString(2), where you can see the binary representation of a decimal number.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(bitwiseAND(7, 12), 4)
//Test.assertEquals(bitwiseOR(7, 12), 15)
//Test.assertEquals(bitwiseXOR(7, 12), 11)
//​
//Test.assertEquals(bitwiseAND(32, 17), 0)
//Test.assertEquals(bitwiseOR(32, 17), 49)
//Test.assertEquals(bitwiseXOR(32, 17), 49)
//​
//Test.assertEquals(bitwiseAND(13, 19), 1)
//Test.assertEquals(bitwiseOR(13, 19), 31)
//Test.assertEquals(bitwiseXOR(13, 19), 30)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Add up the Numbers from a Single Number

//tags: algorithms,math,numbers,recursion

//url: https://edabit.com/challenge/4gzDuDkompAqujpRi

//Description:
//Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
//Examples
//addUp(4) ➞ 10
//
//addUp(13) ➞ 91
//
//addUp(600) ➞ 180300
//Notes
//Expect any positive number between 1 and 1000.

//code area
///////////////////////////////////////////////////////////////////////////
// const addUp = num => {
//     let x = 0

//     while (num > 0) {
//         x += num
//         num--
//     }
//     console.log(x)
// }
//////////////////////////////////////////////////////////////////////////

//tests:

// addUp(4)// 10
// addUp(13)// 91
//Test.assertEquals(addUp(600), 180300)
//Test.assertEquals(addUp(392), 77028)
//Test.assertEquals(addUp(53), 1431)
//Test.assertEquals(addUp(897), 402753)
//Test.assertEquals(addUp(23), 276)
//Test.assertEquals(addUp(1000), 500500)
//Test.assertEquals(addUp(738), 272691)
//Test.assertEquals(addUp(100), 5050)
//Test.assertEquals(addUp(925), 428275)
//Test.assertEquals(addUp(1), 1)
//Test.assertEquals(addUp(999), 499500)
//Test.assertEquals(addUp(175), 15400)
//Test.assertEquals(addUp(111), 6216)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Matchstick Houses

//tags: algebra,logic,math

//url: https://edabit.com/challenge/tYHkTdFrEmWfxpPKF

//Description:
//This challenge will help you interpret mathematical relationships both algebraically and geometrically.
//
//Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.
//Examples
//matchHouses(1) ➞ 6
//
//matchHouses(4) ➞ 21
//
//matchHouses(87) ➞ 436
//Notes
//Step 0 returns 0 matchsticks.
//The input (step) will always be a non-negative integer.
//Think of the input (step) as the total number of houses that have been connected together.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(matchHouses(1), 6)
//Test.assertEquals(matchHouses(0), 0)
//Test.assertEquals(matchHouses(17), 86)
//Test.assertEquals(matchHouses(36), 181)
//Test.assertEquals(matchHouses(15), 76)
//Test.assertEquals(matchHouses(99), 496)
//Test.assertEquals(matchHouses(3), 16)
//Test.assertEquals(matchHouses(87), 436)

