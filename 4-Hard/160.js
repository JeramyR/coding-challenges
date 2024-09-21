

//title: Who is Currently Winning

//tags: arrays,loops

//url: https://edabit.com/challenge/jiTMjanCzDrtC8T9y

//Description:
//You are given an array of scores. The even-indexed numbers are your scores at each turn. The odd-indexed numbers are your opponent's scores.
//Create a function that turns this list of scores into an array of who is currently winning.
//To illustrate (You - Y, Opponent - O):
//Scores: [5, 15, 17, 35, 16, 40, 66, 12, 10, 9]
//
//Y scores: [5, 17, 16, 66, 10]
//O scores: [15, 35, 40, 12, 9]
//
//Y cumulative scores: [5, 22, 38, 104, 114]
//O cumulative scores: [15, 50, 90, 102, 111]
//
//Who is currently winning: ["O", "O", "O", "Y", "Y"]
//Examples
//currentlyWinning([10, 10, 22, 30, 5, 40]) ➞ ["T", "O", "O"]
//
//currentlyWinning([5, 1, 2, 10]) ➞ ["Y", "O"]
//
//currentlyWinning([10, 10, 5, 5, 2, 2, 1, 3, 100, 5]) ➞ ["T", "T", "T", "O", "Y"]
//Notes
//Write "T" if there is a tie at that point in the game.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(currentlyWinning([10, 10, 22, 30, 5, 40]), ['T', 'O', 'O'])
//Test.assertSimilar(currentlyWinning([5, 1, 2, 10]), ['Y', 'O'])
//Test.assertSimilar(currentlyWinning([10, 10, 5, 5, 2, 2, 1, 3, 100, 5]), ['T', 'T', 'T', 'O', 'Y'])
//Test.assertSimilar(currentlyWinning([5, 15, 17, 35, 16, 40, 66, 12, 10, 9]), ['O', 'O', 'O', 'Y', 'Y'])
//Test.assertSimilar(currentlyWinning([33, 22, 4, 9, 12, 15, 32, 7, 9, 10, 70, 100]), ['Y', 'Y', 'Y', 'Y', 'Y', 'O'])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Create an Input / Output Table Constructor

//tags: algebra,data_structures

//url: https://edabit.com/challenge/E9Q3pBhdkPWg2EKfm

//Description:
//In this task, you will create a constructor function table for an input and output table.
//Your constructor function will:
//Have a property this.data (an array) that your table will be stored and accessed.
//Populate the this.data array with an input and output array for every input.
//The constructor function will take four arguments:
//func - Function input is entered into, and the output received from.
//start - Starting point for inputs.
//end - Last point or maximum input value.
//step - Amount between inputs.
//Examples
//const square = n => Math.pow(n, 2)
//const half = n => n / 2
//
//const table = function(func, start, end, step)
//{
//  this.data = []
//  // your code here!
//}
//
//var myTable = new table(square, -2, 2, 1)
//myTable.data ➞ [[-2,4], [-1, 1], [0, 0], [1, 1], [2, 4]]
//
//var myTable = new table(half, -3, 3, 1)
//myTable.data ➞ [ [-3, -1.5], [-2, -1], [-1, -0.5], [0, 0], [1, 0.5], [2, 1], [3, 1.5] ]
//Notes
//Check the Resources for help.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const myTable1 = new table(Math.abs, -5, 5, 1)
//const myTable2 = new table(Math.floor, -2, 2, 0.25)
//const myTable3 = new table(String, -2, 2, 1)
//Test.assertSimilar(myTable1.data, [ [-5, 5], [-4, 4], [-3, 3], [-2, 2], [-1, 1], [0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5] ])
//Test.assertSimilar(myTable2.data, [ [-2, -2], [-1.75, -2], [-1.5, -2], [-1.25, -2], [-1, -1], [-0.75, -1], [-0.5, -1], [-0.25, -1], [0, 0], [0.25, 0], [0.5, 0], [0.75, 0], [1, 1], [1.25, 1], [1.5, 1], [1.75, 1], [2, 2] ])
//Test.assertSimilar(myTable3.data, [ [-2, "-2"], [-1, "-1"], [0, "0"], [1, "1"], [2, "2"] ])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Musical Instrument Note Ranges

//tags: conditions,validation

//url: https://edabit.com/challenge/iu5HNPnDHoLmSobyq

//Description:
//Musical instruments have a range of notes to play, some instruments having a much larger range than others.
//Given the following ranges for the instrument, create a function that returns true if a given note is within a given instrument's range. Otherwise, return false.
//Instrument	Range
//Piccolo	D4-C7
//Tuba	D1-F4
//Guitar	E3-E6
//Piano	A0-C8
//Violin	G3-A7
//Examples
//instrumentRange("Piccolo", "A3") ➞ false
//
//instrumentRange("Violin", "G6") ➞ true
//
//instrumentRange("Piano", "C8") ➞ true
//Notes
//Tests will only include natural notes (i.e. you will only deal with letters and numbers, no special characters).
//The musical scale follows this pattern: ... A1, B1, C1, D1, E1, F1, G1, A2, B2 ...
//You don't need to worry about invalid inputs.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(instrumentRange("Piccolo", "A3"), false)
//Test.assertEquals(instrumentRange("Violin", "G6"), true)
//Test.assertEquals(instrumentRange("Piano", "C8"), true)
//Test.assertEquals(instrumentRange("Piano", "C9"), false)
//Test.assertEquals(instrumentRange("Tuba", "C8"), false)
//Test.assertEquals(instrumentRange("Guitar", "F4"), true)
//Test.assertEquals(instrumentRange("Guitar", "C4"), true)
//Test.assertEquals(instrumentRange("Piccolo", "F4"), true)
//Test.assertEquals(instrumentRange("Tuba", "F6"), false)

