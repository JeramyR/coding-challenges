

//title: Regex Series: Even Number?

//tags: regex,strings,validation

//url: https://edabit.com/challenge/pQh6uEM2Dp3BjAyzS

//Description:
//Write a regular expression that matches only an even number. Numbers will be presented as strings.
//Examples
//"2341" ➞ false
//
//"132" ➞ true
//
//"29" ➞ false
//
//"5578" ➞ true
//Notes
//This challenge is designed for RegEx only.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//function validate(num) {
//  return x.test(num); 
//}
//​
//describe("Deterministic Tests", function() {
//  Test.expect(!validate("2341"), "2341 is odd.")
//  Test.expect(validate("132"), "132 is even.")
//  Test.expect(!validate("29"), "29 is odd.")
//  Test.expect(validate("5578"), "5578 is even.")
//})
//​
//describe("Randomized Tests: Passing", function() {
//  for (let i = 0; i < 5; i++) {
//    let x = Math.ceil(Math.random()*7000)*2; 
//    Test.expect(validate(x.toString()), `${x} is even.`);
//  }
//})
//​
//describe("Randomized Tests: Failing", function() {
//  for (let i = 0; i < 5; i++) {
//    let x = Math.ceil(Math.random()*7000)*2 + 1; 
//    Test.expect(!validate(x.toString()), `${x} is odd.`);
//  }
//})

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Largest Numbers in a Group of Arrays

//tags: arrays,loops,numbers,sorting

//url: https://edabit.com/challenge/h7LTMAFeNz79rXB2Y

//Description:
//Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
//Examples
//findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
//
//findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]) ➞ [-34, -2, 7]
//
//findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]) ➞ [0.7634, 9.32, 9]
//Notes
//Watch out for negative integers (numbers).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]), [7, 90, 2])
//Test.assertSimilar(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]), [0.7634, 9.32, 9])
//Test.assertSimilar(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]), [-34, -2, 7])
//Test.assertSimilar(findLargestNums([[0.34, -5, 1.34], [-6.432, -1.762, -1.99], [32, 65, -6]]), [1.34, -1.762, 65])
//Test.assertSimilar(findLargestNums([[0, 0, 0, 0], [3, 3, 3, 3], [-2, -2]]), [ 0, 3, -2 ])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Scrabble Hand

//tags: games,loops,math,objects

//url: https://edabit.com/challenge/i6YqzHcSiPiEQKjeX

//Description:
//Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.
//Here's an example hand:
//[
//  { tile: "N", score: 1 },
//  { tile: "K", score: 5 },
//  { tile: "Z", score: 10 },
//  { tile: "X", score: 8 },
//  { tile: "D", score: 2 },
//  { tile: "A", score: 1 },
//  { tile: "E", score: 1 }
//]
//The players maximumScore from playing all these tiles would be 1 + 5 + 10 + 8 + 2 + 1 + 1, or 28.
//Examples
//maximumScore([
//  { tile: "N", score: 1 },
//  { tile: "K", score: 5 },
//  { tile: "Z", score: 10 },
//  { tile: "X", score: 8 },
//  { tile: "D", score: 2 },
//  { tile: "A", score: 1 },
//  { tile: "E", score: 1 }
//]) ➞ 28
//
//maximumScore([
//  { tile: "B", score: 2 },
//  { tile: "V", score: 4 },
//  { tile: "F", score: 4 },
//  { tile: "U", score: 1 },
//  { tile: "D", score: 2 },
//  { tile: "O", score: 1 },
//  { tile: "U", score: 1 }
//]) ➞ 15
//Notes
//Here, each tile is represented as an object with two keys: tile and score.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(maximumScore([{tile: 'N', score: 1}, {tile: 'K', score: 5},  {tile: 'Z', score: 10}, {tile: 'X', score: 8}, {tile: 'D', score: 2}, {tile: 'A', score: 1}, {tile: 'E', score: 1}]), 28);
//Test.assertEquals(maximumScore([{tile: 'B', score: 2}, {tile: 'V', score: 4},  {tile: 'F', score: 4}, {tile: 'U', score: 1}, {tile: 'D', score: 2}, {tile: 'O', score: 1}, {tile: 'U', score: 1}]), 15);
//Test.assertEquals(maximumScore([{tile: 'M', score: 3}, {tile: 'Q', score: 10},  {tile: 'O', score: 1}, {tile: 'E', score: 1}, {tile: 'E', score: 1}, {tile: 'I', score: 1}, {tile: 'A', score: 1}]), 18);
//Test.assertEquals(maximumScore([{tile: 'A', score: 1}, {tile: 'E', score: 1},  {tile: 'O', score: 1}, {tile: 'E', score: 1}, {tile: 'E', score: 1}, {tile: 'I', score: 1}, {tile: 'A', score: 1}]), 7);

