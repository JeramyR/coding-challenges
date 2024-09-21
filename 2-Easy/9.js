

//title: Filter out Strings from an Array

//tags: arrays,formatting,loops

//url: https://edabit.com/challenge/b2NdDSdkjqFnCTfS8

//Description:
//Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
//Examples
//filterArray([1, 2, "a", "b"]) ➞ [1, 2]
//
//filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
//
//filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
//Notes
//Zero is a non-negative integer.
//The given array only has integers and strings.
//Numbers in the array should not repeat.
//The original order must be maintained.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(filterArray([1, 2, "a", "b"]), [1, 2])
//Test.assertSimilar(filterArray([1, "a", "b", 0, 15]), [1, 0, 15])
//Test.assertSimilar(filterArray([1, 2, "aasf", "1", "123", 123]), [1, 2, 123])
//Test.assertSimilar(filterArray(["jsyt", 4, "yt", 6]), [4,6])
//Test.assertSimilar(filterArray(["r", 5, "y", "e", 8, 9]), [5, 8, 9])
//Test.assertSimilar(filterArray(["a", "e", "i", "o", "u"]), [])
//Test.assertSimilar(filterArray([4, "z", "f", 5]), [4, 5])
//Test.assertSimilar(filterArray(["abc", 123]), [123])
//Test.assertSimilar(filterArray(["$%^", 567, "&&&"]), [567])
//Test.assertSimilar(filterArray(["w", "r", "u", 43, "s", "a", 76, "d", 88]), [43, 76, 88])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Incorrect Import Statement

//tags: regex,strings

//url: https://edabit.com/challenge/3XiwjSzuMN4MQN6tJ

//Description:
//When importing objects from a module in Python, the syntax usually is as follows:
//from module_name import object
//Given a string of an incorrect import statement, return the fixed string. All import statements will be the wrong way round.
//Examples
//fixImport("import object from module_name") ➞ "from module_name import object"
//
//fixImport("import randint from random") ➞ "from random import randint"
//
//fixImport("import pi from math") ➞ "from math import pi"
//Notes
//All Tests will be valid strings.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(fixImport("import object from module_name"), "from module_name import object")
//Test.assertEquals(fixImport("import randint from random"), "from random import randint")
//Test.assertEquals(fixImport("import pi from math"), "from math import pi")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Rounding in Millions

//tags: language_fundamentals,loops,math,numbers,objects

//url: https://edabit.com/challenge/BeTYTkLerHFtrjH5u

//Description:
//Given an array of cities and populations, return an array where all populations are rounded to the nearest million.
//Examples
//millionsRounding([
//  ["Nice", 942208],
//  ["Abu Dhabi", 1482816],
//  ["Naples", 2186853],
//  ["Vatican City", 572]
//])
//[
//  ["Nice", 1000000],
//  ["Abu Dhabi", 1000000],
//  ["Naples", 2000000],
//  ["Vatican City", 0]
//]
//Notes
//Round down to 0 if a population is below 500,000.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// Author: Joshua Señoron
//​
//const cities1 = [
//  ['Tokyo', 37435191],
//  ['Delhi', 29399141],
//  ['Shanghai', 26317104]
//  ]
//  
//  const cities2 = [
//  ['Sao Paulo', 21846507]
//  ]
//  
//  const cities3 = [
//  ['London', 9304016],
//  ['Naples',  2186853],
//  ['Nice',  942208],
//  ['Abu Dhabi', 1482816],
//  ['Riga',  630692],
//  ['Vatican City', 572]
//  ]
//  
//Test.assertSimilar(millionsRounding(cities1), [
//  ['Tokyo', 37000000],
//  ['Delhi', 29000000],
//  ['Shanghai', 26000000]

