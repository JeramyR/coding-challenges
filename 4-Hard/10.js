

//title: Bitwise Operator to Check Odd, Regular Expression to Check Even

//tags: bit_operations,conditions,regex,validation

//url: https://edabit.com/challenge/uroPr8CNouxobtShi

//Description:
//Create two functions:
//The first is isOdd() to check if a given number is odd using bitwise operator.
//The second is isEven() to check if a given input is even using regular expressions.
//Use of % operator is disallowed.
//Examples
//isOdd(3) ➞ "Yes"
//// Use Bitwise Operator
//
//isOdd(58) ➞ "No"
//// Use Bitwise Operator
//
//isEven("0") ➞ "Yes"
//// Use Regular Expression
//
//isEven("-99") ➞ "No"
//// Use Regular Expression
//Notes

//Input will only be integers (positive/negative/zero).
//For the second function, input will be numbers in string.
//For more info on regular expressions, check the Resources tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isOdd(-7), "Yes")
//Test.assertEquals(isOdd(-5), "Yes")
//Test.assertEquals(isOdd(17), "Yes")
//Test.assertEquals(isOdd(-6), "No")
//Test.assertEquals(isOdd(0), "No")
//Test.assertEquals(isEven("-7"), "No")
//Test.assertEquals(isEven("111"), "No")
//Test.assertEquals(isEven("0"), "Yes")
//Test.assertEquals(isEven("-12"), "Yes")
//Test.assertEquals(isEven("40"), "Yes")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Legendre`s Formula

//tags: algebra,math,numbers

//url: https://edabit.com/challenge/2mtNE8cRcctgBCPZw

//Description:
//Legendre's formula finds the exponent of the largest power of some prime p that divides (is a factor of) the factorial of some number n.
//Legendre's formula example (p = 2 and n = 27):
//
//So 2^23 is the largest power of 2 that divides 27!.
//The formula returns the sum of many fractions (rounded down) with n as the numerator and a steadily increasing power of p as the denominator, stopping when it exceeds the numerator.
//To illustrate:
//p = 5
//n = 100
//
//int(100/5) + int(100/25)
//// No 100/125 because 125 > 100.
//p = 2
//n = 128
//
//int(128/2) + int(128/4) + int(128/8) + ... + int(128/128)
//Given p and n, return the result of Legendre's formula (see Resources).
//Examples
//legendre(5, 100) ➞ 24
//
//legendre(2, 128) ➞ 127
//
//legendre(3, 50) ➞ 22
//Notes
//p and n will be positive integers.
//When p exceeds n, the result should be 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(legendre(5, 100), 24)
//Test.assertEquals(legendre(2, 128), 127)
//Test.assertEquals(legendre(3, 50), 22)
//Test.assertEquals(legendre(7, 98), 16)
//Test.assertEquals(legendre(11, 500), 49)
//Test.assertEquals(legendre(3, 600), 297)
//Test.assertEquals(legendre(7, 6), 0)
//Test.assertEquals(legendre(3, 1385), 688)
//Test.assertEquals(legendre(5, 4324), 1077)
//Test.assertEquals(legendre(2, 8663), 8655)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Combinatorial Exploration

//tags: higher_order_functions,math,recursion

//url: https://edabit.com/challenge/YE9n7my9REKyReMjP

//Description:
//Given a known number of unique items, how many ways could we arrange them in a row?
//Create a function that takes an integer n and returns the number of digits of the number of possible permutations for n unique items. For instance, 5 unique items could be arranged in 120 unique ways. 120 has 3 digits, hence the integer 3 is returned.
//Examples
//noPermsDigits(0) ➞ 1
//
//noPermsDigits(1) ➞ 1
//
//noPermsDigits(5) ➞ 3
//
//noPermsDigits(8) ➞ 5
//Notes
//This challenge requires some understanding of combinatorics.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(noPermsDigits(0), 1)
//Test.assertEquals(noPermsDigits(1), 1)
//Test.assertEquals(noPermsDigits(2), 1)
//Test.assertEquals(noPermsDigits(3), 1)
//Test.assertEquals(noPermsDigits(4), 2)
//Test.assertEquals(noPermsDigits(5), 3)
//Test.assertEquals(noPermsDigits(6), 3)
//Test.assertEquals(noPermsDigits(7), 4)
//Test.assertEquals(noPermsDigits(8), 5)
//Test.assertEquals(noPermsDigits(9), 6)
//Test.assertEquals(noPermsDigits(10), 7)
//Test.assertEquals(noPermsDigits(11), 8)
//Test.assertEquals(noPermsDigits(12), 9)
//Test.assertEquals(noPermsDigits(13), 10)
//Test.assertEquals(noPermsDigits(14), 11)
//Test.assertEquals(noPermsDigits(15), 13)
//Test.assertEquals(noPermsDigits(16), 14)
//Test.assertEquals(noPermsDigits(17), 15)
//Test.assertEquals(noPermsDigits(18), 16)
//Test.assertEquals(noPermsDigits(19), 18)
//Test.assertEquals(noPermsDigits(25), 26)
//Test.assertEquals(noPermsDigits(50), 65)
//Test.assertEquals(noPermsDigits(75), 110)
//Test.assertEquals(noPermsDigits(100), 158)
//Test.assertEquals(noPermsDigits(125), 210)

