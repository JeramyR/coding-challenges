

//title: RNA Reverse Complement

//tags: algorithms,loops

//url: https://edabit.com/challenge/9gtnTRq5iksMCKWRZ

//Description:
//Create a function that finds the reverse complement of a ribonucleic acid (RNA) strand. The RNA will be represented as a string containing only the characters "A", "C", "G" and "U". Since RNA can only (canonically) allow pairings of A/U and G/C, the complement of an RNA would be as follows:
//original -> complement
//"AAA" -> "UUU"
//"UUU" -> "AAA"
//"GGG" -> "CCC"
//"CCC" -> "GGG"
//"GGAACC" -> "CCUUGG"
//Your function should find the complement on the right AND also reverse the resulting string.
//Examples
//reverseComplement("GUGU") ➞ "ACAC"
//
//reverseComplement("UCUCG") ➞ "CGAGA"
//
//reverseComplement("CAGGU") ➞ "ACCUG"
//Notes
//Assume all input seqeuences are valid.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(reverseComplement("GAGGC"), "GCCUC")
//Test.assertEquals(reverseComplement("UCUCG"), "CGAGA")
//Test.assertEquals(reverseComplement("CAGGU"), "ACCUG")
//Test.assertEquals(reverseComplement("UAUUUUUCCA"), "UGGAAAAAUA")
//Test.assertEquals(reverseComplement("GUAGGCAACA"), "UGUUGCCUAC")
//Test.assertEquals(reverseComplement("UAGCUAAAUC"), "GAUUUAGCUA")
//Test.assertEquals(reverseComplement("AUGAGCGUAC"), "GUACGCUCAU")
//Test.assertEquals(reverseComplement("UUAUACCCGAGUCGGAUUUGUCACU"), "AGUGACAAAUCCGACUCGGGUAUAA")
//Test.assertEquals(reverseComplement("CUUGUGCGCUAUACAUCGAGUAGUUGCUAGAGUAUGUUACUCAAGAGCGC"), "GCGCUCUUGAGUAACAUACUCUAGCAACUACUCGAUGUAUAGCGCACAAG")
//Test.assertEquals(reverseComplement("UUAACUGGGGUGAACUGUCCUGAGCCUAUGGAUCUGCGCGCAGGGCUUCAAAUGGAGUUCGGAAUGACCAUCGAUUCUCGAUGUUUGGCACGAAGUCGCA"), "UGCGACUUCGUGCCAAACAUCGAGAAUCGAUGGUCAUUCCGAACUCCAUUUGAAGCCCUGCGCGCAGAUCCAUAGGCUCAGGACAGUUCACCCCAGUUAA")
//Test.assertEquals(reverseComplement("GCAGCUCCCCGUCCAUCGAUAAGAGACGUUCCUGCCACGGUUGCUCUACUUUAGAGGUACAACUCUCUUGUAUAAGCCUAGCGUCCUUCCGGAGGAGCCGGGUGCCGUCUCAUGGAUCCGCAUUGUCAGGUUGGCCACGACCAUUCAAAAUUUAACUUACACUUAUGAUGCGAAAUGCACACCAUAGUGCCACCGUGAUAAGUUUCCAGCCGAACUAUGCGAGUUUGCGAGAGGCAGGCUCAAUGCCAGCAGGGGCCAGUGAGGGCUCGAUCUAAAACCCGCUGUUGAUAUUCGUAAACGGUGGCCCGCCUGUUCAGUUACUCUCCAUAUCAUCACCUCAGGUUGAGCCAAAGUAGCCGCGCCGCAUCAAGCUGAGAGAAGUGCACGAGGUUUACACGUAGCCCUCUCUGAUCCGGUUGCCGUGCACUAGCGAUUUGUUUCACAUGAAUCGGUCGGGAGUACACACACAUAUAUUAUUAGAGUUGUUCAAUCCCGCAGAG"), "CUCUGCGGGAUUGAACAACUCUAAUAAUAUAUGUGUGUGUACUCCCGACCGAUUCAUGUGAAACAAAUCGCUAGUGCACGGCAACCGGAUCAGAGAGGGCUACGUGUAAACCUCGUGCACUUCUCUCAGCUUGAUGCGGCGCGGCUACUUUGGCUCAACCUGAGGUGAUGAUAUGGAGAGUAACUGAACAGGCGGGCCACCGUUUACGAAUAUCAACAGCGGGUUUUAGAUCGAGCCCUCACUGGCCCCUGCUGGCAUUGAGCCUGCCUCUCGCAAACUCGCAUAGUUCGGCUGGAAACUUAUCACGGUGGCACUAUGGUGUGCAUUUCGCAUCAUAAGUGUAAGUUAAAUUUUGAAUGGUCGUGGCCAACCUGACAAUGCGGAUCCAUGAGACGGCACCCGGCUCCUCCGGAAGGACGCUAGGCUUAUACAAGAGAGUUGUACCUCUAAAGUAGAGCAACCGUGGCAGGAACGUCUCUUAUCGAUGGACGGGGAGCUGC")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Index Filtering

//tags: arrays,strings

//url: https://edabit.com/challenge/q5N9n3ZjKq5Fn2hzg

//Description:
//Create a function that takes two inputs: idx (an array of integers) and str (a string). The function should return another string with the letters of str at each index in idx in order.
//Examples
//indexFilter([7, -1, 5, 1], "She is the love of my love") ➞ "tesh"
//
//indexFilter([4, -7, -13, -11, -2, 0], "Relax and stay calm to avoid failures") ➞ "xavier"
//
//indexFilter([9, -9, 2, 27, 36, 6, 5, 13, -1, 2, 0, 30, 2], "That's life, I've got you under my skin") ➞ "frank sinatra"
//Notes
//Indexes may not be in order or may be negative (see examples).
//The output string must always be lowercase, but the input str may not be (as in the above examples).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [actualParam, expectedParam] = [
//  [
//    [[7, -1, 5, 1], "She is the love of my love",],
//    [[4, -7, -13, -11, -2, 0], "Relax and stay calm to avoid failures",],
//    [[2, 3, 8, 11], "Autumn in New York", ],
//    [[0, 1, 5, 7, 4, 2], "Cry me a river",],
//    [[9, -9, 2, 27, 36, 6, 5, 13, -1, 2, 0, 30, 2], "That's life, I've got you under my skin",],
//    [[-1, 8, 8, 3], "Dream a Little Dream of Me",],
//  ],
//  [
//    "tesh",
//    "xavier",
//    "tune",
//    "creamy",
//    "frank sinatra",
//    "ella",
//  ]
//]
//for (let i in actualParam) Test.assertEquals(indexFilter(actualParam[i][0], actualParam[i][1]), expectedParam[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Is it a Valid Floating Numeric Character?

//tags: logic,regex,strings,validation

//url: https://edabit.com/challenge/yjJbyjGkXxTrhe9as

//Description:
//Create a regular expression to check whether the given string is a valid floating numeric character or not.
//Examples
//isFloatingCharacter("12.12") ➞ true
//
//isFloatingCharacter("12.") ➞ false
//
//isFloatingCharacter(".1") ➞ true
//
//isFloatingCharacter("-.1") ➞ true
//
//isFloatingCharacter("abc") ➞ false
//Notes
//All inputs are strings.
//Think about RegExp.prototype.test().

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isFloatingCharacter("-12.12"), true)
//Test.assertEquals(isFloatingCharacter("-.12"), true)
//Test.assertEquals(isFloatingCharacter("0.12"), true)
//Test.assertEquals(isFloatingCharacter(".122332"), true)
//Test.assertEquals(isFloatingCharacter("av0.12"), false)
//Test.assertEquals(isFloatingCharacter("-."), false)
//Test.assertEquals(isFloatingCharacter("+"), false)
//Test.assertEquals(isFloatingCharacter("12"), false)

