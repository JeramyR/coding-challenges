

//title: Basic Calculator

//tags: algebra,math,numbers

//url: https://edabit.com/challenge/AtoWYYC9THAH5HbS2

//Description:
//Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.
//Examples
//calculator(2, "+", 2) ➞ 4
//
//calculator(2, "*", 2) ➞ 4
//
//calculator(4, "/", 2) ➞ 2
//Notes
//If the input tries to divide by 0, return: "Can't divide by 0!"

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(calculator(2, '/', 2), 1)
//Test.assertEquals(calculator(10, '-', 7), 3)
//Test.assertEquals(calculator(2, '*', 16), 32)
//Test.assertEquals(calculator(2, '-', 2), 0)
//Test.assertEquals(calculator(15, '+', 26), 41)
//Test.assertEquals(calculator(2, '+', 2), 4)
//Test.assertEquals(calculator(2, "/", 0), "Can't divide by 0!")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Is it an Object?

//tags: conditions,logic,objects,validation

//url: https://edabit.com/challenge/5xrKJPsXLG3czFpuq

//Description:
//Create a function to check whether the given parameter is an Object or not.
//Examples
//isObject(function add(x,y) {return x + y}) ➞ true
//
//isObject(new RegExp('^[a-zA-Z0-9]+$', 'g')) ➞ true
//
//isObject(null) ➞ false
//
//isObject("") ➞ false
//Notes
//Inputs may be null, primitive wrapper types, dates.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isObject(new Date()), true)
//Test.assertEquals(isObject("12/12/2011"), false)
//Test.assertEquals(isObject(null), false)
//Test.assertEquals(isObject([1,2,3]), true)
//Test.assertEquals(isObject({}), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Volume of a Cone

//tags: geometry,math,numbers

//url: https://edabit.com/challenge/P6XbTvWyHkrpPfhvu

//Description:
//Create a function that takes the height and radius of a cone as arguments and returns the volume of the cone rounded to the nearest hundredth.
//
//Examples
//coneVolume(3, 2) ➞ 12.57
//
//coneVolume(15, 6) ➞ 565.49
//
//coneVolume(18, 0) ➞ 0
//Notes
//See the resources tab for the formula.
//Return approximate answer by rounding the answer to the nearest hundredth.
//Use JavaScript's PI property, don't fall for 3.14 ;-)
//If the cone has no volume, return 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(coneVolume(3, 2), 12.57)
//Test.assertEquals(coneVolume(15, 6), 565.49)
//Test.assertEquals(coneVolume(18, 0), 0)
//Test.assertEquals(coneVolume(100, 2), 418.88)
//Test.assertEquals(coneVolume(1, 1), 1.05)
//Test.assertEquals(coneVolume(0, 30), 0)

