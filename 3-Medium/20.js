

//title: Temperature Conversion

//tags: math,numbers

//url: https://edabit.com/challenge/QW5CApff3WAGszrWY

//Description:
//Write a program that takes a temperature input in celsius and converts it to Fahrenheit and Kelvin. Return the converted temperature values in an array.
//The formula to calculate the temperature in Fahrenheit from Celsius is:
//F = C*9/5 +32
//The formula to calculate the temperature in Kelvin from Celsius is:
//K = C + 273.15
//Examples
//tempConversion(0) ➞ [32, 273.15]
//// 0°C is equal to 32°F and 273.15 K.
//
//tempConversion(100) ➞ [212, 373.15]
//
//tempConversion(-10) ➞ [14, 263.15]
//
//tempConversion(300.4) ➞ [572.72, 573.55]
//Notes
//Return calculated temperatures up to two decimal places.
//Return "Invalid" if K is less than 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(tempConversion(0), [32 , 273.15])
//Test.assertSimilar(tempConversion(100), [212 , 373.15])
//Test.assertSimilar(tempConversion(42.8), [109.04 , 315.95])
//Test.assertSimilar(tempConversion(300.4), [572.72 , 573.55])
//Test.assertSimilar(tempConversion(-10.7), [12.74 , 262.45])
//Test.assertSimilar(tempConversion(-273.13), [-459.63 , 0.02])
//Test.assertSimilar(tempConversion(-273.16), "Invalid", "Wow, is it realy that cold?")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Geometry 1: Length of Line Segment

//tags: arrays,geometry,math,numbers

//url: https://edabit.com/challenge/9a8rXCGo4JE36juoF

//Description:
//Write a function that takes coordinates of two points on a two-dimensional plane and returns the length of the line segment connecting those two points.
//Examples
//lineLength([15, 7], [22, 11]) ➞ 8.06
//
//lineLength([0, 0], [0, 0]) ➞ 0
//
//lineLength([0, 0], [1, 1]) ➞ 1.41
//Notes
//The order of the given numbers is X, Y.
//This challenge is easier than it looks.
//Round your result to two decimal places.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(lineLength([15, 7], [22, 11]), 8.06)
//Test.assertEquals(lineLength([0, 0], [0, 0]), 0)
//Test.assertEquals(lineLength([0, 0], [1, 1]), 1.41)
//Test.assertEquals(lineLength([30, 10], [13, -5]), 22.67)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Reverse the Number

//tags: formatting,math,numbers

//url: https://edabit.com/challenge/qrDWy9xS8BrfhLS6o

//Description:
//Create a function that takes an integer n and reverses it.
//Examples
//rev(5121) ➞ "1215"
//
//rev(69) ➞ "96"
//
//rev(-122157) ➞ "751221"
//Notes
//This challenge is about using two operators that are related to division.
//If the number is negative, treat it like it's positive.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(rev(215), "512")
//Test.assertEquals(rev(122225), "522221")
//Test.assertEquals(rev(215), "512")
//Test.assertEquals(rev(-215), "512", "Should work with negative numbers.")
//Test.assertEquals(rev(-2152), "2512", "Should work with negative numbers.")
//Test.assertEquals(rev(-122157), "751221", "Should work with negative numbers.")
//Test.assertEquals(rev(666), "666", "Should work if all digits are the same.")
//Test.assertEquals(rev(999), "999", "Should work if all digits are the same.")

