

//title: Additive Inverse

//tags: arrays,higher_order_functions,loops,math

//url: https://edabit.com/challenge/Qbi3GuXjwW5fsoKRn

//Description:
//A number added with its additive inverse equals zero. Create a function that returns an array of additive inverses.
//Examples
//additiveInverse([5, -7, 8, 3]) ➞ [-5, 7, -8, -3]
//
//additiveInverse([1, 1, 1, 1, 1]) ➞ [-1, -1, -1, -1, -1]
//
//additiveInverse([-5, -25, 35]) ➞ [5, 25, -35]
//Notes
//Don't forget to return the result.
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(additiveInverse([5, -7, 8, 3]), [-5, 7, -8, -3])
//Test.assertSimilar(additiveInverse([1, 1, 1, 1, 1]), [-1, -1, -1, -1, -1])
//Test.assertSimilar(additiveInverse([-5, -25, 35]), [5, 25, -35])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Return First and Last Parameter

//tags: language_fundamentals

//url: https://edabit.com/challenge/ypgJXTXaaSwrFyoTk

//Description:
//Write two functions:
//firstArg() should return the first parameter passed in.
//lastArg() should return the last parameter passed in.
//Examples
//firstArg(1, 2, 3) ➞ 1
//
//lastArg(1, 2, 3) ➞ 3
//
//firstArg(8) ➞ 8
//
//lastArg(8) ➞ 8
//Notes
//Return undefined if the function takes no parameters.
//If the function only takes in one parameter, the firstArg and lastArg functions should return the same value.
//JavaScript has an arguments object which keeps track of the parameters being passed in. Check the Resources tab to learn more.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(firstArg(1, 2, 3), 1)
//Test.assertEquals(firstArg('a', 'b', 'c'), 'a')
//Test.assertEquals(firstArg(8), 8)
//Test.assertEquals(firstArg(), undefined)
//Test.assertEquals(lastArg(1, 2, 3), 3)
//Test.assertEquals(lastArg('a', 'b', 'c'), 'c')
//Test.assertEquals(lastArg(8), 8)
//Test.assertEquals(lastArg(), undefined)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Nth Smallest Integer

//tags: arrays,language_fundamentals,logic,sorting

//url: https://edabit.com/challenge/T9nCQgLQJ9Pi9a9kH

//Description:
//Given an unsorted array, create a function that returns the nth smallest integer (the smallest integer is the first smallest, the second smallest integer is the second smallest, etc).
//Examples
//nthSmallest([1, 3, 5, 7], 1) ➞ 1
//
//nthSmallest([1, 3, 5, 7], 3) ➞ 5
//
//nthSmallest([1, 3, 5, 7], 5) ➞ null
//
//nthSmallest([7, 3, 5, 1], 2) ➞ 3
//Notes
//n will always be >= 1.
//Each integer in the array will be distinct (there will be a clear ordering).
//Given an out of bounds parameter (e.g. an array is of size k), and you are asked to find the m > k smallest integer, return null.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(nthSmallest([1, 3, 5, 7], 1), 1)
//Test.assertEquals(nthSmallest([1, 3, 5, 7], 3), 5)
//Test.assertEquals(nthSmallest([1, 3, 5, 7], 5), null)
//Test.assertEquals(nthSmallest([7, 3, 5, 1], 2), 3)
//Test.assertEquals(nthSmallest([5, 4, 3, 2, 1, -3], 1), -3)
//Test.assertEquals(nthSmallest([5, 4, 3, 2, 1, -3], 5), 4)
//Test.assertEquals(nthSmallest([4, 5], 3), null)
//Test.assertEquals(nthSmallest([4, 5], 2), 5)
//Test.assertEquals(nthSmallest([4, 5], 1), 4)

