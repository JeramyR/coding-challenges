

//title: Boolean Chain

//tags: arrays,logic

//url: https://edabit.com/challenge/88ZNcDhyzke3Hpu5y

//Description:
//Write three functions:
//AND
//OR
//XOR
//These functions should evaluate an array of true and false values, starting from the leftmost element and evaluating pairwise.
//Examples
//and([true, true, false, true]) ➞ false
//// and([true, true, false, true]) => and([true, false, true]) => and([false, true]) => false
//
//or([true, true, false, false]) ➞ true
//// or([true, true, false, true]) => or([true, false, false]) => or([true, false]) => true
//
//xor([true, true, false, false]) ➞ false
//// xor([true, true, false, false]) => xor([false, false, false]) => xor([false, false]) => false
//Notes
//XOR is the same as OR, except that it excludes [true, true].
//Each time you evaluate an element at 0 and at 1, you collapse it into the single result.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// AND tests 
//Test.assertEquals(and([true, true, false, true]), false)
//Test.assertEquals(and([true, true, true, true]), true)
//Test.assertEquals(and([false, true, true, true]), false)
//Test.assertEquals(and([false, false, false, false]), false)
//Test.assertEquals(and([false, false, true, true]), false)
//​
//// OR tests
//Test.assertEquals(or([true, true, false, false]), true)
//Test.assertEquals(or([true, false, false, false]), true)
//Test.assertEquals(or([false, false, false, true, false]), true)
//Test.assertEquals(or([false, true, false, true, false, true]), true)
//Test.assertEquals(or([false, false, false, false, false]), false)
//​
//// XOR tests
//Test.assertEquals(xor([true, true, false, true]), true)
//Test.assertEquals(xor([true, true, false, false]), false)
//Test.assertEquals(xor([true, false, false, false]), true)
//Test.assertEquals(xor([true, false, true, false]), false)
//Test.assertEquals(xor([true, true, true, true]), false)
//Test.assertEquals(xor([false, false, false, false]), false)
//Test.assertEquals(xor([false, false, false, true]), true)
//Test.assertEquals(xor([true, false, false, true]), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Making a Sandwich

//tags: arrays,loops

//url: https://edabit.com/challenge/msejbMPH3k9QzWasE

//Description:
//Given an array of ingredients i and a string flavour f as input, create a function that returns the array but with the elements bread around the selected ingredient.
//Examples
//makeSandwich(["tuna", "ham", "tomato"], "ham") ➞ ["tuna", "bread", "ham", "bread", "tomato"]
//
//makeSandwich(["cheese", "lettuce"], "cheese") ➞ ["bread", "cheese", "bread", "lettuce"]
//
//makeSandwich(["ham", "ham"], "ham") ➞ ["bread", "ham", "bread", "bread", "ham", "bread"]
//Notes
//You will always get valid inputs.
//Make two separate sandwiches if two of the same elements are next to each other (see example #3).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(makeSandwich(["t", "h", "t"], "h"),["t", "bread", "h", "bread", "t"])
//Test.assertSimilar(makeSandwich(["c", "l"], "c"), ["bread", "c", "bread", "l"])
//Test.assertSimilar(makeSandwich(["h", "h"], "h"), ["bread", "h", "bread", "bread", "h", "bread"])
//​
//// made by @Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sum Fractions

//tags: algorithms,arrays,data_structures

//url: https://edabit.com/challenge/WYgMqmQqZ9GiGmBPB

//Description:
//Create a function that takes an array containing nested arrays as an argument. Each subarray has 2 elements. The first element is the numerator and the second element is the denominator. Return the sum of the fractions rounded to the nearest whole number.
//Examples
//sumFractions([[18, 13], [4, 5]]) ➞ 2
//
//sumFractions([[36, 4], [22, 60]]) ➞ 9
//
//sumFractions([[11, 2], [3, 4], [5, 4], [21, 11], [12, 6]]) ➞ 11
//Notes
//Your result should be a number not string.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sumFractions([[36, 4], [22, 60]]), 9)
//Test.assertEquals(sumFractions([[-11, 12], [18, 13], [4, 5]]), 1)
//Test.assertEquals(sumFractions([[11, 12], [18, 13], [4, 5]]), 3)
//Test.assertEquals(sumFractions([[18, 13], [4, 5]]), 2)
//Test.assertEquals(sumFractions([[41, 14], [10, 91]]), 3)
//Test.assertEquals(sumFractions([[11, 2], [3, 4], [5, 4], [21, 11], [12, 6]]), 11)

