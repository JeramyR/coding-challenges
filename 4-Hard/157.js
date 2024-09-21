

//title: Coins Combinations

//tags: arrays,logic,numbers

//url: https://edabit.com/challenge/kJSwoYkQDFzuR3dtr

//Description:
//Given an amount of money and an array of coins denominations, create a function that counts how many different ways you can make change with the given money.
//Examples
//coinsCombinations(4, [1, 2]) ➞ 3
//// 1+1+1+1 = 4
//// 1+1+2 = 4
//// 2+2 = 4
//
//coinsCombinations(10, [5, 2, 3]) ➞ 4
//
//coinsCombinations(11, [5, 7]) ➞ 0
//Notes
//Order of coins does not matter (i.e. 1+1+2 == 2+1+1).
//You have an infinite amount of coins.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(coinsCombinations(4, [1,2]), 3)
//Test.assertEquals(coinsCombinations(10, [5,2,3]), 4)
//Test.assertEquals(coinsCombinations(11, [5,7]), 0)
//Test.assertEquals(coinsCombinations(300, [5,10,20,50,100,200,500]), 1022)
//Test.assertEquals(coinsCombinations(300, [500,5,50,100,20,200,10]), 1022)
//Test.assertEquals(coinsCombinations(301, [5,10,20,50,100,200,500]), 0)
//Test.assertEquals(coinsCombinations(199, [3,5,9,15]), 760)
//Test.assertEquals(coinsCombinations(98, [3,14,8]), 19)
//Test.assertEquals(coinsCombinations(419, [2,5,10,20,50]), 18515)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Get Groups with Students

//tags: arrays,formatting,objects

//url: https://edabit.com/challenge/2TKegjnoSQ3Xeo8CB

//Description:
//Create a function that takes two arrays: groups and students. It should return one array with groups merged with students by id. Students within groups should be ordered in the same way the studentIds were ordered.
//Examples
//getGroupsWithStudents([
//  { 
//    id: 1,
//    name: "G1",
//    studentIds: [2, 1]
//  }
//], [
//  { 
//    id: 1,
//    name: "John"
//  },
//  {
//    id: 2,
//    name: "Steve"
//  }
//]) ➞ [
//  { 
//    id: 1,
//    name: "G1",
//    students: [
//      {
//        id: 2,
//        name: "Steve"
//      },
//      { 
//        id: 1, 
//        name: "John"
//      }
//    ]
//  }
//]
//Notes
//Try doing it with an arrow function.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const objectsAreEqual = (actual, expected) => Object.keys(expected).every(
//  key => actual[key] === expected[key]
//)
//const areEqual = (actual, expected, compare) => expected.every(
//  (item, index) => compare(actual[index], item)
//)
//const sets = [
//  [
//    [
//      {
//        id: 1,
//        name: 'G1',
//        studentIds: [2, 1]
//      },
//      {
//        id: 2,
//        name: 'G2',
//        studentIds: [1]
//      }
//    ],
//    [
//      {
//        id: 1,
//        name: 'John'
//      },

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Fulcrum

//tags: arrays,loops

//url: https://edabit.com/challenge/PdgSERZzFr4LmHNdk

//Description:
//A fulcrum of an array is an integer such that all elements to the left of it and all elements to the right of it sum to the same value. Write a function that finds the fulcrum of an array.
//To illustrate:
//findFulcrum([3, 1, 5, 2, 4, 6, -1]) ➞ 2
//// Since [3, 1, 5] and [4, 6, -1] both sum to 9
//Examples
//findFulcrum([1, 2, 4, 9, 10, -10, -9, 3]) ➞ 4
//
//findFulcrum([9, 1, 9]) ➞ 1
//
//findFulcrum([7, -1, 0, -1, 1, 1, 2, 3]) ➞ 0
//
//findFulcrum([8, 8, 8, 8]) ➞ -1
//Notes
//If the fulcrum does not exist, return -1 (see example #4).
//Exclude the leftmost and rightmost elements when computing the fulcrum (it doesn't make sense to sum zero values).
//If an array has multiple fulcrums, return the one that occurs first.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(findFulcrum([1, 2, 4, 9, 10, -10, -9, 3]), 4)
//Test.assertEquals(findFulcrum([9, 1, 9]), 1)
//Test.assertEquals(findFulcrum([7, -1, 0, -1, 1, 1, 2, 3]), 0)
//Test.assertEquals(findFulcrum([8, 8, 8, 8]), -1)
//Test.assertEquals(findFulcrum([9, 3, 4, 8, 1]), -1)
//Test.assertEquals(findFulcrum([1, -1, 10, 5, -4, -1]), 10)

