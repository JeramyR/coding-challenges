

//title: Solving Linear Equations (Part 1)

//tags: algebra,math

//url: https://edabit.com/challenge/36n9MghXxExpJkfxC

//Description:
//Consider the equation ax+1=b+x where a and b are constants.
//Create a function that takes numbers a and b as arguments, and returns the solution of the equation. If the equation does not have a solution, return "No solution". If any number satisfies the equation, return "Any number".
//Examples
//solve(4, 7) ➞ 2.0
//
//solve(9, 5) ➞ 0.5
//
//solve(12, -4) ➞ -0.455
//Notes
//Round your answer to three decimal places.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(solve(4, 7), 2.0)
//Test.assertEquals(solve(9, 5), 0.5)
//Test.assertEquals(solve(12, -4), -0.455)
//Test.assertEquals(solve(1, 1), "Any number")
//Test.assertEquals(solve(1, 2), "No solution")
//Test.assertEquals(solve(100, 7), 0.061)
//Test.assertEquals(solve(-2, -11), 4.0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Coaxial Cable Impedance

//tags: math,physics

//url: https://edabit.com/challenge/yNS9sBcofT6NuT2kN

//Description:
//Create a function that takes the values Dd (Dielectric Outer Diameter), Dc (Inner Conductor Diameter) and er (Dielectric Constant) and calculates the Coaxial Cable Impedance.
//Examples
//impedanceCalculator(20.7, 2, 4) ➞ 70.0
//
//impedanceCalculator(5.3, 1.2, 2.2) ➞ 60.0
//
//impedanceCalculator(4.48, 1.33, 2.2) ➞ 50.0
//Notes
//If you get stuck on a challenge, find help in the Resources tab.
//Round your result to one decimal place.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(impedanceCalculator(5.3, 1.2, 2.2), 60.0)
//Test.assertEquals(impedanceCalculator(4.58, 1.33, 2.2), 50.0)
//Test.assertEquals(impedanceCalculator(20.7, 2, 4), 70.0)
//Test.assertEquals(impedanceCalculator(40, 2.05, 2.2), 120.0)
//Test.assertEquals(impedanceCalculator(25.6, 4, 2.2), 75.0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Impossible Date

//tags: dates,validation

//url: https://edabit.com/challenge/dhRtmeFcjGcD7yvHA

//Description:
//Given the parameters day, month and year, return whether that date is a valid date.
//Examples
//isValidDate(35, 2, 2020) ➞ false
//// February doesn't have 35 days.
//
//isValidDate(8, 3, 2020) ➞ true
//// 8th March 2020 is a real date.
//
//isValidDate(31, 6, 1980) ➞ false
//// June only has 30 days.
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isValidDate(35, 2, 2020), false)
//Test.assertEquals(isValidDate(8, 3, 2020), true)
//Test.assertEquals(isValidDate(31, 6, 1980), false)
//Test.assertEquals(isValidDate(27, 9, 1822), true)
//Test.assertEquals(isValidDate(34, 7, 2008), false)
//Test.assertEquals(isValidDate(32, 12, 1932), false)
//Test.assertEquals(isValidDate(20, 3, 2019), true)
//Test.assertEquals(isValidDate(28, 3, 2004), true)
//Test.assertEquals(isValidDate(22, 5, 1962), true)
//Test.assertEquals(isValidDate(21, 11, 1875), true)
//Test.assertEquals(isValidDate(6, 12, 1982), true)
//Test.assertEquals(isValidDate(6, 10, 1873), true)
//Test.assertEquals(isValidDate(5, 6, 1852), true)
//Test.assertEquals(isValidDate(21, 4, 1809), true)
//Test.assertEquals(isValidDate(6, 15, 1969), false)
//Test.assertEquals(isValidDate(6, 7, 1893), true)
//Test.assertEquals(isValidDate(25, 4, 1826), true)
//Test.assertEquals(isValidDate(16, 6, 1922), true)
//Test.assertEquals(isValidDate(16, 10, 1803), true)
//Test.assertEquals(isValidDate(5, 6, 1980), true)
//Test.assertEquals(isValidDate(12, 15, 2018), false)
//Test.assertEquals(isValidDate(35, 12, 1972), false)
//Test.assertEquals(isValidDate(16, 11, 2028), true)
//Test.assertEquals(isValidDate(2, 6, 1947), true)
//Test.assertEquals(isValidDate(1, 10, 1904), true)

