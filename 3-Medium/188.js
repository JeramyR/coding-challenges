

//title: Trace of a Square Matrix

//tags: algebra,algorithms,interview,math

//url: https://edabit.com/challenge/8mu2gApwq47Gqcvf9

//Description:
//In mathematics, a matrix (plural matrices) is a rectangular array or table of numbers, symbols, or expressions, arranged in rows and columns.
//Matrix A:
//[
//  [0, 1, 0, 0],
//  [1, 1, 1, 1],
//  [0, 1, 0, 1],
//  [0, 1, 1, 5]
//]
//In mathematics, a square matrix is a matrix with the same number of rows and columns.
//In linear algebra, the trace of a square matrix A is defined to be the sum of elements on the main diagonal (from the upper left to the lower right) of A (tr(A) = 6).
//Task
//Create a function that takes a 2D array as an argument and returns a number (trace) for a square matrix and a zero otherwise.
//Examples
//getTrace([
//  [0, 1, 0, 0],
//  [1, 1, 1, 1],
//  [0, 1, 0, 1],
//  [0, 1, 1, 5]
//]) ➞ 6
//
//getTrace([
//  [0, 1, 0, 0],
//  [1, -1, 1, 1],
//  [0, 1, 0, 1],
//  [0, 1, 1, 5]
//]) ➞ 4
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(getTrace([[0, 1, 0, 0], [0, 0, 0, 1], [0, 0, 0, 0], [0, 0, 0, 0]]),  0)
//Test.assertEquals(getTrace([[1, 1], [0, 42]]),  43)
//Test.assertEquals(getTrace([[1, 1, 0, 0], [0, 0, 0, 1], [0, 0, 0, 0]]),  0)
//Test.assertEquals(getTrace([[0, 1], [0, 0], [0, 0]]),  0)
//Test.assertEquals(getTrace([[450, 1, 0, 0.789], [10000000, -450, 0, 1], [0, Math.PI, 2, -5], [0, 0, 0, 67]]),  69)
//Test.assertEquals(getTrace([[1.69, 1, 0], [10000000, 1.890, 0], [0, Math.PI, 2]]),  5.58)
//console.log("By Mariusz Najwer")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Decimal to Binary Using Stack

//tags: algorithms,data_structures

//url: https://edabit.com/challenge/6YXj5p8MaetehyDMf

//Description:
//Create a function that takes a decimal number and converts it to a binary number using Stack. The Stack is created for you.
//Examples
//toBinary(12) ➞ 1100
//
//toBinary(0) ➞ 0
//
//toBinary(101) ➞ 1100101
//Notes
//0 <= n <= 101

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const notoString = a => !RegExp('toString').test(a)
//Test.assertNotEquals(notoString(toBinary), false, "The use of toString() is denied.")
//​
//Test.assertEquals(toBinary(12), 1100)
//Test.assertEquals(toBinary(4), 100)
//Test.assertEquals(toBinary(0), 0)
//Test.assertEquals(toBinary(5), 101)
//Test.assertEquals(toBinary(6), 110)
//Test.assertEquals(toBinary(3), 11)
//Test.assertEquals(toBinary(7), 111)
//Test.assertEquals(toBinary(100), 1100100)
//Test.assertEquals(toBinary(101), 1100101)
//Test.assertEquals(toBinary(8), 1000)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Leaderboard Sort

//tags: arrays,objects,sorting

//url: https://edabit.com/challenge/nTZqZmAkLrjRx9PcK

//Description:
//Given an array of users, each defined by an object with the following properties: name, score, reputation create a function that sorts the array to form the correct leaderboard.
//The leaderboard takes into consideration the score of each user of course, but an emphasis is put on their reputation in the community, so to get the trueScore, you should add the reputation multiplied by 2 to the score.
//Once you know the trueScore of each user, sort the array according to it in descending order.
//Examples
//leaderboards([
//  { name: "a", score: 100, reputation: 20 },
//  { name: "b", score: 90, reputation: 40 },
//  { name: "c", score: 115, reputation: 30 },
//]) ➞ [
//  { name: "c", score: 115, reputation: 30 },  // trueScore = 175
//  { name: "b", score: 90, reputation: 40 },   // trueScore = 170
//  { name: "a", score: 100, reputation: 20 }   // trueScore = 140
//]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(
//  leaderboards([
//    { name: 'a', score: 100, reputation: 20 },
//    { name: 'b', score: 90, reputation: 40 },
//    { name: 'c', score: 115, reputation: 30 },
//  ]),
//  [
//    { name: 'c', score: 115, reputation: 30 },
//    { name: 'b', score: 90, reputation: 40 },
//    { name: 'a', score: 100, reputation: 20 },
//  ]
//);
//​
//Test.assertSimilar(
//  leaderboards([
//    { name: 'tkincaid0', score: 4128, reputation: 3002 },
//    { name: 'sblackater1', score: 6208, reputation: 3050 },
//    { name: 'ocallis2', score: 6883, reputation: 3812 },
//    { name: 'shoofe3', score: 4900, reputation: 174 },
//    { name: 'cbrazear4', score: 7862, reputation: 2940 },
//    { name: 'oszachnie5', score: 6217, reputation: 1772 },
//    { name: 'lingcourt6', score: 5746, reputation: 1263 },
//    { name: 'tquincey7', score: 4209, reputation: 1419 },
//    { name: 'mcapsey8', score: 6961, reputation: 2699 },
//    { name: 'cbester9', score: 4090, reputation: 3934 },

