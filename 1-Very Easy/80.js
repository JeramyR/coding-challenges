

//title: Cleaning Up Messy Arrays

//tags: arrays,conditions,numbers,strings

//url: https://edabit.com/challenge/EEWcSX7Rz5cWzes5d

//Description:
//Create a function that takes an array. This array will contain numbers represented as strings.
//Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.
//Return an empty array if there are no even numbers, or odd.
//Examples
//cleanUpArray(["8"]) ➞ [[8], []]
//
//cleanUpArray(["11"]) ➞ [[], [11]]
//
//cleanUpArray(["7", "4", "8"]) ➞ [[4, 8], [7]]
//
//cleanUpArray(["9", "4", "5", "8"]) ➞ [[4, 8], [9, 5]]
//Notes
//All numbers will be positive integers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(cleanUpArray(['9', '4', '5', '8']), [[4, 8], [9, 5]])
//Test.assertSimilar(cleanUpArray(['1', '4', '5', '4', '5', '8', '9']), [[4, 4, 8], [1, 5, 5, 9]])
//Test.assertSimilar(cleanUpArray(['38', '80', '13', '73', '66', '70', '83', '6', '93', '9', '7', '8', '41']), [[38, 80, 66, 70, 6, 8], [13, 73, 83, 93, 9, 7, 41]])
//Test.assertSimilar(cleanUpArray(['3', '8', '0', '15', '2']), [[8, 0, 2], [3, 15]])
//Test.assertSimilar(cleanUpArray(['5', '1', '7', '4', '8', '8']), [[4, 8, 8], [5, 1, 7]])
//Test.assertSimilar(cleanUpArray(['8']), [[8], []])
//Test.assertSimilar(cleanUpArray(['2', '64', '16', '4', '72']), [[2, 64, 16, 4, 72], []])
//Test.assertSimilar(cleanUpArray(['7', '4', '8']), [[4, 8], [7]])
//Test.assertSimilar(cleanUpArray(['13', '16', '8', '22', '4', '29', '6', '20', '25']), [[16, 8, 22, 4, 6, 20], [13, 29, 25]])
//Test.assertSimilar(cleanUpArray(['9', '3', '7', '4']), [[4], [9, 3, 7]])
//Test.assertSimilar(cleanUpArray(['15', '23', '14', '1', '27', '28', '30', '9']), [[14, 28, 30], [15, 23, 1, 27, 9]])
//Test.assertSimilar(cleanUpArray(['9', '3', '8']), [[8], [9, 3]])
//Test.assertSimilar(cleanUpArray(['3', '26', '18', '17', '6', '8', '30']), [[26, 18, 6, 8, 30], [3, 17]])
//Test.assertSimilar(cleanUpArray(['9', '5', '1', '3', '3', '8', '3', '6', '9']), [[8, 6], [9, 5, 1, 3, 3, 3, 9]])
//Test.assertSimilar(cleanUpArray(['2', '11', '23', '22', '20', '9', '5', '7', '27']), [[2, 22, 20], [11, 23, 9, 5, 7, 27]])
//Test.assertSimilar(cleanUpArray(['2', '1', '7', '4', '9', '6', '11']), [[2, 4, 6], [1, 7, 9, 11]])
//Test.assertSimilar(cleanUpArray(['9', '4', '13', '1', '6', '5', '0', '3']), [[4, 6, 0], [9, 13, 1, 5, 3]])
//Test.assertSimilar(cleanUpArray(['11']), [[], [11]])
//Test.assertSimilar(cleanUpArray(['3', '7', '21', '33', '5']), [[], [3, 7, 21, 33, 5]])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Even and Odd Strings

//tags: interview,language_fundamentals,loops,sorting,strings

//url: https://edabit.com/challenge/uE7dCRk2Lb5jsHN7W

//Description:
//Given a one word lowercase string txt, return another string such that even-indexed and odd-indexed characters are grouped and groups are space-separated.
//Examples
//evenOddString("mubashir") ➞ "mbsi uahr"
//// Letters at even indexes = "mbsi"
//// Letters at odd indexes = "uahr"
//// Join both strings with a space
//
//evenOddString("edabit") ➞ "eai dbt"
//
//evenOddString("airforce") ➞ "aroc ifre"
//Notes
//There will be no space in the given string.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(evenOddString("mubashir"), "mbsi uahr")
//Test.assertEquals(evenOddString("edabit"), "eai dbt")
//Test.assertEquals(evenOddString("airforce"), "aroc ifre")
//Test.assertEquals(evenOddString("Wolfeschlegelsteinhausenbergerdorff"), "Wleclgltihuebredrf ofsheesenasnegrof")
//Test.assertEquals(evenOddString("METHIONYLTHREONYLTHREONYGLUTAMINYLARGINYL"), "MTINLHENLHENGUAIYAGNL EHOYTROYTROYLTMNLRIY")
//Test.assertEquals(evenOddString("PNEUMONOULTRAMICROSCOPICSILICOVOLCANOCONIOSIS"), "PEMNUTAIRSOISLCVLAOOISS NUOOLRMCOCPCIIOOCNCNOI")
//Test.assertEquals(evenOddString("PSEUDOPSEUDOHYPOPARATHYROIDISM"), "PEDPEDHPPRTYODS SUOSUOYOAAHRIIM")
//Test.assertEquals(evenOddString("FLOCCINAUCINIHILIPILIFICATION"), "FOCNUIIIIIIIAIN LCIACNHLPLFCTO")
//Test.assertEquals(evenOddString("SUBDERMATOGLYPHIC"),"SBEMTGYHC UDRAOLPI")
////Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Trimmed Averages

//tags: arrays,math,numbers

//url: https://edabit.com/challenge/pDc7MLcGYzhCW6wRf

//Description:
//Given an array of numbers, remove the largest and smallest numbers, and calculate the average of the remaining numbers.
//Examples
//trimmedAverages([4, 5, 7, 100]) ➞ 6
//// Average of 5 and 7
//
//trimmedAverages([10, 25, 5, 15, 20]) ➞ 15
//// Average of 10, 15 and 20
//
//trimmedAverages([1, 1, 1]) ➞ 1
//// 1
//Notes
//Round to the nearest whole number.
//Array size is greater than 2.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(trimmedAverages([4, 5, 7, 100]), 6)
//Test.assertEquals(trimmedAverages([10, 25, 5, 15, 20]), 15)
//Test.assertEquals(trimmedAverages([1, 1, 1]), 1)
//Test.assertEquals(trimmedAverages([14, 8, 8]), 8)
//Test.assertEquals(trimmedAverages([18, 19, 13]), 18)
//Test.assertEquals(trimmedAverages([18, 16, 20, 18, 3]), 17)
//Test.assertEquals(trimmedAverages([10, 15, 15, 11]), 13)
//Test.assertEquals(trimmedAverages([4, 12, 4, 17, 11]), 9)
//Test.assertEquals(trimmedAverages([9, 1, 11, 8, 15, 20, 5]), 10)
//Test.assertEquals(trimmedAverages([13, 10, 13, 6]), 12)
//​
//// Author: Joshua Señoron

