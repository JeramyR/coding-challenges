

//title: Maze Escape

//tags: arrays,games,logic,loops

//url: https://edabit.com/challenge/HSprZxYCc3KxysAoK

//Description:
//Given a two-dimensional array of maze and an array of directions. Your task is to follow the given directions.
//If you can reach the endpoint before all your moves have gone, return "Finish".
//If you hit any walls or go outside the maze border, return "Dead".
//If you find yourself still in the maze after using all the moves, return "Lost".
//The maze array will look like this:
//maze = [
//  [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
//  [1, 3, 1, 0, 1, 0, 0, 0, 0, 1],
//  [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
//  [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
//  [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
//  [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
//  [1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
//  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
//  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
//  [1, 1, 1, 0, 1, 1, 1, 1, 2, 1]
//]
//
//// 0 = Safe place to walk
//// 1 = Wall
//// 2 = Start Point
//// 3 = Finish Point
//// N = North, E = East, W = West and S = South
//See the below examples for a better understanding:
//Examples
//exitMaze(maze, ["N", "E", "E"]) ➞ "Dead"
//// Hitting the wall should return "Dead".
//
//exitMaze(maze, ["N", "N", "N", "E"]) ➞ "Lost"
//// Couldn't reach the finish point.
//
//exitMaze(maze, ["N", "W", "W", "W", "N", "N", "N", "N", "W", "W", "S", "S", "S", "S", "W", "W", "N", "N", "N", "N", "N", "N", "N"]) ➞ "Finish"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//maze = [
//  [1,1,1,1,1,1,1,1,0,1],
//  [1,3,1,0,1,0,0,0,0,1],
//  [1,0,1,0,0,0,1,1,0,1],
//  [1,0,1,1,1,1,1,0,0,1],
//  [1,0,1,0,0,0,0,0,0,1],
//  [1,0,1,0,1,0,1,0,0,1],
//  [1,0,1,0,1,0,0,0,0,0],
//  [1,0,1,0,1,0,1,1,0,1],
//  [1,0,0,0,1,0,0,0,0,1],
//  [1,1,1,0,1,1,1,1,2,1]
//]
//​
//Test.assertEquals(exitMaze(maze,["N","N","N","W","W","W","N","N","W","W","S","S","S","S","W","W","N","N","N","N","N","N","N"]), "Finish")
//Test.assertEquals(exitMaze(maze,["N","N","N","N","N","N","N","N","W","W","W","S","W","W","N"]), "Lost")
//Test.assertEquals(exitMaze(maze,["N","N","N","N","N","E","E","S","S","S","S","S","S"]), "Dead")
//Test.assertEquals(exitMaze(maze,["N","W","W","W","W"]), "Dead")
//Test.assertEquals(exitMaze(maze,["N","N","N","N","N","N","N","N","N","S","S","S","S","S","S","S","S","S"]), "Lost")
//Test.assertEquals(exitMaze(maze,["N","E","E"]), "Dead")
//Test.assertEquals(exitMaze(maze,["N","W","W","W","N","N","N","N","W","W","S","S","S","S","W","W","N","N","N","N","N","N","N","S","S"]), "Finish")
//Test.assertEquals(exitMaze(maze,["N","W","W","W","N","N"]), "Lost")
//Test.assertEquals(exitMaze(maze,["N","N","N","E"]), "Lost")
//Test.assertEquals(exitMaze(maze,["N","N","N","W","W","W","N","N","W","W","S","S","S","S","S","S"]), "Dead")
//Test.assertEquals(exitMaze(maze,["N","W","W","W","N","N","N","N","W","W","S","S","S","S","W","W","N","N","N","N","N","N","N"]), "Finish")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Learn Lodash: Write Your Own Version of Partition, Split an Array in Two

//tags: arrays,functional_programming,objects

//url: https://edabit.com/challenge/3rGuRbe8nZ3mXdBRN

//Description:
//Write your own version of the lodash _.partition function. Partition receives a "collection", which can be an array or object, and a function that will check each item in the collection, it returns an array containing two arrays, one of the values that passed the check and the other with values that didn't.
//const array = [{item: true}, {item: true}, {item: false}]
//partition(array) ➞ [[{item: true}, {item: true}], [{item: false}]]
//Arguments
//collection (Array|Object): The collection to iterate over.
//[check](Function): The function invoked per iteration.
//Returns
//(Array): Returns the array containing two arrays each holding either those that passed and those that didn't.
//The function passed in can be a regular function, but it can also be what the lodash writers refer to as shorthand. Shorthand means that if a particular value is passed (e.g. a string or an array), the partition function will know to use a lodash helper function. For this challenge, you're permitted to import the helpers mentioned in the examples below.
//Examples
//const users = [
// { 'user': 'barney',  'age': 36, 'active': false },
// { 'user': 'fred',    'age': 40, 'active': true },
// { 'user': 'pebbles', 'age': 1,  'active': false }
//];
//Using just a normal function passed int.
//_.partition(users, d => d.active; }) ➞ objects for [['fred'], ['barney', 'pebbles']]
//Using the _.matches shorthand - just an object.
//_.partition(users, { 'age': 1, 'active': false })
//➞  objects for [['pebbles'], ['barney', 'fred']]
//Using _.matchesProperty shorthand - an array representing a key-value pair.
//_.partition(users, ['active', false]) 
//➞ objects for [['barney', 'pebbles'], ['fred']]
//Using _.property shorthand - just a string.
//_.partition(users, 'active')
//➞  objects for [['fred'], ['barney', 'pebbles']]
//Notes
//We've already written our own versions of these helpers property matchesProperty
//Please don't import lodash, your challenge is to write your own version. I can write complicated checking functions to prevent you from importing lodash but it makes it can cause problems in the tests. If you do cheat and just import partition, everyone will be able to see it.
//This entire series of challenges can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const _ = require("lodash")
//const vehicles = [
//  { make: "toyota", year: 2021, isUsed: false },
//  { make: "toyota", year: 2019, isUsed: true },
//  { make: "ford", year: 2012, isUsed: true },
//  { make: "ford", year: 2021, isUsed: false },
//  { make: "ford", year: 2017, isUsed: true },
//  { make: "mazda", year: 2021, isUsed: false },
//  { make: "mazda", year: 2018, isUsed: true },
//]
//​
//const vehiclesObject = {
//  stall1: { make: "toyota", year: 2021, isUsed: false },
//  stall2: { make: "toyota", year: 2019, isUsed: true },
//  stall3: { make: "ford", year: 2012, isUsed: true },
//  stall4: { make: "ford", year: 2021, isUsed: false },
//  stall5: { make: "ford", year: 2017, isUsed: true },
//  stall6: { make: "mazda", year: 2021, isUsed: false },
//  stall7: { make: "mazda", year: 2018, isUsed: true },
//}
//​
//Test.assertSimilar(
//  _.partition(vehicles, (d) => d.make === "toyota"),
//  partition(vehicles, (d) => d.make === "toyota")
//)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sort Positives, Keep Negatives

//tags: algorithms,control_flow,interview,loops,sorting

//url: https://edabit.com/challenge/PXdBA2Qoahd2xhNT5

//Description:
//Write a function that sorts the positive numbers in ascending order, and keeps the negative numbers untouched.
//Examples
//posNegSort([6, 3, -2, 5, -8, 2, -2]) ➞ [2, 3, -2, 5, -8, 6, -2]
//
//posNegSort([6, 5, 4, -1, 3, 2, -1, 1]) ➞ [1, 2, 3, -1, 4, 5, -1, 6]
//
//posNegSort([-5, -5, -5, -5, 7, -5]) ➞ [-5, -5, -5, -5, 7, -5]
//
//posNegSort([]) ➞ []
//Notes
//If given an empty array, you should return an empty array.
//Integers will always be either positive or negative (0 isn't included in the tests).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(posNegSort([6, 3, -2, 5, -8, 2, -2]), [2, 3, -2, 5, -8, 6, -2])
//Test.assertSimilar(posNegSort([6, 5, 4, -1, 3, 2, -1, 1]), [1, 2, 3, -1, 4, 5, -1, 6])
//Test.assertSimilar(posNegSort([-5, -5, -5, -5, 7, -5]), [-5, -5, -5, -5, 7, -5])
//Test.assertSimilar(posNegSort([-5, -5, -5, -5, -4, -5]), [-5, -5, -5, -5, -4, -5])
//Test.assertSimilar(posNegSort([-5, 4, -8, 3, -1, 2, 1, -7]), [-5, 1, -8, 2, -1, 3, 4, -7])
//Test.assertSimilar(posNegSort([-5, 4, 3]), [-5, 3, 4])
//Test.assertSimilar(posNegSort([]), [])

