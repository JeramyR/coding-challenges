

//title: All Subsets that Add to a Value

//tags: arrays,higher_order_functions,sorting

//url: https://edabit.com/challenge/5B5bqA9pFwCobWXMH

//Description:
//Create a function that returns all subarrays in an array that sum to a particular value. Return the subarrays in the following order:
//First by ascending length.
//Second by comparing element-by-element, starting from the leftmost one. Put the array with the smaller element first in the pairwise comparison.
//The following example will illustrate:
//getSubsets([-3, -2, -1, 0, 1, 2, 3], 2)
//[ // All the subsets below sum to 2.
//  [2],
//  [-1, 3],
//  [0, 2], // Same length: -1 < 0, so [-1, 3] goes before [0, 2]
//  [-3, 2, 3],
//  [-2, 1, 3],
//  [-1, 0, 3],
//  [-1, 1, 2],
//  [-3, 0, 2, 3],
//  [-2, -1, 2, 3],
//  [-2, 0, 1, 3], // Same length + same first element: -1 < 0, so [-2, -1, 2, 3] goes before [-2, 0, 1, 3]
//  [-1, 0, 1, 2],
//  [-3, -1, 1, 2, 3],
//  [-2, -1, 0, 2, 3],
//  [-3, -1, 0, 1, 2, 3]
//]
//Examples
//getSubsets([-1, 0, 1, 2], 2) ➞ [[2], [0, 2], [-1, 1, 2], [-1, 0, 1, 2]]
//
//getSubsets([-1, 0, 1, 2], 3) ➞ [[1, 2], [0, 1, 2]]
//
//getSubsets([1, 2, 3, 4], 5) ➞ [[1, 4], [2, 3]]
//
//getSubsets([-1, 0, 1, 2], 4) ➞ []
//Notes
//Arrays will have unique numbers.
//Return an empty array if there does not a exist a subset whose numbers sum to that value (see fourth example).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(getSubsets([-1, 0, 1, 2], 2), [[2], [0, 2], [-1, 1, 2], [-1, 0, 1, 2]])
//Test.assertSimilar(getSubsets([-1, 0, 1, 2], 3), [[1, 2], [0, 1, 2]])
//Test.assertSimilar(getSubsets([1, 2, 3, 4], 5), [[1, 4], [2, 3]])
//Test.assertSimilar(getSubsets([-1, 0, 1, 2], 4), [])
//Test.assertSimilar(getSubsets([1, 2, 3, 4, 5, 6], 6), [[6], [1, 5], [2, 4], [1, 2, 3]])
//Test.assertSimilar(getSubsets([-3, -2, -1, 0, 1, 2, 3], 2),
//[[2], 
//[-1, 3], 
//[0, 2], 
//[-3, 2, 3], 
//[-2, 1, 3], 
//[-1, 0, 3],
//[-1, 1, 2], 
//[-3, 0, 2, 3], 
//[-2, -1, 2, 3], 
//[-2, 0, 1, 3], 
//[-1, 0, 1, 2], 
//[-3, -1, 1, 2, 3], 
//[-2, -1, 0, 2, 3], 
//[-3, -1, 0, 1, 2, 3]])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Eat Chocolates

//tags: algorithms,logic,regex,strings

//url: https://edabit.com/challenge/nqNkTkNKcwBH6geSX

//Description:
//Arun recently started eating chocolates. The shopkeeper tells Arun that for every three chocolates Arun eats, he will give him one chocolate in exchange for three chocolate wrappers. Now, Arun is confused about how many chocolates he can eat.
//Given the total money Arun has and the cost of one chocolate, help him figure out how many chocolates he can eat.
//Examples
//countChocolates("4$", "1$") ➞ 5
//// Arun eats three chocolates and purchases one more
//// chocolate from Bitu in those three wrappers. Now he
//// eats those two chocolates and hence 3 + 2 = 5.
//
//countChocolates("55   $", "5$") ➞ 16
//
//countChocolates("I have 68$", "2$")  ➞ 50
//
//countChocolates("I got -68$ from my mom ", "2$")  ➞ "Invalid Input"
//// Because -68 is a negative number and money can't be negative.
//Notes
//Figure out the invalid inputs and take care of them.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(countChocolates("Arun has 2074$", "One chocolate costs 2$"), 1555)
//Test.assertEquals(countChocolates("Arun has got 22$", "One chocolate costs 2$"), 16)
//Test.assertEquals(countChocolates("36$", "3 $"), 17)
//Test.assertEquals(countChocolates("I have 4 dollars", "1   $"), 5)
//Test.assertEquals(countChocolates("28$", "2$"), 20)
//Test.assertEquals(countChocolates("0$", "0$"), "Invalid Input")
//Test.assertEquals(countChocolates("8$", "-2$"), "Invalid Input")
//​
//// Author: Arun Suryan

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Road Navigation

//tags: algorithms,data_structures

//url: https://edabit.com/challenge/qQu4kxTEHapogmCgE

//Description:
//Road systems can be imagined as a graph of intersections connected by lines. The advantage of this is it makes it easier to find the shortest path between any two intersections.
//Task
//Write a function that takes as arguments:
//A graph of the road system
//The starting intersection (node)
//The ending intersection (node)
//And returns an object containing information about the shortest path.
//Format of the road graph
//The road graph follows the JSON graph specification linked in the Resources tab. As an example, this is what one road graph could look like (in JSON):
//{
//  "graph": {
//    "directed": false,
//    "nodes": [
//      { "id": 0 },
//      { "id": 1 },
//      { "id": 2 },
//       { "id": 3 }
//    ],
//    "edges": [
//      {
//        "source": 0,
//        "target": 1,
//        "metadata": {
//          "distance": 5
//        }
//      },
//      {
//        "source": 1,
//        "target": 3,
//        "metadata": {
//          "distance": 9
//        }
//      },
//      {
//        "source": 3,
//        "target": 2,
//        "metadata": {
//          "distance": 6
//        }
//      },
//      {
//        "source": 2,
//        "target": 4,
//        "metadata": {
//          "distance": 3
//        }
//      },
//      {
//        "source": 4,
//        "target": 3,
//        "metadata": {
//          "distance": 8
//        },
//      },
//      {
//       "source": 4,
//       "target": 0,
//       "metadata": {
//         "distance": 2
//       }
//     }
//    ]
//  }
//}
//Additionally, all edges are two way roads (undirected), so you don't need to worry about that. Which node is in source and which is in target does not matter. Edges may contain the property label, which is just a street name and not necessary for you to use.
//And remember, the goal is to minimize the sum of all the metadata.distance properties of edges used.
//Format of return value
//The return value should be an object with properties distance and path.
//distance should be the number that is the total sum of the distance metadata on each edge used.
//path should be an array of numbers, where each number is the id of a node used along the path from the start to the end.
//For example, if the shortest path from node 1 to node id 2 was going from node 1 to node 3 to node 2, then the result should be [1, 3, 2]. You must include the starting and ending nodes in the path.
//If two paths have the same distance, it does not matter which one you return (which won't happen in the tests).
//Example
//In the example road graph, if I asked you to find the path from node id 2 to node id 0, the function call would be
//navigate(roads, 2, 0) // Where roads is the example graph structure
//And you should return
//{
//  "distance": 5,
//  "path": [ 2, 4, 0 ]
//}
//Notes
//If two paths have the same distance, it doesn't matter which one you return (which won't happen in the tests).
//Make sure to include the starting and ending nodes in the path.
//The order of the path array does matter.
//Distance between 2 nodes is located in the metadata.distance property of the edge connecting them.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const graph = JSON.parse(`
//{
//  "directed": false,
//  "nodes": [
//    { "id": 0 },
//    { "id": 1 },
//    { "id": 2 },
//    { "id": 3 },
//    { "id": 4 },
//    { "id": 5 },
//    { "id": 6 },
//    { "id": 7 },
//    { "id": 8 },
//    { "id": 9 }
//  ],
//  "edges": [
//    {
//      "source": 1,
//      "target": 6,
//      "label": "Oak Street",
//      "metadata": {
//        "distance": 5
//      }
//    },
//    {

