

//title: Get Students with Names and Top Notes

//tags: arrays,functional_programming,objects

//url: https://edabit.com/challenge/GJD5x54NaFZwbtxQW

//Description:
//Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4] } and returns an array of objects like { name: "John", topNote: 5 }.
//If student has no notes (an empty array) then let's assume topNote: 0.
//Examples
//getStudentsWithNamesAndTopNotes([
//  { "name": "John", "notes": [3, 5, 4] },
//  { "name": "Max", "notes": [1, 4, 6] },
//  { "name": "Zygmund", "notes": [1, 2, 3] }
//])
//➞ [
//  { "name": "John", "topNote": 5 },
//  { "name": "Max", "topNote": 6 },
//  { "name": "Zygmund", "topNote": 3 }
//]
//Notes
//Try solving this challenge with an arrow function.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const objectsAreEqual = (actual, expected) => Object.keys(expected).every(
//  key => actual[key] === expected[key]
//)
//const areEqual = (actual, expected, compare) => expected.every(
//  (item, index) => compare(actual[index], item)
//)
//const sets = [
//  [['Jacek', [5, 4, 3]], ['Ewa', [3, 3, 3]], ['Zygmunt', [1, 2, 3]]],
//  [['Jacek', []], ['Ewa', []], ['Zygmunt', [1, 2, 3]]],
//  []
//].map(
//  set => ({ 
//    actual: getStudentsWithNamesAndTopNotes(
//      set.map(([name, notes]) => ({ name, notes }))
//    ), 
//    expected: set.map(([name, notes]) => ({ name, topNote: Math.max(...notes, 0) }))
//  })   
//).forEach(
//  ({ actual, expected }) => {
//    Test.expectNoError('Result should be an array', () => {
//      Test.assertEquals(areEqual(actual, expected, objectsAreEqual), true, JSON.stringify(actual))
//    })
//  }
//)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Apocalyptic Numbers

//tags: math,numbers,validation

//url: https://edabit.com/challenge/dNRax8eQSxov984Xx

//Description:
//A number n is apocalyptic if 2^n contains a string of 3 consecutive 6s (666 being the presumptive "number of the beast").
//Create a function that takes a number n as input. If the number is apocalyptic, find the index of 666 in 2^n, and return "Repent! X days until the Apocalypse!" (X being the index). If not, return "Crisis averted. Resume sinning.".
//Examples
//apocalyptic(109) ➞ "Crisis averted. Resume sinning."
//
//apocalyptic(157) ➞ "Repent! 9 days until the Apocalypse!"
//// 2^157 -> 182687704666362864775460604089535377456991567872
//// 666 at 10th position (index 9)
//
//apocalyptic(175) ➞ "Crisis averted. Resume sinning."
//
//apocalyptic(220) ➞ "Repent! 6 days until the Apocalypse!"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(apocalyptic(157), "Repent! 9 days until the Apocalypse!")
//Test.assertEquals(apocalyptic(175), "Crisis averted. Resume sinning.")
//Test.assertEquals(apocalyptic(220), "Repent! 6 days until the Apocalypse!")
//Test.assertEquals(apocalyptic(333), "Crisis averted. Resume sinning.")
//Test.assertEquals(apocalyptic(499), "Repent! 138 days until the Apocalypse!")
//Test.assertEquals(apocalyptic(666), "Repent! 49 days until the Apocalypse!")
//Test.assertEquals(apocalyptic(1003), "Crisis averted. Resume sinning.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: You Sunk My Battleship!

//tags: arrays,games,language_fundamentals,validation

//url: https://edabit.com/challenge/uQAYSdC3HFtGp3NY8

//Description:
//Remember the game Battleship? Ships are floating in a matrix. You have to fire torpedos at their suspected coordinates, to try and hit them.
//Create a function that takes an array of arrays (matrix) and a coordinate as a string. If the coordinate contains only water " . ", return "splash" and if the coordinate contains a ship " * ", return "BOOM".
//Instruction text contains two blank spaces between quotation marks; the code/test does not. See examples below.
//Examples
//[
//  [".", ".", ".", "*", "*"],
//  [".", "*", ".", ".", "."],
//  [".", "*", ".", ".", "."],
//  [".", "*", ".", ".", "."],
//  [".", ".", "*", "*", "."],
//]
//
//fire(matrix, "A1") ➞ "splash"
//
//fire(matrix, "A4") ➞ "BOOM"
//
//fire(matrix, "D2") ➞ "BOOM"
//Notes
//The provided matrix is always a square.
//The provided matrix will not be larger than 5 * 5 ( A1 * E5).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(fire([
//  [".", ".", ".", "*", "*"],
//  [".", "*", ".", ".", "."],
//  [".", "*", ".", ".", "."],
//  [".", "*", ".", ".", "."],
//  [".", ".", "*", "*", "."],
//],"A1"), "splash", "A1: target first nested array, first element")
//​
//Test.assertEquals(fire([
//  [".", ".", ".", "*", "*"],
//  [".", "*", ".", ".", "."],
//  [".", "*", ".", ".", "."],
//  [".", "*", ".", ".", "."],
//  [".", ".", "*", "*", "."],
//],"C2"), "BOOM", "C2: target third nested array, second element")
//​
//Test.assertEquals(fire([
//  [".", "."],
//  ["*", "*"]
//],"B1"), "BOOM")
//​
//Test.assertEquals(fire([
//  [".", "."],
//  ["*", "*"]
//],"A2"), "splash")

