

//title: Factorials

//tags: arrays,math

//url: https://edabit.com/challenge/B9TMed7zwbokv88eM

//Description:
//Write a function that filters out factorials from an array. A factorial is a number that can be represented in the following manner:
//n! = n * (n-1) * (n-2) * ... * 3 * 2 * 1
//Recursively, this can be represented as:
//n! = n * (n-1)!
//Examples
//filterFactorials([1, 2, 3, 4, 5, 6, 7]) ➞ [1, 2, 6]
//
//filterFactorials([1, 4, 120]) ➞ [1, 120]
//
//filterFactorials([8, 9, 10]) ➞ []
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(filterFactorials([1, 2, 3, 4, 5, 6, 7]), [1, 2, 6]);
//Test.assertSimilar(filterFactorials([1, 4, 120]), [1, 120]);
//Test.assertSimilar(filterFactorials([8, 9, 10]), []);
//Test.assertSimilar(filterFactorials([1, 8, 9, 10]), [1]);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: N Differences

//tags: arrays,loops

//url: https://edabit.com/challenge/zYhCuzcXZn9PKG6ry

//Description:
//Write a function that transforms an array into an array of its differences repeatedly until there exists only one element left. A difference is A[n+1] - A[n].
//To illustrate:
//[5, 1, 9, 3, 4, 0]
//
//[-4, 8, -6, 1, -4]
//// 1 - 5 = -4; 9 - 1 = 8; 3 - 9 = -6; etc.
//
//[12, -14, 7, -5]
//
//[-26, 21, -12]
//
//[47, -33]
//
//-80
//Examples
//nDifferences([5, 1, 9, 3, 4, 0]) ➞ -80
//
//nDifferences([1, 1, 1, 1]) ➞ 0
//
//nDifferences([5, 8, 8]) ➞ -3
//Notes
//Each array will have at least two elements.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(nDifferences([5, 1, 9, 3, 4, 0]), -80)
//Test.assertEquals(nDifferences([8, 9, 2, 5, 4, 3, 3, 1, 6]), -94)
//Test.assertEquals(nDifferences([5, 1, 9, 6, 1, 7, 3, 4]), 118)
//Test.assertEquals(nDifferences([1, 1, 1, 1]), 0)
//Test.assertEquals(nDifferences([5, 9, 7, 3]), 4)
//Test.assertEquals(nDifferences([1, 5, 3, 9, 7]), -30)
//Test.assertEquals(nDifferences([5, 8, 8]), -3)
//Test.assertEquals(nDifferences([4, 0, 0, 0, 1]), 5)
//Test.assertEquals(nDifferences([3, 5]), 2)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Tree Photography

//tags: algorithms,arrays,loops,numbers

//url: https://edabit.com/challenge/DgePuRy7ESRht5qz6

//Description:
//Heading off to the Tree Arboretum of Various Heights, I bring along my camera to snap up a few photos. Ideally, I'd want to take a picture of as many trees as possible, but the taller trees may cover up the shorter trees behind it.
//A tree is hidden if it is shorter or the same height as the tree in front.
//Given an array of tree heights, create a function which returns "left" or "right", depending on which side allows me to see as many trees as possible.
//Worked Example
//treePhotography([1, 3, 6, 5]) ➞ "left"
//// If I stand on the left, I can see trees of heights 1, 3 and 6.
//// If I stand on the right, I can see trees of heights 5 and 6.
//// Return "left" because I would see more trees.
//Examples
//treePhotography([5, 6, 5, 4]) ➞ "right"
//
//treePhotography([1, 2, 3, 3, 3, 3, 3]) ➞ "left"
//
//treePhotography([3, 1, 4, 1, 5, 9, 2, 6]) ➞ "left"
//Notes
//There will always be a best side.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [expectedParam, actualParam] = [
//  ["left", "right", "left", "left", "right", "right", "left", "right", "right", "left", "left", "left"],
//  [
//    [1, 2, 3, 6, 5],
//    [5, 6, 5, 4],
//    [1, 1, 2, 2, 2, 2, 3],
//    [1, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2],
//    [3, 3, 3, 3, 2],
//    [4, 3, 2, 3, 3, 3, 1],
//    [3, 1, 4, 5, 2, 5, 1],
//    [4, 3, 3, 4, 3, 1, 3],
//    [5, 1, 2],
//    [1, 2, 4, 1, 5, 3, 1],
//    [1, 1, 1, 4, 1, 3, 5],
//    [3, 1, 4, 1, 5, 9, 2, 6]]
//]
//for (let i in expectedParam) Test.assertEquals(treePhotography(actualParam[i]), expectedParam[i])

