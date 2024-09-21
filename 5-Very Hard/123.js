

//title: Recursion: N-Length Letter Groups

//tags: arrays,recursion,sorting,strings

//url: https://edabit.com/challenge/PpqEjypCJ7a4RwxLH

//Description:
//Write a function that returns an array of strings populated from the slices of n-length characters of the given word (a slice after another while n-length applies onto the word).
//Examples
//collect("intercontinentalisationalism", 6)
//➞ ["ationa", "interc", "ntalis", "ontine"]
//
//collect("strengths", 3)
//➞ ["eng", "str", "ths"]
//
//collect("pneumonoultramicroscopicsilicovolcanoconiosis", 15)
//➞ ["croscopicsilico", "pneumonoultrami", "volcanoconiosis"]
//Notes
//Ensure that the resulting array is lexicographically ordered.
//Return an empty array if the given string is less than n.
//You are expected to solve this challenge via a recursive approach.
//You can check on the Resources tab for more details about recursion.
//An iterative version of this challenge can be found via this link.
//A collection of challenges in recursion can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const recursive = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
//Test.assertNotEquals(recursive(collect), false, "Recursion is required!")
//​
//let [strVector, numVector, resVector] = [[
//  "intercontinentalisationalism", "strengths", "pneumonoultramicroscopicsilicovolcanoconiosis",
//  "lexicographically", "anesthesiologists", "subdermatoglyphic", "sesquipedalianism",
//  "recollection", "pseudopseudohypoparathyroidism", "floccinaucinihilipilification",
//  "antidisestablishmentarianism", "supercalifragilisticexpialidocious", "incomprehensibilities",
//  "astrophysicists", "honorificabilitudinitatibus", "unimaginatively", "euouae", "tsktsk",
//  "uncopyrightable" ], [ 6, 3, 15, 4, 6, 6, 6, 3, 7, 2, 5, 3, 9, 4, 12, 8, 7, 6, 11 ], [
//  ["ationa", "interc", "ntalis", "ontine"], ["eng", "str", "ths"],
//  ["croscopicsilico", "pneumonoultrami", "volcanoconiosis"],
//  ["aphi", "call", "cogr", "lexi"], ["anesth", "esiolo"], ["matogl", "subder"],
//  ["pedali", "sesqui"], ["ect", "ion", "oll", "rec"], ["hyroidi", "poparat", "pseudop", "seudohy"],
//  ["at", "ci", "fl", "ic", "if", "ih", "il", "il", "in", "io", "ip", "na", "oc", "uc"],
//  ["ablis", "antid", "arian", "hment", "isest"],
//  ["ali", "ali", "doc", "erc", "fra", "gil", "ice", "iou", "ist", "sup", "xpi"],
//  ["ensibilit", "incompreh"], ["astr", "ophy", "sici"], ["honorificabi", "litudinitati"],
//  ["unimagin"], [], ["tsktsk"], ["uncopyright"]
//]]
//for (let i in strVector) Test.assertSimilar(collect(strVector[i], numVector[i]), resVector[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: A Lonely Class for Lonely Numbers

//tags: classes,loops,numbers

//url: https://edabit.com/challenge/diSXtsft9ux8Wq98j

//Description:
//In this challenge, build a support class Lonely to find the last Lonely number inside a sequence. A number is Lonely if the distance from its closest Prime sets a new record of the sequence.
//Sequence = from 0 up 3
//
//// Any number lower than 3 doesn't have a Prime preceeding it...
//// ...so that you'll consider only its next closest Prime.
//
//0 has distance 2 from its closest Prime (2)
//// It's a new record! 0 It's the first lonely number of the sequence
//1 has distance 1 from its closest Prime (2)
//2 has distance 1 from 3
//3 has distance 1 from 2
//
//// The sequence 0 to 3  has only one Lonely number: 0
//Sequence = Numbers from 5 up 10
//
//5 has distance 2 from its closest Prime (3 or 7)
//// It's a new record! 5 It's the first lonely number of the sequence
//6 has distance 1 from 5 or 7
//7 has distance 2 from 5
//8 has distance 1 from 7
//9 has distance 2 from 7 or 11
//10 has distance 1 from 11
//
//// The sequence 5 to 10  has only one Lonely number: 5
//Sequence = Numbers from 19 up 24
//
//19 has distance 2 from its closest Prime (17)
//// It's a new record! 19 It's the first lonely number of the sequence
//20 has distance 1 from 19
//21 has distance 2 from 5
//22 has distance 1 from 23
//23 has distance 4 from 19 
//// It's a new record! 23 is the second lonely number of the sequence
//24 has distance 1 from 23
//
//// The sequence 19 to 24  has two Lonely numbers: 19 and 23
//The class Lonely must have a static method record() that accepts two integers lo and hi being the inclusive bounds of the sequence to analyze, and returns an object literal with the following keys:
//number: is the last Lonely number found in the given sequence;
//distance: is the distance of the number from its closest Prime;
//closest: is the Prime closest to number (if two Primes equally distant from number are found, return the higher Prime).
//Examples
//Lonely.record(0, 22) ➞ {
//  number: 0, distance: 2, closest: 2
//}
//
//Lonely.record(8, 123) ➞ {
//  number: 53, distance: 6, closest: 59
//}
//
//Lonely.record(938, 1190) ➞ {
//  number: 1140, distance: 11, closest: 1151
//}
//
//Lonely.record(120, 1190) ➞ {
//  number: 211, distance: 12, closest: 223
//}
//Notes
//The numbers 0, 1 and 2 have no previous Prime to check, so that you'll consider only the next Prime to set the distance, as in Example #1.
//Remember that you are searching for the closest Prime when establishing if the distance is a record: 7 has a distance equal to 2 because its closest Prime is 5.
//If a Lonely number is equally distant from two Primes, you have to return the higher Prime, as in Example #2 (53 has distance 6 from either 47 and 59).
//The first Lonely number of a sequence is (trivially) always equal to the sequence lower bound.
//You can expect valid non-negative integers as input, without exceptions to handle.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertDeepEquals(Lonely.record(0, 22), {
//  number: 0, distance: 2, closest: 2
//})
//​
//Test.assertDeepEquals(Lonely.record(8, 123), {
//  number: 120, distance: 7, closest: 127
//})
//​
//Test.assertDeepEquals(Lonely.record(938, 1190), {
//  number: 1140, distance: 11, closest: 1151
//})
//​
//Test.assertDeepEquals(Lonely.record(120, 1190), {
//  number: 211, distance: 12, closest: 223
//})
//​
//Test.assertDeepEquals(Lonely.record(2, 31), {
//  number: 23, distance: 4, closest: 19
//})
//​
//Test.assertDeepEquals(Lonely.record(14, 50), {
//  number: 23, distance: 4, closest: 19
//})
//​
//Test.assertDeepEquals(Lonely.record(889, 1389), {

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Connell Sequence

//tags: arrays,loops,numbers

//url: https://edabit.com/challenge/tbikqsDhYSnD76xmo

//Description:
//The Connell sequence can be represented as a growing series of alternating numbered lines:
//If the line number is odd, the line contains a quantity of odd numbers equal to the line number, sorted ascendingly.
//If the line number is even, the line contains a quantity of even numbers equal to the line number, sorted ascendingly.
//Every number in a line is equal to its next term less 2, and the last number (and highest) number of the sequence has to be the square of the line number. Numbers have to be unique: there are no duplicates in the sequence, and not every number is in the sequence.
//Line 1 = 1
//// 1 odd number
//
//Line 2 = 2, 4
//// 2 even numbers
//
//Line 3 = 5, 7, 9
//// 3 odd numbers
//// Notice how the number 3 is missing.
//// Highest number in line is 9 (the square of line number)
//
//Line 4 = 10, 12, 14, 16
//// 4 even numbers
//
//and so on...
//Given a start and an end being the initial and ending line of the sequence, you have to implement a function that returns the index of the given n, in a generated array containing the portion of the Connell sequence. If n is not in the array, you have to return a string "Not Found".
//Examples
//connellSequence(1, 3, 4) ➞ 2
//// sequence = [1, 2, 4, 5, 7, 9]
//// Number 4 is at index 2
//
//connellSequence(2, 3, 4) ➞ 1
//// sequence = [2, 4, 5, 7, 9]
//// Number 4 is at index 1
//
//connellSequence(4, 5, 22) ➞ "Not Found"
//// sequence = [10, 12, 14, 16, 17, 19, 21, 23, 25]
//// Number 22 is not in the sequence
//Notes
//It is possible to solve this in O(1) time and space complexity!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(connellSequence(1, 3, 4), 2, "Example #1")
//Test.assertEquals(connellSequence(2, 3, 4), 1, "Example #2")
//Test.assertEquals(connellSequence(4, 5, 22), "Not Found", "Example #3")
//Test.assertEquals(connellSequence(1, 1, 1), 0)
//Test.assertEquals(connellSequence(1, 1, 0), "Not Found")
//Test.assertEquals(connellSequence(1, 100, 100), 54)
//Test.assertEquals(connellSequence(4, 5, 77), "Not Found")
//Test.assertEquals(connellSequence(11, 22, 300), 103)
//Test.assertEquals(connellSequence(30, 32, 974), 67)
//Test.assertEquals(connellSequence(13, 88, 300), 80)
//Test.assertEquals(connellSequence(1, 1000, 8000), 4044)
//Test.assertEquals(connellSequence(111, 1000, 8000), "Not Found")
//Test.assertEquals(connellSequence(10000, 11000, 120999810), 10510404)

