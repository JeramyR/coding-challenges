

//title: Water Jug Puzzle

//tags: algorithms,conditions,data_structures,loops

//url: https://edabit.com/challenge/BMujCYCkTowit85Wq

//Description:
//Given a set of 3 jugs of water that have capacities of a, b, and c liters, find the minimum number of operations performed before each jug has x, y, and z liters. Only jug C will start completely filled.
//An operation is any of the following: A jug is emptied, a jug is filled, or water is poured from one jug to another until one of the jugs is either empty or full.
//For example, jugs A, B, and C with capacities of 3, 5, and 8, where jugs A and B start empty and C has the full 8, require 2 operations to reach the state of 0, 3, and 5 liters in the jugs.
//Create a function that, given an array of jug capacities [A, B, C] and an goal state array [x, y, z], returns the minimum number of operations needed to reach the goal state. If the inputs are invalid or there is no solution, return "No solution."
//Examples
//waterjug([3, 5, 8], [0, 3, 5]) ➞ 2
//
//waterjug([1, 3, 4],  [0, 2, 2]) ➞ 3
//
//waterjug([8, 17, 20], [0, 10, 10]) ➞ 9
//
//waterjug([4, 17, 22], [2, 5, 15]) ➞ "No solution."
//
//waterjug([3, 5, 8], [0, 0, 9]) ➞ "No solution."
//Notes
//The amount of water in a jug can never exceed the capacity of that jug.
//The total liters in the goal state must be equal to the capacity of jug C.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(waterjug([3, 5, 8], [0, 3, 5]), 2);
//Test.assertEquals(waterjug([1, 3, 4],  [0, 2, 2]), 3);
//Test.assertEquals(waterjug([8, 17, 20], [0, 10, 10]), 9);
//Test.assertEquals(waterjug([4, 17, 22], [2, 5, 15]), "No solution.");
//Test.assertEquals(waterjug([3, 5, 8],  [0, 5, 3]), 1);
//Test.assertEquals(waterjug([3, 5, 8], [0, 6, 2]), "No solution.");
//Test.assertEquals(waterjug([6, 7, 10],  [0, 0, 10]), 0);
//Test.assertEquals(waterjug([3, 5, 8],  [4, 0, 4]), "No solution.");
//Test.assertEquals(waterjug([3, 5, 8],  [2, 1, 4]), "No solution.");
//Test.assertEquals(waterjug([3, 5, 8],  [0, 2, 6]), 3);
//Test.assertEquals(waterjug([6, 7, 10],  [5, 5, 0]), "No solution.");
//Test.assertEquals(waterjug([30, 45, 50],  [25, 25, 0]), "No solution.");
//Test.assertEquals(waterjug([3, 5, 8],  [0, 4, 4]), 7);
//Test.assertEquals(waterjug([4, 7, 10],  [0, 5, 5]), 8);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Spiral Matrix

//tags: arrays,higher_order_functions,logic

//url: https://edabit.com/challenge/XreZrGBwGBisFCZ9q

//Description:
//Given a matrix of m * n elements (m rows, n columns), return all elements of the matrix in spiral order.
//Examples
//spiralOrder([
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
//]) ➞ [1, 2, 3, 6, 9, 8, 7, 4, 5]
//
//spiralOrder([
//  [1, 2, 3, 4],
//  [5, 6, 7, 8],
//  [9,10,11,12]
//]) ➞ [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
//Notes
//NA

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(spiralOrder([
// [ 1, 2, 3 ],
// [ 4, 5, 6 ],
// [ 7, 8, 9 ]
//]),[1,2,3,6,9,8,7,4,5])
//​
//Test.assertSimilar(spiralOrder([
//  [1, 2, 3, 4],
//  [5, 6, 7, 8],
//  [9,10,11,12]
//]),[1,2,3,4,8,12,11,10,9,5,6,7])
//​
//Test.assertSimilar(spiralOrder([
//  [1, 2, 3, 4, 5],
//  [6, 7, 8, 9, 10],
//  [11, 12, 13, 14, 15]
//]),[1, 2, 3, 4, 5, 10, 15, 14, 13, 12, 11, 6, 7, 8, 9])
//​
//Test.assertSimilar(spiralOrder([
//  [1, 2, 3, 4, 5, 6],
//  [7, 8, 9, 10, 11, 12],
//  [13, 14, 15, 16, 17, 18]
//]),[1, 2, 3, 4, 5, 6, 12, 18, 17, 16, 15, 14, 13, 7, 8, 9, 10, 11])
//​
//Test.assertSimilar(spiralOrder([

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Product of Two Prime Numbers

//tags: algebra,math,numbers,validation

//url: https://edabit.com/challenge/zuNucKPcgxZX5jHzQ

//Description:
//Write a function that returns true if the given number num is a product of any two prime numbers.
//Examples
//productOfPrimes(2059) ➞ true
//// 29*71=2059
//
//productOfPrimes(10) ➞ true
//// 2*5=10
//
//productOfPrimes(25) ➞ true
//// 5*5=25
//
//productOfPrimes(999) ➞ false
//// There are no prime numbers.
//Notes
//num is always greater than 0.
//0 and 1 aren't prime numbers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(productOfPrimes(2059), true)
//Test.assertEquals(productOfPrimes(7), false)
//Test.assertEquals(productOfPrimes(25), true)
//Test.assertEquals(productOfPrimes(39), true)
//Test.assertEquals(productOfPrimes(5767), true)
//Test.assertEquals(productOfPrimes(77), true)
//Test.assertEquals(productOfPrimes(12), false)

