

//title: Enter the Matrix

//tags: arrays,formatting,strings

//url: https://edabit.com/challenge/3mKNTsZ5f7b9hHTky

//Description:
//In this challenge, you have to obtain a sentence from the elements of a given matrix. In the matrix, each word of the sentence follows a columnar order from the top to the bottom, instead of the usual left-to-right order: it's time for transposition!
//Given a matrix mtx, implement a function that returns the complete sentence as a string, with the words separated by a space between them.
//Examples
//transposeMatrix([
//  ["Enter"],
//  ["the"],
//  ["Matrix!"]
//]) ➞ "Enter the Matrix!"
//
//transposeMatrix([
//  ["The", "are"],
//  ["columns", "rows."]
//]) ➞ "The columns are rows."
//
//transposeMatrix([
//  ["You", "the"],
//  ["must", "table"],
//  ["transpose", "order."]
//]) ➞ "You must transpose the table order."
//Notes
//All given matrices are regular, as to say that each column has the same length.
//Punctuation is already given, you just have to add the spaces in the returned string.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(transposeMatrix([
//  ["Enter"],
//  ["the"],
//  ["Matrix."]
//]), "Enter the Matrix.")
//​
//Test.assertEquals(transposeMatrix([
//  ["Unfortunately,", "be", "is.", "see"], 
//  ["no", "told", "You'll", "it"], 
//  ["one", "what", "have", "for"], 
//  ["can", "Matrix", "to", "yourself."]
//]), "Unfortunately, no one can be told what Matrix is. You'll have to see it for yourself.")
//​
//Test.assertEquals(transposeMatrix([
//  ["Matrix", "that"],
//  ["is", "system"],
//  ["a", "is"],
//  ["system", "our"],
//  ["Neo,", "enemy."]
//]), "Matrix is a system Neo, that system is our enemy.")
//​
//Test.assertEquals(transposeMatrix([
//  ["If", "killed", "you"],
//  ["you", "in", "die"],
//  ["are", "Matrix", "here?"]

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Combined Consecutive Sequence

//tags: arrays,validation

//url: https://edabit.com/challenge/HqWmsX885jpZqMkdL

//Description:
//Write a function that returns true if two arrays, when combined, form a consecutive sequence. A consecutive sequence is a sequence without any gaps in the integers, e.g. 1, 2, 3, 4, 5 is a consecutive sequence, but 1, 2, 4, 5 is not.
//Examples
//consecutiveCombo([7, 4, 5, 1], [2, 3, 6]) ➞ true
//
//consecutiveCombo([1, 4, 6, 5], [2, 7, 8, 9]) ➞ false
//
//consecutiveCombo([1, 4, 5, 6], [2, 3, 7, 8, 10]) ➞ false
//
//consecutiveCombo([44, 46], [45]) ➞ true
//Notes
//The input arrays will have unique values.
//The input arrays can be in any order.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(consecutiveCombo([1, 4, 5, 7], [2, 3, 6]), true)
//Test.assertEquals(consecutiveCombo([1, 4, 5, 6], [2, 7, 8, 9]), false)
//Test.assertEquals(consecutiveCombo([1, 4, 5, 6], [2, 3, 7, 8, 10]), false)
//Test.assertEquals(consecutiveCombo([7, 5, 4, 1], [2, 3, 6, 8]), true)
//Test.assertEquals(consecutiveCombo([33, 34, 40], [39, 38, 37, 36, 35, 32, 31, 30]), true)
//Test.assertEquals(consecutiveCombo([1, 4, 5, 6], [2, 3, 7, 8, 10]), false)
//Test.assertEquals(consecutiveCombo([44, 46], [45]), true)
//Test.assertEquals(consecutiveCombo([4, 3, 1], [2, 5]), true)
//Test.assertEquals(consecutiveCombo([4, 3, 1], [2, 5, 7, 6]), true)
//Test.assertEquals(consecutiveCombo([4, 3, 1], [7, 6, 5]), false)
//Test.assertEquals(consecutiveCombo([4, 3, 1], [0, 7, 6, 5]), false)
//Test.assertEquals(consecutiveCombo([44, 46], [45]), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Triple Letter Groupings

//tags: algorithms,arrays,loops,strings

//url: https://edabit.com/challenge/LoBo2DoWQuuzSr6Ft

//Description:
//Given a string, return a sorted array of words formed from the first three letters, then the next three letters, shifting by only one.
//Worked Example
//threeLetterCollection("edabit") ➞ ["abi", "bit", "dab", "eda"]
//// 1st word: "eda"
//// 2nd word: "dab"
//// 3rd word: "abi"
//// 4th word: "bit"
//// Remember to sort the array!
//Examples
//threeLetterCollection("slap") ➞ ["lap", "sla"]
//
//threeLetterCollection("click") ➞ ["cli", "ick", "lic"]
//
//threeLetterCollection("cat") ➞ ["cat"]
//
//threeLetterCollection("hi") ➞ []
//Notes
//Return an empty array if given a word with less than 3 letters.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(threeLetterCollection('slap'), ['lap', 'sla'])
//Test.assertSimilar(threeLetterCollection('click'), ['cli', 'ick', 'lic'])
//Test.assertSimilar(threeLetterCollection('cat'), ['cat'])
//Test.assertSimilar(threeLetterCollection('hi'), [])
//Test.assertSimilar(threeLetterCollection('e'), [])
//Test.assertSimilar(threeLetterCollection(''), [])
//Test.assertSimilar(threeLetterCollection('programming'), ['amm', 'gra', 'ing', 'min', 'mmi', 'ogr', 'pro', 'ram', 'rog'])
//Test.assertSimilar(threeLetterCollection('antidisestablishmentarianism'), ['abl', 'ani', 'ant', 'ari', 'bli', 'dis', 'ent', 'est', 'hme', 'ian', 'idi', 'ise', 'ish', 'ism', 'lis', 'men', 'nis', 'nta', 'nti', 'ria', 'ses', 'shm', 'sta', 'tab', 'tar', 'tid'])
//Test.assertSimilar(threeLetterCollection('zoology'), ['log', 'ogy', 'olo', 'ool', 'zoo'])
//Test.assertSimilar(threeLetterCollection('assassination'), ['ass', 'ass', 'ati', 'ina', 'ion', 'nat', 'sas', 'sin', 'ssa', 'ssi', 'tio'])
//Test.assertSimilar(threeLetterCollection('bookkeeper'), ['boo', 'eep', 'epe', 'kee', 'kke', 'okk', 'ook', 'per'])

