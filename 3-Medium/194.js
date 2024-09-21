

//title: Count a Specific Digit

//tags: numbers,strings

//url: https://edabit.com/challenge/dqSPYsWFtsCLeeZC2

//Description:
//Write a function that counts the number of times a specific digit occurs in a range (inclusive). The function will look like:
//digitOccurrences(min, max, digit) ➞ number of times digit occurs
//Examples
//digitOccurrences(51, 55, 5) ➞ 6
//// [51, 52, 53, 54, 55] : 5 occurs 6 times
//
//digitOccurrences(1, 8, 9) ➞ 0
//
//digitOccurrences(-8, -1, 8) ➞ 1
//
//digitOccurrences(71, 77, 2) ➞ 1
//Notes
//Ranges can be negative.
//min <= max

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(digitOccurrences(51, 55, 5), 6)
//Test.assertEquals(digitOccurrences(1, 8, 9), 0)
//Test.assertEquals(digitOccurrences(71, 77, 2), 1)
//Test.assertEquals(digitOccurrences(1, 14, 4), 2)
//Test.assertEquals(digitOccurrences(20, 30, 2), 11)
//Test.assertEquals(digitOccurrences(18, 37, 3), 10)
//Test.assertEquals(digitOccurrences(5, 335, 6), 63)
//Test.assertEquals(digitOccurrences(-19, 19, 0), 3)
//Test.assertEquals(digitOccurrences(-8, -1, 8), 1)
//Test.assertEquals(digitOccurrences(-5, -5, 4), 0)
//Test.assertEquals(digitOccurrences(-5, -5, 5), 1)
//Test.assertEquals(digitOccurrences(-50, -45, 4), 5)
//Test.assertEquals(digitOccurrences(-500, -45, 4), 190)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: camelCase ⇄ snake_case

//tags: algorithms,formatting,regex,strings

//url: https://edabit.com/challenge/uts8XsD5zGHdHr32u

//Description:
//Create two functions toCamelCase() and toSnakeCase() that each take a single string and convert it into either camelCase or snake_case. If you're not sure what these terms mean, check the Resources tab above.
//Examples
//toCamelCase("hello_edabit") ➞ "helloEdabit"
//
//toSnakeCase("helloEdabit") ➞ "hello_edabit"
//
//toCamelCase("is_modal_open") ➞ "isModalOpen"
//
//toSnakeCase("getColor") ➞ "get_color"
//Notes
//Test input will always be appropriately formatted as either camelCase or snake_case, depending on the function being called.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// camelCase to snake_case tests
//Test.assertEquals(toSnakeCase("edabit"), "edabit");
//Test.assertEquals(toSnakeCase("helloEdabit"), "hello_edabit");
//Test.assertEquals(toSnakeCase("isModalOpen"), "is_modal_open");
//Test.assertEquals(toSnakeCase("getBackgroundColor"), "get_background_color");
//Test.assertEquals(toSnakeCase("isLoading"), "is_loading");
//Test.assertEquals(toSnakeCase("x"), "x");
//​
//// snake_case to camelCase tests
//Test.assertEquals(toCamelCase("edabit"), "edabit");
//Test.assertEquals(toCamelCase("hello_edabit"), "helloEdabit");
//Test.assertEquals(toCamelCase("is_modal_open"), "isModalOpen");
//Test.assertEquals(toCamelCase("get_background_color"), "getBackgroundColor");
//Test.assertEquals(toCamelCase("is_loading"), "isLoading");
//Test.assertEquals(toCamelCase("x"), "x");

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Two is the Difference

//tags: arrays,numbers

//url: https://edabit.com/challenge/nDQugFjducBmKXyFf

//Description:
//Create a function that takes an array of integers and returns all pairs of integers that have a difference of two. The resulting array should be sorted in ascending order of values.
//Examples
//differenceTwo([1, 2, 3, 4]) ➞ [[1, 3], [2, 4]]
//
//differenceTwo([1, 23, 3, 4, 7]) ➞ [[1, 3]]
//
//differenceTwo([4, 3, 1, 5, 6]) ➞ [[1, 3], [3, 5], [4, 6]]
//Notes
//Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(differenceTwo([1,2,3,4]), [[1,3],[2,4]])
//Test.assertSimilar(differenceTwo([1, 23, 3, 4, 7]), [[1,3]])
//Test.assertSimilar(differenceTwo([4, 3, 1, 5, 6]), [[1,3], [3, 5], [4, 6]])
//​
////Mubashir

