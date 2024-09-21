

//title: Does a Number Exist?

//tags: language_fundamentals,numbers,validation

//url: https://edabit.com/challenge/r7YJgZgGXJjSyuFxX

//Description:
//Create a function which validates whether a given number exists, and could represent a real life quantity. Inputs will be given as a string.
//Examples
//validStrNumber("3.2") ➞ true
//
//validStrNumber("324") ➞ true
//
//validStrNumber("54..4") ➞ false
//
//validStrNumber("number") ➞ false
//Notes
//Accept numbers such as .5 and 0003.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(validStrNumber("3.2"), true)
//Test.assertEquals(validStrNumber("324"), true)
//Test.assertEquals(validStrNumber("54..4"), false)
//Test.assertEquals(validStrNumber("number"), false)
//Test.assertEquals(validStrNumber(".5"), true)
//Test.assertEquals(validStrNumber("03"), true)
//Test.assertEquals(validStrNumber("3.e"), false)
//Test.assertEquals(validStrNumber("1234321"), true)
//Test.assertEquals(validStrNumber(".42.3"), false)
//Test.assertEquals(validStrNumber("0000000"), true)
//Test.assertEquals(validStrNumber("000.000"), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Count the Syllables

//tags: language_fundamentals,regex,strings

//url: https://edabit.com/challenge/rkoYERWYDt32qZLvH

//Description:
//Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).
//Examples
//countSyllables("Hehehehehehe") ➞ 6
//
//countSyllables("bobobobobobobobo") ➞ 8
//
//countSyllables("NANANA") ➞ 3
//Notes
//For simplicity, please note that each syllable will consist of two letters only.
//Your code should accept strings of any case (upper, lower and mixed case).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(countSyllables("Hehehehehehe"), 6)
//Test.assertEquals(countSyllables("bobobobobobobobo"), 8)
//Test.assertEquals(countSyllables("NANANANA"), 4)
//Test.assertEquals(countSyllables("lelelele"), 4)
//Test.assertEquals(countSyllables("momomomomomomomomo"), 9)
//Test.assertEquals(countSyllables("WiWiWiWiWiWiWiWiWiWi"), 10)
//Test.assertEquals(countSyllables("RURURURURURUrurururuRURU"), 12)
//Test.assertEquals(countSyllables("go"), 1)
//Test.assertEquals(countSyllables("dede"), 2)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Squares and Cubes

//tags: arrays,geometry,math,numbers,validation

//url: https://edabit.com/challenge/9YPqr4rNaYy8Ynrry

//Description:
//Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.
//Examples
//checkSquareAndCube([4, 8]) ➞ true
//
//checkSquareAndCube([16, 48]) ➞ false
//
//checkSquareAndCube([9, 27]) ➞ true
//Notes
//Remember to return either true or false.
//All arrays contain two positive numbers.
//If you're stuck, check the Resources for a hint.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(checkSquareAndCube([4, 8]), true)
//Test.assertEquals(checkSquareAndCube([5, 12]), false)
//Test.assertEquals(checkSquareAndCube([9, 27]), true)
//Test.assertEquals(checkSquareAndCube([25, 120]), false)
//Test.assertEquals(checkSquareAndCube([25, 125]), true)
//Test.assertEquals(checkSquareAndCube([36, 215]), false)
//Test.assertEquals(checkSquareAndCube([36, 217]), false)
//Test.assertEquals(checkSquareAndCube([144, 1728]), true)
//Test.assertEquals(checkSquareAndCube([1, 1]), true)
//Test.assertEquals(checkSquareAndCube([676, 17576]), true)

