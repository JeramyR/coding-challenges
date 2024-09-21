

//title: Pythagorean Triplet

//tags: geometry,math,numbers,validation

//url: https://edabit.com/challenge/qfAvihoTKivTuzapt

//Description:
//Create a function that validates whether three given integers form a Pythagorean triplet. The sum of the squares of the two smallest integers must equal the square of the largest number to be validated.
//Examples
//isTriplet(3, 4, 5) ➞ true
//// 3² + 4² = 25
//// 5² = 25
//
//isTriplet(13, 5, 12) ➞ true
//// 5² + 12² = 169
//// 13² = 169
//
//isTriplet(1, 2, 3) ➞ false
//// 1² + 2² = 5
//// 3² = 9
//Notes
//Numbers may not be given in a sorted order.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isTriplet(3, 4, 5), true)
//Test.assertEquals(isTriplet(1, 2, 3), false)
//Test.assertEquals(isTriplet(3, 18, 8), false)
//Test.assertEquals(isTriplet(7, 12, 7), false)
//Test.assertEquals(isTriplet(13, 5, 12), true)
//Test.assertEquals(isTriplet(12, 20, 18), false)
//Test.assertEquals(isTriplet(17, 14, 2), false)
//Test.assertEquals(isTriplet(6, 15, 12), false)
//Test.assertEquals(isTriplet(60, 61, 11), true)
//Test.assertEquals(isTriplet(7, 13, 15), false)
//Test.assertEquals(isTriplet(12, 18, 7), false)
//Test.assertEquals(isTriplet(8, 17, 15), true)
//Test.assertEquals(isTriplet(3120, 79, 3121), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Barbecue Skewers

//tags: formatting,strings

//url: https://edabit.com/challenge/uAGzHNBWbNj2iNqLr

//Description:
//You are in charge of the barbecue grill. A vegetarian skewer is a skewer that has only vegetables (-o). A non-vegetarian skewer is a skewer with at least one piece of meat (-x).
//For example, the grill below has 4 non-vegetarian skewers and 1 vegetarian skewer (the one in the middle).
//["--xo--x--ox--",
//"--xx--x--xx--",
//"--oo--o--oo--",      <<< vegetarian skewer
//"--xx--x--ox--",
//"--xx--x--ox--"]
//Given a BBQ grill, write a function that returns [# vegetarian skewers, # non-vegetarian skewers]. For example above, the function should return [1, 4].
//Examples
//bbqSkewers( [
//  "--oooo-ooo--",
//  "--xx--x--xx--",
//  "--o---o--oo--",
//  "--xx--x--ox--",
//  "--xx--x--ox--"
//]) ➞ [2, 3]
//
//bbqSkewers([
//  "--oooo-ooo--",
//  "--xxxxxxxx--",
//  "--o---",
//  "-o-----o---x--",
//  "--o---o-----"
//]) ➞ [3, 2]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(bbqSkewers(
//["--oooo-ooo--", 
//"--xx--x--xx--", 
//"--o---o--oo--", 
//"--xx--x--ox--", 
//"--xx--x--ox--"]
//), [2, 3])
//​
//Test.assertSimilar(bbqSkewers(
//["--oooo-ooo--", 
//"--xxxxxxxx--", 
//"--o---", 
//"-o-----o---x--", 
//"--o---o-----"]
//), [3, 2])
//​
//Test.assertSimilar(bbqSkewers(
//["--oooo-ooo--", 
//"--ooooooo--", 
//"--o---", 
//"-o-----o---x--", 
//"--o-oooo-----"]
//), [4, 1])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Return the Sum of the Two Smallest Numbers

//tags: arrays,math,numbers

//url: https://edabit.com/challenge/GNgCfKHWfQwByBNqa

//Description:
//Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.
//Examples
//sumTwoSmallestNums([19, 5, 42, 2, 77]) ➞ 7
//
//sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]) ➞ 3453455
//
//sumTwoSmallestNums([2, 9, 6, -1]) ➞ 8
//
//sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]) ➞ 563
//
//sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]) ➞ 4519
//Notes
//Don't count negative numbers.
//Floats and empty arrays will not be used in any of the test cases.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sumTwoSmallestNums([19, 5, 42, 2, 77]), 7);
//Test.assertEquals(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]), 3453455);
//Test.assertEquals(sumTwoSmallestNums([2, 9, 6, -1]), 8);
//Test.assertEquals(sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]), 563);
//Test.assertEquals(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]), 4519);
//Test.assertEquals(sumTwoSmallestNums([280, 134, 108]), 242);
//Test.assertEquals(sumTwoSmallestNums([280, 134, 108, 1]), 109);
//Test.assertEquals(sumTwoSmallestNums([321, 406, -176]), 727);
//Test.assertEquals(sumTwoSmallestNums([1, 1, 1, 1]), 2);
//Test.assertEquals(sumTwoSmallestNums([-1, -1, 1, 1]), 2);

