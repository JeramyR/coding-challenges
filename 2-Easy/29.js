

//title: How Many Decimal Places?

//tags: numbers,regex,strings

//url: https://edabit.com/challenge/arKLRM8qGzKZbCxCk

//Description:
//Create a function that returns the number of decimal places a number (given as a string) has. Any zeros after the decimal point count towards the number of decimal places.
//Examples
//getDecimalPlaces("43.20") ➞ 2
//
//getDecimalPlaces("400") ➞ 0
//
//getDecimalPlaces("3.1") ➞ 1
//Notes
//Return 0 if the number doesn't have any decimal places (see example #2).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(getDecimalPlaces("3.22"), 2)
//Test.assertEquals(getDecimalPlaces("400"), 0)
//Test.assertEquals(getDecimalPlaces("43.50"), 2)
//Test.assertEquals(getDecimalPlaces("100,000,000"), 0)
//Test.assertEquals(getDecimalPlaces("3.1415"), 4)
//Test.assertEquals(getDecimalPlaces("0"), 0)
//Test.assertEquals(getDecimalPlaces("01"), 0)
//Test.assertEquals(getDecimalPlaces("00010.00010"), 5)
//Test.assertEquals(getDecimalPlaces("3,141.592"), 3)
//​
//// made by @Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Index Shuffle

//tags: loops,strings

//url: https://edabit.com/challenge/ATbswTsEaMJb37Ez2

//Description:
//Write a function that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.
//To illustrate:
//indexShuffle("abcd") ➞ "acbd"
//// "ac" (even-indexed) + "bd" (odd-indexed)
//Examples
//indexShuffle("abcdefg") ➞ "acegbdf"
//
//indexShuffle("holiday") ➞ "hldyoia"
//
//indexShuffle("maybe") ➞ "myeab"
//Notes
//0 should be treated as an even number.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(indexShuffle("abcdef"), "acebdf")
//Test.assertEquals(indexShuffle("abababab"), "aaaabbbb")
//Test.assertEquals(indexShuffle("it was a beautiful day"), "i a  euiu atwsabatfldy")
//Test.assertEquals(indexShuffle("maybe"), "myeab")
//Test.assertEquals(indexShuffle("holiday"), "hldyoia")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Is One Array a Subset of Another?

//tags: arrays,loops,validation

//url: https://edabit.com/challenge/3ymGugubc4gTfcqcR

//Description:
//Create a function that returns true if the first array is a subset of the second. Return false otherwise.
//Examples
//isSubset([3, 2, 5], [5, 3, 7, 9, 2]) ➞ true
//
//isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6]) ➞ true
//
//isSubset([1, 2], [3, 5, 9, 1]) ➞ false
//Notes
//Both arrays will contain only unique values.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isSubset([3, 2, 5], [5, 3, 7, 9, 2]), true)
//Test.assertEquals(isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6]), true)
//Test.assertEquals(isSubset([1, 2], [1, 2, 3]), true)
//Test.assertEquals(isSubset([1, 2], [3, 5, 9, 1]), false)
//Test.assertEquals(isSubset([1, 2, 3, 4], [4, 3, 2, 1]), true)
//Test.assertEquals(isSubset([7, 9, 8, 4, 2], [7, 9, 5, 8, 4]), false)

