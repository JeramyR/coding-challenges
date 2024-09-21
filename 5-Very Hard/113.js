

//title: Seven Segment Display

//tags: logic,numbers

//url: https://edabit.com/challenge/MDypsjjWWD7Z5R3eW

//Description:
//
//The table below shows which of the segments a through g are illuminated on the seven segment display for the digits 0 through 9. When the number on the display changes, some of the segments may stay on, some may stay off, and others change state (on to off, or off to on).
//Create a function that accepts a string of digits, and for each transition of one digit to the next, returns an array of the segments that change state. Designate the segments that turn on as uppercase and those that turn off as lowercase. Sort the arrays in alphabetical order.
//For example:
//sevenSegment("805") ➞ [["g"], ["b", "e", "G"]]
//In the transition from 8 to 0, the g segment turns off. Others are unchanged. In the transition from 0 to 5, b and e turn off and G turns on. Others are unchanged.
//Digit	Lit Segments
//0	abcdef
//1	bc
//2	abdeg
//3	abcdg
//4	bcfg
//5	acdfg
//6	acdefg
//7	abc
//8	abcdefg
//9	abcfg
//Examples
//sevenSegment("02") ➞ [["c", "f", "G"]]
//
//sevenSegment("08555") ➞ [["G"], ["b", "e"], [], []]
//// Empty arrays designate no change.
//
//sevenSegment("321") ➞ [["c", "E"], ["a", "C", "d", "e", "g"]]
//
//sevenSegment("123") ➞ [["A", "c", "D", "E", "G"], ["C", "e"]]
//
//sevenSegment("3") ➞ []
//
//sevenSegment("33") ➞ [[]]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(sevenSegment("00"), [[]])
//Test.assertSimilar(sevenSegment("1"), [])
//Test.assertSimilar(sevenSegment("123"), [["A", "c", "D", "E", "G"], ["C", "e"]])
//Test.assertSimilar(sevenSegment("175503"), [["A"], ["b", "D", "F", "G"], [], ["B", "E", "g"], ["e", "f", "G"]])
//Test.assertSimilar(sevenSegment("8834"), [[], ["e", "f"], ["a", "d", "F"]])
//Test.assertSimilar(sevenSegment("9876543210"), [["D", "E"], ["d", "e", "f", "g"], ["b", "D", "E", "F", "G"], ["e"], ["a", "B", "d"], ["A", "D", "f"], ["c", "E"], ["a", "C", "d", "e", "g"], ["A", "D", "E", "F"]])
//Test.assertSimilar(sevenSegment("0123456789"), [["a", "d", "e", "f"], ["A", "c", "D", "E", "G"], ["C", "e"], ["a", "d", "F"], ["A", "b", "D"], ["E"], ["B", "d", "e", "f", "g"], ["D", "E", "F", "G"], ["d", "e"]])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: O`s and X`s

//tags: arrays,games

//url: https://edabit.com/challenge/S6syDE5cK8q3Xe4pR

//Description:
//Given an array containing three strings, representing the rows of an O's and X's board from top to bottom, return the row and column position of the winning move for X's. Return false if the game cannot be won.
//Examples
//XAndO(board = [" | | ", " |X| ", "X| | "]) ➞  [1, 3]
//
//// Board becomes:
////    |   |
////    |X |
//// X |   |
//
//XAndO(board = ["X|X|O", "O|X| ", "X|O| "]) ➞ [3, 3]
//
//// Board becomes:
//// X|X|O
//// O|X|
//// X|O|
//Notes
//There is no 0 index for the row or column.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(XAndO(board = [
//  " | | ", 
//  " |X| ", 
//  "X| | "
//]), [1,3])
//​
//​
//Test.assertSimilar(XAndO(board = [
//  "X|X|O", 
//  "O|X| ", 
//  "X|O| "
//]), [3,3])
//​
//​
//Test.assertSimilar(XAndO(board = [
//  "X|X|O", 
//  "O|O| ", 
//  "X|O| "
//]), false)
//​
//​
//Test.assertSimilar(XAndO(board = [
//  "X|X| ", 
//  "O|O| ", 
//  "X|O| "

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Shortest Path

//tags: arrays,logic,loops

//url: https://edabit.com/challenge/QQmmAx3AWJk5NydtR

//Description:
//Given a rectangular grid of m by n spaces, signaled by 0s, and a number of points, signaled by 1, 2, 3..., return the number of moves for the shortest path that starts at 1 and goes over all the other points in ascending order.
//Examples
//shortestPath([
//  "001",
//  "002",
//  "003"
//]) ➞ 2
//
//shortestPath([
//  "00000",
//  "01006",
//  "02000",
//  "30050",
//  "00004"
//]) ➞ 13
//
//shortestPath([
//  "00020000",
//  "01000000"
//]) ➞ 3
//Notes
//Only horizontal and vertical movements are allowed.
//All movements from one place to an adjacent one count as 1 regardless of direction.
//The points range from 1 to at most 9 with no repeating or missing digits.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(shortestPath([
//  "00000",
//  "01006",
//  "02000",
//  "30050",
//  "00004"
//]), 13, '6 vertical moves, 7 horizontal moves.')
//​
//Test.assertEquals(shortestPath([
//  "600001",
//  "002005",
//  "040073"
//]), 29, '6 vertical moves, 23 horizontal moves.')
//​
//Test.assertEquals(shortestPath([
//  "0000000",
//  "0050000",
//  "0000000",
//  "2030410"
//]), 13, '2 vertical moves, 11 horizontal moves.')
//  
//Test.assertEquals(shortestPath([
//  "00000"
//]), 0, 'No moves.')
//  

