

//title: The Fiscal Code (Part II): the Check Letter

//tags: algorithms,strings

//url: https://edabit.com/challenge/b4dCYcmHkyDBB68dB

//Description:
//In this challenge, you must build a program that generates the last character of an Italian Codice Fiscale, an alphanumeric identifying ID code.
//The last character, also called check letter or CIN (Control Internal Number), is calculated after converting every other character into a numeric value, in relation to the parity of their natural position into the string (treating so the string as a 1-indexed sequence).
//CONVERSION TABLE
//Char	Odd	Even		Char	Odd	Even
//0	1	0		I	19	8
//1	0	1		J	21	9
//2	5	2		K	2	10
//3	7	3		L	4	11
//4	9	4		M	18	12
//5	13	5		N	20	13
//6	15	6		O	11	14
//7	17	7		P	3	15
//8	19	8		Q	6	16
//9	21	9		R	8	17
//A	1	0		S	12	18
//B	0	1		T	14	19
//C	5	2		U	16	20
//D	7	3		V	10	21
//E	9	4		W	22	22
//F	13	5		X	25	23
//G	15	6		Y	24	24
//H	17	7		Z	23	25
//When all characters will be converted accordingly to the conversion table, you have to sum these values and divide the result by 26: the remainder will give you the index of a letter, from A = 0 up to Z = 25.
//Given a string code being a partial Fiscal Code, implement a function that returns the CIN as a capitalized single letter.
//Example
//fiscalCodeCIN("MRTMTT25D09F205") ➞ "Z"
//
//Convert the characters in odd positions:
//
//Pos   Char   Value
//1st  -> M -> 18
//3rd  -> T -> 14
//5th  -> T -> 14
//7th  -> 2 -> 5
//9th  -> D -> 7
//11th -> 9 -> 21
//13th -> 2 -> 5
//15th -> 5 -> 13
//
//Convert the characters in even positions:
//
//Pos   Char   Value
//2nd  -> R -> 17
//4th  -> M -> 12
//6th  -> T -> 19
//8th  -> 5 -> 5
//10th -> 0 -> 0
//12th -> F -> 5
//14th -> 0 -> 0
//
//Sum of the values:
//
//18 + 14 + 14 + 5 + 7 + 21 + 5 + 13 +
//17 + 12 + 19 + 5 + 0 + 5 + 0 = 155
//
//The remainder (modulo) of 155 % 26 is 25
//
//Starting from A = 0, Z is the 25th letter
//Notes
//Remember that the positions of characters into the string are 1-indexed. On the other hand, when returning the check letter, the positions of the letters into the alphabet are 0-indexed.
//You can expect only valid data: uppercase alpha-numeric strings made of 15 valid characters.
//Check the Resources tab for more info on Codice Fiscale.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(fiscalCodeCIN("MRTMTT25D09F205"), "Z")
//Test.assertEquals(fiscalCodeCIN("BTTRSE85M20C351"), "V")
//Test.assertEquals(fiscalCodeCIN("MLLSNT82P65Z404"), "U")
//Test.assertEquals(fiscalCodeCIN("CPNLAX99A17H501"), "O")
//Test.assertEquals(fiscalCodeCIN("CRUMRA67S47F704"), "O")
//Test.assertEquals(fiscalCodeCIN("MSOMKY28A16B230"), "V")
//Test.assertEquals(fiscalCodeCIN("YUXHLN50T41E999"), "X")
//Test.assertEquals(fiscalCodeCIN("CHEBND61T01Z799"), "R")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Programming Polyglot

//tags: arrays,bit_operations,numbers

//url: https://edabit.com/challenge/CWvC6aNbqHn68D2No

//Description:
//Create a function that takes a number that represents a person's programming language score, and returns an alphabetised array of programming languages they are proficient in. Arbitrarily assigned points for each language are listed below:
//Language	Points
//C#	1
//C++	2
//Java	4
//JavaScript	8
//PHP	16
//Python	32
//Ruby	64
//Swift	128
//Examples
//getLanguages(25) ➞ ["C#", "JavaScript", "PHP"]
//
//getLanguages(100) ➞ ["Java", "Python", "Ruby"]
//
//getLanguages(53) ➞ ["C#", "Java", "PHP", "Python"]
//Notes
//Easier using bitwise operations.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(getLanguages(32), ['Python'])
//Test.assertSimilar(getLanguages(25), ['C#','JavaScript','PHP'])
//Test.assertSimilar(getLanguages(100), ['Java','Python','Ruby'])
//Test.assertSimilar(getLanguages(255), ['C#','C++','Java','JavaScript','PHP','Python','Ruby','Swift'])
//Test.assertSimilar(getLanguages(53), ['C#','Java','PHP','Python'])
//Test.assertSimilar(getLanguages(12), ['Java','JavaScript'])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: All Pairs that Sum to Target

//tags: algorithms,arrays,sorting

//url: https://edabit.com/challenge/KYeCAfYxsvomapQg2

//Description:
//Create a function that returns all pairs of numbers in an array that sum to a target. Sort the pairs in ascending order with respect to the smaller number, then order each pair in this order: [smaller, larger].
//Examples
//allPairs([2, 4, 5, 3], 7) ➞ [[2, 5], [3, 4]]
//// 2 + 5 = 7, 3 + 4 = 7
//
//allPairs([5, 3, 9, 2, 1], 3) ➞ [[1, 2]]
//
//allPairs([4, 5, 1, 3, 6, 8], 9) ➞ [[1, 8], [3, 6], [4, 5]]
//// Sorted: 1 < 3 < 4; each pair is ordered [smaller, larger]
//Notes
//If no pairs are found, return an empty array [].
//You are only allowed to use each number once in a pair.
//See Comments for a hint.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(allPairs([2, 4, 5, 3], 7), [[2, 5], [3, 4]])
//Test.assertSimilar(allPairs([5, 3, 9, 2, 1], 3), [[1, 2]])
//Test.assertSimilar(allPairs([4, 5, 1, 3, 6, 8], 9), [[1, 8], [3, 6], [4, 5]])
//Test.assertSimilar(allPairs([5, 2], 14), [])
//Test.assertSimilar(allPairs([5, 5, 2], 14), [])
//Test.assertSimilar(allPairs([8, 7, 7, 2, 4, 6], 14), [[6, 8], [7, 7]])
//Test.assertSimilar(allPairs([8, 7, 2, 4, 6], 14), [[6, 8]])
//Test.assertSimilar(allPairs([1, 3, 5, 4, 0], 4), [[0, 4], [1, 3]])
//Test.assertSimilar(allPairs([1, 3, 5, 4, 0, 2], 4), [[0, 4], [1, 3]])
//Test.assertSimilar(allPairs([1, 3, 5, 4, 0, 2, 2], 4), [[0, 4], [1, 3], [2, 2]])

