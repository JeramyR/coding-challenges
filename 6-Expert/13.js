

//title: Numbers to English

//tags: algorithms,data_structures,strings

//url: https://edabit.com/challenge/PFH9yEZXSbAngQm7T

//Description:
//Write a function that accepts a positive integer between 0 and 999 inclusive and returns a string representation of that integer written in English.
//Examples
//numToEng(0) ➞ "zero"
//
//numToEng(18) ➞ "eighteen"
//
//numToEng(126) ➞ "one hundred twenty six"
//
//numToEng(909) ➞ "nine hundred nine"
//Notes
//There are no hyphens used (e.g. "thirty five" not "thirty-five").
//The word "and" is not used (e.g. "one hundred one" not "one hundred and one").

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(numToEng(0), "zero")
//Test.assertEquals(numToEng(26), "twenty six")
//Test.assertEquals(numToEng(519), "five hundred nineteen")
//Test.assertEquals(numToEng(106), "one hundred six")
//Test.assertEquals(numToEng(999), "nine hundred ninety nine")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: 2048 Tiles Slide

//tags: algorithms,arrays,games,loops

//url: https://edabit.com/challenge/jmamZufrqZkhH7ZLM

//Description:
//2048 is a game where you need to slide numbered tiles (natural powers of 2) up, down, left or right on a square grid to combine them in a tile with the number 2048.
//The sliding procedure is described by the following rules:
//Tiles slide as far as possible in the chosen direction until they are stopped by either another tile or the edge of the grid.
//If two tiles of the same number collide while moving, they will merge into a tile with the total value of the two tiles that collided.
//If more than one variant of merging is possible, move direction shows one that will take effect.
//Tile cannot merge with another tile more than one time.
//Sliding is done almost the same for each direction and for each row/column of the grid, so your task is to implement only the left slide for a single row.
//Examples
//leftSlide([2, 2, 2, 0]) ➞ [4, 2, 0, 0]
//// Merge left-most tiles first.
//
//leftSlide([2, 2, 4, 4, 8, 8]) ➞ [4, 8, 16, 0, 0, 0]
//// Only merge once.
//
//leftSlide([0, 2, 0, 2, 4]) ➞ [4, 4, 0, 0, 0]
//
//leftSlide([0, 2, 2, 8, 8, 8]) ➞ [4, 16, 8, 0, 0, 0]
//Notes
//Input row can be of any size (empty too).
//Input row will contain only natural powers of 2 and 0 for empty tiles.
//Keep trailing zeros in the output.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(leftSlide([2, 2, 2, 0]), [4, 2, 0, 0])
//Test.assertSimilar(leftSlide([2, 2, 4, 4, 8, 8]), [4, 8, 16, 0, 0, 0])
//Test.assertSimilar(leftSlide([0, 2, 0, 2, 4]), [4, 4, 0, 0, 0])
//Test.assertSimilar(leftSlide([0, 2, 2, 8, 8, 8]), [4, 16, 8, 0, 0, 0])
//Test.assertSimilar(leftSlide([0, 0, 0, 0]), [0, 0, 0, 0])
//Test.assertSimilar(leftSlide([0, 0, 0, 2]), [2, 0, 0, 0])
//Test.assertSimilar(leftSlide([2, 0, 0, 0]), [2, 0, 0, 0])
//Test.assertSimilar(leftSlide([8, 2, 2, 4]), [8, 4, 4, 0])
//Test.assertSimilar(leftSlide([1024, 1024, 1024, 512, 512, 256, 256, 128, 128, 64, 32, 32]), [2048, 1024, 1024, 512, 256, 64, 64, 0, 0, 0, 0, 0])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: Underscore-Hash Staircase

//tags: recursion,strings

//url: https://edabit.com/challenge/ZLTwdq8n5HK7DP9Eq

//Description:
//Create a function that will build a staircase using the underscore _ and hash # symbols. A positive value denotes the staircase's upward direction and downwards for a negative value.
//Examples
//staircase(3) ➞ "__#\n_##\n###"
//__#
//_##
//###
//
//staircase(7) ➞ "______#\n_____##\n____###\n___####\n__#####\n_######\n#######"
//______#
//_____##
//____###
//___####
//__#####
//_######
//#######
//
//staircase(2) ➞ "_#\n##"
//_#
//##
//
//staircase(-8) ➞ "########\n_#######\n__######\n___#####\n____####\n_____###\n______##\n_______#"
//########
//_#######
//__######
//___#####
//____####
//_____###
//______##
//_______#
//Notes
//All inputs are either positive or negative values.
//The string to be returned should be adjoined with the newline character \n.
//You're expected to solve this challenge using a recursive approach.
//You can read more on recursion (see Resources tab) if you aren't familiar with it or haven't fully understood the concept before taking this challenge.
//An iterative version of this challenge can be found via this link.
//A collection of recursive challenges in JS can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const recursive = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
//Test.assertNotEquals(recursive(staircase), false, "Recursion is required!")
//​
//let [numVector, resVector] = [
//  [3, 7, 2, -8, 4, -12, 11, -6], [
//  "__#\n_##\n###",
//  "______#\n_____##\n____###\n___####\n__#####\n_######\n#######",
//  "_#\n##",
//  "########\n_#######\n__######\n___#####\n____####\n_____###\n______##\n_______#",
//  "___#\n__##\n_###\n####",
//  "############\n_###########\n__##########\n___#########\n____########\n_____#######\n______######\n_______#####\n________####\n_________###\n__________##\n___________#",
//  "__________#\n_________##\n________###\n_______####\n______#####\n_____######\n____#######\n___########\n__#########\n_##########\n###########",
//  "######\n_#####\n__####\n___###\n____##\n_____#"
//]]
//for (let i in numVector) Test.assertEquals(staircase(numVector[i]), resVector[i])

