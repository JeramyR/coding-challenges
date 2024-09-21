

//title: Underscore-Hash Staircase

//tags: arrays,logic,strings

//url: https://edabit.com/challenge/inecXu7CtXyvNekxu

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
//The string to be returned is adjoined with the newline character (\n).
//A recursive version of this challenge can be found here.

//code area
///////////////////////////////////////////////////////////////////////////
// const staircase = num => {
//     let x = Number, y = Number
//     let str = ''

//     if (num > 0) {
//         x = 1, y = num - 1
//         while (x < num + 1) {
//             x !== 1 ?
//                 str += '\n' + '_'.repeat(y) + '#'.repeat(x)
//                 :
//                 str += '_'.repeat(y) + '#'.repeat(x)
//             x++
//             y--
//         }
//     }
//     else {
//         x = 0, y = -num
//         while (x < -num) {
//             x < 1 ?
//                 str += '_'.repeat(x) + '#'.repeat(y)
//                 :
//                 str += '\n' + '_'.repeat(x) + '#'.repeat(y)
//             x++
//             y--
//         }
//     }
//     return str
// }
//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(staircase(3), "__#\n_##\n###")
// Test.assertEquals(staircase(7), "______#\n_____##\n____###\n___####\n__#####\n_######\n#######")
// Test.assertEquals(staircase(2), "_#\n##")
// Test.assertEquals(staircase(-8), "########\n_#######\n__######\n___#####\n____####\n_____###\n______##\n_______#")
// Test.assertEquals(staircase(4), "___#\n__##\n_###\n####")
// Test.assertEquals(staircase(-12), "############\n_###########\n__##########\n___#########\n____########\n_____#######\n______######\n_______#####\n________####\n_________###\n__________##\n___________#")
// Test.assertEquals(staircase(11), "__________#\n_________##\n________###\n_______####\n______#####\n_____######\n____#######\n___########\n__#########\n_##########\n###########")
// Test.assertEquals(staircase(-6), "######\n_#####\n__####\n___###\n____##\n_____#")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Expensive Words

//tags: algorithms,strings

//url: https://edabit.com/challenge/KKFx2xWbvR4NhyqwM

//Description:
//Each letter in a sentence is worth its position in the alphabet (i.e. a = 1, b = 2, c = 3, etc...). However, if a word is all in UPPERCASE, the value of that word is doubled.
//Create a function which returns the value of a sentence.
//getSentenceValue("abc ABC Abc") ➞ 24
//// a = 1, b = 2, c = 3
//
//// abc = 1 + 2 + 3 = 6
//// ABC = (1+2+3) * 2 = 12 (ALL letters are in uppercase)
//// Abc = 1 + 2 + 3 = 6 (NOT ALL letters are in uppercase)
//
//// 6 + 12 + 6 = 24
//Examples
//getSentenceValue("HELLO world") ➞ 176
//
//getSentenceValue("Edabit is LEGENDARY") ➞ 251
//
//getSentenceValue("Her seaside sea-shelling business is really booming!") ➞ 488
//Notes
//Ignore spaces and punctuation.
//Remember that the value of a word isn't doubled unless all the letters in it are uppercase.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(getSentenceValue('abc ABC Abc'), 24)
//Test.assertEquals(getSentenceValue('HELLO world'), 176)
//Test.assertEquals(getSentenceValue('Edabit is Legendary'), 160)
//Test.assertEquals(getSentenceValue('Her seaside sea-shelling business is really booming!'), 488)
//Test.assertEquals(getSentenceValue('edabit Edabit EDABIT'), 164)
//Test.assertEquals(getSentenceValue('expensive words'), 198)
//Test.assertEquals(getSentenceValue('FISH AND CHIPS'), 232)
//Test.assertEquals(getSentenceValue('this sentence is like a piece of hay in a needle stack'), 423)
//Test.assertEquals(getSentenceValue("CAN YOU STOP SHOUTING?! I CAN'T HEAR MYSELF THINK!!!"), 966)
//Test.assertEquals(getSentenceValue('a whisper in the wind...'), 205)
//Test.assertEquals(getSentenceValue(',.;[,.;][,.;[,.][,.;,.]['), 0)
//Test.assertEquals(getSentenceValue("Isn't it funny how the word BIG is physically smaller than the word small?"), 777)
//Test.assertEquals(getSentenceValue('this is a really pricey sentence: ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ'), 2503)
//Test.assertEquals(getSentenceValue('                    '), 0)
//Test.assertEquals(getSentenceValue(''), 0)
//Test.assertEquals(getSentenceValue('Oranges and APPLES'), 236)
//Test.assertEquals(getSentenceValue('Edabit is LEGENDARY'), 251)
//​
//// made by @Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: A Periodic Series

//tags: loops,strings

//url: https://edabit.com/challenge/oxbB9va7ejSMoCf9B

//Description:
//This challenge involves a series that can start with any string of digits. The next term in the series is found by adding the digits of the previous term, appending that sum to the previous term, and then truncating the leftmost digits so that the number of digits in the terms is always the same.
//Let's start with "1234". The sum of the digits is 10. Appending gives us "123410", then truncating the left two digits results in "3410". The next three terms are "4108", "0813", "1312". The series becomes periodic when a term that previously appeared occurs again.
//Example:
//"124", "247", "713", "311", "115", "157", "713", "311" ...
//This series becomes periodic at a length of 6 before "713" reappears.
//Create a function whose argument is a digit string (the first term) and returns the length of the series when it first becomes periodic.
//Examples
//periodic("1") ➞ 1
//
//periodic("3061") ➞ 7
//
//periodic("02468") ➞ 178
//
//periodic("314159265") ➞ 12210
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(periodic("2"), 1)
//Test.assertEquals(periodic("22"), 13)
//Test.assertEquals(periodic("157"), 4)
//Test.assertEquals(periodic("1234567"), 943)
//Test.assertEquals(periodic("1818"), 1)
//Test.assertEquals(periodic("0000001"), 778)

