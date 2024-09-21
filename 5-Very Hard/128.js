

//title: Diagonal Rug

//tags: arrays,loops

//url: https://edabit.com/challenge/afxdcvEi4Ra4fPLoQ

//Description:
//Write a function that takes in size and direction and generates a diagonal rug.
//The size is the n parameter, and all rugs are square n x n. The direction is whether the diagonal part begins on the left or the right side.
//Examples
//generateRug(4, "left") ➞ [
//  [0, 1, 2, 3],
//  [1, 0, 1, 2],
//  [2, 1, 0, 1],
//  [3, 2, 1, 0]
//]
//
//generateRug(5, "right") ➞ [
//  [4, 3, 2, 1, 0],
//  [3, 2, 1, 0, 1],
//  [2, 1, 0, 1, 2],
//  [1, 0, 1, 2, 3],
//  [0, 1, 2, 3, 4]
//]
//
//generateRug(1, "left") ➞ [
//  [0]
//]
//
//generateRug(2, "right") ➞ [
//  [1, 0],
//  [0, 1]
//]
//Notes
//n > 0
//A 1 x 1 rug is trivially [[0]] (same for left and right).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(generateRug(4, "left"),  
//[[0, 1, 2, 3], 
//[1, 0, 1, 2], 
//[2, 1, 0, 1], 
//[3, 2, 1, 0]])
//​
//Test.assertSimilar(generateRug(5, "right"),
//[[4, 3, 2, 1, 0], 
//[3, 2, 1, 0, 1], 
//[2, 1, 0, 1, 2], 
//[1, 0, 1, 2, 3], 
//[0, 1, 2, 3, 4]])
//​
//Test.assertSimilar(generateRug(6, "left"),
//[[0, 1, 2, 3, 4, 5], 
//[1, 0, 1, 2, 3, 4], 
//[2, 1, 0, 1, 2, 3], 
//[3, 2, 1, 0, 1, 2], 
//[4, 3, 2, 1, 0, 1], 
//[5, 4, 3, 2, 1, 0]])
//​
//Test.assertSimilar(generateRug(1, "left"), 
//[[0]])
//​
//Test.assertSimilar(generateRug(2, "right"), 

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Atbash Cipher

//tags: cryptography,formatting,strings

//url: https://edabit.com/challenge/xkBFTcHuJTXmrLwjw

//Description:
//The Atbash cipher is an encryption method in which each letter of a word is replaced with its "mirror" letter in the alphabet: A <=> Z; B <=> Y; C <=> X; etc.
//Create a function that takes a string and applies the Atbash cipher to it.
//Examples
//atbash("apple") ➞ "zkkov"
//
//atbash("Hello world!") ➞ "Svool dliow!"
//
//atbash("Christmas is the 25th of December") ➞ "Xsirhgnzh rh gsv 25gs lu Wvxvnyvi"
//Notes
//Capitalisation should be retained.
//Non-alphabetic characters should not be altered.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(atbash("abcdefghijklmnopqrstuvwxyz"), "zyxwvutsrqponmlkjihgfedcba")
//Test.assertEquals(atbash("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "ZYXWVUTSRQPONMLKJIHGFEDCBA")
//Test.assertEquals(atbash("The word 'atbash' derives from the the first and last 2 letters of the Hebrew alphabet."), "Gsv dliw 'zgyzhs' wvirevh uiln gsv gsv urihg zmw ozhg 2 ovggvih lu gsv Svyivd zokszyvg.")
//Test.assertEquals(atbash("Vmxibkgrlm zmw wvxibkgrlm ziv rwvmgrxzo uli gsv Zgyzhs xrksvi."),"Encryption and decryption are identical for the Atbash cipher.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Football Tournament Scores

//tags: data_structures,formatting,objects,sorting

//url: https://edabit.com/challenge/JunxyznafDQA8Yr38

//Description:
//Four football teams face each other in a tournament and you must determine the final classification. Depending on the match result, a team gets a certain amount of points:
//A win is worth 3 points.
//A draw is worth 1 point.
//A defeat is worth 0 points.
//Each team faces another once, for a total of six played games. For each game the result is provided with the following notation:
//"Team X - X Team"
//(with X being the number of goals scored by both teams)
//"A 0 - 1 B" ➞ B wins and gets 3 points, A lose and gets 0 points
//"C 2 - 2 D" ➞ It's a draw, both C and D get 1 point
//At the end of the tournament, points are counted for each team. If two or more teams have the same number of points, two further criteria are applied to determine who gets the best placement, in the order:
//The greater number of goals scored.
//The greater goals difference (goals scored minus goals conceded).
//Given an array arr containing strings with the results of the six played games, you have to implement a function that returns an array containing four arrays, one for each team, in the following notation:
//[Team, PT, GS, GD]
//Team: A string, name of the team.
//PT: An integer, points obtained.
//GS: An integer, the sum of scored goals.
//GD: An integer, scored goals minus conceded goals (can be negative).
//The main array containing the teams' info must be ordered in such a way as to present the correct placement of each team as if it were a summary of the final classification and performance.
//Examples
//tournamentScores(["A 0 - 1 B", "C 2 - 0 D", "B 2 - 2 C", "D 3 - 1 A", "A 2 - 2 C", "B 2 - 0 D"]) ➞ [ [ "B", 7, 5, 3 ], [ "C", 5, 6, 2 ], [ "D", 3, 3, -2 ], [ "A", 1, 3, -3 ] ]
//// Final order is B, C, D, A. All teams have different points, so that a simple descendant sort by points obtained is enough.
//
//tournamentScores([["A 4 - 0 B", "C 2 - 1 D", "B 1 - 0 C", "D 3 - 2 A", "A 1 - 3 C", "B 2 - 1 D"]) ➞ [ [ "C", 6, 5, 2 ], [ "B", 6, 3, -2 ], [ "A", 3, 7, 1 ], [ "D", 3, 5, -1 ] ]
//// Final order is C, B, A, D (C and B have same points, but C has more scored goals than B; A and D have same points but A has more scored goals than D).
//
//tournamentScores([["A 2 - 1 B", "C 3 - 0 D", "B 1 - 1 C", "D 1 - 0 A", "A 3 - 0 C", "B 2 - 4 D"]) ➞ [ "A", 6, 5, 3 ], [ "D", 6, 5, 0 ], [ "C", 4, 4, 0 ], [ "B", 1, 4, -3 ]]
//// Final order is A, D, C, B (A and D have same points and same number of scored goals, but A has a greater goals difference than D).
//Notes
//For the exercise scope, every given case is working with the given set of instructions, despite in real life football when teams share points, scored goals and goal difference, other criteria are used to determine the placement (sometimes even a coin toss!).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(tournamentScores(["A 0 - 1 B", "C 2 - 0 D", "B 2 - 2 C", "D 3 - 1 A", "A 2 - 2 C", "B 2 - 0 D"]), [["B", 7, 5, 3], ["C", 5, 6, 2], ["D", 3, 3, -2], ["A", 1, 3, -3]], "Example #1");
//Test.assertSimilar(tournamentScores(["A 0 - 0 B", "C 3 - 5 D", "B 1 - 0 C", "D 1 - 1 A", "A 2 - 2 C", "B 1 - 0 D"]), [["B", 7, 2, 2], ["D", 4, 6, 1], ["A", 3, 3, 0], ["C", 1, 5, -3]]);
//Test.assertSimilar(tournamentScores(["A 4 - 0 B", "C 2 - 1 D", "B 1 - 0 C", "D 3 - 2 A", "A 1 - 3 C", "B 2 - 1 D"]), [["C", 6, 5, 2], ["B", 6, 3, -2], ["A", 3, 7, 1], ["D", 3, 5, -1]], "Example #2");
//Test.assertSimilar(tournamentScores(["A 3 - 3 B", "C 0 - 6 D", "B 4 - 2 C", "D 0 - 1 A", "A 1 - 2 C", "B 2 - 1 D"]), [["B", 7, 9, 3], ["A", 4, 5, 0], ["D", 3, 7, 4], ["C", 3, 4, -7]]);
//Test.assertSimilar(tournamentScores(["A 2 - 1 B", "C 3 - 0 D", "B 1 - 1 C", "D 1 - 0 A", "A 3 - 0 C", "B 2 - 4 D"]), [["A", 6, 5, 3], ["D", 6, 5, 0], ["C", 4, 4, 0], ["B", 1, 4, -3]], "Example #3");
//Test.assertSimilar(tournamentScores(["A 0 - 1 B", "C 2 - 0 D", "B 0 - 0 C", "D 0 - 1 A", "A 0 - 2 C", "B 3 - 1 D"]), [["C", 7, 4, 4], ["B", 7, 4, 3], ["A", 3, 1, -2], ["D", 0, 1, -5]]);

