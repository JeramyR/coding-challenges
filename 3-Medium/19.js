

//title: RegEx: Character Classes XII ⁠- \t

//tags: regex

//url: https://edabit.com/challenge/w2abzEMHE7SFLQzDq

//Description:
//You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.
//Here are a list of the characters classes in JavaScript:
//., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
//We have the \t and \v character classes that match any tabs in a string. But more specifically \t is used to match horizontal tabs while \v matches vertical tabs. Vertical tabs were once a thing but are rarely used anymore. We generally use horizontal tabs which are produced by the tab key on our keyboards.
//Find how many tabs with one literal whitespace immediately following the tab are in a string.
//Notes
//Not all whitespaces are the same, however, \s will match any whitespace.
//See Resources for help.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const str = `What 
//about 
//me?  `
//​
//const validate = (REGEXP) => {
//   if(!/\\t/.test(String(REGEXP))) return () => "invalid" 
//   return function testReg(str) {
//     return str.match(REGEXP).length
//   }
//}
//​
//const testExp = validate(REGEXP)
//​
//Test.assertNotEquals(testExp(str), "invalid", "You are required to use a \\t character class in your expression.")
//Test.assertEquals(testExp(str), 1, "There is only one LITERAL white space in this string.") 
//​
//// Credit goes to DeltaTango and Alnitak from SO

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Finding Adjacent Nodes

//tags: algorithms,arrays,data_structures,math,validation

//url: https://edabit.com/challenge/N7PGFudDcNh5aueS3

//Description:
//A graph is a set of nodes and edges that connect those nodes.
//
//There are two types of graphs; directed and undirected. In an undirected graph, the edges between nodes have no particular direction (like a two-way street) whereas in a directed graph, each edge has a direction associated with it (like a one-way street).
//For two nodes in a graph to be considered adjacent to one another, there must be an edge between them. In the example given above, nodes 0 and 1 are adjacent, but nodes 0 and 2 are not.
//We can encode graphs using an adjacency matrix. An adjacency matrix for a graph with "n" nodes is an "n * n" matrix where the entry at row "i" and column "j" is a 0 if nodes "i" and "j" are not adjacent, and 1 if nodes "i" and "j" are adjacent.
//For the example above, the adjacency matrix would be as follows:
//[
//  [ 0, 1, 0, 0 ],
//  [ 1, 0, 1, 1 ],
//  [ 0, 1, 0, 1 ],
//  [ 0, 1, 1, 0 ]
//]
//A one indicates that a connection is true and a zero indicates a connection is false.
//Here is how the above model might be written out:
//On the first row, node 0 does not connect to itself, but it does connect to node 1. It does not connect to node 2 or node 3. The row is written as 0, 1, 0, 0.
//On the second row, node 1 connects to node 0, node 2 and node 3, but it does not connect to itself. The row is written as 1, 0, 1, 1.
//On the third row, node 2 does not connect to node 0, but it does connect to node 1, does not connect to itself, and it does connect to node 3. The row is written as 0, 1, 0, 1
//On the fourth row, node 3 does not connect to node 0, but it does connect to node 1 and node 2. It does not connect to itself. The row is written as 0, 1, 1, 0.
//Your task is to determine if two nodes are adjacent in an undirected graph when given the adjacency matrix and the two nodes.
//Examples
//
//Adjacency Matrix:
//[
//  [ 0, 1, 0, 0 ],
//  [ 1, 0, 1, 1 ],
//  [ 0, 1, 0, 1 ],
//  [ 0, 1, 1, 0 ]
//]
//Nodes 0,1 should return true.
//Nodes 0,2 should return false.
//
//[
//  [ 0, 1, 0, 1, 1 ],
//  [ 1, 0, 1, 0, 0 ],
//  [ 0, 1, 0, 1, 0 ],
//  [ 1, 0, 1, 0, 1 ],
//  [ 1, 0, 0, 1, 0 ]
//]
//Nodes 0,3 should return true.
//Nodes 1,4 should return false.
//Notes
//Graphs may have between 0 and 25,000 nodes.
//Time Limit: 100 milliseconds.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const matrix1 = [[0,1,0,0],[1,0,1,1],[0,1,0,1],[0,1,1,0]]
//Test.assertEquals(isAdjacent(matrix1, 0, 1), true)
//Test.assertEquals(isAdjacent(matrix1, 0, 2), false)
//Test.assertEquals(isAdjacent(matrix1, 2, 1), true)
//​
//const matrix2 = [[0,1,0,1,1], [1,0,1,0,0],[0,1,0,1,0],[1,0,1,0,1],[1,0,0,1,0]]
//Test.assertEquals(isAdjacent(matrix2, 0, 3), true)
//Test.assertEquals(isAdjacent(matrix2, 1, 4), false)
//Test.assertEquals(isAdjacent(matrix2, 3, 2), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Count Ones in Binary Representation of Integer

//tags: formatting,numbers

//url: https://edabit.com/challenge/KcMmQE3bhxvfiYquQ

//Description:
//Count the amount of ones in the binary representation of an integer. For example, since 12 is 1100 in binary, the return value should be 2.
//Examples
//countOnes(0) ➞ 0
//
//countOnes(100) ➞ 3
//
//countOnes(999) ➞ 8
//Notes
//The input will always be a valid integer (number).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(countOnes(12), 2)
//Test.assertEquals(countOnes(0), 0)
//Test.assertEquals(countOnes(100), 3)
//Test.assertEquals(countOnes(101), 4)
//Test.assertEquals(countOnes(999), 8)
//Test.assertEquals(countOnes(1e9), 13)
//Test.assertEquals(countOnes(123456789), 16)
//Test.assertEquals(countOnes(1234567890), 12)

