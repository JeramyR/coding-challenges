

//title: Making a Simple Dartboard

//tags: arrays,loops,numbers

//url: https://edabit.com/challenge/XBkRxLvL6mqWRj7Gt

//Description:
//Create a function which creates a square dartboard of side length n. The value of a number should increase, the closer it is to the centre of the board.
//Examples
//makeDartboard(3) ➞ [
//  111,
//  121,
//  111
//]
//
//makeDartboard(8) ➞ [
//  11111111,
//  12222221,
//  12333321,
//  12344321,
//  12344321,
//  12333321,
//  12222221,
//  11111111
//]
//
//makeDartboard(5) ➞ [
//  11111,
//  12221,
//  12321,
//  12221,
//  11111
//]
//Notes
//If the size given is an even number, the centre should be made up of the 4 highest values.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(makeDartboard(3), [
//  111,
//  121,
//  111
//])
//​
//Test.assertSimilar(makeDartboard(8), [
//  11111111,
//  12222221,
//  12333321,
//  12344321,
//  12344321,
//  12333321,
//  12222221,
//  11111111
//])
//​
//Test.assertSimilar(makeDartboard(5), [
//  11111,
//  12221,
//  12321,
//  12221,
//  11111
//])
//​

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Seating Students

//tags: algorithms,arrays,data_structures,loops

//url: https://edabit.com/challenge/dypp7kJCdywkAWWeq

//Description:
//Create a function that reads an array of integers stored which will be in the following format: [[K, r1, r2, r3, ...]], where K represents the number of desks in a classroom, and the rest of the integers in the array will be in sorted order and will represent the desks that are already occupied. All of the desks will be arranged in two columns, where desk #1 is at the top left, desk #2 at the top right, desk #3 is below #1, desk #4 is below #2, etc.
//Your program should return the number of ways two students can be seated next to each other. This means one student is on the left and one on the right, or one student is directly above or below the other student.
//To illustrate:
//[[12, 2, 6, 7, 11]]
//This classroom will look like the following:
//Column 1
//[[#, 4, #, 8, 10, 12]]
//// The first # is 2 and second # is 6 which are occupied.
//Column 2
//[[1, 3, 5, #, 9, #]]
//// The first # is 7 and and second # is 11 which are occupied.
//Based on the above arrangement of occupied desks, there are a total of six ways to seat two new students next to each other. The combinations are:
//[[1, 3]], [[3, 4]], [[3, 5]], [[8, 10]], [[9, 10]], [[10, 12]]
//For this input, your program should return 6. K will range from 2 to 24 and will always be an even number. After K, the number of occupied desks in the array can range from 0 to K.
//Examples
//seatingStudents([6, 4]) ➞ 4
//
//seatingStudents([8, 1, 8]) ➞ 6
//
//seatingStudents([12, 2, 6, 7, 11])  ➞ 6
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(seatingStudents([12, 2, 6, 7, 11]), 6)
//Test.assertEquals(seatingStudents([6, 4]), 4)
//Test.assertEquals(seatingStudents([10, 2, 9]), 9)
//Test.assertEquals(seatingStudents([16, 2, 4, 6, 7, 8, 9, 10]), 9)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Scrabble Scores (Part 2)

//tags: algorithms,conditions,games

//url: https://edabit.com/challenge/iMrSBPsjm6M53xer8

//Description:
//This challenge is based on the game Scrabble. Each word you play is scored based on the point value of each tile/letter (see first table), as well as additional points conferred by any special squares your tiles land on (see second table).
//Create a function that takes an array representing a row of squares in a Scrabble board, and a string representing the word to be played. The array will consist of - representing normal squares, and "DL", "TL", "DW" representing special squares. Return the index of the array where the first letter of the word should be placed to maximise the score of the word to be played. Return the lowest index, if several exist.
//Letter	Points
//A	1
//B	3
//C	3
//D	2
//E	1
//F	4
//G	2
//H	4
//I	1
//J	8
//K	5
//L	2
//M	3
//N	1
//O	1
//P	3
//Q	10
//R	1
//S	1
//T	1
//U	1
//V	4
//W	4
//X	8
//Y	4
//Z	10
//Special Square	Meaning
//DL	Double letter score - doubles the point value of a letter placed on the square
//TL	Triple letter score - triples the point value of a letter placed on the square
//DW	Double word score - doubles the score of an entire word if one of its letters is placed on the square
//Examples
//bestStart(["-","DW","-","-","-","TL","-","-","-","TL","-","-","-","DW","-"], "quiz") ➞ 0
//// Doubling the entire word maximises the score. Starting at
//// indices 1,10, and 11 have the same effect, but the function
//// should return the lowest index.
//
//bestStart(["-","DW","-","-","-","TL","-","-","-","TL","-","-","-","DW","-"], "quit") ➞ 5
//// Tripling the first letter alone gives a higher score than
//// doubling the entire word, as the other 3 letters have
//// low point-values.
//
//bestStart(["-","DW","-","-","-","TL","-","-","-","TL","-","-","-","DW","-"], "quart") ➞ 9
//// Tripling the first (high-scoring) letter, and doubling the word.
//
//bestStart(["-","DW","-","-","-","TL","-","-","-","TL","-","-","-","DW","-"], "quartz") ➞ 0
//// Tripling the last (high-scoring) letter, and doubling the word.
//// Index 9 has the same effect (tripling the first letter, doubling
//// the word), but 0 is the lower index.
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(bestStart(['-','DW','-','-','-','TL','-','-','-','TL','-','-','-','DW','-'], 'quiz'), 0)
//Test.assertEquals(bestStart(['-','DW','-','-','-','TL','-','-','-','TL','-','-','-','DW','-'], 'quit'), 5)
//Test.assertEquals(bestStart(['-','DW','-','-','-','TL','-','-','-','TL','-','-','-','DW','-'], 'quart'), 9)
//Test.assertEquals(bestStart(['-','DW','-','-','-','TL','-','-','-','TL','-','-','-','DW','-'], 'quartz'), 0)
//​
//// more tests coming soon using other Scrabble board rows

