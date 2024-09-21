

//title: Pokémon Specials Contest

//tags: games,loops,math,strings

//url: https://edabit.com/challenge/HfCqbPwitkeYsedk7

//Description:
//You are given data containing information for the first 100 Pokémon as well as special effectiveness relationships. Use this data to define a function that takes two Pokémon numbers and calculates which Pokémon wins based on their types.
//How to calculate?
//Given two Pokémon, say #3 (Venusaur) and #6 (Charizard), use the given data to obtain their respective types—(grass, poison), (fire, flying).
//We'll start with Venusaur. His first type is grass. For each of Venusaur's opponent's types, use the data to obtain grasss effectiveness. The grass is 0.5x (not very) effective against both fire and flying. Multiply these together: 0.5 * 0.5 = 0.25. So 'grass' is 0.25 effective against Charizard. You'll repeat this with Venusaur's second type, poison, and Venusar will receive two scores for his two types: (0.25, 1.0). Average these together to get Venusaur's final score: 0.625. When Pokémon only have one type they will only have one score and no averaging is necessary.
//When you've done this for both Pokémon you'll end up with two scores—one for each Pokémon. Return the number of the Pokémon with the higher score or return -1 for a tie.
//Examples
//pkSpecialWinner(33, 28) ➞ 28
//
//pkSpecialWinner(77, 52) ➞ -1
//
//pkSpecialWinner(25, 44) ➞ 44
//
//pkSpecialWinner(57, 51) ➞ -1
//
//pkSpecialWinner(98, 34) ➞ 98
//Notes
//A type is doubled when it is very effective and halved for not very effective uses. For combinations, such as fire against a bug and grass type Pokémon, the effectiveness scores are multiplied. So fire would be four times as effective against such an opponent. See this for more information.
//Note that when a Pokémon has two types they will have two effectiveness scores and this function requires these to be averaged. Don't mix up the multiplications and averages.
//Thanks to the providers of the data:
//https://www.kaggle.com/dizzypanda/gen-1-pokemon
//https://bulbapedia.bulbagarden.net/wiki/Type
//Bonus Challenge
//Which Pokémon beats the most of its opponents in this dataset? See my answer in the comments.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(pkSpecialWinner(4, 14), 4)
//Test.assertEquals(pkSpecialWinner(71, 54), 71)
//Test.assertEquals(pkSpecialWinner(43, 44), -1)
//Test.assertEquals(pkSpecialWinner(83, 33), -1)
//Test.assertEquals(pkSpecialWinner(41, 45), 41)
//Test.assertEquals(pkSpecialWinner(5, 80), 80)
//Test.assertEquals(pkSpecialWinner(92, 51), 51)
//Test.assertEquals(pkSpecialWinner(27, 12), 12)
//Test.assertEquals(pkSpecialWinner(18, 72), -1)
//Test.assertEquals(pkSpecialWinner(17, 7), -1)
//Test.assertEquals(pkSpecialWinner(68, 6), 6)
//Test.assertEquals(pkSpecialWinner(60, 97), -1)
//Test.assertEquals(pkSpecialWinner(63, 74), -1)
//Test.assertEquals(pkSpecialWinner(81, 30), -1)
//Test.assertEquals(pkSpecialWinner(49, 37), 37)
//Test.assertEquals(pkSpecialWinner(24, 76), 76)
//Test.assertEquals(pkSpecialWinner(91, 82), 82)
//Test.assertEquals(pkSpecialWinner(34, 68), 34)
//Test.assertEquals(pkSpecialWinner(63, 51), -1)
//Test.assertEquals(pkSpecialWinner(90, 17), -1)
//Test.assertEquals(pkSpecialWinner(61, 65), -1)
//Test.assertEquals(pkSpecialWinner(31, 40), -1)
//Test.assertEquals(pkSpecialWinner(20, 3), -1)
//Test.assertEquals(pkSpecialWinner(58, 69), 58)
//Test.assertEquals(pkSpecialWinner(87, 65), -1)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: Case and Index Inverter

//tags: recursion,strings,validation

//url: https://edabit.com/challenge/eRLRgKyLWkPjdNN9G

//Description:
//Write a recursive function that takes a string input and returns the string in a reversed case and order.
//Examples
//invert("dLROW YM sI HsEt") ➞ "TeSh iS my worlD"
//
//invert("ytInIUgAsnOc") ➞ "CoNSaGuiNiTY"
//
//invert("step on NO PETS") ➞ "step on NO PETS"
//
//invert("XeLPMoC YTiReTXeD") ➞ "dExtErIty cOmplEx"
//Notes
//No empty strings and will not contain special characters or punctuation.
//You are expected to solve this challenge via recursion.
//You can check on the Resources tab for more details about recursion.
//An iterative version of this challenge can be found via this link.
//A collection of challenges in recursion can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const recursive = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
//Test.assertNotEquals(recursive(invert), false, "Recursion is required!")
//​
//let [strVector, resVector] = [
//  [
//    "dLROW YM sI HsEt", "This string is CASE and INDEX reversed", "ReVeRsIbLe", "rAmIfIcAtIoN", "IntellectualS",
//    "DESREVER xedni DNA esac SI GNIRTS SIHt", "ElBiSrEvEr", "nOiTaCiFiMaR", "sLAUTCELLETNi",
//    "CoNSaGuiNiTY", "step on NO PETS", "dExtErIty cOmplEx"
//  ], [
//    "TeSh iS my worlD", "DESREVER xedni DNA esac SI GNIRTS SIHt", "ElBiSrEvEr", "nOiTaCiFiMaR", "sLAUTCELLETNi",
//    "This string is CASE and INDEX reversed", "ReVeRsIbLe", "rAmIfIcAtIoN", "IntellectualS",
//    "ytInIUgAsnOc", "step on NO PETS", "XeLPMoC YTiReTXeD"
//  ]
//]
//for (let i in strVector) Test.assertEquals(invert(strVector[i]), resVector[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sherlock and the Valid String

//tags: regex,strings,validation

//url: https://edabit.com/challenge/Jt6ikwz9vCSTcDEzW

//Description:
//Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just one character at one index in the string s, and the remaining characters will occur the same number of times.
//Given a string, determine if it is valid. If so, return "YES", otherwise return "NO".
//s= abc
//// This is a valid string because frequencies are: {a: 1, b: 1, c: 1}
//
//s = abcc
//// This is a valid string because we can remove one c and have one
//// of each character in the remaining string.
//
//s = abccc
//// This string is not valid as we can only remove one occurrence of c.
//// That leaves character frequencies of: {a: 1, b: 1, c: 2}
//Examples
//isValid("aabbcd") ➞ "NO"
//
//isValid("aabbccddeefghi") ➞ "NO"
//
//isValid("abcdefghhgfedecba") ➞ "YES"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isValid('aabbccddeefghi'), "NO")
//Test.assertEquals(isValid('a'), "YES")
//Test.assertEquals(isValid('aabbcd'), "NO")
//Test.assertEquals(isValid('aabbccddeefghi'), "NO")
//Test.assertEquals(isValid('aaaabbcc'), "NO")
//Test.assertEquals(isValid('aabbc'), "YES")
//Test.assertEquals(isValid('aaaaabc'), "NO")
//Test.assertEquals(isValid('xxxaabbccrry'), "NO")
//Test.assertEquals(isValid('b'), "YES")
//​
//// Anshu Patel

