

//title: Find the Other Two Side Lengths

//tags: geometry,math

//url: https://edabit.com/challenge/8QXJ2k4oRtDTgKizS

//Description:
//Given the shortest side of a 30° by 60° by 90° triangle, find out the other two sides. Return the longest side and medium-length side in that order.
//Examples
//otherSides(1) ➞ [2, 1.73]
//
//otherSides(2) ➞ [4, 3.46]
//
//otherSides(3) ➞ [6, 5.2]
//Notes
//30 60 90 triangles always follow this rule: let's say the shortest side length is x units, the hypotenuse would be 2x units and the other side would be x * square root of 3.
//In the Tests, the decimal is rounded to 2 places.
//Return the values as an array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(otherSides(1), [2, 1.73])
//Test.assertSimilar(otherSides(2), [4, 3.46])
//Test.assertSimilar(otherSides(3), [6, 5.2])
//Test.assertSimilar(otherSides(7), [14, 12.12])
//// Most frequently asked question in SAT MATH section.

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Random Integer Generator

//tags: logic,numbers

//url: https://edabit.com/challenge/q4WAdJA9vCKiFYG73

//Description:
//The challenge is simple. Return a random integer N such that a <= N <= b.
//Examples
//randomInt(5, 9) ➞ 7
//
//randomInt(5, 9) ➞ 9
//
//randomInt(5, 9) ➞ 5
//Notes
//Don't forget to return the result.
//Return value must be an integer.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const range = (start, stop, step = 1) =>
//  Array(Math.ceil((stop - start) / step))
//    .fill(start)
//    .map((x, y) => x + y * step);
//​
//Test.assertEquals(Number.isInteger(randomInt(1,5)), true, 'Return value must be an integer')
//Test.assertEquals(range(1, 4).includes(randomInt(1, 3)), true, 'Your function should return a value N such that a <= N <= b')
//Test.assertEquals(range(3, 6).includes(randomInt(3, 5)), true, 'Your function should return a value N such that a <= N <= b')
//Test.assertEquals(range(1, 11).includes(randomInt(1, 10)), true, 'Your function should return a value N such that a <= N <= b')
//Test.assertEquals(range(20, 31).includes(randomInt(20, 30)), true, 'Your function should return a value N such that a <= N <= b')
//Test.assertEquals(range(50, 101).includes(randomInt(50, 100)), true, 'Your function should return a value N such that a <= N <= b')
//Test.assertEquals(randomInt(5, 5), 5, 'Your function should return a value N such that a <= N <= b')
//Test.assertNotEquals(randomInt(1, 100000), randomInt(1, 100000), 'Your function doesn\'t seem to generate random integers or you\'re the unluckiest person alive.')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Father and Son Ages

//tags: algorithms,language_fundamentals,numbers

//url: https://edabit.com/challenge/y2GWwz42RxJzzZP66

//Description:
//Create a function that takes two arguments: a father's current age fAge and his son's current age sAge. Сalculate how many years ago the father was twice as old as his son, or in how many years he will be twice as old.
//Examples
//ageDifference(36, 7) ➞ 22
//// 22 years from now, the father will be 58 years old and his son will be 29 years old.
//
//ageDifference(55, 30) ➞ 5
//// 5 years ago, the father was 50 years old and his son was 25 years old.
//
//ageDifference(42, 21) ➞ 0
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(ageDifference(36, 7), 22)
//Test.assertEquals(ageDifference(55, 30), 5)
//Test.assertEquals(ageDifference(42, 21), 0)
//Test.assertEquals(ageDifference(22, 1), 20)
//Test.assertEquals(ageDifference(29, 0), 29)

