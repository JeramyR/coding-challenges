

//title: Ransom Letter

//tags: strings,validation

//url: https://edabit.com/challenge/XdPy5mwG9g6J9DdEw

//Description:
//Write a function that returns true if you can use the letters of the first string to create the second string. Letters are case sensitive.
//Examples
//canBuild("aPPleAL", "PAL") ➞ true
//
//canBuild("aPPleAL", "apple") ➞ false
//
//canBuild("a", "") ➞ true
//
//canBuild("aa", "aaa") ➞ false
//Notes
//Letters in the first string can be used only once.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(canBuild("aPPleAL", "PAL"), true)
//Test.assertEquals(canBuild("OAT", "OAT"), true)
//Test.assertEquals(canBuild("maybelLINE", "maybe"), true)
//Test.assertEquals(canBuild("topsh", "shop"), true)
//Test.assertEquals(canBuild("topshSHP", "SHoP"), true)
//Test.assertEquals(canBuild("DAISIES", "SAID"), true)
//Test.assertEquals(canBuild("ToporP", "porT"), true)
//Test.assertEquals(canBuild("PoTluCK", "PuCK"), true)
//Test.assertEquals(canBuild("pATS", "p"), true)
//Test.assertEquals(canBuild("blah", ""), true)
//Test.assertEquals(canBuild("aPPleAL", "apple"), false)
//Test.assertEquals(canBuild("shortCAKE", "cakey"), false)
//Test.assertEquals(canBuild("maybeLINE", "lINE"), false)
//Test.assertEquals(canBuild("teaPOT", "lINE"), false)
//Test.assertEquals(canBuild("", "a"), false)
//Test.assertEquals(canBuild("a", "aA"), false)
//Test.assertEquals(canBuild("a", "A"), false)
//Test.assertEquals(canBuild("AAAAAA", "AAAAAAa"), false)
//Test.assertEquals(canBuild("apple", "appleY"), false)
//Test.assertEquals(canBuild("xxYYzZ", "zzZxYxY"), false)
//Test.assertEquals(canBuild("abCD", "aBCD"), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Fibonacci String

//tags: arrays,strings

//url: https://edabit.com/challenge/dZcAcu86rBtXLvXWD

//Description:
//A Fibonacci string is a precedence of the Fibonacci series. It works with any two characters of the English alphabet (as opposed to the numbers 0 and 1 in the Fibonacci series) as the initial items and concatenates them together as it progresses similarly to the Fibonacci series.
//Examples
//fibStr(3, ["j", "h"]) ➞ "j, h, hj"
//
//fibStr(5, ["e", "a"]) ➞ "e, a, ae, aea, aeaae"
//
//fibStr(6, ["n", "k"]) ➞ "n, k, kn, knk, knkkn, knkknknk"
//Notes
//All values for n will be at least 2.
//A recursive version of this challenge can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [actualParam, expectedParam] = [
//  [
//    [3, ['j', 'h']],
//    [5, ['e', 'a']],
//    [6, ['n', 'k']],
//    [7, ['f', 'c']],
//    [9, ['b', 'a']],
//    [11, ['z', 'x']],
//    [12, ['t', 'd']]
//  ], [
//    "j, h, hj",
//    "e, a, ae, aea, aeaae",
//    "n, k, kn, knk, knkkn, knkknknk",
//    "f, c, cf, cfc, cfccf, cfccfcfc, cfccfcfccfccf",
//    "b, a, ab, aba, abaab, abaababa, abaababaabaab, abaababaabaababaababa, abaababaabaababaababaabaababaabaab",
//    "z, x, xz, xzx, xzxxz, xzxxzxzx, xzxxzxzxxzxxz, xzxxzxzxxzxxzxzxxzxzx, xzxxzxzxxzxxzxzxxzxzxxzxxzxzxxzxxz, xzxxzxzxxzxxzxzxxzxzxxzxxzxzxxzxxzxzxxzxzxxzxxzxzxxzxzx, xzxxzxzxxzxxzxzxxzxzxxzxxzxzxxzxxzxzxxzxzxxzxxzxzxxzxzxxzxxzxzxxzxxzxzxxzxzxxzxxzxzxxzxxz",
//    "t, d, dt, dtd, dtddt, dtddtdtd, dtddtdtddtddt, dtddtdtddtddtdtddtdtd, dtddtdtddtddtdtddtdtddtddtdtddtddt, dtddtdtddtddtdtddtdtddtddtdtddtddtdtddtdtddtddtdtddtdtd, dtddtdtddtddtdtddtdtddtddtdtddtddtdtddtdtddtddtdtddtdtddtddtdtddtddtdtddtdtddtddtdtddtddt, dtddtdtddtddtdtddtdtddtddtdtddtddtdtddtdtddtddtdtddtdtddtddtdtddtddtdtddtdtddtddtdtddtddtdtddtdtddtddtdtddtdtddtddtdtddtddtdtddtdtddtddtdtddtdtd"
//]]
//for (let i in actualParam) Test.assertEquals(fibStr(...actualParam[i]), expectedParam[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Stranger Strings

//tags: formatting,regex,sorting,strings

//url: https://edabit.com/challenge/vZ64kq7i28seXgXRK

//Description:
//In this challenge, every given string is made of three types of characters: blank spaces, digits, and strangers.
//The Digits ➞ 0 1 2 3 4 5 6 7 8 9
//
//The Strangers ➞ 𝟘 𝟙 𝟚 𝟛 𝟜 𝟝 𝟞 𝟟 𝟠 𝟡
//The goal is to remove the spaces, to separate the digits from the strangers, and to apply another transform in the two separated groups without using the .replace() string method.
//Given a string str, implement a function that returns an array containing two values, in the order:
//An integer being the sum of all digits. If the given string has no digits, the sum will be equal to zero.
//A string containing the strangers, sorted in decrescent order. If the given string has no strangers, the returned string will be an empty one.
//Try doing this without using String.replace()
//Examples
//strangerStrings("𝟚2 𝟛3 𝟘0 𝟙1") ➞ [ 6, "𝟛𝟚𝟙𝟘" ]
//
//strangerStrings("𝟝 𝟚003   9") ➞ [ 12, "𝟝𝟚" ]
//
//strangerStrings("32   000𝟜0 0 00𝟙𝟟") ➞ [ 5, "𝟟𝟜𝟙" ]
//Notes
//All given strings are valid, containing only the set of characters specified in the instructions: don't worry about validation handling.
//Credits: this was inspired by a comment (@aligejtor) on this challenge.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(strangerStrings("𝟚2 𝟛3 𝟘0 𝟙1"), [6, "𝟛𝟚𝟙𝟘"])
//Test.assertSimilar(strangerStrings("𝟝 𝟚003   9"), [12, "𝟝𝟚"])
//Test.assertSimilar(strangerStrings("32   000𝟜0 0 00𝟙𝟟"), [5, "𝟟𝟜𝟙"])
//Test.assertSimilar(strangerStrings("8 𝟡4 3𝟞"), [15, "𝟡𝟞"])
//Test.assertSimilar(strangerStrings("9   2 21 8"), [22, ""])
//Test.assertSimilar(strangerStrings("7𝟝   16𝟞 𝟟5𝟟"), [19, "𝟟𝟟𝟞𝟝"])
//Test.assertSimilar(strangerStrings("0𝟝𝟞   𝟞𝟟𝟡 𝟡"), [0, "𝟡𝟡𝟟𝟞𝟞𝟝"])

