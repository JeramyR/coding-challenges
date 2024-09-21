

//title: Catalan Number

//tags: language_fundamentals,math

//url: https://edabit.com/challenge/WBdw7BxLCoYnbmphd

//Description:
//Create a function that returns the nth catalan number.In combinatorial mathematics, the Catalan numbers form a sequence of natural numbers that occur in various counting problems, often involving recursively-defined objects. They are named after the Belgian mathematician Eugène Charles Catalan (1814–1894). For more info, check out the resource tab.
//Examples
//getCatalanNumber(0) ➞ 1
//
//getCatalanNumber(6) ➞ 132
//
//getCatalanNumber(8) ➞ 1430
//Notes
//Inputs are zero and positive integers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(getCatalanNumber(0), 1)
//Test.assertEquals(getCatalanNumber(3), 5)
//Test.assertEquals(getCatalanNumber(7), 429)
//Test.assertEquals(getCatalanNumber(8), 1430)
//Test.assertEquals(getCatalanNumber(9), 4862)
//Test.assertEquals(getCatalanNumber(1), 1)
//Test.assertEquals(getCatalanNumber(4), 14)
//Test.assertEquals(getCatalanNumber(11), 58786)
//Test.assertEquals(getCatalanNumber(17), 129644790)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Circle Constructor

//tags: geometry,language_fundamentals,math,objects

//url: https://edabit.com/challenge/75SZTpeP3xKPu8Gx4

//Description:
//Create a Circle() constructor that takes the radius as a single argument and has the following properties and methods:
//.radius
//.diameter
//.getC() (get circumference)
//.getA() (get area)
//Instantiate this constructor with two circles:
//c1 has radius 3
//c2 has radius 5
//For example, if I used the Circle constructor to instantiate a new instance called c0 with a radius of 1, I would have:
//Examples
//c0.radius ➞ 1
//
//c0.diameter ➞ 2
//
//c0.getC() ➞ 6.28
//
//c0.getA() ➞ 3.14
//Notes
//Circumference: 2πr. Area: πr^2.
//Use Math.PI for calculating circumference and area.
//Round the perimeter and area results to the nearest hundredths place.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(c1.radius, 3)
//Test.assertEquals(c1.diameter, 6)
//Test.assertEquals(c1.getC(), 18.85)
//Test.assertEquals(c1.getA(), 28.27)
//Test.assertEquals(c2.radius, 5)
//Test.assertEquals(c2.diameter, 10)
//Test.assertEquals(c2.getC(), 31.42)
//Test.assertEquals(c2.getA(), 78.54)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Circular Shift

//tags: arrays,validation

//url: https://edabit.com/challenge/JBXaZsweHvB4qkksJ

//Description:
//Write a function that takes two arrays (arr1 and arr2) and an int n, and returns true if the second array is equal to the first array shifted by n positions. Otherwise, return false.
//Examples
//circularShift([1, 2, 3, 4], [3, 4, 1, 2], 2) ➞ true
//
//circularShift([1, 1], [1, 1], 6) ➞ true
//
//circularShift([0, 1, 2, 3, 4, 5], [3, 4, 5, 2, 1, 0], 3) ➞ false
//Notes
//The two arrays will be of the same length.
//n can be a negative value.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(circularShift(
//  [1, 2, 3, 4],
//  [3, 4, 1, 2],
//  2
//), true)
//​
//Test.assertSimilar(circularShift(
//  [1, 1],
//  [1, 1],
//  6
//), true)
//​
//Test.assertSimilar(circularShift(
//  [0, 1, 2, 3, 4, 5],
//  [3, 4, 5, 2, 1, 0],
//  3
//), false)
//​
//Test.assertSimilar(circularShift(
//  [0, 1, 2, 3],
//  [1, 2, 3, 1],
//  1
//), false)
//​
//Test.assertSimilar(circularShift(

