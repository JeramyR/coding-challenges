

//title: Image Manipulation: Invert (Part 1)

//tags: arrays,data_structures,logic,loops

//url: https://edabit.com/challenge/6YfWWLSQyPJwz2Srg

//Description:
//Images can be described as a 3D array.
//// This image has only one white pixel:
//
//[
//  [[255, 255, 255]]
//]
//// This one is a 2 by 2 black image:
//
//[
//  [[0, 0, 0], [0, 0, 0]],
//  [[0, 0, 0], [0, 0, 0]]
//]
//Your task is to create a function that takes a 3D array representation of an image and returns the inverse of that.
//For example, white becomes black, black becomes white, etc.
//Examples
//invert([
//  [[255, 255, 255], [255, 255, 255]],
//  [[255, 255, 255], [255, 255, 255]]
//]) ➞ [
//  [[0, 0, 0], [0, 0, 0]],
//  [[0, 0, 0], [0, 0, 0]]
//]
//Notes
//A valid RGB value ranges from 0 to 255 (inclusive).
//If the given array contains out of bound values, convert them to the nearest valid one.
//Next challenge in this series: Image Manipulation: 255 Shades of Grey (Part 2)

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(invert([
//  [[255,255,255], [255,255,255]],
//  [[255,255,255], [255,255,255]]
//]), [
//  [[0,0,0], [0,0,0]],
//  [[0,0,0], [0,0,0]]
//])
//​
//Test.assertSimilar(invert([
//  [[0,0,0], [0,0,0], [0,0,0]],
//  [[0,0,0], [0,0,0], [0,0,0]],
//  [[0,0,0], [0,0,0], [0,0,0]]
//]), [
//  [[255,255,255], [255,255,255], [255,255,255]],
//  [[255,255,255], [255,255,255], [255,255,255]],
//  [[255,255,255], [255,255,255], [255,255,255]]
//])
//​
//Test.assertSimilar(invert([
//  [[0,0,255], [0,0,0], [0,0,157], [100,229,4]],
//  [[100,0,3], [1,100,0], [0,10,0], [0,168,0]],
//  [[16,30,0], [0,125,0], [15,0,9], [0,139,0]],
//  [[200,2,0], [0,125,0], [0,0,9], [0,200,0]]
//]), [
//  [[255,255,0], [255,255,255], [255,255,98], [155,26,251]],

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Searching Two Objects at Once

//tags: arrays,objects

//url: https://edabit.com/challenge/4AMdviQpmzeRqYS2s

//Description:
//Oh no! Your classmate slept in this morning and totally forgot to write an essay for his homework! He sent you a text asking if the class accepted late work, but he was in such a rush, he only sent the teacher's name.
//It's your job to create a function that will search multiple objects to find the class your friend was talking about, and if they accept late work.
//With the limited amount of classes your friend is taking, you might find it easier to just create a switch statement for every teacher, or search each object (class) individually. But not only does that take the fun out of the challenge, but your friend is also counting on you to find out this information fast; those overcomplicated methods just won't do. Try to search all class objects at one time to maximize speed!
//Example
//acceptsLateWork("Mr. Citrano") ➞ false
//Notes
//The class objects are provided to you in the Code tab- don't change them.
//The teacher given will always be valid.
//Each class has an "Advanced" and "Standard" curriculum, both with a different teacher. Make sure to consider them!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const tests = [
//  ['Ms. Abrimian', false],
//  ['Mr. Sheehan', true],
//  ['Mr. Citrano', false],
//  ['Ms. Marinelli', false],
//]
//​
//tests.forEach(([actual, expected]) =>
//  Test.assertEquals(acceptsLateWork(actual), expected)
//)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Identical Row and Column?

//tags: arrays,validation

//url: https://edabit.com/challenge/MXbibjS95Y8X4wDZx

//Description:
//Write a function that returns true if there exists a row that is identical to a column in a 2-D matrix, otherwise false.
//To illustrate:
//[
//  [1, 2, 3, 4],
//  [2, 4, 9, 8],
//  [5, 9, 7, 7],
//  [6, 8, 1, 0]
//]
//
//// 2nd row + 2nd column are identical: [2, 4, 9, 8]
//Examples
//hasIdentical([
//  [4, 4, 4, 4],
//  [2, 4, 9, 8],
//  [5, 4, 7, 7],
//  [6, 4, 1, 0]
//]) ➞ true
//
//hasIdentical([
//  [4, 4, 9, 4],
//  [2, 1, 9, 8],
//  [5, 4, 7, 7],
//  [6, 4, 1, 0]
//]) ➞ false
//
//hasIdentical([
//  [4, 4]
//  [2, 1]
//]) ➞ false
//
//hasIdentical([
//  [4, 2]
//  [2, 1]
//]) ➞ true
//Notes
//Non-square matrices should return false.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(hasIdentical([
//  [4, 4, 4, 4], 
//  [2, 4, 9, 8], 
//  [5, 4, 7, 7], 
//  [6, 4, 1, 0]
//]), true)
//​
//Test.assertEquals(hasIdentical([
//  [4, 2, 4, 6, 1], 
//  [2, 4, 9, 4, 5], 
//  [5, 1, 7, 1, 9], 
//  [6, 4, 1, 0, 33], 
//  [5, 5, 5, 33, 5]
//]), true)
//​
//Test.assertEquals(hasIdentical([
//  [4, 2],
//  [2, 1]
//]), true)
//​
//Test.assertEquals(hasIdentical([
//  [4, 4, 9, 4], 
//  [2, 1, 9, 8], 
//  [5, 4, 7, 7], 
//  [6, 4, 1, 0]

