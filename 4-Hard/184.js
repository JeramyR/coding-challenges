

//title: Shape in Shape

//tags: algebra,geometry,math,validation

//url: https://edabit.com/challenge/XT6AA9Dae9M2iJjuw

//Description:
//For math class, Matt needs to find out if a shape can fit inside another shape, based solely on their area. The only problem is, HE SUCKS AT MATH! He has asked you, his older brother, to make a program that will answer all his math questions.
//Write a function that takes two shapes, with different inputs, and returns true if the second shape has an area smaller than the first.
//The inputs will be in a standardized format per shape:
//"Circle, radius"
//"Triangle, Base, Height"
//"Rectangle, Width, Length (if different than Width) "
//"Pentagon, Side"
//Examples
//shapeInShape("Circle, 3", "Rectangle, 3, 14") ➞ false
//
//shapeInShape("Triangle, 10, 5", "Circle, 2") ➞ true
//
//shapeInShape("Pentagon, 10", "Circle, 10") ➞ false
//Notes
//Remember, the first item in each string will be the name of the shape, and all relevant data will be provided following said name.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(shapeInShape("Circle, 3", "Rectangle, 3, 14"), false)
//Test.assertEquals(shapeInShape("Circle, 5", "Rectangle, 3, 14"), true)
//Test.assertEquals(shapeInShape("Triangle, 5, 5", "Circle, 2"), false)
//Test.assertEquals(shapeInShape("Triangle, 10, 5", "Circle, 2"), true)
//Test.assertEquals(shapeInShape("Circle, 10", "Pentagon, 10"), true)
//Test.assertEquals(shapeInShape("Pentagon, 10", "Circle, 10"), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Building a Pie Chart

//tags: data_structures,math,objects

//url: https://edabit.com/challenge/paB6XfGf6yWZ69CBs

//Description:
//A pie chart is a circular graphical representation of a dataset, where each category frequency is represented by a slice (or circular sector) with an amplitude in degrees given by the single frequency percentage over the total of frequencies. You can obtain the degrees of sectors following these steps:
//Calculate frequencies total.
//Calculate percentage of every category frequency dividing it by the frequencies total.
//Transform every percentage in degrees multiplying it for 360.
//You are given an object data with keys being the data categories (represented by letters) and values being the data frequencies. Implement a function that returns a map to design a pie chart, like to say the same object with values transformed in degrees instead of frequencies. Round final values to the nearest tenth.
//
//Examples
//pieChart({ a: 1, b: 2 }) ➞ { a: 120, b: 240 }
//
//pieChart({ a: 30, b: 15, c: 55 }) ➞ { a: 108, b: 54, c: 198 }
//
//pieChart({ a: 8, b: 21, c: 12, d: 5, e: 4 }) ➞ { a: 57.6, b: 151.2, c: 86.4, d: 36, e: 28.8 }
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(pieChart({a: 8, b: 21, c: 12, d: 5, e: 4}), {a: 57.6, b: 151.2, c: 86.4, d: 36, e: 28.8}, "Example #1, Image")
//Test.assertSimilar(pieChart({a: 30, b: 15, c: 55}), {a: 108, b: 54, c: 198}, "Example #2")
//Test.assertSimilar(pieChart({a: 1, b: 2}), {a: 120, b: 240}, "Example #3")
//Test.assertSimilar(pieChart({a: 10, b: 33, c: 2, d: 48, e: 9}), {a: 35.3, b: 116.5, c: 7.1, d: 169.4, e: 31.8})
//Test.assertSimilar(pieChart({a: 10000, b: 10000, c: 10000, d: 10000}), {a: 90, b: 90, c: 90, d: 90})
//Test.assertSimilar(pieChart({a: 1, b: 10, c: 100, d: 1000, e: 666}), {a: 0.2, b: 2, c: 20.3, d: 202.6, e: 134.9})
//Test.assertSimilar(pieChart({a: 110, b: 462, c: 0}), {a: 69.2, b: 290.8, c: 0})

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Digital Egomania: the Self-Describing Numbers

//tags: arrays,conditions,loops,numbers

//url: https://edabit.com/challenge/8NfwhJ4eGriwj8AYS

//Description:
//In this challenge, you have to establish if a given number is self-describing. To be self-describing, a positive number must have an even quantity of digits, because it has to be split into separated pairs of adjacent digits x and y, and each pair can be interpreted as a declaration: among the digits of the number, there are x instances of the digit equal to y.
//If we take as an example the self-describing number 10123331, we can see how it has an even quantity of digits and it can be split into four pairs:
//[1, 0] ➞ This pair declares that among the digits of the number there is 1 instance of 0
//[1, 2] ➞ This pair declares that among the digits of the number there is 1 instance of 2
//[3, 3] ➞ This pair declares that among the digits of the number there are 3 instances of 3
//[3, 1] ➞ This pair declares that among the digits of the number there are 3 instances of 1
//If every "declaration" represented by the pairs is true (as in the above example), then the number is self-describing.
//Given a non-negative integer num, implement a function that returns true if num is a self-describing number, or false if it's not.
//Examples
//isSelfDescribing(10123331) ➞ true
//// See the Instructions
//
//isSelfDescribing(224444) ➞ true
//// Pair [2, 2] is true (two times 2 into num)
//// Pair [4, 4] is true (four times 4 into num)
//// Pair [4, 4] is true (same as previous)
//
//isSelfDescribing(2211) ➞ false
//// Pair [2, 2] is true (two times 2 into num)
//// Pair [1, 1] is false! It declares: one time 1 into num...
//// ...but 2211 has two instances of 1 among its digits
//
//isSelfDescribing(333) ➞ false
//// Odd quantity of digits, it can't be splitted
//Notes
//Pairs can be repeated (see example #2), but they have to be true in any case.
//Remember to consider the totality of the digits of the number, when checking if a pair represents a true declaration (see example #3).
//You can expect always valid non-negative integers as input.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isSelfDescribing(10123331), true, "Example #1")
//Test.assertEquals(isSelfDescribing(224444), true, "Example #2")
//Test.assertEquals(isSelfDescribing(2211), false, "Example #3")
//Test.assertEquals(isSelfDescribing(333), false, "Example #4")
//Test.assertEquals(isSelfDescribing(1), false)
//Test.assertEquals(isSelfDescribing(27273332), true)
//Test.assertEquals(isSelfDescribing(11), false)
//Test.assertEquals(isSelfDescribing(22), true)
//Test.assertEquals(isSelfDescribing(19212332), true)
//Test.assertEquals(isSelfDescribing(4444332231), false)
//Test.assertEquals(isSelfDescribing(881722888888), true)

