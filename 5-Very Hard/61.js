

//title: Split 25 (Part 1)

//tags: algebra,control_flow,math,numbers

//url: https://edabit.com/challenge/upHyzAsn83TctQQYn

//Description:
//About a month ago I stumbled upon an interesting problem — something called the 25 split. In the problem, you had to break up 25 into parts, and, from those parts that add to it, try to create the biggest product.
//For example, 3 * 22 = 66 or 5 * 5 * 5 * 5 * 5 = 3125. With this first part, return the value of the biggest product possible using natural number parts from a given number, x.
//Examples
//split(5) ➞ 6
//// 3 times 2
//
//split(10) ➞ 36
//// 3 * 3 * 4
//
//split(1) ➞ 1
//Notes
//3's are useful...

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(split(25), 8748)
//Test.assertEquals(split(1), 1)
//Test.assertEquals(split(10), 36)
//Test.assertEquals(split(5), 6)
//Test.assertEquals(split(15), 243)
//Test.assertEquals(split(20), 1458)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Infection of the Ones

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/wtPATmEY9xQCpzWNT

//Description:
//Write a function that replaces every row and column that contains at least one 1 into a row/column that is filled entirely with 1s.
//Examples
//onesInfection([
//  [0, 0, 1],
//  [0, 0, 0],
//  [0, 0, 0]
//]) ➞ [
//  [1, 1, 1],
//  [0, 0, 1],
//  [0, 0, 1]
//]
//
//onesInfection([
//  [1, 0, 1, 0],
//  [0, 1, 0, 0],
//  [0, 0, 0, 0]
//]) ➞ [
//  [1, 1, 1, 1],
//  [1, 1, 1, 1],
//  [1, 1, 1, 0]
//]
//
//onesInfection([
//  [0, 1, 0, 1],
//  [0, 0, 0, 0],
//  [0, 1, 0, 0]
//]) ➞ [
//  [1, 1, 1, 1],
//  [0, 1, 0, 1],
//  [1, 1, 1, 1]
//]
//Notes
//You must mutate the original array.
//Input matrices will have at least row and one column.
//Bonus: Solve this without using any higher-order functions.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// Input arrays of various types 
//i1 = [
//[0, 0, 1], 
//[0, 0, 0], 
//[0, 0, 0]
//]
//i2 = [
//[1, 0, 1, 0], 
//[0, 1, 0, 0], 
//[0, 0, 0, 0]
//]
//i3 = [
//[0, 1, 0, 1], 
//[0, 0, 0, 0], 
//[0, 1, 0, 0]
//]
//i4 = [
//[0, 1, 0, 1, 0], 
//[0, 0, 0, 0, 0], 
//[0, 1, 1, 1, 0]
//]
//i5 = [
//[1, 0, 1, 0], 
//[0, 0, 0, 0], 
//[0, 0, 0, 0]

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Mind the Gap

//tags: algebra,math,numbers

//url: https://edabit.com/challenge/8wvYyLYo9JaRrC8dW

//Description:
//A number is gapful if it is at least 3 digits long and is divisible by the number formed by stringing the first and last numbers together. The smallest number that fits this description is 100. First digit is 1, last digit is 0, forming 10, which is a factor of 100. Therefore, 100 is gapful.
//Create a function that takes a number n and returns the closest gapful number (including itself). If there are 2 gapful numbers that are equidistant to n, return the lower one.
//Examples
//gapful(25) ➞ 100
//
//gapful(100) ➞ 100
//
//gapful(103) ➞ 105
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(gapful(25), 100)
//Test.assertEquals(gapful(100), 100)
//Test.assertEquals(gapful(103), 105)
//Test.assertEquals(gapful(1442), 1441)
//Test.assertEquals(gapful(3345), 3333)
//Test.assertEquals(gapful(4780), 4773)
//Test.assertEquals(gapful(3078), 3078)

