

//title: Sum of Largest Integer

//tags: math,numbers

//url: https://edabit.com/challenge/nyoHbrLtZrtdiR9iY

//Description:
//Create a function that takes a number n as an argument and returns the largest integer that is less than or equal to n and has the highest digit sum (see examples below for a better understanding).
//Examples
//largestDigitSum(100) ➞ 99
//// Digit Sum for 99 = 9 + 9 = 18
//// All numbers from 0 to 98 and 100 itself have digit sum lesser than 18.
//
//largestDigitSum(48) ➞ 48
//// Digit sum for 48 = 4 + 8 =12
//// Digit sum for 39 = 3 + 9 =12
//// Return 48 because 48 > 39
//
//largestDigitSum(10) ➞ 9
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(largestDigitSum(1), 1)
//Test.assertEquals(largestDigitSum(2), 2)
//Test.assertEquals(largestDigitSum(18), 18)
//Test.assertEquals(largestDigitSum(48), 48)
//Test.assertEquals(largestDigitSum(100), 99)
//Test.assertEquals(largestDigitSum(10), 9)
//Test.assertEquals(largestDigitSum(110), 99)
//Test.assertEquals(largestDigitSum(2090), 1999)
//Test.assertEquals(largestDigitSum(9000000), 8999999)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: I Put My Prime Down, Flip It and Reverse It

//tags: conditions,math,numbers

//url: https://edabit.com/challenge/ud5Y2arFXo7SHLvnX

//Description:
//A prime number is a number whose only proper (non-self) divisor is 1 (example 13).
//An emirp (prime spelled backwards) is a non-palindromic prime which, when its digits are reversed, makes another prime. E.g. 13 is a prime, and so is 31. Both are therefore emirps.
//A bemirp is a prime which is an emirp (makes another prime with its digits reversed), but additionally, makes another prime when flipped upside down (see note). The upside-down version is also an emirp, which makes a group of 4 primes. Bemirps consist only of digits 0, 1, 6, 8, and 9.
//To illustrate: 11061811, reversed = 11816011, upside-down = 11091811, upside-down reversed = 11819011. All four are primes.
//Create a function that takes a number and returns "B" if it’s a bemirp, "E" if it's a (non-bemirp) emirp, "P" if it's a (non-emirp) prime, or "C" (composite / non-prime).
//Examples
//bemirp(101) ➞ "P"
//
//bemirp(1011) ➞ "C"
//
//bemirp(1069) ➞ "E"
//
//bemirp(1061) ➞ "B"
//Notes
//6 upside-down is 9 and vice-versa. 0, 1, and 8 are unchanged when flipped. The remaining five digits are unflippable.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(bemirp(101), 'P')
//Test.assertEquals(bemirp(1011), 'C')
//Test.assertEquals(bemirp(1069), 'E')
//Test.assertEquals(bemirp(1061), 'B')
//Test.assertEquals(bemirp(198101), 'C')
//Test.assertEquals(bemirp(1009), 'E')
//Test.assertEquals(bemirp(10091), 'B')
//Test.assertEquals(bemirp(18616061), 'B')
//Test.assertEquals(bemirp(10909), 'E')
//Test.assertEquals(bemirp(16069), 'P')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Bit Rotation

//tags: bit_operations,strings

//url: https://edabit.com/challenge/GAgu4fL6JY9ZnFWcd

//Description:
//JavaScript offers some bit operations but not bit rotation. To complete that, create a function that takes three parameters:
//n: Integer, which in binary representaion should be rotated.
//m: Number of rotation steps that should be performed.
//d: Boolean value; true = rotation right, false = rotation left.
//Your function should return an integer as a result of its rotated binary representation.
//Examples
//bitRotate(8, 1, true) ➞ 4
//// 8 in bin: 1000, rotated 1 step to the right: 0100, in dec: 4
//
//bitRotate(16, 1, false) ➞ 1
//// 16 in bin: 10000, rotated 1 step to the left: 00001, in dec: 1
//
//bitRotate(17, 2, false) ➞ 6
//// 17 in bin: 10001, rotated 2 steps to the left: 00110, in dec: 6
//Notes
//For parameters use unsigned integers only.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(bitRotate(8, 1, true), 4)
//Test.assertEquals(bitRotate(16, 2, true), 4)
//Test.assertEquals(bitRotate(283, 7, true), 110)
//Test.assertEquals(bitRotate(16, 1, false), 1)
//Test.assertEquals(bitRotate(17, 2, false), 6)
//Test.assertEquals(bitRotate(122, 7, false), 122)
//Test.assertEquals(bitRotate(125, 10, true), 95)
//Test.assertEquals(bitRotate(1022, 8, false), 767)
//Test.assertEquals(bitRotate(33, 6, true), 33)

