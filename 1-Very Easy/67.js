

//title: Limit a Number`s Value

//tags: conditions,logic,numbers

//url: https://edabit.com/challenge/ZwQJM6FsRsWd3Bm6g

//Description:
//Create a function that takes three number arguments — one number as an input and two additional numbers representing the endpoints of a closed range — and return the number limited to this range.
//If the number falls within the range, the number should be returned.
//If the number is less than the lower limit of the range, the lower limit should be returned.
//If the number is greater than the upper limit of the range, the upper limit should be returned.
//Examples
//limitNumber(5, 1, 10) ➞ 5
//
//limitNumber(-3, 1, 10) ➞ 1
//
//limitNumber(14, 1, 10) ➞ 10
//
//limitNumber(4.6, 1, 10) ➞ 4.6
//Notes
//All test inputs will be valid numbers.
//All test inputs' range parameters will be in the correct order (i.e. the lower range will be less than or equal to the upper range).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(limitNumber(5, 1, 10), 5)
//Test.assertEquals(limitNumber(-3, 1, 10), 1)
//Test.assertEquals(limitNumber(14, 1, 10), 10)
//Test.assertEquals(limitNumber(4.6, 1, 10), 4.6)
//Test.assertEquals(limitNumber(-100, -73, -70), -73)
//Test.assertEquals(limitNumber(2, -73, -70), -70)
//Test.assertEquals(limitNumber(-71.5, -73, -70), -71.5)
//Test.assertEquals(limitNumber(7, 8, 8.1), 8)
//Test.assertEquals(limitNumber(9, 8, 8.1), 8.1)
//Test.assertEquals(limitNumber(8.05, 8, 8.1), 8.05)
//Test.assertEquals(limitNumber(16, 16, 16), 16)
//Test.assertEquals(limitNumber(-1, 16, 16), 16)
//Test.assertEquals(limitNumber(800, 16, 16), 16)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Simple OOP Calculator

//tags: classes,math,numbers

//url: https://edabit.com/challenge/yxKoCKemzacK6PECM

//Description:
//Create functions for the Calculator class that can do the following:
//Add two numbers.
//Subtract two numbers.
//Multiply two numbers.
//Divide two numbers.
//Examples
//var calculator = new Calculator()
//
//calculator.add(10, 5) ➞ 15
//
//calculator.subtract(10, 5) ➞ 5
//
//calculator.multiply(10, 5) ➞ 50
//
//calculator.divide(10, 5) ➞ 2
//Notes
//The functions should return the result of the calculation.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//var calculator = new Calculator()
//Test.assertEquals(calculator.add(5,5), 10, "5 + 5 = 10")
//Test.assertEquals(calculator.add(20,5), 25, "20 + 5 = 25")
//Test.assertEquals(calculator.subtract(30,5), 25, "30 - 5 = 25")
//Test.assertEquals(calculator.subtract(100,5), 95, "100 - 5 = 95")
//Test.assertEquals(calculator.multiply(5,5), 25, "5 * 5 = 25")
//Test.assertEquals(calculator.multiply(100,5), 500, "100 * 5 = 500")
//Test.assertEquals(calculator.divide(10,5), 2, "10 / 5 = 2")
//Test.assertEquals(calculator.divide(100,5), 20, "100 / 5 = 20")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Coding Website Score Calculator

//tags: language_fundamentals,math,numbers

//url: https://edabit.com/challenge/49xuWj6G4yB6MfvWG

//Description:
//Imagine you run a website that presents users with different coding challenges in levels Easy, Medium, and Hard, where users get points for completing challenges. An Easy challenge is worth 5 points, a Medium challenge is worth 10 points, and a Hard challenge is worth 20 points.
//Create a function that takes the amount of challenges a user has completed for each challenge level, and calculates the user's total number of points. Keep in mind that a user cannot complete negative challenges, so the function should return the string "invalid" if any of the passed parameters are negative.
//Examples
//scoreCalculator(1, 2, 3) ➞ 85
//
//scoreCalculator(1, 0, 10) ➞ 205
//
//scoreCalculator(5, 2, -6) ➞ "invalid"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(scoreCalculator(4, 2, 7), 180, "Test 1")
//Test.assertEquals(scoreCalculator(3, 12, 0), 135, "Test 2")
//Test.assertEquals(scoreCalculator(5, -5, 2), "invalid", "Test 3")
//Test.assertEquals(scoreCalculator(20, 7, 3), 230)
//Test.assertEquals(scoreCalculator(0, 0, 0), 0)
//Test.assertEquals(scoreCalculator(1, 2, 3), 85)

