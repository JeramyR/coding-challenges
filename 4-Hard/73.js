

//title: Product of Remaining Elements

//tags: arrays,logic,loops

//url: https://edabit.com/challenge/WuoMiJRr69hPRQJYx

//Description:
//Write a function that returns true if you can partition an array into one element and the rest, such that this element is equal to the product of all other elements excluding itself.
//Examples
//canPartition([2, 8, 4, 1]) ➞ true
//// 8 = 2 x 4 x 1
//
//canPartition([-1, -10, 1, -2, 20]) ➞ false
//
//canPartition([-1, -20, 5, -1, -2, 2]) ➞ true
//Notes
//The array may contain duplicates.
//Multiple solutions can exist, any solution is sufficient to return true.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(canPartition([-1, -10, 1, -2, 20]), false)
//Test.assertEquals(canPartition([-1, -20, 5, -1, -2, 2]), true)
//Test.assertEquals(canPartition([2, 8, 4, 1]), true)
//Test.assertEquals(canPartition([1, 1, -1, 1]), false)
//Test.assertEquals(canPartition([-1, -1, 1, 1]), true)
//Test.assertEquals(canPartition([0, 5, 1, -1]), false)
//Test.assertEquals(canPartition([0, 1, 1, -1]), false)
//Test.assertEquals(canPartition([0, 1, 1, 1]), false)
//Test.assertEquals(canPartition([0, 0, 1, 1]), true)
//Test.assertEquals(canPartition([0, 0, 1]), true)
//Test.assertEquals(canPartition([0, 0, 0]), true)
//Test.assertEquals(canPartition([5, 5, 25, 100]), false)
//Test.assertEquals(canPartition([-1, 5, 20, 100]), false)
//Test.assertEquals(canPartition([1, 1, 1, 1]), true)
//Test.assertEquals(canPartition([-1, 1, -1]), true)
//Test.assertEquals(canPartition([-1, 1, 1]), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Uno (Part 2)

//tags: arrays,conditions,games,loops

//url: https://edabit.com/challenge/TGCRiLbcdoTK9uwdZ

//Description:
//This problem is a continuation of Uno Part 1 (although you don't need to complete that problem to complete this one).
//It's your turn to play again. Create a function that takes as its arguments (1) your hand (an array of cards), and (2) the face-up card. In Uno, you are able to play a card from your hand if either:
//One of the card colors in your hand matches the face-up card's color.
//One of the card numbers in your hand matches the face-up card's number.
//Write a function that will return:
//"Uno!" if after playing your card, you are left with a single card.
//"You won!" if after playing your card, you are left with zero cards (an empty array).
//"Keep going..." otherwise.
//Examples
//decision(["yellow 3", "red 3"], "red 10") ➞ "Uno!"
//
//decision(["blue 1"], "blue 5") ➞ "You won!"
//
//decision(["blue 1", "green 2", "yellow 4", "red 2"], "blue 5") ➞ "Keep going..."
//Notes
//There will not be more than one playable card in each hand.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(decision(['yellow 3', 'red 3'], 'red 10'), "Uno!");
//Test.assertEquals(decision(['blue 1'], 'blue 5'), "You won!");
//Test.assertEquals(decision(['red 1'], 'blue 5'), "Uno!");
//Test.assertEquals(decision(['red 1', 'blue 10'], 'blue 5'), "Uno!");
//Test.assertEquals(decision(['red 1', 'blue 10', 'green 7'], 'blue 5'), "Keep going...");
//Test.assertEquals(decision(['red 1', 'green 7'], 'green 2'), "Uno!");
//Test.assertEquals(decision(['green 7'], 'green 2'), "You won!");
//Test.assertEquals(decision(['blue 7'], 'green 7'), "You won!");
//Test.assertEquals(decision(['blue 1', 'green 2', 'yellow 4', 'red 2'], 'blue 5'), "Keep going...");

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Cup Swapping

//tags: algorithms,interview,logic

//url: https://edabit.com/challenge/5DCC9SzA2FTcCTvkd

//Description:
//There are three cups on a table, at positions A, B, and C. At the start, there is a ball hidden under the cup at position B.
//
//However, I perform several swaps on the cups, which is notated as two letters. For example, if I swap the cups at positions A and B, I could notate this as AB or BA.
//Create a function that returns the letter position that the ball is at, once I finish swapping the cups. The swaps will be given to you as an array.
//Worked Example
//cupSwapping(["AB", "CA", "AB"]) ➞ "C"
//
//// Ball begins at position B.
//// Cups A and B swap, so the ball is at position A.
//// Cups C and A swap, so the ball is at position C.
//// Cups A and B swap, but the ball is at position C, so it doesn't move.
//Examples
//cupSwapping(["AB", "CA"]) ➞ "C"
//
//cupSwapping(["AC", "CA", "CA", "AC"]) ➞ "B"
//
//cupSwapping(["BA", "AC", "CA", "BC"]) ➞ "A"
//Notes
//A swap could be notated in two different ways, since both ways end up with the same outcome.
//All swaps will be notated as capital letters and will be valid.
//You cannot swap a cup with itself.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(cupSwapping(['AB', 'CA']), 'C')
//Test.assertEquals(cupSwapping(['AB', 'CA', 'AB']), 'C')
//Test.assertEquals(cupSwapping(['AC', 'CA', 'CA', 'AC']), 'B')
//Test.assertEquals(cupSwapping(['BA', 'AC', 'CA', 'BC']), 'A')
//Test.assertEquals(cupSwapping(['BC', 'CB', 'CA', 'BA']), 'A')
//Test.assertEquals(cupSwapping(['BC']), 'C')
//Test.assertEquals(cupSwapping(['BA', 'CA', 'CB', 'CA']), 'B')
//Test.assertEquals(cupSwapping([]), 'B')
//​
//// Author: Joshua Señoron

