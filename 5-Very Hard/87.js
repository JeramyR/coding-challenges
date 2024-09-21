

//title: Topsy Turvy Numbers

//tags: loops,numbers,strings

//url: https://edabit.com/challenge/E9WQXpuezSgpdinmQ

//Description:
//Topsy turvy numbers are numbers that when inverted (rotated 180 degrees) are unchanged. The most recent topsy turvy years were 1961 and 1881. The next one won't be until 6009. Mathemeticians have shown little interest in these numbers, but Edabitians are always up for a challenge:
//Write a function that accepts two non-negative integers and returns an array of all topsy turvy numbers inclusively in that range.
//Examples
//topsyTurvy(0, 10) ➞ [0, 1, 8]
//
//topsyTurvy(10, 100) ➞ [11, 69, 88, 96]
//
//topsyTurvy(1000, 2000) ➞ [1001, 1111, 1691, 1881, 1961]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(topsyTurvy(0, 10), [0, 1, 8])
//Test.assertSimilar(topsyTurvy(11, 100), [11, 69, 88, 96])
//Test.assertSimilar(topsyTurvy(2000, 6000), [])
//Test.assertSimilar(topsyTurvy(1000, 2000), [1001, 1111, 1691, 1881, 1961])
//Test.assertSimilar(topsyTurvy(10000, 15000), [10001, 10101, 10801, 11011, 11111, 11811])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Bowling Scorekeeping

//tags: games,numbers

//url: https://edabit.com/challenge/Snuathy8yB6yHCqf9

//Description:
//Tenpin bowling scores can range from 0 (all gutter balls) to 300 (a perfect game). If you are unfamiliar with scorekeeping, please see the Resources tab for a quick description.
//A complete record of a 10 frame bowling game can be given as an array of the number of pins knocked down by each ball in sequence from the beginning to the end of the game.
//Create a function whose argument is such an array. The function should return the final score.
//Examples
//bowling([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]) ➞ 300
//
//bowling([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]) ➞ 80
//
//bowling([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]) ➞ 150
//
//bowling([10, 5, 5, 10, 5, 5, 10, 5, 5, 10, 5, 5, 10, 5, 5, 10]) ➞ 200
//Notes
//The number of balls thrown for a complete game can vary from 12 to 21 depending on the number of strikes and spares thrown.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(bowling([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 300)
//Test.assertEquals(bowling([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]), 80)
//Test.assertEquals(bowling([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 150)
//Test.assertEquals(bowling([10, 5, 5, 10, 5, 5, 10, 5, 5, 10, 5, 5, 10, 5, 5, 10]), 200)
//Test.assertEquals(bowling([10, 0, 10, 7, 2, 10, 10, 10, 8, 2, 9, 1, 7, 2, 10, 10, 5]), 194)
//Test.assertEquals(bowling([8, 0, 8, 2, 10, 10, 7, 3, 9, 1, 7, 2, 10, 10, 9, 0]), 177)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Combinator

//tags: algorithms,arrays,strings

//url: https://edabit.com/challenge/7b7Enrm4Xb5owFToe

//Description:
//Create a function that, given an array of string arrays, returns an array of all combinations as concatenated strings.
//The function is called with an array of arrays containing strings.
//The task is to combine each string of each array with each string of each other array.
//If one of the string arrays is empty, the function will return an empty array.
//The function will accept an optional second string parameter. This parameter, if specified, is to be used to combine two strings.
//Examples
//combinator([["a", "b"], ["c", "d"]]) ➞ ["ac", "ad", "bc", "bd"]
//
//combinator([["a"], ["a", "b"], "abc"]) ➞ ["aaa", "aab", "aac", "aba", "abb", "abc"]
//
//combinator([["foo", "bar"], ["baz", "bamboo"]], " ") ➞ ["foo baz", "foo bamboo", "bar baz", "bar bamboo"]
//
//combinator([[]]) ➞ []
//Notes
//The order of the given strings must be retained in the combinations.
//You can assume that:
//The function is always called with an array of string arrays and arrays can be empty.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(combinator([['a']]), ['a'])
//Test.assertSimilar(combinator([['ab'], ['ba']]), ['abba'])
//Test.assertSimilar(combinator([['a', 'b']]), ['a', 'b'])
//Test.assertSimilar(combinator([['a', 'b'], ['c', 'd']]), ['ac', 'ad', 'bc', 'bd'])
//Test.assertSimilar(combinator([['a', 'b'], ['c', 'd'], ['e', 'f']]), ['ace', 'acf', 'ade', 'adf', 'bce', 'bcf', 'bde', 'bdf'])
//Test.assertSimilar(combinator([['a'], ['a', 'b'], 'abc']), ['aaa', 'aab', 'aac', 'aba', 'abb', 'abc'])
//Test.assertSimilar(combinator([['foo', 'bar'], ['baz', 'bamboo']], ' '), ['foo baz', 'foo bamboo', 'bar baz', 'bar bamboo'])
//Test.assertSimilar(combinator(['abcd', 'efgh', 'ijkl']), ['aei', 'aej', 'aek', 'ael', 'afi', 'afj', 'afk', 'afl', 'agi', 'agj', 'agk', 'agl', 'ahi', 'ahj', 'ahk', 'ahl', 'bei', 'bej', 'bek', 'bel', 'bfi', 'bfj', 'bfk', 'bfl', 'bgi', 'bgj', 'bgk', 'bgl', 'bhi', 'bhj', 'bhk', 'bhl', 'cei', 'cej', 'cek', 'cel', 'cfi', 'cfj', 'cfk', 'cfl', 'cgi', 'cgj', 'cgk', 'cgl', 'chi', 'chj', 'chk', 'chl', 'dei', 'dej', 'dek', 'del', 'dfi', 'dfj', 'dfk', 'dfl', 'dgi', 'dgj', 'dgk', 'dgl', 'dhi', 'dhj', 'dhk', 'dhl'])
//Test.assertSimilar(combinator([[]]), [])
//Test.assertSimilar(combinator([['a', 'b'], [], ['e', 'f']]), [])
//Test.assertSimilar(combinator([[], ['e', 'f']]), [])

