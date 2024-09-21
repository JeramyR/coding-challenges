

//title: Parity of the Smallest Integer

//tags: arrays,logic,loops

//url: https://edabit.com/challenge/JCxa7DhzitMZFWBk4

//Description:
//Write a function that returns the smallest integer in an array with its corresponding index and its parity. Even though this challenge can be achieved easily with the modulo operator %, indexOf() and min() methods, these have been restricted to augment the challenge's level of difficulty.
//Output Structure
//{"@index " + index_of_smallest: smallest_integer, "parity": "odd|even"}
//Examples
//bitwiseOneZero([107, 19, -18, -79, 36, 23, 97]) ➞ {"@index 3": -79, "parity": "odd"}
//
//bitwiseOneZero([31, 7, 2, 13, 7, 9, 10, 13]) ➞ {"@index 2": 2, "parity": "even"}
//
//bitwiseOneZero([3, 3, 3, 3, 3, 3]) ➞ {"@index 0": 3, "parity": "odd"}
//Notes
//The set of limitations imposed on this challenge dictates the level of difficulty.
//Another version of this challenge that deals with recursion can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const noIndexOfMinMod = f => !RegExp('indexOf|min|%').test(f)
//const noRecur = f => !((`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f)))
//Test.assertNotEquals(noIndexOfMinMod(bitwiseOneZero), false, "The use of modulo operator (%) isn't allowed!")
//Test.assertNotEquals(noRecur(bitwiseOneZero), false, "A recursive solution isn't allowed!")
//​
//let numVector = [
//  [107, 19, -18, -79, 36, 23, 97],
//  [31, 7, 2, 13, 7, 9, 10, 13],
//  [3, 3, 3, 3, 3, 3],
//  [-31, -7, -13, -7, -9, -13],
//  [1, 3, 9, 5, -1, 7, 9, 49],
//  [63, 77, 13, 75, 91, 113],
//  [6, 6, 6, 6, 6, 6]
//],
//resVector = [
//  {"@index 3": -79, "parity": "odd"},
//  {"@index 2": 2, "parity": "even"},
//  {"@index 0": 3, "parity": "odd"},
//  {"@index 0": -31, "parity": "odd"},
//  {"@index 4": -1, "parity": "odd"},
//  {"@index 2": 13, "parity": "odd"},
//  {"@index 0": 6, "parity": "even"}]
//for (let i in numVector) Test.assertSimilar(bitwiseOneZero(numVector[i]), resVector[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Economical Numbers

//tags: conditions,loops,math,numbers

//url: https://edabit.com/challenge/W3Tw2TK8nF8ej9YPC

//Description:
//A number is Economical if the quantity of digits of its prime factorization (including exponents greater than 1) is equal or lower than the digits quantity of the number itself.
//Given an integer n, implement a function that returns a string:
//"Equidigital" if the quantity of digits of the prime factorization (including exponents greater than 1) is equal to the quantity of digits of n;
//"Frugal" if the quantity of digits of the prime factorization (including exponents greater than 1) is lower than the quantity of digits of n;
//"Wasteful" if none of the two above conditions is true.
//Examples
//isEconomical(14) ➞ "Equidigital"
//// The prime factorization of 14 (2 digits) is [2, 7] (2 digits)
//// Exponents equal to 1 are not counted
//
//isEconomical(125) ➞ "Frugal"
//// The prime factorization of 125 (3 digits) is [5^3] (2 digits)
//// Notice how exponents greater than 1 are counted
//
//isEconimical(1024) ➞ "Frugal"
//// The prime factorization of 1024 (4 digits) is [2^10] (3 digits)
//
//isEconomical(30) ➞ "Wasteful"
//// The prime factorization of 30 (2 digits) is [2, 3, 5] (3 digits)
//Notes
//Any given n will be a positive integer greater than 1.
//Remember to count also the exponents greater than 1 into the prime factorization: 2¹ = 2 (one digit), 2² = 22 (two digits), 2¹° = 210 (three digits)...

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isEconomical(14), "Equidigital", "Example #1");
//Test.assertEquals(isEconomical(125), "Frugal", "Example #2");
//Test.assertEquals(isEconomical(1024), "Frugal", "Example #3");
//Test.assertEquals(isEconomical(30), "Wasteful", "Example #4");
//Test.assertEquals(isEconomical(81), "Equidigital");
//Test.assertEquals(isEconomical(243), "Frugal");
//Test.assertEquals(isEconomical(5), "Equidigital");
//Test.assertEquals(isEconomical(6), "Wasteful");
//Test.assertEquals(isEconomical(1267), "Equidigital");
//Test.assertEquals(isEconomical(1701), "Frugal");
//Test.assertEquals(isEconomical(1267), "Equidigital");
//Test.assertEquals(isEconomical(12871), "Equidigital");
//Test.assertEquals(isEconomical(88632), "Wasteful");

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Rectangle or Not?

//tags: math,strings,validation

//url: https://edabit.com/challenge/piRQ5GwbXaemykNki

//Description:
//Create a function that determines whether four coordinates properly create a rectangle. A rectangle has 4 sides and has 90 degrees for each angle. Coordinates are given as strings containing an x- and a y- coordinate: "(x, y)".
//For this problem, assume none of the rectangles are tilted.
//isRectangle(["(0, 0)", "(0, 1)", "(1, 0)", "(1, 1)"]) ➞ true
//Examples
//isRectangle(["(-4, 3)", "(4, 3)", "(4, -3)", "(-4, -3)"]) ➞ true
//
//isRectangle(["(0, 0)", "(0, 1)"]) ➞ false
//// A line is not a rectangle!
//
//isRectangle(["(0, 0)", "(0, 1)", "(1, 0)"]) ➞ false
//// Neither is a triangle!
//
//isRectangle(["(0, 0)", "(9, 0)", "(7, 5)", "(16, 5)"]) ➞ false
//// A parallelogram, but not a rectangle!
//Notes
//A square is also a rectangle!
//A parallelogram is NOT necessarily a rectangle (the rectangle is a special case of a parallelogram).
//If the input is fewer than or greater than 4 coordinates, return false.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isRectangle(["(-4, 3)", "(4, 3)", "(4, -3)", "(-4,-3)"]), true)
//Test.assertEquals(isRectangle(["(0, 0)", "(0, 1)"]), false, 'A line is not a rectangle!')
//Test.assertEquals(isRectangle(["(0, 0)", "(0, 1)", "(1,0)"]), false, 'Neither is a triangle!')
//Test.assertEquals(isRectangle(["(0, 0)", "(9, 0)", "(7,5)", "(16, 5)"]), false, 'A parallelogram, but not a rectangle!')
//Test.assertEquals(isRectangle(["(0, 0)", "(1, 0)", "(0, 1)", "(0, 0)"]), false, 'One of the points is identical (really only 3 coordinates)')
//Test.assertEquals(isRectangle(["(1, 0)", "(1, 2)", "(2, 1)", "(2, 3)", "(3, 3)"]), false, 'Too many sides (among other things)!')
//Test.assertEquals(isRectangle(["(-2, 2)", "(-2, -1)", "(5, -1)", "(5, 2)"]), true)

