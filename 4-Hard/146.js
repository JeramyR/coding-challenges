

//title: Alphabetically Sorted

//tags: regex,sorting,strings,validation

//url: https://edabit.com/challenge/od9GF2tQKyLAvre8Z

//Description:
//A word is alphabetically sorted if all of the letters in it are in consecutive alphabetical order. Some examples of alphabetically sorted words: abhors (a is before b, b is before h, h is before o, etc.), ghost, accent, hoop.
//Create a function that takes in a sentence as input and returns true if there is at least one alphabetically sorted word inside that has a minimum length of 3.
//Examples
//isAlphabeticallySorted("Paula has a French accent.") ➞ true
//// "accent" is alphabetically sorted.
//
//isAlphabeticallySorted("The biopsy returned negative results.") ➞ true
//// "biopsy" is alphabetically sorted.
//
//isAlphabeticallySorted("She sells sea shells by the sea shore.") ➞ false
//// Although "by" is alphabetically sorted, it is only 2 letters long.
//Notes
//Do not count words with 2 or fewer characters.
//Ignore punctuation (periods, commas, etc).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isAlphabeticallySorted("Paula has a French accent."), true)
//Test.assertEquals(isAlphabeticallySorted("The biopsy returned negative results."), true)
//Test.assertEquals(isAlphabeticallySorted("She sells sea shells by the sea shore."), false)
//Test.assertEquals(isAlphabeticallySorted("She almost reached the top of Mt. Everest."), true)
//Test.assertEquals(isAlphabeticallySorted("She was happy with how her earring hoops looked."), true)
//Test.assertEquals(isAlphabeticallySorted("Beth dislikes eating starfruit but enjoys cherries."), false)
//Test.assertEquals(isAlphabeticallySorted("Elinor is inside on a rainy day sipping hot chocolate."), true)
//Test.assertEquals(isAlphabeticallySorted("Mara took a photograph."), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Is It a Right-Angled Triangle?

//tags: geometry,math,validation

//url: https://edabit.com/challenge/LgD9W3uCRBXow6s5e

//Description:
//Find out if a right-angled triangle can be made given some facts about the shape.
//Given varying information about a shape, create a function that returns true if the shape could be a right-angle triangle and false if not.
//You will be given an array of numbers and a string stating whether the numbers are angles or sides.
//The information may indicate more than one possible shape, but we just need to know if these details could be found in a right-angled triangle.
//Examples
//isRightAngle([30, 60], "angle") ➞ true
//// A third angle could be 90
//
//isRightAngle([20, 20, 20, 20], "angle") ➞ false
//// More than 3 sides
//
//isRightAngle([4, 5, 3], "side") ➞ true
//// 3**2 + 4**2 = 5**2
//
//isRightAngle([4, 5], "side") ➞ true
//// Third side may be 3
//Notes
//Check the Resources for more info on right-angle triangles.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isRightAngle([30, 60], "angle"), true, "Third angle may be 90")
//Test.assertEquals(isRightAngle([30, 60, 90], "angle"), true, "An angle is 90 and adds to 180")
//Test.assertEquals(isRightAngle([90], "angle"), true, "An angle is 90")
//Test.assertEquals(isRightAngle([90, 90, 90], "angle"), false, "More than 180")
//Test.assertEquals(isRightAngle([20, 20, 20, 20], "angle"), false, "More than 3 sides")
//Test.assertEquals(isRightAngle([], "angle"), true, "No information, so it could be a right-angled triangle")
//Test.assertEquals(isRightAngle([90, 90], "angle"), false, "3rd angle will go over 180")
//Test.assertEquals(isRightAngle([45, 46], "angle"), false, "3rd angle must be 89")
//Test.assertEquals(isRightAngle([45, 46], "side"), true, "3rd side could be 64.3506")
//Test.assertEquals(isRightAngle([4, 5, 6], "side"), false, "Does not calculate correctly")
//Test.assertEquals(isRightAngle([], "side"), true, "No information, so it could be a right-angled triangle")
//Test.assertEquals(isRightAngle([3, 4, 5], "side"), true, "Calculates correctly")
//Test.assertEquals(isRightAngle([60, 60, 60], "angle"), false)
//Test.assertEquals(isRightAngle([177, 2, 1], "angle"), false)
//Test.assertEquals(isRightAngle([20, 20, 20, 20], "side"), false)
//Test.assertEquals(isRightAngle([43], "angle"), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Add up to Even Number with Primes

//tags: arrays,math,numbers

//url: https://edabit.com/challenge/HbMXHwnw6wTwwthW4

//Description:
//Create a function that takes an even number (will always be greater than 4) and return an array of all pairs of prime numbers which add up to the given number.
//Examples
//primePairArr(10) ➞ ["3+7", "5+5"]
//
//primePairArr(50) ➞ ["3+47", "7+43", "13+37", "19+31"]
//
//primePairArr(100) ➞ ["3+97", "11+89", "17+83", "29+71", "41+59", "47+53"]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(primePairArr(10), ["3+7", "5+5"])
//Test.assertSimilar(primePairArr(20), ["3+17", "7+13"])
//Test.assertSimilar(primePairArr(30), ["7+23", "11+19", "13+17"])
//Test.assertSimilar(primePairArr(50), ["3+47", "7+43", "13+37", "19+31"])
//Test.assertSimilar(primePairArr(80), ["7+73", "13+67", "19+61", "37+43"])
//Test.assertSimilar(primePairArr(100), ["3+97", "11+89", "17+83", "29+71", "41+59", "47+53"])

