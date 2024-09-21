

//title: Distance between Point and a Line

//tags: math

//url: https://edabit.com/challenge/Tt6vQBXgB4GWEQobP

//Description:
//Given the formula for a straight line y = ax + b and the x, y coordinates of a point, find the distance between that point and the line. Round the result to two decimal points.
//Examples
//dist("y=(-3/4)x-5/4", 5, 2) ➞ 5.6
//
//dist("y=(5+1/3)x-2.3", 1, 4) ➞ 0.18
//
//dist("y=2.2x-(3+1/5)", 3, -2) ➞ 2.23
//Notes
//Check the Resources.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(dist("y=2.2x-(3+1/5)", 3, -2), 2.23)
//Test.assertEquals(dist("y=(-3/4)x-5/4", 5, 2), 5.6)
//Test.assertEquals(dist("y=(5+1/3)x-2.3", 1, 4), 0.18)
//Test.assertEquals(dist("y=(2**0.5)x+2**0.5", 2, 2), 1.29)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: String Cleaver

//tags: strings,validation

//url: https://edabit.com/challenge/y7xoBP9bgHRNTcELK

//Description:
//Create a function that takes a string (without spaces) and a word array, cleaves the string into words based on the array, and returns the correctly spaced version of the string (a sentence). If a section of the string is encountered that can't be found on the word array, return "Cleaving stalled: Word not found".
//Examples
//const words = ["about", "be", "hell", "if", "is", "it", "me", "other", "outer", "people", "the", "to", "up", "where"]
//
//
//cleave("ifitistobeitisuptome", words) ➞ "if it is to be it is up to me"
//
//cleave("hellisotherpeople", words) ➞ "hell is other people"
//
//cleave("hellisotterpeople", words) ➞ "Cleaving stalled: Word not found"
//Notes
//Words in the words array can appear more than once in the string. The words array is a reference guide, kind of like a dictionary that lists which words are allowed.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const words = ['a', 'after', 'all', 'an', 'and', 'are', 'as', 'by', 'continued', 'deadlines', 'doubly', 'fish', 'for', 'go', 'happen', 'happened', 'i', 'illusion', 'is', 'long', 'love', 'lunchtime', 'make', 'moment', 'noise', 'nothing', 'of', 'or', 'people', 'problem', 'second', 'so', 'summarize', 'summary', 'thanks', 'the', 'then', 'they', 'time', 'to', 'whooshing']
//const s1 = 'solongandthanksforallthefish'
//const s2 = 'solongandthanksforalllthefish'
//const s3 = 'tosummarizethesummaryofthesummarypeopleareaproblem'
//const s4 = 'timeisanillusionlunchtimedoublyso'
//const s5 = 'ilovedeadlinesilovethewhooshingnoisetheymakeastheygoby'
//const s6 = 'ilovedeadlinesilovethewheezingnoisetheymakeastheygoby'
//const s7 = 'foramomentnothinghappenedthenafterasecondorsonothingcontinuedtohappen'
//​
//Test.assertEquals(cleave(s1, words), 'so long and thanks for all the fish')
//Test.assertEquals(cleave(s2, words), "Cleaving stalled: Word not found")
//Test.assertEquals(cleave(s3, words), 'to summarize the summary of the summary people are a problem')
//Test.assertEquals(cleave(s4, words), 'time is an illusion lunchtime doubly so')
//Test.assertEquals(cleave(s5, words), 'i love deadlines i love the whooshing noise they make as they go by')
//Test.assertEquals(cleave(s6, words), "Cleaving stalled: Word not found")
//Test.assertEquals(cleave(s7, words), 'for a moment nothing happened then after a second or so nothing continued to happen')
//​
//// Quotes credit: Douglas Adams

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Resistor Networks

//tags: algorithms,data_structures,strings

//url: https://edabit.com/challenge/eWXL8Jz78hP5tW644

//Description:
//Resistors are electrical components that add resistance to a circuit. Resistance is measured in ohms. When resistors are connected in series, the total resistance is merely the sum of the individual resistances:
//Rtotal = R1 + R2 + R3 + ...
//When resistors are connected in parallel, the reciprocal of the total resistance is equal to the sum of the reciprocals of the individual resistances:
//1/(Rtotal) = 1/R1 + 1/R2 + 1/R3 + ...
//Let's specify that series resistors be designated by enclosing them in parentheses, and parallel resistors by enclosing them in square brackets. Now we can calculate the equivalent resistance of the network:
//(2, 3, 6) = 11 ohms
//[2, 3, 6]= 1 ohm
//Nesting these structures in the same way tuples and arrays are nested allows us to model complex resistor networks.
//Create a function that takes a nested network as a string and returns the equivalent resistance of the network. Round results to the nearest tenth of an ohm.
//Examples
//resist("(10, [20, 30])") ➞ 22.0
//// 10 in series with [20, 30] in parallel.
//
//resist("[10, (20, 30)]") ➞ 8.3
//// 10 in parallel with (20, 30) in series.
//
//resist("([10, 20], (30, 40))") ➞ 76.7
//// [10, 20] in parallel in series with (30, 40) in series.
//
//resist("(1, [12, 4, (1, [10, (2, 8)])])") ➞ 3.0
//
//resist("(6, [8, (4, [8, (4, [6, (8, [6, (10, 2)])])])])") ➞ 10
//Notes
//This is the schematic for the last example above:
//

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(resist("(2, 3, 6)"), 11.0)
//Test.assertEquals(resist("[2, 3, 6]"), 1.0)
//Test.assertEquals(resist("[10, 20, [30, (40, 50), 60, (70, 80)], 90]"), 4.4)
//Test.assertEquals(resist("(1, [12, 4, (1, [10, (2, 8)])])"), 3.0)
//Test.assertEquals(resist("([10, 15], (5, 6, 5))"), 22.0)
//Test.assertEquals(resist("[22, 6, (10, 18, [33, 15]), (10, [63, 50], 45)]"), 4.0)
//Test.assertEquals(resist("[([(470, 1000), 330], 470), 680]"), 354.3)
//Test.assertEquals(resist("([([(470, 680), 330], 1000), 470], 680)"), 1022.0)
//Test.assertEquals(resist("(6, [8, (4, [8, (4, [6, (8, [6, (10, 2)])])])])"), 10.0)

