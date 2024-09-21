

//title: Extracting Words with "-ing" Inflection

//tags: regex,strings

//url: https://edabit.com/challenge/XiHt35Amfnci2pLgr

//Description:
//Write a function that takes a string as an argument and returns a list of all the words inflected by "-ing". Your function should also exclude all the mono-syllabic words ending in "-ing" (e.g. bing, sing, sling, ...). Although these words end in "-ing", the "-ing" is not an inflection affix.
//Examples
//ingExtractor("coming bringing Letting sing") ➞ ["coming", "bringing", "Letting"]
//
//ingExtractor("going Ping, king sHrink dOing") ➞ ["going", "dOing"]
//
//ingExtractor("zing went ring, ding wing SINk") ➞ []
//Notes
//Mono-syllabic means a word containing just one syllable.
//It's probably best to use RegEx for this challenge.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(ingExtractor("feeling killing saying discussing FALLing"), ["feeling", "killing", "saying", "discussing", "FALLing"])
//Test.assertSimilar(ingExtractor("Taking taLkING pending SING"), ["Taking", "taLkING", "pending"])
//Test.assertSimilar(ingExtractor("suggest drive run lend"), [])
//Test.assertSimilar(ingExtractor("KING sing bring ring pING"), [])
//Test.assertSimilar(ingExtractor("bing reading dancing ing"), ["reading", "dancing"])
//Test.assertSimilar(ingExtractor("singing ringing winging bringING PINGING"), ["singing", "ringing", "winging", "bringING", "PINGING"])
//Test.assertSimilar(ingExtractor("KISSing shrinking hand window"), ["KISSing", "shrinking"])
//Test.assertSimilar(ingExtractor("hold past ling bring up go away shake Zing king"), [])
//Test.assertSimilar(ingExtractor("string"), [])
//Test.assertSimilar(ingExtractor("Kris Ehresmann, the infectious disease director at the Minnesota Department of Health, said at a briefing on Friday that at least 15 cases in Minnesota were identified as having originated from rally attendees. Seven more cases were identified in Nebraska, according to reporting from CNN. Health officials in South Dakota said this week that they had traced several cases to a popular bar along main street, where photos showed thousands of people congregating without masks over the course of the rally"), ["briefing", "having", "according", "reporting", "congregating"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Same Letter Patterns

//tags: regex,strings,validation

//url: https://edabit.com/challenge/6NJrx5nPBX6uRS4qJ

//Description:
//Create a function that returns true if two strings share the same letter pattern, and false otherwise.
//Examples
//sameLetterPattern("ABAB", "CDCD") ➞ true
//
//sameLetterPattern("ABCBA", "BCDCB") ➞ true
//
//sameLetterPattern("FFGG", "CDCD") ➞ false
//
//sameLetterPattern("FFFF", "ABCD") ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sameLetterPattern('ABAB', 'CDCD'), true)
//Test.assertEquals(sameLetterPattern('AAABBB', 'CCCDDD'), true)
//Test.assertEquals(sameLetterPattern('ABCBA', 'BCDCB'), true)
//Test.assertEquals(sameLetterPattern('AAAA', 'BBBB'), true)
//Test.assertEquals(sameLetterPattern('BAAB', 'ABBA'), true)
//Test.assertEquals(sameLetterPattern('BAAB', 'QZZQ'), true)
//Test.assertEquals(sameLetterPattern('TTZZVV', 'PPSSBB'), true)
//Test.assertEquals(sameLetterPattern('ZYX', 'ABC'), true)
//Test.assertEquals(sameLetterPattern('AABAA', 'SSCSS'), true)
//Test.assertEquals(sameLetterPattern('AABAABAA', 'SSCSSCSS'), true)
//Test.assertEquals(sameLetterPattern('UBUBUBUB', 'WEWEWEWE'), true)
//Test.assertEquals(sameLetterPattern('FFGG', 'FFG'), false)
//Test.assertEquals(sameLetterPattern('FFGG', 'CDCD'), false)
//Test.assertEquals(sameLetterPattern('FFFG', 'GGHI'), false)
//Test.assertEquals(sameLetterPattern('FFFF', 'ABCD'), false)
//Test.assertEquals(sameLetterPattern('ABCA', 'ABCD'), false)
//Test.assertEquals(sameLetterPattern('ABCAAA', 'DDABCD'), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Averages Methods: Extending the Math Object

//tags: language_fundamentals,math,numbers

//url: https://edabit.com/challenge/rRXRZvkq6uK98uEWv

//Description:
//In this exercise the goal is to extend the Math() object adding four methods for calculate different types of averages.
//Arithmetic Mean: The division of the sum of the numbers by the quantity of numbers.
//avg of [A, B, C] ➞ (A + B + C) / 3
//Quadratic Mean: Also called Root Mean Square, is the square root of the arithmetic mean of the squared numbers.
//qAvg of [A, B, C] ➞ ²√ ( (A² + B² + C²) / 3 )
//Harmonic Mean: is the reciprocal of the arithmetic mean of the numbers reciprocals.
//hAvg of [A, B, C] ➞ ( (A⁻¹ + B⁻¹ + C⁻¹) / 3 )⁻¹
//Geometric Mean: is the n-th root of the product of the numbers, where n is the quantity of numbers.
//gAvg of [A, B, C] ➞ ³√ (A * B * C)
//For each average type build a function that, given a required parameter (the array containing the numbers) and an optional one (the precision, or number of floating digits to return) returns the result as a number.
//Examples
//Math.avg([3, 5, 7])➞ 5
////Precision is an optional parameter.
//// (3 + 5 + 7) / 3 = 15 / 3 = 5
//
//Math.qAvg([3, 5, 7], 1) ➞ 5.3
//// ²√ ( (3² + 5² + 7²) / 3 ) = ²√ (83 / 3) = 5.3
//
//Math.hAvg([3, 5, 7], 1) ➞ 4.4
//// Precision is required only for the final result.
//// (3⁻¹ + 5⁻¹ + 7⁻¹) / 3 )⁻¹ = (0.676... / 3)⁻¹ = 4.4
//
//Math.gAvg([3, 5, 7], 1) ➞ 4.7
//// ³√ (3 * 5 * 7) = ³√ 105 = 4.7
//Notes
//Pay attention to cumulative rounding errors! Precision is required only if the parameter is indicated and only for the final result.
//All given arrays are valid ones containing positive numbers greater than zero, either integers or float.
//REVISION NOTE: Implementing a method for to get the n-th root of a number can lead to rounding imprecisions if you use a combination of exponential and logarithm instead of a direct formula. Thanks to @Pustur and @xAlien95, see the Comments tab for more info. After the update, some old solution could fail the last test for the geometric average.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(Math.avg([3, 5, 7]), 5, "Example #1")
//Test.assertEquals(Math.qAvg([3, 5, 7], 1), 5.3, "Example #2")
//Test.assertEquals(Math.hAvg([3, 5, 7], 1), 4.4, "Example #3")
//Test.assertEquals(Math.gAvg([3, 5, 7], 1), 4.7, "Example #4")
//Test.assertEquals(Math.avg([1, 4, 4]), 3)
//Test.assertEquals(Math.qAvg([1, 4, 4], 3), 3.317)
//Test.assertEquals(Math.hAvg([1, 4, 4], 5), 2)
//Test.assertEquals(Math.gAvg([1, 4, 4], 7), 2.5198421)
//Test.assertEquals(Math.avg([0.11, 0.22, 0.33], 1), 0.2)
//Test.assertEquals(Math.qAvg([0.11, 0.22, 0.33], 6), 0.237627)
//Test.assertEquals(Math.hAvg([0.11, 0.22, 0.33], 4), 0.18)
//Test.assertEquals(Math.gAvg([0.11, 0.22, 0.33], 2), 0.2)
//Test.assertEquals(Math.avg([1, 23, 456, 7890]), 2092.5)
//Test.assertEquals(Math.qAvg([1, 23, 456, 7890]), 3951.599865877111)
//Test.assertEquals(Math.hAvg([1, 23, 456, 7890]), 3.8248304676450755)
//Test.assertEquals(Math.gAvg([1, 23, 456, 7890]), 95.37672823128207)

