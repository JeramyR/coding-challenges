

//title: Ulam Sequence

//tags: algebra,logic,loops,numbers

//url: https://edabit.com/challenge/CPqdqJ2YidQCy44PR

//Description:
//The Ulam sequence starts with:
//ulam = [1, 2]
//The next number in the sequence is the smallest positive number that is equal to the sum of 2 distinct numbers (that are already in the sequence) exactly one way. Trivially, this is 3, as there are only 2 numbers in the starting sequence.
//ulam = [1, 2, 3]
//The next number is 4, which is the sum of 3+1. 4 is also 2+2, but this equation does not count, as the 2 addends have to be distinct.
//ulam = [1, 2, 3, 4]
//The next number cannot be 5, as 5 = 1 + 4, but also 5 = 2 + 3. There should only be one way to make an Ulam number from 2 distinct addends found in the sequence. The next number is 6 (2+4). There are 2 ways to make 7 (1+6 or 3+4), so the next is 8 (2+6). And so on.
//ulam = [1, 2, 3, 4, 6, 8, 11, 13, 16, 18, 26, 28, 36, 38, 47, 48, 53, …]
//Create a function that takes a number n and returns the nth number in the Ulam sequence.
//Examples
//ulam(4) ➞ 4
//
//ulam(9) ➞ 16
//
//ulam(206) ➞ 1856
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(ulam(4), 4)
//Test.assertEquals(ulam(9), 16)
//Test.assertEquals(ulam(38), 180)
//Test.assertEquals(ulam(99), 688)
//Test.assertEquals(ulam(206), 1856)
//Test.assertEquals(ulam(495), 5597)
//Test.assertEquals(ulam(577), 6782)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Do Classes Dream of Electric Ship?

//tags: arrays,classes,data_structures,games

//url: https://edabit.com/challenge/pbeqf95r3H4PRQKJr

//Description:
//In this challenge, you have to build a Class that will store and manipulate the data of a simplified clone of Battleship, the popular strategy game.
//The game is played on a square board, 5x5 sized. The rows of the grid are identified by uppercase letters from A to E (from top to bottom), and the columns are identified by numbers from 1 to 5 (from left to right).
//Rules of the Game
//There are two types of ship: the Patrol and the Cruiser. The Patrol occupies a single cell, the Cruiser occupies two cells, horizontally or vertically.
//Three Patrols and three Cruisers will be placed randomly in the grid, without ships adjacent in rows and columns (see the notes below).
//The user calls six different cells, trying to guess if there's a Patrol or a Cruiser in it.
//Hits and misses are recorded on the board. For every hit Patrol or Cruiser, a point is gained, and if a Cruiser is sunk, two additional points are gained.
//Class "Battleship"
//Each instance in the Tests tab will be declared with two variable parameters so the constructor has to be initialized with:
//scheme is the link to an array containing 9 strings being the coordinates indicating where the ships are placed in the grid.
//input is the link to an array containing 6 strings being the guesses made by the user.
//What do you have to implement?
//The Tests will verify the existence and the correctness of the data through an instance that will use the Battleship Class created by you, calling its four different methods:
//board() will return the final state of the board, based on the placement of the ship and the results of the user guesses, as a matrix of 5x5 size. To represent the graphic of the game, you will use four different characters:
//
//○ = a blank space on the board.
//● = a space occupied by a ship.
//☼ = a miss (wrong guess).
//☀ = a hit (a correct guess).
//
//hits() will return the total number of hits made by the user (correct guesses), either on Patrols or on Cruisers.
//
//sunk() will return the total number of sunk Cruisers (two adjacent guesses, in horizontal or vertical).
//points() will return the total number of points gained by the user (1 for every hit, 2 for every sunk Cruiser).
//Examples
//// scheme =
//["A1", "C1", "B2",
//"B3", "D2", "E2",
//"E4", "E5", "A5"]
//
//// input = ["A1", "B2", "C3", "D4", "E5", "E4"]
//
//battleship.board() ➞ [
//  [☀, ○, ○, ○, ●],
//  [○, ☀, ●, ○, ○],
//  [●, ○, ☼, ○, ○],
//  [○, ●, ○, ☼, ○],
//  [○, ●, ○, ☀, ☀]
//]
//
//battleship.hits() ➞ 4
//// Total hits.
//
//battleship.sunk() ➞ 1
//// Sunk Cruisers, not Patrols.
//
//battleship.points() ➞ 6
//// Hits + additional points given by Sunk Cruisers.
//Notes
//If two cruisers are in the same row or the same column, there will be a blank cell between them, so that it will be possible to treat them as different ships.
//The board is not given, you have to build it.
//In the Examples above, the symbols of the board are not between quotation marks for readability, but they are strings. The set of characters used for the challenge is already in the Code tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const scheme1 = ["A1", "C1", "B2", "B3", "D2", "E2", "E4", "E5", "A5"],
//      scheme2 = ["A1", "B1", "D1", "E1", "A3", "A4", "D3", "E4", "D5"],
//      scheme3 = ["A2", "A4", "C1", "C2", "E3", "C4", "C5", "D3", "E5"],
//      input1 = ["A1", "B2", "C3", "D4", "E5", "E4"],
//      input2 = ["A2", "B4", "C1", "D3", "E5", "A5"],
//      input3 = ["A1", "B1", "D1", "E1", "A3", "A4"];
//​
//let battleship1 = new Battleship(scheme1, input1);
//Test.assertSimilar(battleship1.board(), [
//  [ '☀', '○', '○', '○', '●' ],
//  [ '○', '☀', '●', '○', '○' ],
//  [ '●', '○', '☼', '○', '○' ],
//  [ '○', '●', '○', '☼', '○' ],
//  [ '○', '●', '○', '☀', '☀' ]
//], "Instructions/Example");
//Test.assertEquals(battleship1.hits(), 4, "Instructions/Example");
//Test.assertEquals(battleship1.sunk(), 1, "Instructions/Example");
//Test.assertEquals(battleship1.points(), 6, "Instructions/Example");
//​
//let battleship2 = new Battleship(scheme1, input2);
//Test.assertSimilar(battleship2.board(), [
//  [ '●', '☼', '○', '○', '☀' ],
//  [ '○', '●', '●', '☼', '○' ],
//  [ '☀', '○', '○', '○', '○' ],
//  [ '○', '●', '☼', '○', '○' ],

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Array`s Permutations

//tags: arrays,functional_programming,recursion

//url: https://edabit.com/challenge/4t46PimG6NL6dy9vs

//Description:
//Create a function that takes an array of numbers and returns an array containing all possible permutations.
//Examples
//permutations([1]) ➞ [[1]]
//
//permutations([1, 7]) ➞ [[1, 7], [7, 1]]
//
//permutations([2, 4, 7]) ➞ [[2, 4, 7], [2, 7, 4], [4, 2, 7], [4, 7, 2], [7, 2, 4], [7, 4, 2]]
//Notes
//All given arrays do not contain duplicates.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const arrayToString = arr => arr
//  .sort()
//  .map(elem => `[${elem.toString()}]`)
//  .toString();
//​
//const perms = arr => arrayToString(permutations(arr));
//​
//Test.assertEquals(perms([4]), arrayToString([[4]]));
//Test.assertEquals(perms([2,4,7]), arrayToString([[2,4,7], [2,7,4], [4,2,7], [4,7,2], [7,2,4], [7,4,2]]));
//Test.assertEquals(perms([1,2,4,8]), arrayToString([[1,2,4,8],[1,2,8,4],[1,4,2,8],[1,4,8,2],[1,8,2,4],[1,8,4,2],[2,1,4,8],[2,1,8,4],[2,4,1,8],[2,4,8,1],[2,8,1,4],[2,8,4,1],[4,1,2,8],[4,1,8,2],[4,2,1,8],[4,2,8,1],[4,8,1,2],[4,8,2,1],[8,1,2,4],[8,1,4,2],[8,2,1,4],[8,2,4,1],[8,4,1,2],[8,4,2,1]]));
//Test.assertEquals(perms([-1,-2,6]), arrayToString([[-1,-2,6],[-1,6,-2],[-2,-1,6],[-2,6,-1],[6,-1,-2],[6,-2,-1]]));
//Test.assertEquals(perms([1,2,3,4,5]), arrayToString([[1,2,3,4,5],[1,2,3,5,4],[1,2,4,3,5],[1,2,4,5,3],[1,2,5,3,4],[1,2,5,4,3],[1,3,2,4,5],[1,3,2,5,4],[1,3,4,2,5],[1,3,4,5,2],[1,3,5,2,4],[1,3,5,4,2],[1,4,2,3,5],[1,4,2,5,3],[1,4,3,2,5],[1,4,3,5,2],[1,4,5,2,3],[1,4,5,3,2],[1,5,2,3,4],[1,5,2,4,3],[1,5,3,2,4],[1,5,3,4,2],[1,5,4,2,3],[1,5,4,3,2],[2,1,3,4,5],[2,1,3,5,4],[2,1,4,3,5],[2,1,4,5,3],[2,1,5,3,4],[2,1,5,4,3],[2,3,1,4,5],[2,3,1,5,4],[2,3,4,1,5],[2,3,4,5,1],[2,3,5,1,4],[2,3,5,4,1],[2,4,1,3,5],[2,4,1,5,3],[2,4,3,1,5],[2,4,3,5,1],[2,4,5,1,3],[2,4,5,3,1],[2,5,1,3,4],[2,5,1,4,3],[2,5,3,1,4],[2,5,3,4,1],[2,5,4,1,3],[2,5,4,3,1],[3,1,2,4,5],[3,1,2,5,4],[3,1,4,2,5],[3,1,4,5,2],[3,1,5,2,4],[3,1,5,4,2],[3,2,1,4,5],[3,2,1,5,4],[3,2,4,1,5],[3,2,4,5,1],[3,2,5,1,4],[3,2,5,4,1],[3,4,1,2,5],[3,4,1,5,2],[3,4,2,1,5],[3,4,2,5,1],[3,4,5,1,2],[3,4,5,2,1],[3,5,1,2,4],[3,5,1,4,2],[3,5,2,1,4],[3,5,2,4,1],[3,5,4,1,2],[3,5,4,2,1],[4,1,2,3,5],[4,1,2,5,3],[4,1,3,2,5],[4,1,3,5,2],[4,1,5,2,3],[4,1,5,3,2],[4,2,1,3,5],[4,2,1,5,3],[4,2,3,1,5],[4,2,3,5,1],[4,2,5,1,3],[4,2,5,3,1],[4,3,1,2,5],[4,3,1,5,2],[4,3,2,1,5],[4,3,2,5,1],[4,3,5,1,2],[4,3,5,2,1],[4,5,1,2,3],[4,5,1,3,2],[4,5,2,1,3],[4,5,2,3,1],[4,5,3,1,2],[4,5,3,2,1],[5,1,2,3,4],[5,1,2,4,3],[5,1,3,2,4],[5,1,3,4,2],[5,1,4,2,3],[5,1,4,3,2],[5,2,1,3,4],[5,2,1,4,3],[5,2,3,1,4],[5,2,3,4,1],[5,2,4,1,3],[5,2,4,3,1],[5,3,1,2,4],[5,3,1,4,2],[5,3,2,1,4],[5,3,2,4,1],[5,3,4,1,2],[5,3,4,2,1],[5,4,1,2,3],[5,4,1,3,2],[5,4,2,1,3],[5,4,2,3,1],[5,4,3,1,2],[5,4,3,2,1]]));

