

//title: Modified Kaprekar Numbers

//tags: algorithms,numbers

//url: https://edabit.com/challenge/ZHResBjuzYzXfWHAy

//Description:
//A modified Kaprekar number is a positive whole number with a special property. If you square it, then split the number into two integers and sum those integers, you have the same value you started with.
//Consider a positive whole number n with d digits. We square n to arrive at a number that is either 2 * d digits long or (2 * d) - 1 digits long. Split the string representation of the square into two parts, l and r. The right-hand part, r must be d digits long. The left is the remaining substring. Convert those two substrings back to integers, add them and see if you get n.
//For example, if n=5, d=1, then n squared = 25 . We split that into two strings and convert them back to integers 2 and 5. We test 2+5=7=5, so this is not a modified Kaprekar number. If n=9, d=1, and n squared = 81. This gives us 1+8=9, the original n.
//Note that r may have leading zeros.
//Complete the kaprekarNumbers() method. It should return the list of modified Kaprekar numbers in ascending order. kaprekarNumbers() has the following parameter(s):
//p: an integer representing the lower integer limit.
//q: an integer representing the upper integer limit.
//Examples
//kaprekarNumbers(1, 10) ➞ "1 9"
//
//kaprekarNumbers(100, 300) ➞ "297"
//
//kaprekarNumbers(1, 100) ➞ "1 9 45 55 99"
//Notes
//Upper and lower ranges should be inclusive of the limits.
//If no modified Kaprekar numbers exist in the given range, return "INVALID RANGE".

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(kaprekarNumbers(1, 100), "1 9 45 55 99")
//Test.assertEquals(kaprekarNumbers(100, 300), "297")
//Test.assertEquals(kaprekarNumbers(1, 99999), "1 9 45 55 99 297 703 999 2223 2728 4950 5050 7272 7777 9999 17344 22222 77778 82656 95121 99999")
//Test.assertEquals(kaprekarNumbers(1, 10), "1 9")
//Test.assertEquals(kaprekarNumbers(2, 4), "INVALID RANGE")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Yahtzee Score Calculator

//tags: arrays,data_structures,games

//url: https://edabit.com/challenge/4amPBJxbKN3ufTGm5

//Description:
//In a Yahtzee game, the player has to score points rolling five dice trying to obtain a specific combination in every of the thirteen turns of the game.
//Turn	Name	Points
//1	Aces	Sum of all dice showing 1
//2	Twos	Sum of all dice showing 2
//3	Threes	Sum of all dice showing 3
//4	Fours	Sum of all dice showing 4
//5	Fives	Sum of all dice showing 5
//6	Sixes	Sum of all dice showing 6
//7	Three of a Kind	Sum of all dice if there are at least three dice the same
//8	Four of a Kind	Sum of all dice if there are at least four dice the same
//9	Full House	25 points if there are two dice of a number and three dice of another number
//10	Lower Straight	30 points if there is a sequence of at least four dice (1,2,3,4 or 2,3,4,5 or 3,4,5,6)
//11	Higher Straight	40 points if there is a sequence of five dice (1,2,3,4,5 or 2,3,4,5,6)
//12	Yahtzee	50 points if there are five dice the same
//13	Chance	Sum of all dice
//If during a turn the rolled dice don't give a valid combination, the score for that turn will be equal to 0. If the total points scored during the first six turns are equal or greater than 63, an additional 35 points are added to the final score.
//You are given an array arr that contains 13 arrays; each array is representing a set of five dice to check for the turn combination, accordingly to the order and to the description given in the above table. You have to implement a function that returns an integer being the final score made by the player.
//Example
//yahtzeeScoreCalc([
//  [1, 3, 1, 1, 2], // Aces
//  [1, 2, 4, 5, 6], // Twos
//  [6, 3, 4, 3, 4], // Threes
//  [3, 1, 1, 4, 4], // Fours
//  [5, 5, 5, 5, 3], // Fives
//  [6, 2, 6, 6, 6], // Sixes
//  [1, 4, 4, 2, 1], // Three of a Kind
//  [3, 3, 3, 3, 3], // Four of a Kind
//  [2, 2, 1, 1, 2], // Full House
//  [6, 1, 2, 3, 4], // Lower Straight
//  [2, 3, 5, 4, 1], // Higher Straight
//  [4, 4, 4, 4, 4], // Yahtzee
//  [3, 3, 4, 5, 6], // Chance
//]) ➞ 279
//
//// Turn 1 ➞ There are 3 dice showing "1" ➞ 3 pts.
//// Turn 2 ➞ There is 1 die showing "2" ➞ 2 pts.
//// Turn 3 ➞ There are 2 dice showing "3" ➞ 6 pts.
//// Turn 4 ➞ There are 2 dice showing "4" ➞ 8 pts.
//// Turn 5 ➞ There are 4 dice showing "5" ➞ 20 pts.
//// Turn 6 ➞ There are 4 dice showing "6" ➞ 24 pts.
//// Turn 7 ➞ There aren't at least 3 dice the same ➞ 0 pts.
//// Turn 8 ➞ There are 4 dice the same ➞ 15 pts. (sum of all dice)
//// Turn 9 ➞ There is a Full House (two "1" and three "2") ➞ 25 pts.
//// Turn 10 ➞ There is a Lower Straight (1,2,3,4) ➞ 30 pts.
//// Turn 11 ➞ There is a Higher Straight (1,2,3,4,5) ➞ 40 pts.
//// Turn 12 ➞ Yahtzee!!! There are 5 dice the same ➞ 50 pts.
//// Turn 13 ➞ Sum of all dice ➞ 21 pts.
//
//// The sum of the points made in the first six turns is:
//// 3 + 2 + 6 + 8 + 20 + 24 = 63
//// There is a bonus of 35 points
//// The sum of the points made in the other seven turns is:
//// 0 + 15 + 25 + 30 + 40 + 50 + 21 = 181
//
//// The total is equal to:
//// 63 + 35 + 181 = 279
//Notes
//When playing to obtain a Three of a Kind, you have to search for at least three dice the same, and not exactly three. The same rule is applied to the Four of a Kind combination and to the Lower Straight combination (that is valid also if is obtained through a Higher Straight)
//A Full House is valid if it's obtained with a combination of two different values: five dice the same are not a Full House.
//Obviously, this is a version of Yahtzee adapted for this specific challenge: you can find the official rules (and a clearer table) in the Resources tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// Test #1
//Test.assertEquals(yahtzeeScoreCalc([
//  [1, 3, 1, 1, 2], // Aces
//  [1, 2, 4, 5, 6], // Twos
//  [6, 3, 4, 3, 4], // Threes
//  [3, 1, 1, 4, 4], // Fours
//  [5, 5, 5, 5, 3], // Fives
//  [6, 2, 6, 6, 6], // Sixes
//  [1, 4, 4, 2, 1], // Three of a Kind
//  [3, 3, 3, 3, 3], // Four of a Kind
//  [2, 2, 1, 1, 2], // Full House
//  [6, 1, 2, 3, 4], // Lower Straight
//  [2, 3, 5, 4, 1], // Higher Straight
//  [4, 4, 4, 4, 4], // Yahtzee
//  [3, 3, 4, 5, 6], // Chance
//]), 279, "Look at the Example in the Instructions tab")
//​
//// Test #2
//Test.assertEquals(yahtzeeScoreCalc([
//  [3, 3, 2, 6, 4], // Aces
//  [1, 1, 2, 5, 5], // Twos
//  [4, 4, 4, 1, 6], // Threes
//  [6, 5, 2, 2, 5], // Fours
//  [2, 1, 4, 4, 2], // Fives
//  [6, 2, 6, 2, 6], // Sixes

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: License Plate

//tags: logic,recursion,regex,strings

//url: https://edabit.com/challenge/W3uxt7hKWQNqtP5zd

//Description:
//Traveling through Europe one needs to pay attention to how the license plate in the given country is displayed. When crossing the border you need to park on the shoulder, unscrew the plate, re-group the characters according to the local regulations, attach it back and proceed with the journey.
//Create a solution that can format the dmv number into a plate number with correct grouping. The function input consists of string s and group length n. The output has to be upper case characters and digits. The new groups are made from right to left and connected by -. The original order of the dmv number is preserved.
//Examples
//licensePlate("5F3Z-2e-9-w", 4) ➞ "5F3Z-2E9W"
//
//licensePlate("2-5g-3-J", 2) ➞ "2-5G-3J"
//
//licensePlate("2-4A0r7-4k", 3) ➞ "24-A0R-74K"
//
//licensePlate("nlj-206-fv", 3) ➞ "NL-J20-6FV"
//Notes
//You are expected to solve this challenge via a recursive approach.
//An iterative version of this challenge can be found via this link.
//A collection of challenges in recursion can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const recursive = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
//Test.assertNotEquals(recursive(licensePlate), false, "Recursion is required!")
//​
//let [strVector, resVector] = [
//  [["5F3Z-2e-9-w", 4], ["2-5g-3-J", 2], ["2-4A0r7-4k", 3], ["GB-bd519-KFC", 2], ["BF-11gf9i-7819iT", 3],
//   ["Fin-Mmg-418", 3], ["sPx-o755", 3], ["de57-uk", 2], ["d-kapa-7778", 4], ["nlj-206-fv", 3]],
//  ["5F3Z-2E9W", "2-5G-3J", "24-A0R-74K", "GB-BD-51-9K-FC",  "BF-11G-F9I-781-9IT", "FIN-MMG-418",
//   "S-PXO-755", "DE-57-UK", "D-KAPA-7778", "NL-J20-6FV"]
//]
//for (let i in strVector) Test.assertEquals(licensePlate(...strVector[i]), resVector[i])

