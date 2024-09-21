

//title: Read the Abacus (Part 2: Japanese Soroban)

//tags: arrays,loops,strings

//url: https://edabit.com/challenge/rCBGDCTmDMypW6LLa

//Description:
//The Japanese soroban is type of abacus (counting tool) that is used by sliding threaded beads up and down wires. The soroban is divided into an upper deck (where each bead is worth 5 units) and a lower deck (where beads are worth 1 unit). Working from the right and moving to the left, units increase by a factor of 10. If we use "O" for a bead and "|" to show the wire, we can represent the soroban as follows:
//OOOOOOO
//|||||||  Upper deck
//-------  Dividing line
//|||||||  Lower deck
//OOOOOOO
//OOOOOOO
//OOOOOOO
//OOOOOOO
//To read the number, we count the value of the number of beads that have been moved towards the dividing line. The values for the upper and lower deck are added together. In the example below, the number is 30651:
//OOOO||O
//||||OO|
//-------
//||O|O|O
//OOOO|O|
//OOOOOOO
//OO|OOOO
//OOOOOOO
//
//0000550  Upper deck
//0030101  Lower deck
//  30651  Total
//Given an array of strings representing the soroban, return the number being displayed.
//Examples
//soroban([
//  "OOOO||O",
//  "||||OO|",
//  "-------",
//  "|||O|OO",
//  "OOOOOOO",
//  "OOO|OOO",
//  "OOOOO|O",
//  "OOOOOO|"
//]) ➞ 2584
//
//soroban([
//  "||OO||O",
//  "OO||OO|",
//  "-------",
//  "OO|OO||",
//  "OOO|OOO",
//  "OOOO|OO",
//  "|OOOOOO",
//  "O|OOOOO"
//]) ➞ 8901750
//Notes
//For more info on how to use a soroban, please check the Resources tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(soroban(['|O|O|O|', 'O|O|O|O', '-------', '||O|OO|', 'OOOO||O', 'OO|OOOO', 'OOOOOOO', 'OOOOOOO']), 5070615)
//Test.assertEquals(soroban(['OOO||OO', '|||OO||', '-------', 'OOOOO||', 'OOO||OO', 'OO|OOOO', 'OOOOOOO', '||OOOOO']), 4426600)
//Test.assertEquals(soroban(['|O|O|OO', 'O|O|O||', '-------', 'OO||||O', 'O|OOOOO', '|OOOOOO', 'OOOOOO|', 'OOOOOOO']), 7150503)
//Test.assertEquals(soroban(['|OOO|OO', 'O|||O||', '-------', '|||OO|O', 'OOOO|OO', 'OOO|OOO', 'OOOOOOO', 'OOOOOO|']), 5002604)
//Test.assertEquals(soroban(['O|OOO|O', '|O|||O|', '-------', 'OOO|OO|', '|OOOOOO', 'OO|OOOO', 'O|OOO|O', 'OOOO|OO']), 1820480)
//Test.assertEquals(soroban(['OOO|OO|', '|||O||O', '-------', 'OOOOO|O', '|OOO|O|', 'OO|OOOO', 'OOO|OOO', 'O|OOOOO']), 1428106)
//Test.assertEquals(soroban(['OOOOOOO', '|||||||', '-------', '||OO|OO', 'OO|OO|O', 'OOOOOOO', 'OOO|OOO', 'OOOOOO|']), 13014)
//Test.assertEquals(soroban(['|OOO|||', 'O|||OOO', '-------', 'O||OOOO', 'OOOOOOO', 'OOOOO|O', '|OO||O|', 'OOOOOOO']), 8003878)
//Test.assertEquals(soroban(['O|OOOOO', '|O|||||', '-------', '||OO|||', 'OOOOOOO', 'OOOOOOO', 'OO|OOOO', 'OOO|OOO']), 534000)
//Test.assertEquals(soroban(['OOOO|||', '||||OOO', '-------', '|OO||OO', 'OOOOOOO', 'OOOOOO|', 'OO|OO|O', 'O|OOOOO']), 430587)
//Test.assertEquals(soroban(['OOO|||O', '|||OOO|', '-------', '||OOOO|', 'OOOOOOO', 'OOOOO|O', 'OO|OOOO', 'OOO||OO']), 39970)
//Test.assertEquals(soroban(['O||OO||', '|OO||OO', '-------', 'OO|OOO|', 'O|OOOOO', 'OOOOOOO', 'OOOO|OO', '|OO|O|O']), 4654395)
//Test.assertEquals(soroban(['OOO|OO|', '|||O||O', '-------', '|||OO||', 'OOOOOOO', 'OOO|OOO', 'OOOOOOO', 'OOOO|OO']), 7405)
//Test.assertEquals(soroban(['|O|OOOO', 'O|O||||', '-------', 'OO|OO|O', '|OOOOOO', 'OOO||OO', 'OOOOOOO', 'O|OOOO|']), 6452204)
//Test.assertEquals(soroban(['O|OO|O|', '|O||O|O', '-------', 'OOOOO|O', 'OOOOOO|', '||O||OO', 'OOOOOOO', 'OO|OOOO']), 2742706)
//Test.assertEquals(soroban(['OO|OOOO', '||O||||', '-------', 'OO|O|||', 'OOOOOOO', 'O|OOOOO', 'OOOOOOO', '|OO|OOO']), 4254000)
//Test.assertEquals(soroban(['|OOOOO|', 'O|||||O', '-------', 'OOOOO|O', 'O|OOOO|', '|OOOOOO', 'OOOO|OO', 'OO||OOO']), 7144306)
//Test.assertEquals(soroban(['OO|OO||', '||O||OO', '-------', 'O|||O|O', 'OOOOOOO', '|OOOOOO', 'OOOO|O|', 'OOOOOOO']), 2050358)
//Test.assertEquals(soroban(['||O|OOO', 'OO|O|||', '-------', 'O||||OO', '|OOOOOO', 'OOOOOO|', 'OOOOO|O', 'OOOOOOO']), 6505032)
//Test.assertEquals(soroban(['|OOOO|O', 'O||||O|', '-------', '|O||OO|', 'OOOOOOO', 'O|OOOOO', 'OOOOOOO', 'OOOO||O']), 5200490)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: Pronic Number

//tags: math,numbers,recursion,validation

//url: https://edabit.com/challenge/rtYE79GzaQp4RccFC

//Description:
//A pronic number (or otherwise called as heteromecic) is a number which is a product of two consecutive integers, that is, a number of the form n(n + 1). Create a function that determines whether a number is pronic or not.
//Examples
//isHeteromecic(0) ➞ true
//// 0 * (0 + 1) = 0 * 1 = 0
//
//isHeteromecic(2) ➞ true
//// 1 * (1 + 1) = 1 * 2 = 2
//
//isHeteromecic(7) ➞ false
//
//isHeteromecic(110) ➞ true
//// 10 * (10 + 1) = 10 * 11 = 110
//
//isHeteromecic(136) ➞ false
//
//isHeteromecic(156) ➞ true
//Notes
//You are expected to solve this challenge via recursion.
//You can check on the Resources tab for more details about recursion.
//An iterative version of this challenge can be found via this link.
//A collection of challenges in recursion can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const recursive = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
//Test.assertNotEquals(recursive(isHeteromecic), false, "Recursion is required!")
//​
//let [numVector, resVector] = [
//  [0, 2, 7, 110, 136, 156, 182, 218, 250, 272, 306, 362, 380, 422, 462, 600],
//  [true, true, false, true, false, true, true, false, false, true, true, false, true, false, true, true]
//]
//for (let i in numVector) Test.assertEquals(isHeteromecic(numVector[i]), resVector[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: We Have a House

//tags: algorithms,math,numbers

//url: https://edabit.com/challenge/uaK2bBBZby58kXbGe

//Description:
//In the garden, we have a house. We don't know how big the house is going to get. The garden is 50' x 50'. If you want to walk around the house, you'll need 3 feet so the house cannot be bigger than the width & depth of the garden minus the path to walk around it.
//
//In this example you can see the arguments your function is going to get (in red). The measurements of the windows + door as well as the dark rim (against rain damage) are always the same (in blue). We put One door in the front and Two windows in each wall.
//We don't have permission to build higher than 20'. The area around the windows and door cannot be smaller than 1 foot except under the door obviously. It is possible to have a flat roof.
//Create a function that takes four arguments and returns the area of light yellow paint and dark gray paint in a string as square feet. Assuming the coverage of the paint is perfect and you'll only need one layer of paint.
//Examples
//weHaveHouse(8, 30, 32, 8) ➞ "Yellow: 873, Gray: 242"
//
//weHaveHouse(9, 14, 20, 9) ➞ "House too small."
//
//weHaveHouse(9, 38, 36, 9) ➞ "Yellow: 1261, Gray: 290"
//
//weHaveHouse(10, 31, 30, 11) ➞ "No permission."
//Notes
//If the house is too big for the garden, return "House too big."
//If the house is too high, return "No permission."
//If the house is too small (for the windows and door to fit), return "House too small."

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(weHaveHouse(8, 30, 32, 8), "Yellow: 873, Gray: 242")
//Test.assertEquals(weHaveHouse(10, 31, 30, 11), "No permission.")
//Test.assertEquals(weHaveHouse(8, 30, 30, 8), "Yellow: 849, Gray: 234")
//Test.assertEquals(weHaveHouse(9, 20, 18, 8), "Yellow: 581, Gray: 146")
//Test.assertEquals(weHaveHouse(9, 14, 20, 9), "House too small.")
//Test.assertEquals(weHaveHouse(8, 16, 12, 8), "Yellow: 353, Gray: 106")
//Test.assertEquals(weHaveHouse(10, 25, 25, 0), "Yellow: 689, Gray: 194")
//Test.assertEquals(weHaveHouse(8, 45, 42, 8), "House too big.")
//Test.assertEquals(weHaveHouse(10, 40, 40, 10), "Yellow: 1569, Gray: 314")
//Test.assertEquals(weHaveHouse(10, 15, 10, 7), "House too small.")
//Test.assertEquals(weHaveHouse(9, 38, 36, 9), "Yellow: 1267, Gray: 290")
//Test.assertEquals(weHaveHouse(8, 15, 12, 6), "Yellow: 303, Gray: 102")
//Test.assertEquals(weHaveHouse(8, 30, 45, 6), "House too big.")
//Test.assertEquals(weHaveHouse(9, 20, 14, 8), "Yellow: 525, Gray: 130")

