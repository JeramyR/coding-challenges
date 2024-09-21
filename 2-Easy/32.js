

//title: Spelling it Out

//tags: arrays,strings

//url: https://edabit.com/challenge/Akgh37c6dccEsNBt6

//Description:
//Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.
//Examples
//spelling("bee") ➞ ["b", "be", "bee"]
//
//spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"]
//
//spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(spelling("bee"), ['b', 'be', 'bee'])
//Test.assertSimilar(spelling("cake"), ['c', 'ca', 'cak', 'cake'])
//Test.assertSimilar(spelling("happy"), ['h', 'ha', 'hap', 'happ', 'happy'])
//Test.assertSimilar(spelling("eagerly"), ['e', 'ea', 'eag', 'eage', 'eager', 'eagerl', 'eagerly'])
//Test.assertSimilar(spelling("believe"), ['b', 'be', 'bel', 'beli', 'belie', 'believ', 'believe'])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Join Two Portions of a Path

//tags: language_fundamentals,strings

//url: https://edabit.com/challenge/ezv3TCDcgAYhyL3R2

//Description:
//Write a function that receives two portions of a path and joins them. The portions will be joined with the "/" separator. There could be only one separator and if it is not present it should be added.
//Examples
//joinPath("portion1", "portion2") ➞ "portion1/portion2"
//
//joinPath("portion1/", "portion2") ➞ "portion1/portion2"
//
//joinPath("portion1", "/portion2") ➞ "portion1/portion2"
//
//joinPath("portion1/", "/portion2") ➞ "portion1/portion2"
//Notes
//Try not to solve this challenge using only if-else conditions.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(joinPath("portion1", "portion2"), "portion1/portion2")
//Test.assertEquals(joinPath("portion1/", "portion2"), "portion1/portion2")
//Test.assertEquals(joinPath("portion1", "/portion2"), "portion1/portion2")
//Test.assertEquals(joinPath("portion1/", "/portion2"), "portion1/portion2")
//Test.assertEquals(joinPath("5wf7fny", "stJKXlc8"), "5wf7fny/stJKXlc8")
//Test.assertEquals(joinPath("5wf7fny/", "stJKXlc8"), "5wf7fny/stJKXlc8")
//Test.assertEquals(joinPath("5wf7fny", "/stJKXlc8"), "5wf7fny/stJKXlc8")
//Test.assertEquals(joinPath("5wf7fny/", "/stJKXlc8"), "5wf7fny/stJKXlc8")
//Test.assertEquals(joinPath("FKBZOBHo", "GNcYGnB"), "FKBZOBHo/GNcYGnB")
//Test.assertEquals(joinPath("FKBZOBHo/", "GNcYGnB"), "FKBZOBHo/GNcYGnB")
//Test.assertEquals(joinPath("FKBZOBHo", "/GNcYGnB"), "FKBZOBHo/GNcYGnB")
//Test.assertEquals(joinPath("FKBZOBHo/", "/GNcYGnB"), "FKBZOBHo/GNcYGnB")
//Test.assertEquals(joinPath("vL533Y3", "uVz3nul"), "vL533Y3/uVz3nul")
//Test.assertEquals(joinPath("vL533Y3/", "uVz3nul"), "vL533Y3/uVz3nul")
//Test.assertEquals(joinPath("vL533Y3", "/uVz3nul"), "vL533Y3/uVz3nul")
//Test.assertEquals(joinPath("vL533Y3/", "/uVz3nul"), "vL533Y3/uVz3nul")
//Test.assertEquals(joinPath("kfDOTwf", "Xr8viY8e"), "kfDOTwf/Xr8viY8e")
//Test.assertEquals(joinPath("kfDOTwf/", "Xr8viY8e"), "kfDOTwf/Xr8viY8e")
//Test.assertEquals(joinPath("kfDOTwf", "/Xr8viY8e"), "kfDOTwf/Xr8viY8e")
//Test.assertEquals(joinPath("kfDOTwf/", "/Xr8viY8e"), "kfDOTwf/Xr8viY8e")
//Test.assertEquals(joinPath("F4tBPmoV", "Lv18joOw"), "F4tBPmoV/Lv18joOw")
//Test.assertEquals(joinPath("F4tBPmoV/", "Lv18joOw"), "F4tBPmoV/Lv18joOw")
//Test.assertEquals(joinPath("F4tBPmoV", "/Lv18joOw"), "F4tBPmoV/Lv18joOw")
//Test.assertEquals(joinPath("F4tBPmoV/", "/Lv18joOw"), "F4tBPmoV/Lv18joOw")
//Test.assertEquals(joinPath("7ASOjVuT", "wwPOgKX"), "7ASOjVuT/wwPOgKX")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: First and Last Index

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/AYpxyzbnbS7BGSgvd

//Description:
//Given a word, write a function that returns the first index and the last index of a character.
//Examples
//charIndex("hello", "l") ➞ [2, 3]
//// The first "l" has index 2, the last "l" has index 3.
//
//charIndex("circumlocution", "c") ➞ [0, 8]
//// The first "c" has index 0, the last "c" has index 8.
//
//charIndex("happy", "h") ➞ [0, 0]
//// Only one "h" exists, so the first and last index is 0.
//
//charIndex("happy", "e") ➞ undefined
//// "e" does not exist in "happy", so we return undefined.
//Notes
//If the character does not exist in the word, return undefined.
//If only one instance of the character exists, the first and last index will be the same.
//Check the Resources tab for hints.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(charIndex('hello', 'l'), [2, 3])
//Test.assertSimilar(charIndex('circumlocution', 'r'), [2, 2])
//Test.assertSimilar(charIndex('circumlocution', 'i'), [1, 11])
//Test.assertSimilar(charIndex('circumlocution', 'c'), [0, 8])
//Test.assertSimilar(charIndex('happy', 'h'), [0, 0])
//Test.assertSimilar(charIndex('happy', 'p'), [2, 3])
//Test.assertSimilar(charIndex('happy', 'e'), undefined)

