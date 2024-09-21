

//title: Longest Abecedarian Word

//tags: arrays,loops,strings

//url: https://edabit.com/challenge/4cvBphZgxvGTdc3F7

//Description:
//An abecedarian word is a word where all of its letters are arranged in alphabetical order. Examples of these words include:
//Empty
//Forty
//Almost
//Given an array of words, create a function which returns the longest abecedarian word. If no word in an array matches the criterea, return an empty string.
//Examples
//longestAbecedarian(["ace", "spades", "hearts", "clubs"]) ➞ "ace"
//
//longestAbecedarian(["forty", "choppy", "ghost"]) ➞ "choppy"
//
//longestAbecedarian(["one", "two", "three"]) ➞ ""
//Notes
//All words will be given in lowercase.
//If two abecedarian words have the same length, return the word which appeared first in the array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(longestAbecedarian(["ace", "spades", "hearts", "clubs"]), "ace")
//Test.assertEquals(longestAbecedarian(["forty", "choppy", "ghost"]), "choppy")
//Test.assertEquals(longestAbecedarian(["one", "two", "three"]), "")
//Test.assertEquals(longestAbecedarian(["almost", "accept", "access"]), "almost")
//Test.assertEquals(longestAbecedarian(["aa", "bbb", "cccc"]), "cccc")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Dungeon Gold Farming

//tags: arrays,data_structures,games,logic,recursion

//url: https://edabit.com/challenge/Cz4CtwJPqS5zxugCr

//Description:
//In the role-playing game EdaQuest (no official affiliation with Edabit), a particular dungeon has a bunch of rooms designated by the grid. Each room in the dungeon is represented by an object with two properties:
//m: The amount of damage done by the monster lurking in that room.
//g: The amount of gold available for you to collect in that room.
//You enter the dungeon, from any room at the edge of the dungeon, with a certain amount of health hp. During each turn, you:
//Can go to any room (north, east, south, or west) as long as that room exists and has not yet been visited.
//Collect the gold in that room.
//Fight the monster in that room, losing health equivalent to the monster's value.
//
//If your health is then less than or equal to 0, you die. Otherwise, continue.
//
//Instructions
//
//Given a dungeon grid and a starting health hp, write the function dungeonCrawl(grid, hp) to determine the maximum amount of gold you could obtain by entering the grid at any of the edge rooms (see note below) and continuing until you can no longer make a move.
//Return this maximum gold. If you cannot obtain any gold from the dungeon (or if you cannot survive the dungeon), return 0.
//Examples
//dungeonCrawl([[{ g: 0, m: 3 }]], 6) ➞ 0
//
//// You enter the one-room dungeon, but there is no gold.
//// Fortunately, you survive. What a waste of time!
//dungeonCrawl([[{ g: 6, m: 2 }]], 5) ➞ 6
//
//// You enter the one-room dungeon, grab your 6 gold, and
//// leave with 6 gold and 5-2 = 3 health.
//dungeonCrawl([
//  [{ g: 5 }, { g: 0 }, { g: 8 }],
//  [{ g: 4, m: 5 }, { g: 7 }, { g: 7, m: 4 }],
//  [{ g: 1 }, { g: 5, m: 4 }, { g: 0 }],
//  [{ g: 1, m: 4 }, { g: 0 }, { g: 0 }]
//], 10) ➞ 32
//
//// The best path produces 32 gold.
//dungeonCrawl([
//  [{ g: 5, m: 6 }, { g: 2, m: 1 }],
//  [{ g: 4, m: 10 }, { g: 1, m: 1 }]
//], 1) ➞ 0
//
//// You can't survive any room in this dungeon with only 1 hp!
//dungeonCrawl([
//  [{ g: 2 }, { g: 4, m: 3 }, { g: 7, m: 3 }],
//  [{ g: 2 }, { g: 1, m: 1 }, { g: 1, m: 4 }],
//  [{ g: 8 }, { g: 9, m: 4 }, { g: 5 }],
//  [{ g: 1 }, { g: 3, m: 1 }, { g: 1 }]
//], 5) ➞ 18
//
//// Note that the maximum available gold in the dungeon is 44,
//// but you cannot survive long enough to get all of that gold!
//Notes
//Monsters vs Gold: If a monster kills you, it doesn't matter how much gold you've collected; You're dead! As such, even if adding that room's gold would increase your "best path" gold, don't add it! In other words, if your current "best path" is 20 gold, you're at 19 gold and 4 health, and this room is:
//{
//  m: 6,
//  g:5
//}
//then your "best path" should not be updated to 24 gold (you died before collecting that gold!).
//Edge Rooms: To reiterate, you must enter the dungeon from one of the rooms at the edge of that dungeon. So if your dungeon is a 3x3 dungeon, for example, you could enter via any room other than the room at position (1, 1) (the "middle" room):
//[
//  [yes, yes, yes],
//  [yes, no, yes],
//  [yes, yes, yes]
//]
//Health Potions: The dungeon crafters are cheap and there is no health restore potions. So once you lose health points, that's it!
//Updates:
//I realized (thanks to some awesome commenters!) that my old code makes some mistakes. I've (hopefully) updated, which unfortunately means some of the old solutions no longer work. Here's some hints for those who were making the same mistake I was:
//You do not have to hit every cell, and can "stop" at any time.
//Namely, if the next move would kill you and you have a really high amount of coin, stop there!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const cases = [{
//    d: [[{ g: 0, m: 3 }]],
//    h: 6,
//    e: 0,
//    m:'a cheap dungeon (no gold!)'
//}, {
//    d: [[{ g: 6, m: 2 }]],
//    h: 5,
//    e: 6,
//    m:'a simple dungeon with some gold'
//}, {
//    d: [
//        [{ g: 5 }, { g: 0 }, { g: 8 }],
//        [{ g: 4, m: 5 }, { g: 7 }, { g: 7, m: 4 }],
//        [{ g: 1 }, { g: 5, m: 4 }, { g: 0 }],
//        [{ g: 1, m: 4 }, { g: 0 }, { g: 0 }]
//    ],
//    h: 10,
//    e: 33,
//    m:'a bit of a bigger dungeon'
//}, {
//    d: [
//        [{ g: 5, m: 6 }, { g: 2, m: 1 }],
//        [{ g: 4, m: 10 }, { g: 1, m: 1 }]
//    ],

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Maneuvering in a Cave

//tags: arrays,logic,math

//url: https://edabit.com/challenge/T9W43c8JZdE9AsRQr

//Description:
//Create a function that returns the count of all possible paths from top left to bottom right of an m * n matrix with the constraints that from each cell you can either move to the right or down.
//Examples
//calc(2, 2) ➞ 2
//
//calc(3, 3) ➞ 6
//
//calc(4, 4) ➞ 20
//Note:
//m may not be equal to n.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(calc(2, 2), 2)
//Test.assertEquals(calc(3, 3), 6)
//Test.assertEquals(calc(4, 4), 20)
//Test.assertEquals(calc(2, 1), 1)
//Test.assertEquals(calc(2, 3), 3)
//Test.assertEquals(calc(4, 2), 4)
//Test.assertEquals(calc(3, 4), 10)
//Test.assertEquals(calc(5, 4), 35)
//Test.assertEquals(calc(5, 5), 70)

