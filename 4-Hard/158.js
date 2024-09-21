

//title: Money Bill Count

//tags: logic,math,numbers

//url: https://edabit.com/challenge/4B2hvNaGFvrEgqZEr

//Description:
//Create a function billCount that takes two arguments. The first argument is the amount of money the user has and the second is the array of money bills available. Return the minimum count of money bills required to equal the user money amount.
//billCount(1001, [1, 10, 20])
//# User Money = €1000 and Bills Available = [€1, €10, €20]
//
//billCount(1001, [1, 10, 20]) -> 51 because 20*50+ 1*1 = 1001
//# We require 50  20€ bill and 1 1€ bill to equal €1001.
//# Therefore, Minimum Count Money Bills is 50 + 1 = 51.
//Examples
//billCount(100, [1, 10, 20]) ➞ 5
//# Because 20 * 5 = 100
//
//billCount(1050, [1, 10, 20, 100]) ➞ 13
//# Because 100 * 10 + 20 * 2 + 10 * 1 = 1050
//
//billCount(3, [1, 10]) ➞ 3
//# Because 3 * 1 = 3
//
//billCount(55, [1, 5, 10, 50]) ➞ 2
//# Because 50 * 1 + 5 * 1 = 55
//Notes
//Money amount and bills are all valid.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(billCount(100, [1, 10, 20]), 5)
//Test.assertEquals(billCount(1050, [1, 10, 20, 100]), 13)
//Test.assertEquals(billCount(3, [1, 10]), 3)
//Test.assertEquals(billCount(555, [1, 10, 100]), 15)
//Test.assertEquals(billCount(222, [1, 10, 100]), 6)
//Test.assertEquals(billCount(60, [1, 10, 20]), 3)
//Test.assertEquals(billCount(55, [1, 5, 10, 50]), 2)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Fridge Poetry

//tags: strings,validation

//url: https://edabit.com/challenge/aKx7FLtttZqopDo5e

//Description:
//Write a function that returns true if it's possible to build a phrase s1 using only the characters from another phrase s2.
//Examples
//canBuild("got 2 go", "gogogo 2 today") ➞ true
//
//canBuild("sit on top", "its a moo point") ➞ true
//
//canBuild("long high add or", "highway road go long") ➞ false
//
//canBuild("fill tuck mid", "truck falls dim") ➞ false
//Notes
//All letters will be in lower case.
//Numbers and special characters included.
//Ignore whitespaces.
//Do not count white space as a character.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(canBuild("got 2 go", "go go go 2 today"), true)
//Test.assertEquals(canBuild("for an angel", "angel forest nymph awaken"), true)
//Test.assertEquals(canBuild("sit on top", "its a moo point"), true)
//Test.assertEquals(canBuild("solar to oven", "love desolate rose thorn"), true)
//Test.assertEquals(canBuild("gate im in", "magnetizing"), true)
//Test.assertEquals(canBuild("moreso", "mount rushmore"), true)
//Test.assertEquals(canBuild("dool", "ken doll"), false)
//Test.assertEquals(canBuild("world of make believe", "make believe world"), false)
//Test.assertEquals(canBuild("long high add or", "highway road go long"), false)
//Test.assertEquals(canBuild("fill tuck mid", "truck falls dim"), false)
//Test.assertEquals(canBuild("skin man i", "man in mask"), false)
//Test.assertEquals(canBuild("foolish prides", "foolish pride"), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Knight Move

//tags: algebra,games,strings

//url: https://edabit.com/challenge/L3vq9XM7dJRfXNGAP

//Description:
//Create a function that takes a start position of the chess knight and return all possible moves.
//   
//Formating
//Letters (A, B, C, D, E, F, G,H) must be on Uppercase.
//On result moves must be sorted alphabetically (numbers too).
//Moves must be separated by space-space.
//Examples
//knightMove("A1") ➞ "B3 - C2"
//
//knightMove("A2") ➞ "B4 - C1 - C3"
//
//knightMove("E2") ➞ "C1 - C3 - D4 - F4 - G1 - G3"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(knightMove('C1'), 'A2 - B3 - D3 - E2')
//Test.assertEquals(knightMove('H8'), 'F7 - G6')
//Test.assertEquals(knightMove('A4'), 'B2 - B6 - C3 - C5')
//Test.assertEquals(knightMove('E4'), 'C3 - C5 - D2 - D6 - F2 - F6 - G3 - G5')
//Test.assertEquals(knightMove('F7'), 'D6 - D8 - E5 - G5 - H6 - H8')
//Test.assertEquals(knightMove('A2'), 'B4 - C1 - C3')

