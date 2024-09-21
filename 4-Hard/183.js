

//title: Carrying the Digits

//tags: control_flow,math,numbers

//url: https://edabit.com/challenge/pkfZB4AkkpyxXQvhT

//Description:
//Write a function that returns the number of times you must carry a digit when you sum together two integers.
//Examples
//carryDigits(36, 135) ➞ 1
//// You carry the 1 when you sum 6 and 5 together.
//
//carryDigits(671, 329) ➞ 3
//
//carryDigits(1111, 3333) ➞ 0
//
//carryDigits(53214, 56905) ➞ 3
//Notes
//Count all carry operations (even those on leading digits).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(carryDigits(36, 135), 1)
//Test.assertEquals(carryDigits(671, 329), 3)
//Test.assertEquals(carryDigits(1111, 3333), 0)
//Test.assertEquals(carryDigits(4, 5268), 1)
//Test.assertEquals(carryDigits(53214, 16905), 2)
//Test.assertEquals(carryDigits(53214, 56905), 3)
//Test.assertEquals(carryDigits(515, 4), 0)
//Test.assertEquals(carryDigits(515, 90), 1)
//Test.assertEquals(carryDigits(63223, 70000), 1)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Smallest Missing Positive Integer

//tags: arrays,math,numbers

//url: https://edabit.com/challenge/95MhNEMuEEFp9PLaN

//Description:
//Given an array of integers, return the smallest positive integer not present in the array.
//Here is a representative example. Consider the array:
//[-2, 6, 4, 5, 7, -1, 7, 1, 3, 6, 6, -2, 9, 10, 2, 2]
//After reordering, the array becomes:
//[-2, -2, -1, 1, 2, 2, 3, 4, 5, 6, 6, 6, 7, 7, 9, 10]
//... from which we see that the smallest missing positive integer is 8.
//Examples
//minMissPos([-2, 6, 4, 5, 7, -1, 1, 3, 6, -2, 9, 10, 2, 2]) ➞ 8
//// After sorting, the array becomes [-2, -2, -1, 1, 2, 2, 3, 4, 5, 6, 6, 7, 9, 10]
//// So the smallest missing positive integer is 8
//
//minMissPos([5, 9, -2, 0, 1, 3, 9, 3, 8, 9]) ➞ 2
//// After sorting, the array becomes [-2, 0, 1, 3, 3, 5, 8, 9, 9, 9]
//// So the smallest missing positive integer is 2
//
//minMissPos([0, 4, 4, -1, 9, 4, 5, 2, 10, 7, 6, 3, 10, 9]) ➞ 1
//// After sorting, the array becomes [-1, 0, 2, 3, 4, 4, 4, 5, 6, 7, 9, 9, 10, 10]
//// So the smallest missing positive integer is 1
//Notes
//For the sake of clarity, recall that 0 is not considered to be a positive number.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(minMissPos([-2, 6, 4, 5, 7, -1, 7, 1, 3, 6, 6, -2, 9, 10, 2, 2]), 8)
//Test.assertEquals(minMissPos([5, 9, -2, 0, 1, 3, 9, 3, 8, 9]), 2)
//Test.assertEquals(minMissPos([0, 4, 4, -1, 9, 4, 5, 2, 10, 7, 6, 3, 10, 9]), 1)
//Test.assertEquals(minMissPos([4, 2, 9, 6, 1, 3, -2, 10, 3, 0, 9, 7, 3]), 5)
//Test.assertEquals(minMissPos([0, -4, -4, -1, -9, -4, -5, -2, -10, -7, -6, -3, -10, -9]), 1)
//Test.assertEquals(minMissPos([7, 6, 5, 4, 3, 2, 1]), 8)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Concert Seats

//tags: arrays,loops,validation

//url: https://edabit.com/challenge/Qkdyd5CLHizJqmNdx

//Description:
//Create a function that determines whether each seat can "see" the front-stage. A number can "see" the front-stage if it is strictly greater than the number before it.
//Everyone can see the front-stage in the example below:
//// FRONT STAGE
//[[1, 2, 3, 2, 1, 1],
//[2, 4, 4, 3, 2, 2],
//[5, 5, 5, 5, 4, 4],
//[6, 6, 7, 6, 5, 5]]
//
//// Starting from the left, the 6 > 5 > 2 > 1, so all numbers can see.
//// 6 > 5 > 4 > 2 - so all numbers can see, etc.
//Not everyone can see the front-stage in the example below:
//// FRONT STAGE
//[[1, 2, 3, 2, 1, 1], 
//[2, 4, 4, 3, 2, 2], 
//[5, 5, 5, 10, 4, 4], 
//[6, 6, 7, 6, 5, 5]]
//
//// The 10 is directly in front of the 6 and blocking its view.
//The function should return true if every number can see the front-stage, and false if even a single number cannot.
//Examples
//canSeeStage([
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
//]) ➞ true
//
//canSeeStage([
//  [0, 0, 0],
//  [1, 1, 1],
//  [2, 2, 2]
//]) ➞ true
//
//canSeeStage([
//  [2, 0, 0], 
//  [1, 1, 1], 
//  [2, 2, 2]
//]) ➞ false
//
//canSeeStage([
//  [1, 0, 0],
//  [1, 1, 1],
//  [2, 2, 2]
//]) ➞ false
//
//// Number must be strictly smaller than
//// the number directly behind it.
//Notes
//Numbers must be strictly greater than the number in front of it.
//All numbers within the arrays will be whole numbers greater than or equal to zero.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(canSeeStage(
//[[1, 2, 3], 
//[4, 5, 6], 
//[7, 8, 9]]), true)
//​
//Test.assertEquals(canSeeStage(
//[[1, 2, 2], 
//[1, 2, 3], 
//[4, 4, 4]]), false)
//​
//Test.assertEquals(canSeeStage(
//[[1, 1, 2], 
//[5, 2, 3], 
//[4, 4, 4]]), false)
//​
//Test.assertEquals(canSeeStage(
//[[1, 1, 2], 
//[5, 2, 3], 
//[6, 4, 4]]), true)
//​
//Test.assertEquals(canSeeStage(
//[[0, 0, 0], 
//[1, 1, 1], 
//[2, 2, 2]]), true)
//​

