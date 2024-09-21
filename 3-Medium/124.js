

//title: CAPS LOCK DAY is over!

//tags: formatting,language_fundamentals,strings

//url: https://edabit.com/challenge/yZMeSnxZnrW64aSS5

//Description:
//October 22nd is CAPS LOCK DAY. Apart from that day, every sentence should be lowercase, so write a function to normalize a sentence.
//Create a function that takes a string. If the string is all uppercase characters, convert it to lowercase and add an exclamation mark at the end.
//Examples
//normalize("CAPS LOCK DAY IS OVER") ➞ "Caps lock day is over!"
//
//normalize("Today is not caps lock day.") ➞ "Today is not caps lock day."
//
//normalize("Let us stay calm, no need to panic.") ➞ "Let us stay calm, no need to panic."
//Notes
//Each string is a sentence and should start with an uppercase character.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(normalize("CAPS LOCK DAY IS OVER"), "Caps lock day is over!", "\n convert the sentence to lowercase and add an exclamation mark(!)\n The first character should be an uppercase C.\n")
//Test.assertEquals(normalize("Today is not caps lock day."), "Today is not caps lock day.", "\n This sentence is correct, no need to modify it.\n")
//Test.assertEquals(normalize("WE WANT THIS COVID THING TO BE OVER"), "We want this covid thing to be over!")
//Test.assertEquals(normalize("Let us stay calm, no need to panic."), "Let us stay calm, no need to panic.")
//Test.assertEquals(normalize("DO NOT SHOUT"), "Do not shout!")
//Test.assertEquals(normalize("Civilized conversation."), "Civilized conversation.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: What Type of Triangle?

//tags: arrays,conditions,geometry,math

//url: https://edabit.com/challenge/RQ667jEXGy7Kx7FFG

//Description:
//Create a function which returns the type of triangle, given the side lengths. Return the following values if they match the criteria.
//No sides equal: "scalene"
//Two sides equal: "isosceles"
//All sides equal: "equilateral"
//Less or more than 3 sides given: "not a triangle"
//Examples
//getTriangleType([2, 6, 5]) ➞ "scalene"
//
//getTriangleType([4, 4, 7]) ➞ "isosceles"
//
//getTriangleType([8, 8, 8]) ➞ "equilateral"
//
//getTriangleType([3, 5, 5, 2]) ➞ "not a triangle"
//Notes
//You will be given an array of positive integers.
//Check the Resources tab for more information on the types of triangles.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(getTriangleType([2, 3, 4]), "scalene")
//Test.assertEquals(getTriangleType([4, 4, 7]), "isosceles")
//Test.assertEquals(getTriangleType([8, 8, 8]), "equilateral")
//Test.assertEquals(getTriangleType([3, 5, 5, 2]), "not a triangle")
//Test.assertEquals(getTriangleType([4, 4, 1]), "isosceles")
//Test.assertEquals(getTriangleType([4, 4, 2]), "isosceles")
//Test.assertEquals(getTriangleType([3, 1, 3]), "isosceles")
//Test.assertEquals(getTriangleType([1]), "not a triangle")
//Test.assertEquals(getTriangleType([4, 4, 3]), "isosceles")
//Test.assertEquals(getTriangleType([10]), "not a triangle")
//Test.assertEquals(getTriangleType([4, 1, 4]), "isosceles")
//Test.assertEquals(getTriangleType([3, 3, 3]), "equilateral")
//Test.assertEquals(getTriangleType([2, 3, 4]), "scalene")
//Test.assertEquals(getTriangleType([1, 5, 5]), "isosceles")
//Test.assertEquals(getTriangleType([5, 7, 4]), "scalene")
//Test.assertEquals(getTriangleType([3, 3, 2]), "isosceles")
//Test.assertEquals(getTriangleType([2, 1, 2]), "isosceles")
//Test.assertEquals(getTriangleType([9, 7, 9, 5, 3]), "not a triangle")
//Test.assertEquals(getTriangleType([4, 4, 1]), "isosceles")
//Test.assertEquals(getTriangleType([10, 8, 3, 2]), "not a triangle")
//Test.assertEquals(getTriangleType([4]), "not a triangle")
//Test.assertEquals(getTriangleType([4, 6, 9]), "scalene")
//Test.assertEquals(getTriangleType([4, 2, 5]), "scalene")
//Test.assertEquals(getTriangleType([6, 7]), "not a triangle")
//Test.assertEquals(getTriangleType([3, 2, 3]), "isosceles")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Fibonacci Sequence

//tags: loops,math

//url: https://edabit.com/challenge/eYBNcjib3xHHrktZm

//Description:
//The Fibonacci Sequence is the sequence of numbers (Fibonacci Numbers) whose sum is the two preceding numbers (e.g. 0, 1, 1, 2, 3, etc). Using 0 and 1 as the starting values, create a function that returns an array containing all of the Fibonacci numbers less than 255.
//Examples
//On generating a Fibonacci number where input is the two preceding values starting from 0 and 1 [0, 1, ...].
//fibonacciSequence(0, 1) ➞ 1
//
//fibonacciSequence(1, 1) ➞ 2
//
//fibonacciSequence(1, 2) ➞ 3
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(fibonacciSequence(), [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ])

