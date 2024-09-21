

//title: Negative Image

//tags: arrays,closures,loops

//url: https://edabit.com/challenge/uNzzNQPDQferAAGMc

//Description:
//Suppose an image can be represented as a 2D array of 0s and 1s. Write a function to reverse an image. Replace the 0s with 1s and vice versa.
//Examples
//reverseImage([
//  [1, 0, 0],
//  [0, 1, 0],
//  [0, 0, 1]
//]) ➞ [
//  [0, 1, 1],
//  [1, 0, 1],
//  [1, 1, 0]
//]
//
//reverseImage([
//  [1, 1, 1],
//  [0, 0, 0]
//]) ➞ [
//  [0, 0, 0],
//  [1, 1, 1]
//]
//
//reverseImage([
//  [1, 0, 0],
//  [1, 0, 0]
//]) ➞ [
//  [0, 1, 1],
//  [0, 1, 1]
//]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(reverseImage([
//  [1, 0, 0], 
//  [0, 1, 0], 
//  [0, 0, 1]
//]), [
//  [0, 1, 1], 
//  [1, 0, 1], 
//  [1, 1, 0]
//])
//​
//Test.assertSimilar(reverseImage([
//  [1, 1, 1], 
//  [0, 0, 0]
//]), [
//  [0, 0, 0], 
//  [1, 1, 1]
//])
//​
//Test.assertSimilar(reverseImage([
//  [1, 0, 0], 
//  [1, 0, 0]
//]), [
//  [0, 1, 1], 
//  [0, 1, 1]
//])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Rectangle in Circle

//tags: geometry,math,validation

//url: https://edabit.com/challenge/Qqo3rXrDEQ6kc4PqR

//Description:
//Create a function that takes three numbers — the width and height of a rectangle, and the radius of a circle — and returns true if the rectangle can fit inside the circle, false if it can't.
//Examples
//rectangleInCircle(8, 6, 5) ➞ true
//
//rectangleInCircle(5, 9, 5) ➞ false
//
//rectangleInCircle(4, 7, 4) ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(rectangleInCircle(5, 12, 7), true)
//Test.assertEquals(rectangleInCircle(5, 12, 6), false)
//Test.assertEquals(rectangleInCircle(3, 7, 4), true)
//Test.assertEquals(rectangleInCircle(4, 7, 4), false)
//Test.assertEquals(rectangleInCircle(11, 1, 6), true)
//Test.assertEquals(rectangleInCircle(21, 12, 12), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Check If Lines Are Parallel

//tags: algebra,math,validation

//url: https://edabit.com/challenge/rpmQpjzxo4rnBhrca

//Description:
//Given two lines, determine whether or not they are parallel.
//Lines are represented by an array [a, b, c], which corresponds to the line ax+by=c.
//Examples
//linesAreParallel([1, 2, 3], [1, 2, 4]) ➞ true
//// x+2y=3 and x+2y=4 are parallel.
//
//linesAreParallel([2, 4, 1], [4, 2, 1]) ➞ false
//// 2x+4y=1 and 4x+2y=1 are not parallel.
//
//linesAreParallel([0, 1, 5], [0, 1, 5]) ➞ true
//// Lines are parallel to themselves.
//Notes
//Two lines are parallels if they have the same slope. If the slopes are different, the lines are not parallel.
//All test cases use valid input (no lists of the wrong size, for example).
//All coefficients will be integers (whole numbers).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(linesAreParallel([1,2,3], [1,2,4]), true, "Given example 1.")
//Test.assertEquals(linesAreParallel([2,4,1], [4,2,1]), false, "Given example 2.")
//Test.assertEquals(linesAreParallel([0,1,5], [0,1,5]), true, "Given example 3.")
//Test.assertEquals(linesAreParallel([2,5,0], [20,50,10]), true)
//Test.assertEquals(linesAreParallel([2,5,0], [-200,-500,10]), true)
//Test.assertEquals(linesAreParallel([400000,1,0], [400000,2,0]), false)
//Test.assertEquals(linesAreParallel([800,20,0], [40,20,0]), false)
//Test.assertEquals(linesAreParallel([400000,1,0], [800000,2,100000]), true)
//Test.assertEquals(linesAreParallel([-5,7,100000], [5,-7,-200000]), true)

