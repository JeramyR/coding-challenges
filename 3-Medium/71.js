

//title: One Button Messaging Device

//tags: logic,loops,math

//url: https://edabit.com/challenge/TEvX5dzA4RS7ZLtxe

//Description:
//Imagine a messaging device with only one button. For the letter A, you press the button one time, for E, you press it five times, for G, it's pressed seven times, etc, etc.
//Write a function that takes a string (the message) and returns the total number of times the button is pressed.
//Examples
//howManyTimes("abde") ➞ 12
//
//howManyTimes("azy") ➞ 52
//
//howManyTimes("qudusayo") ➞ 123
//Notes
//Ignore spaces.
//The given string argument will be in lower case.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(howManyTimes("qudusayo"), 123)
//Test.assertEquals(howManyTimes("que"), 43)
//Test.assertEquals(howManyTimes("abd"), 7)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Fruit Salad 🍇🍓🍎

//tags: arrays,loops,sorting,strings

//url: https://edabit.com/challenge/pkSFRoDrPt2PvFsYd

//Description:
//Fruit salads are served best when the fruits are sliced and diced into small chunks!
//For this challenge, slice each fruit in half and sort the chunks alphabetically. This recipe tastes best when the chunks are joined together to make a string.
//Worked Example
//fruitSalad(["apple", "pear", "grapes"]) ➞ "apargrapepesple"
//
//// Chunks: ["ap", "ple", "pe", "ar", "gra", "pes"]
//// Sorted chunks: ["ap", "ar", "gra", "pe", "pes", "ple"]
//// Final string: "apargrapepesple"
//Examples
//fruitSalad(["apple", "pear", "grapes"]) ➞ "apargrapepesple"
//
//fruitSalad(["raspberries", "mango"]) ➞ "erriesmangoraspb"
//
//fruitSalad(["banana"]) ➞ "anaban"
//Notes
//If a fruit has an odd number of letters, make the right side larger than the left.
//For example: "apple" will be sliced into "ap" and "ple".
//All fruits will be given in lowercase.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(fruitSalad(['apple', 'pear', 'grapes']), 'apargrapepesple')
//Test.assertEquals(fruitSalad(['banana', 'kiwi', 'strawberry', 'blueberries']), 'anabanberryblueberrieskistrawwi')
//Test.assertEquals(fruitSalad(['raspberries', 'mango']), 'erriesmangoraspb')
//Test.assertEquals(fruitSalad(['banana']), 'anaban')
//​
//// Author: Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Compare by ASCII Codes

//tags: loops,strings

//url: https://edabit.com/challenge/AKocM4opFZBrva2JX

//Description:
//Create a function that compares two words based on the sum of their ASCII codes and returns the word with the smaller ASCII sum.
//Examples
//asciiSort(["hey", "man"]) ➞ "man"
//// ["h", "e", "y"] ➞ sum([104, 101, 121]) ➞ 326
//// ["m", "a", "n"] ➞ sum([109, 97, 110]) ➞ 316
//
//asciiSort(["majorly", "then"]) ➞ "then"
//
//asciiSort(["victory", "careless"]) ➞ "victory"
//Notes
//Both words will have strictly different ASCII sums.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(asciiSort(["hey", "man"]), "man")
//Test.assertEquals(asciiSort(["majorly", "then"]), "then")
//Test.assertEquals(asciiSort(["magic", "kingdom"]), "magic")
//Test.assertEquals(asciiSort(["bored", "shampoo"]), "bored")
//Test.assertEquals(asciiSort(["victory", "careless"]), "victory")

