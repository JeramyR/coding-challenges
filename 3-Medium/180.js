

//title: Cluster Vowels, Single Out Consonants

//tags: regex,strings

//url: https://edabit.com/challenge/9MbruYbn8NWRzG2vC

//Description:
//Write a function that takes in a word and splits the consonants one by one, but keeps the vowels in a cluster.
//Examples
//split("beautifully") ➞ ["b", "eau", "t", "i", "f", "u", "l", "l", "y"]
//
//split("spoonful") ➞ ["s", "p", "oo", "n", "f", "u", "l"]
//
//split("swimming") ➞ ["s", "w", "i", "m", "m", "i", "n", "g"]
//Notes
//Vowels are: a, e, i, o, u.
//All letters will be in lower case.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(split("beautifully"), ["b", "eau", "t", "i", "f", "u", "l", "l", "y"])
//Test.assertSimilar(split("spoonful"), ["s", "p", "oo", "n", "f", "u", "l"])
//Test.assertSimilar(split("swimming"), ["s", "w", "i", "m", "m", "i", "n", "g"])
//Test.assertSimilar(split("courage"), ["c", "ou", "r", "a", "g", "e"])
//Test.assertSimilar(split("cooing"), ["c", "ooi", "n", "g"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Read the Abacus (Part 1: Russian Schoty)

//tags: arrays,loops,strings

//url: https://edabit.com/challenge/5DfJYH9bXn4fG4Zui

//Description:
//The Russian schoty is type of abacus (counting tool) that is used by sliding threaded beads along horizontal wires. An example schoty would have 7 wires, each holding 10 beads. Each bead, when moved to the left, would count as 1 unit. Starting from the bottom wire and moving up, the units increase by a factor of 10. If we use "O" for a bead and "-" to show the wire, we can represent the schoty as follows:
//---OOOOOOOOOO  millions
//---OOOOOOOOOO  hundred-thousands
//---OOOOOOOOOO  ten-thousands
//---OOOOOOOOOO  thousands
//---OOOOOOOOOO  hundreds
//---OOOOOOOOOO  tens 
//---OOOOOOOOOO  ones
//To read the number, we count the beads on the left-hand side of each wire. In the example below, the number is 501264:
//---OOOOOOOOOO  0
//OOOOO---OOOOO  5
//---OOOOOOOOOO  0
//O---OOOOOOOOO  1
//OO---OOOOOOOO  2
//OOOOOO---OOOO  6
//OOOO---OOOOOO  4
//Given an array of strings representing each wire in the schoty, return the number being displayed.
//Examples
//schoty([
//  "---OOOOOOOOOO",
//  "---OOOOOOOOOO",
//  "---OOOOOOOOOO",
//  "OOO---OOOOOOO",
//  "O---OOOOOOOOO",
//  "OOOOOOOOO---O",
//  "OO---OOOOOOOO"
//]) ➞ 3192
//
//schoty([
//  "OO---OOOOOOOO",
//  "O---OOOOOOOOO",
//  "OOOOO---OOOOO",
//  "---OOOOOOOOOO",
//  "---OOOOOOOOOO",
//  "---OOOOOOOOOO",
//  "---OOOOOOOOOO"
//]) ➞ 2150000
//Notes
//For more info on how to use a schoty, please check the Resources tab. This challenge ignores the traditional 4-bead wires used for quarter-ruble and quarter-kopek calculations.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(schoty(['OOOOO---OOOOO', '---OOOOOOOOOO', 'O---OOOOOOOOO', 'O---OOOOOOOOO', '---OOOOOOOOOO', 'OOOOOOOO---OO', 'OO---OOOOOOOO']), 5011082)
//Test.assertEquals(schoty(['OOOOOO---OOOO', 'OOOOOO---OOOO', 'OOOO---OOOOOO', 'OOOOOOO---OOO', 'O---OOOOOOOOO', 'OOOOOOO---OOO', 'OOOOOOO---OOO']), 6647177)
//Test.assertEquals(schoty(['---OOOOOOOOOO', '---OOOOOOOOOO', '---OOOOOOOOOO', 'OO---OOOOOOOO', 'O---OOOOOOOOO', '---OOOOOOOOOO', 'OOOOOOOOO---O']), 2109)
//Test.assertEquals(schoty(['O---OOOOOOOOO', 'OOO---OOOOOOO', 'OOOOOOO---OOO', '---OOOOOOOOOO', 'OOOOOOOO---OO', 'OO---OOOOOOOO', 'OOOOOOO---OOO']), 1370827)
//Test.assertEquals(schoty(['---OOOOOOOOOO', 'OOOOOOOOO---O', 'OOO---OOOOOOO', '---OOOOOOOOOO', 'OO---OOOOOOOO', 'OOOOOO---OOOO', 'OOOOO---OOOOO']), 930265)
//Test.assertEquals(schoty(['---OOOOOOOOOO', 'OOOOOO---OOOO', 'OOOOOOO---OOO', 'OOOOOOO---OOO', '---OOOOOOOOOO', '---OOOOOOOOOO', 'OOOOOOOO---OO']), 677008)
//Test.assertEquals(schoty(['OOOOOOOOO---O', 'OOOOOOO---OOO', 'OOOOO---OOOOO', 'OOOOOOO---OOO', '---OOOOOOOOOO', 'O---OOOOOOOOO', 'OOO---OOOOOOO']), 9757013)
//Test.assertEquals(schoty(['OOOOOOO---OOO', 'O---OOOOOOOOO', 'OOOO---OOOOOO', 'O---OOOOOOOOO', 'OO---OOOOOOOO', 'O---OOOOOOOOO', 'OOOOOOO---OOO']), 7141217)
//Test.assertEquals(schoty(['---OOOOOOOOOO', '---OOOOOOOOOO', 'OOOO---OOOOOO', 'OOOOOOO---OOO', 'O---OOOOOOOOO', 'OOOOOOOO---OO', 'OOO---OOOOOOO']), 47183)
//Test.assertEquals(schoty(['OOOOOO---OOOO', '---OOOOOOOOOO', '---OOOOOOOOOO', 'O---OOOOOOOOO', 'OOOOOOOOO---O', 'OOOOO---OOOOO', '---OOOOOOOOOO']), 6001950)
//Test.assertEquals(schoty(['---OOOOOOOOOO', '---OOOOOOOOOO', 'OOOOOOOOO---O', 'OOOOOOOO---OO', 'OOOOOOOOO---O', 'OO---OOOOOOOO', 'OOOOOOOO---OO']), 98928)
//Test.assertEquals(schoty(['OOOOO---OOOOO', 'OOOOOOOO---OO', 'OOOOOOOOO---O', 'OOO---OOOOOOO', 'O---OOOOOOOOO', 'OOOOOOOOO---O', 'OOOOOO---OOOO']), 5893196)
//Test.assertEquals(schoty(['OO---OOOOOOOO', 'OOOOOO---OOOO', 'OOOOOOOOO---O', 'OOOOOOO---OOO', 'OOOOOOOO---OO', 'OOOOO---OOOOO', 'OOOOOOOO---OO']), 2697858)
//Test.assertEquals(schoty(['---OOOOOOOOOO', '---OOOOOOOOOO', 'OOOOOO---OOOO', '---OOOOOOOOOO', 'OOOO---OOOOOO', 'O---OOOOOOOOO', 'OOOO---OOOOOO']), 60414)
//Test.assertEquals(schoty(['OO---OOOOOOOO', 'OOOOOO---OOOO', 'OOO---OOOOOOO', 'OOO---OOOOOOO', 'OOO---OOOOOOO', 'OO---OOOOOOOO', '---OOOOOOOOOO']), 2633320)
//Test.assertEquals(schoty(['OOOOOOOOO---O', '---OOOOOOOOOO', 'OOOOO---OOOOO', 'O---OOOOOOOOO', 'OOOOOOOO---OO', '---OOOOOOOOOO', 'OOOOOOOOO---O']), 9051809)
//Test.assertEquals(schoty(['OO---OOOOOOOO', 'OO---OOOOOOOO', 'OOOOOOO---OOO', '---OOOOOOOOOO', 'OOOOOOO---OOO', 'OOOO---OOOOOO', 'OOOOOOOOO---O']), 2270749)
//Test.assertEquals(schoty(['OOOOOOO---OOO', 'OOOOOOOOO---O', '---OOOOOOOOOO', '---OOOOOOOOOO', 'OO---OOOOOOOO', '---OOOOOOOOOO', 'OOOO---OOOOOO']), 7900204)
//Test.assertEquals(schoty(['OOOOOO---OOOO', 'OOOO---OOOOOO', 'OOOOOO---OOOO', 'OOOOOOOO---OO', '---OOOOOOOOOO', 'OOOOOOO---OOO', 'OOOOOO---OOOO']), 6468076)
//Test.assertEquals(schoty(['OOOOOOOO---OO', 'OOOOOOOOO---O', 'OOOO---OOOOOO', 'OOOOOO---OOOO', 'OOOOO---OOOOO', '---OOOOOOOOOO', 'OOOO---OOOOOO']), 8946504)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Learn Lodash: _.difference, Find the Difference in Arrays

//tags: arrays

//url: https://edabit.com/challenge/D5RD2zxsmykLg8GCE

//Description:
//According to the lodash documentation, _.difference(array, [values]) creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.
//If you wanted to use this function in the real world you would just import lodash and use it but this challenge requires you to write your own version using vanilla javascript. Hopefully this enables you to better understand how the function works .
//Arguments
//array (Array): The array to inspect.
//[values] (...Array): The any number of arrays containing the values to exclude.
//Returns
//(Array): Returns the new array of filtered values.
//Examples
//difference([2, 1], [2, 3]);  // => [1]
//
//difference(["banana", "orange", "apple"], ["orange", "apple"]);  // => ["banana"]
//Notes
//Do not attempt to import lodash; you are simply writing your own version.
//This entire series of challenges can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(difference([1,2,3], [2,3,4]), [1]);
//Test.assertSimilar(difference(["cat", "dog", "boy"], ["cat", "dog"], ["aardvark", "camel"]), ["boy"]);
//Test.assertSimilar(difference(["dragon", null, 9], ["sickle", "cardigan"], ["aardvark", "camel"], ['football', 'dragon']), [ null, 9]);

