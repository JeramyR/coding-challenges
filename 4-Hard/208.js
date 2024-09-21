

//title: Cartesian Matrix

//tags: arrays,loops

//url: https://edabit.com/challenge/uJTFvuYDRD5cEsfdL

//Description:
//In this challenge, create a matrix that simulates how a series of points are placed on a portion of the cartesian plane.
//You are given two objects as parameters:
//dim contains the dimension of the regular matrix to build:
//
//The property h is the height, or the total number of rows.
//The property w is the width, or the total number of columns.
//
//cnt contains the coordinates of the cartesian plane center:
//
//The property r is the row (0-indexed).
//The property c is the column (0-indexed).
//You have to implement a function that returns a matrix (sized accordingly to dim), with each "cell" being an array containing the [x, y] coordinates from the given central point (treating so the cells as points on the cartesian plane).
//Examples
//cartesianMatrix({h: 3, w: 4}, {r: 1, c: 1}) ➞ [
//  [[-1, 1], [0, 1], [1, 1], [2, 1]],
//  [[-1, 0], [0, 0], [1, 0], [2, 0]],
//  [[-1, -1], [0, -1], [1, -1], [2, -1]]
//]
//
//cartesianMatrix({h: 4, w: 3}, {r: 0, c: 1}) ➞ [
//  [[-1, 0], [0, 0], [1, 0]],
//  [[-1, -1], [0, -1], [1, -1]],
//  [[-1, -2], [0, -2], [1, -2]],
//  [[-1, -3], [0, -3], [1, -3]]
//]
//
//cartesianMatrix({h: 2, w: 4}, {r: 0, c: 0}) ➞ [
//  [[0, 0], [1, 0], [2, 0], [3, 0]],
//  [[0, -1], [1, -1], [2, -1], [3, -1]]
//]
//Notes
//The coordinates must be returned in the order [x-axis, y-axis].
//The coordinates of the central point (or origin), are always [0, 0]. The origin will be always be included in the matrix.
//Points placed to the right or up from the origin have positive values (i.e. [1, 2] means 1 cell to the right and 2 cells up from the origin).
//Points placed to the left or down from the origin have negative values (i.e. [-2, -1] means 2 cells to the left and 1 cell down from the origin).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(cartesianMatrix({h: 3, w: 4}, {r: 1, c: 1}), [
//  [ [ -1, 1 ], [ 0, 1 ], [ 1, 1 ], [ 2, 1 ] ],
//  [ [ -1, 0 ], [ 0, 0 ], [ 1, 0 ], [ 2, 0 ] ],
//  [ [ -1, -1 ], [ 0, -1 ], [ 1, -1 ], [ 2, -1 ] ]
//])
//​
//Test.assertSimilar(cartesianMatrix({h: 4, w: 3}, {r: 0, c: 1}), [
//  [ [ -1, 0 ], [ 0, 0 ], [ 1, 0 ] ],
//  [ [ -1, -1 ], [ 0, -1 ], [ 1, -1 ] ],
//  [ [ -1, -2 ], [ 0, -2 ], [ 1, -2 ] ],
//  [ [ -1, -3 ], [ 0, -3 ], [ 1, -3 ] ]
//])
//​
//Test.assertSimilar(cartesianMatrix({h: 5, w: 5}, {r: 2, c: 2}), [
//  [ [ -2, 2 ], [ -1, 2 ], [ 0, 2 ], [ 1, 2 ], [ 2, 2 ] ],
//  [ [ -2, 1 ], [ -1, 1 ], [ 0, 1 ], [ 1, 1 ], [ 2, 1 ] ],
//  [ [ -2, 0 ], [ -1, 0 ], [ 0, 0 ], [ 1, 0 ], [ 2, 0 ] ],
//  [ [ -2, -1 ], [ -1, -1 ], [ 0, -1 ], [ 1, -1 ], [ 2, -1 ] ],
//  [ [ -2, -2 ], [ -1, -2 ], [ 0, -2 ], [ 1, -2 ], [ 2, -2 ] ]
//])
//​
//Test.assertSimilar(cartesianMatrix({h: 6, w: 2}, {r: 4, c: 1}), [
//  [ [ -1, 4 ], [ 0, 4 ] ],
//  [ [ -1, 3 ], [ 0, 3 ] ],
//  [ [ -1, 2 ], [ 0, 2 ] ],

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sort by Frequency

//tags: numbers,sorting

//url: https://edabit.com/challenge/KQqR5MsD7oKdXZkpM

//Description:
//Create a function that takes an array of integers arr and sort the elements of the array by decreasing frequency of the elements. If two elements have the same frequency, sort them by increasing value.
//Examples
//sortFreq([2, 3, 5, 3, 7, 9, 5, 3, 7]) ➞ [3, 3, 3, 5, 5, 7, 7, 2, 9]
//
//sortFreq([1, 2, 3, 0, 5, 0, 1, 6, 8, 8, 6, 9, 1]) ➞ [1, 1, 1, 0, 0, 6, 6, 8, 8, 2, 3, 5, 9]
//
//sortFreq([4, 4, 2, 5, 1, 1, 3, 3, 2, 8]) ➞ [1, 1, 2, 2, 3, 3, 4, 4, 5, 8]
//Notes
//All input numbers will be between 0-9.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(sortFreq([2, 3, 5, 3, 7, 9, 5, 3, 7]), [3, 3, 3, 5, 5, 7, 7, 2, 9])
//Test.assertSimilar(sortFreq([1, 2, 3, 0, 5, 0, 1, 6, 8, 8, 6, 9, 1]), [1, 1, 1, 0, 0, 6, 6, 8, 8, 2, 3, 5, 9])
//Test.assertSimilar(sortFreq([5, 9, 6, 9, 6, 5, 9, 9, 4, 4]), [9, 9, 9, 9, 4, 4, 5, 5, 6, 6])
//Test.assertSimilar(sortFreq([4, 4, 2, 5, 1, 1, 3, 3, 2, 8]), [1, 1, 2, 2, 3, 3, 4, 4, 5, 8])
//Test.assertSimilar(sortFreq([4, 9, 5, 0, 7, 3, 8, 4, 9, 0]), [0, 0, 4, 4, 9, 9, 3, 5, 7, 8])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Binary Tree Nodes

//tags: algorithms,arrays,conditions,interview

//url: https://edabit.com/challenge/ycNLF4XMmQub5AeTt

//Description:
//We have two arrays N and P, where N represents the value of a node in Binary Tree, and P is the parent of N.
//N	P
//1	2
//3	2
//6	8
//9	8
//2	5
//8	5
//5	-1
//Write a function to find the node type of the node within this Binary Tree, ordered by the value of the node. Output one of the following:
//Root: If node is root node.
//Leaf: If node is leaf node.
//Inner: If node is neither root nor leaf node.
//Not exist: If node not exist.
//nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 5) ➞ "Root"
//
//nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 6) ➞ "Leaf"
//
//nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 2) ➞ "Inner"
//
//nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 10) ➞ "Not exist"
//
//Notes
//All values of N array are unique.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 1 ), "Leaf")
//Test.assertSimilar(nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 2), "Inner")
//Test.assertSimilar(nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 3), "Leaf")
//Test.assertSimilar(nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 5), "Root")
//Test.assertSimilar(nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 6), "Leaf")
//Test.assertSimilar(nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 8), "Inner")
//Test.assertSimilar(nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 9), "Leaf")
//Test.assertSimilar(nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 10), "Not exist")
//Test.assertSimilar(nodeType([6, 3, 1, 2, 5, 7, 4, 6, 8], [3, 1, 6, 1, 2, 3, 8, -1, 6], 8), "Inner")
//Test.assertSimilar(nodeType([5, 6, 8, 7, 1, 9, 4, 11, 10, 2], [8, 8, -1, 8, 7, 4, 5, 4, 1, 1], 11), "Leaf")
//Test.assertSimilar(nodeType([3, 2, 4, 9, 11, 10, 8, 5, 6, 7], [-1, 3, 3, 2, 3, 4, 4, 9, 10, 8], 3 ), "Root")
//Test.assertSimilar(nodeType([5, 6, 8, 7, 1, 9, 4, 11, 10, 2], [8, 8, -1, 8, 7, 4, 5, 4, 1, 1], 4), "Inner")
//Test.assertSimilar(nodeType([3, 2, 4, 9, 11, 10, 8, 5, 6, 7], [-1, 3, 3, 2, 3, 4, 4, 9, 10, 8], 6), "Leaf")
//Test.assertSimilar(nodeType([6, 3, 1, 2, 5, 7, 4, 6, 8], [3, 1, 6, 1, 2, 3, 8, -1, 6], 5), "Leaf")
//Test.assertSimilar(nodeType([5, 6, 8, 7, 1, 9, 4, 11, 10, 2], [8, 8, -1, 8, 7, 4, 5, 4, 1, 1], 8), "Root")
//Test.assertSimilar(nodeType([3, 2, 4, 9, 11, 10, 8, 5, 6, 7], [-1, 3, 3, 2, 3, 4, 4, 9, 10, 8], 10), "Inner")

