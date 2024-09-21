

//title: The Empty Square Sequence

//tags: algebra,math,validation

//url: https://edabit.com/challenge/dq5bqbRnPwDxJyobL

//Description:
//In the image below, squares are either empty or filled with a circle.
//
//Create a function that takes a number step (which equals HALF the width of a square) and returns the amount of empty squares. The image shows the squares with step 1, 2 and 3. The return value is the number of cells not on a diagonal, which is 0 for the first square, 8 for the second, and 24 for the third.
//Examples
//emptySq(1) ➞ 0
//
//emptySq(3) ➞ 24
//
//emptySq(10) ➞ 360
//Notes
//Test input will always be a positive integer.
//The width of the square will always be even.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(emptySq(3), 24)
//Test.assertEquals(emptySq(1), 0)
//Test.assertEquals(emptySq(27), 2808)
//Test.assertEquals(emptySq(3), 24)
//Test.assertEquals(emptySq(0), 0, 'Even though the box is unexisting, the amount of empty squares is also 0.')
//Test.assertEquals(emptySq(10), 360)
//Test.assertEquals(emptySq(19), 1368)
//Test.assertEquals(emptySq(60), 14160)
//Test.assertEquals(emptySq(7), 168)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Briscola! (Part I)

//tags: arrays,data_structures,games

//url: https://edabit.com/challenge/GkvBnNFKcf4ZANXPH

//Description:
//Briscola is an Italian card game, played with a deck of 40 cards that has four suits (hearts, diamonds, clubs, and spades), so that there are ten cards per suit: the Ace, the numbered cards from 2 up to 7, and the three face-cards (Jack, Queen, and King). In this challenge, the notation used for the cards is a string containing the card value (with the upper-case initial for face-cards) and the lower-case initial for suits, as in the examples below:
//Ah = Ace of Hearts
//2s = Two of Spades
//Jc = Jack of Clubs
//Kd = King of Diamonds
//The total number of points available is 120. When counting the points scored at the end of a game, the cards have the following values:
//Ace: 11 points
//Three: 10 points
//King: 4 points
//Queen: 3 points
//Jack: 2 points
//Any other card has no value (0 points).
//Each game of Briscola is made of two rounds. After the first round, the points are counted for both you and your opponent, and these scores (plus 1) will set the target for winning the game, after that the second round is played.
//- First Round -
//Player score: 80
//Opponent score: 40
//- Second Round -
//Player wins scoring 41 points or more.
//Opponent wins scoring 81 points or more.
//If after the second round the total points are equal for both you and your opponent, it's a tie.
//- First Round -
//Player score: 80
//Opponent score: 40
//- Second Round -
//Player score: 40
//Opponent score: 80
//
//It's a tie! 120 points for both players.
//You are given two arrays as parameters:
//myDeck1 contains your collected cards during the first round.
//myDeck2 contains your collected cards during the second round.
//You have to implement a function that returns:
//"You Win!" if in the second round you totalized a higher score than your opponent's score in the first round.
//"You Lose!" if in the second round you totalized a lower score than your opponent's score in the first round.
//"Draw!" if after the second round the total points are the same for both you and your opponent.
//Examples
//briscolaScore(
//  ["3c", "3s", "Qd", "Jh", "5d", "Jc", "6d", "Ad", "Js", "Qc"],
//  ["Jd", "Kd", "4c", "6s", "Ks", "5c", "3d", "As", "Jh", "6h"]
//) ➞ "You Lose!"
//
//// You score 43 points in the first round.
//// You need to score at least 78 points in the second round.
//// You score 33 points in the second round.
//
//briscolaScore(
//  ["Ac", "As", "3d", "3h", "3s", "Ah", "Kd"],
//  ["3d", "Ad", "Ac", "As", "Ah"]
//) ➞ "You Win!"
//
//// You score 67 points in the first round.
//// You need to score at least 54 points in the second round.
//// You score 54 points in the second round.
//
//briscolaScore(
//  ["Ac", "As", "3d", "3h", "3s", "Ah", "Kd"],
//  ["3d", "Ad", "Ac", "As", "3h"]
//) ➞ "Draw!"
//
//// You score 67 points in the first round.
//// You need to score at least 54 points in the second round.
//// You score 53 points in the second round.
//// Your total score is 120, and so is for your opponent.
//Notes
//You don't need to count the points scored by your opponent, because you know the maximum points available in a round (120).
//Despite suits are important during the game, they do not influence the score when counting points.
//The original standard suits and face-cards of an Italian deck are different from the international ones used for Poker. If you want to know more, take a look at the Resources tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// Test #1
//const myDeck1_test1 = [
//  '3c', '3s', 'Qd', 'Jh', '5d', 'Jc', '6d', 'Ad', 'Js', 'Qc'
//]
//const myDeck2_test1 = [
//  'Jd', 'Kd', '4c', '6s', 'Ks', '5c', '3d', 'As', 'Jh', '6h'
//]
//Test.assertEquals(briscolaScore(myDeck1_test1, myDeck2_test1), "You Lose!", "Example #1");
//​
//// Test #2
//const myDeck1_test2 = [
//  'Ac', 'As', '3d', '3h', '3s', 'Ah', 'Kd'
//]
//const myDeck2_test2 = [
//  '3d', 'Ad', 'Ac', 'As', 'Ah'
//]
//Test.assertEquals(briscolaScore(myDeck1_test2, myDeck2_test2), "You Win!", "Example #2");
//​
//// Test #3
//const myDeck1_test3 = [
//  'Ac', 'As', '3d', '3h', '3s', 'Ah', 'Kd'
//]
//const myDeck2_test3 = [
//  '3d', 'Ad', 'Ac', 'As', '3h'
//]

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Is the Number a Prime? (with a twist)

//tags: math,validation

//url: https://edabit.com/challenge/FkcL7Fw9KF74rLCbK

//Description:
//Write a function that takes a number and returns true if it's a prime; false otherwise. The number can be 2^64-1 (2 to the power of 63, not XOR). With the standard technique it would be O(2^64-1), which is much too large for the 10 second time limit imposed by Edabit.
//
//Examples
//prime(7) ➞ true
//
//prime(56963) ➞ true
//
//prime(5151512515524) ➞ false
//Notes
//A "prime" number is a number that can only be divided by itself and 1 (upon division the result is a whole number).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(prime(7), true)
//Test.assertEquals(prime(5), true)
//Test.assertEquals(prime(12), false) 
//Test.assertEquals(prime(777771), false)
//Test.assertEquals(prime(207971), true)
//Test.assertEquals(prime(100000074281), true)
//Test.assertEquals(prime(100000074282), false)
//Test.assertEquals(prime(777777777777777), false)

