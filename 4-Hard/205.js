

//title: Print Grid

//tags: arrays,language_fundamentals,loops

//url: https://edabit.com/challenge/LbftdXqFTXGANnPnw

//Description:
//Write a method that accepts two integer parameters rows and cols. The output is a 2d array of numbers displayed in column-major order, meaning the numbers shown increase sequentially down each column and wrap to the top of the next column to the right once the bottom of the current column is reached.
//Examples
//printGrid(3, 6) ➞ [
//  [1, 4, 7, 10, 13, 16],
//  [2, 5, 8, 11, 14, 17],
//  [3, 6, 9, 12, 15, 18]
//]
//
//printGrid(5, 3) ➞ [
//  [1, 6, 11],
//  [2, 7, 12],
//  [3, 8, 13],
//  [4, 9, 14],
//  [5, 10, 15]
//]
//
//printGrid(4, 1) ➞ [
//  [1],
//  [2],
//  [3],
//  [4]
//]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(printgrid(3, 6), [[1, 4, 7, 10, 13, 16], [2, 5, 8, 11, 14, 17], [3, 6, 9, 12, 15, 18]])
//Test.assertSimilar(printgrid(5, 3), [[1, 6, 11], [2, 7, 12], [3, 8, 13], [4, 9, 14], [5, 10, 15]])
//Test.assertSimilar(printgrid(4, 1), [[1], [2], [3], [4]])
//Test.assertSimilar(printgrid(1, 3), [[1, 2, 3]])
//Test.assertSimilar(printgrid(10, 2), [[1, 11], [2, 12], [3, 13], [4, 14], [5, 15], [6, 16], [7, 17], [8, 18], [9, 19], [10, 20]])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Molar Mass of Chemical Compound

//tags: language_fundamentals,strings

//url: https://edabit.com/challenge/BZjEvK7rMNZ3uvokm

//Description:
//Create a function that takes a name of a chemical compound as a string and returns the molar mass of the compound. For this challenge only, required data is included below.
//Data
//H -> 1
//B -> 10
//O -> 16
//S -> 32
//N -> 14
//Cl -> 35
//
//Water = "H2 O"
//BoricAcid = "H3 B O3"
//SulfuricAcid = "H2 S O4"
//NitricAcid = "H N O3"
//HydroChloricAcid = "H Cl"
//Examples
//molarMass("SulfuricAcid") -> "H2 S O4"
//#H * 2 + S * 1 +  O * 4 -----> 1 * 2 + 32 * 1 + 16 * 4 = 98
//
//molarMass("Water") -> "H2 O"
//#H * 2 +  O * 1 -----> 1 * 2 + 16 * 1 = 18
//Notes
//Input is a string and return value is number.
//In the data, "O" is an English letter, not zero.
//Check out the Resources tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(molarMass("SulfuricAcid"), 98)
//Test.assertEquals(molarMass("Water"), 18)
//Test.assertEquals(molarMass("BoricAcid"), 61)
//Test.assertEquals(molarMass("NitricAcid"), 63)
//Test.assertEquals(molarMass("HydroChloricAcid"), 36)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Prison Break

//tags: arrays,games,logic,loops

//url: https://edabit.com/challenge/rT33paDEoJH5AhsA9

//Description:
//A prison can be represented as an array of cells. Each cell contains exactly one prisoner. A 1 represents an unlocked cell and a 0 represents a locked cell.
//[1, 1, 0, 0, 0, 1, 0]
//Starting inside the leftmost cell, you are tasked with seeing how many prisoners you can set free, with a catch. You are the prisoner in the first cell. If the first cell is locked, you cannot free anyone. Each time you free a prisoner, the locked cells become unlocked, and the unlocked cells become locked again.
//So, if we use the example above:
//[1, 1, 0, 0, 0, 1, 0]
//// You free the prisoner in the 1st cell.
//
//[0, 0, 1, 1, 1, 0, 1] 
//// You free the prisoner in the 3rd cell (2nd one locked).
//
//[1, 1, 0, 0, 0, 1, 0]
//// You free the prisoner in the 6th cell (3rd, 4th, and 5th locked).
//
//[0, 0, 1, 1, 1, 0, 1]
//// You free the prisoner in the 7th cell - and you are done!
//Here, we have set free 4 prisoners in total.
//Create a function that, given this unique prison arrangement, returns the number of freed prisoners.
//Examples
//freedPrisoners([1, 1, 0, 0, 0, 1, 0]) ➞ 4
//
//freedPrisoners([1, 1, 1]) ➞ 1
//
//freedPrisoners([0, 0, 0]) ➞ 0
//
//freedPrisoners([0, 1, 1, 1]) ➞ 0
//Notes
//You are the prisoner in the first cell. You must be freed to free anyone else.
//You must free a prisoner in order for the locks to switch. So in the second example where the input is [1, 1, 1] after you release the first prisoner, the locks change to [0, 0, 0]. Since all cells are locked, you can release no more prisoners.
//You always start with the leftmost element in the array (the first prison cell). If all the prison cells to your right are all zeroes, you cannot free any more prisoners.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(freedPrisoners([1, 1, 0, 0, 0, 1, 0]), 4)
//Test.assertEquals(freedPrisoners([1, 0, 0, 0, 0, 0, 0]), 2) 
//Test.assertEquals(freedPrisoners([1, 1, 1, 0, 0, 0]), 2) 
//Test.assertEquals(freedPrisoners([1, 0, 1, 0, 1, 0]), 6) 
//Test.assertEquals(freedPrisoners([1, 1, 1]), 1, 'once first prisoner freed, all cells become locked')
//Test.assertEquals(freedPrisoners([0, 0, 0]), 0, 'first cell locked, so cannot switch')
//Test.assertEquals(freedPrisoners([0, 1, 1, 1]), 0, 'first cell locked, cannot switch')

