

//title: Hurdle Jump

//tags: arrays,conditions,control_flow,validation

//url: https://edabit.com/challenge/Hp9FitGXpKqdCW6Fd

//Description:
//Create a function that takes an array of hurdle heights and a jumper's jump height, and determine whether or not the hurdler can clear all the hurdles.
//A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.
//Examples
//hurdleJump([1, 2, 3, 4, 5], 5) ➞ true
//
//hurdleJump([5, 5, 3, 4, 5], 3) ➞ false
//
//hurdleJump([5, 4, 5, 6], 10) ➞ true
//
//hurdleJump([1, 2, 1], 1) ➞ false
//Notes
//Return true for the edge case of an empty array of hurdles. (Zero hurdles means that any jump height can clear them).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(hurdleJump([1, 2, 3, 4, 5], 5), true)
//Test.assertEquals(hurdleJump([5, 5, 3, 4, 5], 3), false)
//Test.assertEquals(hurdleJump([5, 4, 5, 6], 10), true)
//Test.assertEquals(hurdleJump([1,2,1], 1), false)
//Test.assertEquals(hurdleJump([3,3,3], 4), true)
//Test.assertEquals(hurdleJump([4,4], 3), false)
//Test.assertEquals(hurdleJump([], 4), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Smallest Number in an Array

//tags: arrays,loops,numbers,sorting

//url: https://edabit.com/challenge/g66EJsbdnSDayyEcK

//Description:
//Create a function that takes an array of numbers and returns the smallest number in the set.
//Examples
//findSmallestNum([34, 15, 88, 2]) ➞ 2
//
//findSmallestNum([34, -345, -1, 100]) ➞ -345
//
//findSmallestNum([-76, 1.345, 1, 0]) ➞ -76
//
//findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]) ➞ -0.9999
//
//findSmallestNum([7, 7, 7]) ➞ 7
//Notes
//Test cases contain decimals.
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(findSmallestNum([34, 15, 88, 2]), 2)
//Test.assertEquals(findSmallestNum([34, -345, -1, 100]), -345)
//Test.assertEquals(findSmallestNum([-76, 1.345, 1, 0]), -76)
//Test.assertEquals(findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]), -0.9999)
//Test.assertEquals(findSmallestNum([7, 7, 7]), 7)
//Test.assertEquals(findSmallestNum([4, 6, 1, 3, 4, 5, 5, 1]), 1)
//Test.assertEquals(findSmallestNum([-4, -6, -8, -1]), -8)
//Test.assertEquals(findSmallestNum([54, 76, 23, 54]), 23)
//Test.assertEquals(findSmallestNum([100]), 100)
//Test.assertEquals(findSmallestNum([0, 1, 2, 3, 4, 5]), 0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Return the First and Last Elements in an Array

//tags: arrays,language_fundamentals,validation

//url: https://edabit.com/challenge/R3AYf3eTdATXTQTdZ

//Description:
//Create a function that takes an array of values and returns the first and last values in a new array.
//Examples
//firstLast([5, 10, 15, 20, 25]) ➞ [5, 25]
//
//firstLast(["edabit", 13, null, false, true]) ➞ ["edabit", true]
//
//firstLast([undefined, 4, "6", "hello", null]) ➞ [undefined, null]
//Notes
//Test input will always contain a minimum of two elements within the array.
//Don't forget to return the result.
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(firstLast([5, 10, 15, 20, 25]), [5, 25])
//Test.assertSimilar(firstLast(["edabit", 13, null, false, true]), ["edabit", true])
//Test.assertSimilar(firstLast([undefined, 4, "6", "hello", null]), [undefined, null])
//Test.assertSimilar(firstLast(["hello", "edabit", "dot", "com"]), ["hello", "com"])
//Test.assertSimilar(firstLast([3, 2, 1]), [3, 1])
//Test.assertSimilar(firstLast(["one", "two"]), ["one", "two"])
//Test.assertSimilar(firstLast([false, false, true, false, false, true, false]), [false, false])

