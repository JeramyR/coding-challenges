

//title: Car Park Exit

//tags: arrays,games,logic

//url: https://edabit.com/challenge/sGneEQ9ZvGtBuNyrr

//Description:
//You are stuck in a multi-storey car parking lot. Your task is to exit the carpark using only the staircases. Exit is always at the bottom right of the ground floor.
//Create a function that takes a two-dimensional array where:
//Free carparking spaces are represented by a 0
//Staircases are represented by a 1
//Your starting position is represented by a 2 and can be at any level of the car park.
//Exit is always at the bottom right of the ground floor.
//You must use the staircases (1) to go down a level.
//Each floor will have only one staircase apart from the ground floor which will not have any staircases.
//... and returns an array of the quickest route out of the carpark.
//arr = [
//  [1, 0, 0, 0, 2],
//  [0, 0, 0, 0, 0]
//]
//
//// Starting from 2, move to left 4 times = "L4"
//// Go down from stairs 1 step = "D1"
//// Move to right 4 times to exit from right bottom corner = "R4"
//
//result = ["L4", "D1", "R4"]
//See the below examples to better understand:
//Examples
//parking_exit([
//  [1, 0, 0, 0, 2],
//  [0, 0, 0, 0, 0]
//]) ➞ ["L4", "D1", "R4"]
//parking_exit([
//  [2, 0, 0, 1, 0],
//  [0, 0, 0, 1, 0],
//  [0, 0, 0, 0, 0]
//]) ➞ ["R3", "D2", "R1"]
//
//// Starting from 2, move to right 3 times = "R3"
//// Go down from stairs 2 steps = "D2"
//// Move to right 1 step to exit from right bottom corner = "R1"
//parking_exit([[0, 0, 0, 0, 2]]) ➞ []
//// You are already at right bottom corner.
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(parkingExit([[1, 0, 0, 0, 2], [0, 0, 0, 0, 0]]), ["L4", "D1", "R4"])
//Test.assertSimilar(parkingExit([[2, 0, 0, 1, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 0]]), ["R3", "D2", "R1"])
//Test.assertSimilar(parkingExit([[0, 2, 0, 0, 1], [0, 0, 0, 0, 1], [0, 0, 0, 0, 1], [0, 0, 0, 0, 0]]), ["R3", "D3"])
//Test.assertSimilar(parkingExit([[1, 0, 0, 0, 2], [0, 0, 0, 0, 1], [1, 0, 0, 0, 0], [0, 0, 0, 0, 0]]), ["L4", "D1", "R4", "D1", "L4", "D1", "R4"])
//Test.assertSimilar(parkingExit([[0, 0, 0, 0, 2]]), [])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Simple Minesweeper

//tags: arrays,games

//url: https://edabit.com/challenge/cEGny3Pc8tjTfJryr

//Description:
//Given a 2D array of mines, replace the question mark with the number of mines that immediately surround it. This includes the diagonals, meaning it is possible for it to be surrounded by 8 mines maximum.
//The key is as follows:
//An empty space: "-"
//A mine: "#"
//Number showing number of mines surrounding it: "?"
//Examples
//minesweeper([
//  ["-", "#", "-"],
//  ["-", "?", "-"],
//  ["-", "-", "-"]
//]) ➞ [
//  ["-", "#", "-"],
//  ["-", "1", "-"],
//  ["-", "-", "-"]
//]
//
//minesweeper([
//  ["-", "#", "-"],
//  ["#", "-", "?"],
//  ["#", "#", "-"]
//]) ➞ [
//  ["-", "#", "-"],
//  ["#", "-", "2"],
//  ["#", "#", "-"]
//]
//
//minesweeper([
//  ["-", "#", "#"],
//  ["?", "#", ""],
//  ["#", "?", "-"]
//]) ➞ [
//  ["-", "#", "#"],
//  ["3", "#", ""],
//  ["#", "2", "-"]
//]
//
//minesweeper([
//  ["-", "-", "#"],
//  ["?", "-", "-"],
//  ["-", "-", "-"]
//]) ➞ [
//  ["-", "-", "#"],
//  ["0", "-", "-"],
//  ["-", "-", "-"]
//]
//Notes
//You will only be given 3x3 grids.
//The question mark is not limited to the centre (there may be multiple question marks).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(minesweeper([
//  ["-", "#", "-"],
//  ["-", "?", "-"],
//  ["-", "-", "-"]
//]), [
//  ["-", "#", "-"],
//  ["-", "1", "-"],
//  ["-", "-", "-"]
//])
//​
//Test.assertSimilar(minesweeper([
//  ["-", "#", "-"],
//  ["#", "-", "?"],
//  ["#", "#", "-"]
//]), 
//[
//  ["-", "#", "-"],
//  ["#", "-", "2"],
//  ["#", "#", "-"]
//])
//​
//Test.assertSimilar(minesweeper([
//  ["-", "#", "#"],
//  ["?", "#", "-"],
//  ["#", "?", "-"]

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Interprime Numbers

//tags: algebra,math,numbers

//url: https://edabit.com/challenge/Lmxq4ijbxX6pFPdQ6

//Description:
//An interprime number is a composite number which is equidistant from two consecutive primes. For example, the interprime 6 is 1 point after 5, a prime, and 1 point before the next prime, 7. Another interprime is 93, which lies midway between primes 89 and 97.
//Create a function that takes a number n as input. If n is an interprime number, return an array containing the two consecutive primes between which it lies. If it isn't, return an empty array.
//Examples
//interprime(6) ➞ [5, 7]
//
//interprime(9) ➞ [7, 11]
//
//interprime(8) ➞ []
//Notes
//Interprimes cannot be prime themselves (otherwise the primes would not have been consecutive).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(interprime(6), [5, 7])
//Test.assertSimilar(interprime(9), [7, 11])
//Test.assertSimilar(interprime(473), [467, 479])
//Test.assertSimilar(interprime(373), [])
//Test.assertSimilar(interprime(756), [])
//Test.assertSimilar(interprime(413), [])
//Test.assertSimilar(interprime(924), [919, 929])

