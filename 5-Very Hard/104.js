

//title: The Primiera

//tags: arrays,conditions,games

//url: https://edabit.com/challenge/4RQdHYZq7vMxgiibB

//Description:
//Primiera (from the french word prime, "prize") is a combination of cards of Scopa, a popular Italian card game.
//For establishing the value of the Primiera, a separate point scale is used for selecting the best cards in the player's deck, in each of the four suits and totaling those four cards point values. A Primiera requires at least one card for each suit, otherwise, it can't be calculated.
//This is the Primiera points scale:
//7 is worth 21 points.
//6 is worth 18 points.
//Ace is worth 16 points.
//Cards from 2 to 5 are worth 10 points plus the card value.
//Face cards (Jack, Queen and King) are worth 10 points.
//Create a function that takes in an array representing a cards deck and returns the value of the Primiera.
//Examples
//getPrimieraScore(["Ad", "7d", "5h", "2c", "Ks"]) ➞ 58
//// In the diamonds set 7 is higher than Ace (21 > 16).
//
//getPrimieraScore(["2d", "Jd", "7h", "Qc", "5s", "As"]) ➞ 59
//// In the diamonds set 2 is higher than Jack (12 > 10), while in
//// the spades set Ace is higher than 5 (16 > 15 ).
//
//getPrimieraScore(["2d", "Jd", "Qc", "5s", "As"]) ➞ 0
//// There aren't cards in the hearts set, so Primiera can't be
//// calculated.
//Notes
//Notation: Ace, card numbers from 2 to 7, Jack, Queen or King + diamonds, hearts, clubs or spades.
//If one or more seeds are missing from the deck the value of the Primiera is equal to 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(getPrimieraScore(["3d", "6d", "6h", "Qh", "7s", "As", "6c", "Jc"]), 75)
//Test.assertEquals(getPrimieraScore(["3d", "7d", "Kd", "7h", "Qh", "Ah", "7s", "3c", "Jc"]), 76)
//Test.assertEquals(getPrimieraScore(["5d", "7h", "Qc", "Ac", "4c", "Kc", "As"]), 68)
//Test.assertEquals(getPrimieraScore(["7d", "Ad", "Kd", "2h", "6h", "5h", "Ah", "3c", "Jc", "Ac", "7c", "3c", "4c"]), 0, "At least one card per suit must be in the deck")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Prefix Notation Evaluation

//tags: arrays,data_structures,language_fundamentals

//url: https://edabit.com/challenge/adxJHueh3if83JTgP

//Description:
//Create a function that takes a mathematical expression in prefix notation as a string and evaluates the expression.
//Examples
//prefix("+ 5 4") ➞ 9
//
//prefix("* 12 2") ➞ 24
//
//prefix("+ -10 10") ➞ 0
//Notes
//The mathematical expression is valid.
//Check the Resources.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(prefix("- -14 -15"), 1)
//Test.assertEquals(prefix("+ 12 13"), 25)
//Test.assertEquals(prefix("* 3 3"), 9)
//Test.assertEquals(prefix("+ -15 15"), 0)
//Test.assertEquals(prefix("- 2200 100"), 2100)
//Test.assertEquals(prefix("/ 1000 10"), 100)
//Test.assertEquals(prefix("+ 20 20"), 40)
//Test.assertEquals(prefix("* - 8 6 10"), 20)
//Test.assertEquals(prefix("+ 13 100"), 113)
//Test.assertEquals(prefix("* / 40 4 3"), 30)
//Test.assertEquals(prefix("- + 200 300 500"), 0)
//Test.assertEquals(prefix("+ - * / 100 10 4 100 20"), -40)
//Test.assertEquals(prefix("* + 20 2 5"), 110)
//Test.assertEquals(prefix("/ + 12 8 * 2 2"), 5)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Longest Slide of Pyramid

//tags: algorithms,functional_programming,numbers

//url: https://edabit.com/challenge/6MoKpqhRQyhD89NXj

//Description:
//Create a function that takes a 2D array of pyramid numbers and returns the maximum sum of consecutive numbers from the top to the bottom of the pyramid.
//                        /3/
//                        \7\ 4 
//                       2 \4\ 6 
//                      8 5 \9\ 3
//
//// Longest slide down sum is 3 + 7 + 4 + 9 = 23
//Examples
//longestSlide([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]) ➞ 23
//
//longestSlide([[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]]) ➞ 20
//
//longestSlide([[2], [9, 4], [1, 8, 7], [6, 4, 7, 2]]) ➞ 26
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(longestSlide(
//[[3],
//[7, 4],
//[2, 4, 6],
//[8, 5, 9, 3]]),
//23, "should work for small pyramids")
//​
//Test.assertEquals(longestSlide(
//[[75],
//[95, 64],
//[17, 47, 82],
//[18, 35, 87, 10],
//[20,4, 82, 47, 65],
//[19,1, 23, 75,3, 34],
//[88,2, 77, 73,7, 63, 67],
//[99, 65,4, 28,6, 16, 70, 92],
//[41, 41, 26, 56, 83, 40, 80, 70, 33],
//[41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
//[53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
//[70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
//[91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
//[63, 66,4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
//[ 4, 62, 98, 27, 23,9, 70, 98, 73, 93, 38, 53, 60,4, 23]]),
//1074, "should work for medium pyramids")
//​

