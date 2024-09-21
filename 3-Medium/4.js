

//title: Function Factory

//tags: closures,functional_programming,higher_order_functions

//url: https://edabit.com/challenge/ENWFBL4jbTgLbSqwS

//Description:
//Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.
//Please check the examples below for a clearer representation of the behavior expected.
//Examples
//// Calling makePlusFunction(5) returns a new function that takes an input,
//// and returns the result when adding 5 to it.
//
//const plusFive = makePlusFunction(5)
//
//plusFive(2) ➞ 7
//
//plusFive(-8) ➞ -3
//
//// Calling makePlusFunction(10) returns a new function that takes an input,
//// and returns the result when adding 10 to it.
//
//const plusTen = makePlusFunction(10)
//
//plusTen(0) ➞ 10
//
//plusTen(188) ➞ 198
//
//plusFive(plusTen(0)) ➞ 15
//Notes
//All inputs will be valid numbers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const plusTwo = makePlusFunction(2)
//const plusFive = makePlusFunction(5)
//const plusSeven = makePlusFunction(plusTwo(plusFive(0)))
//const plusTen = makePlusFunction(10)
//​
//Test.assertEquals(plusTwo(0), 2)
//Test.assertEquals(plusTwo(18), 20)
//Test.assertEquals(plusTwo(-1), 1)
//Test.assertEquals(plusFive(0), 5)
//Test.assertEquals(plusFive(12), 17)
//Test.assertEquals(plusFive(-5), 0)
//Test.assertEquals(plusSeven(0), 7)
//Test.assertEquals(plusSeven(41), 48)
//Test.assertEquals(plusSeven(-117), -110)
//Test.assertEquals(plusTen(0), 10)
//Test.assertEquals(plusTen(1), 11)
//Test.assertEquals(plusTen(-1), 9)
//Test.assertEquals(plusTwo(plusFive(plusSeven(plusTen(1)))), 25)
//​
//Test.assertEquals(makePlusFunction(8)(8), 16)
//Test.assertEquals(makePlusFunction(1)(100), 101)
//Test.assertEquals(makePlusFunction(-100)(0), -100)
//Test.assertEquals(makePlusFunction(0)(0), 0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Rectangle Series 1: Skeleton

//tags: classes,geometry

//url: https://edabit.com/challenge/GtnWugjA8NFkaxan4

//Description:
//Write a class called Rectangle that represents a rectangular two-dimensional region. It should have the following constructor:
//constructor(x, y, width, height)
//Constructs a new rectangle whose top-left corner is specified by the given coordinates and with the given width and height.
//It should have the following properties:
//x
//
//y
//
//width
//
//height
//It should have the following methods:
//toString()
//Returns a string representation of this rectangle, as [x=1, y=2, width=3, height=4].

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// JavaScript
//​
//Test.assertEquals((new Rectangle(1,2,5,6)).x, 1, "Invalid X.");
//Test.assertEquals((new Rectangle(1,2,5,6)).y, 2, "Invalid Y.");
//Test.assertEquals((new Rectangle(1,2,5,6)).width, 5, "Invalid Width.");
//Test.assertEquals((new Rectangle(1,2,5,6)).height, 6, "Invalid Height.");
//Test.assertEquals((new Rectangle(1,2,5,6)).toString(), "[x=1, y=2, width=5, height=6]", "Invalid toString output.");

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Returning an "Add" Function

//tags: closures,higher_order_functions,language_fundamentals,numbers

//url: https://edabit.com/challenge/xtv5ZT7xDsHyrshTq

//Description:
//Given a number, n, return a function which adds n to the number passed to it.
//Examples
//add(10)(20) ➞ 30
//
//add(0)(20) ➞ 20
//
//add(-30)(80) ➞ 50
//Notes
//All numbers used in the tests will be integers (whole numbers).
//Returning a function from a function is a key part of understanding higher order functions (functions which operate on and return functions).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(add(20)(10), 30)
//Test.assertEquals(add(30)(10), 40)
//Test.assertEquals(add(100)(100), 200)
//Test.assertEquals(add(-30)(80), 50)
//Test.assertEquals(add(-10)(-10), -20)

