

//title: Binary To Text

//tags: language_fundamentals,strings

//url: https://edabit.com/challenge/qEAaAxNa9v2WZMrEv

//Description:
//Create a function that takes a binary string and returns the text. The eight bits on the binary string represent 1 character on the ASCII table. For further info, check out the resource tab.
//Examples
//binaryText("01101110011011110110010001100101") ➞ "node"
//
//binaryText('0111001001100101011000010110001101110100') ➞ "react"
//
//binaryText("011100000111100101110100011010000110111101101110") ➞ "python"
//Notes
//Inputs are all valid strings.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(binaryText("01110100011110010111000001100101011100110110001101110010011010010111000001110100"), "typescript")
//Test.assertEquals(binaryText("01101110011011110110010001100101"), "node")
//Test.assertEquals(binaryText("0111001001100101011000010110001101110100"), "react")
//Test.assertEquals(binaryText("01101010011000010111011001100001"), "java")
//Test.assertEquals(binaryText("011010110110111101110100011011000110100101101110"), "kotlin")
//Test.assertEquals(binaryText("011100000111100101110100011010000110111101101110"), "python")
//Test.assertEquals(binaryText("01101000011000010111001101101011011001010110110001101100"), "haskell")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Proper and Improper Fractions

//tags: language_fundamentals,logic,math,numbers

//url: https://edabit.com/challenge/HJiTJbpztx5qrPhpZ

//Description:
//Mubashir was reading about Proper and Improper Fractions on Wikipedia. He concluded that if n is the numerator and d is the denominator of a given fraction, the fraction can be called as Proper Fraction if and only if GCD(n,d)==1.
//For example 5/16 is a proper fraction, while 6/16 is an improper fraction, as both 6 and 16 are divisible by 2, thus the fraction can be reduced to 3/8.
//Create a function that takes a denominator number d and returns the total number of proper fractions which can be built using d as a denominator.
//See below example for given denominator d = 15:
//properFractions(15) ➞ 8
//
//// A total of 8 different proper fractions are possible between 0 and 1
//// 1/15, 2/15, 4/15, 7/15, 8/15, 11/15, 13/15 and 14/15.
//Examples
//properFractions(1) ➞ 0
//
//properFractions(2) ➞ 1
//
//properFractions(5) ➞ 4
//
//properFractions(25) ➞ 20
//Notes
//You can expect big numbers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(properFractions(1), 0)
//Test.assertEquals(properFractions(2), 1)
//Test.assertEquals(properFractions(5), 4)
//Test.assertEquals(properFractions(15), 8)
//Test.assertEquals(properFractions(25), 20)
//Test.assertEquals(properFractions(9999999), 6637344)
//Test.assertEquals(properFractions(500000003), 500000002)
//Test.assertEquals(properFractions(1532420), 608256)
//Test.assertEquals(properFractions(123456789), 82260072)
//Test.assertEquals(properFractions(9999999999), 5890320000)
//​
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Red/Yellow Sequence

//tags: algebra,math,numbers

//url: https://edabit.com/challenge/RhF2wctDjwNCeS4hB

//Description:
//Write a function that takes a number n and a string s as arguments and returns the nth term of the Red/Yellow sequence. s will ask the function what to return, all, red or yellow.
//
//Examples
//rySeq(2, "all") ➞ 5
//
//rySeq(3, "yellow") ➞ 8
//
//rySeq(28, "red") ➞ 55
//
//rySeq(1, "blue") ➞ false
//Notes
//If s is not "all", "yellow" or "red", return false.
//If n is 0, return 0.
//n is always a positive integer.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(rySeq(2, "all"), 5)
//Test.assertEquals(rySeq(1, "yellow"), 0)
//Test.assertEquals(rySeq(1, "blue"), false)
//Test.assertEquals(rySeq(28, "red"), 55)
//Test.assertEquals(rySeq(6, "all"), 61)
//Test.assertEquals(rySeq(3), false)
//Test.assertEquals(rySeq(0, "all"), 0)
//Test.assertEquals(rySeq(22, "all"), 925)
//Test.assertEquals(rySeq(28, "yellow"), 1458)
//Test.assertEquals(rySeq(23, "red"), 45)
//Test.assertEquals(rySeq(150, "all"), 44701)
//Test.assertEquals(rySeq(30, "yellow"), 1682)
//Test.assertEquals(rySeq(1000, "red"), 1999)
//Test.assertEquals(rySeq(28, "green"), false)

