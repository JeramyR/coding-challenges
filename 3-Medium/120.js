

//title: Invert Keys and Values

//tags: objects

//url: https://edabit.com/challenge/YTECpnCCeJsYqYvfF

//Description:
//Write a function that inverts the keys and values of an object.
//Examples
//invert({ "z": "q", "w": "f" })
//➞ { "q": "z", "f": "w" }
//
//invert({ "a": 1, "b": 2, "c": 3 })
//➞ { 1: "a", 2: "b", 3: "c" }
//
//invert({ "zebra": "koala", "horse": "camel" })
//➞ { "koala": "zebra", "camel": "horse" }
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertDeepEquals(invert({"a": 1, "b": 2, "c": 3}), {1: "a", 2: "b", 3: "c"})
//Test.assertDeepEquals(invert({"z": "q", "w": "f"}), {"q": "z", "f": "w"})
//Test.assertDeepEquals(invert({"zebra": "koala", "horse": "camel"}), {"koala": "zebra", "camel": "horse"})

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Remove Repeated Letters

//tags: loops,strings

//url: https://edabit.com/challenge/JuDLrvm8PwCABcYnX

//Description:
//Create a function that replaces all consecutively repeated letters in a word with single letters.
//Examples
//removeRepeats("aaabbbccc") ➞ "abc"
//
//removeRepeats("bookkeeper") ➞ "bokeper"
//
//removeRepeats("nananana") ➞ "nananana"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(removeRepeats("aaabbbccc"), "abc")
//Test.assertEquals(removeRepeats("bookkeeper"), "bokeper")
//Test.assertEquals(removeRepeats("nananana"), "nananana")
//Test.assertEquals(removeRepeats("accddbccabadcabccdababaacbdaadcccbcaabaaddbabbaadd"), "acdbcabadcabcdababacbdadcbcabadbabad")
//Test.assertEquals(removeRepeats("aabbcabdcddddacdccacbbcabadccbbaadcccbddacbdbabbbd"), "abcabdcdacdcacbcabadcbadcbdacbdbabd")
//Test.assertEquals(removeRepeats("dacbaabacbabacabcabaabdccccbdbbcaadddacdbdbdacbada"), "dacbabacbabacabcababdcbdbcadacdbdbdacbada")
//Test.assertEquals(removeRepeats("cbdbcbcccbdbbcaaaacacbcabddcdcddcccbdaabdacbdcabbd"), "cbdbcbcbdbcacacbcabdcdcdcbdabdacbdcabd")
//Test.assertEquals(removeRepeats("cdbdcdccccbcbbcdabbbbcababccadccabdcacabbcaccdaccd"), "cdbdcdcbcbcdabcababcadcabdcacabcacdacd")
//Test.assertEquals(removeRepeats("bacbdbdadbbbdacbddbdcbadddabbaadcbbdabdaabcdddbacd"), "bacbdbdadbdacbdbdcbadabadcbdabdabcdbacd")
//Test.assertEquals(removeRepeats("daadadccbcacacbacdbbaabaadbaabadacdacadbacdcababbb"), "dadadcbcacacbacdbabadbabadacdacadbacdcabab")
//Test.assertEquals(removeRepeats("bbaccaccbbabbaacbacadadaddbadddbaacbadbcbdaabbbaaa"), "bacacbabacbacadadadbadbacbadbcbdaba")
//Test.assertEquals(removeRepeats("dbdabdccbcdccccbcdbbbcaccdacdacdcacadaddaddbcbdddb"), "dbdabdcbcdcbcdbcacdacdacdcacadadadbcbdb")
//Test.assertEquals(removeRepeats("cdaaaabbccaccacbdabdbbccbbddddddcadcbbccbccdbaddac"), "cdabcacacbdabdbcbdcadcbcbcdbadac")
//Test.assertEquals(removeRepeats("dcccccaacdacbbdaccbabaacddcdddabcadbaaccaabdcabdad"), "dcacdacbdacbabacdcdabcadbacabdcabdad")
//Test.assertEquals(removeRepeats("bcccabddbbacbacacddbbddbbccbdddbcbcabdabdcbccdaddd"), "bcabdbacbacacdbdbcbdbcbcabdabdcbcdad")
//Test.assertEquals(removeRepeats("bcacaabaadcbbdadcddcdaaaddcccdabdbbaddddbabdccabda"), "bcacabadcbdadcdcdadcdabdbadbabdcabda")
//Test.assertEquals(removeRepeats("adacddabacdcbdbadcaacacdcdcdbcdcdabdabbadcbdacbdcd"), "adacdabacdcbdbadcacacdcdcdbcdcdabdabadcbdacbdcd")
//Test.assertEquals(removeRepeats("dbbbbbcddacdbdaacdaaaccbccdccbcbcdabdbddacbcaaadaa"), "dbcdacdbdacdacbcdcbcbcdabdbdacbcada")
//Test.assertEquals(removeRepeats("bdbdbacabcbbacbcaadbcbcbbdaddacbaacabdccadaaddadca"), "bdbdbacabcbacbcadbcbcbdadacbacabdcadadadca")
//Test.assertEquals(removeRepeats("bbabccadacbbbaabddbbcadacddacdcccbacbdcbacbabcabaa"), "babcadacbabdbcadacdacdcbacbdcbacbabcaba")
//Test.assertEquals(removeRepeats("cadaadcbccbcbbdcadbcdcbaacacbcbabbbadaddadcdcacaab"), "cadadcbcbcbdcadbcdcbacacbcbabadadadcdcacab")
//Test.assertEquals(removeRepeats("adbccadacaabbbcdcaabbdbcbdbbcccbcbadcdddcccbbdcdab"), "adbcadacabcdcabdbcbdbcbcbadcdcbdcdab")
//Test.assertEquals(removeRepeats("dbbdddaaadccabbddbbcccbddacccccaabbcdbdbdcdacdbada"), "dbdadcabdbcbdacabcdbdbdcdacdbada")
//Test.assertEquals(removeRepeats("acccdbbbcbdbbbcbaaabcaacacbbcccadddacbbbabbacbccca"), "acdbcbdbcbabcacacbcadacbabacbca")
//Test.assertEquals(removeRepeats("cccbadadcbccacdababbaabdbdcacadabdddcaaaabbaadacca"), "cbadadcbcacdabababdbdcacadabdcabadaca")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Pyramid Arrays

//tags: arrays,language_fundamentals,loops

//url: https://edabit.com/challenge/K8DP9dYQwcfRLgRrW

//Description:
//Given a number n, return an array containing several arrays. Each array increments in size, from range 1 to n inclusive, contaning its length as the elements.
//Examples
//pyramidArrays(1) ➞ [[1]]
//
//pyramidArrays(3) ➞ [[1], [2, 2], [3, 3, 3]]
//
//pyramidArrays(5) ➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]]
//Notes
//n will be a positive integer.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(pyramidArrays(1), [[1]])
//Test.assertSimilar(pyramidArrays(2), [[1], [2, 2]])
//Test.assertSimilar(pyramidArrays(3), [[1], [2, 2], [3, 3, 3]])
//Test.assertSimilar(pyramidArrays(4), [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4]])
//Test.assertSimilar(pyramidArrays(5), [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]])
//Test.assertSimilar(pyramidArrays(6), [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [6, 6, 6, 6, 6, 6]])
//Test.assertSimilar(pyramidArrays(7), [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [6, 6, 6, 6, 6, 6], [7, 7, 7, 7, 7, 7, 7]])
//Test.assertSimilar(pyramidArrays(8), [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [6, 6, 6, 6, 6, 6], [7, 7, 7, 7, 7, 7, 7], [8, 8, 8, 8, 8, 8, 8, 8]])
//Test.assertSimilar(pyramidArrays(9), [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [6, 6, 6, 6, 6, 6], [7, 7, 7, 7, 7, 7, 7], [8, 8, 8, 8, 8, 8, 8, 8], [9, 9, 9, 9, 9, 9, 9, 9, 9]])
//Test.assertSimilar(pyramidArrays(10), [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [6, 6, 6, 6, 6, 6], [7, 7, 7, 7, 7, 7, 7], [8, 8, 8, 8, 8, 8, 8, 8], [9, 9, 9, 9, 9, 9, 9, 9, 9], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]])
//​
//// Author: Joshua Señoron

