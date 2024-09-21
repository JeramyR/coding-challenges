

//title: Recursion: Sort and Find

//tags: arrays,recursion,sorting

//url: https://edabit.com/challenge/Ceuoo7Bfnrs3fSbxN

//Description:
//In this challenge, we'll take recursion to the next level, where we will embed a recursive function within a recursive function.
//Write a function that sorts the strings in an array (if the string is a palindrome, it will become part of the sorted array) and finds the longest non-palindromic string.
//Although these tasks are achievable with the use of some built-in Array functions, the purpose and intent of this challenge is for you to solve it recursively.
//Output Structure
//{longest: longest_non_palindromic, length: longest_length, palindromes: [...palindromic_strings]}
//Examples
//qualify(["wow", "relevance", "radar", "soundly", "intelligence", "racecar", "gradually"]) ➞ {"longest": "intelligence", "length": 12, "palindromes": ["racecar", "radar", "wow"]}
//
//qualify(["persistence", "anna", "civic", "perseverance", "kayak", "irrefutability"]) ➞ {"longest": "irrefutability", "length": 14, "palindromes": ["anna", "civic", "kayak"]}
//
//qualify(["level", "resistance", "madam", "arrogance", "unconsiderably", "mom", "noon"]) ➞ {"longest": "unconsiderably", "length": 14, "palindromes": ["level", "madam", "mom", "noon"]}
//Notes
//All items in the array are lowercase.
//In cases where two longest words are found, return the first.
//The use of reduce(), reduceRight(), map(), filter(), indexOf() and max() functions are restricted.
//You can read more about recursion (see Resources tab) if you aren't familiar with it yet or haven't fully understood the concept before taking up this challenge.
//If you think recursion is fun, check out this collection.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const excludes = f => !RegExp('indexOf|max|filter|map|reduceRight|reduce|reverse').test(f)
//const recurDou = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f)) &&
//  (`${f}`.match(/palindrome/gm)||[]).length >= 3
//Test.assertNotEquals(excludes(qualify), false, "A restricted function is found!")
//Test.assertNotEquals(recurDou(qualify), false, "A recursion within a recursion is required!")
//​
//let strVector = [
//  ["wow", "relevance", "radar", "soundly", "intelligence", "racecar", "gradually"],
//  ["persistence", "anna", "civic", "perseverance", "kayak", "irrefutability"],
//  ["level", "resistance", "madam", "arrogance", "unconsiderably", "mom", "noon"],
//  ["radicalities", "redder", "refer", "unlikely", "repaper", "rotator", "unbecoming"],
//  ["rotor", "irrevocable", "robustly", "sagas", "solos", "stats", "tenet", "irrelevance"],
//  ["gravitational", "maxam", "dad", "exceptionally", "salas", "accountability", "maam", "seremdipity"]],
//resVector = [
//  {"longest": "intelligence", "length": 12, "palindromes": ["racecar", "radar", "wow"]},
//  {"longest": "irrefutability", "length": 14, "palindromes": ["anna", "civic", "kayak"]},
//  {"longest": "unconsiderably", "length": 14, "palindromes": ["level", "madam", "mom", "noon"]},
//  {"longest": "radicalities", "length": 12, "palindromes": ["redder", "refer", "repaper", "rotator"]},
//  {"longest": "irrevocable", "length": 11, "palindromes": ["rotor", "sagas", "solos", "stats", "tenet"]},
//  {"longest": "accountability", "length": 14, "palindromes": ["dad", "maam", "maxam", "salas"]}]
//for (let i in strVector) Test.assertSimilar(qualify(strVector[i]), resVector[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Pairwise Swap

//tags: algorithms,arrays,data_structures,language_fundamentals

//url: https://edabit.com/challenge/W734eA84jRiwsN4FF

//Description:
//Given an array of elements, swap the elements of the array pairwise. If the array is of odd length, first swap pairwise until the last element, and then the last element must be swapped with the element in the array which has the highest ASCII representation score in the modified array (e.g. ASCII representation of "Arun" would be: 65 + 114 + 117 + 110 = 406).
//If two elements have the same ASCII representation, swap the last element of the odd length array with the element which is having the least index in the modified (the array in which pairwise swaps have been done until the second last element) array.
//For example: if the array is [1, 2, 3, 4], we see it is having even length, so it becomes [2, 1, 4, 3].
//If the array is [56, 123, 41, 321, 232] as it is an odd length array, first we swap it pairwise and the array becomes [123, 56, 321, 41, 232] and then 232 has the highest ASCII score, so we swap the last element with itself.
//Examples
//pairwiseSwap[1, 2, 3, 4] ➞ [2, 1, 4, 3]
//
//pairwiseSwap[-8, "Arun", "Bob", 34.5, 12] ➞ [12, -8, 34.5, "Bob", "Arun"]
//
//pairwiseSwap[56, 123, 41, 321, 232] ➞ [123, 56, 321, 41, 232]
//
//pairwiseSwap["Nura", "Uam", "Ulgi", "Nurav", "Nayrus"] ➞ ["Uam", "Nura", "Nurav", "Ulgi", "Nayrus"]
//Notes
//For -2, take ASCII representation as ascii_value_of(-) + ascii_value_of(2) and for 6.2 take ASCII representation as ascii_value_of(6) + ascii_value_of(.) + ascii_value_of(2).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(pairwiseSwap([1, 2, 3, 4]), [2, 1, 4, 3])
//Test.assertSimilar(pairwiseSwap([-8, 'Arun', 'Bob', 34.5, 12]), [12, -8, 34.5, 'Bob', 'Arun'])
//Test.assertSimilar(pairwiseSwap([56, 123, 41, 321, 232]), [123, 56, 321, 41, 232])
//Test.assertSimilar(pairwiseSwap(['Nura', 'Uam', 'Ulgi', 'Nurav', 'Nayrus']), ['Uam', 'Nura', 'Nurav', 'Ulgi', 'Nayrus'])
//Test.assertSimilar(pairwiseSwap([-2.3, '2.3', 2.33, '-2.33']), ['2.3', -2.3, '-2.33', 2.33])
//Test.assertSimilar(pairwiseSwap(['Google', 'Microsoft', 'JetBrains', 'Twitter', 'Facebook']), ['Facebook', 'Google', 'Twitter', 'JetBrains', 'Microsoft'])
//Test.assertSimilar(pairwiseSwap([]), [])
//Test.assertSimilar(pairwiseSwap([72722, 22727, 77222, 23, 11, 45, 67]), [67, 72722, 23, 77222, 45, 11, 22727])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Rail Fence Cipher

//tags: algorithms,cryptography,strings

//url: https://edabit.com/challenge/ec8rWmKhhqAFkeFfa

//Description:
//In Rail Fence Cipher encoding is done by placing each character successively in a diagonal along with a set of rails.
//Create a function that takes two arguments; a string and the number of rails, and returns the encoded message.
//message = "WEAREDISCOVEREDFLEEATONCE"
//rails = 3
//
//railFenceCipher(message, rails) ➞ "WECRLTEERDSOEEFEAOCAIVDEN"
//In the above example, the given message to be decomposed in 3 rails:
//W       E       C       R       L       T       E
//  E   R   D   S   O   E   E   F   E   A   O   C
//    A       I       V       D       E       N
//Starting from the upper line, the encoded message will be:
//"WECRLTEERDSOEEFEAOCAIVDEN"
//Examples
//railFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3) ➞ "WECRLTEERDSOEEFEAOCAIVDEN"
//
//railFenceCipher("EDABITISAMAZING", 4) ➞ "EIIDTSZNAIAAGBM"
//
//railFenceCipher("WEWILLALLDIEONEDAY", 3) ➞ "WLLOAEILLDENDYWAIE"
//Notes
//Rails will be >=2

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(railFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3), "WECRLTEERDSOEEFEAOCAIVDEN")
//Test.assertEquals(railFenceCipher("Hello, World!", 3), "Hoo!el,Wrdl l")
//Test.assertEquals(railFenceCipher("MUBASHIRHASSANISASTUPIDENGINEER", 2), "MBSIHSAIATPDNIERUAHRASNSSUIEGNE")
//Test.assertEquals(railFenceCipher("EDABITISAMAZING", 4), "EIIDTSZNAIAAGBM")
//Test.assertEquals(railFenceCipher("PAKISTANISBEST", 5), "PIANSKABITETSS")
//Test.assertEquals(railFenceCipher("IHAVETOJOINPAKISTANAIRFORCE", 3), "IEOATIRHVTJIPKSAAROCAONINFE")
//Test.assertEquals(railFenceCipher("WEWILLALLDIEONEDAY", 3), "WLLOAEILLDENDYWAIE")
//Test.assertEquals(railFenceCipher("LIVEYOURLIFEBEFOREITSTOOLATE", 4), "LUBILIOREEETOAVYLFFRSOTEIOTE")
//Test.assertEquals(railFenceCipher("IWISHICOULDTELLHERHELEGOOGLE", 4), "ICEHOWIOTLREOGIHUDLELGLSLHEE")

