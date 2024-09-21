

//title: Capitalize the Last Letter

//tags: formatting,language_fundamentals,strings

//url: https://edabit.com/challenge/WrXmsGDGxqkjNCZtw

//Description:
//Create a function that capitalizes the last letter of every word.
//Examples
//capLast("hello") ➞ "hellO"
//
//capLast("My Name Is Edabit") ➞ "MY NamE IS EdabiT"
//
//capLast("HELp THe LASt LETTERs CAPITALISe") ➞ "HELP THE LAST LETTERS CAPITALISE"
//Notes
//There won't be any cases of punctuation in the tests.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(capLast("hello"), "hellO")
//Test.assertEquals(capLast("My Name Is Edabit"),"MY NamE IS EdabiT")
//Test.assertEquals(capLast("HELp THe LASt LETTERs CAPITALISe"), "HELP THE LAST LETTERS CAPITALISE")
//Test.assertEquals(capLast("hellooooo"), "hellooooO")
//Test.assertEquals(capLast("hahA I aM alreadY capitaliseD"), "hahA I aM alreadY capitaliseD")
//​
//// made by @Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find Unique Number in Array

//tags: arrays,language_fundamentals,numbers

//url: https://edabit.com/challenge/pkJWJAvpnqp6rCY9y

//Description:
//Create a function that takes an array of integers as an argument and returns a unique number from that array. All numbers except unique ones have the same number of occurrences in the array.
//Examples
//findSingleNumber([2, 2, 2, 3, 4, 4, 4]) ➞ 3
//
//findSingleNumber([2]) ➞ 2
//
//findSingleNumber([]) ➞ null
//
//findSingleNumber([7, 13, 3, 6, 5, 4, 4, 13, 5, 3, 6, 7, 6, 5, 3, 13, 4, 7, 13, 5, 7, 4, 3, 6, 8, 4, 3, 7, 5, 6, 13]) ➞ 8
//
//findSingleNumber([1, 2, 3, 6, 5, 4, 4, 2, 5, 3, 6, 1, 6, 5, 3, 2, 4, 1, 2, 5, 1, 4, 3, 6, 101, 4, 3, 1, 5, 6, 2]) ➞ 101
//Notes
//Don't forget to return the result.
//Be aware this challenge includes two validations:
//Empty input should return null (example #3).
//Single item arrays should return that item (example #2).
//There are always 1 or 0 unique numbers in the input. No two or three+ uniques.
//If you're stuck or your solution is over complicated check the Resources tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(findSingleNumber([2,2,2, 3, 4,4,4]), 3)
//Test.assertEquals(findSingleNumber([415]), 415)
//Test.assertEquals(findSingleNumber([]), null)
//Test.assertEquals(findSingleNumber([7,13,3,6,5,4,4,13,5,3,6,7,6,5,3,13,4,7,13,5,7,4,3,6,8,4,3,7,5,6,13]), 8)
//Test.assertEquals(findSingleNumber([1, 2, 3, 6, 5, 4, 4, 2, 5, 3, 6, 1, 6, 5, 3, 2, 4, 1, 2, 5, 1, 4, 3, 6, 101, 4, 3, 1, 5, 6, 2]), 101)
//Test.assertEquals(findSingleNumber([1, 2, 2, 3, 3]), 1)
//Test.assertEquals(typeof(findSingleNumber([243, 70, 18, 60, 284, 148, 418, 360, 727, 791, 325])), 'number')
//Test.assertEquals(findSingleNumber([364, 938, 123, 686, 111, 227, 802, 667, 35, 858, 364, 938, 123, 686, 111, 227, 802, 667, 35, 858, 364, 938, 123, 686, 111, 227, 802, 667, 35, 858, 364, 938, 123, 686, 111, 227, 802, 667, 35, 858, 364, 938, 123, 686, 111, 227, 802, 667, 35, 858, 497]), 497)
//Test.assertEquals(findSingleNumber([116, 621, 698, 894, 96, 630, 291, 327, 911, 350, 116, 621, 698, 894, 96, 630, 291, 327, 911, 350, 521]), 521)
//​
//// Original challenge for Serf's Python challenge

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Reformatting the Date

//tags: dates,regex,strings

//url: https://edabit.com/challenge/CJo2NPyHDb5YyDu2S

//Description:
//Create a function that converts dates from one of five string formats:
//"January 9, 2019" (MM D, YYYY)
//"Jan 9, 2019" (MM D, YYYY)
//"01/09/2019" (MM/DD/YYYY)
//"01-09-2019" (MM-DD-YYYY)
//"01.09.2019" (MM.DD.YYYY)
//The return value will be an array formatted like: [MM, DD, YYYY], where MM, DD, and YYYY are all integers. Using the examples above:
//Examples
//convertDate("January 9, 2019") ➞ [1, 9, 2019]
//
//convertDate("Jan 9, 2019") ➞ [1, 9, 2019]
//
//convertDate("01/09/2019") ➞ [1, 9, 2019]
//
//convertDate("01-09-2019") ➞ [1, 9, 2019]
//
//convertDate("01.09.2019") ➞ [1, 9, 2019]
//Notes
//You can solve this any number of ways, but using JavaScript's new Date() method is probably the easiest. Check the Resources tab for documentation.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(convertDate("January 9, 2019"), [1, 9, 2019])
//Test.assertSimilar(convertDate("Jan 9, 2019"), [1, 9, 2019])
//Test.assertSimilar(convertDate("01/09/2019"), [1, 9, 2019])
//Test.assertSimilar(convertDate("01-09-2019"), [1, 9, 2019])
//Test.assertSimilar(convertDate("01.09.2019"), [1, 9, 2019])
//Test.assertSimilar(convertDate("March 3, 1901"), [3, 3, 1901])
//Test.assertSimilar(convertDate("Mar 3, 1901"), [3, 3, 1901])
//Test.assertSimilar(convertDate("03/03/1901"), [3, 3, 1901])
//Test.assertSimilar(convertDate("03-03-1901"), [3, 3, 1901])
//Test.assertSimilar(convertDate("03.03.1901"), [3, 3, 1901])
//Test.assertSimilar(convertDate("August 8, 1666"), [8, 8, 1666])
//Test.assertSimilar(convertDate("Nov 13, 1533"), [11, 13, 1533])
//Test.assertSimilar(convertDate("04/15/1789"), [4, 15, 1789])
//Test.assertSimilar(convertDate("12-23-1111"), [12, 23, 1111])
//Test.assertSimilar(convertDate("02.28.1832"), [2, 28, 1832])

