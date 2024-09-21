

//title: Simple Encoder

//tags: arrays,cryptography,language_fundamentals,strings

//url: https://edabit.com/challenge/hcXPiNgjXDhs8mGmq

//Description:
//Create a function that takes a string str and performs simple encoding as per the following method:
//Replace all single occurrence characters with [
//Replace all characters with two or more occurrences with ]
//Return the final string after modification.
//Examples
//simpleEncoder("Mubashir") ➞ "[[[[[[[["
//// '[' for each character
//
//simpleEncoder("Matt") ➞ "[[]]"
//// ']' for both 't'
//
//simpleEncoder("eD  aBiT") ➞ "[[]][[[["
//// Two spaces in between
//Notes
//Strings can contain lower and uppercase letters. Treat them equally (i.e. A = a, B = b).
//Spaces are also characters.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(simpleEncoder("Mubashir"), "[[[[[[[[")
//Test.assertEquals(simpleEncoder("Matt"), "[[]]")
//Test.assertEquals(simpleEncoder("Mu ba sh ir Ha ss an"), "[[][]]]]][[]]]]]]]][")
//Test.assertEquals(simpleEncoder("HelEn"), "[][][")
//Test.assertEquals(simpleEncoder("Air  force"), "[[]]][[][[")
//Test.assertEquals(simpleEncoder("Pakistan"), "[][[[[][")
//Test.assertEquals(simpleEncoder("eD  aBiT"), "[[]][[[[")
//Test.assertEquals(simpleEncoder("Success"), "][]][]]")
//Test.assertEquals(simpleEncoder("iiiiii"), "]]]]]]")
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Alternating Ones and Zeroes

//tags: logic,strings,validation

//url: https://edabit.com/challenge/XHzuvkGKGy7pB73ZE

//Description:
//Write a function that returns true if the binary string can be rearranged to form a string of alternating 0s and 1s.
//Examples
//canAlternate("0001111") ➞ true
//// Can make: "1010101"
//
//canAlternate("01001") ➞ true
//// Can make: "01010"
//
//canAlternate("010001") ➞ false
//
//canAlternate("1111") ➞ false
//Notes
//No substring of the output may contain more than one consecutive repeating character (e.g. 00 or 11 are not allowed).
//Return false if a string only contains 0s or only contains 1s.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(canAlternate("0001111"), true)
//Test.assertEquals(canAlternate("01001"), true)
//Test.assertEquals(canAlternate("010001"), false)
//Test.assertEquals(canAlternate("0100110111"), false)
//Test.assertEquals(canAlternate("10101010"), true)
//Test.assertEquals(canAlternate("010101000"), false)
//Test.assertEquals(canAlternate("0111"), false)
//Test.assertEquals(canAlternate("00"), false)
//Test.assertEquals(canAlternate("1111"), false)
//Test.assertEquals(canAlternate("101"), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Remove Surrounding Duplicate Items

//tags: formatting,loops,sorting

//url: https://edabit.com/challenge/cW5gZqYEv6bszrNSw

//Description:
//Create a function that takes a sequence of either strings or numbers, removes the surrounding duplicates and returns an array of items without any items with the same value next to each other and preserves the original order of items.
//Examples
//uniqueInOrder("AAAABBBCCDAABBB") ➞ ["A", "B", "C", "D", "A", "B"]
//
//uniqueInOrder("ABBCcAD") ➞ ["A", "B", "C", "c", "A", "D"]
//
//uniqueInOrder([1, 2, 2, 3, 3]) ➞ [1, 2, 3]
//Notes
//The initial sequence of items can be either a string or an array.
//Tests are case sensitive.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(uniqueInOrder("AAAABBBCCDAABBB"), ["A", "B", "C", "D", "A", "B"])
//Test.assertSimilar(uniqueInOrder("ABBCcAD"), ["A", "B", "C", "c", "A", "D"])
//Test.assertSimilar(uniqueInOrder([1, 2, 2, 3, 3]), [1, 2, 3])
//Test.assertSimilar(uniqueInOrder("12333355555522211133"), ["1", "2", "3", "5", "2", "1", "3"])
//Test.assertSimilar(uniqueInOrder("uuUfffFgGggYtt76%5$$$"), ["u", "U", "f", "F", "g", "G", "g", "Y", "t", "7", "6", "%", "5", "$"])
//Test.assertSimilar(uniqueInOrder(["1", "2", "2", "3", "3"]), ["1", "2", "3"])
//Test.assertSimilar(uniqueInOrder([3, 7, 3, 8, 4]), [3, 7, 3, 8, 4])
//Test.assertSimilar(uniqueInOrder("ABC"), ["A", "B", "C"])
//Test.assertSimilar(uniqueInOrder("$$$%%%$$$%%%"), ["$", "%", "$", "%"])
//Test.assertSimilar(uniqueInOrder([1, 1, 1, "A", "B", "B"]), [1, "A", "B"])

