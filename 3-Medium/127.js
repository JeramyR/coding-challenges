

//title: Count the Letters and Digits

//tags: conditions,data_structures,objects,regex

//url: https://edabit.com/challenge/2ndkdWJpycphvhmv8

//Description:
//Write a function that takes a string and calculates the number of letters and digits within it. Return the result as an object.
//Examples
//countAll("Hello World") ➞ { "LETTERS":  10, "DIGITS": 0 }
//
//countAll("H3ll0 Wor1d") ➞ { "LETTERS":  7, "DIGITS": 3 }
//
//countAll("149990") ➞ { "LETTERS": 0, "DIGITS": 6 }
//Notes
//Tests contain only alphanumeric characters.
//Spaces are not letters.
//All tests contain valid strings.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(countAll('Hello'), {'LETTERS': 5, 'DIGITS': 0});
//Test.assertSimilar(countAll('137'), {'LETTERS': 0, 'DIGITS': 3});
//Test.assertSimilar(countAll('H3LL0'), {'LETTERS': 3, 'DIGITS': 2});
//Test.assertSimilar(countAll('149990'), {'LETTERS': 0, 'DIGITS': 6});
//Test.assertSimilar(countAll('edabit 2018'), {'LETTERS': 6, 'DIGITS': 4}, 'Spaces are not letters.');
//Test.assertSimilar(countAll('    '), {'LETTERS': 0, 'DIGITS': 0});

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Product of Two Largest Numbers

//tags: language_fundamentals,math

//url: https://edabit.com/challenge/EvtvuXcMii75MWfvJ

//Description:
//Create a function that takes an array of numbers and returns the product of the largest and second largest UNIQUE numbers in the array. So, if there are multiple of the same highest integer, only count one towards the highest product -- see the examples below for more.
//Examples
//product([2, 3, 1, -1, 2]) ➞ 6
//// 2 * 3 = 6
//
//product([-2, -2, -1, -1]) ➞ 2
//// -2 * - 1 = 2
//// Not 1, because you can only use -1 one time.
//
//product([8, 8, 8]) ➞ 64
//// 8 * 8 = 64
//// You can repeat here because there is only one value.
//
//product([2, 8, 8, 8]) ➞ 16
//// 2 * 8 = 16
//// Not 64, because you can only use 8 one time.
//Notes
//Numbers in the array are all integers.
//Numbers can be both positive or negative.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(product([2, 3, 1, -1, 2]), 6)
//Test.assertEquals(product([-2, -2, -1, -1]), 2)
//Test.assertEquals(product([8, 8, 8]), 64)
//Test.assertEquals(product([-2, -1, 100, -12, 0]), 0)
//Test.assertEquals(product([1, 2, 3, 4]), 12)
//Test.assertEquals(product([-12, 5, 5, 8, 8, 8]), 40)
//Test.assertEquals(product([2, 8, 8, 8]), 16)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: A Simple Timer

//tags: logic,math,numbers,strings

//url: https://edabit.com/challenge/Ckaeua4gBHeGBF7Lr

//Description:
//Mubashir created a simple timer but he needs your help to make it readable inside a microcontroller.
//Create a function that takes the number of seconds and returns the timer in "00:00:00" format.
//Examples
//simpleTimer(0) ➞ "00:00:00"
//
//simpleTimer(59) ➞ "00:00:59"
//
//simpleTimer(60) ➞ "00:01:00"
//
//simpleTimer(3599) ➞ "00:59:59"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(simpleTimer(0), "00:00:00")
//Test.assertEquals(simpleTimer(59), "00:00:59")
//Test.assertEquals(simpleTimer(60), "00:01:00")
//Test.assertEquals(simpleTimer(3599), "00:59:59")
//Test.assertEquals(simpleTimer(3600), "01:00:00")
//Test.assertEquals(simpleTimer(86399), "23:59:59")
//Test.assertEquals(simpleTimer(86400), "24:00:00")
//Test.assertEquals(simpleTimer(359999), "99:59:59")
//// Mubashir

