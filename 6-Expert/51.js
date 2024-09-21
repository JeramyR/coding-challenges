

//title: Recursion: Reversible Inclusive List Ranges

//tags: logic,math,numbers,recursion

//url: https://edabit.com/challenge/LKTiopxKdDRARMvri

//Description:
//Write a function that, given the startOfRange and endOfRange values, returns an array containing all the numbers inclusive to that range. See examples below.
//Examples
//reversibleInclusiveList(1, 5) ➞ [1, 2, 3, 4, 5]
//
//reversibleInclusiveList(2, 8) ➞ [2, 3, 4, 5, 6, 7, 8]
//
//reversibleInclusiveList(10, 20) ➞[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
//
//reversibleInclusiveList(24, 17) ➞[24, 23, 22, 21, 20, 19, 18, 17]
//Notes
//The sort order of the resulting array is dependent of the input values.
//All inputs provided in the test scenarios are valid.
//If startOfRange is greater than endOfRange, return an descendingly sorted array, otherwise, ascendingly sorted.
//You are expected to solve this challenge via a recursive approach.
//A iterative version of this challenge can be found via this link.
//A collection of challenges in recursion can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const funcCheck = f => (`${f}`.match(/Array|fill|from|of|reverse/gm) || []).length < 1
//const recurCheck = f => (`${f}`.match(RegExp(`${f.name}`, 'gm')) || []).length > +(/function/.test(f))
//​
//Test.assertNotEquals(funcCheck(reversibleInclusiveList), false, "A recursive approach is required!")
//Test.assertNotEquals(recurCheck(reversibleInclusiveList), false, "Recursion is required!")
//​
//let [actualParam, expectedParam] = [
//  [[5, 1], [6, 2], [10, 20], [24, 17], [40, 50], [51, 41], [11, 66], [9, 3], [6, 16]],
//  [[5, 4, 3, 2, 1],
//  [6, 5, 4, 3, 2],
//  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//  [24, 23, 22, 21, 20, 19, 18, 17],
//  [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
//  [51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41],
//  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
//   40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66],
//  [9, 8, 7, 6, 5, 4, 3],
//  [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
//]
//for (let i in actualParam) Test.assertSimilar(reversibleInclusiveList(...actualParam[i]), expectedParam[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Where`s the Bomb?

//tags: algebra,algorithms,arrays

//url: https://edabit.com/challenge/2Z5A9F7rGp4jAj22y

//Description:
//A large flat field measures 50x50 kilometers. At a time t = 0, a bomb explodes somewhere on the field. There are 3 scattered sensors with synchronized clocks that record the exact time (in seconds) that the sound of the exploding bomb reaches them.
//Given the x, y coordinates of each of the 3 sensors and the recorded time of each, find the location of the bomb:
//bomb([[x1, y1, t1], [x2, y2, t2], [x3, y3, t3]]) ➞ [xb, yb]
//// Bomb location
//Examples
//bomb([[0, 0, 72.886], [0, 50, 72.886], [25, 25, 72.886]]) ➞ [0, 25]
//
//bomb([[0, 50, 145.773], [50, 50, 206.154], [50, 0, 145.773]]) ➞ [0, 0]
//
//bomb([[5, 8, 48.872], [12, 21, 35.107], [24, 20, 22.203]]) ➞ [21, 13]
//
//bomb([[18, 42, 35.558], [39, 16, 106.004], [7, 24, 32.202]]) ➞ [8, 35]
//Notes
//The origin is at one corner of the square field so all the coordinates are positive integers in km units.
//The bomb's coordinates are integers.
//The speed of sound in air is 0.343 km/sec.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(bomb([[5, 8, 48.872], [12, 21, 35.107], [24, 20, 22.203]]), [21, 13])
//Test.assertSimilar(bomb([[18, 42, 35.558], [39, 16, 106.004], [7, 24, 32.202]]), [8, 35])
//Test.assertSimilar(bomb([[42, 19, 98.004], [3, 17, 122.484], [28, 29, 61.294]]), [29, 50])
//Test.assertSimilar(bomb([[46, 23, 89.434], [19, 8, 73.119], [17, 33, 0.0]]), [17, 33])
//Test.assertSimilar(bomb([[9, 39, 35.468], [15, 27, 44.407], [31, 18, 73.119]]), [21, 41])
//Test.assertSimilar(bomb([[3, 49, 127.815], [16, 27, 58.672], [11, 40, 92.792]]), [34, 18])
//Test.assertSimilar(bomb([[48, 40, 169.849], [18, 36, 105.683], [12, 42, 116.691]]), [3, 3])
//Test.assertSimilar(bomb([[10, 20, 38.013], [4, 18, 53.6], [36, 29, 55.7]]), [17, 31])
//Test.assertSimilar(bomb([[0, 0, 72.886], [0, 50, 72.886], [25, 25, 72.886]]), [0, 25])
//Test.assertSimilar(bomb([[5, 5, 0], [5, 5, 0], [5, 5, 0]]), [5, 5])
//Test.assertSimilar(bomb([[0, 50, 145.773], [50, 50, 206.154], [50, 0, 145.773]]), [0, 0])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Finding the Missing Sides of a Right Triangle

//tags: geometry,math

//url: https://edabit.com/challenge/EN9pknAfjiPfNAwLp

//Description:
//Consider a right triangle. Its area and hypotenuse are known.
//Create a function that returns the two missing sides. The first input is the area and the second input is the hypotenuse. Return your answer as an array (the shorter side first). If there is no such right triangle, return "Does not exist".
//Examples
//f(3, 6) ➞ [1.015, 5.914]
//
//f(30, 12) ➞ [5.675, 10.574]
//
//f(30, 10) ➞ "Does not exist"
//Notes
//Round your answer to three decimal places.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(f(3,6), [1.015, 5.914])
//Test.assertSimilar(f(30,12), [5.675, 10.574])
//Test.assertSimilar(f(30,10), "Does not exist")

