

//title: Climbing the Leaderboard

//tags: algorithms,arrays

//url: https://edabit.com/challenge/9y96zuMKtMDYnJCEc

//Description:
//An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its leaderboard works like this:
//The player with the highest score is ranked number 1 on the leaderboard.
//Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.
//Create a function that takes two arrays of integers.
//ranked[[100, 90, 90, 80]]
//player[[70, 80, 105]]
//The ranked players will have ranks 1, 2, 2, and 3, respectively. If the player's scores are 70, 80 and 105, their rankings after each game are 4th, 3rd , and 1st. Return [[4,3,1]].
//Explanation
//climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]) ➞ [6, 4, 2, 1]
//Alice starts playing with 7 players already on the leaderboard, which looks like this: 
//After Alice finishes game 0, her score is 5 and her ranking is 6: 
//After Alice finishes game 1, her score is 25 and her ranking is 4: 
//After Alice finishes game 2, her score is 50 and her ranking is tied with Caroline at 2: 
//After Alice finishes game 3, her score is 120 and her ranking is 1: 
//Examples
//climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]) ➞ [6, 5, 4, 2, 1]
//
//climbingLeaderboard([80, 80, 80, 75, 70, 60, 60, 60], [70, 72, 78, 88]) ➞ [3, 3, 2, 1]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]), [6, 4, 2, 1])
//Test.assertSimilar(climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]), [6, 5, 4, 2, 1])
//Test.assertSimilar(climbingLeaderboard([80, 80, 80, 75, 70, 60, 60, 60], [70, 72, 78, 88]), [3, 3, 2, 1])
//Test.assertSimilar(climbingLeaderboard([120, 99, 95, 90, 89, 70, 60, 60, 50, 50], [65, 90, 150]), [7, 4, 1])
//Test.assertSimilar(climbingLeaderboard([500, 400, 300, 200, 150, 50], [40, 90, 150]), [7, 6, 5])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: BFS Chess!

//tags: algorithms,games

//url: https://edabit.com/challenge/JAihKzAwjFb2BL8cx

//Description:
//You will be given the location of a knight, and an end location. The knight can move in a "L" shape. "L" shape movement means that the knight can change it's x coordinate by 2 and it's y coordinate by 1 or it can change it's y coordinate by 2 and it's x coordinate by 1 (you can add and subtract from the x/y).
//For example, if the knight is at the position (0, 0), it can move to:
//(1,2), (1,-2), (2,1), (2,-1), (-1,2), (-1,-2), (-2,1), (-2, -1)
//Your job is to return the least amount of steps needed to go from the position K (knight's start position) to E (end). You will only be given the knight starter coordinates (x1, y1) and the end coordinates (x2, y2).
//Constrains: 1 <= x1,y1,x2,y2 <= 8
//Examples
//knightBFS(1, 1, 8, 8) ➞ 6
//
//knightBFS(1, 1, 3, 2) ➞ 1
//
//knightBFS(8, 8, 3, 3) ➞ 4
//Notes
//This is a simplified version of this problem.
//This travel will always be possible.
//The chess board is 8x8.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(knightBFS(1, 1, 8, 8), 6)
//Test.assertEquals(knightBFS(1, 1, 3, 2), 1)
//Test.assertEquals(knightBFS(8, 8, 3, 3), 4)
//Test.assertEquals(knightBFS(5, 5, 7, 1), 2)
//Test.assertEquals(knightBFS(4, 8, 1, 1), 4)
//Test.assertEquals(knightBFS(1, 1, 1, 2), 3)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Smallest Number

//tags: math,numbers

//url: https://edabit.com/challenge/GvApoCa5meP29r3dc

//Description:
//Given a positive integer n, implement a function that finds the smallest number that is evenly divisible by the integers 1 through n inclusive.
//Examples
//smallest(1) ➞ 1
//
//smallest(5) ➞ 60
//
//smallest(10) ➞ 2520
//
//smallest(20) ➞ 232792560
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(smallest(1), 1n)
//Test.assertEquals(smallest(10), 2520n)
//Test.assertEquals(smallest(17), 12252240n)
//Test.assertEquals(smallest(31), 72201776446800n)
//Test.assertEquals(smallest(99), 69720375229712477164533808935312303556800n)
//Test.assertEquals(smallest(100), 69720375229712477164533808935312303556800n)
//Test.assertEquals(smallest(101), 7041757898200960193617914702466542659236800n)

