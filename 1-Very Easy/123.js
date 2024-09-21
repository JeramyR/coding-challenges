

//title: Even Odd Partition

//tags: arrays,higher_order_functions

//url: https://edabit.com/challenge/BsCHQ6fyzmrTYLNsR

//Description:
//Write a function that partitions the array into two subarrays: one with all even integers, and the other with all odd integers. Return your result in the following format:
//[[evens], [odds]]
//Examples
//evenOddPartition([5, 8, 9, 2, 0]) ➞ [[8, 2, 0], [5, 9]]
//
//evenOddPartition([1, 0, 1, 0, 1, 0]) ➞ [[0, 0, 0], [1, 1, 1]]
//
//evenOddPartition([1, 3, 5, 7, 9]) ➞ [[], [1, 3, 5, 7, 9]]
//
//evenOddPartition([]) ➞ [[], []]
//Notes
//Return two empty subarrays if the input is an empty array.
//Keep the same relative ordering as the original array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(evenOddPartition([5, 8, 9, 2, 0]), [[8, 2, 0], [5, 9]])
//Test.assertSimilar(evenOddPartition([1, 0, 1, 0, 1, 0]), [[0, 0, 0], [1, 1, 1]])
//Test.assertSimilar(evenOddPartition([8, 8, 4, 2]), [[8, 8, 4, 2], []])
//Test.assertSimilar(evenOddPartition([1, 3, 5, 7, 9]), [[], [1, 3, 5, 7, 9]])
//Test.assertSimilar(evenOddPartition([]), [[], []])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Fix the Error: Mutating Arrays

//tags: arrays,bugs

//url: https://edabit.com/challenge/j3EoCMaD3LrEYtx78

//Description:
//Suppose I want to define a function that removes the last element of an array each time I call it, but does not mutate the original array. Fix the code so that the results are no longer mutating the array.
//function minusOne(arr) {
//  arr.pop()
//  return arr
//}
//Examples
//x = [1, 2, 3, 4, 5]
//minusOne(x) ➞ [1, 2, 3, 4]  // 1st time function is called.
//minusOne(x) ➞ [1, 2, 3]  // 2nd time function is called.
//minusOne(x) ➞ [1, 2]  // 3rd time function is called.
//minusOne(x) ➞ [1]  // 4th time function is called.
//
//// What I want instead:
//minusOne(x) ➞ [1, 2, 3, 4]  // 1st time function is called.
//minusOne(x) ➞ [1, 2, 3, 4]  // 2nd time function is called.
//minusOne(x) ➞ [1, 2, 3, 4]  // 3rd time function is called.
//minusOne(x) ➞ [1, 2, 3, 4]  // 4th time function is called.
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//x = [1, 2, 3, 4, 5]
//Test.assertSimilar(minusOne(x), [1, 2, 3, 4])
//Test.assertSimilar(minusOne(x), [1, 2, 3, 4])
//Test.assertSimilar(minusOne(x), [1, 2, 3, 4])
//Test.assertSimilar(minusOne(x), [1, 2, 3, 4])
//Test.assertSimilar(minusOne(x), [1, 2, 3, 4])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Check Factors

//tags: arrays,loops,validation

//url: https://edabit.com/challenge/k5k3aXWp7aibft74n

//Description:
//Write a function that returns true if all integers in an array are factors of a number, and false otherwise.
//Examples
//checkFactors([2, 3, 4], 12) ➞ true
//// Since 2, 3, and 4 are all factors of 12.
//
//checkFactors([1, 2, 3, 8], 12) ➞ false
//// 8 is not a factor of 12.
//
//checkFactors([1, 2, 50], 100) ➞ true
//
//checkFactors([3, 6], 9) ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(checkFactors([2, 3, 4], 12), true)
//Test.assertEquals(checkFactors([1, 2, 3, 8], 12), false, '8 is not a factor of 12')
//Test.assertEquals(checkFactors([1, 2, 50], 100), true)
//Test.assertEquals(checkFactors([1, 9, 81], 81), true)
//Test.assertEquals(checkFactors([5, 10, 50], 500), true)
//Test.assertEquals(checkFactors([5, 10, 499], 500), false, '499 is not a factor of 500')
//Test.assertEquals(checkFactors([3, 6], 9), false, '6 is not a factor of 9')

