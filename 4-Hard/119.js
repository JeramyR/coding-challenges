

//title: Consecutive Numbers

//tags: arrays,numbers,validation

//url: https://edabit.com/challenge/vwQAXZLaWZjonzcnu

//Description:
//Given an array of random digits of any length, return true if the number n appears times times in a row, and false otherwise.
//Worked Example
//isThereConsecutive([1, 3, 5, 5, 3, 3, 1], 3, 2) ➞ true
//// Second parameter is the number to look out for (3).
//// Third parameter means you need to find the number 3 twice in a row.
//// Return true if it can be found.
//Examples
//isThereConsecutive([1, 2, 3, 4, 5], 1, 1) ➞ true
//
//isThereConsecutive([3], 1, 0) ➞ true
//
//isThereConsecutive([2, 2, 3, 2, 2, 2, 2, 3, 4, 1, 5], 3, 2) ➞ false
//
//isThereConsecutive([5, 5, 5, 5, 5], 5, 7) ➞ false
//Notes
//Arrays will only contain positive single digit numbers.
//Expect all parameters to be valid.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isThereConsecutive([1, 2, 3, 4, 5], 1, 1), true)
//Test.assertEquals(isThereConsecutive([2, 2, 2, 2, 2, 2, 3, 4, 1, 5], 3, 2), false)
//Test.assertEquals(isThereConsecutive([5, 5, 5, 5, 5], 5, 7), false)
//Test.assertEquals(isThereConsecutive([1, 3, 5, 5, 3, 3, 1], 3, 2), true)
//Test.assertEquals(isThereConsecutive([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 0, 0], 5, 2), true)
//Test.assertEquals(isThereConsecutive([0], 1, 1), false)
//Test.assertEquals(isThereConsecutive([3], 1, 0), true)
//Test.assertEquals(isThereConsecutive([2, 2, 3, 2, 2, 2, 2, 3, 4, 1, 5], 3, 2), false)
//Test.assertEquals(isThereConsecutive([1], 1, 0), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sort by Digit Length, then By Number Itself

//tags: arrays,sorting

//url: https://edabit.com/challenge/S3sM8FkrWDrfjWeJ6

//Description:
//Write a function that sorts an array of integers by their digit length in descending order, then settles ties by sorting numbers with the same digit length in ascending order.
//Examples
//digitSort([77, 23, 5, 7, 101])
//➞ [101, 23, 77, 5, 7]
//
//digitSort([1, 5, 9, 2, 789, 563, 444])
//➞ [444, 563, 789, 1, 2, 5, 9]
//
//digitSort([53219, 3772, 564, 32, 1])
//➞ [53219, 3772, 564, 32, 1]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(digitSort([77, 23, 5, 7, 101]), [101, 23, 77, 5, 7])
//Test.assertSimilar(digitSort([1, 5, 9, 2, 789, 563, 444]), [444, 563, 789, 1, 2, 5, 9])
//Test.assertSimilar(digitSort([53219, 3772, 564, 32, 1]), [53219, 3772, 564, 32, 1])
//Test.assertSimilar(digitSort([9, 667, 87, 56, 3023, 5555, 111]), [3023, 5555, 111, 667, 56, 87, 9])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Bound Sort

//tags: arrays,sorting,validation

//url: https://edabit.com/challenge/riBaZGcbdEwBKmqzr

//Description:
//Create a function that returns true if an input array can be completely sorted by only sorting within the bounds [0, n] (inclusive), where n is smaller than or equal to the array's length, and false otherwise.
//Examples
//boundSort([1, 6, 5, 3, 8, 9], [0, 3]) ➞ true
//// If [1, 6, 5, 3] is sorted to [1, 3, 5, 6], the array is completely sorted.
//
//boundSort([1, 6, 5, 3, 8, 9], [0, 2]) ➞ false
//// Even if [1, 6, 5] is sorted to [1, 5, 6], the array is still not completely sorted.
//
//boundSort([1, 9, 2, 5, 7], [0, 4]) ➞ true
//
//boundSort([1, 9, 2, 5, 7], [0, 3]) ➞ false
//// Sorting from [0, 3] gives us [1, 2, 5, 9, 7], array still not completely sorted.
//Notes
//Numbers in array will be unique.
//The lower index of the bound will always be 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(boundSort([1, 6, 5, 3, 8, 9], [0, 3]), true)
//Test.assertEquals(boundSort([1, 6, 5, 3, 8, 9], [0, 2]), false)
//Test.assertEquals(boundSort([1, 9, 2, 5, 7], [0, 4]), true)
//Test.assertEquals(boundSort([1, 9, 2, 5, 7], [0, 3]), false)
//Test.assertEquals(boundSort([1, 2, 3, 4, 5, 8, 9], [0, 1]), true)
//Test.assertEquals(boundSort([1, 2, 3, 5, 4, 8, 9], [0, 4]), true)
//Test.assertEquals(boundSort([1, 2, 3, 5, 4, 8, 9], [0, 3]), false)

