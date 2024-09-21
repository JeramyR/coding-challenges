

//title: Find Number of Digits in Number

//tags: math,numbers,regex

//url: https://edabit.com/challenge/yFJzLfYghz7ZtsyAN

//Description:
//Create a function that will return an integer number corresponding to the amount of digits in the given integer num.
//Examples
//num_of_digits(1000) ➞ 4
//
//num_of_digits(12) ➞ 2
//
//num_of_digits(1305981031) ➞ 10
//
//num_of_digits(0) ➞ 1
//Notes
//Try to solve this challenge without using strings!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(num_of_digits(13124), 5)
//Test.assertEquals(num_of_digits(0), 1)
//Test.assertEquals(num_of_digits(-12381428), 8)
//Test.assertEquals(num_of_digits(12), 2)
//Test.assertEquals(num_of_digits(42), 2)
//Test.assertEquals(num_of_digits(1000), 4)
//Test.assertEquals(num_of_digits(136), 3)
//Test.assertEquals(num_of_digits(1000000000), 10)
//Test.assertEquals(num_of_digits(2147483647), 10)
//Test.assertEquals(num_of_digits(-2147483647), 10)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Burglary Series (04): Add its Name

//tags: language_fundamentals,objects

//url: https://edabit.com/challenge/9KEKJG5PZTFmG3Zau

//Description:
//Given three arguments ⁠— an object obj of the stolen items, the pet's name and a value ⁠— return an object with that name and value in it (as key-value pairs).
//Examples
//addName({}, "Brutus", 300) ➞ { Brutus: 300 }
//
//addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }
//
//addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }
//Notes
//The value argument will be a number.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(addName({}, "Brutus", 300), {Brutus: 300})
//Test.assertSimilar(addName({piano: 500}, "Brutus", 400), {piano: 500, Brutus: 400})
//Test.assertSimilar(addName({piano: 500, stereo: 300}, "Caligula", 440), {piano: 500,  stereo: 300, Caligula: 440})

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Derivative of a Function

//tags: math,numbers

//url: https://edabit.com/challenge/Bxp6uGjgmf8TuG8Fe

//Description:
//Create a function that takes numbers b and m as arguments and returns the derivative of the function f(x)=x^b with respect to x evaluated at x=m, where b and m are constants.
//Examples
//derivative(1, 4) ➞ 1
//
//derivative(3, -2) ➞ 12
//
//derivative(4, -3) ➞ -108
//Notes
//^ in the context of this challenge means "to the power of", also known as the "exponent" operator.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(derivative(1, 4), 1)
//Test.assertEquals(derivative(3, -2), 12)
//Test.assertEquals(derivative(4, -3), -108)
//Test.assertEquals(derivative(9, -5), 3515625)
//Test.assertEquals(derivative(1254, 0), 0)
//Test.assertEquals(derivative(-2, 10), -0.002)

