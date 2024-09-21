

//title: Is It the Same Upside Down?

//tags: numbers,sorting,strings,validation

//url: https://edabit.com/challenge/gF3AYnxHQi7aNqiMq

//Description:
//The number 6090609 has a special property: if you turn the number upside down (imagine rotating your screen 180 degrees), you get 6090609 again.
//Write a function that takes a string on the digits 0, 6, 9 and returns true if the number is the same upside down or false otherwise.
//Examples
//sameUpsidedown("6090609") ➞ true
//
//sameUpsidedown("9669") ➞ false
//// Becomes 6996 when upside down.
//
//sameUpsidedown("69069069") ➞ true
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sameUpsidedown("9"), false)
//Test.assertEquals(sameUpsidedown("0"), true)
//Test.assertEquals(sameUpsidedown("6090609"), true)
//Test.assertEquals(sameUpsidedown("9669"), false)
//Test.assertEquals(sameUpsidedown("69069069"), true)
//Test.assertEquals(sameUpsidedown("60906096090609"), true)
//Test.assertEquals(sameUpsidedown("966909669"), false)
//Test.assertEquals(sameUpsidedown("6000000009"), true)
//Test.assertEquals(sameUpsidedown("6666660999999"), true)
//Test.assertEquals(sameUpsidedown("96666660999999"), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Shift and Multiple Validators

//tags: higher_order_functions,validation

//url: https://edabit.com/challenge/jYJiNZqx588FFJ5F7

//Description:
//For this task, you will write two validators.
//Shift Validator: When each element is translated (added or subtracted) by a constant.
//Multiple Validator: When each element is multiplied (by a positive or negative number) by a constant.
//A few examples to illustrate these respective functions:
//Examples
//isShifted([1, 2, 3], [2, 3, 4]) ➞ true
//// Each element is shifted +1
//
//isShifted([1, 2, 3], [-9, -8, -7]) ➞ true
//// Each element is shifted -10
//
//isMultiplied([1, 2, 3], [10, 20, 30]) ➞ true
//// Each element is multiplied by 10
//
//isMultiplied([1, 2, 3], [-0.5, -1, -1.5]) ➞ true
//// Each element is multiplied by -1/2
//
//isMultiplied([1, 2, 3], [0, 0, 0]) ➞ true
//// Each element is multiplied by 0
//Notes
//The given arrays are the same length.
//Keep in mind one special case: if the second array is an array of only zeroes, then the first array can be anything (the multiplier will be 0).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isShifted([1, 2, 3], [2, 3, 4]), true)
//Test.assertEquals(isShifted([1, 2, 3], [-9, -8, -7]), true)
//Test.assertEquals(isMultiplied([1, 2, 3], [10, 20, 30]), true)
//Test.assertEquals(isMultiplied([1, 2, 3], [-0.5, -1, -1.5]), true )
//Test.assertEquals(isMultiplied([1, 2, 3], [0, 0, 0]), true )
//Test.assertEquals(isShifted([1, 2, 3], [2, 3, 5]), false)
//Test.assertEquals(isShifted([1, 2, 3], [-9, -1, -7]), false)
//Test.assertEquals(isMultiplied([1, 2, 3], [10, 20, 29]), false)
//Test.assertEquals(isMultiplied([1, 2, 3], [-0.5, -1, -2]), false)
//Test.assertEquals(isMultiplied([1, 2, 3], [0, 0, 1]), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Word Builder

//tags: arrays,sorting

//url: https://edabit.com/challenge/PMKNyPeYgz7weyNXF

//Description:
//In this challenge, you have to build a word from the scrambled letters contained in the first given array. For establishing how to assign the spots to the letters, you will use the positions contained in the second given array.
//letters = ["e", "t", "s", "t"]
//positions = [1, 3, 2, 0]
//
//Step 1 ➞ Letter "e" goes to index 1 ➞ _  e  _   _
//Step 2 ➞ Letter "t" goes to index 3 ➞ _  e  _   t
//Step 3 ➞ Letter "s" goes to index 2 ➞ _  e  s   t
//Step 4 ➞ Letter "t" goes to index 0 ➞ t  e  s   t
//Given the two arrays letters (containing the scrambled letters of the word) and positions (containing the indexes of the letters), implement a function that returns the resulting word as a string.
//Examples
//wordBuilder(["e", "t", "s", "t"], [1, 3, 2, 0]) ➞ "test"
//
//wordBuilder(["b", "e", "t", "i", "d", "a"], [3, 0, 5, 4, 1, 2]) ➞ "edabit"
//
//wordBuilder(["g", "e", "o"], [1, 0, 2]) ➞ "ego"
//Notes
//Every given test case has valid parameters, don't worry about exceptions handling.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(wordBuilder(["e", "t", "s", "t"], [1, 3, 2, 0]), "test")
//Test.assertEquals(wordBuilder(["b", "e", "t", "i", "d", "a"], [3, 0, 5, 4, 1, 2]), "edabit")
//Test.assertEquals(wordBuilder(["g", "e", "o"], [1, 0, 2]), "ego")
//Test.assertEquals(wordBuilder(["l", "e", "h", "n", "l", "c", "a", "e", "g"], [3, 5, 1, 6, 4, 0, 2, 8, 7]), "challenge")
//Test.assertEquals(wordBuilder(["e", "i", "l", "g", "x", "h", "p", "o", "c", "r", "i", "a", "c"], [1, 3, 0, 6, 2, 10, 9, 5, 4, 7, 11, 8, 12]), "lexicographic")
//Test.assertEquals(wordBuilder(["s", "o", "r", "t", "e", "d"], [0, 1, 2, 3, 4, 5]), "sorted")

