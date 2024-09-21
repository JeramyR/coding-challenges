

//title: Proper Modulo Operator

//tags: math,numbers

//url: https://edabit.com/challenge/2eiEBoMFJZhE2SjHz

//Description:
//While useful, the modulo operator in JavaScript is not infallible when negative numbers are thrown into the mix. For example, -13 % 64 = -13, when the actual answer is 51. Create a function to fix this. It should also work for positive numbers.
//Examples
//mod(-13, 64) ➞ 51
//
//mod(50, 25) ➞ 0
//
//mod(-6, 3) ➞ 0
//Notes
//All test cases contain valid numbers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(mod(-13, 64), 51)
//Test.assertEquals(mod(50, 25), 0)
//Test.assertEquals(mod(-6, 3), 0)
//Test.assertNotEquals(mod(-45, 2), -1)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: Left Shift by Powers of Two

//tags: bit_operations,numbers,recursion

//url: https://edabit.com/challenge/CNimjGSPT7xmPJuvY

//Description:
//The left shift operation is similar to multiplication by powers of two, thus, the process is repetitive and can be done recursively.
//Sample calculation using the left shift operator (<<):
//10 << 3 = 10 * 2^3 = 10 * 8 = 80
//-32 << 2 = -32 * 2^2 = -32 * 4 = -128
//5 << 2 = 5 * 2^2 = 5 * 4 = 20
//Write a recursive function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.
//Examples
//shiftToLeft(5, 2) ➞ 20
//
//shiftToLeft(10, 3) ➞ 80
//
//shiftToLeft(-32, 2) ➞ -128
//
//shiftToLeft(-6, 5) ➞ -192
//
//shiftToLeft(12, 4) ➞ 192
//
//shiftToLeft(46, 6) ➞ 2944
//Notes
//There will be no negative values for the second parameter y.
//This challenge is more like recreating of the left shift operation, thus, the use of the operator directly is prohibited.
//You are expected to solve this challenge via recursion.
//An iterative version of this challenge can be found via this link.
//A collection of challenges in recursion can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const opCheck = f => !`${f}`.match(RegExp('<<', 'gm'))
//const recursive = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
//​
//Test.assertNotEquals(opCheck(shiftToLeft), false,
//    "The use of left shift operator (<<) is prohibited!")
//Test.assertNotEquals(recursive(shiftToLeft), false, "Recursion is required!")
//​
//let [numVector, resVector] = [
//  [[5, 2], [10, 3], [-32, 2], [-6, 5], [12, 4], [46, 6], [57, 0], [79, 1]],
//  [20, 80, -128, -192, 192, 2944, 57, 158]
//]
//for (let i in numVector) Test.assertEquals(shiftToLeft(...numVector[i]), resVector[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Is It a Probability Matrix?

//tags: arrays,math,numbers,validation

//url: https://edabit.com/challenge/TCCFSPy3LeLRDGstw

//Description:
//In probability theory, a probability matrix is a matrix such that:
//The matrix is a square matrix (same number of rows as columns).
//All entries are probabilities, i.e. numbers between 0 and 1.
//All rows add up to 1.
//The following is an example of a probability matrix:
//[
//  [0.5, 0.5, 0.0],
//  [0.2, 0.5, 0.3],
//  [0.1, 0.2, 0.7]
//]
//Note that though all rows add up to 1, there is no restriction on the columns, which may or may not add up to 1.
//Write a function that determines if a matrix is a probability matrix or not.
//Examples
//isProbMatrix([
//  [0.5, 0.5, 0.0],
//  [0.2, 0.5, 0.3],
//  [0.1, 0.2, 0.7]
//]) ➞ true
//
//isProbMatrix([
//  [0.5, 0.5, 0.0],
//  [0.2, 0.5, 0.3]
//]) ➞ false
//
//// Not a square matrix.
//
//isProbMatrix([
//  [2, -1],
//  [-1, 2]
//]) ➞ false
//
//// Entries not between 0 and 1.
//
//isProbMatrix([
//  [0, 1],
//  [1, 0]
//]) ➞ true
//
//isProbMatrix([
//  [0.5, 0.4],
//  [0.5, 0.6]
//]) ➞ false
//
//// Rows do not add to 1.
//Notes
//Fun fact: for most probability matrices M (for example, if M has no zero entries), the matrix powers M^n converge (as n increases) to a matrix where all rows are identical.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isProbMatrix(
//[[0.5, 0.5, 0.0],
// [0.2, 0.5, 0.3]]), 
//false, "Not a square matrix.")
//​
//Test.assertEquals(isProbMatrix(
//[[2, -1],
// [-1, 2]]), 
//false, "Entries are not probabilities.")
//​
//Test.assertEquals(isProbMatrix(
// [[0.5, 0.4],
//  [0.5, 0.6]]), 
//false, "Rows do not add to 1.")
//​
//Test.assertEquals(isProbMatrix(
// [[0, 1],
//  [1, 0]]), 
//true)
//​
//Test.assertEquals(isProbMatrix(
// [[2, 1],
//  [1, 2]]), 
//false)
//​

