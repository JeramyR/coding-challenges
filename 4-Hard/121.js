

//title: 3D Visual Block Sequence

//tags: algorithms,math,numbers

//url: https://edabit.com/challenge/MevNu8jwsPC8ghS7B

//Description:
//A block sequence in three dimensions. We can write a formula for this one:
//
//Create a function that takes a number (step) as an argument and returns the amount of blocks in that step.
//Examples
//blocks(1) ➞ 5
//
//blocks(5) ➞ 39
//
//blocks(2) ➞ 12
//Notes
//Step 0 obviously has to return 0.
//The input is always a positive integer.
//Check the Resources tab for a video on finding quadratic sequences.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(blocks(77), 3387)
//Test.assertEquals(blocks(33), 725)
//Test.assertEquals(blocks(50), 1524)
//Test.assertEquals(blocks(21), 335)
//Test.assertEquals(blocks(12), 137)
//Test.assertEquals(blocks(30), 614)
//Test.assertEquals(blocks(93), 4835)
//Test.assertEquals(blocks(53), 1695)
//Test.assertEquals(blocks(71), 2910)
//Test.assertEquals(blocks(36), 845)
//Test.assertEquals(blocks(8), 75)
//Test.assertEquals(blocks(100), 5549)
//Test.assertEquals(blocks(95), 5034)
//Test.assertEquals(blocks(46), 1310)
//Test.assertEquals(blocks(63), 2330)
//Test.assertEquals(blocks(54), 1754)
//Test.assertEquals(blocks(15), 194)
//Test.assertEquals(blocks(45), 1259)
//Test.assertEquals(blocks(64), 2399)
//Test.assertEquals(blocks(46), 1310)
//Test.assertEquals(blocks(68), 2685)
//Test.assertEquals(blocks(46), 1310)
//Test.assertEquals(blocks(23), 390)
//Test.assertEquals(blocks(62), 2262)
//Test.assertEquals(blocks(55), 1814)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Moran Numbers

//tags: algebra,math,numbers,validation

//url: https://edabit.com/challenge/tLBEdP8Kp2WSJo7bo

//Description:
//A Harshad number is a number which is divisible by the sum of its digits. For example, 132 is divisible by 6 (1+3+2).
//A subset of the Harshad numbers are the Moran numbers. Moran numbers yield a prime when divided by the sum of their digits. For example, 133 divided by 7 (1+3+3) yields 19, a prime.
//Create a function that takes a number and returns "M" if the number is a Moran number, "H" if it is a (non-Moran) Harshad number, or "Neither".
//Examples
//moran(132) ➞ "H"
//
//moran(133) ➞ "M"
//
//moran(134) ➞ "Neither"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(moran(132), "H")
//Test.assertEquals(moran(133), "M")
//Test.assertEquals(moran(134), "Neither")
//Test.assertEquals(moran(3033), "M")
//Test.assertEquals(moran(3030), "H")
//Test.assertEquals(moran(491423), "Neither")
//Test.assertEquals(moran(20937), "M")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Subtract Without Subtract

//tags: bit_operations,math,numbers

//url: https://edabit.com/challenge/W4EAzp255xTenaYu7

//Description:
//Create a function that subtracts one positive integer from another, without using any arithmetic operators such as -, %, /, +, etc.
//Examples
//mySub(5, 9) ➞ 4
//
//mySub(10, 30) ➞ 20
//
//mySub(0, 0) ➞ 0
//Notes
//Do not multiply by -1.
//Use bitwise operations only: <<, |, ~, &, etc.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(mySub(5, 9), 4)
//Test.assertEquals(mySub(10, 30), 20)
//Test.assertEquals(mySub(0, 0), 0)

