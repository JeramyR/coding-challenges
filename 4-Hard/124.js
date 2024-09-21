

//title: Clear Brackets

//tags: logic,strings,validation

//url: https://edabit.com/challenge/AcN98uNF2MmQ7jJJH

//Description:
//Create a function brackets() that takes a string and checks that the brackets in the math expression are correct. The function should return true or false.
//Examples
//brackets("(a*(b-c)..... )") ➞ true
//
//brackets(")(a-b-45/7*(a-34))") ➞ false
//
//brackets("sin(90...)+.............cos1)") ➞ false
//Notes
//The string may not contain brackets, then return true.
//String may contain spaces.
//The string may be empty.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(brackets("(a*(b-c)     )"), true);
//Test.assertEquals(brackets(" ) (a-b-45/7*(a-34))"), false);
//Test.assertEquals(brackets("sin(90       )+      cos1)"), false);
//Test.assertEquals(brackets(" (...). .%_.(.... )"), true);
//Test.assertEquals(brackets(" (...)...(..(...).... )  "), true);
//Test.assertEquals(brackets(") .. .() (        ).. . ("), false);
//Test.assertEquals(brackets(")))((("), false);
//Test.assertEquals(brackets("  (...).!.)...("), false);
//Test.assertEquals(brackets("a+b"), true);
//Test.assertEquals(brackets(""), true);
//Test.assertEquals(brackets("(a+f).`!£=.)...) "), false);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Simple Symbols

//tags: regex,validation

//url: https://edabit.com/challenge/rsjKiutZuYaBYeaXt

//Description:
//Create a function that takes a string and determine if it's a valid sequence by either returning true or false. The string will be composed of + and = symbols with several characters between them (e.g. "++d+===+c++==a") and for the string to be true, each letter must be surrounded by a + symbol. So the string to the left would be false.
//Examples
//simpleSymbols("f++d+") ➞ false
//
//simpleSymbols("+d+=3=+s+") ➞ true
//
//simpleSymbols("==+p+++++++++====8+z++++") ➞ true
//Notes
//The given string will not be empty and will have at least one letter.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(simpleSymbols("======2+++4+u===+i+"), false)
//Test.assertEquals(simpleSymbols("+u+====3+mmmmm===m++"), false)
//Test.assertEquals(simpleSymbols("==+p+++++++++====8+z++++"), true)
//Test.assertEquals(simpleSymbols("+d+=3=+s+"), true)
//Test.assertEquals(simpleSymbols("f++d+"), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Return Exponents of Prime Factors

//tags: algebra,math,numbers

//url: https://edabit.com/challenge/6k2QepzApP5zHejWE

//Description:
//You are given an array of prime factors arr and a target. When each number in the array is raised to an appropriate power their product will be equal to the target.
//Your role is to return the exponents. All these arrays will have a length of three. Basically, it is three numbers whose product is equal to challenge. The only difference is what you are expected to return.
//Examples
//productEqualTarget([2, 3, 5], 600) ➞ [3, 1, 2]
//// Because 2^3*3^1*5^2 = 600
//
//productEqualTarget([2, 3, 5], 720) ➞ [4, 2, 1]
//// Because 2^4*3^2*5^1 = 720
//Notes
//The exponents you will return are expected to replace the base in the array.
//Your returned values must be in the same order as the bases.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(productEqualTarget([2, 3, 5], 720), [4, 2, 1])
//Test.assertSimilar(productEqualTarget([2, 3, 19], 1026), [1, 3, 1])
//Test.assertSimilar(productEqualTarget([2, 3, 5], 600), [3, 1, 2])
//Test.assertSimilar(productEqualTarget([2, 37, 149], 11026),[1, 1, 1])
//Test.assertSimilar(productEqualTarget([2, 3, 5], 180), [2, 2, 1])
//Test.assertSimilar(productEqualTarget([2, 5, 2711], 54220),[2, 1, 1])

