

//title: I Made a Mistake 😭

//tags: arrays,strings

//url: https://edabit.com/challenge/subBMMKDh3rmYYk9B

//Description:
//I made a mistake and overwrote a JSON file with some weird data, thankfully I had no back-up and I'm too lazy to fix it so now you guys can solve it for me!
//Get the strings out of those arrays.
//Examples
//getValue([[[[[[[[[[[[[[[["Bazinga"]]]]]]]]][]]]]]]]]) ➞ "Bazinga"
//
//getValue([[[][[[[[[[["God, what is happening"]]]]]]]]]) ➞"God, what is happening"
//
//getValue([[[[[[[[[[[]]]]]]]]]]]) ➞ "What... why did you make this?"
//
//getValue([[][][][][][][][[][][[[[[[["I have no idea what i'm doing"]]]]]]]]]) ➞ 
//"I have no idea what i'm doing"
//Notes
//Notice that if there is no string, you should return a pre-defined string (see example #3).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// actual || expected
//const f = getValue;
//const tests = [
//    [f([[[[[[[[[[[["Bazinga"]]]]]]]]]]]]), "Bazinga"],
//    [f([[], [], [[[[[[], ["God what is happening..."]]]]]]]), "God what is happening..."],
//    [f([[[[[[[[[[[]]]]]]]]]]]), "What... why did you make this?"],
//    [f([[],[],[],[],[],[],[],[[],[],[[[[[[[["I have no idea what i'm doing"]]]]]]]]]]),"I have no idea what i'm doing"],
//    [f([[[[[[[[[[[[]]]]], "I'm not gonna lose."]]]]]]]), "I'm not gonna lose.", "Yeah, it can be outside of it too lmao."]
//  ];
//for (let args of tests) {
//  Test.assertEquals(...args);
//}

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Magic Square Game

//tags: algorithms,games,math,validation

//url: https://edabit.com/challenge/znm7CReZdTWaSgeed

//Description:
//There are two players, Alice and Bob, each with a 3-by-3 grid. A referee tells Alice to fill out one particular row in the grid (say the second row) by putting either a 1 or a 0 in each box, such that the sum of the numbers in that row is odd. The referee tells Bob to fill out one column in the grid (say the first column) by putting either a 1 or a 0 in each box, such that the sum of the numbers in that column is even.
//Alice and Bob win the game if Alice’s numbers give an odd sum, Bob’s give an even sum, and (most important) they’ve each written down the same number in the one square where their row and column intersect.
//Examples
//magicSquareGame([2, "100"], [1, "101"]) ➞ false
//
//magicSquareGame([2, "001"], [1, "101"]) ➞ true
//
//magicSquareGame([3, "111"], [2, "011"]) ➞ true
//
//magicSquareGame([1, "010"], [3, "101"]) ➞ false
//
//// Two arrays, Alice [row, "her choice"], Bob [column, "his choice"]
//Notes
//Look at the article in the resources tab to see the first two examples in action.
//The row of Alice is always odd, the column of Bob is always even.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(magicSquareGame([2,'100'],[1,'101']), false)
//Test.assertEquals(magicSquareGame([2,'001'],[1,'101']), true)
//Test.assertEquals(magicSquareGame([3,'111'],[2,'011']), true)
//Test.assertEquals(magicSquareGame([1,'010'],[3,'101']), false)
//Test.assertEquals(magicSquareGame([2,'111'],[3,'011']), true)
//Test.assertEquals(magicSquareGame([2,'100'],[3,'110']), false)
//Test.assertEquals(magicSquareGame([1,'001'],[1,'101']), false)
//Test.assertEquals(magicSquareGame([2,'100'],[2,'101']), true)
//Test.assertEquals(magicSquareGame([3,'010'],[1,'110']), true)
//Test.assertEquals(magicSquareGame([1,'100'],[2,'110']), false)
//Test.assertEquals(magicSquareGame([2,'111'],[3,'011']), true)
//Test.assertEquals(magicSquareGame([2,'001'],[2,'101']), true)
//Test.assertEquals(magicSquareGame([1,'100'],[2,'101']), false)
//Test.assertEquals(magicSquareGame([3,'001'],[3,'011']), true)
//Test.assertEquals(magicSquareGame([3,'111'],[1,'110']), false)
//Test.assertEquals(magicSquareGame([2,'100'],[2,'101']), true)

