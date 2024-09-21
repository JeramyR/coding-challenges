

//title: Validate the Relationships Between Integers in a String

//tags: conditions,strings,validation

//url: https://edabit.com/challenge/Kg7rsPaPHMydFisP7

//Description:
//You will be given a string consisting of a list of integers and their relationships to their neighboring integers. For instance:
//"-15<-10<=0=0<5"
//Test to see that all the relationships between the integers in the string are true. If they are, return true. If they are not, return false.
//Examples
//validateTheRelationships("5>-1<0=0<-5>5=5") ➞ false
//// This is false because 0 is not less than -5.
//
//validateTheRelationships("-15<-10<=0=0<5") ➞ true
//
//validateTheRelationships("0=807<1000<=1000>9990<-3605<=20") ➞ false
//// This is false because 0 is not equal to 807.
//Notes
//This is a modifcation of Helen Yu's "Correct Signs" challenge.
//As the examples above show, there could be negative numbers in the string.
//The numbers will only be separated by: =, <, >, >=, <=
//Tests will not contain any spaces.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(validateTheRelationships("5>-1<0=0<-5>5=5"), false)
//Test.assertEquals(validateTheRelationships("-15<-10<=0=0<5"), true)
//Test.assertEquals(validateTheRelationships("0=807<1000<=1000>9990<-3605<=20"), false)
//Test.assertEquals(validateTheRelationships("3<=3<11>-109"), true)
//Test.assertEquals(validateTheRelationships("44>-33>=1>-13"), false)
//Test.assertEquals(validateTheRelationships("10>2=22>9>3"), false)
//Test.assertEquals(validateTheRelationships("44>0<13>=-2<-1=-1"), true)
//Test.assertEquals(validateTheRelationships("3>=-1"), true)
//Test.assertEquals(validateTheRelationships("9<=9<-1"), false)
//Test.assertEquals(validateTheRelationships("0<9<=9>-1"), true)
//Test.assertEquals(validateTheRelationships("44>=0<13>-2<-1=1"), false)
//Test.assertEquals(validateTheRelationships("-39<=5=5<=9>-1"), true)
//Test.assertEquals(validateTheRelationships("55>7>=7>=1"), true)
//Test.assertEquals(validateTheRelationships("3<19>-19>5>=-19"), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Resistor Colors

//tags: conditions,formatting

//url: https://edabit.com/challenge/NxDZb5LBQHiH7veSz

//Description:
//A resistor is a common electrical component found in every electronic circuit. Usually a resistor has a color-based code (as painted bands over it) to decipher through a table.
//Color	Digits	Magnitude	Tolerance	T.C.R.
//Black	0	0	-	-
//Brown	1	1	±1%	100ppm/k
//Red	2	2	±2%	50ppm/k
//Orange	3	3	-	15ppm/k
//Yellow	4	4	-	25ppm/k
//Green	5	5	±0.5%	-
//Blue	6	6	±0.25%	10ppm/k
//Violet	7	7	±0.1%	5ppm/k
//Gray	8	8	±0.05%	-
//White	9	9	-	-
//Gold	-	-1	±5%	-
//Silver	-	-2	±10%	-
//Starting from the left assign a number to each coloured band:
//4 bands resistor:
//1st and 2nd color: digits from column 1.
//3rd color: 10 elevated to the digit of column 2.
//4th color: tolerance from column 3.
//5 bands resistor:
//1st, 2nd and 3rd color: digits from column 1.
//4th color: 10 elevated to the digit of column 2.
//5th color: tolerance from column 3.
//6 bands resistor:
//From 1st to 5th: as above.
//6th color: coefficient from column 4.
//Then, when numbers have replaced colors:
//Resistance is equal to the number resulting by the union of digits from column 1 multiplied for the magnitude calculated from column 2: is measured in Ohms (symbol: Ω). When Ohms are in the thousands order the notation is kΩ (kiloOhms), in the millions order the notation is MΩ (MegaOhms), in the billions order the notation is GΩ (GigaOhms).
//Tolerance and TCR (temperature coefficient of resistance, only for 6-banded resistors) are the results of columns 3 and 4.
//Given an array of colors you must return the resistor resistance, tolerance and (eventually) the TCR as a string (with identifiers separated by spaces between them).
//Examples
//resistorCode(["red", "yellow", "blue", "green"]) ➞ "24MΩ ±0.5%"
//// red + yellow = 24; blue = 10^6, green = ±0.5%
//// resistance * magnitude = 24000000 (24M)
//
//resistorCode(["white", "black", "white", "blue", "gold"]) ➞ "909MΩ ±5%"
//// white + black + white = 909
//
//resistorCode(["black", "white", "black", "orange", "red", "yellow"]) ➞ "90kΩ ±2% 25ppm/k"
//// black + white + black = 090 = 90; orange = 10^3
//// resistance * magnitude = 90000 (90k)
//Notes
//For more info about resistors and their color codes check the Resources tab.
//All given arrays are valid, no exceptions to handle.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(resistorCode(["red", "yellow", "blue", "green"]), "24MΩ ±0.5%", "Example #1")
//Test.assertEquals(resistorCode(["white", "black", "white", "blue", "gold"]), "909MΩ ±5%", "Example #2")
//Test.assertEquals(resistorCode(["black", "white", "black", "orange", "red", "yellow"]), "90kΩ ±2% 25ppm/k", "Example #3")
//Test.assertEquals(resistorCode(["black", "blue", "black", "brown"]), "6Ω ±1%")
//Test.assertEquals(resistorCode(["orange", "yellow", "white", "gold", "gray"]), "34.9Ω ±0.05%")
//Test.assertEquals(resistorCode(["yellow", "brown", "green", "black", "green", "orange"]), "415Ω ±0.5% 15ppm/k")
//Test.assertEquals(resistorCode(["brown", "violet", "red", "silver"]), "1.7kΩ ±10%")
//Test.assertEquals(resistorCode(["green", "gray", "black", "silver", "blue"]), "5.8Ω ±0.25%")
//Test.assertEquals(resistorCode(["white", "white", "white", "white", "silver", "violet"]), "999GΩ ±10% 5ppm/k")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Magic Square Check

//tags: arrays,games,geometry,numbers,validation

//url: https://edabit.com/challenge/foBRTDS8zngwTmYtX

//Description:
//Make a function that takes a 2D array and returns true if it is a Magic Square and false if it is not. A Magic Square is an arrangement of numbers in a square in such a way that the sum of each row, column, and diagonal is one constant number, the "magic constant".
//Examples
//isMagic([[2, 7, 6], [9, 5, 1], [4, 3, 8]]) ➞ true
//
//// Rows: 2+7+6 = 9+5+1 = 4+3+8 = 15
//// Columns: 2+9+4 = 7+5+3 = 6+1+8 = 15
//// Diagonals: 2+5+8 = 6+5+4 = 15
//isMagic([[1, 2], [3, 4]]) ➞ false
//
//// Rows: 1+2 = 3 != 3+4 = 7
//// Columns: 1+3 = 4 != 2+4 = 6
//// Diagonals: 1+4 = 2+3 = 5
//Notes
//For this challenge, I will only be testing with magic squares made with whole numbers ranging from 1 to n^2 where n in the length of a side of the square.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isMagic([]), true, "I guess an empty square is magical, kinda")
//Test.assertEquals(isMagic([[1]]), true, "You should be able verify this one by hand")
//Test.assertEquals(isMagic([[2]]), false, "For this challenge a magic square has all whole numbers from 1 - n^2")
//Test.assertEquals(isMagic([[1,2],[3,4]]), false, "There actually aren't any magic square of size 2")
//Test.assertEquals(isMagic([[2,7,6],[9,5,1],[4,3,8]]), true, "Finaly a real magic square")
//Test.assertEquals(isMagic([[4,3,8],[9,5,1],[2,7,6]]), true, "Technicaly the same as the last")
//Test.assertEquals(isMagic([[9,5,1],[4,3,8],[2,7,6]]), false, "Can't switch the mid row or colum")
//Test.assertEquals(isMagic([[5,15,16,2],[10,8,7,13],[6,12,11,9],[17,3,4,14]]), false,"For this challenge a magic square has all whole numbers from 1 - n^2")
//Test.assertEquals(isMagic([[1,15,14,4],[10,11,8,5],[7,6,9,12],[16,2,3,13]]), true)
//Test.assertEquals(isMagic([[4,15,14,1],[5,11,8,10],[12,6,9,7],[13,2,3,16]]), false)
//Test.assertEquals(isMagic([[1,15,4,14],[10,11,5,8],[7,6,12,9],[16,2,13,3]]), false)
//Test.assertEquals(isMagic([[1,15,14,4],[10,11,8,5],[7,6,9,12],[16,2,3,13],[1,7,7,1,0,3]]), false)
//Test.assertEquals(isMagic([[25,13,1,19,7],[16,9,22,15,3],[12,5,18,6,24],[8,21,14,2,20],[4,17,10,23,11]]), true)
//Test.assertEquals(isMagic([
//  [93, 108, 123, 138, 153, 168, 1, 16, 31, 46, 61, 76, 91],
//  [107, 122, 137, 152, 167, 13, 15, 30, 45, 60, 75, 90, 92],
//  [121, 136, 151, 166, 12, 14, 29, 44, 59, 74, 89, 104, 106],
//  [135, 150, 165, 11, 26, 28, 43, 58, 73, 88, 103, 105, 120],
//  [149, 164, 10, 25, 27, 42, 57, 72, 87, 102, 117, 119, 134],
//  [163, 9, 24, 39, 41, 56, 71, 86, 101, 116, 118, 133, 148],
//  [8, 23, 38, 40, 55, 70, 85, 100, 115, 130, 132, 147, 162],
//  [22, 37, 52, 54, 69, 84, 99, 114, 129, 131, 146, 161, 7],
//  [36, 51, 53, 68, 83, 98, 113, 128, 143, 145, 160, 6, 21],
//  [50, 65, 67, 82, 97, 112, 127, 142, 144, 159, 5, 20, 35],
//  [64, 66, 81, 96, 111, 126, 141, 156, 158, 4, 19, 34, 49],

