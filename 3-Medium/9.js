

//title: Find the Discount

//tags: math,numbers

//url: https://edabit.com/challenge/L4Hevck84exPwe4wo

//Description:
//Create a function that takes two arguments: the original price and the discount percentage as integers and returns the final price after the discount.
//
//Examples
//dis(1500, 50) ➞ 750
//
//dis(89, 20) ➞ 71.2
//
//dis(100, 75) ➞ 25
//Notes
//Your answer should be rounded to two decimal places.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(dis(100, 75), 25)
//Test.assertEquals(dis(211, 50), 105.5)
//Test.assertEquals(dis(593, 61), 231.27)
//Test.assertEquals(dis(1693, 80), 338.6)
//Test.assertEquals(dis(700, 10), 630)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sort the Unsortable

//tags: arrays,language_fundamentals,sorting

//url: https://edabit.com/challenge/zemLfbNWaKuhrbJPt

//Description:
//In this challenge you will be given an array similar to the following:
//[[3], 4, [2], [5], 1, 6]
//In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably be sorted according to "the content of the elements" as:
//[1, [2], [3], 4, [5], 6]
//Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".
//Examples
//sortIt([4, 1, 3]) ➞ [1, 3, 4]
//
//sortIt([[4], [1], [3]]) ➞ [[1], [3], [4]]
//
//sortIt([4, [1], 3]) ➞ [[1], 3, 4]
//
//sortIt([[4], 1, [3]]) ➞ [1, [3], [4]]
//
//sortIt([[3], 4, [2], [5], 1, 6]) ➞ [1, [2], [3], 4, [5], 6]
//Notes
//To reiterate, elements of the array will be either integers or arrays with a single integer.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(sortIt([4, 1, 3]), [1, 3, 4])
//Test.assertSimilar(sortIt([[4], [1], [3]]), [[1], [3], [4]])
//Test.assertSimilar(sortIt([4, [1], 3]), [[1], 3, 4])
//Test.assertSimilar(sortIt([[4], 1, [3]]), [1, [3], [4]])
//Test.assertSimilar(sortIt([[3], 4, [2], [5], 1, 6]), [1, [2], [3], 4, [5], 6])
//Test.assertSimilar(sortIt([[3], 7, [9], [5], 1, 6]), [1, [3], [5], 6, 7, [9]])
//Test.assertSimilar(sortIt([[3], 7, [9], [5], 1, 6, [0]]), [[0], 1, [3], [5], 6, 7, [9]])
//​
//// Author : Luis Pereira

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Remove Trailing and Leading Zeros

//tags: formatting,numbers,regex,strings

//url: https://edabit.com/challenge/3jzycf6fcgwZbvpcf

//Description:
//Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.
//Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000).
//Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).
//Examples
//removeLeadingTrailing("230.000") ➞ "230"
//
//removeLeadingTrailing("00402") ➞ "402"
//
//removeLeadingTrailing("03.1400") ➞ "3.14"
//
//removeLeadingTrailing("30") ➞ "30"
//Notes
//Return a string.
//If you get a number with .0 on the end, return the integer value (e.g. return "4" rather than "4.0").
//If the number is 0, 0.0, 000, 00.00, etc... return "0".

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(removeLeadingTrailing("230.000"), "230")
//Test.assertEquals(removeLeadingTrailing("00402"), "402")
//Test.assertEquals(removeLeadingTrailing("03.1400"), "3.14")
//Test.assertEquals(removeLeadingTrailing("30"), "30")
//Test.assertEquals(removeLeadingTrailing("30.0000"), "30")
//Test.assertEquals(removeLeadingTrailing("24340"), "24340")
//Test.assertEquals(removeLeadingTrailing("0404040"), "404040")
//Test.assertEquals(removeLeadingTrailing("0"), "0")
//Test.assertEquals(removeLeadingTrailing("00"), "0")
//Test.assertEquals(removeLeadingTrailing("0.000000"), "0")
//Test.assertEquals(removeLeadingTrailing("0000.000"), "0")
//Test.assertEquals(removeLeadingTrailing("00.0001"), "0.0001")
//Test.assertEquals(removeLeadingTrailing("10000"), "10000")
//Test.assertEquals(removeLeadingTrailing("1345"), "1345")
//Test.assertEquals(removeLeadingTrailing("30.000020"), "30.00002")
//Test.assertEquals(removeLeadingTrailing("00200.1900001"), "200.1900001")

