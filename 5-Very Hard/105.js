

//title: Partitions of a Natural Number

//tags: algorithms,logic,math

//url: https://edabit.com/challenge/Cn9d39qeznvERMdGB

//Description:
//Create a function that determines the number of partitions of a natural number.
//A partition of a number n is an unordered sum of one or more numbers which totals n. For example, the partitions of the number 4 are:
//1 + 1 + 1 + 1 = 4
//1 + 1 + 2 = 4
//1 + 3 = 4
//2 + 2 = 4
//4 = 4
//Since partitions are unordered, the sums 1 + 1 + 2 = 1 + 2 + 1 = 2 + 1 + 1 = 4 are considered the same partition.
//Examples
//partitions(4) ➞ 5
//
//partitions(10) ➞ 42
//
//partitions(0) ➞ 1
//
//partitions(1) ➞ 1
//
//partitions(2) ➞ 2
//Notes
//Remember the trivial partition n = n. Also, we say there is one way to partition zero; namely, 0 = 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(partitions(1), 1)
//Test.assertEquals(partitions(2), 2)
//Test.assertEquals(partitions(3), 3)
//Test.assertEquals(partitions(5), 7)
//Test.assertEquals(partitions(7), 15)
//Test.assertEquals(partitions(11), 56)
//Test.assertEquals(partitions(13), 101)
//Test.assertEquals(partitions(17), 297)
//Test.assertEquals(partitions(19), 490)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Who Won the League?

//tags: arrays,data_structures,sorting

//url: https://edabit.com/challenge/Mtzh6e7BKhzhow45Y

//Description:
//The 2019/20 season of the English Premier League (EPL) saw Liverpool FC win the title for the first time despite their bitter rivals, Manchester United, having won 13 titles!
//Create a function that receives an alphabetically sorted array of the results achieved by each team in that season and the name of one of the teams. The function should return a string giving the final position of the team, the number of points achieved and the goal difference (see examples for precise format).
//The results table is given in the following format:
//Team	Played	Won	Drawn	Lost	G/Diff
//Arsenal	38	14	14	10	8
//Aston Villa	38	9	8	21	-26
//Bournemouth	38	9	7	22	-26
//Brighton	38	9	14	15	-15
//Burnley	38	15	9	14	-7
//Chelsea	38	20	6	12	15
//Crystal Palace	38	11	10	17	-19
//Everton	38	13	10	15	-12
//Leicester City	38	18	8	12	26
//Liverpool	38	32	3	3	52
//Manchester City	38	26	3	9	67
//Manchester Utd	38	18	12	8	30
//Newcastle	38	11	11	16	-20
//Norwich	38	5	6	27	-49
//Sheffield Utd	38	14	12	12	0
//Southampton	38	15	7	16	-9
//Tottenham	38	16	11	11	14
//Watford	38	8	10	20	-28
//West Ham	38	10	9	19	-13
//Wolves	38	15	14	9	11
//Examples
//table = [
//  ["Arsenal", 38, 14, 14, 10, 8],
//  ["Aston Villa", 38, 9, 8, 21, -26],
//  ...
//  ...
//  ["West Ham", 38, 10, 9, 19, -13],
//  ["Wolves", 38, 15, 14, 9, 11]
//]
//
//EPLResult(table, "Liverpool")
//  ➞ "Liverpool came 1st with 99 points and a goal difference of 52!"
//
//EPLResult(table, "Manchester Utd")
//   ➞ "Manchester Utd came 3rd with 66 points and a goal difference of 30!"
//
//EPLResult(table, "Norwich")
//  ➞ "Norwich came 20th with 21 points and a goal difference of -49!"
//Notes
//Score 3 points for a win and 1 point for a draw.
//If teams are tied on points, their position is determined by better goal difference.
//The input table should be considered immutable - do not make any changes to it!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//var table = [
//  ['Arsenal', 38, 14, 14, 10, 8], 
//  ['Aston Villa', 38, 9, 8, 21, -26], 
//  ['Bournemouth', 38, 9, 7, 22, -26], 
//  ['Brighton', 38, 9, 14, 15, -15], 
//  ['Burnley', 38, 15, 9, 14, -7], 
//  ['Chelsea', 38, 20, 6, 12, 15], 
//  ['Crystal Palace', 38, 11, 10, 17, -19], 
//  ['Everton', 38, 13, 10, 15, -12], 
//  ['Leicester City', 38, 18, 8, 12, 26], 
//  ['Liverpool', 38, 32, 3, 3, 52], 
//  ['Manchester City', 38, 26, 3, 9, 67], 
//  ['Manchester Utd', 38, 18, 12, 8, 30], 
//  ['Newcastle', 38, 11, 11, 16, -20],
//  ['Norwich', 38, 5, 6, 27, -49], 
//  ['Sheffield Utd', 38, 14, 12, 12, 0],
//  ['Southampton', 38, 15, 7, 16, -9], 
//  ['Tottenham', 38, 16, 11, 11, 14], 
//  ['Watford', 38, 8, 10, 20, -28], 
//  ['West Ham', 38, 10, 9, 19, -13], 
//  ['Wolves', 38, 15, 14, 9, 11]
//]
//​
//Test.assertEquals(EPLResult(table, "Liverpool"), "Liverpool came 1st with 99 points and a goal difference of 52!", "Example 1")
//Test.assertEquals(EPLResult(table, "Manchester Utd"), "Manchester Utd came 3rd with 66 points and a goal difference of 30!", "Example 2")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Generate All Nonconsecutive Binary Strings

//tags: formatting,interview,loops,strings

//url: https://edabit.com/challenge/WhgdgBSCmwtahAtDW

//Description:
//Create a function to generate all nonconsecutive binary strings where nonconsecutive is defined as a string where no consecutive ones are present, and where n governs the length of each binary string.
//Examples
//generateNonconsecutive(1) ➞ "0 1"
//
//generateNonconsecutive(2) ➞ "00 01 10"
//
//generateNonconsecutive(3) ➞ "000 001 010 100 101"
//
//generateNonconsecutive(4) ➞ "0000 0001 0010 0100 0101 1000 1001 1010"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(generateNonconsecutive(1), "0 1")
//Test.assertEquals(generateNonconsecutive(2), "00 01 10")
//Test.assertEquals(generateNonconsecutive(3), "000 001 010 100 101")
//Test.assertEquals(generateNonconsecutive(4), "0000 0001 0010 0100 0101 1000 1001 1010")
//Test.assertEquals(generateNonconsecutive(5), "00000 00001 00010 00100 00101 01000 01001 01010 10000 10001 10010 10100 10101")
//Test.assertEquals(generateNonconsecutive(6), "000000 000001 000010 000100 000101 001000 001001 001010 010000 010001 010010 010100 010101 100000 100001 100010 100100 100101 101000 101001 101010")
//Test.assertEquals(generateNonconsecutive(7), "0000000 0000001 0000010 0000100 0000101 0001000 0001001 0001010 0010000 0010001 0010010 0010100 0010101 0100000 0100001 0100010 0100100 0100101 0101000 0101001 0101010 1000000 1000001 1000010 1000100 1000101 1001000 1001001 1001010 1010000 1010001 1010010 1010100 1010101")
//Test.assertEquals(generateNonconsecutive(8), "00000000 00000001 00000010 00000100 00000101 00001000 00001001 00001010 00010000 00010001 00010010 00010100 00010101 00100000 00100001 00100010 00100100 00100101 00101000 00101001 00101010 01000000 01000001 01000010 01000100 01000101 01001000 01001001 01001010 01010000 01010001 01010010 01010100 01010101 10000000 10000001 10000010 10000100 10000101 10001000 10001001 10001010 10010000 10010001 10010010 10010100 10010101 10100000 10100001 10100010 10100100 10100101 10101000 10101001 10101010")
//Test.assertEquals(generateNonconsecutive(9), "000000000 000000001 000000010 000000100 000000101 000001000 000001001 000001010 000010000 000010001 000010010 000010100 000010101 000100000 000100001 000100010 000100100 000100101 000101000 000101001 000101010 001000000 001000001 001000010 001000100 001000101 001001000 001001001 001001010 001010000 001010001 001010010 001010100 001010101 010000000 010000001 010000010 010000100 010000101 010001000 010001001 010001010 010010000 010010001 010010010 010010100 010010101 010100000 010100001 010100010 010100100 010100101 010101000 010101001 010101010 100000000 100000001 100000010 100000100 100000101 100001000 100001001 100001010 100010000 100010001 100010010 100010100 100010101 100100000 100100001 100100010 100100100 100100101 100101000 100101001 100101010 101000000 101000001 101000010 101000100 101000101 101001000 101001001 101001010 101010000 101010001 101010010 101010100 101010101")
//Test.assertEquals(generateNonconsecutive(10),"0000000000 0000000001 0000000010 0000000100 0000000101 0000001000 0000001001 0000001010 0000010000 0000010001 0000010010 0000010100 0000010101 0000100000 0000100001 0000100010 0000100100 0000100101 0000101000 0000101001 0000101010 0001000000 0001000001 0001000010 0001000100 0001000101 0001001000 0001001001 0001001010 0001010000 0001010001 0001010010 0001010100 0001010101 0010000000 0010000001 0010000010 0010000100 0010000101 0010001000 0010001001 0010001010 0010010000 0010010001 0010010010 0010010100 0010010101 0010100000 0010100001 0010100010 0010100100 0010100101 0010101000 0010101001 0010101010 0100000000 0100000001 0100000010 0100000100 0100000101 0100001000 0100001001 0100001010 0100010000 0100010001 0100010010 0100010100 0100010101 0100100000 0100100001 0100100010 0100100100 0100100101 0100101000 0100101001 0100101010 0101000000 0101000001 0101000010 0101000100 0101000101 0101001000 0101001001 0101001010 0101010000 0101010001 0101010010 0101010100 0101010101 1000000000 1000000001 1000000010 1000000100 1000000101 1000001000 1000001001 1000001010 1000010000 1000010001 1000010010 1000010100 1000010101 1000100000 1000100001 1000100010 1000100100 1000100101 1000101000 1000101001 1000101010 1001000000 1001000001 1001000010 1001000100 1001000101 1001001000 1001001001 1001001010 1001010000 1001010001 1001010010 1001010100 1001010101 1010000000 1010000001 1010000010 1010000100 1010000101 1010001000 1010001001 1010001010 1010010000 1010010001 1010010010 1010010100 1010010101 1010100000 1010100001 1010100010 1010100100 1010100101 1010101000 1010101001 1010101010")

