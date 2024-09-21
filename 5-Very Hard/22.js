

//title: The Recursive Staircase Problem

//tags: conditions,recursion

//url: https://edabit.com/challenge/TqFAaHBdGQ4SvS6fn

//Description:
//In the Recursive Staircase Problem, your task is to find the number of ways of climbing a staircase of n stairs, with a set s possible steps. The example below shows that if n was 2 and s was [ 1, 2 ], the answer would be 2:
//       _
//   _ |2  You could either go from step 0-2 (because the set s contains 2), or
//_ | 1    you could go from 0-1-2 (because the set s contains 1, taking one step at a time).
//0
//More examples below.
//Examples
//numWays(4, [1, 2]) ➞ 5
//
//numWays(3, [1, 2, 3]) ➞ 4
//
//numWays(10, [1, 2, 3, 4]) ➞ 401
//Notes
//The more efficient your solution the better. Do not use unecessary recursion as this will mean the program needs far longer to complete the tests.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(numWays(4, [1, 2]), 5)
//Test.assertEquals(numWays(3, [1, 2, 3]), 4)
//Test.assertEquals(numWays(10, [1, 2, 3, 4]), 401)
//Test.assertEquals(numWays(50, [1, 2]), 20365011074)
//Test.assertEquals(numWays(100, [1]), 1)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Clock Hands

//tags: math,numbers

//url: https://edabit.com/challenge/JwntMLoEpnbrcxrD9

//Description:
//Create a function whose argument is the time in 12 hour format (hh:mm:ss). The function returns the smaller angle between the hour and minute hands in degrees, rounded to three decimal points.
//Examples
//clock("12:00:00") ➞ 0.0
//
//clock("12:15:00") ➞ 82.5
//
//clock("12:32:44") ➞ 179.967
//
//clock("03:33:33") ➞ 94.525
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(clock("12:00:00"), 0.0)
//Test.assertEquals(clock("12:15:00"), 82.5)
//Test.assertEquals(clock("12:32:44"), 179.967)
//Test.assertEquals(clock("03:33:33"), 94.525)
//Test.assertEquals(clock("01:59:59"), 60.092)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Vowel Families

//tags: objects,sorting,strings

//url: https://edabit.com/challenge/nxSeD3tvqQkumGNid

//Description:
//Write a function that selects all words that have all the same vowels (in any order and/or number) as the first word, including the first word.
//Examples
//sameVowelGroup(["toe", "ocelot", "maniac"]) ➞ ["toe", "ocelot"]
//
//sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]) ➞ ["many"]
//
//sameVowelGroup(["hoops", "chuff", "bot", "bottom"]) ➞ ["hoops", "bot", "bottom"]
//Notes
//Words will contain only lowercase letters, and may contain whitespaces.
//Frequency does not matter (e.g. if the first word is "loopy", then you can include words with any number of o's, so long as they only contain o's, and not any other vowels).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(sameVowelGroup(["hoops", "chuff", "bot", "bottom"]), 
//["hoops", "bot", "bottom"])
//Test.assertSimilar(sameVowelGroup(["crop", "nomnom", "bolo", "yodeller"]), 
//["crop", "nomnom", "bolo"])
//Test.assertSimilar(sameVowelGroup(["semantic", "aimless", "beautiful", "meatless icecream"]), 
//["semantic", "aimless", "meatless icecream"])
//Test.assertSimilar(sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]), 
//["many"])
//Test.assertSimilar(sameVowelGroup(["toe", "ocelot", "maniac"]), ["toe", "ocelot"])
//Test.assertSimilar(sameVowelGroup(["a", "apple", "flat", "map", "shark"]), ["a", "flat", "map", "shark"])
//Test.assertSimilar(sameVowelGroup(["a", "aa", "ab", "abc", "aaac", "abe"]), ["a", "aa", "ab", "abc", "aaac"])

