

//title: Maximum Difference

//tags: arrays,math,numbers

//url: https://edabit.com/challenge/4vvFr9ZTK2AdyswXH

//Description:
//Given an array of integers, return the difference between the largest and smallest integers in the array.
//Examples
//difference([10, 15, 20, 2, 10, 6]) ➞ 18
//// 20 - 2 = 18
//
//difference([-3, 4, -9, -1, -2, 15]) ➞ 24
//// 15 - (-9) = 24
//
//difference([4, 17, 12, 2, 10, 2]) ➞ 15
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(difference([-9, -8, 6, -9, 15, 6]), 24)
//Test.assertEquals(difference([-5, 6, 18, 4, 16, -2]), 23)
//Test.assertEquals(difference([-2, 20, -9, -9, -2, -7]), 29)
//Test.assertEquals(difference([4, -2, 11, -9, 15, 2]), 24)
//Test.assertEquals(difference([15, 10, 3, -6, 6, 19]), 25)
//Test.assertEquals(difference([1, 7, 18, -1, -2, 9]), 20)
//Test.assertEquals(difference([5, 1, -9, 7, -8, -10]), 17)
//Test.assertEquals(difference([-4, 17, -4, 20, -7, 0]), 27)
//Test.assertEquals(difference([-2, 11, 11, -3, -3, -3]), 14)
//Test.assertEquals(difference([1, 15, 14, 20, 10, 6]), 19)
//Test.assertEquals(difference([4, 17, 12, 2, 10, 2]), 15)
//Test.assertEquals(difference([-3, 3, 20, 10, 0, 17]), 23)
//Test.assertEquals(difference([-3, 6, 20, 9, 6, 7]), 23)
//Test.assertEquals(difference([16, 15, 1, 18, -7, -3]), 25)
//Test.assertEquals(difference([-7, 4, -4, -3, -8, -9]), 13)
//Test.assertEquals(difference([15, 8, 17, 18, 10, 10]), 10)
//Test.assertEquals(difference([-3, 20, 16, 8, 18, -10]), 30)
//Test.assertEquals(difference([6, 18, 9, 1, 3, 1]), 17)
//Test.assertEquals(difference([20, 18, -2, -10, -10, 17]), 30)
//Test.assertEquals(difference([18, 20, -7, -4, -2, -8]), 28)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Eliminate Odd Numbers within an Array

//tags: arrays,math,numbers,validation

//url: https://edabit.com/challenge/uJ9K3HtbjHoDGXKhg

//Description:
//Create a function that takes an array of numbers and returns only the even values.
//Examples
//noOdds([1, 2, 3, 4, 5, 6, 7, 8]) ➞ [2, 4, 6, 8]
//
//noOdds([43, 65, 23, 89, 53, 9, 6]) ➞ [6]
//
//noOdds([718, 991, 449, 644, 380, 440]) ➞ [718, 644, 380, 440]
//Notes
//Return all even numbers in the order they were given.
//All test cases contain valid numbers ranging from 1 to 3000.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(noOdds([1, 2, 3, 4, 5, 6, 7, 8]), [2, 4, 6, 8])
//Test.assertSimilar(noOdds([43, 65, 23, 89, 53, 9, 6]), [6])
//Test.assertSimilar(noOdds([718, 991, 449, 644, 380, 440]), [718, 644, 380, 440])
//Test.assertSimilar(noOdds([148, 6, 16, 85]), [148, 6, 16])
//Test.assertSimilar(noOdds([9, 49, 23]), [])
//Test.assertSimilar(noOdds([34, 43, 32, 49, 40]), [34, 32, 40])
//Test.assertSimilar(noOdds([1232, 1990, 1284, 1391, 1958]), [1232, 1990, 1284, 1958])
//Test.assertSimilar(noOdds([2766, 2651, 2373, 2916, 2397, 2539]), [2766, 2916])
//Test.assertSimilar(noOdds([53, 65, 52, 62, 59]), [52, 62])
//Test.assertSimilar(noOdds([393, 156, 14, 166, 129, 246]), [156, 14, 166, 246])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Semantic Versioning

//tags: formatting,strings

//url: https://edabit.com/challenge/JcRKAzSnnPdSPBKMK

//Description:
//In semantic versioning a piece of software can be represented in a format like this example: 6.1.9.
//The first number is the major version.
//The second number is the minor version.
//The third number is the patch (bug fixes).
//Write three separate functions, one to retrieve each element in the semantic versioning specification.
//Examples
//// 6.1.9
//retrieveMajor("6.1.9") ➞ "6"
//
//retrieveMinor("6.1.9") ➞ "1"
//
//retrievePatch("6.1.9") ➞ "9"
//
//// 2.1.0
//retrieveMajor("2.1.0") ➞ "2"
//
//retrieveMinor("2.1.0") ➞ "1"
//
//retrievePatch("2.1.0") ➞ "0"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// Test group 1
//Test.assertEquals(retrieveMajor("6.1.9"), "6")
//Test.assertEquals(retrieveMinor("6.1.9"), "1")
//Test.assertEquals(retrievePatch("6.1.9"), "9")
//// Test group 2
//Test.assertEquals(retrieveMajor("2.1.0"), "2")
//Test.assertEquals(retrieveMinor("2.1.0"), "1")
//Test.assertEquals(retrievePatch("2.1.0"), "0")
//// Test group 3
//Test.assertEquals(retrieveMajor("5.12.13"), "5")
//Test.assertEquals(retrieveMinor("5.12.13"), "12", 'should work with 2-digit version numbers')
//Test.assertEquals(retrievePatch("5.12.13"), "13", 'should work with 2-digit version numbers')

