

//title: Paint the Walls

//tags: math,objects

//url: https://edabit.com/challenge/2p2sdgq39fysByKba

//Description:
//Given a predetermined rate from an object, write the function that will return the time it takes for a certain amount of people to paint a certain amount of walls. Return the minutes as an integer.
//The "rate" object shows how many minutes it takes "people" people to paint "walls" walls. At that same rate, how long should it take based on the new variables. Return the minutes as an integer. No rounding is necessary.
//Example
//// It takes 22 minutes for 10 people to paint 10 walls.
//// How many minutes does it take 14 people to paint 14 walls?
//
//let rate = {
//  people: 10,
//  walls: 10,
//  minutes: 22
//}
//
//time(rate, people, walls) ➞ 22
//Notes
//Check the Resources tab if you get stuck.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const rate = {
//  people: 4,
//   walls: 9,
//   minutes: 63 
//}
//const rate2 = {
//  people: 10,
//  walls: 10,
//  minutes: 22
//}
//​
//Test.assertEquals(time(rate, 7, 4), 16)
//Test.assertEquals(time(rate2, 10, 10), 22)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Factorial of Factorials

//tags: language_fundamentals,loops,math,numbers

//url: https://edabit.com/challenge/78Dfz94FP7SCiJFyo

//Description:
//Create a function that takes an integer n and returns the factorial of factorials. See below examples for a better understanding:
//Examples
//factFact(4) ➞ 288
//// 4! * 3! * 2! * 1! = 288
//
//factFact(5) ➞ 34560
//
//factFact(6) ➞ 24883200
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(factFact(4), 288),
//Test.assertEquals(factFact(1), 1),
//Test.assertEquals(factFact(5), 34560),
//Test.assertEquals(factFact(2), 2),
//Test.assertEquals(factFact(6), 24883200),
//Test.assertEquals(factFact(3), 12),
//Test.assertEquals(factFact(14), 69113789582492712943486800506462734562847413501952000000000000000),
//Test.assertEquals(factFact(11), 265790267296391946810949632000000000),
//Test.assertEquals(factFact(7), 125411328000),
//Test.assertEquals(factFact(13), 792786697595796795607377086400871488552960000000000000),
//Test.assertEquals(factFact(8), 5056584744960000),
//Test.assertEquals(factFact(10), 6658606584104736522240000000),
//Test.assertEquals(factFact(9), 1834933472251084800000),
//Test.assertEquals(factFact(12), 127313963299399416749559771247411200000000000 ),
//Test.assertEquals(factFact(15), 90378331112371142262979521568630736335023247731599748366336000000000000000000 ),
//Test.assertEquals(factFact(16), 1890966832292234727042877370627225068196418587883634153182519380410368000000000000000000000 ),
//Test.assertEquals(factFact(17), 672593129192865130334217631473916658864122332882577979675277211683839238972899328000000000000000000000000 ),
//Test.assertEquals(factFact(18), 4306192564997715382115598640379294845786123319603755168023536027873932927153136831171640950784000000000000000000000000000 ),
//Test.assertEquals(factFact(19), 523827226948912906162136183269887782788685420217963126789982275317725639664591791615428617583779071590924288000000000000000000000000000000 )
////Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Uno (Part 1)

//tags: arrays,games

//url: https://edabit.com/challenge/4hyR7qsvSRCLBXDCz

//Description:
//This question is inspired by the popular Uno card game.
//Write a function that takes in two arguments: (1) a player's current hand and (2) the current face-up card on the table. The function will return true if the player can make a play, or false if the player has to draw from the deck.
//A player can make a play if either:
//They have a card that is the same color as the face-up card.
//They have a card that is the same number as the face-up card.
//canPlay(["yellow 3", "yellow 7", "blue 8", "red 9", "red 2"], "red 1") => true
//// Since the player has two red cards, and the face-up card is red.
//
//canPlay(["yellow 3", "yellow 7"], "blue 7") => true
//// Since the player has a 7, and the face-up card is a 7.
//Examples
//canPlay(["yellow 3", "yellow 5", "red 8"], "red 2") ➞ true
//
//canPlay(["yellow 3", "yellow 5", "red 8"], "blue 5") ➞ true
//
//canPlay(["yellow 3", "blue 5", "red 8", "red 9"], "green 4") ➞ false
//
//canPlay(["yellow 3", "red 8"], "green 2") ➞ false
//Notes
//Return false if the player is not holding any cards (an empty array).
//There are no special cards or wild cards in this deck.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(canPlay(['yellow 3', 'yellow 5', 'red 8'], 'red 2'), true);
//Test.assertEquals(canPlay(['yellow 3', 'yellow 5', 'red 8'], 'blue 5'), true);
//Test.assertEquals(canPlay(['yellow 3', 'blue 5', 'red 8', 'red 9'], 'green 4'), false);
//Test.assertEquals(canPlay(['yellow 3', 'red 8'], 'green 2'), false);
//Test.assertEquals(canPlay(['yellow 5', 'yellow 8', 'red 0', 'blue 0', 'green 4'], 'green 2'), true);
//Test.assertEquals(canPlay([], 'green 2'), false);
//Test.assertEquals(canPlay(['red 2'], 'red 0'), true);
//Test.assertEquals(canPlay(['red 2', 'red 8', 'red 5'], 'blue 1'), false);

