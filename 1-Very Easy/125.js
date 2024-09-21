

//title: Basic Statistics: Mean

//tags: arrays,math,numbers

//url: https://edabit.com/challenge/WacpbmmhwWJ2Wgmy9

//Description:
//The mean of a group of numbers is calculated by summing all numbers, and dividing this sum by the total count of numbers in the group. Given a sorted array of numbers, return the mean (rounded to one decimal place).
//Examples
//mean([1, 6, 6, 7, 8, 8, 9, 10, 10]) ➞ 7.2
//
//mean([1, 3, 8, 9, 9, 10]) ➞ 6.7
//
//mean([2, 3, 3, 6, 6, 8, 9, 10]) ➞ 5.9
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(mean([1, 1, 2, 2, 3, 5, 5, 5, 7]), 3.4)
//Test.assertEquals(mean([1, 2, 2, 3, 7, 9, 10]), 4.9)
//Test.assertEquals(mean([1, 2, 3, 4, 5, 6, 6, 10, 10]), 5.2)
//Test.assertEquals(mean([5, 5, 6, 7, 10, 10]), 7.2)
//Test.assertEquals(mean([1, 3, 3, 4, 5, 6, 7, 8]), 4.6)
//Test.assertEquals(mean([2, 4, 6, 6, 6, 8, 9]), 5.9)
//Test.assertEquals(mean([2, 4, 6, 6, 6, 7, 7, 8, 9]), 6.1)
//Test.assertEquals(mean([2, 3, 4, 7, 8, 8]), 5.3)
//Test.assertEquals(mean([1, 2, 2, 2, 3, 4, 4, 4, 6]), 3.1)
//Test.assertEquals(mean([2, 2, 8, 9, 9, 10, 10]), 7.1)
//Test.assertEquals(mean([1, 3, 3, 4, 5, 5, 7, 9]), 4.6)
//Test.assertEquals(mean([1, 1, 3, 4, 4, 4, 7, 9, 10]), 4.8)
//Test.assertEquals(mean([1, 2, 3, 6, 6, 9]), 4.5)
//Test.assertEquals(mean([3, 5, 7, 7, 9, 10, 10]), 7.3)
//Test.assertEquals(mean([1, 2, 4, 4, 6, 6]), 3.8)
//Test.assertEquals(mean([2, 4, 7, 7, 8, 8, 9, 9, 10]), 7.1)
//Test.assertEquals(mean([2, 4, 4, 4, 5, 5, 8, 9, 10]), 5.7)
//Test.assertEquals(mean([1, 6, 6, 8, 10, 10]), 6.8)
//Test.assertEquals(mean([2, 6, 6, 9, 10, 10]), 7.2)
//Test.assertEquals(mean([1, 4, 4, 4, 7, 8, 9]), 5.3)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Product of All Odd Integers

//tags: arrays,numbers

//url: https://edabit.com/challenge/4LnwAC3kgTctc7r3k

//Description:
//Create a function that returns the product of all odd integers in an array.
//Examples
//oddProduct([3, 4, 1, 1, 5]) ➞ 15
//
//oddProduct([5, 5, 8, 2, 4, 32]) ➞ 25
//
//oddProduct([1, 2, 1, 2, 1, 2, 1, 2]) ➞ 1
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(oddProduct([3, 4, 1, 1, 5]), 15)
//Test.assertEquals(oddProduct([5, 5, 8, 2, 4, 32]), 25)
//Test.assertEquals(oddProduct([1, 2, 1, 2, 1, 2, 1, 2]), 1)
//Test.assertEquals(oddProduct([0, 0, 0, 1]), 1)
//Test.assertEquals(oddProduct([1, 2, 2, 5, 2, 0]), 5)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Minimum Removals to Make Sum Even

//tags: arrays,higher_order_functions,loops

//url: https://edabit.com/challenge/exMRkWdmmc6hccYiS

//Description:
//Create a function that returns the minimum number of removals to make the sum of all elements in an array even.
//Examples
//minimumRemovals([1, 2, 3, 4, 5]) ➞ 1
//
//minimumRemovals([5, 7, 9, 11]) ➞ 0
//
//minimumRemovals([5, 7, 9, 12]) ➞ 1
//Notes
//If the sum is already even, return 0 (see example #2).
//The output will be either 0 or 1.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(minimumRemovals([1, 2, 3, 4, 5]), 1)
//Test.assertEquals(minimumRemovals([5, 7, 9, 11]), 0)
//Test.assertEquals(minimumRemovals([5, 7, 9, 12]), 1)
//Test.assertEquals(minimumRemovals([5, 8, 8, 8]), 1)
//Test.assertEquals(minimumRemovals([5, 8, 8, 8, 9, 9]), 1)
//Test.assertEquals(minimumRemovals([9, 8, 8, 8, 9, 9]), 1)
//Test.assertEquals(minimumRemovals([5, 5, 4, 4, 3, 3]), 0)
//Test.assertEquals(minimumRemovals([5, 3, 4, 4, 3]), 1)
//Test.assertEquals(minimumRemovals([5, 3, 4, 4, 0]), 0)

