

//title: Numbers to Objects

//tags: arrays,interview,strings

//url: https://edabit.com/challenge/QXs9gtArh9nvnP3oy

//Description:
//Mubashir needs your help in a simple task.
//Given an array of numbers arr:
//Create an object for each given number.
//The object key will be the number converted to a string.
//The value will be the corresponding character code converted to a string (check ASCII table).
//Return an array of the resulting objects.
//Examples
//numObj([118, 117, 120]) ➞ [{'118':'v'}, {'117':'u'}, {'120':'x'}]
//
//numObj([101, 121, 110, 113, 103]) ➞ [{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'103':'g'}]
//
//numObj([118, 103, 110]) ➞ [{"118":"v"}, {"103":"g"}, {"110":"n"}]
//Notes
//All inputs will be an array of numbers.
//All character codes are valid lower case letters.
//The input array will not be empty.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(numObj([118,117,120]),[{'118':'v'}, {'117':'u'}, {'120':'x'}])
//Test.assertSimilar(numObj([101,121,110,113,113,103]),[{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'113':'q'}, {'103':'g'}])
//Test.assertSimilar(numObj([118,103,110,109,104,106]),[{"118":"v"},{"103":"g"},{"110":"n"},{"109":"m"},{"104":"h"},{"106":"j"}])
//Test.assertSimilar(numObj([107,99,110,107,118,106,112,102]),[{"107":"k"},{"99":"c"},{"110":"n"},{"107":"k"},{"118":"v"},{"106":"j"},{"112":"p"},{"102":"f"}])
//Test.assertSimilar(numObj([100,100,116,105,117,121 ]),[{"100":"d"},{"100":"d"},{"116":"t"},{"105":"i"},{"117":"u"},{"121":"y"}])
////Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Abbreviating a Sentence

//tags: formatting,strings

//url: https://edabit.com/challenge/ktqDpdPrFApaQpcCi

//Description:
//Create a function which takes a sentence and returns its abbreviation. Get all of the words over or equal to n characters in length and return the first letter of each, capitalised and overall returned as a single string.
//Examples
//abbreviate("do it yourself") ➞ "Y"
//
//abbreviate("do it yourself", 2) ➞ "DIY"
//// "do" and "it" are included because the second parameter specified that word lengths 2 are allowed.
//
//abbreviate("attention AND deficit OR hyperactivity THE disorder")➞ "ADHD"
//// Words below the default 4 characters are not included in the abbreviation.
//
//abbreviate("the acronym of long word lengths", 5) ➞ "AL"
//// "acronym" and "lengths" have 5 or more characters.
//Notes
//There may not be an argument given for n so set the default to 4.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(abbreviate("do it yourself", 2), "DIY")
//Test.assertEquals(abbreviate("attention AND deficit OR hyperactivity THE disorder"), "ADHD")
//Test.assertEquals(abbreviate("the acronym of long word lengths", 5), "AL")
//Test.assertEquals(abbreviate("laugh out loud"), "LL")
//Test.assertEquals(abbreviate("Keep It Simple Stupid"), "KSS")
//Test.assertEquals(abbreviate("laugh out loud", 3), "LOL")
//Test.assertEquals(abbreviate("Keep It Simple Stupid",2), "KISS")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Malthusian Catastrophe

//tags: conditions,dates,math,numbers

//url: https://edabit.com/challenge/4BeTkEwBXeuSKJTYe

//Description:
//A man named Thomas Malthus described what is now called a Malthusian Catastrophe. According to him, food production grows by a fixed amount, but population grows by a percentage. So, the food supply would soon be insufficient for the population.
//Your job is to find out when that will occur. For this challenge, assume 1 population needs 1 unit of food production. Food production and population both start at 100. The year starts at 0.
//The catastrophe happens when the population is larger than food production.
//The function will pass:
//foodGrowth ⁠— an integer ⁠— food production increase per year.
//popMult ⁠— a floating-point number ⁠— population growth multiplier per year.
//Examples
//malthusian(4255, 1.41) ➞ 20
//// { foodProd: 85,200, pop: 96,467.77..., year: 20 }
//
//malthusian(9433, 1.09) ➞ 107
//// { foodProd: 1,009,431, pop: 1,010,730.28..., year: 107 }
//
//malthusian(5879, 1.77) ➞ 12
//// { foodProd: 70,648, pop: 94,553.84..., year: 12 }
//Notes
//Return the year that the overtake happens, not the next year.
//Make sure you don't make the mistake of adding a year, then calculating the changes to food and population. That way, you miss year 0.
//If the population and food production are equal, that is not a catastrophe.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(malthusian(3900, 1.26), 31)
//Test.assertEquals(malthusian(3367, 1.16), 51)
//Test.assertEquals(malthusian(2393, 1.86), 9)
//Test.assertEquals(malthusian(6560, 1.66), 14)
//Test.assertEquals(malthusian(8481, 1.35), 26)
//Test.assertEquals(malthusian(3805, 1.98), 9)
//Test.assertEquals(malthusian(9492, 1.06), 166)
//Test.assertEquals(malthusian(8278, 1.35), 26)
//Test.assertEquals(malthusian(1228, 1.91), 7)
//Test.assertEquals(malthusian(4791, 1.25), 34)
//Test.assertEquals(malthusian(8194, 1.12), 78)
//Test.assertEquals(malthusian(7418, 1.63), 15)
//Test.assertEquals(malthusian(8700, 1.18), 51)
//Test.assertEquals(malthusian(1066, 1.78), 8)
//Test.assertEquals(malthusian(811, 1.46), 13)
//Test.assertEquals(malthusian(7836, 1.33), 27)
//Test.assertEquals(malthusian(4082, 1.54), 15)
//Test.assertEquals(malthusian(4859, 1.87), 10)
//Test.assertEquals(malthusian(4656, 1.44), 19)
//Test.assertEquals(malthusian(2214, 1.53), 14)
//Test.assertEquals(malthusian(1240, 1.10), 72)
//Test.assertEquals(malthusian(4434, 1.21), 40)
//Test.assertEquals(malthusian(2995, 1.51), 15)
//Test.assertEquals(malthusian(578, 1.10), 62)
//Test.assertEquals(malthusian(9768, 1.47), 20)

