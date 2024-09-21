

//title: Squishing an Array

//tags: arrays,higher_order_functions

//url: https://edabit.com/challenge/8p7apuCwgSzWkaTC8

//Description:
//Write a function that squishes an array from the left or the right.
//Examples
//squish([1, 2, 3, 4, 5], "left")
//➞ [[1, 2, 3, 4, 5], [3, 3, 4, 5], [6, 4, 5], [10, 5], [15]]
//
//squish([1, 2, 3, 4, 5], "right")
//➞ [[1, 2, 3, 4, 5], [1, 2, 3, 9], [1, 2, 12], [1, 14], [15]]
//
//squish([1, 0, 2, -3], "left")
//➞ [[1, 0, 2, -3], [1, 2, -3], [3, -3], [0]]
//
//squish([1, 0, 2, -3], "right")
//➞ [[1, 0, 2, -3], [1, 0, -1], [1, -1], [0]]
//Notes
//Squishing from the left is to successively sum the first two elements of an array (shortening the array in the process).
//Squishing from the right is to successively sum the last two elements of an array.
//Include the original array as the first element in either squish.
//Return an empty array if the input is an empty array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// Left Squish Tests
//Test.assertSimilar(squish([1, 2, 3, 4, 5], "left"), [[1, 2, 3, 4, 5], [3, 3, 4, 5], [6, 4, 5], [10, 5], [15]])
//Test.assertSimilar(squish([1, 0, 2, -3], "left"), [[1, 0, 2, -3], [1, 2, -3], [3, -3], [0]])
//Test.assertSimilar(squish([4, 9, -3, 2, 5], "left"), [[4, 9, -3, 2, 5], [13, -3, 2, 5], [10, 2, 5], [12, 5], [17]])
//Test.assertSimilar(squish([8, -7, 6, 1, 0, 2], "left"), [[8, -7, 6, 1, 0, 2], [1, 6, 1, 0, 2], [7, 1, 0, 2], [8, 0, 2], [8, 2], [10]])
//Test.assertSimilar(squish([8, 7], "left"), [[8, 7], [15]])
//Test.assertSimilar(squish([8], "left"), [[8]])
//Test.assertSimilar(squish([], "left"), [])
//​
//// Right Squish Tests
//Test.assertSimilar(squish([1, 2, 3, 4, 5], "right"), [[1, 2, 3, 4, 5], [1, 2, 3, 9], [1, 2, 12], [1, 14], [15]])
//Test.assertSimilar(squish([1, 0, 2, -3], "right"), [[1, 0, 2, -3], [1, 0, -1], [1, -1], [0]])
//Test.assertSimilar(squish([4, 9, -3, 2, 5], "right"), [[4, 9, -3, 2, 5], [4, 9, -3, 7], [4, 9, 4], [4, 13], [17]])
//Test.assertSimilar(squish([8, -7, 6, 1, 0, 2], "right"), [[8, -7, 6, 1, 0, 2], [8, -7, 6, 1, 2], [8, -7, 6, 3], [8, -7, 9], [8, 2], [10]])
//Test.assertSimilar(squish([8, 7], "right"), [[8, 7], [15]])
//Test.assertSimilar(squish([8], "right"), [[8]])
//Test.assertSimilar(squish([], "right"), [])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Shortest Unsorted Continuous Subarray

//tags: arrays,numbers,sorting

//url: https://edabit.com/challenge/fqf6DETHoWwJTFrb2

//Description:
//Given an integer array, you need to find the shortest continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.
//Create a function that returns the length of that subarray.
//Examples
//findUnsortedSubarray([1, 3, 2, 5, 8, 7, 13]) ➞ 5
//// You need to sort [3, 2, 5, 8, 7] in ascending order to make
//// the whole array sorted in ascending order.
//
//findUnsortedSubarray([10, 7, 5, 3]) ➞ 4
//
//findUnsortedSubarray([2, 4, 4, 4, 4, 3]) ➞ 5
//Notes
//The given array can contain duplicates, so ascending order here means <= (see example #3).
//If the given array is already sorted or is empty, return 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(findUnsortedSubarray([1, 3, 2, 5, 8, 7, 13]), 5)
//Test.assertEquals(findUnsortedSubarray([10, 7, 5, 3]), 4)
//Test.assertEquals(findUnsortedSubarray([2, 4, 4, 4, 4, 3]), 5)
//Test.assertEquals(findUnsortedSubarray([1, 1, 1]), 0)
//Test.assertEquals(findUnsortedSubarray([5, 15, 25]), 0)
//Test.assertEquals(findUnsortedSubarray([4, 8, 6, 10, 9, 11, 13, 15]), 4)
//Test.assertEquals(findUnsortedSubarray([1, 2, 3, 4, -4, -3, -2, -1]), 8)
//Test.assertEquals(findUnsortedSubarray([0, 10, 20, 30, 10, 45, 50]), 3)
//Test.assertEquals(findUnsortedSubarray([-200, -201, -100, -1, 1, 0, 100, 200, 300, 68, 400]), 10)
//Test.assertEquals(findUnsortedSubarray([1000, 500, 0, 500, 501, 521, 2551, 2656, 3020]), 6)
//Test.assertEquals(findUnsortedSubarray([15, 5, 15, 5, 15, 5]), 6)
//Test.assertEquals(findUnsortedSubarray([]), 0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Movie Theater Seating

//tags: arrays,higher_order_functions,loops

//url: https://edabit.com/challenge/N7LuCieCrotxajSqB

//Description:
//A group of n friends are going to see a movie. They would like to find a spot where they can sit next to each other in the same row. A movie theater's seat layout can be represented as a 2-D matrix, where 0s represent empty seats and 1s represent taken seats.
//[[1, 0, 0, 0, 1, 1, 1],
//[1, 1, 1, 0, 1, 1, 1],
//[1, 0, 1, 0, 1, 0, 1],
//[1, 1, 0, 1, 1, 0, 1],
//[1, 0, 1, 1, 1, 1, 1],
//[1, 0, 1, 1, 0, 0, 0]]
//Create a function that, given a seat layout and the number of friends n, returns the number of available spots for all n friends to sit together. In the above example, if n = 3, there would be 2 spots (the first row and last row).
//Examples
//groupSeats([
//  [1, 0, 1, 0, 1, 0, 1],
//  [0, 1, 0, 1, 0, 1, 0],
//  [0, 0, 1, 1, 1, 1, 1],
//  [1, 0, 1, 1, 0, 0, 1],
//  [1, 1, 1, 0, 1, 0, 1],
//  [0, 1, 1, 1, 1, 0, 0]
//], 2) ➞ 3
//
//groupSeats([
//  [1, 0, 1, 0, 1, 0, 1],
//  [0, 1, 0, 0, 0, 0, 0],
//], 4) ➞ 2
//Notes
//Multiple free arrangements that overlap still count as distinct arrangements (see example #2).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(groupSeats([
//  [1, 0, 1, 0, 1, 0, 1], 
//  [0, 1, 0, 1, 0, 1, 0], 
//  [0, 0, 0, 0, 0, 0, 0], 
//  [1, 0, 1, 1, 0, 0, 1], 
//  [1, 1, 1, 0, 0, 0, 1], 
//  [0, 1, 1, 1, 1, 0, 0]
//], 7), 1)
//​
//Test.assertEquals(groupSeats([
//  [1, 0, 0, 0, 1, 1, 1], 
//  [1, 1, 1, 0, 1, 1, 1], 
//  [1, 0, 1, 0, 1, 0, 1], 
//  [1, 1, 0, 1, 1, 0, 1], 
//  [1, 0, 1, 1, 1, 1, 1],
//  [1, 0, 1, 1, 0, 0, 0]
//], 3), 2)
//​
//Test.assertEquals(groupSeats([
//  [1, 0, 0, 0, 0, 1, 1], 
//  [1, 1, 1, 0, 1, 1, 1], 
//  [1, 0, 1, 0, 1, 0, 1], 
//  [1, 1, 0, 1, 1, 0, 1], 
//  [1, 0, 1, 1, 1, 1, 1],
//  [1, 0, 1, 1, 0, 0, 0]

