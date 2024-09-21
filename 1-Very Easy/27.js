

//title: Fix the Error: Check Whether a Given Number Is Odd

//tags: bugs,numbers,validation

//url: https://edabit.com/challenge/7rw9NgXoGZuyoJjZy

//Description:
//Éowyn has written the function isOdd() to check if a given number is odd or not. Unfortunately, the function does not return the correct result for all the inputs. Help her fix the error.
//function isOdd(num){
//  ret n % 19 += 123;
//}
//Examples
//isOdd(-5) ➞ true
//
//isOdd(25) ➞ true
//
//isOdd(0) ➞ false
//Notes
//All the inputs will only be integers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isOdd(-5), true)
//Test.assertEquals(isOdd(-50), false)
//Test.assertEquals(isOdd(0), false)
//Test.assertEquals(isOdd(25), true)
//Test.assertEquals(isOdd(-19), true)
//Test.assertEquals(isOdd(12), false)
//Test.assertEquals(isOdd(23), true)
//Test.assertEquals(isOdd(-71), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Stack the Boxes

//tags: algebra,algorithms,logic,math,numbers

//url: https://edabit.com/challenge/QifJBFwg32GNdiWQa

//Description:
//Here's an image of four models. Some of the cubes are hidden behind other cubes. Model one consists of one cube. Model two consists of four cubes, and so on...
//
//Write a function that takes a number n and returns the number of stacked boxes in a model n levels high, visible and invisible.
//Examples
//stackBoxes(1) ➞ 1
//
//stackBoxes(2) ➞ 4
//
//stackBoxes(0) ➞ 0
//Notes
//Step n is a positive integer.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(stackBoxes(1), 1)
//Test.assertEquals(stackBoxes(2), 4)
//Test.assertEquals(stackBoxes(0), 0)
//Test.assertEquals(stackBoxes(5), 25)
//Test.assertEquals(stackBoxes(27), 729)
//Test.assertEquals(stackBoxes(196), 38416)
//Test.assertEquals(stackBoxes(512), 262144)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Triangle and Parallelogram Area Finder

//tags: algorithms,conditions,geometry,math

//url: https://edabit.com/challenge/Z5nLWN9XscsuRi2oT

//Description:
//Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.
//Examples
//areaShape(2, 3, "triangle") ➞ 3
//
//areaShape(8, 6, "parallelogram") ➞ 48
//
//areaShape(2.9, 1.3, "parallelogram") ➞ 3.77
//Notes
//Area of a triangle is 0.5 * b * h
//Area of a parallelogram is b * h
//Assume triangle and parallelogram are the only inputs for shape.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(areaShape(2, 3, "triangle"), 3)
//Test.assertEquals(areaShape(8, 6, "parallelogram"), 48)
//Test.assertEquals(areaShape(0, 1, "triangle"), 0)
//Test.assertEquals(areaShape(2.9, 1.3, "parallelogram"), 3.77)
//Test.assertEquals(areaShape(0.01, 5, "triangle"), 0.025)

