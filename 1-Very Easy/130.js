

//title: Same Number of Unique Elements

//tags: arrays,language_fundamentals,validation

//url: https://edabit.com/challenge/R6DX8wKMufT5hLRuK

//Description:
//Write a function that returns true if two arrays have the same number of unique elements, and false otherwise.
//To illustrate:
//arr1 = [1, 3, 4, 4, 4]
//arr2 = [2, 5, 7]
//In arr1, the number 4 appears three times, which means it contains three unique elements: [1, 3, 4]. Since arr1 and arr2 both contain the same number of unique elements, this example would return true.
//Examples
//same([1, 3, 4, 4, 4], [2, 5, 7]) ➞ true
//
//same([9, 8, 7, 6], [4, 4, 3, 1]) ➞ false
//
//same([2], [3, 3, 3, 3, 3]) ➞ true
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(same([1, 3, 4, 4, 4], [2, 5, 7]), true)
//Test.assertEquals(same([9, 8, 7, 6], [4, 4, 3, 1]), false)
//Test.assertEquals(same([2], [3, 3, 3, 3, 3]), true)
//Test.assertEquals(same([5, 6, 7, 9], [4, 1]), false)
//Test.assertEquals(same([5, 9, 9], [9, 5]), true)
//Test.assertEquals(same([1, 1, 1, 4], [1, 4, 4, 4, 4, 4]), true)
//Test.assertEquals(same([], []), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: Sum

//tags: language_fundamentals,math,numbers,recursion

//url: https://edabit.com/challenge/uYQs3cBqPEsk9mdZB

//Description:
//Write a function that finds the sum of the first n natural numbers. Make your function recursive.
//Examples
//sum(5) ➞ 15
//// 1 + 2 + 3 + 4 + 5 = 15
//
//sum(1) ➞ 1
//
//sum(12) ➞ 78
//Notes
//Assume the input number is always positive.
//Check the Resources tab for info on recursion.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sum(1), 1)
//Test.assertEquals(sum(5), 15)
//Test.assertEquals(sum(7), 28)
//Test.assertEquals(sum(10), 55)
//Test.assertEquals(sum(12), 78)
//Test.assertEquals(sum(15), 120)
//Test.assertEquals(sum(20), 210)
//Test.assertEquals(sum(100), 5050)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: Array Sum

//tags: arrays,language_fundamentals,numbers,recursion

//url: https://edabit.com/challenge/reR3jdfJnREauJj8d

//Description:
//Write a function that finds the sum of an array. Make your function recursive.
//Examples
//sum([1, 2, 3, 4]) ➞ 10
//
//sum([1, 2]) ➞ 3
//
//sum([1]) ➞ 1
//
//sum([]) ➞ 0
//Notes
//Return 0 for an empty array.
//Check the Resources tab for info on recursion.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sum([1, 2, 3, 4]), 10)
//Test.assertEquals(sum([-1, -1, -1]), -3)
//Test.assertEquals(sum([1]), 1)
//Test.assertEquals(sum([]), 0)

