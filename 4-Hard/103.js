

//title: What`s the Length of the Missing Array?

//tags: algorithms,arrays

//url: https://edabit.com/challenge/ufzPhQEbECxfvmSAu

//Description:
//Create a function that takes an array of arrays and return the length of the missing array.
//Examples
//findMissing([[1], [1, 2], [4, 5, 1, 1], [5, 6, 7, 8, 9]]) ➞ 3
//
//findMissing([[5, 6, 7, 8, 9], [1, 2], [4, 5, 1, 1], [1]]) ➞ 3
//
//findMissing([[4, 4, 4, 4], [1], [3, 3, 3]]) ➞ 2
//Notes
//Test input arrays won't always be sorted in order of length.
//If the array of arrays is null or empty, your function should return false.
//If an array within the parent array is null or empty, return false.
//There will always be a missing element and its length will be between the given arrays.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(findMissing([[1], [1, 2], [4, 5, 1, 1], [5, 6, 7, 8, 9]]), 3);
//Test.assertEquals(findMissing([[5, 6, 7, 8, 9], [1, 2], [4, 5, 1, 1], [1] ]), 3);
//Test.assertEquals(findMissing([[4, 4, 4, 4], [1], [3, 3, 3]]), 2);
//Test.assertEquals(findMissing([[false], [false, false, false]]), 2);
//Test.assertEquals(findMissing([["f", "r", "s"], ["d", "e"], ["a", "f", "b", "n"], ["z"], ["fg", "gty", "d", "dfr", "dr", "q"]]), 5);
//Test.assertEquals(findMissing([[5, 2, 9], [4, 5, 1, 1, 5, 6], [1, 1], [5, 6, 7, 8, 9]]), 4);
//Test.assertEquals(findMissing([]), false, "When the main array is empty, return false.");
//Test.assertEquals(findMissing(null), false, "Return false if you are given null as an argument.");
//Test.assertEquals(findMissing([[], [1, 2, 2]]), false, "If an array within the parent array is empty, return false.");

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Nearest Element

//tags: arrays,loops

//url: https://edabit.com/challenge/YE4GQfR9wRbpcPrgE

//Description:
//Given an array of integers arr, implement a function that returns the index of the number nearest to the given value n. If two numbers equally distant from n are found, the function will return the greatest of them.
//Examples
//nearestElement(10, [1, 100, 1000]) ➞ 0
//// 1 is the number nearest to 10.
//
//nearestElement(50, [100, 49, 51]) ➞ 2
//// 49 and 51 are equally distant from 50, with 51 being the greatest.
//
//nearestElement(-20, [-50, -10, -30]) ➞ 1
//// -10 and -30 are equally distant from -20, with -10 being the greatest.
//Notes
//Integers in arr will always be unique.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(nearestElement(10, [1, 100, 1000]), 0, "Example #1")
//Test.assertEquals(nearestElement(50, [100, 49, 51]), 2, "Example #2")
//Test.assertEquals(nearestElement(-20, [-50, -10, -30]), 1, "Example #3")
//Test.assertEquals(nearestElement(100, [80, 60, 40]), 0)
//Test.assertEquals(nearestElement(48, [47, 49, 73, 51, 44, 41]), 1)
//Test.assertEquals(nearestElement(1, [0, -2, 3, 2, -1]), 3)
//Test.assertEquals(nearestElement(100, [88, 99, 101, 108, 97, 98, 36]), 2)
//Test.assertEquals(nearestElement(-50, [13, 86, -49, -51, 8, 0]), 2)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Temperature Converter

//tags: conditions,numbers

//url: https://edabit.com/challenge/fi5kQFrS2v758x3kJ

//Description:
//Create a function that takes an array with temperature type, temperature, and a second temperature type. The temperature types can be Celsius, Fahrenheit, or Kelvin. Return the temperature type (in the array) converted into the second temperature type.
//Examples
//converter(["fahrenheit", 3] , "kelvin") ➞ 257
//
//converter(["celsius", 10] , "fahrenheit") ➞ 50
//
//converter(["celsius", 20] , "kelvin") ➞ 293.1
//Notes
//Round to one decimal place.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(converter(["celsius", 20], "kelvin"), 293.1)
//Test.assertEquals(converter(["celsius", 5], "kelvin"), 278.1)
//Test.assertEquals(converter(["celsius", 34], "fahrenheit"), 93.2)
//Test.assertEquals(converter(["celsius", -2], "fahrenheit"), 28.4)
//Test.assertEquals(converter(["kelvin", 18], "fahrenheit"), -427.3)
//Test.assertEquals(converter(["kelvin", -10], "celsius"), -283.1)
//Test.assertEquals(converter(["fahrenheit", 7], "kelvin"), 259.3)
//Test.assertEquals(converter(["fahrenheit", 25], "celsius"), -3.9)

