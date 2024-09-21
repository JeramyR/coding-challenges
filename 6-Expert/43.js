

//title: Next Largest Number

//tags: numbers,sorting

//url: https://edabit.com/challenge/auJ4HPjQ9YJFB4Wjy

//Description:
//Write a function that returns the next number that can be created from the same digits as the input.
//Examples
//nextNumber(19) ➞ 91
//
//nextNumber(3542) ➞ 4235
//
//nextNumber(5432) ➞ 5432
//
//nextNumber(58943) ➞ 59348
//Notes
//If no larger number can be formed, return the number itself.
//Bonus: See if you can do this without generating all digit permutations.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(nextNumber(7), 7)
//Test.assertEquals(nextNumber(19), 91)
//Test.assertEquals(nextNumber(217), 271)
//Test.assertEquals(nextNumber(899), 989)
//Test.assertEquals(nextNumber(989), 998)
//Test.assertEquals(nextNumber(1115), 1151)
//Test.assertEquals(nextNumber(2345), 2354)
//Test.assertEquals(nextNumber(3542), 4235)
//Test.assertEquals(nextNumber(5432), 5432)
//Test.assertEquals(nextNumber(57812), 57821)
//Test.assertEquals(nextNumber(57218), 57281)
//Test.assertEquals(nextNumber(58943), 59348)
//Test.assertEquals(nextNumber(97410), 97410)
//Test.assertEquals(nextNumber(718293), 718329)
//Test.assertEquals(nextNumber(618921), 619128)
//Test.assertEquals(nextNumber(967432), 972346)
//Test.assertEquals(nextNumber(890124), 890142)
//Test.assertEquals(nextNumber(9321345), 9321354)
//Test.assertEquals(nextNumber(219034567), 219034576)
//Test.assertEquals(nextNumber(219876543), 231456789)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Significant Figures

//tags: numbers,strings

//url: https://edabit.com/challenge/fbW6Cz4ZrRHdwCFHn

//Description:
//Write a function that takes in a string representation of an integer or decimal number and returns the number of significant figures in the number.
//Significant figures are an important part of science because they provide an easy way to show the precision of a measurement at a glance. In general, the more significant figures a number has, the more precise the measurement.
//Significant figures are calculated by looking at the digits of a number and determining the total number of digits that are "significant". The rules for deciding which digits are significant are as follows:
//Non-zero digits are significant.
//0's in between non-zero digits (from any distance) are significant.
//Leading 0's (those to the left of all non-zero digits) are not significant.
//Trailing 0's (those to the right of all non-zero digits) are significant only if the number contains a decimal point ..
//If the entire number is equal to 0, return 0 for the number of significant figures.
//Negative signs have no effect on the number of significant figures.
//Examples
//sigFigs("15030") ➞ 4
//
//sigFigs("0.0067") ➞ 2
//
//sigFigs("-290.00") ➞ 5
//
//sigFigs("-8080.") ➞ 4
//Notes
//Each input consists of the digits 0-9, along with up to one decimal point . and/or negative sign -.
//Just because two numbers are equal doesn't mean that their number of sig figs are equal. For example, 1.02 has 3 sig figs while 1.020 has 4.
//The function should correctly handle numbers that begin with a decimal point.
//You might find regex helpful for this problem.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sigFigs("15030"), 4)
//Test.assertEquals(sigFigs("0.0067"), 2)
//Test.assertEquals(sigFigs("-290.00"), 5)
//Test.assertEquals(sigFigs("-8080."), 4)
//Test.assertEquals(sigFigs("144.5432"), 7)
//Test.assertEquals(sigFigs("-5010090"), 6)
//Test.assertEquals(sigFigs("0.0700040"), 6)
//Test.assertEquals(sigFigs("1"), 1)
//Test.assertEquals(sigFigs(".9900"), 4)
//Test.assertEquals(sigFigs("-.00008"), 1)
//Test.assertEquals(sigFigs("-0144"), 3)
//Test.assertEquals(sigFigs("000"), 0)
//Test.assertEquals(sigFigs("000.00"), 0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: 8 Bit Arithmetic

//tags: bit_operations,numbers

//url: https://edabit.com/challenge/Lv9SkDPAvtnbqPzxp

//Description:
//You will be given a simple string expression representing an addition or subtraction in 8-bit 2's complement arithmetic. Write a function that returns the result in base 10 followed by a binary representation. If any of the values are outside the range of 8-bit 2's complement, return "Overflow".
//Examples
//eightBit("3 + 12") ➞ [15, "11 + 1100 = 1111"]
//
//eightBit("3 - 12") ➞ [-9, "11 - 1100 = 11110111"]
//
//eightBit("-18 - 6") ➞ [-24, "11101110 - 110 = 11101000"]
//
//eightBit("65 + 70") ➞ "Overflow"
//
//eightBit("-127 + 127") ➞ [0, "10000001 + 1111111 = 0"]
//Notes
//Numbers in 8-bit 2's complement notation can range from -128 to 127. The eighth (leftmost) bit signifies a negative number. See Resources for details.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(eightBit('0 + 0'),[0, '0 + 0 = 0'])
//Test.assertSimilar(eightBit('0 - 1'),[-1, '0 - 1 = 11111111'] )
//Test.assertSimilar(eightBit('1 + 126'),[127, '1 + 1111110 = 1111111'])
//Test.assertSimilar(eightBit('128 - 56'),'Overflow')
//Test.assertSimilar(eightBit('92 - 108'),[-16, '1011100 - 1101100 = 11110000'])
//Test.assertSimilar(eightBit('111 - 39'),[72, '1101111 - 100111 = 1001000'])
//Test.assertSimilar(eightBit('-99 - 30'),'Overflow')
//Test.assertSimilar(eightBit('-45 + 100'),[55, '11010011 + 1100100 = 110111'])
//Test.assertSimilar(eightBit('-10 - 118'),[-128, '11110110 - 1110110 = 10000000'])
//Test.assertSimilar(eightBit('-128 + 127'),[-1, '10000000 + 1111111 = 11111111'])

