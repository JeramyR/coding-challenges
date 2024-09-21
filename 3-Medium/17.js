

//title: Total Volume of All Boxes

//tags: arrays,geometry,math

//url: https://edabit.com/challenge/Dq8kbbsLYyG9are5Z

//Description:
//Given an array of boxes, create a function that returns the total volume of all those boxes combined together. A box is represented by an array with three elements: length, width and height.
//For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]) should return 266 since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.
//Examples
//totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]) ➞ 63
//
//totalVolume([2, 2, 2], [2, 1, 1]) ➞ 10
//
//totalVolume([1, 1, 1]) ➞ 1
//Notes
//You will be given at least one box.
//Each box will always have three dimensions included.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]), 63)
//Test.assertEquals(totalVolume([2, 2, 2], [2, 1, 1]), 10)
//Test.assertEquals(totalVolume([1, 1, 1]), 1)
//Test.assertEquals(totalVolume([5, 1, 10], [1, 9, 2]), 68)
//Test.assertEquals(totalVolume([1, 1, 5], [3, 3, 1]), 14)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Mubashir`s Mystery Challenge

//tags: interview,logic,math,numbers

//url: https://edabit.com/challenge/7CWbYfRji9yhna9tf

//Description:
//Mubashir has written a mysterious function that takes two numbers a and b and returns multiplication?. Solve the riddle of what Mubashir's function is by having a look at some of the examples below.
//Examples
//mubashirFunction(0, 1) ➞ 0
//
//mubashirFunction(1, 2) ➞ 2
//
//mubashirFunction(10, 10) ➞ 1
//Notes
//Check the Tests tab for more examples.
//This isn't really a coding challenge, more of a fun riddle ;)

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

////0 * 1 = 0
//Test.assertEquals(mubashirFunction(0,1), 0)
//​
////Obviously, 1 * 2 = 2
//Test.assertEquals(mubashirFunction(1,2), 2)
//​
////That was easy, 5 * 6 = 30
//Test.assertEquals(mubashirFunction(5,6), 30)
//​
////Wait.. What? 10 * 10 = 1 ?
//Test.assertEquals(mubashirFunction(10,10), 1)
//​
////What's happening ? 200 * 200 = 4, 0 was omitted ?
//Test.assertEquals(mubashirFunction(200,200), 4)
//​
////One more...
//Test.assertEquals(mubashirFunction(12,34), 21)
//​
////You can guess from this..
//Test.assertEquals(mubashirFunction(123,45),54)
//​
////Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Index Multiplier

//tags: arrays,numbers

//url: https://edabit.com/challenge/3Efavz8YmSBia4p8s

//Description:
//Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.
//Examples
//indexMultiplier([1, 2, 3, 4, 5]) ➞ 40
//// (1*0 + 2*1 + 3*2 + 4*3 + 5*4)
//
//indexMultiplier([-3, 0, 8, -6]) ➞ -2
//// (-3*0 + 0*1 + 8*2 + -6*3)
//Notes
//All items in the array will be integers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(indexMultiplier([9, 3, 7, -7]), -4)
//Test.assertEquals(indexMultiplier([3, 8, 6, -4]), 8)
//Test.assertEquals(indexMultiplier([10, -9, -2, 0, 2]), -5)
//Test.assertEquals(indexMultiplier([4, 4, 2, 2, -4]), -2)
//Test.assertEquals(indexMultiplier([9, 4, 7, 5, -1, -3]), 14)
//Test.assertEquals(indexMultiplier([-9, 5, 9, 5, -7, 7]), 45)
//Test.assertEquals(indexMultiplier([-1, -2, 8, -5]), -1)
//Test.assertEquals(indexMultiplier([7, 10, -5, -4, 6, 2]), 22)
//Test.assertEquals(indexMultiplier([0, 1, 0, 1, 0, 1, 0, 1]), 16)
//Test.assertEquals(indexMultiplier([-2, 5, -7, -23, 0, 14]), -8)
//Test.assertEquals(indexMultiplier([53, -43, 39, -2, -11, 3]), 0)
//Test.assertEquals(indexMultiplier([40, 32, -18, 48, -15]), 80)
//Test.assertEquals(indexMultiplier([1, -20, -11, 4, -12, 38, -30, 34]), 170)
//Test.assertEquals(indexMultiplier([-21, 30, 20, 6, -16]), 24)
//Test.assertEquals(indexMultiplier([8, -24, -8, -23, 20, 32, -29, -20]), -183)
//Test.assertEquals(indexMultiplier([]), 0)

