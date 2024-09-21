

//title: Pile of Cubes

//tags: algorithms,loops,math,numbers

//url: https://edabit.com/challenge/naXh8G72D98EhidqT

//Description:
//Mubashir needs your help to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.
//Given the total volume m of the building, can you find the number of cubes n required for the building?
//In other words, you have to return an integer n such that:
//n^3 + (n-1)^3 + ... + 1^3 == m
//Return null if there is no such number.
//Examples
//pileCubes(1071225) ➞ 45
//
//pileCubes(4183059834009) ➞ 2022
//
//pileCubes(16) ➞ null
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(pileCubes(4183059834009), 2022)
//Test.assertEquals(pileCubes(24723578342962), null)
//Test.assertEquals(pileCubes(135440716410000), 4824)
//Test.assertEquals(pileCubes(40539911473216), 3568)
//Test.assertEquals(pileCubes(26825883955641), 3218)
//Test.assertEquals(pileCubes(41364076483082), null)
//Test.assertEquals(pileCubes(9541025211025), 2485)
//Test.assertEquals(pileCubes(112668204662785), null)
//Test.assertEquals(pileCubes(79172108332642), null)
//Test.assertEquals(pileCubes(1788719004901), null)
//Test.assertEquals(pileCubes(131443152397956), 4788)
//Test.assertEquals(pileCubes(1801879360282), null)
//Test.assertEquals(pileCubes(18262169777476), 2923)
//Test.assertEquals(pileCubes(11988186060816), 2631)
//Test.assertEquals(pileCubes(826691919076), 1348)
//Test.assertEquals(pileCubes(36099801072722), null)
//Test.assertEquals(pileCubes(171814395026), null)
//Test.assertEquals(pileCubes(637148782657), null)
//Test.assertEquals(pileCubes(6759306226), null)
//Test.assertEquals(pileCubes(33506766981009), 3402)
//Test.assertEquals(pileCubes(108806345136785), null)
//Test.assertEquals(pileCubes(14601798712901), null)
//Test.assertEquals(pileCubes(56454575667876), 3876)
//Test.assertEquals(pileCubes(603544088161), 1246)
//Test.assertEquals(pileCubes(21494785321), 541)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Return Duplicate Numbers

//tags: algorithms,arrays,loops

//url: https://edabit.com/challenge/WYNfvyd5NRfAgtcqZ

//Description:
//Given an array nums where each integer is between 1 and 100, return a sorted array containing only duplicate numbers from the given nums array.
//Examples
//duplicateNums([1, 2, 3, 4, 3, 5, 6]) ➞ [3]
//
//duplicateNums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54]) ➞ [72, 81, 99]
//
//duplicateNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ null
//Notes
//The given array won't contain the same number three times.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(duplicateNums([1, 2, 3, 4, 3, 5, 6]), [3])
//Test.assertSimilar(duplicateNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), null)
//Test.assertSimilar(duplicateNums([20, 30, 40, 30, 20, 40]), [20, 30, 40])
//Test.assertSimilar(duplicateNums([100, 59, 12, 13, 54, 76, 100, 14, 12]), [12, 100])
//Test.assertSimilar(duplicateNums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54]),[72, 81, 99])
//Test.assertSimilar(duplicateNums([11, 22, 33, 44, 55, 44, 33, 22, 11]), [11, 22, 33, 44])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sum of Missing Numbers

//tags: math,numbers,sorting

//url: https://edabit.com/challenge/8a2J9T4FM5fgSwn4w

//Description:
//Create a function that returns the sum of missing numbers.
//Examples
//sumMissingNumbers([1, 3, 5, 7, 10]) ➞ 29
//// 2 + 4 + 6 + 8 + 9
//
//sumMissingNumbers([10, 7, 5, 3, 1]) ➞ 29
//
//sumMissingNumbers([10, 20, 30, 40, 50, 60]) ➞ 1575
//Notes
//The minimum and maximum value of the given array are the inclusive bounds of the numeric range to consider when searching for missing numbers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sumMissingNumbers([1, 3, 5, 7, 10]), 29)
//Test.assertEquals(sumMissingNumbers([10, 20, 30, 40, 50, 60]), 1575)
//Test.assertEquals(sumMissingNumbers([7, 3, 8, 5, 12]), 40)
//Test.assertEquals(sumMissingNumbers([99, 2, 45, 4, 17]), 4782)
//Test.assertEquals(sumMissingNumbers([10, 7, 5, 3, 1]), 29)
//Test.assertEquals(sumMissingNumbers([7, 8, 9, 10]), 0)

