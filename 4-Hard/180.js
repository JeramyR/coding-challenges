

//title: Heroes vs. Monsters: a Role Playing Game Battle System

//tags: conditions,games,logic,loops

//url: https://edabit.com/challenge/WaDov6ktofCzwcRst

//Description:
//You are implementing a battle system for a simple role-playing game. A hero is fighting various monsters, and you have to determine the battle's outcome for each engaged skirmish. Hero and monsters share some stats:
//HP or Health Points: The amount of damage the character can sustain. If it reaches 0 (or less) the character dies.
//ATT or Attack: The character offensive capacity.
//DEF or Defense: The character defensive capacity.
//For either hero and monster, the damage inflicted is calculated subtracting the opponent's defense score from the attacker doubled attack score.
//In each round hero attacks first, and his damage rate is subtracted from the monster's HP. If the monster survives (HP > 0), it is his turn to attack. If the hero survives (HP > 0), a new round starts. The hero can also have some POT, or Healing Potions, in his backpack: only when his HP is equal to or lower than 10, a potion can (and must) be used for regaining 10 HP at the start of a new round. When the hero heals, he can't attack, but he receives only half damage from the monster's attack. Every potion can be used only once, then it must be discarded.
//Given an object containing the character's stats (with p-prefix ones being the hero's stats and m-prefix ones being the monster's) you must return a string:
//"Victory in x rounds" if the hero wins.
//"Game Over in x rounds" if the monster wins.
//(with x being the number of rounds elapsed)
//Examples
//battle({
//  pHP: 12,
//  pATT: 10,
//  pDEF: 10,
//  pPOT: 0,
//  mHP: 20,
//  mATT: 6,
//  mDEF: 14
//}) ➞ "Victory in 4 rounds"
//
//// Hero's damage rate = (10 * 2) - 14 = 6
//// Monster's damage rate = (6 * 2) - 10 = 2
//// Round 1: mHP - 6 = 14, pHP - 2 = 10
//// Round 2: No potions to use! mHP - 6 = 8, pHP - 2 = 8
//// Round 3: mHP - 6 = 2, pHP - 2 = 6
//// Round 4: mHP - 6 = -4 ... monster is dead
//
//battle({
//  pHP: 10,
//  pATT: 10,
//  pDEF: 10,
//  pPOT: 2,
//  mHP: 10,
//  mATT: 8,
//  mDEF: 14
//}) ➞ "Victory in 3 rounds"
//
//// Hero's damage = 6, monster's damage = 6
//// Round 1: mHp - 6 = 4, pHP - 6 = 4
//// Round 2: Player uses a potion, heals 10 HP, receive half the monster damage, pHP = 11
//// Round 3: mHP - 6 = -2 ... monster is dead
//
//battle({
//  pHP: 12,
//  pATT: 7,
//  pDEF: 6,
//  pPOT: 2,
//  mHP: 30,
//  mATT: 8,
//  mDEF: 10
//}) ➞ "Game Over in 5 rounds"
//
//// Hero's damage rate = 4, Monster's damage rate = 10
//// Round 1: mHP - 4 = 26, pHP - 10 = 2
//// Round 2: Hero heals 10 hp, monster hit for 5 HP, pHP = 7
//// Round 3: Hero heals 10 hp, monster hit for 5 HP, pHP = 12
//// Round 4: mHP - 4 = 22, pHP - 10 = 2
//// Round 5: No potions to use! mHP - 4 = 18, pHP - 10 = -8 ... hero is dead
//Notes
//Hero attacks (or heals) first in each round.
//A potion must be used when HP is equal to or less than 10, except on the first round.
//When the hero uses a potion, he can't attack the monster in the same round, but he can defend from the monster's attack, receiving only half the damage.
//Remember to discard the potion after using it.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(battle({pHP: 10, pATT: 10, pDEF: 10, pPOT: 0, mHP: 20, mATT: 6, mDEF: 14}), "Victory in 4 rounds", "Example #1")
//Test.assertEquals(battle({pHP: 10, pATT: 10, pDEF: 10, pPOT: 2, mHP: 10, mATT: 8, mDEF: 14}), "Victory in 3 rounds", "Example #2")
//Test.assertEquals(battle({pHP: 12, pATT: 7, pDEF: 6, pPOT: 2, mHP: 30, mATT: 8, mDEF: 10}), "Game Over in 5 rounds", "Example #3")
//Test.assertEquals(battle({pHP: 100, pATT: 12, pDEF: 8, pPOT: 3, mHP: 200, mATT: 14, mDEF: 8}), "Game Over in 5 rounds")
//Test.assertEquals(battle({pHP: 300, pATT: 5, pDEF: 4, pPOT: 0, mHP: 120, mATT: 10, mDEF: 6}), "Game Over in 19 rounds")
//Test.assertEquals(battle({pHP: 1480, pATT: 16, pDEF: 16, pPOT: 4, mHP: 860, mATT: 14, mDEF: 20}), "Victory in 72 rounds")
//Test.assertEquals(battle({pHP: 230, pATT: 3, pDEF: 20, pPOT: 2, mHP: 140, mATT: 12, mDEF: 4}), "Game Over in 64 rounds")
//Test.assertEquals(battle({pHP: 90, pATT: 9, pDEF: 10, pPOT: 8, mHP: 300, mATT: 8, mDEF: 4}), "Victory in 29 rounds")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Change the Word

//tags: logic,strings

//url: https://edabit.com/challenge/xjgWvHzofoufpKxjF

//Description:
//Given a string, reverse its order, change lowercase letters to uppercase and increment uppercase letters by one (e.g. A becomes B, C becomes D, Z becomes A).
//Examples
//changeString("ApPle") ➞ "ELQPB"
//
//changeString("draGON") ➞ "OPHARD"
//
//changeString("ZebrA") ➞ "BRBEA"
//Notes
//Remember capital "Z" becomes "A".

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(changeString("ApPle"), "ELQPB")
//Test.assertEquals(changeString("draGON"), "OPHARD")
//Test.assertEquals(changeString("ZebrA"),  "BRBEA")
//Test.assertEquals(changeString("sNaKe"), "ELAOS")
//Test.assertEquals(changeString("MElon"), "NOLFN")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Increasing Word Weights

//tags: arrays,language_fundamentals,strings,validation

//url: https://edabit.com/challenge/HCc5AiPdjjREC7jRP

//Description:
//The weight of an English word can be calculated by summing the ASCII code point for each character in the word, excluding any punctuation:
//"Wouldn't" = 87 + 111 + 117 + 108 + 100 + 110 + 116 = 749
//Write a function that takes a sentence as a string, returning true if all word weights increase for each word in the sentence, and false if any word weight decreases or remains the same.
//Examples
//increasingWordWeights("Why not try?") ➞ true
//// 312 -> 337 -> 351 (weights increase)
//
//increasingWordWeights("All other roads.") ➞ false
//// 281 -> 546 -> 537 (537 is less than 546)
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(increasingWordWeights("Why not try?"), true)
//Test.assertEquals(increasingWordWeights("Face your fears, never settle."), true)
//Test.assertEquals(increasingWordWeights("DON'T SHOUT!"), true)
//Test.assertEquals(increasingWordWeights("Can you just leave?"), true)
//Test.assertEquals(increasingWordWeights("You will push ahead, creating solutions!"), true)
//Test.assertEquals(increasingWordWeights("All that money doesn't guarantee happiness."), true)
//Test.assertEquals(increasingWordWeights("Full steam ahead!"), false)
//Test.assertEquals(increasingWordWeights("Not all those who wander are lost."), false)
//Test.assertEquals(increasingWordWeights("All other roads."), false)
//Test.assertEquals(increasingWordWeights("Whatever you are, be a good one."), false)
//Test.assertEquals(increasingWordWeights("Standing on the shoulders of giants."), false)
//Test.assertEquals(increasingWordWeights("You get what you settle for."), false)
//Test.assertEquals(increasingWordWeights("Inconceivable!"), true)

