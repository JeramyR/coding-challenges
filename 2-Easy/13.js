

//title: Sum of Cubes

//tags: algebra,arrays,geometry,loops,math

//url: https://edabit.com/challenge/XdAR3KohR5w7rjrFg

//Description:
//Create a function that takes in an array of numbers and returns the sum of its cubes.
//Examples
//sumOfCubes([1, 5, 9]) ➞ 855
//// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
//
//sumOfCubes([3, 4, 5]) ➞ 216
//
//sumOfCubes([2]) ➞ 8
//
//sumOfCubes([]) ➞ 0
//Notes
//If given an empty array, return 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sumOfCubes([1, 5, 9]), 855)
//Test.assertEquals(sumOfCubes([3, 4, 5]), 216)
//Test.assertEquals(sumOfCubes([1, 1, 1]), 3)
//Test.assertEquals(sumOfCubes([2]), 8)
//Test.assertEquals(sumOfCubes([5, 1, 2]), 134)
//Test.assertEquals(sumOfCubes([32]), 32768)
//Test.assertEquals(sumOfCubes([5, 9, 4, 4, 9]), 1711)
//Test.assertEquals(sumOfCubes([0, 1, 2]), 9)
//Test.assertEquals(sumOfCubes([]), 0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Highest Digit

//tags: language_fundamentals,numbers

//url: https://edabit.com/challenge/YJuhHKSmNCaKNHcD3

//Description:
//Create a function that takes a number as an argument and returns the highest digit in that number.
//Examples
//highestDigit(379) ➞ 9
//
//highestDigit(2) ➞ 2
//
//highestDigit(377401) ➞ 7
//Notes
//Don't forget to return the result.
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(highestDigit(51), 5)
//Test.assertEquals(highestDigit(0), 0)
//Test.assertEquals(highestDigit(7495037), 9)
//Test.assertEquals(highestDigit(222222), 2)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Even All the Way

//tags: arrays,language_fundamentals,numbers

//url: https://edabit.com/challenge/6MZx5RqKYkFaogeAQ

//Description:
//Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.
//Examples
//getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4]
//
//getOnlyEvens([0, 1, 2, 3, 4]) ➞ [0, 2, 4]
//
//getOnlyEvens([1, 2, 3, 4, 5]) ➞ []
//Notes
//Arrays start at index 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(getOnlyEvens([1, 3, 2, 6, 4, 8]), [2, 4])
//Test.assertSimilar(getOnlyEvens([0, 1, 2, 3, 4]), [0, 2, 4])
//Test.assertSimilar(getOnlyEvens([1, 2, 3, 4, 5]), [])
//Test.assertSimilar(getOnlyEvens([37, 26, 18, 42, 2, 30]), [18, 2])
//Test.assertSimilar(getOnlyEvens([49, 41, 30, 44, 26, 0, 5]), [30, 26])
//Test.assertSimilar(getOnlyEvens([47, 47, 12, 3, 48]), [12, 48])
//Test.assertSimilar(getOnlyEvens([30, 26, 0, 13, 20, 38, 50, 2]), [30, 0, 20, 50])
//Test.assertSimilar(getOnlyEvens([34, 21, 38, 28, 13, 8, 26, 29, 24, 5]), [34, 38, 26, 24])
//Test.assertSimilar(getOnlyEvens([47, 31, 24, 37, 29, 41, 31, 49, 4, 24]), [24, 4])
//Test.assertSimilar(getOnlyEvens([45, 47, 20, 49]), [20])
//Test.assertSimilar(getOnlyEvens([20, 14, 10, 32, 28, 6, 49, 5, 46]), [20, 10, 28, 46])
//Test.assertSimilar(getOnlyEvens([39, 45, 5]), [])
//Test.assertSimilar(getOnlyEvens([45, 3, 50, 15, 49]), [50])
//Test.assertSimilar(getOnlyEvens([45, 25, 10, 47, 24, 30, 28, 48]), [10, 24, 28])
//Test.assertSimilar(getOnlyEvens([10, 16, 9, 40, 28, 21, 37, 4, 45]), [10, 28])
//Test.assertSimilar(getOnlyEvens([31, 25, 19, 49, 50, 22]), [50])
//Test.assertSimilar(getOnlyEvens([38, 36, 8, 34, 8, 45, 4, 45, 2, 9]), [38, 8, 8, 4, 2])
//Test.assertSimilar(getOnlyEvens([38, 21, 50, 14]), [38, 50])
//Test.assertSimilar(getOnlyEvens([24, 16, 32, 14, 32, 42, 13, 33, 13, 39]), [24, 32, 32])
//Test.assertSimilar(getOnlyEvens([38, 24, 4, 49, 5, 33, 1, 10, 3]), [38, 4])
//Test.assertSimilar(getOnlyEvens([46]), [46])
//Test.assertSimilar(getOnlyEvens([13, 6, 12, 23, 31, 14, 2]), [12, 2])
//Test.assertSimilar(getOnlyEvens([7, 1, 34, 14, 26, 3, 7, 7]), [34, 26])
//Test.assertSimilar(getOnlyEvens([31, 11, 26, 19, 45, 12]), [26])
//Test.assertSimilar(getOnlyEvens([22]), [22])

