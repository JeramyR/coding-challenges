

//title: Toy Car Workshop

//tags: math

//url: https://edabit.com/challenge/shnvMjHpw49dinaJt

//Description:
//You work in a toy car workshop, and your job is to build toy cars from a collection of parts. Each toy car needs 4 wheels, 1 car body, and 2 figures of people to be placed inside. Given the total number of wheels, car bodies and figures available, how many complete toy cars can you make?
//Examples
//cars(2, 48, 76) ➞ 0
//# 2 wheels, 48 car bodies, 76 figures
//
//cars(43, 15, 87) ➞ 10
//
//cars(88, 37, 17) ➞ 8
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(cars(37, 15, 20), 9)
//Test.assertEquals(cars(72, 7, 21), 7)
//Test.assertEquals(cars(9, 44, 34), 2)
//Test.assertEquals(cars(50, 38, 7), 3)
//Test.assertEquals(cars(68, 9, 44), 9)
//Test.assertEquals(cars(3, 29, 54), 0)
//Test.assertEquals(cars(28, 34, 80), 7)
//Test.assertEquals(cars(88, 50, 83), 22)
//Test.assertEquals(cars(66, 18, 21), 10)
//Test.assertEquals(cars(97, 6, 10), 5)
//Test.assertEquals(cars(921, 310, 350), 175)
//Test.assertEquals(cars(736, 430, 851), 184)
//Test.assertEquals(cars(405, 379, 740), 101)
//Test.assertEquals(cars(593, 78, 389), 78)
//Test.assertEquals(cars(875, 370, 675), 218)
//Test.assertEquals(cars(863, 274, 203), 101)
//Test.assertEquals(cars(959, 331, 537), 239)
//Test.assertEquals(cars(416, 340, 551), 104)
//Test.assertEquals(cars(692, 348, 543), 173)
//Test.assertEquals(cars(527, 412, 951), 131)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Cube the Square Root

//tags: algebra,math,numbers

//url: https://edabit.com/challenge/2Jh8PyLgPeYA2iRNu

//Description:
//Create a function that takes a number as an argument and returns the square root of that number cubed.
//Examples
//cubeSquareRoot(81) ➞ 729
//
//cubeSquareRoot(1646089) ➞ 2111932187
//
//cubeSquareRoot(695556) ➞ 580093704
//Notes
//All numbers will evenly square root, so don't worry about decimal numbers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(cubeSquareRoot(81), 729)
//Test.assertEquals(cubeSquareRoot(1646089), 2111932187)
//Test.assertEquals(cubeSquareRoot(695556), 580093704)
//​
//// Author : Bonunu

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Unlucky 13

//tags: arrays,language_fundamentals,numbers

//url: https://edabit.com/challenge/5232asan2yFuMGnHq

//Description:
//Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.
//Examples
//unlucky13([53, 182, 435, 591, 637]) ➞ [53, 435, 591]
//// 182 and 637 are divisible by 13.
//
//unlucky13([24, 316, 393, 458, 1279]) ➞ [24, 316, 393, 458, 1279]
//// No numbers in the array are divisible by 13.
//
//unlucky13([104, 351, 455, 806, 871]) ➞ []
//// All numbers in the array are divisible by 13.
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(unlucky13([91, 286, 416, 884, 1229]), [1229])
//Test.assertSimilar(unlucky13([245, 518, 741, 824, 1092]), [245, 518, 824])
//Test.assertSimilar(unlucky13([394, 447, 572, 832, 1105]), [394, 447])
//Test.assertSimilar(unlucky13([289, 406, 650, 791, 1079]), [289, 406, 791])
//Test.assertSimilar(unlucky13([390, 438, 1014, 1067, 1091]), [438, 1067, 1091])
//Test.assertSimilar(unlucky13([494, 1041, 1158, 1188, 1298]), [1041, 1158, 1188, 1298])
//Test.assertSimilar(unlucky13([43, 117, 169, 702, 1048]), [43, 1048])
//Test.assertSimilar(unlucky13([195, 430, 845, 857, 874]), [430, 857, 874])
//Test.assertSimilar(unlucky13([247, 510, 1144, 1164, 1206]), [510, 1164, 1206])
//Test.assertSimilar(unlucky13([182, 520, 533, 923, 1196]), [])
//Test.assertSimilar(unlucky13([52, 144, 148, 1105, 1114]), [144, 148, 1114])
//Test.assertSimilar(unlucky13([130, 204, 364, 585, 679]), [204, 679])
//Test.assertSimilar(unlucky13([23, 309, 949, 975, 1235]), [23, 309])
//Test.assertSimilar(unlucky13([804, 910, 1069, 1190, 1249]), [804, 1069, 1190, 1249])
//Test.assertSimilar(unlucky13([21, 78, 611, 652, 1036]), [21, 652, 1036])
//Test.assertSimilar(unlucky13([32, 107, 481, 891, 1131]), [32, 107, 891])
//Test.assertSimilar(unlucky13([260, 389, 420, 1035, 1086]), [389, 420, 1035, 1086])
//Test.assertSimilar(unlucky13([251, 416, 508, 630, 1235]), [251, 508, 630])
//Test.assertSimilar(unlucky13([213, 592, 1130, 1172, 1281]), [213, 592, 1130, 1172, 1281])
//Test.assertSimilar(unlucky13([25, 136, 312, 632, 1193]), [25, 136, 632, 1193])

