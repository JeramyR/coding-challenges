

//title: Compass Directions

//tags: arrays,control_flow

//url: https://edabit.com/challenge/pS3FkeSKxZe3AaWMG

//Description:
//You face 1 out of the 4 compass directions: N, S, E or W.
//A left turn is a counter-clockwise turn. e.g. N (left-turn) ➞ W.
//A right turn is a clockwise turn. e.g. N (right-turn) ➞ E.
//Create a function that takes in a starting direction and a sequence of left and right turns, and outputs the final direction faced.
//Examples
//finalDirection("N", ["L", "L", "L"]) ➞ "E"
//
//finalDirection("N", ["R", "R", "R", "L"]) ➞ "S"
//
//finalDirection("N", ["R", "R", "R", "R"]) ➞ "N"
//
//finalDirection("N", ["R", "L"]) ➞ "N"
//Notes
//You can only face 1 out of the 4 compass directions: N, S, E or W.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(finalDirection('N', ['L', 'L', 'L']), 'E')
//Test.assertEquals(finalDirection('N', ['R', 'R', 'R', 'R', 'R', 'R', 'R']), 'W')
//Test.assertEquals(finalDirection('N', ['R', 'R', 'R', 'L']), 'S')
//Test.assertEquals(finalDirection('N', ['R', 'R', 'R', 'R']), 'N')
//Test.assertEquals(finalDirection('N', ['R', 'L']), 'N')
//Test.assertEquals(finalDirection('S', ['R', 'L', 'R', 'L', 'R']), 'W')
//Test.assertEquals(finalDirection('S', ['R', 'L', 'R', 'L', 'R', 'L']), 'S')
//Test.assertEquals(finalDirection('S', ['R', 'L', 'R', 'L', 'L', 'L']), 'N')
//Test.assertEquals(finalDirection('S', ['R', 'R']), 'N')
//Test.assertEquals(finalDirection('S', ['R']), 'W')
//Test.assertEquals(finalDirection('S', ['L']), 'E')
//Test.assertEquals(finalDirection('W', ['L', 'R', 'R']), 'N')
//Test.assertEquals(finalDirection('W', ['R', 'L', 'L']), 'S')
//Test.assertEquals(finalDirection('E', ['L', 'R', 'R']), 'S')
//Test.assertEquals(finalDirection('E', ['R', 'L', 'L']), 'N')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Polydivisible Numbers

//tags: algebra,math,numbers,validation

//url: https://edabit.com/challenge/krzm6Y2riBDYJJa2R

//Description:
//Mubashir was reading about Polydivisible Numbers on Wikipedia.
//In mathematics a Polydivisible Number (or magic number) is a number in a given number base with digits abcde... that has the following properties:
//Its first digit a is not 0.
//The number formed by its first two digits ab is a multiple of 2.
//The number formed by its first three digits abc is a multiple of 3.
//The number formed by its first four digits abcd is a multiple of 4.
//etc.
//Create a function which takes an integer n and returns true if the given number is a Polydivisible Number and false otherwise.
//Examples
//isPolydivisible(1232) ➞ true
//// 1     / 1 = 1
//// 12    / 2 = 6
//// 123   / 3 = 41
//// 1232  / 4 = 308
//
//isPolydivisible(123220 ) ➞ false
//// 1   / 1 = 1
//// 12   / 2 = 6
//// 123   / 3 = 41
//// 1232   / 4 = 308
//// 12322   / 5 = 2464.4         // Not a Whole Number
//// 123220   /6 = 220536.333...  // Not a Whole Number
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isPolydivisible(1232), true)
//Test.assertEquals(isPolydivisible(123220), false)
//Test.assertEquals(isPolydivisible(0), true)
//Test.assertEquals(isPolydivisible(1), true)
//Test.assertEquals(isPolydivisible(141), true)
//Test.assertEquals(isPolydivisible(1234), false)
//Test.assertEquals(isPolydivisible(21234), false)
//Test.assertEquals(isPolydivisible(81352), false)
//Test.assertEquals(isPolydivisible(987654), true)
//Test.assertEquals(isPolydivisible(1020005), true)
//Test.assertEquals(isPolydivisible(9876545), true)
//Test.assertEquals(isPolydivisible(381654729), true)
//Test.assertEquals(isPolydivisible(1073741823), false)
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Data Structures (3): Rotate an Array

//tags: arrays,data_structures,interview

//url: https://edabit.com/challenge/WidyqYWE4sJ3EMjgg

//Description:
//Rotate an array either left or right according to the number passed.
//You are an undercover agent and you're at a cocktail party hosted by an evil secret cartel. You've snuck into the main office to look at the files. They are organized according to an index system. You decide to rotate the files so that when the evil genius goes to get File 47: How to Make a Bomb he'll actually be grabbing File 43: How to Make a Paper Mache Dinosaur. His attempt at making a bomb will fail and you will have saved many lives.
//Your challenge is to write a function that rotates an array by a given number, either left or right depending on if the number is positive or negative.
//Arguments
//Array: The array which will be rotated.
//Number: The number of index positions the array will be rotated.
//Returns Array: The rotated array.
//Examples
//A positive number rotates it to the right:
//rotateArray([0, 1, 2, 3, 4, 5, 7, 9], 2) ➞ [7, 9, 0, 1, 2, 3, 4, 5]
//A negative number rotates it to the left:
//rotateArray([0, 1, 2, 3, 4, 5, 7, 9], -2) ➞ [2, 3, 4, 5, 7, 9, 0, 1]
//The number to rotate by can be longer than the array, it just loops over in that case:
//rotateArray([0, 1, 2, 3, 4, 5, 7, 9], 12) ➞ [4, 5, 7, 9, 0, 1, 2, 3]
//Notes
//This is part of my Data Structures series. A collection of common coding interview challenges used to test one's understanding of data structures.
//This entire series of challenges can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(rotateArray([0, 1, 2, 3, 4, 5, 7, 9], 12), [4, 5, 7, 9, 0, 1, 2, 3])
//Test.assertSimilar(rotateArray([0, 1, 2, 3, 4, 5, 7, 9], 2), [7, 9, 0, 1, 2, 3, 4, 5])
//Test.assertSimilar(rotateArray([0, 1, 2, 3, 4, 5, 7, 9], -2), [2, 3, 4, 5, 7, 9, 0, 1])
//Test.assertSimilar(rotateArray([0, 1, 2, 3, 4, 5, 7, 9], 2), [7, 9, 0, 1, 2, 3, 4, 5])
//Test.assertSimilar(rotateArray([1, 20, 36, 40, 55, 57, 59, 77, 85, 99], -4), [55, 57, 59, 77, 85, 99, 1, 20, 36, 40])
//Test.assertSimilar(rotateArray([1, 13, 29, 37, 47, 48, 51, 79, 88, 89], -3), [37, 47, 48, 51, 79, 88, 89, 1, 13, 29])
//Test.assertSimilar(rotateArray([28, 29, 50, 57, 76, 77, 81, 91], -2), [50, 57, 76, 77, 81, 91, 28, 29])
//Test.assertSimilar(rotateArray([1, 11, 17, 29, 52, 62, 88, 92, 93, 99], -1), [11, 17, 29, 52, 62, 88, 92, 93, 99, 1])
//Test.assertSimilar(rotateArray([15, 23, 4, 53, 60, 77, 8, 90, 91, 97], 0), [15, 23, 4, 53, 60, 77, 8, 90, 91, 97])
//Test.assertSimilar(rotateArray([14, 17, 36, 43, 46, 5, 63, 68, 96], 1), [96, 14, 17, 36, 43, 46, 5, 63, 68])
//Test.assertSimilar(rotateArray([12, 17, 2, 22, 3, 45, 68, 7, 86], 2), [7, 86, 12, 17, 2, 22, 3, 45, 68])
//Test.assertSimilar(rotateArray([19, 22, 29, 5, 58, 61, 67, 75, 79, 93], 5), [61, 67, 75, 79, 93, 19, 22, 29, 5, 58])
//Test.assertSimilar(rotateArray([19, 22, 29, 5, 58, 61, 67, 75, 79, 93], 18), [29, 5, 58, 61, 67, 75, 79, 93, 19, 22])

